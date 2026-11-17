/* Kosher Latvia service worker (v87). Installability only: it caches NOTHING.
   Every request goes to the network as usual; /api, /admin and /u are never touched.
   Only when a page navigation fails (no internet) does it show a small offline note. */
self.addEventListener("install", function () { self.skipWaiting(); });
self.addEventListener("activate", function (e) { e.waitUntil(self.clients.claim()); });
var OFFLINE = '<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Kosher Latvia</title>' +
  '<style>body{font-family:system-ui,sans-serif;text-align:center;padding:60px 20px;color:#14532d}button{margin-top:18px;padding:10px 22px;border:0;border-radius:10px;background:#16A34A;color:#fff;font-size:16px}</style></head>' +
  '<body><h2>Kosher Latvia</h2><p dir="rtl">אין חיבור לאינטרנט</p><p>No internet connection</p><p>Нет подключения к интернету</p>' +
  '<button onclick="location.reload()">↻</button></body></html>';
self.addEventListener("fetch", function (e) {
  var r = e.request;
  if (r.method !== "GET" || r.mode !== "navigate") return; // everything else: plain network, untouched
  var u = new URL(r.url);
  if (u.origin !== self.location.origin) return;
  if (u.pathname.indexOf("/api/") === 0 || u.pathname.indexOf("/admin") === 0 || u.pathname.indexOf("/u/") === 0) return;
  e.respondWith(fetch(r).catch(function () {
    return new Response(OFFLINE, { status: 503, headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" } });
  }));
});
