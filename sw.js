const cacheName = 'v1';

cnst filesToCache = [
       '/',
       'index.html',
       'design.css',
       'conry.js',
       'manifest.json',
       'indb.js'
       '/https://free.currencyconverterapi.com/api/v5/currencies'
      
];



self.addEventListener('install', e => {
  console.log('[ServiceWorker] Installed');
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    }),
  );
});


self.addEventListener('activate', e => {
  console.log('[ServiceWorker] is now Activate');
  e.waitUntil(
    caches.keys().then(keyList =>
      Promise.all(
        keyList.map(key => {
          if (key !== cacheName) {
            return caches.delete(key);
          }
        }),
      ),
    ),
  );
});


self.addEventListener('fetch', event => {
  event.respondWith(
    caches
      .match(event.request)
      .then(response => response || fetch(event.request)),
  );
});



