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
    "revision": "c0613324664ebf047014c679f2029137"
  },
  {
    "url": "20200526/index.html",
    "revision": "a60120dcbdbb6ff4cc9a7e86be917ba2"
  },
  {
    "url": "20200528/index.html",
    "revision": "2747071e909da08601a468b51f773c4b"
  },
  {
    "url": "20200529/index.html",
    "revision": "66e9cc1b5c0a994746c4ab0a1b6d4989"
  },
  {
    "url": "20200601/index.html",
    "revision": "c47aa1a76bf5a9fd0c6f721c9a0ded76"
  },
  {
    "url": "20200602/index.html",
    "revision": "f6cf7ee06d1c7949a7e4e3bde6e88472"
  },
  {
    "url": "20200604/index.html",
    "revision": "5c4050a684da4cf08ddf655b530d8e40"
  },
  {
    "url": "20200612/index.html",
    "revision": "4be392ae7295855c4a4a965ef93cea08"
  },
  {
    "url": "20200720/index.html",
    "revision": "53c961b3b4e745ab1a2a6adf95802da5"
  },
  {
    "url": "404.html",
    "revision": "413b63194aba82e721d22e8cf2f3613a"
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
    "url": "assets/js/20.70782dc5.js",
    "revision": "3fe9e47a8c510dd860789fb5ca09b29e"
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
    "url": "assets/js/app.d949be3a.js",
    "revision": "5fb637ecd3776307d0dcac6002dccace"
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
    "revision": "1e7c880ea92658c1169abbbcf7f15a47"
  },
  {
    "url": "categories/css/index.html",
    "revision": "8a2f3bf414af6f51532776f93e0dc58d"
  },
  {
    "url": "categories/index.html",
    "revision": "705ec26a635a6de34fc95891c218fc71"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "b95b1b24794d09b44d5f1616b063c579"
  },
  {
    "url": "categories/react/index.html",
    "revision": "c3eda58381332a2e5d86ae0fd44d1e5b"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "a7bf914f3e60f3623a5446c2a08a693f"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "ff535e6269455ba81867c2b97da8506a"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "e4ee7850ca3ced5df576adfa6b08f173"
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
    "revision": "1a94300dcb039fbe935e21fa4262c13d"
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
    "revision": "16788e41f3194250cf9a2564ef38a67f"
  },
  {
    "url": "tag/index.html",
    "revision": "957892529299b865ba4ee5ff45d5dfd5"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "dcd8a47f6fc0bdc776235abde3e8afb0"
  },
  {
    "url": "tag/react/index.html",
    "revision": "06197061f3a031eac2e4a3d1241f3bc1"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "b8c0c4b8d0a94129fab84e079fa3d32f"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "b79a52b011b1150f27a8cd8a950d1b82"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "c031d1c0202199493cd498a31376c921"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "36b95df770fd0424487d680501e32f3b"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "999a76d61b895950a76691cf3a90a6cf"
  },
  {
    "url": "timeline/index.html",
    "revision": "fa3c3d85e47574b95a4e7c31109d40d1"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "0e5f11b41170492b65d8dc574997e27c"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "fe0b8e0f19d7f6f051a94b41793d69bc"
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
