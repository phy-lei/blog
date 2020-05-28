/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a910719513151cbe17124d4cebc4a674"
  },
  {
    "url": "assets/121501/1.png",
    "revision": "c4bdcde64b3d33cbc8baec7e9d21d6f5"
  },
  {
    "url": "assets/200526/1.png",
    "revision": "126ac5ae3a114e3bec3b897d439cf3c7"
  },
  {
    "url": "assets/200526/2.png",
    "revision": "23dff91a7b5ac26d6580c2974b94bbca"
  },
  {
    "url": "assets/200526/3.png",
    "revision": "71821d824a4c76648b0a9ba01f6725ee"
  },
  {
    "url": "assets/200526/4.png",
    "revision": "a0d9ecf3271c8f8fbd7451fae743b268"
  },
  {
    "url": "assets/200526/5.png",
    "revision": "d01be8e7c3e3822c12af0dc06d443985"
  },
  {
    "url": "assets/css/0.styles.772212fd.css",
    "revision": "882938592519bdb75ac2f8811fdc2eb0"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/js/1.c300a727.js",
    "revision": "6b94d0184e6e59269756021b4055a8a1"
  },
  {
    "url": "assets/js/10.4051f84a.js",
    "revision": "6ced59f68af5a0fb3897629365f8e3f1"
  },
  {
    "url": "assets/js/11.4f6187af.js",
    "revision": "60459eb502a796ddba6617318363d612"
  },
  {
    "url": "assets/js/12.1b857093.js",
    "revision": "f299510804768fbcf669fdf5d2f4b0fd"
  },
  {
    "url": "assets/js/13.d823568a.js",
    "revision": "bd4c124c8112c31713622b247d7f6b48"
  },
  {
    "url": "assets/js/14.8698a128.js",
    "revision": "d1b4efc02d32a8ce55a89e270bfa32b8"
  },
  {
    "url": "assets/js/15.2b236a71.js",
    "revision": "84b2cf8268c619136703614ee3e14ff4"
  },
  {
    "url": "assets/js/16.8397828b.js",
    "revision": "9a053c0ece3b7e4c82d5fcdf96f724a6"
  },
  {
    "url": "assets/js/17.101a67db.js",
    "revision": "e7fac5fe3749978d6906b12d3c6a8928"
  },
  {
    "url": "assets/js/18.0a94e34a.js",
    "revision": "6596e6fb8f2f057a238eff549daeced7"
  },
  {
    "url": "assets/js/3.19e0475c.js",
    "revision": "e986beba85364f7c2f67049c58843a17"
  },
  {
    "url": "assets/js/4.50176cde.js",
    "revision": "facbb44fc293b068e928edf4e1fb3ab9"
  },
  {
    "url": "assets/js/5.1f0d2755.js",
    "revision": "f430b99c588072a51d9cbd970723d9ec"
  },
  {
    "url": "assets/js/6.a3ed9642.js",
    "revision": "498bb7b609557cb44b0da72206a20532"
  },
  {
    "url": "assets/js/7.ed70543c.js",
    "revision": "dd640a424ffbf42024847bd004a8f47c"
  },
  {
    "url": "assets/js/8.6cf24346.js",
    "revision": "74c477d681bccd495648d0c5633bab57"
  },
  {
    "url": "assets/js/9.cdb74153.js",
    "revision": "66fd050c627ec3a1cd0e4f18a42c37fc"
  },
  {
    "url": "assets/js/app.201617fe.js",
    "revision": "d1e435ea48bbae646f0cc4e70a1b49e4"
  },
  {
    "url": "avatar.jpg",
    "revision": "d4dd2d543bfc95ffa6ce44ce1b75f709"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "bg.jpg",
    "revision": "e06f1a51f4c146f1fd7d42ec4b6451ad"
  },
  {
    "url": "categories/article/index.html",
    "revision": "e219212361b9d9c92cdd2ebc60419568"
  },
  {
    "url": "categories/index.html",
    "revision": "aa3f52ff1cb5667cc57ec1d88156ed40"
  },
  {
    "url": "categories/noteDev/index.html",
    "revision": "9a2188169dbf592344eaeefc8ec7acab"
  },
  {
    "url": "hero.jpg",
    "revision": "c60b4e9b3a0454137d336d7fdf4a3bf7"
  },
  {
    "url": "icons/icon-128x128.png",
    "revision": "dc8ba44fcff9dd18aa935d23f6a49ed5"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "681992f5b3649ffe525abb02eb3c619d"
  },
  {
    "url": "icons/icon-152x152.png",
    "revision": "e88f292f8c50879df390a697190537e5"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "97f627f10205ac86868f9727ecb7c477"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "231b6077415af6b017503e5b499cd90b"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "771a697863a0bc92b4cffcbe66d25bc3"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "1c10ea76fcd90a1c83aec949bb9dd254"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "ed7b53a2f4596f15838eb88bd84c6f1c"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f358ba0595844b2acc7d02fc18cb56f4"
  },
  {
    "url": "index.html",
    "revision": "8c581d306e4ad9b3c438db53407f4eae"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "mine.jpg",
    "revision": "5ef1240314ed8707848ed856f43d7b13"
  },
  {
    "url": "tag/index.html",
    "revision": "670aecb4bb7323b8f96f04fc8d1307c8"
  },
  {
    "url": "tag/react/index.html",
    "revision": "eb1106667d6768c3aa8d95b0991b9f5d"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "ec40e30849c4c67c153761910fa03f60"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "4d8437a505c261e4e760b5d96467906e"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "5a7a196f7e40cb4c6abeb7bcc8be5768"
  },
  {
    "url": "timeline/index.html",
    "revision": "a078095fb1b61a59acd8ac5375c5df5a"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "b7174355f9c28a677fd481b59f29d57f"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "b6fdf5e120e8ba49bde57602f5805972"
  },
  {
    "url": "views/noteDev/react/hook踩坑记.html",
    "revision": "0660ed99f52715d8cea7f64ab2744bf7"
  },
  {
    "url": "views/noteDev/vuepress/200526.html",
    "revision": "8a20b4d9d1cb7353dee6c94888f9dd80"
  },
  {
    "url": "views/noteDev/vuepress/history模式.html",
    "revision": "78de7e240fa106ce0eee0520a372a094"
  },
  {
    "url": "views/other/guide.html",
    "revision": "d56458a60c7268233d637089cf8e49e8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
