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
    "revision": "8f0ed77030ebe5078a3f05b550da5e24"
  },
  {
    "url": "20200526/index.html",
    "revision": "faa6526b514d888dfef86484f88917b1"
  },
  {
    "url": "20200528/index.html",
    "revision": "916a3211272010e4ea00565e3fecfa77"
  },
  {
    "url": "20200529/index.html",
    "revision": "85124eb86c214b1cfeabd492723de9a1"
  },
  {
    "url": "20200601/index.html",
    "revision": "dfdd84a46213c210efce7a1471c0c025"
  },
  {
    "url": "20200602/index.html",
    "revision": "58034024c1887048270f83926f004985"
  },
  {
    "url": "20200604/index.html",
    "revision": "426f9a5cba7c6b6bb127631b2c0f39f5"
  },
  {
    "url": "20200612/index.html",
    "revision": "96975aaa6a0a459f17f12d15e59a6659"
  },
  {
    "url": "20200720/index.html",
    "revision": "7b6baee269fdb711729de6d59fd16403"
  },
  {
    "url": "20200804/index.html",
    "revision": "f60533b968d655642f6f7169aa695063"
  },
  {
    "url": "20200812/index.html",
    "revision": "d3e4b5ac6c95bc7590edc17fdd4d97be"
  },
  {
    "url": "404.html",
    "revision": "a61abf44f12fb4f402c0f1c0ffb7696d"
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
    "url": "assets/js/10.cbdb725f.js",
    "revision": "9982265904f238a5be582d15df22c698"
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
    "url": "assets/js/17.1955adc4.js",
    "revision": "38952d47b6a1b23327db33992688a98c"
  },
  {
    "url": "assets/js/18.933a7889.js",
    "revision": "f787b2d9132652bcdd775d5b0428b31d"
  },
  {
    "url": "assets/js/19.4395e7c8.js",
    "revision": "bb2ce992e04bc41b72833597834edc29"
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
    "url": "assets/js/22.d7a8c66f.js",
    "revision": "7ad7f9677df873b2d3da8cfe87a90427"
  },
  {
    "url": "assets/js/23.4d22cd06.js",
    "revision": "ca1620b1af55ce0ccd5390753c37a732"
  },
  {
    "url": "assets/js/24.4d8e5a53.js",
    "revision": "40a85acf460bf661f6ad73fe39b6f3d8"
  },
  {
    "url": "assets/js/25.fa553c42.js",
    "revision": "f6a50d843c9c8fad6af952ae7fb6bb43"
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
    "url": "assets/js/app.4f0e78c6.js",
    "revision": "7d4a4a0436d7684eb352c74dd5a5df9a"
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
    "revision": "fc6249dc2c5c1f5724ecd75bac488dab"
  },
  {
    "url": "categories/css/index.html",
    "revision": "d2a6a874ddc041cbcb6977a405bd81b0"
  },
  {
    "url": "categories/index.html",
    "revision": "c0d1a0ac5b0668982083f791e34a6f8a"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "40ed72e51e95bc863b75e8ef152e95cd"
  },
  {
    "url": "categories/react/index.html",
    "revision": "d76050b073be5880eb8f647396679c99"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "56600cd6f2e2e118bfc1766ff02c0ede"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "07fc188a823acec77e32982106afd539"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "3c170a36acc9a142fde997c052798cc9"
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
    "revision": "6a9314981e1a24b44aa9ac83f937ed54"
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
    "revision": "cb66bba588421cf960b0f0192159c57a"
  },
  {
    "url": "tag/index.html",
    "revision": "4ef894da2e58d3cdd909369e019b295c"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "aa57b63bcfaff42ed2da2a768c2ee6ab"
  },
  {
    "url": "tag/react/index.html",
    "revision": "6546ae7474481e66bb009aca7a0ee49f"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "3710466c49d7bd0badda6361290fbf42"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "8f3b6e41b255a36733c12ad8226638cf"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "3502ef234a6f464af52c5e15b06cd1bd"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "e107f406917cc67be3948ea2eb950949"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "5c1a4ff2be6e27752cc85fd3a5b94f7b"
  },
  {
    "url": "timeline/index.html",
    "revision": "d76bab5462cbda64bf4dbe074b565983"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "635e6ab10d7c9071ce9d3852d607a3ad"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "38482bdd103a9e1606230e1a333fa8dd"
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
