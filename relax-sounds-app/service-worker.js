const CACHE_NAME = "relax-sounds-v1";
const FILES_TO_CACHE = [
  "index.html",
  "manifest.json",
  "service-worker.js",
  "rain.mp3",
  "storm.mp3",
  "fire.mp3",
  "nature.mp3",
  "ocean.mp3",
  "icons/icon-192.png",
  "icons/icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
