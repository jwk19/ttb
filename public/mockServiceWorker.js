/* eslint-disable */
/* tslint:disable */

self.addEventListener('install', function() {
  self.skipWaiting()
})

self.addEventListener('activate', function() {
  self.clients.claim()
})

self.addEventListener('fetch', function(event) {
  // Skip MSW initialization during service worker registration
  if (event.request.url.includes('/mockServiceWorker.js')) {
    return
  }

  event.respondWith(
    fetch(event.request).catch(function() {
      return new Response(
        JSON.stringify({
          status: 503,
          message: 'Service Unavailable',
        }),
        {
          status: 503,
          headers: { 'Content-Type': 'application/json' },
        },
      )
    }),
  )
})