'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c81f96128cf398e23263ce0b4af93a7e",
"assets/AssetManifest.bin.json": "82f26f6d6b1329ce48c6fbcb09f72f2e",
"assets/AssetManifest.json": "4d3ba6f4e1a18b50e661c74c944c10f6",
"assets/assets/ankh_logo_color.svg": "1f7d3e26fef7961eaaacccce732646d3",
"assets/assets/breakin.svg": "1faecbd7c4f63cb5df9ca04520a3f132",
"assets/assets/breakout.svg": "cc7fbfbafce124bbc25082f71eb30bf0",
"assets/assets/cwb.jpg": "da720e4fa8296db72e3d2f68a33be9d9",
"assets/assets/error.mp3": "f3a8eee542b679460e339f3144dfa74d",
"assets/assets/face.png": "f7e52793170b8d6a16c468d86510aa4b",
"assets/assets/faceicon.png": "dd90d211ff0ae64e978c8312d7756071",
"assets/assets/faceicon1.png": "59282cd69ea12073c803da25e7e646aa",
"assets/assets/faceicon2.png": "2dead3a28cffdd8ed3acffb67362a44f",
"assets/assets/faceicon3.png": "7b2144a9704fa7d0db03b43593b4b658",
"assets/assets/failed.mp3": "73ecaf56d4bd3acd91d983cb75aa3123",
"assets/assets/failed2.mp3": "5a21acdfd1fc8921b0cd3eb5f6992f3d",
"assets/assets/girlace.jpg": "03dd4ffe6de28c0c2667972430e8d3f0",
"assets/assets/Gold_logo.png": "31125d44bcd4ccf3ddeb1a3d2d4aa059",
"assets/assets/Gold_logoS.png": "dd0a2515e17b195c7343cb8f65089b75",
"assets/assets/login.svg": "01b491a33b02e40477f4c0e1bd0bded3",
"assets/assets/logo.png": "80e135af5825cb67c7817a666e920693",
"assets/assets/logo2.png": "f558b408f5ded151e4cf35b4c25be8b4",
"assets/assets/logo4.png": "c171ecca54827d9b7ae77a515cef7452",
"assets/assets/logout.svg": "26d1f7683eb7ea443e318f4dc36edbb1",
"assets/assets/lottie/A.json": "412af657af4e2da8525f313a35706e4b",
"assets/assets/lottie/H.json": "b9520754ad434d8a9333589e7c1a973a",
"assets/assets/lottie/K.json": "3bbd8951ee01305cf19c287160419a17",
"assets/assets/lottie/N.json": "2ba8b9dace63cf51c760cafa6d736746",
"assets/assets/memberadd.svg": "e078af9c0f4668708853bf294562245a",
"assets/assets/memberlist.svg": "caa0ad525914053d2bd8bda7dba7a241",
"assets/assets/messages.json": "722c6ebcd32b484d7bd215fb3bc93b5a",
"assets/assets/mobilefacenet.tflite": "7945c78f4484c99560df461df85baa2f",
"assets/assets/networking.png": "5a6ff5725e8010d1fb45d9d355119d65",
"assets/assets/number_predictor.tflite": "6754e5581052297f73320de056f6d2d6",
"assets/assets/office.png": "20d1be943ea56c135069e0d6175c036d",
"assets/assets/point.png": "ca95e338ac11e28b459c39da7f959607",
"assets/assets/portrait.png": "9ecceb22e3868200997684b39ba0ef5d",
"assets/assets/roster.png": "b101a55ca79b7c9183a2d63d417c0a23",
"assets/assets/scan_beep.wav": "9a9c67d58d51a99b5b774c3550398655",
"assets/assets/st.jpg": "20b297374eb40439711cbe5b39f9b434",
"assets/assets/success.mp3": "ccbcf231d8ddf99a22a86adf2ace0814",
"assets/assets/success2.mp3": "e10fb2df41fc12e50443c5e81c409d41",
"assets/assets/tst7.jpg": "fbb1a6752789559e06c59f1f856520eb",
"assets/assets/turn-right.png": "bfd32fbd06627ce4e42b91a5dc8dc218",
"assets/assets/unlockmain.png": "306947f530d27df27dd79070fee7e883",
"assets/assets/unlockmainbw.png": "d491456c5de9c157d49422e57ac6045a",
"assets/assets/update.png": "25763f1fd2bfa3d9e28d6ff8bdbb17a2",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "f2d0560b4c0f42aed35f4e1f13a08433",
"assets/NOTICES": "7719213a436d9ad017b17798c35d5aa9",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/rive/error.riv": "e74e21f8b53de4b541dd037c667027c1",
"assets/packages/awesome_dialog/assets/rive/info.riv": "2a425920b11404228f613bc51b30b2fb",
"assets/packages/awesome_dialog/assets/rive/info_reverse.riv": "c6e814d66c0e469f1574a2f171a13a76",
"assets/packages/awesome_dialog/assets/rive/question.riv": "00f02da4d08c2960079d4cd8211c930c",
"assets/packages/awesome_dialog/assets/rive/success.riv": "73618ab4166b406e130c2042dc595f42",
"assets/packages/awesome_dialog/assets/rive/warning.riv": "0becf971559a68f9a74c8f0c6e0f8335",
"assets/packages/baseflow_plugin_template/assets/logo.png": "1c89131f5118e408eefc3fac5416dabc",
"assets/packages/baseflow_plugin_template/assets/poweredByBaseflow.png": "e48c2485c3f7568d987424ec6a0ba677",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fast_image_resizer/assets/lena.png": "af16d124a7d709df7d8e1cdda7ac6e5a",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-arrow.png": "8efbd753127a917b4dc02bf856d32a47",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-attachment.png": "9c8f255d58a0a4b634009e19d4f182fa",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-delivered.png": "b6b5d85c3270a5cad19b74651d78c507",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-document.png": "e61ec1c2da405db33bff22f774fb8307",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-error.png": "5a59dc97f28a33691ff92d0a128c2b7f",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-seen.png": "10c256cc3c194125f8fffa25de5d6b8a",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-send.png": "2a7d5341fd021e6b75842f6dadb623dd",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-arrow.png": "3ea423a6ae14f8f6cf1e4c39618d3e4b",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-attachment.png": "fcf6bfd600820e85f90a846af94783f4",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-delivered.png": "28f141c87a74838fc20082e9dea44436",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-document.png": "4578cb3d3f316ef952cd2cf52f003df2",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-error.png": "872d7d57b8fff12c1a416867d6c1bc02",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-seen.png": "684348b596f7960e59e95cff5475b2f8",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-send.png": "8e7e62d5bc4a0e37e3f953fb8af23d97",
"assets/packages/flutter_chat_ui/assets/icon-arrow.png": "678ebcc99d8f105210139b30755944d6",
"assets/packages/flutter_chat_ui/assets/icon-attachment.png": "17fc0472816ace725b2411c7e1450cdd",
"assets/packages/flutter_chat_ui/assets/icon-delivered.png": "b064b7cf3e436d196193258848eae910",
"assets/packages/flutter_chat_ui/assets/icon-document.png": "b4477562d9152716c062b6018805d10b",
"assets/packages/flutter_chat_ui/assets/icon-error.png": "4fceef32b6b0fd8782c5298ee463ea56",
"assets/packages/flutter_chat_ui/assets/icon-seen.png": "b9d597e29ff2802fd7e74c5086dfb106",
"assets/packages/flutter_chat_ui/assets/icon-send.png": "34e43bc8840ecb609e14d622569cda6a",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "022c3e181f1edbc6115880d8a861a7e9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b97bd6ad2db9887d8128aa6f03f9dd03",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shorebird.yaml": "03c7667bd00d8f7bbb71bf611bfad0cc",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "6e0484b8c6d335519ac62f393c62a96c",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"flutter_bootstrap.js": "15c8d82ec714ca409a1260d60f908556",
"icons/Icon-192.png": "56baf3e712bc688ca405e6559c74b151",
"icons/Icon-512.png": "1250999fd754ed16fa9dc20ae3a65688",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "29487b276532d3e45947778bd532b50c",
"/": "29487b276532d3e45947778bd532b50c",
"main.dart.js": "9c66bb96767416251831620df5e3acdb",
"manifest.json": "f2c6e5f764fbf1cba02161aa2843d51f",
"version.json": "5a3dd92b8aacc70918e9f2c03bd72b1d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
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
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
