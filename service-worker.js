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
    "revision": "31cf5f889005b7c648a2f4b68b0a29a1"
  },
  {
    "url": "20200526/index.html",
    "revision": "b707603ee74e14df926765d1d649370d"
  },
  {
    "url": "20200528/index.html",
    "revision": "20c43da5828521aa0718e53ce39c2f45"
  },
  {
    "url": "20200529/index.html",
    "revision": "e0d42331e97f9d0468a09d447470191a"
  },
  {
    "url": "20200601/index.html",
    "revision": "026d635ff7a4323459ebcd7a3978b20b"
  },
  {
    "url": "20200602/index.html",
    "revision": "b65de653554bcafc44739526335ed19a"
  },
  {
    "url": "20200604/index.html",
    "revision": "f08023879014023761bf8d3de4318221"
  },
  {
    "url": "20200612/index.html",
    "revision": "d1356718cdd38e8f60f8ddfd8df7e5cc"
  },
  {
    "url": "404.html",
    "revision": "3c515454352375bd1855fdf0fa97d895"
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
    "url": "assets/js/20.ce041880.js",
    "revision": "bff3d633eedb8ce8c492cec51e30148e"
  },
  {
    "url": "assets/js/21.2bea8aeb.js",
    "revision": "fd295727815625dd7e7ec15fc82af61a"
  },
  {
    "url": "assets/js/22.f086ec04.js",
    "revision": "b1c1d49c9a9b77553fa610856cb117c6"
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
    "url": "assets/js/app.6dbb4f92.js",
    "revision": "96b9cb83c58400b0f8cf109f1b26fe23"
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
    "revision": "2411feaa17c159476ba3edf49264e54c"
  },
  {
    "url": "categories/css/index.html",
    "revision": "69cc120642ba6b90de18a73909c1c3e8"
  },
  {
    "url": "categories/index.html",
    "revision": "5640d848384025fe96744470581743d8"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "c8ee35ed13103440ce2fe3860c6328fa"
  },
  {
    "url": "categories/react/index.html",
    "revision": "e5cd93020f4529ba3109563f7e681a2c"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "4d5c36626ca7bab84de0f8cee239a057"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "1a140fac27886fec5b49aa022f329daf"
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
    "revision": "a20a1a3626dd28427499fbd1ad2c198a"
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
    "revision": "c1576de15f992e97150449a3ec37647c"
  },
  {
    "url": "tag/index.html",
    "revision": "d55fd2f7717db92715e92bfeec2e19ef"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "0453560caf984a3d73007107f55c8577"
  },
  {
    "url": "tag/react/index.html",
    "revision": "3a81959062be36e90408743f9edf0801"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "d19547d1a4f75b46885859da9bde9e4c"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "4dcfda059a5d765c063dab3d24363c9b"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "40e9265c60b7e287b51255e7fa35c955"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "1ee4ada87e848da803daa57d1ff430a4"
  },
  {
    "url": "timeline/index.html",
    "revision": "74c738c6de98ecd87e0cd355f2721c6f"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "80748383d796db525c859b0f459fe6df"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "eba3fc6e663046cd57da025469797102"
  },
  {
    "url": "views/other/guide.html",
    "revision": "23ea2f2576151d62a05b0d961b01f9b9"
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
