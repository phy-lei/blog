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
    "revision": "0e3de8046c0e720752ccfebf97a6977a"
  },
  {
    "url": "20200526/index.html",
    "revision": "5b5e25919d31508edbf0d9bb176d3120"
  },
  {
    "url": "20200528/index.html",
    "revision": "24dc3ff00cf989bc8215a7d8c9a5ab1f"
  },
  {
    "url": "20200529/index.html",
    "revision": "ab15322956058f8e7970af2f8bf066f0"
  },
  {
    "url": "20200601/index.html",
    "revision": "996a369331daa344307ab962eb78baa3"
  },
  {
    "url": "20200602/index.html",
    "revision": "77876fd28da48765850a94bf73f237cb"
  },
  {
    "url": "20200604/index.html",
    "revision": "d92daf25d17175f50a68c18573cc8673"
  },
  {
    "url": "20200612/index.html",
    "revision": "9e7ecfe9fae8352a22a3d1eb7a6f7d8e"
  },
  {
    "url": "20200720/index.html",
    "revision": "115c172d58567f808dc8c719a88ae346"
  },
  {
    "url": "20200804/index.html",
    "revision": "1157b491fc5defdaa9cfc07028259c46"
  },
  {
    "url": "20200812/index.html",
    "revision": "f8ba0a72ecc52e55b5ca3408cec8a92f"
  },
  {
    "url": "20201013/index.html",
    "revision": "debeadb2e37e1991bad284d4393edda8"
  },
  {
    "url": "404.html",
    "revision": "7e1a1fa3e143041c5fb385f0859deed0"
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
    "url": "assets/js/10.f40018d3.js",
    "revision": "a9e864bea617af3318297ac93d7df712"
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
    "url": "assets/js/14.63d09ad0.js",
    "revision": "a77d2034168087a5dfb61557531e2d25"
  },
  {
    "url": "assets/js/15.bda9a92d.js",
    "revision": "5ade1d8f60fa253eb673a07d1b599323"
  },
  {
    "url": "assets/js/16.5e5443ff.js",
    "revision": "e70c4b388065b2e084324e38948e88fa"
  },
  {
    "url": "assets/js/17.de6a5b76.js",
    "revision": "b424ee0f83ea3d94e4af554032bf9d9c"
  },
  {
    "url": "assets/js/18.5cb611ef.js",
    "revision": "8fc601038427e2b2e03b6836240286ca"
  },
  {
    "url": "assets/js/19.a8cc77e2.js",
    "revision": "a3f80e6eeb0f9d96b7387d0f5494d82c"
  },
  {
    "url": "assets/js/20.fc310d3a.js",
    "revision": "3a5c88ff70bcdb3e1a374a6cbfacf120"
  },
  {
    "url": "assets/js/21.92bde4fc.js",
    "revision": "cac8d60c713bc927396b060d1057581b"
  },
  {
    "url": "assets/js/22.177d4b07.js",
    "revision": "21e1a4c8a3b0e48447ee49ee810e81cf"
  },
  {
    "url": "assets/js/23.c808c776.js",
    "revision": "9e81a52ef2fdfdcda51951d724855504"
  },
  {
    "url": "assets/js/24.699bc381.js",
    "revision": "5068f3dacd24a686db628b5b12f0975f"
  },
  {
    "url": "assets/js/25.f93bf0d0.js",
    "revision": "2cb7f516c1587e3a00515f041e418f06"
  },
  {
    "url": "assets/js/26.956938e2.js",
    "revision": "1fcef73891ff06ea45f16c3c57d261a8"
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
    "url": "assets/js/app.0772b2ea.js",
    "revision": "861e062c27d634fa378cb07110317bb8"
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
    "revision": "6fada24af49aa4aa9935d13df14e2494"
  },
  {
    "url": "categories/css/index.html",
    "revision": "039f43cff8de0cc161a94d2aff2f3849"
  },
  {
    "url": "categories/index.html",
    "revision": "a1cf8a67c7bc9d53ce46577f420cdecb"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "ae847af07707d4bc29c90cc93c112e19"
  },
  {
    "url": "categories/react/index.html",
    "revision": "a2dc53e0025168f0dc68dd9437524420"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "df459f70218437a15ef2b4f6ecd847a8"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "2c79ab7471bf1224a85d9410e595545f"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "79d4cc4af4fbe5c8736283de414e8501"
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
    "revision": "1598d6cecac3ef11f807e4836675b8c8"
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
    "revision": "573cd58a2b13d52330f9b601ecbba7d1"
  },
  {
    "url": "tag/index.html",
    "revision": "88cc38a145d311531bff7813fef7d446"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "0e4dc26cd691f1328dd00adec9549d4e"
  },
  {
    "url": "tag/react/index.html",
    "revision": "92c2aa06bfb39b69de1c6dbda5b137a4"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "f87e45aaa631601f5fcc4fb5a1560051"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "1279b3033f622d6ecc8fd239fe324f47"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "b7500c1c99fd481f0990aa358fc2e128"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "dee0404b098b707b4e9b528da4239351"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "049ddc78413c6de697d70a9fc30ca726"
  },
  {
    "url": "timeline/index.html",
    "revision": "3e427d377451354c916b35d305f5bb0e"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "3626035fdbde7bf0b90c2fe9ac79528e"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "bb24d09f53e06638c7e7e07ac3d37f46"
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
