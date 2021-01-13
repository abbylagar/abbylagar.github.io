'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/config": "7b27cf88d868c36af6e8900359daa8c7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "b7aca58a0ce4e2d3f335dc386485e8bb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/objects/08/c5133fd7a5fffe80c31c5e68de9d32adaac4eb": "fb806f1d3a585c656c327ae0eb73bd07",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/2d/e4500f70fd7d41c8ef30c5f1d4cc2eb5dd70b2": "529446edecfec343733f6e5aeb9e8341",
".git/objects/30/f4852f8be07a40a1f84b01933d69e972e00138": "abcddad4e800a515fe8f25219fa7f898",
".git/objects/31/5f35f8a6201ffbc94e097a53e80900b9507617": "d6b5790ca1ecb9d2cca2e57301a526d4",
".git/objects/4f/9cd0ec38252c6bf7c03a4dbddb2e4117769ee2": "614c2fba994c116f0929f7414a19e4be",
".git/objects/52/151d682d970ca9e673b29eeed89eec8212c98b": "d3dbd53f8577461b1392e57f9aa6ed2e",
".git/objects/5e/a630d7f4f3b0df132a7b1b274c9eec37b284c1": "1ea8d54327ffeb477274424aa1ad745f",
".git/objects/60/3322fdc25ee22ba353a136d660d4877bc062f3": "9623e9cadb75882663bd92ab939d8ba5",
".git/objects/65/e1ba7ce3861d7d2f62f591bf970228ae029b07": "b1e51f5b44daa4c241d5b81c55a9c870",
".git/objects/67/314c3c36234a9290b9e8346182fd1c772743d1": "4b9a1ab444851707fbf35254524fe889",
".git/objects/6f/bfcd21a48c85cb51fb6c61cd408a1d5cb5686c": "f857e827d01a8a7331578a9504b81802",
".git/objects/74/fdd973e938b120b559f7cf3c2ef67096dd134d": "e3602cde49d61564d8be9ce82dd8afd7",
".git/objects/75/5449ff23124bfb51bdc3f86b5a23d754d2e7fc": "34cf3a5a589d32796fe306eff4d7b78b",
".git/objects/7b/73610a3a09ac96d5b9709ecd10c079d50335bf": "6578359956f1c5f54dece8ea91e861da",
".git/objects/7c/cea221e15aa2e3e5be043045d2db8fa553b6ab": "8c3e533132630a91be77de7821bed870",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/de56c50881a40e661277edfa79aebb6ed8dd2c": "ef79745402d0ef2a8c34408bc6fcbdbd",
".git/objects/91/7ad4abb97a21420dc866b948ce5a6d724c741e": "012af87ecf0287e762492ed621457af1",
".git/objects/93/d57bf7282fa66d07fba76e060b41a0023af258": "21d2c1f416d37f01c27c53df74b33388",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/9d/3973c6397bac86693699d9e7cd71179c9cf860": "8bf9e49e369a3727d232d0c3d53ba6c9",
".git/objects/a6/88126c4981b22bb54d4c2b348017dfa85c2e61": "349f5946c998486bdd591c3269365aaa",
".git/objects/ac/bbcf7a23d69f6b418ac7f5c1bed71a4410cd2e": "106cb9e271c0e7987f49a15b00780df7",
".git/objects/b6/6900ca17904079a7a5f14fbda1a0c14a165228": "15b84cd4fed3335185ef09bc899636c0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bf/3a40ea1eaa13cbcee44b35fdd527f8ff23b607": "60a5efc83b96e2ef22f7a5cab5603734",
".git/objects/c0/460408980c73e301f5418696bbc26588e03a1f": "f55c9dd2c89a496b08fa06f13cf3de7b",
".git/objects/c1/5cc71dab880d7be0ee344ba38f45b9df37f86b": "27e1b040dc98fdea1147ce60eb3ec1e4",
".git/objects/c9/902c28fbbc4e7532f5ebcb5fae53f2442fc669": "aa7689b70301c0bc1fddd1849d278d5b",
".git/objects/d0/67021647a0598fc9ef76a0f5787aa9253aa1a9": "9b563a7f93981efd1e1c3877c3e72127",
".git/objects/d1/cbaa35fea3eaf0c1eec698903d35154ad0febc": "667044160e214d568e2d801b95f12d9b",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/de/bc5a309a2f30de7ad48e581da6a810c8d1b13c": "a6c6c5ad015597217e9045ce67f34f9e",
".git/objects/ef/34cdb2385a717568819bf9030ee0b642fa84c6": "4a9038135d6db66494b9f6030dabb08c",
".git/objects/f3/392014eca8262cb20beb0f2f42dc33bce15d30": "4d800b10e3c60e249be9172ab227e85d",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/ff/c69c26d37ce271e8fe0c715caa90c809957322": "22ee667f16e68c3be25b015932c41057",
"assets/AssetManifest.json": "edcc61b7abe0355937a073bfed3d4e5e",
"assets/assets/appimages/App1.jpg": "b4992d622ae84093229bdb961f97497c",
"assets/assets/appimages/Capture.JPG": "bbeffccd763b74782b72227df28ab60d",
"assets/assets/appimages/image.jpeg": "79832366897fbd9ca8260215e4fe23d3",
"assets/assets/appimages/images%2520(4).png": "90050b080fea2883129be9dfea17ae04",
"assets/assets/appimages/images_1.jpeg": "c7fcaca864bfd45e5b99a4eab8f281fb",
"assets/assets/appimages/images_11.jpeg": "539c8c55bb414ed8372adbb6e54fc4b4",
"assets/assets/appimages/images_12.jpeg": "2943f430d68f7e63cfc66e7745d9be66",
"assets/assets/appimages/images_14.jpeg": "c006009a0f5dcf302581905040700c7a",
"assets/assets/appimages/images_15.jpeg": "0773b8be81ed246516616aeeb6ef4190",
"assets/assets/appimages/images_21.jpeg": "a49c4b8dfd7a73e16aeb970c070ac5c4",
"assets/assets/appimages/images_22.jpeg": "42b8aacea804954fed490fe83d7820a6",
"assets/assets/appimages/images_23.jpeg": "e52aa0846d2458d7e04422e95b2651be",
"assets/assets/appimages/images_24.jpeg": "50a7dc361f22f6e597339841baba08d4",
"assets/assets/appimages/images_25.png": "b1c559e5b96f8f04b17e68bec9ee5430",
"assets/assets/appimages/images_26.jpeg": "e92539c9e78b1f7a127128cf189a495c",
"assets/assets/appimages/images_4.jpeg": "a3562033e0e6a1d1b222b6528c076add",
"assets/assets/appimages/noimage.JPG": "db2ff99b12adcb3a8992e6130e7ff42b",
"assets/assets/appimages/ser.jpg": "35093c4c8317b7297f36dad0e65a84ca",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/NOTICES": "ae75c77ce21e185d96ec0fb4f02f74b7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "9e341f6a86e57485d21d8b295bb2473d",
"/": "9e341f6a86e57485d21d8b295bb2473d",
"main.dart.js": "d8c2af331ddf64f9862bfe3fdc2f98f4",
"manifest.json": "93465fa57d4535dc57f667f4eb1b9304",
"README.md": "098b67751463611abacf5647fe3b54cd"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/LICENSE",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');

      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }

      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.message == 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message = 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.add(resourceKey);
    }
  }
  return Cache.addAll(resources);
}
