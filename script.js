/* v122 (Akiva 2026-11-12 06:46): Google Tag Manager / Analytics and the cookie banner were removed. One-time cleanup of leftover Google cookies (_ga, _ga_*, _gid, _gat*) and the old banner choice; harmless, can be dropped later. */
(function () { try { var h = location.hostname, p = h.split("."), ds = ["", h, "." + h]; for (var i = 1; i < p.length - 1; i++) ds.push("." + p.slice(i).join(".")); document.cookie.split(";").forEach(function (x) { var n = x.split("=")[0].trim(); if (/^(_ga|_gid|_gat|_gcl)/.test(n)) ds.forEach(function (d) { document.cookie = n + "=; Max-Age=0; path=/" + (d ? "; domain=" + d : ""); }); }); try { localStorage.removeItem("kl-consent"); } catch (e) {} } catch (e) {} })();
(function () {
  "use strict";
  var UI = {
    he: { footDisc: "המידע והתמונות מתעדכנים לעתים קרובות ועשויים להיות שונים מהמוצר שבחנות. האתר ניתן כשירות לציבור, בלי אחריות – במקרה של ספק יש לשאול רב.", legendNat2: "מוצרים שאפשר לקנות בלי השגחה, בתנאי שאין בהם שום תוספות.", produceTitle: "🥕 בדיקת פירות וירקות", yashanTitle: "🌾 איסור חדש", notesTitle: "הערות נוספות", symOnPack: "סמל ההשגחה על האריזה:", natShort: "🌾 טבעי", asIsShort: "✓ מאושר כפי שהוא", mehShort: "✱ לא מהדרין", moreStores: "+{n}", pastLink: "מוצרים שהיו בעבר", pastTitle: "מוצרים שהיו בעבר", pastNote: "מוצרים שהיו בעבר בחנויות ואזלו. אין מעקב אחר סטטוס הכשרות שלהם כיום.", backMain: "חזרה לרשימה הראשית", skip: "דלג למוצרים", productsWord: "מוצרים", title: "מוצרים כשרים בחנויות בריגה", subtitle: "רשימת המוצרים לימות השנה הרגילים בלבד, ולא לפסח. מיועד לתושבי המקום.", searchLabel: "חיפוש מוצר", searchPh: "חפש מוצר או מותג…", storeLabel: "סינון לפי חנות", allStores: "כל החנויות", onlyMehadrin: "רק מהדרין", hideOos: "הסתר מוצרים שחסרים במלאי", withPhoto: "רק עם תמונה", catsTitle: "קטגוריות", all: "הכל", statusLink: "הסבר על סטטוס הכשרות", showMore: "הצג עוד", empty: "לא נמצאו מוצרים. נסה מילה אחרת או נקה את הסינון.", statusTitle: "הסבר על סטטוס הכשרות", symbolsTitle: "סמלי השגחות – חפש אותם על המוצרים", storesTitle: "איפה קונים", aboutTitle: "אודות", aboutText: "האתר של חב\"ד ליובאוויטש לטביה (חב\"ד ריגה). רשימת המוצרים היא רשימת הכשרות של חב\"ד ריגה.", aboutPesach: "לימות השנה הרגילים בלבד, ולא לפסח. מיועד לתושבי המקום.", howTo: "איך שומרים כשרות?", aboutContact: "שאלות, או מוצר שכדאי להוסיף? צרו קשר בוואטסאפ:", sourcesTitle: "הרשימה להדפסה:", found: "{n} מוצרים", foundCat: "{c}: {n} מוצרים", kosher: "כשר", natural: "טבעי – בלי השגחה, בתנאי שבלי תוספות", symbol: "חובה סמל: {s}", asIs: "מאושר כפי שהוא", notMeh: "כשר בלבד – לא למהדרין", oos: "חסר במלאי", soldAt: "נמכר ב:", photoFrom: "תמונה: {s}", source: "מקור: רשימת הכשרות של חב\"ד ריגה", fromFb: "מקור: פוסט בעמוד הפייסבוק Kosher Products in Latvia", inOther: "הטקסט בשפה אחרת", storesBtn: "הצג מוצרים", legendNat: "מוצר טבעי: אפשר לקנות בלי השגחה, בתנאי שהוא 100% טבעי ובלי תוספות.", legendSym: "אם ברשימה מופיע סמל כשרות, ארץ ייצור או קוד – הם חייבים להופיע על האריזה.", legendAsIs: "מוצר בהשגחה שאושר כפי שהוא, בלי צורך בסמל על האריזה.", legendMeh: "", legendOos: "המוצר מסומן ברשימה כחסר כרגע במלאי.", listDate: "הרשימה בעברית: ", updatedLabel: "עודכן: ", trialRun: "אתר בהרצה", fullList: "🔗 לרשימה המלאה", condApply: "כפוף לפרטים", storePgLink: "🛍 מוצרי החנות הכשרה", storeAll: "לכל מוצרי החנות הכשרה ←", storePgTitle: "מוצרי החנות הכשרה", storePgNote: "כל המוצרים שנמכרים בחנות הכשרה, Dzirnavu 29, ריגה: מוצרי מזון ומוצרים נוספים (תשמישי קדושה, מתנות ומוצרים לבית).", storeLink: "רשימת סניפים", storeSite: "לאתר", close: "סגור", photoN: "תמונה {n}" },
    en: { footDisc: "Information and photos change often and may differ from the product in store. Provided as a public service, without liability – if in doubt, ask a rabbi.", legendNat2: "Can be bought without rabbinical supervision, as long as there are no additives at all.", produceTitle: "🥕 Checking fruit and vegetables", yashanTitle: "🌾 Chadash (new grain)", notesTitle: "More notes", symOnPack: "Kosher symbol on the package:", natShort: "🌾 Natural", asIsShort: "✓ Approved as is", mehShort: "✱ Not Mehadrin", moreStores: "+{n}", pastLink: "Previously available", pastTitle: "Previously available", pastNote: "Products that used to be sold in stores and have run out. Their kosher status is no longer being tracked.", backMain: "← Back to the main list", skip: "Skip to products", productsWord: "products", title: "Kosher products in Riga stores", subtitle: "Product list for year-round use only, not for Pesach. Intended for local residents.", searchLabel: "Search product", searchPh: "Search product or brand…", storeLabel: "Filter by store", allStores: "All stores", onlyMehadrin: "Mehadrin only", hideOos: "Hide out of stock", withPhoto: "With photo only", catsTitle: "Categories", all: "All", statusLink: "Understanding kosher status", showMore: "Show more", empty: "No products found. Try another word or clear the filters.", statusTitle: "Understanding kosher status", symbolsTitle: "Kosher symbols — look for them on the package", storesTitle: "Where to buy", aboutTitle: "About", aboutText: "This site is by Chabad Lubavitch Latvia (Chabad Riga). The product list is the Chabad Riga kosher list.", aboutPesach: "For year-round use only, not for Pesach. Intended for local residents.", howTo: "How to keep kosher", aboutContact: "Questions, or a product to add? Contact Chabad Riga on WhatsApp:", sourcesTitle: "Printable list:", found: "{n} products", foundCat: "{c}: {n} products", kosher: "KOSHER", natural: "Natural – no supervision needed", symbol: "Symbol required: {s}", asIs: "Approved as is", notMeh: "Kosher, not Mehadrin", oos: "Out of stock", soldAt: "Sold at:", photoFrom: "Photo: {s}", source: "Source: Chabad Riga kosher list", fromFb: "Source: a post on the Kosher Products in Latvia Facebook page", inOther: "text in another language", storesBtn: "Show products", legendNat: "", legendSym: "", legendAsIs: "Supervised product approved as is: no symbol needed on the package.", legendMeh: "", legendOos: "", listDate: "English list: ", updatedLabel: "Updated: ", trialRun: "Site in trial run", fullList: "🔗 Full list", condApply: "Conditions apply", storePgLink: "🛍 Kosher Store products", storeAll: "All Kosher Store products →", storePgTitle: "Kosher Store products", storePgNote: "Everything sold at the Kosher Store, Dzirnavu 29, Riga: food products and other items (Judaica, gifts and household items).", storeLink: "List of stores", storeSite: "Website", close: "Close", photoN: "Photo {n}" },
    ru: { footDisc: "Информация и фото часто меняются и могут отличаться от товара в магазине. Сайт – услуга общине, без ответственности – в случае сомнения спросите раввина.", legendNat2: "Можно покупать без раввинского надзора, при условии что в них нет никаких добавок.", produceTitle: "🥕 Проверка фруктов и овощей", yashanTitle: "🌾 Хадаш (новое зерно)", notesTitle: "Дополнительные примечания", symOnPack: "Знак кошерности на упаковке:", natShort: "🌾 Натуральный", asIsShort: "✓ Одобрен как есть", mehShort: "✱ Не меадрин", moreStores: "+{n}", pastLink: "Ранее в продаже", pastTitle: "Ранее в продаже", pastNote: "Продукты, которые раньше продавались в магазинах и закончились. Их кошерный статус сейчас не отслеживается.", backMain: "← Назад к основному списку", skip: "К продуктам", productsWord: "продуктов", title: "Кошерные продукты в магазинах Риги", subtitle: "Список продуктов только для обычных дней года, не для Песаха. Для местных жителей.", searchLabel: "Поиск продукта", searchPh: "Найти продукт или бренд…", storeLabel: "Фильтр по магазину", allStores: "Все магазины", onlyMehadrin: "Только меадрин", hideOos: "Скрыть отсутствующие", withPhoto: "Только с фото", catsTitle: "Категории", all: "Все", statusLink: "Что означает статус кошерности", showMore: "Показать ещё", empty: "Ничего не найдено. Попробуйте другое слово или сбросьте фильтры.", statusTitle: "Что означает статус кошерности", symbolsTitle: "Символы кошерности — ищите их на упаковке", storesTitle: "Где купить", aboutTitle: "О сайте", aboutText: "Сайт Хабад Любавич Латвия (Хабад Рига). Список продуктов — кошерный список Хабада Риги.", aboutPesach: "Только для обычных дней года, не для Песаха. Для местных жителей.", howTo: "Как соблюдать кашрут", aboutContact: "Вопросы или продукт, который стоит добавить? Напишите Хабаду Риги в WhatsApp:", sourcesTitle: "Список для печати:", found: "{n} продуктов", foundCat: "{c}: {n} продуктов", kosher: "КОШЕР", natural: "Натуральный – без надзора", symbol: "Нужен символ: {s}", asIs: "Одобрен как есть", notMeh: "Кошерно, не меадрин", oos: "Нет в наличии", soldAt: "Продаётся в:", photoFrom: "Фото: {s}", source: "Источник: кошерный список Хабада Риги", fromFb: "Источник: пост на странице Kosher Products in Latvia в Facebook", inOther: "текст на другом языке", storesBtn: "Показать продукты", legendNat: "", legendSym: "", legendAsIs: "Продукт под надзором, одобрен как есть: символ на упаковке не обязателен.", legendMeh: "", legendOos: "", listDate: "Русский список: ", updatedLabel: "Обновлено: ", trialRun: "Сайт работает в тестовом режиме", fullList: "🔗 Полный список", condApply: "Есть условия", storePgLink: "🛍 Товары кошерного магазина", storeAll: "Все товары кошерного магазина →", storePgTitle: "Товары кошерного магазина", storePgNote: "Все товары кошерного магазина, Dzirnavu 29, Рига: продукты питания и другие товары (иудаика, подарки и товары для дома).", storeLink: "Список магазинов", storeSite: "Сайт", close: "Закрыть", photoN: "Фото {n}" }
  };
  var FALLBACK = { he: ["he", "en", "ru"], en: ["en", "he", "ru"], ru: ["ru", "en", "he"] };
  var PAGE = 48;
  var D = window.KOSHER_DATA;
  var state = { lang: "he", cat: "", cats: [], store: "", q: "", meh: false, instock: false, photo: false, shown: PAGE, sort: "" };
  try { var s0 = localStorage.getItem("kr-sort"); if (s0 === "az" || s0 === "pop" || s0 === "ab") state.sort = s0; /* v83: + "ab" (brand A-B) */ } catch (e) {} /* v68: sort choice remembered across pages, like the language */
  var $ = function (id) { return document.getElementById(id); };

  function t(k, vars) { var s = (UI[state.lang] && UI[state.lang][k]); if (s == null) s = UI.en[k] || ""; if (vars) Object.keys(vars).forEach(function (v) { s = s.replace("{" + v + "}", vars[v]); }); return s; }
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  var PAST = document.documentElement.getAttribute("data-page") === "past"; var STOREPG = document.documentElement.getAttribute("data-page") === "store"; // v29 (Akiva 2026-11-08 20:37): non-food Kosher Store items (p.storePage) live on /store, not on the main list // the "previously available" page shows only out-of-stock products; the main page never does
  function storeGroups(d) { if (!STOREPG || !d || !Array.isArray(d.products)) return; // Akiva 2026-11-08 21:05: the store page shows food and other items, grouped
    d.products = d.products.map(function (p) { var q = Object.assign({}, p); q.cat = p.storePage ? "ks-other" : "ks-food"; return q; });
    d.categories = [{ id: "ks-food", icon: "🥫", he: "מוצרי מזון", en: "Food products", ru: "Продукты питания" }, { id: "ks-other", icon: "🎁", he: "יודאיקה ומתנות", en: "Judaica & gifts", ru: "Иудаика и подарки" } /* v80 (Akiva 11:55): non-food items, listed after the food and never counted */]; }
  /* v80 (Akiva 2026-11-10 11:55 "אל תספור במספר הכללי מוצרי החנות שהם לא אוכל"): a count shown to visitors never includes the non-food Kosher Store items (p.storePage: Judaica & gifts) */
  function foodN(arr) { return (arr || []).filter(function (p) { return p && !p.storePage; }).length; }
  var V80T = { he: { ksAll: "כל מוצרי החנות הכשרה", jud: "יודאיקה ומתנות" }, en: { ksAll: "All Kosher Store products", jud: "Judaica & gifts" }, ru: { ksAll: "Все товары кошерного магазина", jud: "Иудаика и подарки" } };
  function v80t(k) { return (V80T[state.lang] || V80T.en)[k]; }
  /* v80 (Akiva 11:55 "לא מצאתי איפה רשימה מלאה של כל מוצרי החנות"): a clear link to /store wherever the Kosher Store appears. N = the store's food products (non-food never counted) */
  function ksAllN() { if (PAST || !D || !D.products) return 0; return D.products.filter(function (p) { return p && !p.storePage && !p.outOfStock && (STOREPG || (p.stores || []).indexOf("Kosher Store") >= 0); }).length; }
  function ksShowBtn(cls) { var n = ksAllN(), bt = el("button", cls || "", t("storesBtn") + (n ? " (" + n + ")" : "")); bt.type = "button"; bt.addEventListener("click", function () { location.href = "store"; }); return bt; } /* v83: same look/label as the other stores' "Show products" button; goes to the full Kosher Store list */
  function ksAllLink(cls) { var n = ksAllN(), a = el("a", "ks-all" + (cls ? " " + cls : ""), ""); a.href = "store"; a.appendChild(el("span", "ks-all-ic", "🛒")); a.appendChild(el("span", "ks-all-t", v80t("ksAll") + (n ? " (" + n + ")" : ""))); a.appendChild(el("span", "ks-all-ar", state.lang === "he" ? "‹" : "›")); a.setAttribute("dir", state.lang === "he" ? "rtl" : "ltr"); return a; }
  function fixIcons(d) { storeRank(d); if (d && Array.isArray(d.products)) d.products = d.products.filter(function (p) { return PAST ? !!p.outOfStock : STOREPG ? ((!!p.storePage || (p.stores || []).indexOf("Kosher Store") >= 0) && !p.outOfStock) : (!p.outOfStock && !p.storePage); }); if (d && d.categories) d.categories.forEach(function (c) { if (c.icon && /\u{1F54E}/u.test(c.icon)) c.icon = "\u{1F3EA}"; if (c.icon && /[\u2721\u{1F52F}]/u.test(c.icon)) c.icon = "\u{1F6D2}"; }); return d; }
  function addPast(d, items) { // the "previously available" page also lists archive items the admin ticked for it; never the main page
    if (!PAST || !d || !Array.isArray(d.products) || !Array.isArray(items)) return d;
    var have = {}; d.products.forEach(function (p) { have[p.id] = 1; });
    items.forEach(function (x) { if (x && x.id && !have[x.id]) { var p = Object.assign({}, x, { outOfStock: true, pastArch: true }); delete p._h; d.products.push(p); have[x.id] = 1; } });
    return d;
  }
  fixIcons(D); storeGroups(D); addPast(D, window.KOSHER_PAST);
  function catOf(id) { for (var i = 0; i < D.categories.length; i++) if (D.categories[i].id === id) return D.categories[i]; return { id: id, icon: "🛒", he: id, en: id, ru: id }; }
  function tdir(l) { return l === "he" ? "rtl" : "ltr"; } /* v63 (Akiva 2026-11-09 15:59): a brand or product NAME written only in a foreign script (Latin/Cyrillic, e.g. "Heinz", "Махеевъ") reads left-to-right even on the Hebrew page; any Hebrew letter in it keeps it right-to-left. Detail lines still use tdir() (v53). */ function fdir(s, l) { s = String(s || ""); if (/[\u0590-\u05FF\uFB1D-\uFB4F]/.test(s)) return "rtl"; if (/[A-Za-z\u00C0-\u024F\u0400-\u04FF]/.test(s)) return "ltr"; return tdir(l); } /* v53 (Akiva 13:46): a text gets the direction of ITS language, not of its first letter — Hebrew starting with a Latin word ("Straight בלבד") stays right-to-left */
  function txt(p) { var order = FALLBACK[state.lang]; for (var i = 0; i < order.length; i++) { var o = p[order[i]]; if (o && o.name) return { lang: order[i], name: o.name, details: o.details || "", company: o.company, card: o.card || "" }; } return { lang: state.lang, name: p.brand || "", details: "" }; }
  function norm(s) { return (s || "").toString().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f\u0591-\u05c7]/g, ""); }
  function snorm(s) { return norm(s).replace(/['\u05f3\u05f4"\u2019\u2018`\u00b4]/g, ""); } // v56: the search also ignores apostrophes / geresh / gershayim
  function kwText(p) { var k = p.searchKeywords; return Array.isArray(k) ? k.join(" ") : (typeof k === "string" ? k : ""); } // v56: hidden search keywords - matched by the search only, never rendered
  function hayName(p) { if (!p._hn) { p._hn = snorm([p.brand, p.he && p.he.name, p.en && p.en.name, p.ru && p.ru.name, p.ru && p.ru.company, kwText(p)].join(" ")); } return p._hn; } /* v70: name / brand / keywords only, for ranking */
  function nameHit(p, words) { var h = hayName(p); for (var i = 0; i < words.length; i++) if (h.indexOf(words[i]) < 0) return 1; return 0; }
  function hay(p) { if (!p._h) { p._h = snorm([p.brand, p.he && p.he.name, p.he && p.he.details, p.en && p.en.name, p.en && p.en.details, p.ru && p.ru.name, p.ru && p.ru.details, p.ru && p.ru.company, (p.stores || []).join(" "), (p.symbols || []).join(" "), kwText(p)].join(" ")); } return p._h; }

  // Logos (v22): kashrut symbols and stores are matched BY NAME, so a symbol/store typed in admin gets its logo automatically; an unknown name shows a neat text chip.
  // Symbol logos are from the Chabad Riga kosher list (EN/RU "Kosher symbols" page); store logos from the list's "Where to buy" pages. No Star of David in any of them.
  /* v43: KU (Ukrainian Kashruth Committee) and K (Rabbi Hadad) logos from the Chabad Riga EN list, "Kosher symbols" page */ var LOGO_SYM = {"ku": "img/logo/sy-ku.png", "k": "img/logo/sy-k.png", "ou": "img/logo/sy-ou.png", "klbd": "img/logo/sy-klbd.png", "ok": "img/logo/sy-ok.png", "stark": "img/logo/sy-star-k.png", "kf": "img/logo/sy-kf.png", "mk": "img/logo/sy-mk.png", "nwk": "img/logo/sy-nwk.png", "ksa": "img/logo/sy-ksa.png", "ביתיוסף": "img/logo/sy-beit-yosef.png", "בדץהעדההחרדית": "img/logo/sy-edah.png", "הרבלנדא": "img/logo/sy-landa.png", "stard": "img/logo/sy-star-d.png", "crc": "img/logo/sy-crc.png", "koshercheck": "img/logo/sy-kosher-check.png", "oud": "img/logo/sy-ou-d.png", "kכ": "img/logo/sy-k-kaf.png", "euk": "img/logo/sy-eu-k.png", "kosherberlin": "img/logo/sy-kosher-berlin.png?v=117", "agudatyisraelbelz": "img/logo/sy-agudat-yisrael-belz.png?v=119"}; // v28: Kכ and EU-K (Badatz Mehadrin Milan) logos from the list's own product rows
  var LOGO_ST = {"kosherstore": "img/logo/st-kosher-store.png", "atudutyfree": "img/logo/st-atu-duty-free.png", "beta": "img/logo/st-beta.png", "biossekoveikals": "img/logo/st-bioss-ekoveikals.png", "candypop": "img/logo/st-candy-pop.png", "circlek": "img/logo/st-circle-k.png", "dabasstacija": "img/logo/st-dabas-stacija.png", "dzrienibezuzcenojuma": "img/logo/st-dz-rieni-bez-uzcenojuma.png", "depo": "img/logo/st-depo.png", "fixprice": "img/logo/st-fix-price.png", "gemoss": "img/logo/st-gemoss.png", "gourmetstudio": "img/logo/st-gourmet-studio.png", "kabinets": "img/logo/st-kabinets.png", "lavandas": "img/logo/st-lavandas.png", "lats": "img/logo/st-lats.png", "lidl": "img/logo/st-lidl.png", "maxima": "img/logo/st-maxima.png", "mego": "img/logo/st-mego.png", "miniso": "img/logo/st-miniso.png", "narvesen": "img/logo/st-narvesen.png", "noblewine": "img/logo/st-noble-wine.png", "orangecashcarry": "img/logo/st-orange-cash-carry.png", "promo": "img/logo/st-promo.png", "rimi": "img/logo/st-rimi.png", "skarbukrainianshopcentralmarket": "img/logo/st-skarb-ukrainian-shop-central-market.png", "spiritswine": "img/logo/st-spirits-wine.png", "stockmann": "img/logo/st-stockmann.png", "superselection": "img/logo/st-super-selection.png", "tabakasnams": "img/logo/st-tabakas-nams.png", "top": "img/logo/st-top.png", "turkishgourmet": "img/logo/st-turkish-gourmet.png", "vesko": "img/logo/st-vesko.png", "vynoteka": "img/logo/st-vynoteka.png", "promocashcarry": "img/logo/st-promo.png", "skarb": "img/logo/st-skarb-ukrainian-shop-central-market.png", "rimihyper": "img/logo/st-rimi.png", "abrands": "img/logo/st-abrands.png", "alkoutlet": "img/logo/st-alkoutlet.png", "ikea": "img/logo/st-ikea.png", "latvijasbalzams": "img/logo/st-latvijas-balzams.png?v=111", "premiumdzrieni": "img/logo/st-premium-dzerieni.png?v=111", "superalko": "img/logo/st-superalko.png?v=111", "drogas": "img/logo/st-drogas.png?v=111", "elvi": "img/logo/st-elvi.png?v=111", "euronics": "img/logo/st-euronics.png?v=111", "internetaptiekalv": "img/logo/st-internetaptieka-lv.png?v=111", "dbdaba": "img/logo/st-dbdaba.png?v=111", "citro": "img/logo/st-citro.png?v=116"};
  // v28 (Akiva 2026-11-08 20:32): each store's link from the Chabad EN/RU list, kept in D.stores[].url (editable in admin ⚙️). Matched by name like the logos.
  var ST_ALIAS = { promocashcarry: "promo", rimihyper: "rimi", skarb: "skarbukrainianshopcentralmarket" };
  function storeUrl(name) { var k = lkey(name); k = ST_ALIAS[k] || k; var u = null; (D.stores || []).forEach(function (s) { if (!u && s.url && lkey(s.name) === k) u = s.url; }); return u && /^https?:\/\//i.test(u) ? u : null; }
  function extLink(cls, href, text) { var a = el("a", cls, text); a.href = href; a.target = "_blank"; a.rel = "noopener noreferrer"; return a; }
  function lkey(s) { return (s || "").toString().toLowerCase().replace(/[^0-9a-z\u0590-\u05ff\u0400-\u04ff]+/g, ""); }
  var SYM_TR = {"K על הסוגר": { he: "K על הסוגר", en: "K on the bag clip", ru: "K на зажиме пакета" }, "Agudat Yisrael – Belz": { he: "אגודת ישראל – בעלז", en: "Agudat Yisrael – Belz", ru: "Агудат Исраэль – Бельз" }}; /* v119: Belz (Machzikei Hadas) logo name for p128 */ // Akiva 2026-11-08 21:01: the bread's K is on the bag clip
  function symLabel(s) { var o = SYM_TR[s]; return o ? (o[state.lang] || o.he) : s; } /* v48 (Akiva 2026-11-09 11:46, correcting v46): the bread clip has no K (Rabbi Hadad) logo - "K על הסוגר" is again its own text square (as before v46) and the popup writes nothing under it */ var SYM_SPLIT = {}, SYM_NOCAP = {"K על הסוגר": 1}; function symCap(s) { return SYM_NOCAP[s] ? "" : symLabel(s); }
  /* v43 (Akiva 2026-11-08 23:08): no kashrut symbol as bare text. Same-agency variants show the agency logo (OU-D -> OU, OK-D -> OK, EuroKosher -> EU-K, UK / Kashrut Ukraine -> KU); a symbol with no logo (e.g. Haifa Rabbinate) is not shown on cards, popups or the legend. Product data is unchanged. */
  var SYM_ALIAS = { oud: "OU", okd: "OK", eurokosher: "EU-K", uk: "KU", kashrutukraine: "KU" }, SYM_TXT_OK = { "הרב לאזאר": 1, "K על הסוגר": 1 };
  function canonSym(x) { x = (x || "").toString().trim(); return SYM_ALIAS[lkey(x)] || x; }
  function visSyms(p) { var out = [], seen = {}; (p.symbols || []).forEach(function (x) { var c = canonSym(x); if (!c || seen[lkey(c)]) return; if (!LOGO_SYM[lkey(c)] && !SYM_TXT_OK[c]) return; seen[lkey(c)] = 1; out.push(c); }); return out; }
  function logoChip(name, map, cls) {
    var src = (map === LOGO_SYM && SYM_SPLIT[name]) ? map[SYM_SPLIT[name].logo] : map[lkey(name)], w;
    if (src) { w = el("span", cls); var im = new Image(); im.src = src.indexOf("?") < 0 ? src + "?v=25" : src; /* v111: new logos carry their own ?v=111 */ im.alt = name; im.decoding = "async"; im.loading = "lazy"; w.appendChild(im); }
    else { w = el("span", cls + " txt", map === LOGO_SYM ? symLabel(name) : name); w.setAttribute("dir", "auto"); }
    w.title = name; return w;
  }

  // v25 — hard-liquor rule (Akiva, 8 Nov 2026): bottles in the "alcohol" category never show "approved as is".
  // If the row's details (in the chosen language) carry real conditions (anything beyond the list of stores), the card shows "ⓘ conditions apply" and the popup has the full text; otherwise the spot stays empty.
  // Applies by category, so a product added in admin under this category follows the rule automatically.
  var HARD_CATS = { alcohol: 1 };
  function isHard(p) { return !!HARD_CATS[p.cat] && !p.natural; }
  var FILLER = ("נמכר נמכרים נמכרת ב וב ו ברשת רשת החניות החנויות חנויות בחנות חנות בשוק שוק מוצרי sold in and at the others other stores also " +
    "продается продаётся продаются в и других др магазинах магазине cash carry").split(" ");
  var STOREWORDS = null;
  function storeWords() {
    if (STOREWORDS) return STOREWORDS; STOREWORDS = {};
    FILLER.forEach(function (w) { STOREWORDS[lkey(w)] = 1; });
    var add = function (n) { (n || "").toString().split(/[^0-9A-Za-z\u00C0-\u024F\u0590-\u05ff\u0400-\u04ff&]+/).forEach(function (w) { w = lkey(w.replace(/&/g, " ")); if (w) STOREWORDS[w] = 1; }); (n || "").toString().split(/\s+/).forEach(function (w) { w = lkey(w); if (w) STOREWORDS[w] = 1; }); STOREWORDS[lkey(n)] = 1; };
    (D.stores || []).forEach(function (s) { add(s.name); });
    D.products.forEach(function (p) { (p.stores || []).forEach(add); });
    ["spirits", "wine", "spiritswine", "promo", "skarb", "vynoteka", "superalko", "super", "alko", "premium", "dzerieni", "dzērieni", "latvijas", "ib", "balzams", "noble", "tabakas", "nams", "fix", "price", "lidl", "rimi", "maxima", "lats", "kabinets", "רימי", "מקסימה", "לידל", "פרומו", "בלטס", "ברימי", "במקסימה", "בלידל", "בפרומו", "הכשרה", "ובחנות", "הכשרה"].forEach(function (w) { STOREWORDS[lkey(w)] = 1; });
    return STOREWORDS;
  }
  function condText(p) { return txt(p).details || ""; } // the text the popup shows in the chosen language, so the card never promises details the popup lacks
  function hasCond(p) {
    var sw = storeWords(), rest = [];
    condText(p).split(/[^0-9A-Za-z\u00C0-\u024F\u0590-\u05ff\u0400-\u04ff"'׳״]+/).forEach(function (w) {
      var k = lkey(w.replace(/^[בו]+-?/, function (m) { return sw[lkey(w)] ? "" : m; }));
      if (!k || k.length < 2 || sw[k] || sw[lkey(w)] || sw[lkey(w.replace(/^ו?ב/, ""))]) return; rest.push(w);
    });
    return rest.length > 0 ? rest : null;
  }
  function isNat(p) { return !!p.natural || p.cat === "natural"; }
  /* v61 Akiva 2026-11-09 15:39: Kosher Store products show no "approved as is" / "kosher" label anywhere (main list too); /past unchanged */
  function ksItem(p) { return !PAST && !!p && (!!p.storePage || (p.stores || []).indexOf("Kosher Store") >= 0); }
  function symRow(p) {
    var r = el("div", "syms");
    if (p.storePage && !(p.symbols && p.symbols.length)) return r; // non-food: no kashrut status
    if (!p.natural && p.symPopupOnly && p.symbols && p.symbols.length) return r; /* v117 (Akiva 2026-11-10 21:15/21:40): symPopupOnly - the symbol shows only in the popup; the card shows no symbol chip and no "approved as is" */
    if (p.natural) r.appendChild(el("span", "b b-nat", t("natShort")));
    else if (p.symbols && p.symbols.length) visSyms(p).forEach(function (s) { r.appendChild(logoChip(s, LOGO_SYM, "sy")); if (SYM_SPLIT[s]) { var cp = el("span", "sy-cap", symCap(s)); cp.setAttribute("dir", "auto"); r.appendChild(cp); } });
    else if (p.condApply) { var ct121 = (!isNat(p) && txt(p).card) || ""; var cc = el("span", "b b-cond" + (ct121 ? " b-ctext" : ""), "ⓘ " + (ct121 || t("condApply"))); if (ct121) cc.title = ct121; cc.setAttribute("dir", state.lang === "he" ? "rtl" : "ltr"); r.appendChild(cc); } /* v121 (Akiva 2026-11-11): a conditional product with a short card text (lang.card) shows that condition itself, small, instead of the generic "conditions apply" */
    else if (isHard(p)) { if (hasCond(p)) { var cb = el("span", "b b-cond", "ⓘ " + t("condApply")); cb.setAttribute("dir", state.lang === "he" ? "rtl" : "ltr"); r.appendChild(cb); } }
    else if (!STOREPG && !ksItem(p)) r.appendChild(el("span", "b b-ok", t("asIsShort"))); // Akiva 2026-11-08 22:50: on /store no "approved as is" / "kosher" text
    return r;
  }
  /* Akiva 2026-11-08 21:15/21:18 (v76: replaced by the store-count order below; Rimi and Maxima still lead by count) */
  /* v76 (Akiva 2026-11-10 10:55): a product's stores (card logos and popup) are ordered by how many products of the main list (in stock) each store sells, most first; ties A-Z. Counted from the loaded data in fixIcons(), so it follows every data change. */
  var STORE_N = {};
  function storeRank(d) { var n = {}; ((d && d.products) || []).forEach(function (p) { if (!p || p.outOfStock || p.storePage) return; (p.stores || []).forEach(function (s) { n[s] = (n[s] || 0) + 1; }); }); STORE_N = n; }
  function rmFirst(list) { list = (list || []).slice(); if (list.length < 2) return list; return list.sort(function (a, b) { var d = (STORE_N[b] || 0) - (STORE_N[a] || 0); return d || String(a).localeCompare(String(b), "en", { sensitivity: "base" }); }); }
  function storeRow(p, max) {
    var r = el("div", "strow"), list = rmFirst(p.stores || []), box = el("div", "st-in");
    list.slice(0, max).forEach(function (s) { box.appendChild(logoChip(s, LOGO_ST, "st")); });
    r.appendChild(box);
    if (list.length > max) { var m = el("span", "st-more", t("moreStores", { n: list.length - max })); m.title = list.slice(max).join(", "); r.appendChild(m); }
    r.setAttribute("aria-label", list.join(", ")); r._list = list;
    return r;
  }
  /* no logo cut at the card edge: when the row is too narrow, the last logos move into "+N" (the busiest stores stay first) */
  function fitStores(root) {
    Array.prototype.forEach.call(root.querySelectorAll(".strow"), function (r) {
      var box = r.querySelector(".st-in"), list = r._list; if (!box || !list) return;
      var guard = 12;
      while (guard-- > 0 && box.scrollWidth > box.clientWidth + 1 && box.children.length > 1) {
        box.removeChild(box.lastChild);
        var shown = box.children.length, m = r.querySelector(".st-more");
        if (!m) { m = el("span", "st-more"); r.appendChild(m); }
        m.textContent = t("moreStores", { n: list.length - shown }); m.title = list.slice(shown).join(", ");
      }
    });
  }
  function badges(p, full) {
    var box = el("div", "badges");
    if (p.storePage && !(p.symbols && p.symbols.length)) { if (full) { var x0 = txt(p); if (x0.lang !== state.lang) box.appendChild(el("span", "b b-lang", x0.lang.toUpperCase() + " · " + t("inOther"))); } return box; }
    if (p.natural) box.appendChild(el("span", "b b-nat", "🌾 " + t("natural")));
    else if (p.symbols && p.symbols.length) { var vsb = visSyms(p); if (!full && vsb.length && !p.symPopupOnly) /* v117: no "symbol required" badge on the card */ box.appendChild(el("span", "b b-sym", t("symbol", { s: vsb.map(symLabel).join(", ") }))); }
    else if (p.condApply) box.appendChild(el("span", "b b-cond", "ⓘ " + t("condApply")));
    else if (!isHard(p) && !STOREPG && !ksItem(p)) box.appendChild(el("span", "b b-ok", "✓ " + t("asIs")));
    if (p.notMehadrin) box.appendChild(el("span", "b b-meh", t("notMeh")));
    if (p.outOfStock) box.appendChild(el("span", "b b-oos", t("oos")));
    if (full) { var x = txt(p); if (x.lang !== state.lang) box.appendChild(el("span", "b b-lang", x.lang.toUpperCase() + " · " + t("inOther"))); }
    return box;
  }
  function thumb(p, cls) {
    var w = el("div", cls);
    if (p.img) { var im = new Image(); im.loading = "lazy"; im.decoding = "async"; im.src = p.img; im.alt = txt(p).name; w.appendChild(im); }
    else w.appendChild(el("div", "ph", catOf(p.cat).icon));
    return w;
  }
  function filtered() {
    var q = snorm(state.q).trim(), words = q ? q.split(/\s+/) : [];
    return D.products.filter(function (p) {
      if (state.cats && state.cats.length) { if (state.cats.indexOf(p.cat) < 0) return false; } else if (state.cat && p.cat !== state.cat) return false;
      if (state.store && (p.stores || []).indexOf(state.store) < 0) return false;
      if (state.meh && p.notMehadrin) return false;
      if (state.photo && !p.img) return false;
      if (words.length) { var h = hay(p); for (var i = 0; i < words.length; i++) if (h.indexOf(words[i]) < 0) return false; }
      return true;
    });
  }
  function sortKey(p) { var ci = D.categories.findIndex(function (c) { return c.id === p.cat; }); ci = ci < 0 ? 99 : ci; var c2 = ci < 10 ? "0" + ci : String(ci); return (state.cat || (state.cats && state.cats.length) || STOREPG ? "" : (p.img ? "0" : "1")) + "|" + c2 + "|" + (p.img ? 0 : 1) + "|" + norm(txt(p).name); }
/* v68 (Akiva 2026-11-09 19:20): sort options "A-Z" (product name in the current language) and "Popular" (hidden p.popularity, highest first); none = the usual order. With a search, name/brand hits still come first (v70), the chosen sort applies inside each group. */
  var SORT_T = { he: { sortLabel: "מיון:", sortAz: "א-ב", sortPop: "פופולריות", sortAb: "שם מותג" }, en: { sortLabel: "Sort:", sortAz: "A–Z", sortPop: "Popular", sortAb: "Brand" }, ru: { sortLabel: "Сортировка:", sortAz: "А–Я", sortPop: "Популярные", sortAb: "Бренд" } }; /* v89 (Akiva 13:28): "A-B" pill renamed to brand name */
  Object.keys(SORT_T).forEach(function (l) { if (UI[l]) Object.keys(SORT_T[l]).forEach(function (k) { UI[l][k] = SORT_T[l][k]; }); });
  var SCRIPT_RE = { he: /[\u0590-\u05ff]/, ru: /[\u0400-\u04ff]/, en: /[A-Za-z]/ };
  function sortName(p) { var x = txt(p); return String((x && x.name) || p.brand || "").replace(/^[^0-9A-Za-z\u00c0-\u024f\u0400-\u04ff\u0590-\u05ff]+/, ""); }
/* v74 (Akiva 2026-11-10 10:27 "צריך בעברית לסדר לפי סדר א-ב או לפי סדר A-B של שם המותג בשפה זרה, אם זה ברוסית אז שיכנס בסוף"): Hebrew A–Z = three groups by the first visible word of the card title (the brand line when the card shows one, else the name): 0 Hebrew א→ת, 1 Latin by brand A→Z (no brand: the Latin name), 2 Cyrillic А→Я, 3 anything else. Leading quotes/punctuation/digits ignored. EN/RU A–Z unchanged. */
  var HE_LEAD = /^[^A-Za-z\u00c0-\u024f\u0400-\u04ff\u05d0-\u05ea]+/;
  var HE_COL = {}; function heCol(l) { if (!HE_COL[l]) { try { HE_COL[l] = new Intl.Collator(l, { sensitivity: "base", numeric: true }); } catch (e) { HE_COL[l] = { compare: function (a, b) { return a < b ? -1 : a > b ? 1 : 0; } }; } } return HE_COL[l]; }
  function heAzKey(p) {
    var x = txt(p), name = String((x && x.name) || ""), brand = String(p.brand || (x && x.company) || "");
    if (brand && norm(name).indexOf(norm(brand)) >= 0) brand = ""; /* same rule as the card: a brand already inside the name is not shown on its own line */
    var b = brand.replace(HE_LEAD, ""), n = name.replace(HE_LEAD, "") || name;
    if (/[\u05d0-\u05ea]/.test(n.charAt(0))) return { g: 0, a: n, n: n, l: "he" }; /* v75 (Akiva 10:43): a product with a Hebrew name goes by its Hebrew name, even when it has a brand */
    var first = (b || n).charAt(0), g = /[\u05d0-\u05ea]/.test(first) ? 0 : /[A-Za-z\u00c0-\u024f]/.test(first) ? 1 : /[\u0400-\u04ff]/.test(first) ? 2 : 3;
    return { g: g, a: b || n, n: n, l: g === 0 ? "he" : g === 2 ? "ru" : "en" };
  }
/* v83 (Akiva 2026-11-10 12:18 "צריך להיות גם תצוגה לפי A-B ואז זה יציג לפי שדה שם המותג... מוצרים בלי שם מותג יהיו בסוף לפי א-ב"): sort "A-B" = by the product's brand field, same in HE/EN/RU. Groups: 0 Latin brand A→Z (case-insensitive, accents folded: Ö = O; leading punctuation ignored), 1 Cyrillic brand А→Я, 2 any other brand, 3 no brand → Hebrew name א→ת, 4 no brand and no Hebrew name → English name. Ties: Hebrew name א→ת, then id. */
  var AB_LEAD = /^[^0-9A-Za-z\u00c0-\u024f\u0400-\u04ff\u0590-\u05ff]+/;
  function abFold(s) { s = String(s || ""); try { s = s.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); } catch (e) {} return s.replace(/[\u0141\u0142]/g, "l").replace(/[\u00d8\u00f8]/g, "o").replace(/\u00df/g, "ss").replace(/[\u00c6\u00e6]/g, "ae").toLowerCase(); }
  function abKey(p) {
    var he = String((p.he && p.he.name) || "").replace(HE_LEAD, ""), en = String((p.en && p.en.name) || (p.ru && p.ru.name) || "").replace(AB_LEAD, "");
    var b = String(p.brand || "").trim().replace(AB_LEAD, "");
    if (b) { var c = b.charAt(0), g = /[0-9A-Za-z\u00c0-\u024f]/.test(c) ? 0 : /[\u0400-\u04ff]/.test(c) ? 1 : 2; return { g: g, a: g === 0 ? abFold(b) : b, l: g === 0 ? "en" : g === 1 ? "ru" : "he", h: he }; }
    if (/[\u05d0-\u05ea]/.test(he)) return { g: 3, a: he, l: "he", h: he };
    return { g: 4, a: abFold(en), l: "en", h: he };
  }
  function sortList(list, qw) {
    var grp = function (p) { return (qw && qw.length && typeof nameHit === "function") ? nameHit(p, qw) : 0; };
    var col; try { col = new Intl.Collator(state.lang, { sensitivity: "base", numeric: true }); } catch (e) { col = { compare: function (a, b) { return a < b ? -1 : a > b ? 1 : 0; } }; }
    var re = SCRIPT_RE[state.lang] || SCRIPT_RE.en;
    var heAz = state.sort === "az" && state.lang === "he";
    var k = list.map(function (p) { var n = sortName(p); return { p: p, g: grp(p), n: n, s: re.test(n.charAt(0)) ? 0 : 1, b: String(p.brand || ""), k: sortKey(p), v: +p.popularity || 0, h: heAz ? heAzKey(p) : null, ab: state.sort === "ab" ? abKey(p) : null }; });
    k.sort(function (a, b) {
      if (a.g !== b.g) return a.g - b.g;
      if (heAz) { var c1 = heCol(a.h.l), c0 = heCol("he"); return a.h.g - b.h.g || c1.compare(a.h.a, b.h.a) || c0.compare(a.h.n, b.h.n) || (a.p.id < b.p.id ? -1 : a.p.id > b.p.id ? 1 : 0); } /* v74 */
      if (state.sort === "ab") { var cb = heCol(a.ab.l), ch = heCol("he"); return a.ab.g - b.ab.g || cb.compare(a.ab.a, b.ab.a) || ch.compare(a.ab.h, b.ab.h) || (a.p.id < b.p.id ? -1 : a.p.id > b.p.id ? 1 : 0); } /* v83 */
      if (state.sort === "az") return a.s - b.s || col.compare(a.n, b.n) || col.compare(a.b, b.b);
      if (state.sort === "pop") return b.v - a.v || col.compare(a.n, b.n);
      return a.k < b.k ? -1 : a.k > b.k ? 1 : 0;
    });
    return k.map(function (o) { return o.p; });
  }
  function syncSort() { document.querySelectorAll(".sort-b").forEach(function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-sort") === state.sort ? "true" : "false"); }); }
  function render() {
    var list = filtered();
    /* v70 Akiva 2026-11-09 20:39: the search also finds words that are only in the details (all 3 languages); products whose name / brand / hidden keywords match come first, details-only matches after them */ var qw = snorm(state.q).trim(); qw = qw ? qw.split(/\s+/) : [];
    list = sortList(list, typeof qw !== "undefined" ? qw : []); syncSort(); /* v68 */
    if (STOREPG) list = list.filter(function (p) { return !p.storePage; }).concat(list.filter(function (p) { return !!p.storePage; })); /* v80: Judaica & gifts after the food, under their own subheading */
    var v80food = foodN(list), v80sub = false;
    var grid = $("grid"); grid.textContent = "";
    var frag = document.createDocumentFragment();
    list.slice(0, STOREPG ? list.length : state.shown).forEach(function (p) { /* v80: /store shows all its items at once, so Judaica & gifts are visible under their subheading */
      var x = txt(p);
      if (STOREPG && p.storePage && !v80sub && v80food) { v80sub = true; var sh = el("h3", "grid-sub", "🎁 " + v80t("jud")); sh.setAttribute("dir", state.lang === "he" ? "rtl" : "ltr"); frag.appendChild(sh); }
      var card = el("button", "card" + (p.outOfStock ? " oos" : "")); card.type = "button"; card.setAttribute("data-id", p.id);
      var th = thumb(p, "thumb"); if (!p.storePage && !STOREPG && !ksItem(p)) th.appendChild(el("span", "kbadge", t("kosher"))); if (p.notMehadrin) th.appendChild(el("span", "mtag", t("mehShort"))); if (p.outOfStock) th.appendChild(el("span", "otag", t("oos"))); card.appendChild(th);
      var b = el("div", "cbody");
      var brand = p.brand || x.company || ""; if (brand && norm(x.name || "").indexOf(norm(brand)) >= 0) brand = ""; if (brand) { var br = el("p", "brand", brand); br.setAttribute("dir", fdir(brand, state.lang)); b.appendChild(br); }
      var nm = el("p", "pname", x.name); nm.setAttribute("dir", fdir(x.name, x.lang)); if (x.lang !== state.lang) nm.setAttribute("lang", x.lang); b.appendChild(nm);
      var sn = el("p", "snip", x.details || ""); sn.setAttribute("dir", tdir(x.lang)); sn.setAttribute("lang", x.lang); b.appendChild(sn);
      var meta = el("div", "cmeta"); meta.appendChild(symRow(p));
      if (STOREPG) { /* Akiva 2026-11-08 22:50: every /store item is from the Kosher Store, so no store logo on the cards (popup still lists the stores) */ } else if (p.stores && p.stores.length) { var cap = window.innerWidth <= 640 ? 3 : 4; meta.appendChild(storeRow(p, p.stores.length > cap ? cap - 1 : cap)); } else if (isNat(p) && (x.card || x.details)) { var nt = el("div", "strow ntxt" + (x.card ? "" : " auto"), x.card || x.details); nt.setAttribute("dir", tdir(x.lang)); meta.appendChild(nt); } else meta.appendChild(el("div", "strow empty"));
      b.appendChild(meta);
      card.appendChild(b);
      card.addEventListener("click", function () { openModal(p); });
      frag.appendChild(card);
    });
    grid.appendChild(frag);
    fitStores(grid);
    // natural cards: a long conditions text gives way to a short "conditions apply" line (the popup has it all)
    Array.prototype.forEach.call(grid.querySelectorAll(".ntxt.auto"), function (n) { if (n.scrollHeight > n.clientHeight + 1) { n.textContent = "ⓘ " + t("condApply"); n.classList.add("cond"); n.setAttribute("dir", state.lang === "he" ? "rtl" : "ltr"); } });
    $("more").parentNode.hidden = STOREPG || list.length <= state.shown; /* v120 (Akiva 2026-11-10 22:47): when the "בחנות הכשרה" filter (category kosherstore, or the Kosher Store store filter) is active on the home page, one link after the results goes to the full Kosher Store list (/store), keeping the language */ var kf120 = $("ks-full-row"); if (!kf120 && $("more")) { var mr120 = $("more").parentNode; kf120 = el("div", "more-row ks-full-row"); kf120.id = "ks-full-row"; mr120.parentNode.insertBefore(kf120, mr120.nextSibling); } if (kf120) { kf120.textContent = ""; var ks120 = !PAST && !STOREPG && list.length > 0 && (state.cat === "kosherstore" || (state.cats || []).indexOf("kosherstore") >= 0 || lkey(state.store || "") === "kosherstore"); kf120.hidden = !ks120; if (ks120) { var ka120 = el("a", "btn ks-full", ({ he: "לרשימה המלאה של המוצרים", en: "Full list of the store's products", ru: "Полный список товаров магазина" })[state.lang] || "Full list of the store's products"); ka120.href = "store?lang=" + state.lang; ka120.setAttribute("dir", state.lang === "he" ? "rtl" : "ltr"); ka120.setAttribute("lang", state.lang); kf120.appendChild(ka120); } }
    /* v50 (Akiva 2026-11-09 11:53): Kosher Store filter chip + "All Kosher Store products" button removed */
    $("empty").hidden = list.length > 0;
    var c = (state.cats && state.cats.length) ? state.cats.map(function (id) { return catOf(id)[state.lang]; }).join(" + ") : state.cat ? catOf(state.cat)[state.lang] : null;
    $("results-title").textContent = (list.length && !v80food) ? (c || v80t("jud")) : c ? t("foundCat", { c: c, n: v80food }) : t("found", { n: v80food }); /* v80: non-food not counted */ var kr80 = $("ks-all-res"); if (!kr80 && $("results-title")) { kr80 = el("div", "ks-all-res"); kr80.id = "ks-all-res"; $("results-title").parentNode.insertBefore(kr80, $("results-title").nextSibling); } if (kr80) { kr80.textContent = ""; var ksSel = !PAST && !STOREPG && (state.cat === "kosherstore" || (state.cats || []).indexOf("kosherstore") >= 0 || lkey(state.store || "") === "kosherstore"); kr80.hidden = true; } /* v83 (Akiva 12:24 "תמחוק את זה איפה שהוספת"): no 🛒 "All Kosher Store products" button here any more */
    if (window.KR_afterRender) window.KR_afterRender(list); /* v78 design hook */
  }
  function renderCats() {
    /* v65 (Akiva 2026-11-09 16:10): desktop (mouse) — chips change colour on hover, wider gaps, and hovering/clicking "All" opens a panel to filter by one or several categories (state.cats). Touch phones keep tap = one category. */
    var box = $("cats"); box.textContent = "";
    var counts = {}; D.products.forEach(function (p) { counts[p.cat] = (counts[p.cat] || 0) + 1; });
    var FINE = mcFine();
    var mk = function (id, icon, label, n) {
      var b = el("button", "cat"); b.type = "button"; b.setAttribute("role", "listitem"); b.setAttribute("data-cat", id);
      b.appendChild(el("span", "", icon)); b.appendChild(el("span", "", label)); if (n != null) b.appendChild(el("span", "n", String(n))); /* v80: no number on the non-food tile */
      if (id === "" && FINE) { b.classList.add("cat-all"); b.appendChild(el("span", "caret", "\u25BE")); b.setAttribute("aria-haspopup", "true"); b.setAttribute("aria-expanded", "false"); b.setAttribute("aria-controls", "catpanel"); }
      b.addEventListener("click", function () { state.cat = id; state.cats = []; state.shown = PAGE; mcSync(); render(); if (id === "" && mcFine()) mcOpen(); else mcClose(); });
      box.appendChild(b);
    };
    mk("", "\uD83D\uDED2", t("all"), foodN(D.products));
    D.categories.forEach(function (c) { if (counts[c.id]) mk(c.id, c.icon, c[state.lang], c.id === "ks-other" ? null : counts[c.id]); });
    mcBuild(counts);
    mcSync();
  }
  var MC_T = { he: { title: "\u05E1\u05D9\u05E0\u05D5\u05DF \u05DC\u05E4\u05D9 \u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D5\u05EA (\u05D0\u05D7\u05EA \u05D0\u05D5 \u05DB\u05DE\u05D4)", reset: "\u05D4\u05E6\u05D2 \u05D4\u05DB\u05DC" }, en: { title: "Filter by category (one or several)", reset: "Show all" }, ru: { title: "\u0424\u0438\u043B\u044C\u0442\u0440 \u043F\u043E \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F\u043C (\u043E\u0434\u043D\u0430 \u0438\u043B\u0438 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E)", reset: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0441\u0435" } };
  var mcTimer = null;
  function mcFine() { try { return window.matchMedia("(hover: hover) and (pointer: fine)").matches; } catch (e) { return false; } }
  function mcAll() { return $("cats") && $("cats").querySelector(".cat-all"); }
  function mcPanel() {
    var p = $("catpanel"); if (p) return p;
    var box = $("cats"); if (!box || !box.parentNode) return null;
    p = el("div", "catpanel"); p.id = "catpanel"; p.hidden = true; p.setAttribute("role", "group");
    box.parentNode.classList.add("mc-host"); box.parentNode.appendChild(p);
    p.addEventListener("mouseenter", function () { clearTimeout(mcTimer); });
    p.addEventListener("mouseleave", function () { mcLater(); });
    p.addEventListener("keydown", function (e) { if (e.key === "Escape") { mcClose(); var a = mcAll(); if (a) a.focus(); } });
    p.addEventListener("focusout", function (e) { var r = e.relatedTarget; if (r && !p.contains(r) && r !== mcAll()) mcClose(); });
    document.addEventListener("click", function (e) { if (p.hidden) return; var a = mcAll(); if (p.contains(e.target) || (a && a.contains(e.target))) return; mcClose(); });
    window.addEventListener("resize", function () { if (!p.hidden) mcPlace(); });
    return p;
  }
  function mcBuild(counts) {
    var p = mcPanel(); if (!p) return;
    var a = mcAll();
    if (!a) { p.hidden = true; return; }
    var L = MC_T[state.lang] || MC_T.en;
    p.textContent = ""; p.setAttribute("dir", state.lang === "he" ? "rtl" : "ltr"); p.setAttribute("aria-label", L.title);
    p.appendChild(el("p", "cp-title", L.title));
    var list = el("div", "cp-list");
    D.categories.forEach(function (c) {
      if (!counts[c.id]) return;
      var lab = el("label", "cp-item"); var cb = document.createElement("input"); cb.type = "checkbox"; cb.value = c.id;
      cb.addEventListener("change", function () { var ids = []; Array.prototype.forEach.call(p.querySelectorAll(".cp-item input"), function (x) { if (x.checked) ids.push(x.value); }); state.cats = ids; state.cat = ""; state.shown = PAGE; mcSync(); render(); });
      lab.appendChild(cb); lab.appendChild(el("span", "cp-ic", c.icon)); lab.appendChild(el("span", "cp-nm", c[state.lang])); if (c.id !== "ks-other") lab.appendChild(el("span", "n", String(counts[c.id])));
      list.appendChild(lab);
    });
    p.appendChild(list);
    var rs = el("button", "cp-reset", L.reset); rs.type = "button";
    rs.addEventListener("click", function () { state.cat = ""; state.cats = []; state.shown = PAGE; mcSync(); render(); });
    p.appendChild(rs);
    a.addEventListener("mouseenter", function () { if (mcFine()) mcOpen(); });
    a.addEventListener("mouseleave", function () { mcLater(); });
    a.addEventListener("keydown", function (e) { if (e.key === "ArrowDown") { e.preventDefault(); mcOpen(); var f = p.querySelector("input"); if (f) f.focus(); } else if (e.key === "Escape") mcClose(); });
  }
  function mcSync() {
    var multi = state.cats && state.cats.length;
    Array.prototype.forEach.call(($("cats") || document).querySelectorAll(".cat"), function (b) { var id = b.getAttribute("data-cat") || ""; var on = id === "" ? (!state.cat && !multi) : multi ? state.cats.indexOf(id) >= 0 : state.cat === id; b.setAttribute("aria-pressed", on ? "true" : "false"); });
    var p = $("catpanel"); if (p) Array.prototype.forEach.call(p.querySelectorAll(".cp-item input"), function (x) { x.checked = multi ? state.cats.indexOf(x.value) >= 0 : (state.cat === x.value); });
  }
  function mcPlace() {
    var p = $("catpanel"), a = mcAll(); if (!p || !a) return;
    var host = p.parentNode, hr = host.getBoundingClientRect(), ar = a.getBoundingClientRect();
    p.style.top = Math.round(ar.bottom - hr.top + 6) + "px";
    var w = p.offsetWidth, maxL = Math.max(0, hr.width - w - 8), left;
    if (state.lang === "he") left = ar.right - hr.left - w; else left = ar.left - hr.left;
    left = Math.max(8, Math.min(maxL, left));
    p.style.left = Math.round(left) + "px"; p.style.right = "auto";
  }
  function mcOpen() { var p = mcPanel(), a = mcAll(); if (!p || !a) return; clearTimeout(mcTimer); if (p.hidden) { p.hidden = false; mcPlace(); } a.setAttribute("aria-expanded", "true"); }
  function mcClose() { clearTimeout(mcTimer); var p = $("catpanel"), a = mcAll(); if (p) p.hidden = true; if (a) a.setAttribute("aria-expanded", "false"); }
  function mcLater() { clearTimeout(mcTimer); mcTimer = setTimeout(function () { var p = $("catpanel"); if (p && (p.matches(":hover") || p.querySelector(":focus-visible"))) return; var a = mcAll(); if (a && a.matches(":hover")) return; mcClose(); }, 350); }
  /* Akiva 2026-11-08 23:01: store addresses in the store list are links to their Google Maps page (new tab); the words stay as written */
  function mapsUrl(q) { return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(q); }
  function ksMapLink() { var u = null; ((D.banner && D.banner.items) || []).forEach(function (it) { if (!u && it.id === "store" && it.nav && /maps/.test(it.nav)) u = it.nav; }); return u; }
  function addrInto(box, info, fixed) {
    String(info).split(/\s*;\s*/).forEach(function (seg, si) {
      if (si) box.appendChild(document.createTextNode("; "));
      if (!seg || !/\d/.test(seg) || /^\s*(tel|тел|\+|www\.|https?:)/i.test(seg)) { box.appendChild(document.createTextNode(seg)); return; }
      var m = seg.match(/^([^:\d]+:\s*)(.*)$/), label = m ? m[1] : "", rest = m ? m[2] : seg;
      var parts = rest.split(/\s*,\s*/), loc = parts.filter(function (p) { return !/\d/.test(p); }).join(" ").replace(/[()]/g, " ").replace(/\s+/g, " ").trim() || "Riga";
      if (/рига/i.test(loc)) loc = loc.replace(/рига/i, "Riga");
      if (label) box.appendChild(document.createTextNode(label));
      parts.forEach(function (p, pi) {
        if (pi) box.appendChild(document.createTextNode(", "));
        if (!/\d/.test(p)) { box.appendChild(document.createTextNode(p)); return; }
        var q = p.replace(/\([^)]*\)/g, "").replace(/\bst\.(?=\s|$)/g, "iela").replace(/\s+/g, " ").trim() + ", " + loc + ", Latvia";
        var a = extLink("st-addr", fixed || mapsUrl(q), p); a.dir = "ltr"; a.title = "📍 Google Maps"; box.appendChild(a);
      });
    });
  }
  function renderStores() {
    var sel = $("store"), cur = state.store; while (sel.options.length > 1) sel.remove(1);
    var counts = {}; D.products.forEach(function (p) { (p.stores || []).forEach(function (s) { counts[s] = (counts[s] || 0) + 1; }); });
    Object.keys(counts).filter(function (s) { return lkey(s) !== "kosherstore"; }).sort(function (a, b) { return counts[b] - counts[a]; }).forEach(function (s) { var o = el("option", "", s + " (" + counts[s] + ")"); o.value = s; sel.appendChild(o); });
    sel.value = cur;
    var ul = $("store-list"); ul.textContent = "";
    (D.stores || []).forEach(function (s) {
      var li = el("li"), su = storeUrl(s.name), head = su ? extLink("st-name", su) : li; if (su) { head.title = s.name + " ↗"; li.appendChild(head); }
      if (LOGO_ST[lkey(s.name)]) { var lg = logoChip(s.name, LOGO_ST, "st big list"); head.appendChild(lg); } head.appendChild(el("b", "", s.name));
      var info = ((state.lang === "ru" && s.ru) ? s.ru : (state.lang === "he" && s.he) ? s.he : s.en || "").replace(/^\s*(list of stores|список магазинов)\.?\s*$/i, ""); if (su) info = info.replace(/;?\s*www\.[^\s;]+\s*$/i, ""); if (info) { var sp = el("span", "", ""); sp.setAttribute("dir", "auto"); addrInto(sp, info, lkey(s.name) === "kosherstore" ? ksMapLink() : null); li.appendChild(sp); } /* Akiva 2026-11-08 23:01: every store address opens its Google Maps page */
      if (su) { var host = su.replace(/^https?:\/\/(www\.)?/i, "").split(/[\/?#]/)[0]; var ul2 = extLink("st-url", su, "🔗 " + (s.urlKind === "site" ? host : t("storeLink") + " · " + host)); ul2.setAttribute("dir", "ltr"); li.appendChild(ul2); }
      /* v42 (Akiva 2026-11-08 23:11): no Kosher Store logo in the store list entry either */
      if (lkey(s.name) === "kosherstore" && !STOREPG) { li.appendChild(document.createElement("br")); li.appendChild(ksShowBtn("")); } /* v83 (Akiva 12:24): the Kosher Store entry has the same "Show products (N)" button as the other stores, but it opens /store (its full list) */
      if (counts[s.name] && lkey(s.name) !== "kosherstore") { var bt = el("button", "", t("storesBtn") + " (" + counts[s.name] + ")"); bt.type = "button"; bt.addEventListener("click", function () { state.store = s.name; sel.value = s.name; state.shown = PAGE; render(); document.getElementById("products").scrollIntoView({ behavior: "smooth" }); }); li.appendChild(document.createElement("br")); li.appendChild(bt); }
      ul.appendChild(li);
    });
  }
  // Akiva 2026-11-08 20:28: the fruit & vegetable notes as a titled, grouped chip layout; other notes as tidy cards. Text is parsed from explain[lang].notes, words kept as written.
  var PRODUCE_RE = /(ירקות|פירות|vegetable|fruit|овощ|фрукт)/i;
  function parseProduce(n) {
    var s = String(n).replace(/^\s*\*\s*/, ""), groups = [], re = /([^:.()]+?):\s*([^.()]+)\.?/g, m, rest = s;
    while ((m = re.exec(s))) { if (!PRODUCE_RE.test(m[1])) continue; var items = m[2].split(/\s*,\s*/).map(function (x) { return x.trim(); }).filter(Boolean); if (items.length < 2) continue; groups.push({ label: m[1].trim(), items: items }); rest = rest.replace(m[0], ""); }
    if (!groups.length) return null;
    return { groups: groups, remark: rest.replace(/^[\s.]+|[\s.]+$/g, "").replace(/^\(\s*/, "").replace(/\s*\)\.?$/, "") };
  }
  function toneOf(label) { if (/קשה|בלתי אפשרי|hard|impossible|трудно|невозможно/i.test(label)) return "t-no"; if (/שטיפה|rins|wash|помыть|мыть/i.test(label)) return "t-ok"; return "t-chk"; }
  function renderNotes(ex) {
    var N = $("notes"); N.textContent = ""; var notes = (ex && ex.notes) || [];
    var dir = state.lang === "he" ? "rtl" : "auto", prod = [], other = [];
    notes.forEach(function (n) { var pr = parseProduce(n); if (pr) prod.push(pr); else other.push(n); });
    /* v70 Akiva 2026-11-09 20:43: the former "fruits & vegetables" product text, as its own card above the checking card; explain[lang].produceGenTitle / produceGen (one line per topic), editable in admin texts JSON */
    if (ex && ex.produceGen) {
      var gb = el("div", "produce pgen"); gb.setAttribute("dir", dir); gb.appendChild(el("h3", "", ex.produceGenTitle || ""));
      var gl = el("ul", "pgen-list"); String(ex.produceGen).split(/\n+/).forEach(function (ln) { ln = ln.trim(); if (!ln) return; var li = el("li", "", ln); li.setAttribute("dir", dir); gl.appendChild(li); });
      gb.appendChild(gl); N.appendChild(gb);
    }
    /* v121 (Akiva 2026-11-11 10:43): salad leaves and mushrooms moved out of the products into their own cards, same design as the fruits & vegetables card; explain[lang].leavesGenTitle / leavesGen and mushGenTitle / mushGen (one line per topic), editable in admin texts JSON */
    [["leavesGenTitle", "leavesGen"], ["mushGenTitle", "mushGen"]].forEach(function (k) {
      if (!ex || !ex[k[1]]) return;
      var xb = el("div", "produce pgen"); xb.setAttribute("dir", dir); xb.appendChild(el("h3", "", ex[k[0]] || ""));
      var xl = el("ul", "pgen-list"); String(ex[k[1]]).split(/\n+/).forEach(function (ln) { ln = ln.trim(); if (!ln) return; var li = el("li", "", ln); li.setAttribute("dir", dir); xl.appendChild(li); });
      xb.appendChild(xl); N.appendChild(xb);
    });
    if (prod.length) {
      var box = el("div", "produce"); var h = el("h3", "", t("produceTitle")); box.appendChild(h);
      var gr = el("div", "pg-grid");
      prod.forEach(function (pr) {
        pr.groups.forEach(function (g) {
          var c = el("div", "pg " + toneOf(g.label)); c.setAttribute("dir", dir);
          c.appendChild(el("p", "pg-h", g.label));
          var ch = el("div", "pg-chips"); g.items.forEach(function (it) { ch.appendChild(el("span", "pg-chip", it)); }); c.appendChild(ch);
          gr.appendChild(c);
        });
        if (pr.remark) { var last = gr.lastChild; var r = el("p", "pg-rem", "🍓 " + pr.remark); r.setAttribute("dir", dir); last.appendChild(r); }
      });
      box.appendChild(gr); N.appendChild(box);
    }
    // Akiva 2026-11-08 20:53: the yashan note as its own card in the fruit & vegetable card's style; text from explain[lang].yashan (editable in admin, texts JSON)
    if (ex && ex.yashan) {
      var yb = el("div", "produce yashan"); yb.setAttribute("dir", dir); yb.appendChild(el("h3", "", ex.yashanTitle || t("yashanTitle")));
      var yc = el("div", "pg t-amb"); yc.appendChild(el("p", "pg-txt", String(ex.yashan))); yb.appendChild(yc); N.appendChild(yb);
    }
    if (other.length) {
      var ob = el("div", "more-notes"); if (prod.length) ob.appendChild(el("h3", "", t("notesTitle")));
      var ul = el("ul"); other.forEach(function (n) { var li = el("li", "", String(n).replace(/^\s*\*\s*/, "")); li.setAttribute("dir", dir); ul.appendChild(li); }); ob.appendChild(ul); N.appendChild(ob);
    }
  }
  var SYMBOL_MIN_HOME = 5; /* v80: the main page's kashrut-symbols section shows a symbol only from this many products (change here) */
  function renderLegend() {
    var L = $("legend"); L.textContent = ""; var ex = (D.explain && D.explain[state.lang]) || {};
    var row = function (cls, label, text) { if (!text) return; var r = el("div", "row"); r.appendChild(el("span", "b " + cls, label)); r.appendChild(el("p", "", text)); L.appendChild(r); };
    row("b-nat", t("natShort"), (D.explain && D.explain[state.lang] && D.explain[state.lang].legendNat) || t("legendNat2")); // Akiva 2026-11-08 20:27: green "natural" label + a plain explanation (no repeated word)
    row("b-sym", t("symbol", { s: "OU / KLBD…" }), ex.symbol || t("legendSym"));
    row("b-ok", "✓ " + t("asIs"), t("legendAsIs"));
    row("b-meh", t("notMeh"), ex.mehadrin || t("legendMeh"));
    // Akiva 2026-11-08: no "out of stock" entry in the status legend
    if (ex.prefer) { var p = el("p", "", ex.prefer); p.style.marginTop = "6px"; L.appendChild(p); }
    var S = $("symbols"); S.textContent = ""; // v28: every kashrut symbol used by a product (most used first), so admin-added symbols appear too; logo when known, else a text chip
    var symN = {}, symOrder = ["OU", "KLBD", "OK", "Star-K", "KF", "MK", "NWK", "KSA", "בית יוסף", "בד\"ץ העדה החרדית", "הרב לנדא"];
    var LEGEND_SKIP = { "הרב לאזאר": 1, "K על הסוגר": 1 }; // Akiva 2026-11-08 20:54: Rabbi Lazar not needed in the symbols list; the bread's clip K is not an agency symbol
    var HOME80 = !PAST && !STOREPG; /* v80 (Akiva 2026-11-10 11:58): on the main page only symbols used by at least SYMBOL_MIN_HOME in-stock main-list products (Kosher Store items not counted), most used first, bigger; rare symbols stay on cards, popups and search */
    D.products.forEach(function (p) { if (HOME80 && (p.outOfStock || p.storePage || p.cat === "kosherstore")) return; if (!p.natural) visSyms(p).forEach(function (x) { if (x && !LEGEND_SKIP[x] && LOGO_SYM[lkey(x)]) symN[x] = (symN[x] || 0) + 1; }); }); /* v43: legend = logo symbols only */
    if (HOME80) Object.keys(symN).forEach(function (k) { if (symN[k] < SYMBOL_MIN_HOME) delete symN[k]; }); S.classList.toggle("sym-home", HOME80);
    Object.keys(symN).sort(function (a, b) { if (HOME80) return symN[b] - symN[a] || a.localeCompare(b); /* v80: by count */ var ia = symOrder.indexOf(a), ib = symOrder.indexOf(b); if (ia < 0) ia = 99; if (ib < 0) ib = 99; return ia - ib || symN[b] - symN[a] || a.localeCompare(b); }).forEach(function (s) { var it = el("div", "m-logo"); it.appendChild(logoChip(s, LOGO_SYM, "sy big")); if (LOGO_SYM[lkey(s)]) { var sm = el("small", "", s); sm.setAttribute("dir", "auto"); it.appendChild(sm); } S.appendChild(it); });
    renderNotes(ex);
    var src = $("sources"); src.textContent = ""; var names = { he: "רשימה בעברית (PDF)", en: "English list (PDF)", ru: "Русский список (PDF)", facebook: "Facebook: Kosher Products in Latvia" };
    Object.keys(D.sources || {}).forEach(function (k) { if (k === "facebook") return; /* Akiva 2026-11-08 22:54: Facebook only on the Kosher Store card */ var a = el("a", "", names[k] || k); a.href = D.sources[k]; a.rel = "noopener"; src.appendChild(a); });
    $("foot-date").textContent = ""; // Akiva 2026-11-08: one date only (the "updated" line)
    var um = D.updatedMonth && (D.updatedMonth[state.lang] || D.updatedMonth.en); if ($("foot-updated")) $("foot-updated").textContent = um ? t("updatedLabel") + um : "";
  }
  /* v48 (Akiva 2026-11-09 11:45): a round language button in the popup's other top corner (opposite the X) switches ONLY that popup's text HE -> EN -> RU -> HE; the page language and the saved choice are not touched; a popup always opens in the page language. */
  var M_NEXT = { he: "en", en: "ru", ru: "he" }, M_CODE = { he: "HE", en: "EN", ru: "RU" }, M_LNAME = { he: "עברית", en: "English", ru: "Русский" }, M_SHOW = { he: "הצג בעברית", en: "Show in English", ru: "Показать на русском" }, mCur = null, mLang = "";
  /* v51 (Akiva 2026-11-09 12:14): a product's p.link = { url, he/en/ru: words in that language's text to turn into the link, label: { he, en, ru } } — the list/PDF link from the Chabad Latvia kosher lists. The words become the link when the text carries them; otherwise a "Full list" link follows the text. Every language gets the link. */
  function fillDetails(box, p, x) {
    box.textContent = ""; var s = x.details || "", lk = p.link, url = lk && (typeof lk === "string" ? lk : lk.url);
    if (!url || !/^https?:\/\//i.test(url)) { box.textContent = s; return; }
    var mk = function (label) { var a = el("a", "m-link", label); a.href = url; a.target = "_blank"; a.rel = "noopener"; a.setAttribute("dir", "auto"); return a; };
    var w = (typeof lk === "object" && lk[x.lang]) || "", at = w ? s.indexOf(w) : -1;
    if (at >= 0) { box.appendChild(document.createTextNode(s.slice(0, at))); box.appendChild(mk(w)); box.appendChild(document.createTextNode(s.slice(at + w.length))); return; }
    if (s) box.appendChild(document.createTextNode(s));
    var lab = (typeof lk === "object" && lk.label && (lk.label[x.lang] || lk.label.en)) || t("fullList");
    var line = el("span", "m-link-line"); line.appendChild(mk(lab)); box.appendChild(line);
  }
  function fillModalBody(p, lang) {
    var keep = state.lang; state.lang = lang;
    try {
    var x = txt(p);
    $("m-brand").textContent = p.brand || x.company || ""; $("m-brand").setAttribute("dir", fdir(p.brand || x.company || "", lang));
    $("m-name").textContent = x.name; $("m-name").setAttribute("dir", fdir(x.name, x.lang));
    var bb = $("m-badges"); bb.replaceWith(Object.assign(badges(p, true), { id: "m-badges" }));
    fillDetails($("m-details"), p, x); $("m-details").setAttribute("dir", tdir(x.lang)); $("m-details").setAttribute("lang", x.lang);
    var st = $("m-stores"); st.textContent = "";
    if (!p.natural && visSyms(p).length) { st.appendChild(el("p", "m-lab", t("symOnPack"))); var sc = el("div", "m-logos"); visSyms(p).forEach(function (s) { var it = el("div", "m-logo"); it.appendChild(logoChip(s, LOGO_SYM, "sy big")); var cap = symCap(s); if (cap) { var sm = el("small", "", cap); sm.setAttribute("dir", "auto"); it.appendChild(sm); } sc.appendChild(it); }); st.appendChild(sc); }
    if (p.stores && p.stores.length) { st.appendChild(el("p", "m-lab", t("soldAt"))); var c = el("div", "m-logos"); rmFirst(p.stores).forEach(function (s) { var su = storeUrl(s), it = su ? extLink("m-logo lnk", su) : el("div", "m-logo"); if (su) it.title = s + " ↗"; it.appendChild(logoChip(s, LOGO_ST, "st big")); if (LOGO_ST[lkey(s)]) { var sm2 = el("small", "", s); sm2.setAttribute("dir", "auto"); it.appendChild(sm2); } c.appendChild(it); }); st.appendChild(c); }
    var meta = [(p.review || []).indexOf("from_facebook_only") >= 0 ? t("fromFb") : t("source")];
    // Akiva 2026-11-08: no visible photo source (imgSrc stays in the data only)
    $("m-meta").textContent = ""; // Akiva 2026-11-08 20:54: no visible list-source line (the source stays in the data only)
    // v64 (Akiva 2026-11-09 16:04): illustrative photo -> small grey "may differ" line under the popup photo, in the popup's language
    var inote = $("m-inote"); if (!inote) { var mim = $("m-img"); if (mim && mim.parentNode) { inote = el("div", "m-inote"); inote.id = "m-inote"; mim.parentNode.insertBefore(inote, mim.nextSibling); } }
    if (inote) { var ill = !!(p.img && p.imgIllustrative); inote.textContent = ill ? (IMG_NOTE[lang] || IMG_NOTE.en) : ""; inote.hidden = !ill; inote.setAttribute("dir", lang === "he" ? "rtl" : "ltr"); inote.setAttribute("lang", lang); }
    } finally { state.lang = keep; }
    var body = document.querySelector("#modal .m-body"); if (body) { body.setAttribute("dir", lang === "he" ? "rtl" : "ltr"); body.setAttribute("lang", lang); }
    mCur = p; mLang = lang;
    var lb = $("m-lng"); if (lb) { var nx = M_NEXT[lang]; lb.textContent = M_CODE[nx]; lb.setAttribute("lang", nx); lb.setAttribute("aria-label", M_SHOW[nx]); lb.title = M_LNAME[nx]; }
  }
  var IMG_NOTE = { he: "ייתכן הבדל בין המוצר לתמונה", en: "The product may differ from the photo", ru: "Товар может отличаться от фото" };

  /* v73 (Akiva 2026-11-10 09:42/09:46): anonymous usage counts for the admin "Stats" page and the weekly popularity update. Nothing personal is sent or stored (no cookie, no id, no IP): only the page + language of a visit, the final search term, and which product popup was opened. Batched, sent with sendBeacon. */
  var TPG = PAST ? "/past" : STOREPG ? "/store" : "/", TQ = [], TT = null, TLAST = "", TS = null;
  function tSend() { clearTimeout(TT); TT = null; TQ.length = 0; return; /* static hosting (GitHub Pages): no /api/t visit counter */ if (!TQ.length) return; var body = JSON.stringify({ e: TQ.splice(0, 20) }); try { if (navigator.sendBeacon && navigator.sendBeacon("/api/t", new Blob([body], { type: "text/plain" }))) return; } catch (e) {} try { fetch("/api/t", { method: "POST", body: body, keepalive: true, headers: { "content-type": "text/plain" } }).catch(function () {}); } catch (e) {} }
  function tRef() { /* v122: only the referring site's domain (no path, no query); "" = direct / same site */ try { if (!document.referrer) return ""; var h = new URL(document.referrer).hostname.toLowerCase().replace(/^www\./, ""); return h === location.hostname.toLowerCase() ? "" : h.slice(0, 80); } catch (e) { return ""; } }
  function tAdd(e) { try { if (location.protocol === "file:") return; TQ.push(e); if (TQ.length >= 10) tSend(); else if (!TT) TT = setTimeout(tSend, 4000); } catch (x) {} }
  function tHits(q) { var w = snorm(q).trim(); w = w ? w.split(/\s+/) : []; if (!w.length) return 0; var n = 0; D.products.forEach(function (p) { var h = hay(p); for (var i = 0; i < w.length; i++) if (h.indexOf(w[i]) < 0) return; n++; }); return n; }
  function tSearch() { clearTimeout(TS); TS = null; var q = String(state.q || "").toLowerCase().replace(/\s+/g, " ").trim(); if (q.length < 2 || q === TLAST) return; TLAST = q; tAdd({ t: "q", q: q.slice(0, 60), n: tHits(q) }); }
  document.addEventListener("visibilitychange", function () { if (document.visibilityState === "hidden") { if (TS) tSearch(); tSend(); } });
  window.addEventListener("pagehide", function () { if (TS) tSearch(); tSend(); });
  function openModal(p) {
    tAdd({ t: "o", id: String(p.id || "") }); /* v73 */
    var x = txt(p), m = $("modal");
    var mi = $("m-img"); mi.textContent = ""; var th = thumb(p, ""); while (th.firstChild) mi.appendChild(th.firstChild);
    if (p.img && p.img2) {
      var strip = el("div", "m-thumbs"), pics = [p.img, p.img2];
      pics.forEach(function (src, k) {
        var b = el("button", "m-th" + (k === 0 ? " on" : "")); b.type = "button"; b.setAttribute("aria-label", t("photoN", { n: k + 1 }));
        var ti = new Image(); ti.src = src; ti.alt = ""; b.appendChild(ti);
        b.addEventListener("click", function () { var big = mi.querySelector("img"); if (big) big.src = src; strip.querySelectorAll(".m-th").forEach(function (x) { x.classList.remove("on"); }); b.classList.add("on"); });
        strip.appendChild(b);
      });
      mi.appendChild(strip);
    }
    fillModalBody(p, state.lang);
    $("m-close").setAttribute("aria-label", t("close"));
    if (m.showModal) m.showModal(); else m.setAttribute("open", "");
  }
  var HOWTO_URL = {"he": "https://he.chabad.org/library/article_cdo/aid/448578", "en": "https://www.chabad.org/library/article_cdo/aid/113425/jewish/What-Is-Kosher.htm", "ru": "https://ru.chabad.org/library/article_cdo/aid/1422764"};
  function applyLang(lang, pick) {
    if (!UI[lang]) lang = "en"; state.lang = lang;
    document.documentElement.lang = lang; document.documentElement.dir = lang === "he" ? "rtl" : "ltr"; document.documentElement.classList.remove("lang-wait");
    document.querySelectorAll("[data-t]").forEach(function (n) { n.textContent = t(n.getAttribute("data-t")); }); document.querySelectorAll('[data-t="storePgNote"]').forEach(function (n) { var tx = n.textContent, m = tx.match(/Dzirnavu\s+(iela\s+)?29/); if (!m) return; n.textContent = tx.slice(0, m.index); var a = extLink("st-addr", (typeof ksMapLink === "function" && D && ksMapLink()) || mapsUrl("Dzirnavu iela 29, Riga, Latvia"), m[0]); a.dir = "ltr"; n.appendChild(a); n.appendChild(document.createTextNode(tx.slice(m.index + m[0].length))); }); /* Akiva 2026-11-08 23:01: the store address opens its map page */
    document.querySelectorAll("[data-tp]").forEach(function (n) { n.setAttribute("placeholder", t(n.getAttribute("data-tp"))); });
    document.querySelectorAll(".langs button").forEach(function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-lang") === lang ? "true" : "false"); });
    try { localStorage.setItem("kr-lang", lang); if (pick) localStorage.setItem("kr-lang-pick", lang); } catch (e) {} /* v45: only a button tap / ?lang= is remembered as the visitor's choice (kr-lang-pick) */
    $("count-num").textContent = foodN(D.products); /* v80: non-food not counted */
    var hl = $("howto-link"); if (hl) hl.href = HOWTO_URL[lang] || HOWTO_URL.en; /* v66 Akiva 16:19: "how to keep kosher" article per language */
    renderContact();
    renderBanner(); renderCats(); renderStores(); renderLegend(); render(); if (window.KR_afterLang) window.KR_afterLang(lang); /* v78 design hook */
  }
  // Contact line (About, main page only): Hebrew shows Akiva's WhatsApp number; English and Russian show Chabad Riga's WhatsApp number. Plain, low-key (Akiva 16:44: not bold). Both editable in admin ⚙️.
  var CONTACT_ENRU_DEFAULT = { phone: "+371 20383423" }; // Akiva 16:54: EN/RU = Chabad Riga's WhatsApp (chabad.lv "Chat with us")
  function renderContact() {
    var wa = $("wa"); if (!wa) return;
    var c = D.contact || {}, num = $("wa-num") || wa;
    while (wa.firstChild) wa.removeChild(wa.firstChild);
    if (state.lang === "he") {
      var p = c.phone || "+371 20037396";
      wa.href = c.whatsapp || ("https://wa.me/" + p.replace(/\D/g, "")); wa.target = "_blank"; wa.className = "wa contact-num";
      wa.appendChild(waIcon());
      num = el("span", "", p);
    } else {
      var q = c.phoneEnRu || CONTACT_ENRU_DEFAULT.phone;
      wa.href = c.whatsappEnRu || ("https://wa.me/" + q.replace(/\D/g, "")); wa.target = "_blank"; wa.className = "wa contact-num";
      wa.appendChild(waIcon());
      num = el("span", "", q);
    }
    num.dir = "ltr"; num.id = "wa-num"; wa.appendChild(num);
  }
  var BANNER_DEFAULT = {"enabled": true, "he": {"title": "אוכל כשר בריגה – מבית חב\"ד", "more": "פרטים והזמנה"}, "en": {"title": "Kosher food in Riga – from Chabad", "more": "Details & order"}, "ru": {"title": "Кошерная еда в Риге – от Хабада", "more": "Подробнее и заказ"}, "items": [{"id": "tourists", "addr": "Valērijas Seiles st. 4", "addrLink": "https://maps.app.goo.gl/WFkA57fCbvrJR8Mi7", "icon": "🍽️", "page": "https://www.chabad.lv/templates/articlecco_cdo/aid/5501955/jewish/Kosher-Food-Service.htm", "phone": "+371 22334254", "he": {"name": "ארוחות כשרות לתיירים", "desc": "שירות קייטרינג – ארוחות טריות להזמנה"}, "en": {"name": "Kosher meals for tourists", "desc": "Fresh meals from the catering service"}, "ru": {"name": "Кошерная еда для туристов", "desc": "Свежие блюда от кейтеринга"}, "phoneWhatsapp": true}, {"id": "shabbat", "addr": "Dzirnavu iela 29", "addrLink": "https://maps.app.goo.gl/WWQJBtm48xH9pbwJA", "icon": "🍷", "page": "https://www.chabad.lv/templates/articlecco_cdo/aid/4102963/jewish/Shabbat-meals.htm", "he": {"name": "אוכל לשבת", "desc": "סעודות שבת בבית חב\"ד או לקחת"}, "en": {"name": "Food for Shabbat", "desc": "Shabbat meals at the Chabad House or takeout"}, "ru": {"name": "Еда на Шаббат", "desc": "Трапезы в Хабаде или навынос"}}, {"id": "store", "icon": "🛒", "page": "https://www.chabad.lv/templates/articlecco_cdo/aid/5774309/jewish/KosherStore.htm", "phone": "+371 27056420", "facebook": "https://www.facebook.com/KosherRiga", "nav": "https://maps.app.goo.gl/R73AA75BDZjFqYmv9", "he": {"name": "החנות הכשרה", "desc": "Dzirnavu 29, ריגה", "btn": "תמצא במפה", "chip": "🏪 Kosher Store"}, "en": {"name": "Kosher Store", "desc": "Dzirnavu iela 29, Riga", "btn": "Find on map", "chip": "🏪 Kosher Store"}, "ru": {"name": "Кошерный магазин", "desc": "Dzirnavu iela 29, Рига", "btn": "Найти на карте", "chip": "🏪 Kosher Store"}, "logo": "img/kosher-store-logo.jpg", "titleLink": "https://www.chabad.lv/templates/articlecco_cdo/aid/1737146/jewish/Kosher-Store.htm", "whatsapp": "37127056420"}]};
  var WA_PATH = "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z";
  var FB_PATH = "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z";
  function fbIcon() { var ns = "http://www.w3.org/2000/svg", sv = document.createElementNS(ns, "svg"), p = document.createElementNS(ns, "path"); sv.setAttribute("viewBox", "0 0 24 24"); sv.setAttribute("class", "fb-ic"); sv.setAttribute("aria-hidden", "true"); sv.setAttribute("focusable", "false"); p.setAttribute("d", FB_PATH); p.setAttribute("fill", "#1877F2"); sv.appendChild(p); return sv; }
  function fbSquareIcon() { var ns = "http://www.w3.org/2000/svg", sv = document.createElementNS(ns, "svg"), p = document.createElementNS(ns, "path"); sv.setAttribute("viewBox", "0 0 24 24"); sv.setAttribute("class", "fbsq-ic"); sv.setAttribute("aria-hidden", "true"); sv.setAttribute("focusable", "false"); p.setAttribute("d", "M15.12 5.32H17V2.14A26.11 26.11 0 0 0 14.26 2c-2.72 0-4.58 1.66-4.58 4.7v2.62H6.61v3.56h3.07V22h3.68v-9.12h3.06l.46-3.56h-3.52V7.05c0-1.03.28-1.73 1.76-1.73z"); p.setAttribute("fill", "#fff"); sv.appendChild(p); return sv; }
  function fbLink(href, cls) { var a = el("a", cls || "fb-link", ""); a.href = href; a.target = "_blank"; a.rel = "noopener"; a.setAttribute("aria-label", "Facebook"); a.title = "Facebook"; a.appendChild(fbIcon()); return a; } // Akiva 2026-11-08 22:42: Facebook as an icon, not the word
  function waIcon() { var ns = "http://www.w3.org/2000/svg", sv = document.createElementNS(ns, "svg"), p = document.createElementNS(ns, "path"); sv.setAttribute("viewBox", "0 0 24 24"); sv.setAttribute("class", "wa-ic"); sv.setAttribute("aria-hidden", "true"); sv.setAttribute("focusable", "false"); p.setAttribute("d", WA_PATH); p.setAttribute("fill", "#25D366"); sv.appendChild(p); return sv; }
  function storeLogoLink(href, cls) { var a = el("a", cls || "ks-link", ""); a.href = href || "store"; a.setAttribute("aria-label", t("storePgTitle")); a.title = t("storePgTitle"); var im = new Image(); im.src = "img/logo/st-kosher-store.png"; im.alt = t("storePgTitle"); im.className = "ks-logo"; a.appendChild(im); return a; } // Akiva 2026-11-08 22:50: the 🛍 store-page button is the Kosher Store logo
  function renderBanner() {
    var B = D.banner || BANNER_DEFAULT, box = $("promo"), bar = $("promo-bar"), lg = state.lang;
    if (!box) return;
    if (B.enabled === false || !(B.items || []).length) { box.hidden = true; if (bar) bar.hidden = true; document.body.classList.remove("has-promo"); return; }
    var head = B[lg] || BANNER_DEFAULT[lg] || BANNER_DEFAULT.en;
    $("promo-title").textContent = head.title || "";
    var list = $("promo-items"); list.textContent = ""; var chips = $("promo-bar-items"); if (chips) chips.textContent = "";
    B.items.forEach(function (it) {
      var L = it[lg] || it.en || {}, li = el("li", "promo-item");
      if (it.logo) /* v43 (Akiva 2026-11-08 23:24): the store card keeps its logo by "החנות הכשרה" and the address; the v39 /store logo by the map button stays removed */ { var lgi = new Image(); lgi.src = it.logo; lgi.alt = (it.en && it.en.name) || ""; lgi.className = "promo-logo"; li.appendChild(lgi); } else li.appendChild(el("span", "promo-ic", it.icon || ""));
      var tx = el("div", "promo-txt"), nm = el("strong", "", it.titleLink ? "" : (L.name || "")); if (it.titleLink) { var tl = el("a", "promo-name", L.name || ""); tl.href = it.titleLink; tl.target = "_blank"; tl.rel = "noopener"; nm.appendChild(tl); } tx.appendChild(nm); if (L.desc) { if (!it.addr && it.nav && /maps/.test(it.nav)) { var dl = el("a", "promo-addr", ""); dl.href = it.nav; dl.target = "_blank"; dl.rel = "noopener"; var dt = el("span", "promo-addr-t", L.desc); dl.appendChild(dt); tx.appendChild(dl); } else tx.appendChild(el("span", "", L.desc)); } /* Akiva 2026-11-08 23:01: the store address opens its map page */ if (it.addr) { var ad = el("a", "promo-addr", ""); ad.href = it.addrLink || ("https://maps.google.com/?q=" + encodeURIComponent(it.addr)); ad.target = "_blank"; ad.rel = "noopener"; ad.appendChild(el("span", "promo-addr-pin", "📍 ")); var at = el("span", "promo-addr-t", it.addr); at.dir = "ltr"; ad.appendChild(at); tx.appendChild(ad); } /* Akiva 2026-11-08 22:54/22:56: address → Google Maps */ li.appendChild(tx);
      var acts = el("div", "promo-acts");
      /* v42 (Akiva 2026-11-08 23:04): no Kosher Store logo next to the Facebook square on the banner card */
      if (it.nav || it.page) { var a = el("a", "promo-btn", ((it.nav && L.btn) ? String(L.btn).replace(/^\s*\uD83D\uDCCD\uFE0F?\s*/, "") : "") || head.more || "Details"); /* v78: no pin icon on the map button */ a.href = it.nav || it.page; a.target = "_blank"; a.rel = "noopener"; acts.appendChild(a); }
      if (it.phone) { var ph = el("a", "promo-ph", ""); if (it.phoneWhatsapp) { ph.href = "https://wa.me/" + it.phone.replace(/\D/g, ""); ph.target = "_blank"; ph.rel = "noopener"; ph.className = "promo-ph promo-ph-wa"; ph.setAttribute("aria-label", "WhatsApp " + it.phone); ph.appendChild(waIcon()); } else { ph.href = "tel:" + it.phone.replace(/[^+\d]/g, ""); ph.appendChild(el("span", "", "📞 ")); } var n = el("span", "", it.phone); n.dir = "ltr"; ph.appendChild(n); acts.appendChild(ph); }
      if (it.whatsapp) { var wa = el("a", "promo-wa", ""); wa.href = "https://wa.me/" + String(it.whatsapp).replace(/\D/g, ""); wa.target = "_blank"; wa.rel = "noopener"; wa.setAttribute("aria-label", "WhatsApp"); wa.appendChild(waIcon()); wa.appendChild(el("span", "", "WhatsApp")); acts.appendChild(wa); }
      if (it.facebook) { var fbq = el("a", "promo-fbsq", ""); fbq.href = it.facebook; fbq.target = "_blank"; fbq.rel = "noopener"; fbq.setAttribute("aria-label", "Facebook"); fbq.title = "Facebook"; fbq.appendChild(fbSquareIcon()); li.classList.add("has-fbsq"); li.appendChild(fbq); } /* Akiva 2026-11-08 22:54: one Facebook, a square at the top on the side opposite the text */
      li.appendChild(acts); if ((it.storeLink || it.id === "store") && !STOREPG) { li.classList.add("has-ksshow"); var kd = el("div", "promo-show"); kd.appendChild(ksShowBtn("")); li.appendChild(kd); } /* v83 (Akiva 12:24): the green 🛒 button is gone; the same "Show products (N)" as the store list, opening /store */ list.appendChild(li);
      if (chips) { var c = el("a", "promo-chip", L.chip ? L.chip : (it.nav && L.btn) ? L.btn : (it.icon ? it.icon + " " : "") + (L.name || "")); c.href = it.nav || it.page || "#promo"; c.target = "_blank"; c.rel = "noopener"; chips.appendChild(c); }
    });
    box.hidden = false; if (bar) bar.hidden = false; document.body.classList.add("has-promo");
  }
  function init() {
    var qs = new URLSearchParams(location.search), saved = null;
    try { saved = localStorage.getItem("kr-lang"); } catch (e) {}
    var nav = (navigator.language || "").slice(0, 2);
    var okL = function (x) { return x === "he" || x === "en" || x === "ru"; }, pick0 = null; try { pick0 = localStorage.getItem("kr-lang-pick"); } catch (e) {} var lang = okL(qs.get("lang")) ? qs.get("lang") : okL(pick0) ? pick0 : (saved === "en" || saved === "ru") ? saved : "en"; /* v45 Akiva 2026-11-09 11:33: English first as before; a chosen language is kept */
    document.querySelectorAll(".langs button").forEach(function (b) { b.addEventListener("click", function () { applyLang(b.getAttribute("data-lang"), true); }); });
    var tmr; $("q").addEventListener("input", function (e) { clearTimeout(tmr); tmr = setTimeout(function () { state.q = e.target.value; state.shown = PAGE; render(); }, 120); }); $("q").addEventListener("input", function (e) { clearTimeout(TS); var v = e.target.value; TS = setTimeout(function () { state.q = v; tSearch(); }, 1500); }); $("q").addEventListener("keydown", function (e) { if (e.key === "Enter") { state.q = e.target.value; tSearch(); } }); /* v73: only the final term (after a 1.5 s pause or Enter) is counted */
    $("store").addEventListener("change", function (e) { state.store = e.target.value; state.shown = PAGE; render(); });
    $("mehadrin").addEventListener("change", function (e) { state.meh = e.target.checked; state.shown = PAGE; render(); });
    $("withphoto").addEventListener("change", function (e) { state.photo = e.target.checked; state.shown = PAGE; render(); });
    document.querySelectorAll(".sort-b").forEach(function (b) { b.addEventListener("click", function () { var v = b.getAttribute("data-sort"); state.sort = state.sort === v ? "" : v; try { if (state.sort) localStorage.setItem("kr-sort", state.sort); else localStorage.removeItem("kr-sort"); } catch (e) {} state.shown = PAGE; render(); }); }); /* v68: tap the active one again = back to the usual order */
    $("more").addEventListener("click", function () { state.shown += PAGE; render(); });
    $("m-close").addEventListener("click", function () { $("modal").close(); }); if ($("m-lng")) $("m-lng").addEventListener("click", function () { if (mCur) fillModalBody(mCur, M_NEXT[mLang] || "en"); });
    $("modal").addEventListener("click", function (e) { if (e.target === $("modal")) $("modal").close(); });
    applyLang(lang, okL(qs.get("lang")));
    tAdd({ t: "pv", p: TPG, l: state.lang, r: tRef() }); tSend(); /* v73: one count per page load, sent at once */
  }
  function boot() {
    // Live site: newest data saved through the admin page. Preview/offline: the bundled copy.
    var done = false, go = function () { if (!done) { done = true; init(); } };
    try {
      if (false && window.fetch && location.protocol !== "file:") { /* static hosting (GitHub Pages): no /api, the bundled data.js / past-data.js are the data */
        var timer = setTimeout(go, 2500);
        var getJ = function (u) { return fetch(u, { cache: "no-store" }).then(function (r) { return r.ok ? r.json() : null; }).catch(function () { return null; }); };
        Promise.all([getJ("/api/data"), PAST ? getJ("/api/past") : Promise.resolve(null)]).then(function (res) {
          var d = res[0], pj = res[1];
          if (d && d.products && d.products.length) D = window.KOSHER_DATA = addPast((function (x) { fixIcons(x); storeGroups(x); return x; })(d), pj && pj.ok && Array.isArray(pj.items) ? pj.items : window.KOSHER_PAST);
          else if (pj && pj.ok && Array.isArray(pj.items)) { D.products = D.products.filter(function (p) { return !p.pastArch; }); addPast(D, pj.items); }
          clearTimeout(timer); go();
        }).catch(function () { clearTimeout(timer); go(); });
        return;
      }
    } catch (e) {}
    go();
  }
  /* v78 design layer (design.js) reads these */
  window.KR = { logoChip: logoChip, LOGO_ST: LOGO_ST, state: state, txt: txt, thumb: thumb, symRow: symRow, storeRow: storeRow, fitStores: fitStores, openModal: openModal, catOf: catOf, t: t, fdir: fdir, render: render, PAGE: PAGE, getD: function () { return D; }, mcSync: mcSync };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
})();
