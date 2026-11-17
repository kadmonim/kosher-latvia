/* v91 (Akiva 2026-11-10 13:38 "תן לי בניהול להוריד את כל המידע בקובץ אקסל"): admin-only Excel export.
   Builds a real .xlsx in the browser from the data the logged-in admin page already holds (D from /api/data with the admin key,
   ARCH from /api/archive, stats from /api/stats). No server endpoint, no external library: a tiny OOXML writer (stored zip). */
(function (root) {
  "use strict";
  // ---------- minimal xlsx writer ----------
  var CRC = (function () { var t = new Uint32Array(256); for (var n = 0; n < 256; n++) { var c = n; for (var k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; } return t; })();
  function crc32(b) { var c = 0xFFFFFFFF; for (var i = 0; i < b.length; i++) c = CRC[(c ^ b[i]) & 0xFF] ^ (c >>> 8); return (c ^ 0xFFFFFFFF) >>> 0; }
  function utf8(s) { return new TextEncoder().encode(s); }
  function zip(files) { // [{name, data:Uint8Array}] -> Uint8Array (STORED entries)
    var parts = [], central = [], off = 0, d = new Date();
    var dt = ((d.getFullYear() - 1980) << 9) | ((d.getMonth() + 1) << 5) | d.getDate(), tm = (d.getHours() << 11) | (d.getMinutes() << 5) | (d.getSeconds() >> 1);
    files.forEach(function (f) {
      var nm = utf8(f.name), data = f.data, crc = crc32(data);
      var h = new DataView(new ArrayBuffer(30));
      h.setUint32(0, 0x04034b50, true); h.setUint16(4, 20, true); h.setUint16(6, 0x0800, true); h.setUint16(8, 0, true);
      h.setUint16(10, tm, true); h.setUint16(12, dt, true); h.setUint32(14, crc, true); h.setUint32(18, data.length, true); h.setUint32(22, data.length, true);
      h.setUint16(26, nm.length, true); h.setUint16(28, 0, true);
      parts.push(new Uint8Array(h.buffer), nm, data);
      var c = new DataView(new ArrayBuffer(46));
      c.setUint32(0, 0x02014b50, true); c.setUint16(4, 20, true); c.setUint16(6, 20, true); c.setUint16(8, 0x0800, true); c.setUint16(10, 0, true);
      c.setUint16(12, tm, true); c.setUint16(14, dt, true); c.setUint32(16, crc, true); c.setUint32(20, data.length, true); c.setUint32(24, data.length, true);
      c.setUint16(28, nm.length, true); c.setUint32(42, off, true);
      central.push(new Uint8Array(c.buffer), nm);
      off += 30 + nm.length + data.length;
    });
    var csize = central.reduce(function (s, x) { return s + x.length; }, 0);
    var e = new DataView(new ArrayBuffer(22));
    e.setUint32(0, 0x06054b50, true); e.setUint16(8, files.length, true); e.setUint16(10, files.length, true); e.setUint32(12, csize, true); e.setUint32(16, off, true);
    var all = parts.concat(central, [new Uint8Array(e.buffer)]), len = all.reduce(function (s, x) { return s + x.length; }, 0), out = new Uint8Array(len), p = 0;
    all.forEach(function (x) { out.set(x, p); p += x.length; });
    return out;
  }
  function esc(s) { return String(s).replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\uFFFE\uFFFF]/g, "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  function colName(i) { var s = ""; i++; while (i > 0) { var m = (i - 1) % 26; s = String.fromCharCode(65 + m) + s; i = Math.floor((i - 1) / 26); } return s; }
  function cellXml(v, ref, style) {
    var s = style ? ' s="' + style + '"' : "";
    if (v === null || v === undefined || v === "") return "";
    if (typeof v === "boolean") return '<c r="' + ref + '" t="b"' + s + '><v>' + (v ? 1 : 0) + '</v></c>';
    if (typeof v === "number" && isFinite(v)) return '<c r="' + ref + '"' + s + '><v>' + v + '</v></c>';
    var t = String(v); if (t.length > 32000) t = t.slice(0, 32000) + "…";
    return '<c r="' + ref + '" t="inlineStr"' + s + '><is><t xml:space="preserve">' + esc(t) + '</t></is></c>';
  }
  function sheetXml(sh) {
    var n = sh.cols.length, rows = [sh.cols.map(function (c) { return c.header; })].concat(sh.rows);
    var x = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">';
    x += '<sheetViews><sheetView ' + (sh.rtl ? 'rightToLeft="1" ' : '') + 'workbookViewId="0"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/><selection pane="bottomLeft" activeCell="A2" sqref="A2"/></sheetView></sheetViews>';
    x += '<sheetFormatPr defaultRowHeight="15"/><cols>' + sh.cols.map(function (c, i) { return '<col min="' + (i + 1) + '" max="' + (i + 1) + '" width="' + (c.width || 14) + '" customWidth="1"/>'; }).join("") + '</cols><sheetData>';
    rows.forEach(function (r, ri) {
      var cells = ""; for (var ci = 0; ci < n; ci++) cells += cellXml(r[ci], colName(ci) + (ri + 1), ri === 0 ? 1 : (sh.cols[ci].wrap ? 2 : 0));
      x += '<row r="' + (ri + 1) + '">' + cells + '</row>';
    });
    x += '</sheetData>';
    if (n && rows.length > 1) x += '<autoFilter ref="A1:' + colName(n - 1) + rows.length + '"/>';
    return x + '</worksheet>';
  }
  function buildXlsx(sheets) {
    var ws = sheets.map(function (s, i) { return '<sheet name="' + esc(s.name) + '" sheetId="' + (i + 1) + '" r:id="rId' + (i + 1) + '"/>'; }).join("");
    var files = [
      { name: "[Content_Types].xml", data: utf8('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>' + sheets.map(function (s, i) { return '<Override PartName="/xl/worksheets/sheet' + (i + 1) + '.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>'; }).join("") + '<Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/><Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/></Types>') },
      { name: "_rels/.rels", data: utf8('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/><Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/></Relationships>') },
      { name: "docProps/core.xml", data: utf8('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><dc:title>Kosher Latvia</dc:title><dc:creator>Kosher Latvia admin</dc:creator><dcterms:created xsi:type="dcterms:W3CDTF">' + new Date().toISOString().slice(0, 19) + 'Z</dcterms:created></cp:coreProperties>') },
      { name: "docProps/app.xml", data: utf8('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties"><Application>Kosher Latvia</Application></Properties>') },
      { name: "xl/workbook.xml", data: utf8('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><bookViews><workbookView/></bookViews><sheets>' + ws + '</sheets></workbook>') },
      { name: "xl/_rels/workbook.xml.rels", data: utf8('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' + sheets.map(function (s, i) { return '<Relationship Id="rId' + (i + 1) + '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet' + (i + 1) + '.xml"/>'; }).join("") + '<Relationship Id="rId' + (sheets.length + 1) + '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>') },
      { name: "xl/styles.xml", data: utf8('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><fonts count="2"><font><sz val="11"/><name val="Arial"/></font><font><b/><sz val="11"/><name val="Arial"/></font></fonts><fills count="3"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill><fill><patternFill patternType="solid"><fgColor rgb="FFDDEBF7"/><bgColor indexed="64"/></patternFill></fill></fills><borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs><cellXfs count="3"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0" applyAlignment="1"><alignment vertical="top"/></xf><xf numFmtId="0" fontId="1" fillId="2" borderId="0" xfId="0" applyFont="1" applyFill="1" applyAlignment="1"><alignment vertical="top" wrapText="1"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0" applyAlignment="1"><alignment vertical="top" wrapText="1"/></xf></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles></styleSheet>') }
    ];
    sheets.forEach(function (s, i) { files.push({ name: "xl/worksheets/sheet" + (i + 1) + ".xml", data: utf8(sheetXml(s)) }); });
    return zip(files);
  }

  // ---------- flattening (no field dropped: nested objects -> dotted columns, lists -> joined) ----------
  function flat(o, pre, out) {
    Object.keys(o || {}).forEach(function (k) {
      var v = o[k], key = pre ? pre + "." + k : k;
      if (v && typeof v === "object" && !Array.isArray(v)) flat(v, key, out);
      else if (Array.isArray(v)) out[key] = v.every(function (x) { return x === null || typeof x !== "object"; }) ? v.filter(function (x) { return x !== null && x !== ""; }).join(", ") : JSON.stringify(v);
      else out[key] = v;
    });
    return out;
  }
  var LABEL = {
    "id": "מזהה / id", "cat": "קטגוריה (מזהה) / cat", "catName": "קטגוריה / Category", "brand": "מותג / brand",
    "he.name": "שם בעברית / he.name", "en.name": "שם באנגלית / en.name", "ru.name": "שם ברוסית / ru.name",
    "he.details": "פירוט בעברית / he.details", "en.details": "פירוט באנגלית / en.details", "ru.details": "פירוט ברוסית / ru.details",
    "he.company": "חברה (עברית) / he.company", "en.company": "חברה (אנגלית) / en.company", "ru.company": "חברה (רוסית) / ru.company",
    "stores": "חנויות / stores", "symbols": "סמלי כשרות / symbols", "notMehadrin": "לא מהדרין / notMehadrin", "outOfStock": "חסר במלאי / outOfStock",
    "natural": "טבעי / natural", "imgUrl": "קישור לתמונה / image URL", "img": "תמונה (נתיב) / img", "img2": "תמונה 2 / img2", "imgSrc": "מקור התמונה / imgSrc",
    "imgIllustrative": "תמונה להמחשה / imgIllustrative", "approvalSource": "מקור האישור / approvalSource", "searchKeywords": "מילות חיפוש נסתרות / searchKeywords",
    "popularity": "פופולריות / popularity", "storePage": "עמוד החנות הכשרה / storePage", "link": "קישור / link", "review": "לבדיקה / review",
    "archivedAt": "הועבר לארכיון / archivedAt", "archivedReason": "סיבה / archivedReason", "onPast": "מוצג ב'היו בעבר' / onPast", "condApply": "condApply",
    "name": "שם / name", "he": "עברית / he", "en": "אנגלית / en", "ru": "רוסית / ru", "url": "קישור / url", "urlKind": "סוג קישור / urlKind", "icon": "סמל / icon",
    "productCount": "מס' מוצרים באתר / products"
  };
  var WIDE = { "he.details": 46, "en.details": 46, "ru.details": 46, "searchKeywords": 60, "imgUrl": 48, "img": 30, "approvalSource": 36, "stores": 30, "url": 44, "en": 34, "ru": 30, "he": 28, "link": 40,
    "he.name": 26, "en.name": 26, "ru.name": 26, "brand": 20, "catName": 22, "symbols": 18, "id": 8, "cat": 13, "name": 20 };
  var WRAP = { "he.details": 1, "en.details": 1, "ru.details": 1 };
  function table(name, records, prefer, rtl) {
    var keys = prefer.slice();
    records.forEach(function (r) { Object.keys(r).forEach(function (k) { if (keys.indexOf(k) < 0) keys.push(k); }); });
    keys = keys.filter(function (k) { return prefer.indexOf(k) >= 0 || records.some(function (r) { return r[k] !== undefined; }); });
    return { name: name, rtl: rtl, cols: keys.map(function (k) { return { key: k, header: LABEL[k] || k, width: WIDE[k] || Math.max(12, Math.min(40, k.length + 4)), wrap: !!WRAP[k] }; }),
      rows: records.map(function (r) { return keys.map(function (k) { return r[k]; }); }) };
  }
  function absUrl(u, origin) { if (!u) return ""; u = String(u); if (/^(https?:|data:)/i.test(u)) return u; return origin.replace(/\/$/, "") + "/" + u.replace(/^\.?\//, ""); }
  var PROD_ORDER = ["id", "cat", "catName", "brand", "he.name", "en.name", "ru.name", "he.details", "en.details", "ru.details", "ru.company", "stores", "symbols",
    "notMehadrin", "outOfStock", "natural", "imgUrl", "imgSrc", "imgIllustrative", "approvalSource", "searchKeywords", "popularity", "storePage", "link", "review"];

  function workbook(D, ARCH, stats, origin) {
    D = D || {}; var cats = {}; (D.categories || []).forEach(function (c) { cats[c.id] = c.he || c.en || c.id; });
    function prodRec(p, extra) { var r = flat(p, "", {}); r.catName = cats[p.cat] || ""; r.imgUrl = absUrl(p.img, origin); if (extra) extra(r, p); return r; }
    var sheets = [];
    var prods = (D.products || []).filter(Boolean).map(function (p) { return prodRec(p); });
    sheets.push(table("מוצרים", prods, PROD_ORDER, true));
    var arch = (ARCH || []).filter(Boolean).map(function (p) { return prodRec(p, function (r, x) { r.onPast = x.onPast !== false; }); });
    sheets.push(table("ארכיון", arch, ["id", "onPast"].concat(PROD_ORDER.slice(1), ["archivedAt", "archivedReason"]), true));
    var cnt = {}; (D.products || []).forEach(function (p) { (p && p.stores || []).forEach(function (s) { cnt[s] = (cnt[s] || 0) + 1; }); });
    sheets.push(table("חנויות", (D.stores || []).map(function (s) { var r = flat(s, "", {}); r.productCount = cnt[s.name] || 0; return r; }), ["name", "he", "en", "ru", "url", "urlKind", "productCount"], true));
    sheets.push(table("קטגוריות", (D.categories || []).map(function (c) { var r = flat(c, "", {}); r.productCount = (D.products || []).filter(function (p) { return p && p.cat === c.id; }).length; return r; }), ["id", "icon", "he", "en", "ru", "productCount"], true));
    if (Array.isArray(D.symbols)) sheets.push(table("סמלי כשרות", D.symbols.map(function (s, i) { return typeof s === "object" && s ? flat(s, "", { "#": i + 1 }) : { "#": i + 1, "תמונה / image": absUrl(s, origin) }; }), ["#"], true));
    // everything else in the data file (texts, contact, banner, dates, list of applied patches...) as key / value
    var kv = [], skip = { products: 1, stores: 1, categories: 1, symbols: 1, archive: 1 };
    Object.keys(D).forEach(function (k) { if (skip[k]) return; var v = D[k];
      if (v && typeof v === "object" && !Array.isArray(v)) { var f = flat(v, k, {}); Object.keys(f).forEach(function (fk) { kv.push({ "שדה / field": fk, "ערך / value": f[fk] }); }); }
      else kv.push({ "שדה / field": k, "ערך / value": Array.isArray(v) ? (v.every(function (x) { return x === null || typeof x !== "object"; }) ? v.join(", ") : JSON.stringify(v)) : v }); });
    var st = table("הגדרות וטקסטים", kv, ["שדה / field", "ערך / value"], true); st.cols[0].width = 30; st.cols[1].width = 90; st.cols[1].wrap = true; sheets.push(st);
    if (stats && stats.ok) {
      var names = stats.names || {}, rows = [];
      function nm(id) { var n = names[id]; return n ? [n.brand, n.he || n.en].filter(Boolean).join(" · ") : ""; }
      (stats.days || []).forEach(function (d) { rows.push({ "סוג / kind": "כניסות ליום / views per day", "מפתח / key": d.day, "שם / name": "", "כמות / count": d.n }); });
      Object.keys(stats.pages || {}).forEach(function (k) { rows.push({ "סוג / kind": "עמוד / page (30d)", "מפתח / key": k, "שם / name": "", "כמות / count": stats.pages[k] }); });
      Object.keys(stats.langs || {}).forEach(function (k) { rows.push({ "סוג / kind": "שפה / language (30d)", "מפתח / key": k, "שם / name": "", "כמות / count": stats.langs[k] }); });
      (stats.searches || []).forEach(function (x) { rows.push({ "סוג / kind": "חיפוש / search (90d)", "מפתח / key": x.k, "שם / name": "", "כמות / count": x.n }); });
      (stats.noResults || []).forEach(function (x) { rows.push({ "סוג / kind": "חיפוש בלי תוצאות / no results (90d)", "מפתח / key": x.k, "שם / name": "", "כמות / count": x.n }); });
      (stats.opens || []).forEach(function (x) { rows.push({ "סוג / kind": "פתיחת מוצר / product opened (30d)", "מפתח / key": x.k, "שם / name": nm(x.k), "כמות / count": x.n }); });
      Object.keys(stats.totals || {}).forEach(function (k) { rows.push({ "סוג / kind": "סה\"כ מאז ההתחלה / all-time total", "מפתח / key": k, "שם / name": "", "כמות / count": stats.totals[k] }); });
      var ss = table("סטטיסטיקה", rows, ["סוג / kind", "מפתח / key", "שם / name", "כמות / count"], true); ss.cols[0].width = 34; ss.cols[1].width = 30; ss.cols[2].width = 30; sheets.push(ss);
    }
    return sheets;
  }
  function fileName(d) { d = d || new Date(); var p = function (n) { return (n < 10 ? "0" : "") + n; }; return "kosher-latvia-" + d.getFullYear() + "-" + p(d.getMonth() + 1) + "-" + p(d.getDate()) + ".xlsx"; }
  root.KRXLSX = { workbook: workbook, build: function (D, ARCH, stats, origin) { var sh = workbook(D, ARCH, stats, origin); return { bytes: buildXlsx(sh), sheets: sh.map(function (s) { return { name: s.name, rows: s.rows.length }; }) }; }, fileName: fileName, buildXlsx: buildXlsx };
})(typeof window !== "undefined" ? window : globalThis);
