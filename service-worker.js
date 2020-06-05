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
    "revision": "dbe025051e91c7f8e294032655ea9be4"
  },
  {
    "url": "20200526/index.html",
    "revision": "0b91bba9ce5101b7de9fe21f034e2326"
  },
  {
    "url": "20200528/index.html",
    "revision": "3cf7012597fd3b852d7190059bf191bf"
  },
  {
    "url": "20200529/index.html",
    "revision": "d7f3b5ac1eeec1663a6bdc7aa3b778db"
  },
  {
    "url": "20200601/index.html",
    "revision": "e186e350c350c1b2c297638fdfbc4fb2"
  },
  {
    "url": "20200602/index.html",
    "revision": "24c1fc2623c8c547b9ed6fe4a332d5ec"
  },
  {
    "url": "20200604/index.html",
    "revision": "1b4073686c7d5acad2d9029a29e121ab"
  },
  {
    "url": "404.html",
    "revision": "8fdca70e95d79297afc9da031c4feb69"
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
    "url": "assets/js/app.082c6516.js",
    "revision": "268c740275956fbf7f9d3055eb96fa2e"
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
    "revision": "a088327503ee59f39705c368c906fb69"
  },
  {
    "url": "categories/css/index.html",
    "revision": "b96115850ba9fdb37dd68b1a6dec7661"
  },
  {
    "url": "categories/index.html",
    "revision": "a9334eb24af18f4c38367308b9e708a9"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "8490d2868cb74f30086036207337ca1e"
  },
  {
    "url": "categories/react/index.html",
    "revision": "a351aae039fef93d8789c2033ce27668"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "0a685e44b53808ea70e60ec3d519cac3"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "13e2f100dbdc7aa2344d9b9e199fa766"
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
    "revision": "6af4308cdd2abc5204a9edc8110eeda4"
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
    "revision": "2f71eb72d05562e0d7c481a121917e80"
  },
  {
    "url": "tag/index.html",
    "revision": "b9a34adcfdcf51413404fa54764ea8c9"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "0566f9e331a04e13b5e140c4a21af521"
  },
  {
    "url": "tag/react/index.html",
    "revision": "d71737bf825640426421aecda8e2700e"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "8e4a91f24fa159ac8d24f9dd76206138"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "a73fb7d9b27059659e9981129a4eb996"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "bf2dd2c608d9cda6765161d03027b420"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "c0465ed77cba9d542f7cdcb854600613"
  },
  {
    "url": "timeline/index.html",
    "revision": "65738001d2b8564acc42e414584d8937"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "46dbcbdebbdbf930af16648b8bdd73b8"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "0f97a6f0c3ad0e9bd35ddb5a64f69633"
  },
  {
    "url": "views/other/guide.html",
    "revision": "11e3edd98e7a991fff1b6679eadd39e9"
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
