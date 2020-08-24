console.warn('registered');

var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
	'/static/js/bundle.js',
	'/static/js/1.chunk.js',
	'/static/js/0.chunk.js',
	'/static/js/main.chunk.js',
	'/static/media/any.a20c0b22.gif',
	'/static/media/generalKnowledge.10a14434.png',
	'/static/media/books.ae767529.png',
	'/static/media/computer.7a2419dd.png',
	'/static/media/music.aa559abe.png',
	'/static/media/theater.d57c3b4b.png',
	'/static/media/television.81d55217.png',
	'/static/media/videoGames.ab5b3e10.png',
	'/static/media/boardGames.5bda3eb7.png',
	'/static/media/scienceNature.3633ae7b.png',
	'/static/media/mathematics.6a9ab001.png',
	'/static/media/mythology.9f4bf7d2.png',
	'/static/media/sports.c21bc77b.png',
	'/static/media/geography.cc775d00.png',
	'/static/media/history.6800d562.png',
	'/static/media/politics.83ced390.png',
	'/static/media/art.c1bc6a48.png',
	'/static/media/celebrities.70cd92c3.png',
	'/static/media/animals.72dcc1f2.png',
	'/static/media/vehicles.c378647d.png',
	'/static/media/comics.dc1b016f.png',
	'/static/media/gadgets.65a5484e.png',
	'/static/media/japaneeseAnime.9d1b4389.png',
	'/static/media/cartoon.edd76591.gif',
	'/'
];

self.addEventListener('install', function(event) {
	// Perform install steps
	event.waitUntil(
		caches.open(CACHE_NAME).then(function(cache) {
			console.log('Opened cache');
			return cache.addAll(urlsToCache);
		})
	);
});

self.addEventListener('fetch', function(event) {
	if (!navigator.onLine) {
		event.respondWith(
			caches.match(event.request).then(function(response) {
				// Cache hit - return response
				if (response) {
					return response;
				}
				return fetch(event.request);
			})
		);
	}
});
