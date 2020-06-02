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
    "url": "20200415/index.html",
    "revision": "e8da42748e47aadd0f6b8944fb699450"
  },
  {
    "url": "20200526/index.html",
    "revision": "37c5fb4885e0ebd4992bc30d2a9d9f90"
  },
  {
    "url": "20200528/index.html",
    "revision": "629cecda317a0d70d50ab905612f01bc"
  },
  {
    "url": "20200529/index.html",
    "revision": "b11626a3511baf8128dbe0f91563951d"
  },
  {
    "url": "20200601/index.html",
    "revision": "401527e20139f0746f1c1dedc04ef748"
  },
  {
    "url": "20200602/index.html",
    "revision": "c97e17843d729db0e422f2712663ccbd"
  },
  {
    "url": "404.html",
    "revision": "a7698ca7bb1b6346e9e8c084c0ee8024"
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
    "url": "assets/js/1.51d2f36d.js",
    "revision": "ddc9f734993167dbe05adceab30f6431"
  },
  {
    "url": "assets/js/10.1bd445b1.js",
    "revision": "50f281ccfe3d71b19979470cdc5b7da9"
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
    "url": "assets/js/14.8850cf67.js",
    "revision": "4f243cdaad2d1eeac48ea942051b3caf"
  },
  {
    "url": "assets/js/15.b3e93cbd.js",
    "revision": "ed1b46c9337dde7e8b8982ccbc5223c7"
  },
  {
    "url": "assets/js/16.fa6db216.js",
    "revision": "4d7ea495013dcd59bae05d81eeecd067"
  },
  {
    "url": "assets/js/17.f3145664.js",
    "revision": "2d024d2a9a57e4b3c3a572b337001de3"
  },
  {
    "url": "assets/js/18.f8e7debf.js",
    "revision": "6b142869006e33719357adc1a18e3593"
  },
  {
    "url": "assets/js/19.e96e9387.js",
    "revision": "6eccf9dc60073f5cb6b6bfa5e8c40c73"
  },
  {
    "url": "assets/js/20.05129624.js",
    "revision": "3d89968bb2c2ae2de9c7dc585c87d5ed"
  },
  {
    "url": "assets/js/21.2b5e0f90.js",
    "revision": "a4711c2a61369e70dbb6fb3d8696d542"
  },
  {
    "url": "assets/js/3.85657320.js",
    "revision": "ded4e694ba473251ad0f154cb76e213e"
  },
  {
    "url": "assets/js/4.1cf9f4e2.js",
    "revision": "8f1d40e98ffd36666e4baa8d162865bd"
  },
  {
    "url": "assets/js/5.66c8e8a2.js",
    "revision": "80ec14f88bdcd5309d8fd2a679e14a82"
  },
  {
    "url": "assets/js/6.ce1903cd.js",
    "revision": "cd66800acc7c520670fde0afed1b37d0"
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
    "url": "assets/js/9.52c33c76.js",
    "revision": "fc62a4b21369b026bd2a2ac098a58732"
  },
  {
    "url": "assets/js/app.df485840.js",
    "revision": "27563442893ea785bab75cf986f997e5"
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
    "revision": "31024795947d85733cfc0e78e4488d7e"
  },
  {
    "url": "categories/css/index.html",
    "revision": "91d03f515a78ba3ee902d725b0b16301"
  },
  {
    "url": "categories/index.html",
    "revision": "10f19a73bba448381d19e0132f3de997"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "acde43a55eca88da4993654092c6ab15"
  },
  {
    "url": "categories/react/index.html",
    "revision": "4c8df647730f416c2e2d8e779ce9dfa4"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "850058607a77e6845fae82af3037adce"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "f0a76509c63396d0464e4e9d2272c1fb"
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
    "revision": "b26af6b7452e052a579752707d218075"
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
    "url": "tag/css/index.html",
    "revision": "ea4c0566896be13ee29c76755bf8f133"
  },
  {
    "url": "tag/index.html",
    "revision": "cc73eee2bb1aeec7d419d4c6d9eaf3be"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "35f6b6fb6113152bdb8e7709cd744c54"
  },
  {
    "url": "tag/react/index.html",
    "revision": "2a3fa7b02e48695b7661611c708f8af2"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "9d2ff67c1b211a64e73ff725a011e0f9"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "9b8db6a07130108f87430d18ecaaa5a5"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "b1a5915697eba8b8fe4ceba332942a65"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "ab5afb8fd6505a970884c58e2b5634f2"
  },
  {
    "url": "timeline/index.html",
    "revision": "0a187120db9109038ea76c9000da3fb1"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "2029d7f95ed0a74dfb383372113bbf3c"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "751d4ddaaf50284e9440e65a8d6c3e92"
  },
  {
    "url": "views/other/guide.html",
    "revision": "bfe6357545c4144f0451383ae0839897"
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
