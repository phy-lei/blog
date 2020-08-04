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
    "revision": "ac89fc459d0581e09de3f5541e4adddd"
  },
  {
    "url": "20200526/index.html",
    "revision": "8bfd44afc35eaa67df2f8972c875749b"
  },
  {
    "url": "20200528/index.html",
    "revision": "c4f587de919baa2c85623596fc2195e1"
  },
  {
    "url": "20200529/index.html",
    "revision": "e0c3be052b9bfa6c2f2ecb952408d925"
  },
  {
    "url": "20200601/index.html",
    "revision": "448087ca4516cc252a45bc6c5aba9527"
  },
  {
    "url": "20200602/index.html",
    "revision": "1d25e8699a65e9ddcc72dea33ebcbf88"
  },
  {
    "url": "20200604/index.html",
    "revision": "7f1789cda2af5663353d15e2c4e2579d"
  },
  {
    "url": "20200612/index.html",
    "revision": "a0b8e8ae400555a05ad3915666e57e1b"
  },
  {
    "url": "20200720/index.html",
    "revision": "c2e9c1e85aa4802e060a554183d2bb87"
  },
  {
    "url": "20200804/index.html",
    "revision": "6d7f6d7eda0c9a8899b73ae842edb520"
  },
  {
    "url": "404.html",
    "revision": "83bd5de0603fa757e033e9d2e2d8b3df"
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
    "url": "assets/js/10.664802b8.js",
    "revision": "ffe2ddd801c57acf4cabd6f7b2c0dc12"
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
    "url": "assets/js/19.4de70280.js",
    "revision": "061f7a077eb70dec97fdc9aefc9717f0"
  },
  {
    "url": "assets/js/20.68ebc6f0.js",
    "revision": "4518f877461aa616b56b4e9476eef6a9"
  },
  {
    "url": "assets/js/21.3f1e8063.js",
    "revision": "143ce60c02d5b0b6489d5f751fb92da2"
  },
  {
    "url": "assets/js/22.4f7839ed.js",
    "revision": "90be613edbbdea1e3d0d937fab9acece"
  },
  {
    "url": "assets/js/23.5558fe4c.js",
    "revision": "ae02a76bf649f656ec33f59ec9711863"
  },
  {
    "url": "assets/js/24.bbfda36a.js",
    "revision": "8a0c3eeee78337101d99bd2198510650"
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
    "url": "assets/js/app.8b744b3d.js",
    "revision": "74f80e8e0c32449dde71bb074169e882"
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
    "revision": "2c346adb606f08acb7a8295f92cb6286"
  },
  {
    "url": "categories/css/index.html",
    "revision": "f6dd42fa77f9ec8115e8ffaba29d44ac"
  },
  {
    "url": "categories/index.html",
    "revision": "48df68379cf28ead30f39ea3f506c6e9"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "231fceded2d41356aabf299c7514b6ae"
  },
  {
    "url": "categories/react/index.html",
    "revision": "669bd8643c8eab7b7af2fc1c5cb39990"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "b2f12915a2339250a90166cf414de599"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "5320f075b1e2f52f52b4d837818127a5"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "1521bed421f5fe1d957f00d3ad5c34a8"
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
    "revision": "a3c7203a96eeec0659f3a21f827fe376"
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
    "revision": "ad1e3a4c5da73092ad908fa0dd3017d3"
  },
  {
    "url": "tag/index.html",
    "revision": "5ee5c0e1d8396d01317588d5b7c7d1ea"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "fc9e747d9d941af9a3beebe0bf45d634"
  },
  {
    "url": "tag/react/index.html",
    "revision": "21e0c4a2385d3e8dfdc5da3b211beba7"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "110ee92df4c45f423f0a6c321dff6f99"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "2425c1199f1d7afd60af7a72a47b908f"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "e37a2faa2acd5b4064ee1870272a7c63"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "761448e72e88872a4dd0d3802403889e"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "e5fb33a1719c1f833edcd627d28379c4"
  },
  {
    "url": "timeline/index.html",
    "revision": "a971739e143dd3440a52ee19924b5832"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "dec90de7078ad1caaca30facceebbb71"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "deffc25ddd7969d56a1a3f7965b7e97e"
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
