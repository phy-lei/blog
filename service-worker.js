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
    "revision": "c0fc1fea602ff000e7f6b422f2ad7539"
  },
  {
    "url": "20200526/index.html",
    "revision": "8ff7a73b49fb0e04ff54d254e6f26a5f"
  },
  {
    "url": "20200528/index.html",
    "revision": "18a04cea593b56581b46bf92525f0944"
  },
  {
    "url": "20200529/index.html",
    "revision": "f6c76b94e5d82056a14ed9528b2b7a92"
  },
  {
    "url": "20200601/index.html",
    "revision": "1dc2bcac08b523fd798f67ba9d9aa535"
  },
  {
    "url": "20200602/index.html",
    "revision": "d583c6af64d8842680372c4a3147442d"
  },
  {
    "url": "20200604/index.html",
    "revision": "78456b249d01f65d92f5aa10e493f581"
  },
  {
    "url": "404.html",
    "revision": "1d687303b6e50f5dcb7b5d514b0f30a1"
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
    "url": "assets/js/10.a9d5027e.js",
    "revision": "1915110bee70d167fd234119a4039a9e"
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
    "url": "assets/js/14.70370bdd.js",
    "revision": "b1f55299c00ae49e9a96368fe3a34d05"
  },
  {
    "url": "assets/js/15.96edded4.js",
    "revision": "ed37e6552e417cb227555d994471860d"
  },
  {
    "url": "assets/js/16.5e5443ff.js",
    "revision": "e70c4b388065b2e084324e38948e88fa"
  },
  {
    "url": "assets/js/17.1955adc4.js",
    "revision": "38952d47b6a1b23327db33992688a98c"
  },
  {
    "url": "assets/js/18.933a7889.js",
    "revision": "f787b2d9132652bcdd775d5b0428b31d"
  },
  {
    "url": "assets/js/19.4de70280.js",
    "revision": "061f7a077eb70dec97fdc9aefc9717f0"
  },
  {
    "url": "assets/js/20.9dc1a0f4.js",
    "revision": "7302ab9bc170f622403dd9bd81ac8ca7"
  },
  {
    "url": "assets/js/21.18f02691.js",
    "revision": "5a736daaaee16d782aecaac347925e55"
  },
  {
    "url": "assets/js/22.07bc820f.js",
    "revision": "a041588a7d72a95b62a9f44aecd780ad"
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
    "url": "assets/js/app.45e9dc84.js",
    "revision": "a04149b9b8e29f12e6248b24ce0dacbd"
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
    "revision": "aafc4973d1206cf40111ce5466d47bbf"
  },
  {
    "url": "categories/css/index.html",
    "revision": "fc7615e2de5c348841225105664808f0"
  },
  {
    "url": "categories/index.html",
    "revision": "dc4563c3a41206ddd26c02ceb306c44e"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "6449d24dedcfbb32f4c0f868c4843150"
  },
  {
    "url": "categories/react/index.html",
    "revision": "afe69fe783f8a3a77f237d3a369493c4"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "f140971f8bcbb7462ef3ffeb67a33757"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "8942381a20f5cdacd5f29bfcac9a8a2d"
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
    "revision": "c56dde4afa82b643e4f99dceffba72ed"
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
    "revision": "e16862cefe7405269f1cc07b830169af"
  },
  {
    "url": "tag/index.html",
    "revision": "25c8bfb3f54ea164b403103fb997a220"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "d6ed3ce30ffc5665e12d89a60bf60bf5"
  },
  {
    "url": "tag/react/index.html",
    "revision": "8253f771e19cdff8b35ba716c356ac3a"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "1d0ec70a31515b4ee8556ac8162574b5"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "b5d8e3d0f6918c487e0989bbd41160cf"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "e3724394629510f687af557aea697c7c"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "629def4e2423c5301176842964ee6b75"
  },
  {
    "url": "timeline/index.html",
    "revision": "ad044cfc2a0130460c323820b97c370b"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "cb8cd9d56543597279cf060785c6e9fc"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "5205f41cda6fa1957e161672dab257fd"
  },
  {
    "url": "views/other/guide.html",
    "revision": "977ade1c9ffb82e7f87893804616a505"
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
