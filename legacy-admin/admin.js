(function () {
  "use strict";
  var $ = function (id) { return document.getElementById(id); };
  // v94: no password is kept in the page any more - login gives a 12-hour session cookie (HttpOnly) and every request sends "x-kl-admin: 1"
  try { sessionStorage.removeItem("kr-admin"); } catch (e) {} // the old page kept the password here: wipe it
  var D = null, cur = null, dirty = false, ARCH = null, LOGGED = false;
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  function api(path, body) {
    return fetch(path, { method: body === undefined ? "GET" : "POST", credentials: "same-origin", headers: { "content-type": "application/json", "x-kl-admin": "1" }, body: body === undefined ? undefined : JSON.stringify(body), cache: "no-store" })
      .then(function (r) { return r.json().catch(function () { return { ok: false, error: "HTTP " + r.status }; }).then(function (j) { j.status = r.status; if (r.status === 401 && j.relogin && LOGGED && path !== "/api/login") expired(); return j; }); });
  }
  function msg(id, text, err) { var m = $(id); m.textContent = text; m.className = "msg" + (err ? " err" : ""); }
  function setDirty(v) { dirty = v; msg("status", v ? "יש שינויים שלא נשמרו" : "", false); }
  window.addEventListener("beforeunload", function (e) { if (dirty) { e.preventDefault(); e.returnValue = ""; } });

  function lockMsg(r) { return r.message || ("יותר מדי ניסיונות – נסה שוב בעוד " + (r.minutes || 15) + " דקות"); }
  function showLogin(text, err) { LOGGED = false; $("app").hidden = true; $("login").hidden = false; msg("login-msg", text || "", !!err); var pw = $("pw"); if (pw) { pw.value = ""; pw.focus(); } }
  function expired() { if (!LOGGED) return; showLogin(dirty ? "הכניסה פגה (12 שעות) – היכנס שוב. השינויים שלא נשמרו עדיין בדף; אחרי הכניסה לחץ “שמור ופרסם”." : "הכניסה פגה (12 שעות) – היכנס שוב.", true); }
  function enter() {
    return fetch("/api/data", { cache: "no-store", credentials: "same-origin", headers: { "x-kl-admin": "1" } }).then(function (r) { return r.json(); }).then(function (d) {
      if (!D || !dirty) { D = d; delete D.archive; renderList(); fillTexts(); loadArchive(); } // a re-login after expiry keeps unsaved edits
      LOGGED = true; $("login").hidden = true; $("app").hidden = false;
    });
  }
  function login(pw) {
    msg("login-msg", "בודק…");
    return api("/api/login", { password: pw }).then(function (r) {
      if (r.status === 429) { msg("login-msg", lockMsg(r), true); return; }
      if (!r.ok) { msg("login-msg", r.status === 401 ? "סיסמה שגויה" : "שגיאה: " + (r.error || r.status), true); return; }
      msg("login-msg", ""); $("pw").value = "";
      return enter();
    }).catch(function (e) { msg("login-msg", "אין חיבור לשרת: " + e, true); });
  }
  $("login-form").addEventListener("submit", function (e) { e.preventDefault(); login($("pw").value); });
  api("/api/session").then(function (r) { if (r.ok) enter(); }).catch(function () {}); // still signed in (cookie) -> straight in
  $("logout").addEventListener("click", function () {
    if (dirty && !confirm("יש שינויים שלא נשמרו. לצאת בכל זאת?")) return;
    api("/api/logout", {}).then(function () { dirty = false; D = null; ARCH = null; showLogin("יצאת מהניהול.", false); });
  });

  function hasHe(p) { return !!(p.he && p.he.name && String(p.he.name).trim()); }
  function name(p) { return (p.he && p.he.name) || (p.en && p.en.name) || (p.ru && p.ru.name) || p.brand || p.id; }
  function renderList() {
    var q = $("filter").value.toLowerCase(), nophoto = $("f-nophoto").checked;
    var ul = $("plist"); ul.textContent = ""; var n = 0;
    D.products.forEach(function (p) {
      if (nophoto && p.img) return;
      if (q && JSON.stringify([p.brand, p.he, p.en, p.ru]).toLowerCase().indexOf(q) < 0) return;
      n++;
      var li = el("li"), b = el("button"); b.type = "button"; if (cur === p) b.className = "on";
      if (p.img) { var im = new Image(); im.src = p.img; im.alt = ""; im.loading = "lazy"; b.appendChild(im); } else b.appendChild(el("span", "ph", "📷"));
      var s = el("span"); s.appendChild(el("span", "", name(p))); s.appendChild(el("small", "", (hasHe(p) ? "" : "⚠️ צריך שם בעברית · ") + (p.brand || "") + " · " + p.id)); b.appendChild(s);
      b.addEventListener("click", function () { edit(p); });
      li.appendChild(b); ul.appendChild(li);
    });
    $("list-count").textContent = n + " / " + D.products.length + " מוצרים";
  }
  ["filter", "f-nophoto"].forEach(function (id) { $(id).addEventListener("input", renderList); });

  function kwStr(k) { return Array.isArray(k) ? k.join(", ") : (k || ""); }
  function kwArr(v) { var seen = {}; return String(v || "").split(/[,\n]/).map(function (s) { return s.trim().toLowerCase(); }).filter(function (s) { if (!s || seen[s]) return false; seen[s] = 1; return true; }); }
  function field(label, value, onset, opts) {
    opts = opts || {}; var l = el("label", "", label);
    var i = opts.area ? el("textarea") : el("input"); if (!opts.area) i.type = "text";
    i.value = value || ""; if (opts.dir) i.dir = opts.dir; if (opts.dir === "auto") i.setAttribute("dir", "auto");
    i.addEventListener("input", function () { onset(i.value); setDirty(true); });
    l.appendChild(i); return l;
  }
  function langBlock(p, lang, title, dir) {
    var fs = el("fieldset"); fs.appendChild(el("legend", "", title));
    var o = p[lang] || {};
    var set = function (k) { return function (v) { p[lang] = p[lang] || {}; p[lang][k] = v; if (!p[lang].name && !p[lang].details) p[lang] = null; }; };
    fs.appendChild(field("שם המוצר", o.name, set("name"), { dir: dir }));
    fs.appendChild(field("פרטים", o.details, set("details"), { area: true, dir: dir }));
    fs.appendChild(field("טקסט קצר לכרטיס (לא חובה – למוצרים טבעיים; ריק = הפרטים אם קצרים, אחרת “כפוף לפרטים”)", o.card, set("card"), { dir: dir }));
    return fs;
  }
  function edit(p) {
    cur = p; renderList(); $("settings").hidden = true; if ($("stats") && !$("stats").hidden) showStats(false); showArchive(false);
    var E = $("editor"); E.textContent = "";
    E.appendChild(el("h2", "", name(p)));
    if (!hasHe(p)) E.appendChild(el("p", "need-he", "⚠️ צריך שם בעברית – מוצר בלי שם בעברית לא יופיע באתר. מלא את השם בחלק “עברית” למטה ולחץ “שמור ופרסם”."));
    var ib = el("div", "imgbox"), im = new Image(); im.alt = ""; if (p.img) im.src = p.img; ib.appendChild(im);
    var up = el("label", "btn2 file", "📷 העלה תמונה"); var fi = el("input"); fi.type = "file"; fi.accept = "image/*"; fi.hidden = true; up.appendChild(fi);
    fi.addEventListener("change", function () { if (fi.files[0]) upload(fi.files[0], p, im); });
    ib.appendChild(up);
    var rm = el("button", "btn2", "הסר תמונה"); rm.type = "button"; rm.addEventListener("click", function () { p.img = null; delete p.imgSrc; delete p.imgIllustrative; im.removeAttribute("src"); setDirty(true); renderList(); }); ib.appendChild(rm);
    E.appendChild(ib);
    var ilw = el("label", "small"), ilc = document.createElement("input"); ilc.type = "checkbox"; ilc.checked = !!p.imgIllustrative; // v64: illustrative photo flag
    ilc.addEventListener("change", function () { if (ilc.checked) p.imgIllustrative = true; else delete p.imgIllustrative; setDirty(true); });
    ilw.appendChild(ilc); ilw.appendChild(document.createTextNode(" תמונה להמחשה – מציג באתר „ייתכן הבדל בין המוצר לתמונה”")); E.appendChild(ilw);
    var ib2 = el("div", "imgbox"), im2 = new Image(); im2.alt = ""; if (p.img2) im2.src = p.img2; ib2.appendChild(im2);
    ib2.appendChild(el("span", "small", "תמונה נוספת (למשל סמל כשרות מקרוב) – מוצגת בחלון המוצר"));
    var up2 = el("label", "btn2 file", "📷 העלה תמונה נוספת"); var fi2 = el("input"); fi2.type = "file"; fi2.accept = "image/*"; fi2.hidden = true; up2.appendChild(fi2);
    fi2.addEventListener("change", function () { if (fi2.files[0]) upload(fi2.files[0], p, im2, "img2"); });
    ib2.appendChild(up2);
    var rm2 = el("button", "btn2", "הסר תמונה נוספת"); rm2.type = "button"; rm2.addEventListener("click", function () { delete p.img2; im2.removeAttribute("src"); setDirty(true); }); ib2.appendChild(rm2);
    E.appendChild(ib2);
    var r = el("div", "row2");
    var cl = el("label", "", "קטגוריה"), cs = el("select");
    D.categories.forEach(function (c) { var o = el("option", "", c.icon + " " + c.he + " / " + c.en); o.value = c.id; cs.appendChild(o); });
    cs.value = p.cat; cs.addEventListener("change", function () { p.cat = cs.value; setDirty(true); }); cl.appendChild(cs); r.appendChild(cl);
    r.appendChild(field("מותג / חברה", p.brand, function (v) { p.brand = v || null; }, { dir: "auto" }));
    E.appendChild(r);
    var r2 = el("div", "row2");
    r2.appendChild(field("סמלי כשרות (מופרדים בפסיק)", (p.symbols || []).join(", "), function (v) { p.symbols = v.split(",").map(function (s) { return s.trim(); }).filter(Boolean); }, { dir: "ltr" }));
    r2.appendChild(field("חנויות (מופרדות בפסיק)", (p.stores || []).join(", "), function (v) { p.stores = v.split(",").map(function (s) { return s.trim(); }).filter(Boolean); }, { dir: "ltr" }));
    E.appendChild(r2);
    var r3 = el("div", "row2 approval-src"); /* v52 (Akiva 2026-11-09 12:16): internal only - the source of the approval for a product approved without a symbol; never shown on the site */
    r3.appendChild(field("מקור האישור (פנימי – לא מוצג באתר)", p.approvalSource, function (v) { v = String(v || "").trim(); if (v) p.approvalSource = v; else delete p.approvalSource; }, { dir: "auto" }));
    E.appendChild(r3);
    var r4 = el("div", "row2 search-kw"); /* v56 (Akiva 2026-11-09 13:54): hidden search keywords - used by the site search only, never shown */
    r4.appendChild(field("מילות חיפוש (פנימי – לא מוצג באתר) – מופרדות בפסיק", kwStr(p.searchKeywords), function (v) { var a = kwArr(v); if (a.length) p.searchKeywords = a; else delete p.searchKeywords; }, { area: true, dir: "auto" }));
    E.appendChild(r4);
    var r5 = el("div", "row2 popularity"); /* v68 (Akiva 2026-11-09 19:20): hidden popularity score 0-100 - used only by the "Popular" sort, never shown */
    r5.appendChild(field("פופולריות (פנימי – 0 עד 100, למיון \"פופולריות\", לא מוצג באתר; שינוי ידני לא יידרס בעדכון השבועי, שדה ריק = חזרה לאוטומטי)", p.popularity == null ? "" : String(p.popularity), function (v) { popSet(p, v); }, { dir: "ltr" }));
    r5.appendChild(el("p", "small pop-note", popNote(p))); /* v73 */
    E.appendChild(r5);
    var ch = el("div", "checks");
    [["natural", "מוצר טבעי (בלי השגחה)"], ["notMehadrin", "כשר בלבד – לא למהדרין"], ["outOfStock", "חסר במלאי (עובר לעמוד “מוצרים שהיו בעבר”)"], ["condApply", "ⓘ כפוף לפרטים (בלי סמל, במקום \"מאושר כפי שהוא\")"], ["storePage", "🛍 מוצר של החנות הכשרה שאינו מזון (מוצג רק בדף \"מוצרי החנות הכשרה\")"], ["symPopupOnly", "סמל הכשרות רק בפרטי המוצר (לא בכרטיס)"]].forEach(function (x) {
      var l = el("label"), c = el("input"); c.type = "checkbox"; c.checked = !!p[x[0]]; c.addEventListener("change", function () { p[x[0]] = c.checked; setDirty(true); }); l.appendChild(c); l.appendChild(document.createTextNode(x[1])); ch.appendChild(l);
    });
    if (p.review && p.review.length) { var l2 = el("label"), c2 = el("input"); c2.type = "checkbox"; c2.checked = false; c2.addEventListener("change", function () { p.review = c2.checked ? [] : p.review; setDirty(true); }); l2.appendChild(c2); l2.appendChild(document.createTextNode("בדקתי – להוריד מרשימת הבדיקה (" + p.review.join(", ") + ")")); ch.appendChild(l2); }
    E.appendChild(ch);
    E.appendChild(langBlock(p, "he", "עברית", "rtl"));
    E.appendChild(langBlock(p, "en", "English", "ltr"));
    E.appendChild(langBlock(p, "ru", "Русский", "ltr"));
    var del = el("button", "btn2 danger", "🗑 מחק מוצר"); del.type = "button";
    var ask = el("div", "del-ask"); ask.hidden = true;
    ask.appendChild(el("p", "", "להוריד את “" + name(p) + "” מהאתר? מומלץ להעביר לארכיון – אפשר להחזיר אותו בכל זמן."));
    var toA = el("button", "btn", "📦 העבר לארכיון"); toA.type = "button";
    var hard = el("button", "btn2 danger", "מחק לצמיתות"); hard.type = "button";
    var cancel = el("button", "btn2", "ביטול"); cancel.type = "button";
    ask.appendChild(toA); ask.appendChild(hard); ask.appendChild(cancel);
    del.addEventListener("click", function () { ask.hidden = false; del.hidden = true; toA.focus(); });
    cancel.addEventListener("click", function () { ask.hidden = true; del.hidden = false; });
    toA.addEventListener("click", function () { if (!archiveProduct(p)) return; cur = null; E.textContent = ""; E.appendChild(el("p", "muted", "“" + name(p) + "” הועבר לארכיון 📦 – לחץ “שמור ופרסם”.")); });
    hard.addEventListener("click", function () { if (!confirm("למחוק את “" + name(p) + "” לצמיתות? אי אפשר יהיה להחזיר.")) return; D.products.splice(D.products.indexOf(p), 1); cur = null; E.textContent = ""; setDirty(true); renderList(); });
    E.appendChild(del); E.appendChild(ask);
  }
  function upload(file, p, im, slot) {
    slot = slot || "img";
    msg("status", "מעלה תמונה…");
    var img = new Image(), fr = new FileReader();
    fr.onload = function () { img.onload = function () {
      var max = 700, w = img.width, h = img.height, k = Math.min(1, max / Math.max(w, h));
      var c = document.createElement("canvas"); c.width = Math.round(w * k); c.height = Math.round(h * k);
      var x = c.getContext("2d"); x.fillStyle = "#fff"; x.fillRect(0, 0, c.width, c.height); x.drawImage(img, 0, 0, c.width, c.height);
      api("/api/upload", { id: p.id, dataUrl: c.toDataURL("image/jpeg", 0.82) }).then(function (r) {
        if (!r.ok) { msg("status", "העלאה נכשלה: " + (r.error || r.status), true); return; }
        if (slot === "img2") p.img2 = r.url; else { p.img = r.url; p.imgSrc = "admin"; delete p.imgIllustrative; if (typeof ilc !== "undefined" && ilc) ilc.checked = false; } im.src = r.url; setDirty(true); renderList(); msg("status", "התמונה הועלתה – לחץ “שמור ופרסם”");
      });
    }; img.src = fr.result; };
    fr.readAsDataURL(file);
  }
  $("new").addEventListener("click", function () {
    var max = 0; D.products.forEach(function (p) { var n = parseInt(String(p.id).replace(/\D/g, ""), 10); if (n > max) max = n; });
    var p = { id: "p" + (max + 1), cat: "pantry", brand: null, symbols: [], notMehadrin: false, outOfStock: false, natural: false, stores: [], img: null, he: { name: "מוצר חדש", details: "" }, en: null, ru: null, review: [] };
    D.products.unshift(p); setDirty(true); edit(p);
  });
  var MONTHS = { he: ["ינואר","פברואר","מרץ","אפריל","מאי","יוני","יולי","אוגוסט","ספטמבר","אוקטובר","נובמבר","דצמבר"], en: ["January","February","March","April","May","June","July","August","September","October","November","December"], ru: ["январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"] };
  var HMONTH = { "Tishri": "תשרי", "Heshvan": "מרחשון", "Kislev": "כסלו", "Tevet": "טבת", "Shevat": "שבט", "Adar": "אדר", "Adar I": "אדר א'", "Adar II": "אדר ב'", "Nisan": "ניסן", "Iyar": "אייר", "Sivan": "סיוון", "Tamuz": "תמוז", "Av": "אב", "Elul": "אלול" };
  function hebNum(n) { n = n % 1000; var L = [[400,"ת"],[300,"ש"],[200,"ר"],[100,"ק"],[90,"צ"],[80,"פ"],[70,"ע"],[60,"ס"],[50,"נ"],[40,"מ"],[30,"ל"],[20,"כ"],[10,"י"],[9,"ט"],[8,"ח"],[7,"ז"],[6,"ו"],[5,"ה"],[4,"ד"],[3,"ג"],[2,"ב"],[1,"א"]], s = ""; while (n > 0) { if (n === 15) { s += "טו"; break; } if (n === 16) { s += "טז"; break; } for (var i = 0; i < L.length; i++) if (n >= L[i][0]) { s += L[i][1]; n -= L[i][0]; break; } } return s.length > 1 ? s.slice(0, -1) + '"' + s.slice(-1) : s + "'"; }
  function hebrewMonthYear(d) { try { var parts = new Intl.DateTimeFormat("en-u-ca-hebrew", { timeZone: "Europe/Riga", year: "numeric", month: "long" }).formatToParts(d), m = "", y = 0; parts.forEach(function (x) { if (x.type === "month") m = x.value; if (x.type === "year") y = parseInt(x.value, 10); }); if (!m || !y) return null; return (HMONTH[m] || m) + " " + hebNum(y); } catch (e) { return null; } }
  var umManual = false;
  function currentMonth() { var parts = new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Riga", year: "numeric", month: "numeric" }).formatToParts(new Date()); var y = 0, m = 0; parts.forEach(function (x) { if (x.type === "year") y = +x.value; if (x.type === "month") m = +x.value; }); return { he: hebrewMonthYear(new Date()) || (MONTHS.he[m - 1] + " " + y), en: MONTHS.en[m - 1] + " " + y, ru: MONTHS.ru[m - 1] + " " + y }; }
  function fillUm() { var u = D.updatedMonth || {}; ["he", "en", "ru"].forEach(function (l) { if ($("um-" + l)) $("um-" + l).value = u[l] || ""; }); }
  $("save").addEventListener("click", function () {
    // Hebrew-name guard: the MAIN list only. Archive items (incl. those shown on /past) may have no Hebrew name.
    var noHe = D.products.filter(function (p) { return !hasHe(p); });
    if (noHe.length) { msg("status", "לא נשמר: " + noHe.length + " מוצרים בלי שם בעברית (" + noHe.slice(0, 3).map(name).join(", ") + (noHe.length > 3 ? "…" : "") + "). הוסף שם בעברית או העבר לארכיון.", true); edit(noHe[0]); return; }
    if (!umManual) { D.updatedMonth = currentMonth(); fillUm(); }
    msg("status", "שומר…");
    var body = Object.assign({}, D); delete body.archive; if (ARCH) body.archive = ARCH;
    api("/api/save", body).then(function (r) { if (r.ok) { umManual = false; setDirty(false); msg("status", "נשמר ✓ " + r.products + " מוצרים" + (r.archived != null ? " · " + r.archived + " בארכיון" : "") + " · האתר מעודכן"); } else msg("status", "השמירה נכשלה: " + (r.error || r.status), true); });
  });
  $("tab-settings").addEventListener("click", function () { if ($("stats") && !$("stats").hidden) showStats(false); showArchive(false); $("settings").hidden = !$("settings").hidden; if (!$("settings").hidden) $("settings").scrollIntoView({ behavior: "smooth" }); });
  $("pw-form").addEventListener("submit", function (e) { e.preventDefault(); var c = $("pw-cur").value, n = $("pw-new").value; api("/api/password", { current: c, next: n }).then(function (r) { if (r.ok) { alert("הסיסמה הוחלפה. כל שאר המכשירים נותקו."); $("pw-cur").value = ""; $("pw-new").value = ""; } else if (r.status !== 401) alert(r.status === 429 ? lockMsg(r) : (r.message || ("שגיאה: " + (r.error || r.status)))); }); });
  $("load-backups").addEventListener("click", function () { api("/api/backups").then(function (r) { var ul = $("backups"); ul.textContent = ""; (r.backups || []).forEach(function (b) { var li = el("li", "", b + " "), bt = el("button", "btn2", "שחזר"); bt.type = "button"; bt.addEventListener("click", function () { if (confirm("לשחזר את הגיבוי מ-" + b + "?")) api("/api/restore", { at: b }).then(function (x) { if (x.ok) location.reload(); else alert(x.error); }); }); li.appendChild(bt); ul.appendChild(li); }); if (!(r.backups || []).length) ul.appendChild(el("li", "", "אין גיבויים עדיין")); }); });
  $("export").addEventListener("click", function () { var a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([JSON.stringify(ARCH ? Object.assign({}, D, { archive: ARCH }) : D, null, 1)], { type: "application/json" })); a.download = "kosher-latvia-data.json"; a.click(); });
  $("import").addEventListener("change", function (e) { var f = e.target.files[0]; if (!f) return; f.text().then(function (t) { try { var d = JSON.parse(t); if (!d.products) throw new Error("no products"); if (Array.isArray(d.archive)) { ARCH = d.archive; renderArchive(); } delete d.archive; D = d; setDirty(true); renderList(); fillTexts(); alert("נטען – לחץ “שמור ופרסם”"); } catch (er) { alert("קובץ לא תקין: " + er.message); } }); });
  function fillCt() { var c = D.contact || {}; if ($("ct-he")) $("ct-he").value = c.phone || ""; if ($("ct-enru")) $("ct-enru").value = c.phoneEnRu || "+371 20383423"; }
  $("apply-ct").addEventListener("click", function () {
    var he = $("ct-he").value.trim(), er = $("ct-enru").value.trim(), dh = he.replace(/\D/g, ""), de = er.replace(/\D/g, "");
    if (dh.length < 7 || de.length < 7) { alert("מספר לא תקין"); return; }
    D.contact = Object.assign({}, D.contact || {}, { phone: he, whatsapp: "https://wa.me/" + dh, phoneEnRu: er, whatsappEnRu: "https://wa.me/" + de }); delete D.contact.telEnRu;
    setDirty(true); fillTexts(); alert("עודכן – לחץ “שמור ופרסם”");
  });
  // v28: a link per store (shown in the store list and in the product popup, opens in a new tab)
  function fillStoreLinks() {
    var box = $("st-links"); if (!box) return; box.textContent = "";
    (D.stores || []).forEach(function (s) {
      var l = el("label", "stl"); l.appendChild(el("b", "", s.name + " "));
      var i = el("input"); i.type = "url"; i.dir = "ltr"; i.placeholder = "https://…"; i.value = s.url || "";
      i.addEventListener("input", function () { var v = i.value.trim(); // v94: only http(s) links are kept (blocks javascript: and the like)
        if (v && !/^https?:\/\/[^\s]+$/i.test(v)) { i.style.borderColor = "#dc2626"; i.title = "רק קישור שמתחיל ב-https:// (או http://)"; msg("status", "קישור לא תקין – רק https:// או http://", true); return; }
        i.style.borderColor = ""; i.title = "";
        if (v) { s.url = v; if (!s.urlKind) s.urlKind = "list"; } else { delete s.url; delete s.urlKind; } setDirty(true); });
      l.appendChild(i); box.appendChild(l);
    });
  }
  function fillTexts() { fillUm(); fillCt(); fillStoreLinks(); $("texts").value = JSON.stringify({ banner: D.banner, explain: D.explain, contact: D.contact, listDates: D.listDates, sources: D.sources }, null, 1); }
  $("apply-texts").addEventListener("click", function () { try { var o = JSON.parse($("texts").value); ["banner", "explain", "contact", "listDates", "sources"].forEach(function (k) { if (o[k]) D[k] = o[k]; }); setDirty(true); alert("עודכן – לחץ “שמור ופרסם”"); } catch (e) { alert("JSON לא תקין: " + e.message); } });
  $("apply-um").addEventListener("click", function () { var u = {}; ["he", "en", "ru"].forEach(function (l) { u[l] = $("um-" + l).value.trim(); }); if (!u.he && !u.en && !u.ru) { alert("ריק"); return; } D.updatedMonth = u; umManual = true; setDirty(true); alert("עודכן – לחץ “שמור ופרסם”"); });
  // ── 📦 Archive: products set aside (not shown on the site); restore or delete for good ──
  function loadArchive() {
    api("/api/archive").then(function (r) {
      if (!r.ok) { $("arch-count").textContent = "לא הצלחתי לטעון את הארכיון: " + (r.error || r.status); return; }
      ARCH = r.archive || []; renderArchive();
    }).catch(function (e) { $("arch-count").textContent = "לא הצלחתי לטעון את הארכיון: " + e; });
  }
  function archName(p) { return (p.en && p.en.name) || (p.ru && p.ru.name) || (p.he && p.he.name) || p.brand || p.id; }
  function updArchBtn() { $("tab-archive").textContent = "📦 ארכיון" + (ARCH ? " (" + ARCH.length + ")" : ""); }
  function archiveProduct(p) {
    if (!ARCH) { alert("הארכיון עוד לא נטען – נסה שוב בעוד רגע"); return false; }
    D.products.splice(D.products.indexOf(p), 1);
    var a = Object.assign({}, p); a.archivedAt = new Date().toISOString().slice(0, 10); a.archivedReason = "admin"; a.onPast = false; // a product moved here from the list is not shown on /past until the admin ticks it
    ARCH.unshift(a); setDirty(true); renderList(); renderArchive(); return true;
  }
  function restoreProduct(a) {
    var i = ARCH.indexOf(a); if (i < 0) return;
    ARCH.splice(i, 1);
    var p = Object.assign({}, a); delete p.archivedAt; delete p.archivedReason; delete p.origId; delete p.onPast;
    if (D.products.some(function (x) { return x.id === p.id; })) { var max = 0; D.products.concat(ARCH).forEach(function (x) { var n = parseInt(String(x.id).replace(/\D/g, ""), 10); if (n > max) max = n; }); p.id = "p" + (max + 1); }
    if (!p.he) p.he = { name: "", details: "" }; p.outOfStock = false; // brought back = sold again (tick “חסר במלאי” to send it to “מוצרים שהיו בעבר”)
    D.products.unshift(p); setDirty(true); renderArchive();
    edit(p); $("editor").scrollIntoView({ behavior: "smooth" });
    msg("status", "“" + archName(a) + "” חזר לרשימה – הוסף שם בעברית ולחץ “שמור ופרסם”");
  }
  function renderArchive() {
    updArchBtn(); if (!ARCH) return;
    var q = $("arch-filter").value.toLowerCase().trim(), ul = $("alist"); ul.textContent = ""; var n = 0;
    var live = {}; D.products.forEach(function (p) { live[p.id] = 1; });
    ARCH.slice().sort(function (x, y) { return (x.img ? 0 : 1) - (y.img ? 0 : 1); }).forEach(function (a) { // photos first
      if (q && JSON.stringify([a.brand, a.he, a.en, a.ru, a.stores, a.searchKeywords]).toLowerCase().indexOf(q) < 0) return;
      n++;
      var li = el("li", "arow");
      if (a.img) { var im = new Image(); im.src = a.img; im.alt = ""; im.loading = "lazy"; li.appendChild(im); } else li.appendChild(el("span", "ph", "📷"));
      var t = el("div", "atxt");
      t.appendChild(el("b", "", archName(a)));
      if (a.ru && a.ru.name && a.en && a.en.name) { var ru = el("span", "ru", a.ru.name); t.appendChild(ru); }
      var meta = [a.brand, (a.stores || []).join(", "), a.outOfStock ? "חסר במלאי" : "", a.archivedReason === "admin" ? "הוסר בניהול " + (a.archivedAt || "") : "לא ברשימה בעברית"].filter(Boolean).join(" · ");
      var sm = el("small", "", meta); t.appendChild(sm);
      li.appendChild(t);
      var bx = el("div", "abtns");
      var rb = el("button", "btn2", "↩️ החזר לאתר"); rb.type = "button"; rb.addEventListener("click", function () { restoreProduct(a); });
      var db = el("button", "btn2 danger", "🗑️ מחק לצמיתות"); db.type = "button"; db.addEventListener("click", function () { if (!confirm("למחוק את “" + archName(a) + "” לצמיתות? אי אפשר יהיה להחזיר.")) return; ARCH.splice(ARCH.indexOf(a), 1); setDirty(true); renderArchive(); });
      var pl = el("label", "apast"), pc = document.createElement("input"); pc.type = "checkbox"; pc.checked = a.onPast !== false;
      pc.addEventListener("change", function () { a.onPast = pc.checked; setDirty(true); updPastCount(); });
      pl.appendChild(pc); pl.appendChild(el("span", "", "מוצג בעמוד 'היו בעבר'")); bx.appendChild(pl);
      var kd = el("details", "akw"); kd.appendChild(el("summary", "", "מילות חיפוש (פנימי)")); var kt = el("textarea"); kt.setAttribute("dir", "auto"); kt.value = kwStr(a.searchKeywords); kt.addEventListener("input", function () { var v = kwArr(kt.value); if (v.length) a.searchKeywords = v; else delete a.searchKeywords; setDirty(true); }); kd.appendChild(kt); t.appendChild(kd); /* v56 */ var pq = el("label", "apop", "פופולריות (פנימי, 0-100): "); var pi = el("input"); pi.type = "number"; pi.min = "0"; pi.max = "100"; pi.style.width = "5em"; pi.value = a.popularity == null ? "" : String(a.popularity); pi.addEventListener("input", function () { popSet(a, pi.value); setDirty(true); }); pq.appendChild(pi); t.appendChild(pq); /* v68 */
      bx.appendChild(rb); bx.appendChild(db); li.appendChild(bx);
      ul.appendChild(li);
    });
    $("arch-count").textContent = n + " / " + ARCH.length + " מוצרים בארכיון"; updPastCount();
  }
  function updPastCount() { if (!ARCH) return; var k = ARCH.filter(function (x) { return x.onPast !== false; }).length; var c = $("arch-count"); var s = c.querySelector(".pastn") || c.appendChild(el("span", "pastn")); s.textContent = " · " + k + " מהם מוצגים בעמוד 'היו בעבר'"; }
  $("arch-filter").addEventListener("input", renderArchive);

  /* v73: popularity typed by hand = manual (popManual), never overwritten by the weekly automatic update; an empty field = back to automatic (research score until enough usage) */
  function popSet(p, v) { v = String(v == null ? "" : v).trim(); var n = Number(v); if (v !== "" && isFinite(n)) { p.popularity = Math.max(0, Math.min(100, Math.round(n))); p.popManual = true; } else { delete p.popManual; if (typeof p.popResearch === "number") p.popularity = p.popResearch; else delete p.popularity; } }
  function popNote(p) { return p.popManual ? "✋ ערך ידני – לא מתעדכן אוטומטית" + (typeof p.popResearch === "number" ? " (ציון מחקר: " + p.popResearch + ")" : "") : "🔄 מתעדכן אוטומטית פעם בשבוע" + (typeof p.popResearch === "number" ? " (ציון מחקר: " + p.popResearch + ")" : ""); }
  /* v73: "📊 סטטיסטיקה / Stats" - anonymous counts from the public pages (no personal data) */
  var STATS = null;
  function bars(host, rows, max, fmt) { rows.forEach(function (r) { var li = el("div", "st-row"); var lb = el("span", "st-lb", r.label); lb.setAttribute("dir", r.dir || "auto"); li.appendChild(lb); var bw = el("span", "st-bar"); var b = el("i"); b.style.width = (max ? Math.max(r.n ? 2 : 0, Math.round(100 * r.n / max)) : 0) + "%"; bw.appendChild(b); li.appendChild(bw); li.appendChild(el("span", "st-n", fmt ? fmt(r) : String(r.n))); host.appendChild(li); }); }
  function pname(id) { var x = (STATS && STATS.names && STATS.names[id]) || null; if (!x) return id; return (x.brand && x.he.indexOf(x.brand) < 0 ? x.brand + " – " : "") + (x.he || x.en || id) + (x.past ? " (היו בעבר)" : ""); }
  function renderStats(r) {
    STATS = r; var h = $("stats-body"); h.textContent = "";
    var sec = function (title, note) { var s = el("div", "st-sec"); s.appendChild(el("h3", "", title)); if (note) s.appendChild(el("p", "small", note)); h.appendChild(s); return s; };
    var DN = ["א'", "ב'", "ג'", "ד'", "ה'", "ו'", "ש'"];
    var s1 = sec("כניסות לפי יום – 30 הימים האחרונים", "סה\"כ " + (r.total30 || 0) + " צפיות בעמודים. כל טעינה של עמוד נספרת פעם אחת.");
    var mx = Math.max.apply(null, r.days.map(function (d) { return d.n; }).concat([0])), ch = el("div", "st-days");
    r.days.forEach(function (d) { var c = el("div", "st-day"); c.title = d.day + ": " + d.n; var b = el("i"); b.style.height = (mx ? Math.max(d.n ? 3 : 0, Math.round(100 * d.n / mx)) : 0) + "%"; c.appendChild(el("span", "st-dn", d.n ? String(d.n) : "")); c.appendChild(b); var dt = new Date(d.day + "T12:00:00Z"); c.appendChild(el("span", "st-dl", dt.getUTCDate() + "/" + (dt.getUTCMonth() + 1))); c.appendChild(el("span", "st-dw", DN[dt.getUTCDay()])); ch.appendChild(c); });
    s1.appendChild(ch);
    var PG = { "/": "עמוד ראשי", "/past": "היו בעבר", "/store": "חנות כשרה" }, LG = { he: "עברית", en: "English", ru: "Русский" };
    var s2 = sec("עמודים ושפות – 30 יום"), two = el("div", "st-two"), c1 = el("div"), c2 = el("div"); two.appendChild(c1); two.appendChild(c2); s2.appendChild(two);
    var pr = Object.keys(PG).map(function (k) { return { label: PG[k], n: r.pages[k] || 0 }; }), lr = Object.keys(LG).map(function (k) { return { label: LG[k], n: r.langs[k] || 0 }; });
    bars(c1, pr, Math.max.apply(null, pr.map(function (x) { return x.n; }))); bars(c2, lr, Math.max.apply(null, lr.map(function (x) { return x.n; })));
    var list = function (s, rows, empty, lab) { if (!rows.length) { s.appendChild(el("p", "small muted", empty)); return; } var box = el("div", "st-list"); bars(box, rows.map(function (x, i) { return { label: (i + 1) + ". " + lab(x), n: x.n }; }), rows[0].n); s.appendChild(box); };
    var sR = sec("🔗 מאיפה הגיעו – 30 יום", "האתר שממנו הגיעו (רק שם האתר, בלי פרטים אישיים). \"ישירות\" = קישור שנשמר, הקלדה או אפליקציה."); list(sR, r.refs || [], "עוד אין נתונים (נספר מעכשיו).", function (x) { return x.k === "(direct)" ? "ישירות" : x.k; }); /* v122 */
    var two2 = el("div", "st-two"); h.appendChild(two2);
    var s3 = el("div", "st-sec"); s3.appendChild(el("h3", "", "🔎 30 החיפושים הנפוצים – 90 יום")); two2.appendChild(s3); list(s3, r.searches, "עוד אין חיפושים.", function (x) { return x.k; });
    var s4 = el("div", "st-sec"); s4.appendChild(el("h3", "", "❗ חיפושים בלי תוצאות – 90 יום")); s4.appendChild(el("p", "small", "מה אנשים מחפשים ולא מוצאים – רמז למוצרים שחסרים באתר.")); two2.appendChild(s4); list(s4, r.noResults, "עוד אין חיפושים בלי תוצאות.", function (x) { return x.k; });
    var s5 = sec("👆 30 המוצרים שנפתחו הכי הרבה – 30 יום", "לחיצה על כרטיס מוצר (פתיחת החלון עם הפרטים)."); list(s5, r.opens, "עוד אין לחיצות על מוצרים.", function (x) { return pname(x.k); });
    var ru = r.rules || {}, pa = r.popauto || {}, last = (pa.runs || []).slice(-1)[0];
    var s6 = sec("⭐ פופולריות נוכחית", "מתעדכנת אוטומטית פעם ב-" + (ru.everyDays || 7) + " ימים: מוצר עם לפחות " + (ru.minEvents || 5) + " פתיחות/חיפושים ב-" + (ru.windowDays || 90) + " הימים האחרונים מקבל " + Math.round(100 * (ru.usageWeight || 0.6)) + "% לפי השימוש באתר (אחוזון) + " + Math.round(100 * (ru.researchWeight || 0.4)) + "% ציון המחקר. השאר נשארים עם ציון המחקר. ערך שהוקלד ידנית לא נדרס. " + (last ? "עדכון אחרון: " + String(last.at).slice(0, 10) + (last.main ? " (" + last.main.changed + " מוצרים השתנו)" : "") + "." : "עוד לא היה עדכון אוטומטי" + (pa.at ? " (הספירה התחילה " + String(pa.at).slice(0, 10) + ")" : "") + "."));
    var tb = el("table", "st-tbl"), hr = el("tr"); ["#", "מוצר", "פופולריות", "מחקר", "פתיחות (90 יום)", ""].forEach(function (x) { hr.appendChild(el("th", "", x)); }); tb.appendChild(hr);
    (r.popularity || []).forEach(function (x, i) { var tr = el("tr"); tr.appendChild(el("td", "", String(i + 1))); var nm = el("td", "", pname(x.id)); nm.setAttribute("dir", "auto"); tr.appendChild(nm); tr.appendChild(el("td", "", x.popularity == null ? "–" : String(x.popularity))); tr.appendChild(el("td", "", x.research == null ? "–" : String(x.research))); tr.appendChild(el("td", "", String(x.opens90 || 0))); tr.appendChild(el("td", "", x.manual ? "✋ ידני" : "")); tb.appendChild(tr); });
    var wrapT = el("div", "st-tblw"); wrapT.appendChild(tb); s6.appendChild(wrapT);
  }
  function loadStats() { $("stats-body").textContent = "טוען…"; api("/api/stats").then(function (r) { if (r && r.ok) renderStats(r); else $("stats-body").textContent = "שגיאה בטעינה"; }).catch(function (e) { $("stats-body").textContent = "אין חיבור לשרת: " + e; }); }
  function showStats(on) { $("stats").hidden = !on; $("tab-stats").classList.toggle("on", on); if (on) { $("settings").hidden = true; showArchive(false); $("cols").hidden = true; loadStats(); window.scrollTo({ top: 0, behavior: "smooth" }); } else if ($("archive").hidden) $("cols").hidden = false; }
  if ($("tab-stats")) {
    $("tab-stats").addEventListener("click", function () { showStats($("stats").hidden); });
    $("stats-reload").addEventListener("click", loadStats);
    $("stats-recompute").addEventListener("click", function () { if (dirty && !confirm("יש שינויים שלא נשמרו. העדכון ישמור את הפופולריות בשרת, וכדאי לשמור קודם. להמשיך?")) return; api("/api/stats/recompute", {}).then(function (r) { if (r && r.ok) { alert("הפופולריות עודכנה" + (r.run && r.run.main ? ": " + r.run.main.changed + " מוצרים השתנו (" + r.run.main.eligible + " עם מספיק נתונים)" : "") + ". רענן את הדף כדי לראות את הערכים בעורך."); loadStats(); } }); });
    $("stats-reset").addEventListener("click", function () { if (!confirm("למחוק את כל נתוני הסטטיסטיקה ולהתחיל מאפס?")) return; api("/api/stats/reset", {}).then(function () { loadStats(); }); });
  }
  function showArchive(on) { if (on && $("stats")) { $("stats").hidden = true; $("tab-stats").classList.remove("on"); } $("archive").hidden = !on; $("cols").hidden = on; $("tab-archive").classList.toggle("on", on); }
  // ── v91 ⬇️ Excel export (Akiva 2026-11-10 13:38): built here in the browser from what this logged-in page already loaded (admin-xlsx.js); no new server URL ──
  function exportXlsx(btn) {
    if (!D || !window.KRXLSX) { alert("הנתונים עוד לא נטענו – נסה שוב בעוד רגע"); return; }
    var t0 = btn.textContent; btn.disabled = true; btn.textContent = "⏳ מכין קובץ…";
    var getA = ARCH ? Promise.resolve(ARCH) : api("/api/archive").then(function (r) { if (r.ok) { ARCH = r.archive || []; renderArchive(); } return ARCH; }).catch(function () { return null; });
    var getS = api("/api/stats").then(function (r) { return r && r.ok ? r : null; }).catch(function () { return null; });
    Promise.all([getA, getS]).then(function (v) {
      var out = window.KRXLSX.build(D, v[0] || [], v[1], location.origin);
      var a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([out.bytes], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }));
      a.download = window.KRXLSX.fileName(); document.body.appendChild(a); a.click();
      setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 5000);
      msg("status", "⬇️ " + a.download + " – " + out.sheets.map(function (s) { return s.name + " " + s.rows; }).join(" · ") + (v[0] ? "" : " (הארכיון לא נטען)") + (dirty ? " · כולל שינויים שעוד לא נשמרו" : ""), false);
    }).catch(function (e) { alert("לא הצלחתי ליצור את הקובץ: " + e); }).then(function () { btn.disabled = false; btn.textContent = t0; });
  }
  $("xlsx").addEventListener("click", function () { exportXlsx($("xlsx")); });
  $("xlsx2").addEventListener("click", function () { exportXlsx($("xlsx2")); });
  $("tab-archive").addEventListener("click", function () { var on = $("archive").hidden; $("settings").hidden = true; showArchive(on); if (on) { renderArchive(); window.scrollTo({ top: 0, behavior: "smooth" }); } });
})();
