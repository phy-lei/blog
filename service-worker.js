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
    "revision": "e855e86502883af7df73815a139bb76a"
  },
  {
    "url": "20200526/index.html",
    "revision": "e042d3fc78dbf15442d4b27b7f373f70"
  },
  {
    "url": "20200528/index.html",
    "revision": "aa5a95764f789e25a5103728c5550d72"
  },
  {
    "url": "20200529/index.html",
    "revision": "74bba7e13895fa1874b5cd51fc482809"
  },
  {
    "url": "20200601/index.html",
    "revision": "14710502829f02e5a9a96f02731ee0b4"
  },
  {
    "url": "20200602/index.html",
    "revision": "da0bd2d8efb29d0a3b9e0b6f4092b465"
  },
  {
    "url": "20200604/index.html",
    "revision": "884a0e02518ce76210c0d0944aee0795"
  },
  {
    "url": "20200612/index.html",
    "revision": "e073eead0f3b01020b52c573d807f342"
  },
  {
    "url": "20200720/index.html",
    "revision": "4297f25bf693c1b8836c05bac224b3f3"
  },
  {
    "url": "404.html",
    "revision": "5476b154572cf1339603f426718cec16"
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
    "url": "assets/js/10.965adb20.js",
    "revision": "9bdd6402427e1f753f0dba816cf160d3"
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
    "url": "assets/js/14.393f64aa.js",
    "revision": "8f05be5ba8b7129a48331dad79d57cf1"
  },
  {
    "url": "assets/js/15.d9304ba2.js",
    "revision": "13e88eac2e12fb288d3bb967cd724453"
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
    "url": "assets/js/20.8120dead.js",
    "revision": "09eefcb1721a5eb95842ae5325fcf239"
  },
  {
    "url": "assets/js/21.1795d119.js",
    "revision": "6be03137208b9f9d1cab8bb1df0e3da0"
  },
  {
    "url": "assets/js/22.61b6363a.js",
    "revision": "78145b22edc70309d71187dbe569ebbe"
  },
  {
    "url": "assets/js/23.9246054b.js",
    "revision": "2be520c8d1bc9d1238768714ac169df9"
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
    "url": "assets/js/app.c120436e.js",
    "revision": "0152e2194cb46a3365a46c46b10e3658"
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
    "revision": "5690b9a21cca18891102929e92b69e43"
  },
  {
    "url": "categories/css/index.html",
    "revision": "07bb7c8bc32843453bc1d42b88e86f36"
  },
  {
    "url": "categories/index.html",
    "revision": "6bc2f985b39be475c91e242f9964952e"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "61e49ed2ca0179379f9505751c700d47"
  },
  {
    "url": "categories/react/index.html",
    "revision": "ef47289ae7def6a5cd48389cd7b6ca85"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "081de34a9014ea4aba158db99e74c743"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "faebbe7397ee7ad1f198d7685c1855a6"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "9246c72f76c169223fab29d3f3b1d821"
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
    "revision": "4fbd565616c601cf06421b693df3532d"
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
    "revision": "3aaf1724144cb6a1497b5e9ad576693f"
  },
  {
    "url": "tag/index.html",
    "revision": "2262e0b954d696bb8649a739bb7ef590"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "31f36f426b71a25ea587e96fd9cfd983"
  },
  {
    "url": "tag/react/index.html",
    "revision": "35fae1c017696efcda1bd586473d312e"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "57e2001740fbb18b17ead519d08ddcf6"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "0cfdef3b9300d216b441f07b7b3e520e"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "f99eb127d537a66cbc314470fbf7e7c4"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "4f8ce98aab6a11d3d14470582b6368c0"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "d562c0271e97c659711cffdcdcff24a7"
  },
  {
    "url": "timeline/index.html",
    "revision": "c5e74cc6bd869e8e1ed28ddfdd3a22a2"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "08a8112d5754779ac78b1c39cedabacc"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "8d3a53b90a759000eda45d0c56000196"
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
