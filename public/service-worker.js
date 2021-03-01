'use strict';

// Update cache names any time any of the cached files change.
const CACHE_NAME = 'static-cache-v1';
let deferredPrompt;

// Add list of files to cache here.
const FILES_TO_CACHE = [
  '/global.css',
  '/offline.html',
];
// Install service worker
self.addEventListener('install', (evt) => {
  evt.waitUntil(
      caches.open(CACHE_NAME).then((cache) => {
        console.log('[ServiceWorker] Pre-caching offline page');
        return cache.addAll(FILES_TO_CACHE);
      })
  );

  self.skipWaiting();
});
// Activate service worker
self.addEventListener('activate', (evt) => {
  console.log('[ServiceWorker] Activate');
  // Remove previous cached data from disk.
  evt.waitUntil(
      caches.keys().then((keyList) => {
        return Promise.all(keyList.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        }));
      })
  );

  self.clients.claim();
});
// Fetch event
self.addEventListener('fetch', (evt) => {
  // Show offline page if offline
  evt.respondWith(
    fetch(evt.request).catch(() => {
      caches.match(evt.request).then(res => {
        if (res) {
          return res;
        } else if (evt.request.headers.get('accept').includes('text/html')) {
          return caches.match('/offline.html')
        }
      })
    })
  )
  // Install button
  window.addEventListener('beforeinstallprompt', e => {
    // Stash event so it can be triggered later
    deferredPrompt = e;
    // Update UI notify the user they can install the PWA
    showInstallPromotion();
    // Optionally, send analytics event that PWA install promo was shown
    console.log(`'beforeinstallprompt' even was fired`)
  })
})