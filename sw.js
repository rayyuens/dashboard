self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // 保持正常聯網抓取 API 數據
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});