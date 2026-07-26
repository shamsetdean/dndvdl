// DNDVDL-MAP — service worker
// Mise en cache du coeur applicatif (assets partages) pour permettre le
// lancement hors ligne une fois l'app installee. Ne fait AUCUN appel reseau
// externe — se limite strictement aux fichiers du meme dossier.

const CACHE = "dndvdl-map-v1";

const CORE_ASSETS = [
  "./assets/style.css",
  "./assets/app.js",
  "./assets/qrcode.js",
  "./assets/fonts/sora-latin-300-normal.woff2",
  "./assets/fonts/sora-latin-400-normal.woff2",
  "./assets/fonts/sora-latin-500-normal.woff2",
  "./assets/fonts/sora-latin-600-normal.woff2",
  "./assets/fonts/sora-latin-700-normal.woff2",
  "./assets/fonts/jetbrains-mono-latin-400-normal.woff2",
  "./assets/fonts/jetbrains-mono-latin-500-normal.woff2",
  "./assets/fonts/jetbrains-mono-latin-600-normal.woff2",
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(CORE_ASSETS)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Strategie : reseau d'abord (donnees a jour tant qu'on est sur le LAN),
// bascule sur le cache local si le reseau est indisponible.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return; // jamais de cache tiers

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE).then((cache) => cache.put(event.request, copy)).catch(() => {});
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
