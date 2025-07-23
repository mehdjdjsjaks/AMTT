self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("axcel-cache").then((cache) => {
      return cache.addAll(["./", "index.html", "style.css", "script.js", "1.png"]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
