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
    "revision": "a6ea13c9391c7f7d2b8d27bf525a3560"
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
    "url": "assets/js/10.027a8549.js",
    "revision": "b43400bdb5be30460ed2380777b33beb"
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
    "url": "assets/js/14.546277eb.js",
    "revision": "78454a397f9312f50643119f42db7f82"
  },
  {
    "url": "assets/js/15.07052212.js",
    "revision": "9c9e0567ce30a8abe3613d835e5e0a83"
  },
  {
    "url": "assets/js/16.e4429148.js",
    "revision": "c9e4ecef846d16b388a1463cc3f502a2"
  },
  {
    "url": "assets/js/17.557d45c8.js",
    "revision": "38952d47b6a1b23327db33992688a98c"
  },
  {
    "url": "assets/js/18.763eb9c2.js",
    "revision": "0af9354738bbad85d77905279b8f6d39"
  },
  {
    "url": "assets/js/19.fafee982.js",
    "revision": "3061d87751a3d086f1917569128ca159"
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
    "url": "assets/js/app.3a3612ba.js",
    "revision": "4188f6861e490871f762324c6ddd1dd9"
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
    "revision": "aac69d22c923c4a59326be79cfd15c5a"
  },
  {
    "url": "categories/index.html",
    "revision": "4f0c216028406b914d423b9898fffe0b"
  },
  {
    "url": "categories/noteDev/index.html",
    "revision": "96c3734aa3a7c98b3870f7915e2fd03b"
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
    "revision": "7ce2a4f65e37884ed2345a42d5414825"
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
    "revision": "a854ea4fe457d2c470a57347a90d8e2d"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "91a1ebaac19c33db5fdbeab051886252"
  },
  {
    "url": "tag/react/index.html",
    "revision": "624ed60894e7c4c87c0a2396022af7a5"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "3ddb74e99254a808bb1866a7e8d7159b"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "dc8ef039c89e3095636636e59a3b87be"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "689ba0f561fb3c5578b2bf92ac2b0519"
  },
  {
    "url": "timeline/index.html",
    "revision": "1f8f12f9c2558fe39dd858b41ecfb81f"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "219fa0cac64da8af012369be7d86b1fa"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "870841eaec5b45f1739d0270dec8cd46"
  },
  {
    "url": "views/noteDev/linux/2020529.html",
    "revision": "9c3b7bc94a59917db92611043308cf47"
  },
  {
    "url": "views/noteDev/react/hook踩坑记.html",
    "revision": "b92c6d45bca67f1f11f0e7888b924007"
  },
  {
    "url": "views/noteDev/vuepress/200526.html",
    "revision": "a12df41a0c88a3462b625fabc712a0a5"
  },
  {
    "url": "views/noteDev/vuepress/history模式.html",
    "revision": "1e36f879a5b3db77253155e9d2606126"
  },
  {
    "url": "views/other/guide.html",
    "revision": "7553fc14392c96b9929bad08b6a602cc"
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
