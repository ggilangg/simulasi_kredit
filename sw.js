// Naikkan angka versi ini setiap kali Anda mengganti file aplikasi.
const V="sim-kredit-v2";
const FILES=["./","index.html","manifest.json","icon-192.png","icon-512.png","icon-maskable-512.png","apple-touch-icon.png","favicon.svg","favicon-32.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(V).then(c=>Promise.allSettled(FILES.map(f=>c.add(f)))).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{const r=e.request;if(r.method!=="GET"||new URL(r.url).origin!==location.origin)return;
 e.respondWith(caches.match(r).then(m=>{const net=fetch(r).then(res=>{if(res.ok){const cp=res.clone();caches.open(V).then(c=>c.put(r,cp))}return res}).catch(()=>m||caches.match("index.html"));return m||net}))});
