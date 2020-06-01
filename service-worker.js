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
    "revision": "5c561dc70e767d0878ac5bc91fc75976"
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
    "url": "assets/js/10.23915a81.js",
    "revision": "7dbda9d1853282247bd86569a1fa915d"
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
    "url": "assets/js/14.ad1d98fb.js",
    "revision": "c7891dbd3d0bf9b1c6d55e968dcacc36"
  },
  {
    "url": "assets/js/15.c038c9d4.js",
    "revision": "ed1b46c9337dde7e8b8982ccbc5223c7"
  },
  {
    "url": "assets/js/16.16d4ae35.js",
    "revision": "fba610393d0f0ffcac2dac0a5bac9957"
  },
  {
    "url": "assets/js/17.899aac7d.js",
    "revision": "03e0a0b6a8ce9c405f9e4cf1836e1d88"
  },
  {
    "url": "assets/js/18.370ac121.js",
    "revision": "8fc601038427e2b2e03b6836240286ca"
  },
  {
    "url": "assets/js/19.b224c123.js",
    "revision": "8c56d7ee01492c25453ab7de007a112e"
  },
  {
    "url": "assets/js/20.d6ac1ecc.js",
    "revision": "717096b0fd364c3945fa7a6d960bb78e"
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
    "url": "assets/js/app.20018574.js",
    "revision": "8450a039001b90e32151a98548fb7e59"
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
    "revision": "d2cef3db19edca2a661848e0a5091836"
  },
  {
    "url": "categories/index.html",
    "revision": "664b08023bbd5b00f8b280a53d7175c3"
  },
  {
    "url": "categories/noteDev/index.html",
    "revision": "2ba1f0f3707af9f999d65f3cf5edaba7"
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
    "revision": "acce9b44160708aade6f2d267c97bb76"
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
    "revision": "87370b0cdab3fc672b484e27c264dd1e"
  },
  {
    "url": "tag/index.html",
    "revision": "f0095ab839424421776c97d712870ef6"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "e9c67d9680df43eb86670eedb7607d05"
  },
  {
    "url": "tag/react/index.html",
    "revision": "b6bf26ac79d41a51a3ae6c84b09a079e"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "b8f6983ad72823e6c43aa545611e1e5e"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "f22284dc32ad70fa4d4cc02cf86b3452"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "b799bc1ff71f02c77195c8610ea359cd"
  },
  {
    "url": "timeline/index.html",
    "revision": "2db1a4dec1c9e25389c4c9b2136b51d6"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "11ce8f2e02826289db83ae0b6c90c38c"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "947934bc689bae1be4e8abe7dbfda3da"
  },
  {
    "url": "views/noteDev/css/20200601.html",
    "revision": "8d299dc6b3b2301f163be64d34c86282"
  },
  {
    "url": "views/noteDev/linux/2020529.html",
    "revision": "84d0694e5372fc5ef3e6f81bbe5cf44d"
  },
  {
    "url": "views/noteDev/react/hook踩坑记.html",
    "revision": "92a95ade300e5469282b2d2f234506c5"
  },
  {
    "url": "views/noteDev/vuepress/200526.html",
    "revision": "73336fe2709efe2008ad103479d12ad0"
  },
  {
    "url": "views/noteDev/vuepress/history模式.html",
    "revision": "e93cb54c7c24c818af408ecb221de25c"
  },
  {
    "url": "views/other/guide.html",
    "revision": "f434e2e262632db239d0d87d5c280dcd"
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
