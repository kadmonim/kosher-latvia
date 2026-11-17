(function () {
  "use strict";
  /* v78 site design layer (approved by Akiva 2026-11-10 11:13 "אני מאשר את העיצוב החדש"; was the design preview pv1–pv3).
     Front-end only: reads window.KR from script.js, never changes data. Popularity = each product's live "popularity" field (v73 sort / weekly auto-update). */
  function popOf(p) { var v = p && p.popularity; return typeof v === "number" && isFinite(v) ? v : null; }
  var PV = {
    he: { plFull: "הדפס את כל הרשימה", plFullSub: "כל {n} המוצרים לפי א-ב, עם החנויות", plOr: "או", plAllList: "כל הרשימה (לפי א-ב)", plPopHint: "בכל חנות רק מתוך {n} המוצרים הכי מבוקשים", plMin: "מוצגות חנויות עם {n} מוצרים לפחות.", plNone0: "אין מוצרים לפי הבחירה", plPages: "בערך {p} עמודי A4", plPage1: "עמוד A4 אחד", plStores: "חנויות", ask: "איזה מוצר אתה מחפש?", cats: "קטגוריות", newT: "חדש באתר", popT: "הכי מבוקש", reset: "נקה סינון", howSub: "כמה טיפים קצרים – לשמור כשרות בריגה זה פשוט יותר ממה שנדמה", legendT: "מה אומרות התוויות?", symT: "סמלי כשרות – לחפש על האריזה", howMore: "למדריך המלא: איך שומרים כשרות ↗", allStores: "לכל החנויות", fewerStores: "פחות חנויות", navSearch: "חיפוש", navCats: "קטגוריות", navStores: "חנויות", navProduce: "פירות וירקות", navFood: "אוכל כשר", plTitle: "רשימה להדפסה", plIntro: "בחרו חנויות – הרשימה מחולקת לפי חנות ומוכנה להדפסה על דף A4.", plPop: "הכי מבוקשים", plCats: "קטגוריות", plAll: "סמן הכל", plNone: "נקה", plCount: "{n} מוצרים ברשימה", plPrint: "הדפס", plPdf: "רוצים קובץ PDF? בחלון ההדפסה בחרו שמירה כ-PDF.", plEmpty: "בחרו חנויות או הדפיסו את כל הרשימה", plDoc: "מוצרים כשרים בריגה", plColName: "מוצר", plColBrand: "מותג", plColSym: "כשרות", plColStores: "איפה קונים", plPrinted: "הודפס", plSel: "ברשימה" },
    en: { plFull: "Print the full list", plFullSub: "All {n} products A–Z, with the stores", plOr: "or", plAllList: "Full list (A–Z)", plPopHint: "In each store, only products from the {n} most popular", plMin: "Showing stores with at least {n} products.", plNone0: "No products for this choice", plPages: "about {p} A4 pages", plPage1: "1 A4 page", plStores: "Stores", ask: "Which product are you looking for?", cats: "Categories", newT: "New on the site", popT: "Most popular", reset: "Clear filters", howSub: "A few short tips – keeping kosher in Riga is easier than you think", legendT: "What do the labels mean?", symT: "Kosher symbols to look for on the pack", howMore: "Full guide: how to keep kosher ↗", allStores: "All stores", fewerStores: "Fewer stores", navSearch: "Search", navCats: "Categories", navStores: "Stores", navProduce: "Fruit & Veg", navFood: "Kosher food", plTitle: "Printable list", plIntro: "Choose stores – the list is grouped by store and ready to print on A4.", plPop: "Most popular", plCats: "Categories", plAll: "Select all", plNone: "Clear", plCount: "{n} products on the list", plPrint: "Print", plPdf: "Want a PDF file? In the print window choose Save as PDF.", plEmpty: "Choose stores or print the full list", plDoc: "Kosher products in Riga", plColName: "Product", plColBrand: "Brand", plColSym: "Kashrut", plColStores: "Where to buy", plPrinted: "Printed", plSel: "On the list" },
    ru: { plFull: "Распечатать весь список", plFullSub: "Все {n} продуктов по алфавиту, с магазинами", plOr: "или", plAllList: "Весь список (по алфавиту)", plPopHint: "В каждом магазине – только из {n} самых популярных продуктов", plMin: "Показаны магазины, где не меньше {n} продуктов.", plNone0: "Нет продуктов по этому выбору", plPages: "примерно {p} стр. A4", plPage1: "1 стр. A4", plStores: "Магазины", ask: "Какой продукт вы ищете?", cats: "Категории", newT: "Новое на сайте", popT: "Самое популярное", reset: "Сбросить фильтры", howSub: "Несколько коротких советов – соблюдать кашрут в Риге проще, чем кажется", legendT: "Что означают метки?", symT: "Символы кашрута – ищите на упаковке", howMore: "Подробно: как соблюдать кашрут ↗", allStores: "Все магазины", fewerStores: "Свернуть", navSearch: "Поиск", navCats: "Категории", navStores: "Магазины", navProduce: "Овощи и фрукты", navFood: "Кошерная еда", plTitle: "Список для печати", plIntro: "Выберите магазины – список разбит по магазинам и готов к печати на листе A4.", plPop: "Самое популярное", plCats: "Категории", plAll: "Выбрать все", plNone: "Очистить", plCount: "Продуктов в списке: {n}", plPrint: "Печать", plPdf: "Нужен PDF? В окне печати выберите «Сохранить как PDF».", plEmpty: "Выберите магазины или распечатайте весь список", plDoc: "Кошерные продукты в Риге", plColName: "Продукт", plColBrand: "Бренд", plColSym: "Кашрут", plColStores: "Где купить", plPrinted: "Напечатано", plSel: "В списке" }
  };
  var lang = "en", K = function () { return window.KR; };
  function pv(k) { return (PV[lang] && PV[lang][k]) || PV.en[k] || ""; }
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  function num(id) { var m = String(id).match(/\d+/); return m ? parseInt(m[0], 10) : 0; }
  function anyFilter(s) { return !!(s.q && s.q.trim()) || !!s.cat || !!(s.cats && s.cats.length) || !!s.store || s.meh || s.photo; }

  function miniCard(p) {
    var kr = K(), x = kr.txt(p), c = el("button", "pv-mini"); c.type = "button"; c.setAttribute("data-id", p.id);
    var th = kr.thumb(p, "pv-mini-img"), ti = th.querySelector("img"); if (ti) ti.loading = "eager"; c.appendChild(th);
    var brand = p.brand || x.company || ""; if (brand && (x.name || "").toLowerCase().indexOf(brand.toLowerCase()) >= 0) brand = "";
    if (brand) { var b = el("span", "pv-mini-brand", brand); b.setAttribute("dir", kr.fdir(brand, lang)); c.appendChild(b); }
    var n = el("span", "pv-mini-name", x.name); n.setAttribute("dir", kr.fdir(x.name, x.lang)); c.appendChild(n);
    c.appendChild(kr.symRow(p));
    c.addEventListener("click", function () { kr.openModal(p); });
    return c;
  }
  function renderStrips() {
    var kr = K(); if (!kr) return; var D = kr.getD(), withImg = D.products.filter(function (p) { return p.img && !p.outOfStock; });
    var nw = withImg.slice().sort(function (a, b) { return num(b.id) - num(a.id); }).slice(0, 12);
    var pp = withImg.filter(function (p) { return popOf(p) != null; }).sort(function (a, b) { return popOf(b) - popOf(a) || num(b.id) - num(a.id); }).slice(0, 12);
    [["pv-new", nw], ["pv-pop", pp]].forEach(function (z) { var box = document.getElementById(z[0]); if (!box) return; box.textContent = ""; z[1].forEach(function (p) { box.appendChild(miniCard(p)); }); });
  }
  /* (the nuts & seeds card of design preview v3 is NOT on the live site — awaits Akiva's separate approval) */
  function collapsibleNotes() {
    var box = document.getElementById("notes"); if (!box) return;
    Array.prototype.slice.call(box.children).forEach(function (n) {
      if (n.tagName === "DETAILS") return;
      var h = n.querySelector("h3"), d = el("details", "hcard"), s = el("summary"), body = el("div", "hc-body");
      var title = h ? h.textContent.trim() : "", m = title.match(/^(\p{Extended_Pictographic}\uFE0F?)\s*/u), ic = m ? m[1] : "💡";
      if (m) title = title.slice(m[0].length);
      if (!title) title = K().t("notesTitle");
      s.appendChild(el("span", "hc-ic", ic)); var st = el("span", "", title); s.appendChild(st);
      /* the card itself follows the page direction (same header/chevron side for every card); the content keeps its own text direction */
      if (h) h.parentNode.removeChild(h);
      d.appendChild(s); n.parentNode.insertBefore(d, n); body.appendChild(n); d.appendChild(body);
    });
  }
  function orderStores() {
    var ul = document.getElementById("store-list"); if (!ul) return;
    var items = Array.prototype.slice.call(ul.children), key = function (li) { var b = li.querySelector("b"); return b ? b.textContent.trim() : ""; };
    var rank = { "Kosher Store": 0, "Rimi": 1, "Maxima": 2 };
    items.sort(function (a, b) { var ra = rank[key(a)], rb = rank[key(b)]; ra = ra == null ? 9 : ra; rb = rb == null ? 9 : rb; return ra - rb || (items.indexOf(a) - items.indexOf(b)); });
    items.forEach(function (li) { ul.appendChild(li); });
    var bt = document.getElementById("pv-allst"); if (bt) { bt.textContent = ul.classList.contains("collapsed") ? pv("allStores") + " (" + items.length + ")" : pv("fewerStores"); bt.parentNode.hidden = items.length <= 8; }
  }
  window.KR_afterLang = function (l) {
    lang = l || "en";
    document.querySelectorAll("[data-pv]").forEach(function (n) { n.textContent = pv(n.getAttribute("data-pv")); });
    document.querySelectorAll(".pv-nav button").forEach(function (b) { b.setAttribute("aria-label", b.textContent.trim()); });
    collapsibleNotes(); orderStores(); renderStrips(); renderPL(); window.KR_afterRender();
  };
  window.KR_afterRender = function () {
    var kr = K(); if (!kr) return; var s = kr.state, f = anyFilter(s), q = !!(s.q && s.q.trim());
    document.body.classList.toggle("pv-filtering", f); document.body.classList.toggle("pv-searching", q);
    var st = document.getElementById("pv-strips"); if (st) st.hidden = f;
    var r = document.getElementById("pv-reset"); if (r) r.hidden = !f;
    var c = document.getElementById("pv-clear"); if (c) c.hidden = !(document.getElementById("q").value);
  };

  /* ---------- one design + one open/close animation for every collapsible card (details.hcard) ---------- */
  var REDUCED = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.addEventListener("click", function (e) {
    var sm = e.target.closest && e.target.closest("details.hcard > summary"); if (!sm) return;
    var d = sm.parentNode, b = d.querySelector(":scope > .hc-body"); if (!b || REDUCED || !b.animate) return;
    e.preventDefault(); if (d._anim) return;
    if (!d.open) {
      d.open = true; var h = b.scrollHeight; d.classList.add("hc-anim");
      d._anim = b.animate([{ height: "0px", opacity: 0 }, { height: h + "px", opacity: 1 }], { duration: 240, easing: "cubic-bezier(.2,.7,.3,1)" });
      d._anim.onfinish = d._anim.oncancel = function () { d._anim = null; d.classList.remove("hc-anim"); };
    } else {
      var h2 = b.offsetHeight; d.classList.add("hc-anim"); d.classList.add("hc-closing");
      d._anim = b.animate([{ height: h2 + "px", opacity: 1 }, { height: "0px", opacity: 0 }], { duration: 200, easing: "ease-in" });
      d._anim.onfinish = d._anim.oncancel = function () { d.open = false; d._anim = null; d.classList.remove("hc-anim"); d.classList.remove("hc-closing"); };
    }
  });

  /* ---------- our own printable list (replaces the links to the external printable lists) ---------- */
  /* v3 (Akiva 2026-11-10 11:03 "הרשימה מוצרים להדפסה תחלק אותם ... לפי חנויות. ויהיה אפשר לבחור רק חנויות שיש להם ... יותר מ10 או 15 מוצרים"): the picker chooses STORES; the printout is grouped by store. */
  var PRINT_MIN_STORE = 15; /* a store is offered only when it sells at least this many products on the main list (Kosher Store excluded) — change here */
  var PL_SKIP = { "Kosher Store": 1 }, plSel = { stores: {}, full: false }; /* v78 (Akiva 11:20): no "most popular" option and no automatic selection; a separate "print the full list" button */
  function plProducts() { var kr = K(); return kr ? kr.getD().products.filter(function (p) { return !p.outOfStock && !p.storePage; }) : []; }
  /* stores with >= PRINT_MIN_STORE products, most products first (computed from the data every time) */
  function plStoreList() {
    var c = {}; plProducts().forEach(function (p) { (p.stores || []).forEach(function (s) { if (!PL_SKIP[s]) c[s] = (c[s] || 0) + 1; }); });
    return Object.keys(c).filter(function (s) { return c[s] >= PRINT_MIN_STORE; }).map(function (s) { return { s: s, n: c[s] }; })
      .sort(function (a, b) { return b.n - a.n || a.s.toLowerCase().localeCompare(b.s.toLowerCase()); });
  }
  /* A–Z in the current language, same rule as the site's א-ב sort (v75): Hebrew page = Hebrew name א→ת, products with no Hebrew name by brand A→Z, Cyrillic last */
  var PL_LEAD = /^[^0-9A-Za-z\u00c0-\u024f\u0400-\u04ff\u05d0-\u05ea]+/, PL_COL = {};
  function plCol(l) { if (!PL_COL[l]) { try { PL_COL[l] = new Intl.Collator(l, { sensitivity: "base", numeric: true }); } catch (e) { PL_COL[l] = { compare: function (a, b) { return a < b ? -1 : a > b ? 1 : 0; } }; } } return PL_COL[l]; }
  function plNorm(s) { return String(s || "").toLowerCase().replace(/[^0-9a-z\u00c0-\u024f\u0400-\u04ff\u05d0-\u05ea]+/g, ""); }
  function plKey(p, x) {
    var name = String(x.name || ""), brand = String(p.brand || x.company || ""), n = name.replace(PL_LEAD, "") || name;
    if (brand && plNorm(name).indexOf(plNorm(brand)) >= 0) brand = "";
    var b = brand.replace(PL_LEAD, "");
    if (lang === "he") {
      if (/[\u05d0-\u05ea]/.test(n.charAt(0))) return { g: 0, a: n, l: "he", b: b };
      var f = (b || n).charAt(0), g = /[\u05d0-\u05ea]/.test(f) ? 0 : /[A-Za-z\u00c0-\u024f]/.test(f) ? 1 : /[\u0400-\u04ff]/.test(f) ? 2 : 3;
      return { g: g, a: b || n, l: g === 0 ? "he" : g === 2 ? "ru" : "en", b: n };
    }
    var re = lang === "ru" ? /[\u0400-\u04ff]/ : /[A-Za-z\u00c0-\u024f]/;
    return { g: re.test(n.charAt(0)) ? 0 : 1, a: n, l: lang, b: b };
  }
  function plSort(rows) {
    rows.forEach(function (r) { r.k = plKey(r.p, r.x); });
    return rows.sort(function (a, b) { return a.k.g - b.k.g || plCol(a.k.l).compare(a.k.a, b.k.a) || plCol("en").compare(a.k.b, b.k.b) || (num(a.p.id) - num(b.p.id)); });
  }
  /* the chosen stores, in the picker's order, each with its products (a product sold in several chosen stores is listed under each) */
  function plGroups() {
    var all = plProducts();
    if (plSel.full) return [{ s: "", full: true, ps: all }]; /* the whole main list once, A–Z, with a "where to buy" column */
    return plStoreList().filter(function (o) { return plSel.stores[o.s]; }).map(function (o) {
      var ps = all.filter(function (p) { return (p.stores || []).indexOf(o.s) >= 0; });
      return { s: o.s, ps: ps };
    }).filter(function (g) { return g.ps.length; });
  }
  function plStoreNames(p) {
    var c = {}; plProducts().forEach(function (q) { (q.stores || []).forEach(function (s) { c[s] = (c[s] || 0) + 1; }); });
    return (p.stores || []).slice().sort(function (a, b) { return (c[b] || 0) - (c[a] || 0) || a.toLowerCase().localeCompare(b.toLowerCase()); }).join(", ");
  }
  function plChosen() { var out = []; plGroups().forEach(function (g) { out = out.concat(g.ps); }); return out; }
  /* page estimate: calibrated on Playwright A4 PDFs of this layout (row ≈ 1 unit, a details line adds ≈ 0.75, store heading ≈ 2, first-page title ≈ 5) */
  var PL_PAGE_UNITS = 35; /* v78: recalibrated on live PDFs (Rimi+Maxima 111 rows = 5–6 pages, full list 297 rows = 13–14 pages) */
  function plPages(gs) {
    var kr = K(), u = 5; gs.forEach(function (g) { u += g.full ? 1 : 2; g.ps.forEach(function (p) { var x = kr.txt(p); u += g.full ? 1.12 : 1; /* the full list has a 4th (stores) column that wraps more */ if (x.details) u += 0.75 * Math.max(1, Math.ceil(String(x.details).length / 110)); }); });
    return Math.max(1, Math.ceil(u / PL_PAGE_UNITS));
  }
  function plCount() {
    var keep = plSel.full; plSel.full = false; var gs = plGroups(), n = 0; plSel.full = keep; gs.forEach(function (g) { n += g.ps.length; });
    var c = document.getElementById("pl-n"), b = document.getElementById("pl-go"), anyStore = Object.keys(plSel.stores).some(function (k) { return plSel.stores[k]; });
    if (c) {
      c.textContent = "";
      if (n) { var pg = plPages(gs); c.appendChild(el("span", "pl-cn", pv("plCount").replace("{n}", n))); c.appendChild(el("span", "pl-pg", pg === 1 ? pv("plPage1") : pv("plPages").replace("{p}", pg))); }
      else c.textContent = anyStore ? pv("plNone0") : pv("plEmpty");
    }
    if (b) b.disabled = !n;
  }
  function plOpt(id, ic, label, n, checked, onch) {
    var lb = el("label", "pl-opt"), cb = el("input"); cb.type = "checkbox"; cb.checked = !!checked; cb.setAttribute("data-k", id);
    cb.addEventListener("change", function () { onch(cb.checked); plCount(); });
    lb.appendChild(cb);
    if (ic && ic.nodeType) lb.appendChild(ic); else lb.appendChild(el("span", "pl-ic", ic));
    var t = el("span", "pl-lb"); t.appendChild(el("bdi", "", label)); lb.appendChild(t); if (n != null) lb.appendChild(el("span", "pl-n", String(n))); return lb;
  }
  function plLogo(s, cls) {
    var kr = K(), w;
    if (kr && kr.logoChip && kr.LOGO_ST) { w = kr.logoChip(s, kr.LOGO_ST, cls); var im = w.querySelector("img"); if (im) im.loading = "eager"; else w.textContent = ""; }
    else w = el("span", cls);
    return w;
  }
  function renderPL() {
    var box = document.getElementById("pl"), kr = K(); if (!box || !kr) return; box.textContent = "";
    var stores = plStoreList();
    /* v102 Akiva 15:16: "print the whole list" comes first, before printing by stores (same button, same behaviour) */
    var all = plProducts(), fullPg = plPages([{ s: "", full: true, ps: all }]);
    var fb = el("button", "pl-full"); fb.type = "button"; fb.id = "pl-full";
    fb.appendChild(el("span", "pl-full-ic", "🖨️")); var ft = el("span", "pl-full-t"); ft.appendChild(el("b", "", pv("plFull")));
    ft.appendChild(el("small", "", pv("plFullSub").replace("{n}", all.length) + " · " + (fullPg === 1 ? pv("plPage1") : pv("plPages").replace("{p}", fullPg)))); fb.appendChild(ft);
    fb.addEventListener("click", function () { plSel.full = true; plPrint(); }); box.appendChild(fb);
    var orw = el("div", "pl-or"); orw.appendChild(el("span", "", pv("plOr"))); box.appendChild(orw);
    box.appendChild(el("p", "pl-intro", pv("plIntro")));
    var hd = el("div", "pl-cats-h"); hd.appendChild(el("span", "pl-cats-t", pv("plStores")));
    var lk = el("span", "pl-links"), a1 = el("button", "pl-link", pv("plAll")), a2 = el("button", "pl-link", pv("plNone")); a1.type = a2.type = "button";
    a1.addEventListener("click", function () { stores.forEach(function (o) { plSel.stores[o.s] = true; }); renderPL(); });
    a2.addEventListener("click", function () { plSel.stores = {}; renderPL(); });
    lk.appendChild(a1); lk.appendChild(el("span", "pl-sep", "·")); lk.appendChild(a2); hd.appendChild(lk); box.appendChild(hd);
    var g2 = el("div", "pl-opts pl-stores");
    stores.forEach(function (o) {
      var lg = plLogo(o.s, "pl-slogo");
      g2.appendChild(plOpt("st:" + o.s, lg, o.s, o.n, plSel.stores[o.s], function (v) { if (v) plSel.stores[o.s] = true; else delete plSel.stores[o.s]; }));
    });
    box.appendChild(g2);
    box.appendChild(el("p", "pl-min", pv("plMin").replace("{n}", PRINT_MIN_STORE)));
    var act = el("div", "pl-act"), n = el("p", "pl-count"); n.id = "pl-n"; act.appendChild(n);
    var go = el("button", "pl-go"); go.type = "button"; go.id = "pl-go";
    go.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 9V3.5h10V9"/><rect x="3.5" y="9" width="17" height="8" rx="2"/><path d="M7 14h10v6.5H7z"/></svg>';
    go.appendChild(el("span", "", pv("plPrint"))); go.addEventListener("click", function () { plSel.full = false; plPrint(); }); act.appendChild(go);
    box.appendChild(act);
    box.appendChild(el("p", "pl-pdf", pv("plPdf")));
    plCount();
  }
  var V95_DISC = {"he": "המידע והתמונות מתעדכנים לעתים קרובות ועשויים להיות שונים מהמוצר שבחנות. האתר ניתן כשירות לציבור, בלי אחריות – במקרה של ספק יש לשאול רב.", "en": "Information and photos change often and may differ from the product in store. Provided as a public service, without liability – if in doubt, ask a rabbi.", "ru": "Информация и фото часто меняются и могут отличаться от товара в магазине. Сайт – услуга общине, без ответственности – в случае сомнения спросите раввина."}; /* v95 Akiva 14:23: footer disclaimer, also on the printed list */
  function plBuild() {
    var kr = K(), D = kr.getD(), gs = plGroups(), total = 0, old = document.getElementById("pl-print"); if (old) old.parentNode.removeChild(old);
    gs.forEach(function (g) { total += g.ps.length; });
    var root = el("div"); root.id = "pl-print"; root.setAttribute("dir", lang === "he" ? "rtl" : "ltr"); root.setAttribute("lang", lang);
    var hd = el("div", "plp-head"), lg = el("div", "plp-logo"); var lgi = new Image(); lgi.src = "img/brand/logo-" + (lang === "he" || lang === "ru" ? lang : "en") + ".svg?v=80"; lgi.alt = lang === "he" ? "כשר לטביה" : lang === "ru" ? "Кошер Латвия" : "Kosher Latvia"; lg.appendChild(lgi); lg.setAttribute("dir", "ltr"); /* v80: the site logo (language lockup, same file as the header so it is already loaded) */
    var bh = el("span", "plp-bh", 'ב"ה'); bh.setAttribute("dir", "rtl"); bh.setAttribute("lang", "he"); hd.appendChild(bh); hd.appendChild(lg); /* the row is always RTL: ב"ה in the top right corner */
    root.appendChild(hd);
    root.appendChild(el("h1", "plp-title", pv("plDoc")));
    root.appendChild(el("p", "plp-sub", kr.t("subtitle")));
    var full = !!(gs[0] && gs[0].full), ncol = full ? 4 : 3;
    var sel = el("p", "plp-sel"), sn = el("span", "", full ? pv("plAllList") : gs.map(function (g) { return g.s; }).join(" · ")); if (!full) sn.setAttribute("dir", "ltr");
    sel.appendChild(document.createTextNode(pv("plSel") + ": ")); sel.appendChild(sn);
    sel.appendChild(document.createTextNode(" — " + pv("plCount").replace("{n}", total)));
    root.appendChild(sel);
    var tb = el("table", "plp-t"), th = el("thead"), tr = el("tr");
    (full ? ["plColName", "plColBrand", "plColSym", "plColStores"] : ["plColName", "plColBrand", "plColSym"]).forEach(function (k) { tr.appendChild(el("th", "", pv(k))); }); th.appendChild(tr); tb.appendChild(th); if (full) tb.classList.add("plp-full");
    gs.forEach(function (g) {
      var rows = plSort(g.ps.map(function (p) { return { p: p, x: kr.txt(p) }; }));
      var body = el("tbody", "plp-store"), hr = el("tr", "plp-cat"), hc = el("td"); hc.colSpan = 3;
      if (full) { body.className = "plp-all"; hr = null; }
      var hw = el("div", "plp-sh"), lgo = plLogo(g.s, "plp-slogo"); hw.appendChild(lgo);
      var nmS = el("span", "plp-sn", g.s); nmS.setAttribute("dir", "ltr"); hw.appendChild(nmS);
      hw.appendChild(el("span", "plp-sc", pv("plCount").replace("{n}", rows.length)));
      if (hr) { hc.appendChild(hw); hr.appendChild(hc); body.appendChild(hr); }
      rows.forEach(function (r) {
        var p = r.p, x = r.x, row = el("tr", "plp-r"), c1 = el("td", "plp-name"), nm = el("div", "plp-nm", x.name || ""); nm.setAttribute("dir", kr.fdir(x.name || "", x.lang)); c1.appendChild(nm);
        if (x.details) { var dt = el("div", "plp-det" + (/\n\s*•\s/.test(x.details) ? " plp-bl" : ""), x.details); /* v92: details with "• " lines (p23 nuts) print as a vertical list */ dt.setAttribute("dir", kr.fdir(x.details, x.lang)); c1.appendChild(dt); }
        row.appendChild(c1);
        var brand = p.brand || x.company || "", c2 = el("td", "plp-brand", brand); if (brand) c2.setAttribute("dir", kr.fdir(brand, lang)); row.appendChild(c2);
        var c3 = el("td", "plp-sym"), sr = kr.symRow(p); Array.prototype.slice.call(sr.querySelectorAll(".b-cond")).forEach(function (n) { if (x.details) n.parentNode.removeChild(n); });
        Array.prototype.slice.call(sr.querySelectorAll("img")).forEach(function (im) { im.loading = "eager"; var w = im.parentNode; if (w && w.title && w.nextSibling == null || (w && w.title && !(w.nextSibling && w.nextSibling.className === "sy-cap"))) w.parentNode.insertBefore(el("span", "plp-syn", w.title), w.nextSibling); });
        c3.appendChild(sr); if (p.notMehadrin) c3.appendChild(el("div", "plp-meh", kr.t("mehShort"))); row.appendChild(c3);
        if (full) { var c4 = el("td", "plp-st", plStoreNames(p)); c4.setAttribute("dir", "ltr"); row.appendChild(c4); }
        body.appendChild(row);
      });
      tb.appendChild(body);
    });
    var tf = el("tfoot"), fr = el("tr"), fc = el("td"); fc.colSpan = ncol;
    var dd = new Date(), ds = ("0" + dd.getDate()).slice(-2) + "." + ("0" + (dd.getMonth() + 1)).slice(-2) + "." + dd.getFullYear();
    var um = D.updatedMonth && (D.updatedMonth[lang] || D.updatedMonth.en);
    var ft = el("div", "plp-foot"); var f1 = el("span", "", pv("plPrinted") + " " + ds + (um ? " · " + kr.t("updatedLabel") + um : "")); ft.appendChild(f1);
    var f2 = el("span", "plp-org", "Kosher Latvia — Chabad Lubavitch Latvia · " + (location.hostname || "kosher-latvia.sites.tab.bot")); f2.setAttribute("dir", "ltr"); ft.appendChild(f2);
    var fdisc = el("div", "plp-disc", (V95_DISC[lang] || V95_DISC.en)); fc.appendChild(fdisc); fc.appendChild(ft); fr.appendChild(fc); tf.appendChild(fr); tb.appendChild(tf);
    root.appendChild(tb); document.body.appendChild(root);
    return root;
  }
  function plPrint() {
    if (!plChosen().length) return;
    var root = plBuild(), imgs = Array.prototype.slice.call(root.querySelectorAll("img")), t0 = document.title;
    document.body.classList.add("pl-printing");
    var done = false, fire = function () { if (done) return; done = true; document.title = "Kosher Latvia"; window.print(); };
    Promise.all(imgs.map(function (im) { return im.complete ? 0 : new Promise(function (r) { im.onload = im.onerror = r; }); })).then(fire);
    setTimeout(fire, 2500);
    window.addEventListener("afterprint", function f() { window.removeEventListener("afterprint", f); document.title = t0; document.body.classList.remove("pl-printing"); plSel.full = false; }, { once: true });
  }
  window.KR_printList = { build: plBuild, sel: plSel, chosen: plChosen, groups: plGroups, stores: plStoreList, pages: plPages, MIN: PRINT_MIN_STORE };
  function go(where) {
    var target = { search: "top", cats: "cats-sec", stores: "stores", food: "promo", howto: "status" }[where], n = document.getElementById(target); /* v121 (Akiva 2026-11-11): bottom-bar "פירות וירקות" jumps to "איך שומרים כשרות?" and on; on /past and /store the same cards sit in #notes */ if (where === "howto" && (!n || n.offsetParent === null)) { var n2 = document.getElementById("notes"); if (n2 && n2.offsetParent !== null) { n = n2; target = "notes"; } }
    if (!n || n.hidden || (n.offsetParent === null && where !== "search")) { location.href = "/#" + target; return; } /* /past, /store: a section that lives only on the main page */
    if (where === "search") { window.scrollTo({ top: 0, behavior: "smooth" }); setTimeout(function () { var q = document.getElementById("q"); q.focus({ preventScroll: true }); }, 250); return; }
    var y = n.getBoundingClientRect().top + window.scrollY - 70; window.scrollTo({ top: y, behavior: "smooth" });
  }
  function setup() {
    document.querySelectorAll(".pv-nav button").forEach(function (b) { b.addEventListener("click", function () { go(b.getAttribute("data-go")); }); });
    var q = document.getElementById("q");
    q.addEventListener("input", function () { var c0 = document.getElementById("pv-clear"); if (c0) c0.hidden = !q.value; });
    q.addEventListener("keydown", function (e) { if (e.key === "Enter") { q.blur(); var g = document.getElementById("products"); setTimeout(function () { window.scrollTo({ top: g.getBoundingClientRect().top + window.scrollY - 70, behavior: "smooth" }); }, 200); } });
    var clr = document.getElementById("pv-clear"); if (clr) clr.addEventListener("click", function () { q.value = ""; q.dispatchEvent(new Event("input", { bubbles: true })); q.focus(); });
    var rst = document.getElementById("pv-reset"); if (rst) rst.addEventListener("click", function () {
      var kr = K(), s = kr.state; s.q = ""; s.cat = ""; s.cats = []; s.store = ""; s.meh = false; s.photo = false; s.shown = kr.PAGE;
      q.value = ""; document.getElementById("store").value = ""; document.getElementById("mehadrin").checked = false; document.getElementById("withphoto").checked = false;
      kr.mcSync(); kr.render(); if (clr) clr.hidden = true;
    });
    /* a category tile scrolls to its products (touch screens; on desktop the "All" tile keeps its hover panel) */
    document.getElementById("cats").addEventListener("click", function (e) { var b = e.target.closest && e.target.closest(".cat"); if (!b || b.classList.contains("cat-all")) return; setTimeout(function () { var g = document.getElementById("products"); window.scrollTo({ top: g.getBoundingClientRect().top + window.scrollY - 70, behavior: "smooth" }); }, 60); });
    var als = document.getElementById("pv-allst"); if (als) als.addEventListener("click", function () { var ul = document.getElementById("store-list"); ul.classList.toggle("collapsed"); orderStores(); if (ul.classList.contains("collapsed")) go("stores"); });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", setup); else setup();
})();
