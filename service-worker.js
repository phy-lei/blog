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
    "revision": "ba5aa78cd7fd2b58511927667fad1b78"
  },
  {
    "url": "20200526/index.html",
    "revision": "b5a9300f166ec32eab84b7dcc923ee7a"
  },
  {
    "url": "20200528/index.html",
    "revision": "ff0bac532dd1c3277dfc109a3267b2f2"
  },
  {
    "url": "20200529/index.html",
    "revision": "a6dcc7e99c42f2de39bbe7ab2f7d13f4"
  },
  {
    "url": "20200601/index.html",
    "revision": "dceb4cf4d93a90fe764eea04a127b82e"
  },
  {
    "url": "20200602/index.html",
    "revision": "ddfa9cdea8306724aead8d3608f5ca4f"
  },
  {
    "url": "20200604/index.html",
    "revision": "d49756977726d96313daa0eec8ff1561"
  },
  {
    "url": "20200612/index.html",
    "revision": "51c426728e9b0f601d00bdee595eac33"
  },
  {
    "url": "20200720/index.html",
    "revision": "e089143c649adcd02ec7b206f250aea3"
  },
  {
    "url": "20200804/index.html",
    "revision": "80961a1eaee6922e7cb6e56094f64144"
  },
  {
    "url": "404.html",
    "revision": "b4b4121d20532a7b2fee82a8dd7521e2"
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
    "url": "assets/js/20.5ef17169.js",
    "revision": "1080397842f1c974f96f8f8d78ca08ae"
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
    "url": "assets/js/app.decd08f6.js",
    "revision": "57816b8413441cf0c35f61fcb7e802e5"
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
    "revision": "c65ad86a1965f4631f86ddc8a104f195"
  },
  {
    "url": "categories/css/index.html",
    "revision": "292caf2069e8346bec1db5f82b8a432a"
  },
  {
    "url": "categories/index.html",
    "revision": "e0015d343a63122378d7fc7709519ea8"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "9de13a7ae467e6ede635b29821d3c262"
  },
  {
    "url": "categories/react/index.html",
    "revision": "74dfb3c0890768f2aca5a61f102aead2"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "9392c84ed8ec998a15fec4ea9d9922b4"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "2ba460c00dc1e291bcab5d063285b840"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "ba0fd91afb1bde017183ac5bc3ca8a3e"
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
    "revision": "d25b50fb4f37d0d965febfd793bb4193"
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
    "revision": "69d3d9fd36d06dbbcd7f4ec6865285ab"
  },
  {
    "url": "tag/index.html",
    "revision": "e4ff31d9ae68d57ab756fdc09475181d"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "37a5ff2ec87fdb27dec0bbac1e9c35ff"
  },
  {
    "url": "tag/react/index.html",
    "revision": "2e7966ff39c3e7cd9d2ca878405bfbc1"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "ba950d23d82d61ec6ac721476ddf9b97"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "d955a03c4199fcf7772fa0e6445da56d"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "801029aae71e29f173822b06cabb8aa4"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "93193a9c31f28df85f11f81452725d93"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "fbd1fd939b473323b389bc5a48752d03"
  },
  {
    "url": "timeline/index.html",
    "revision": "5e24f690674f8ab7d04c48ade4a69907"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "5aae4b5ca21e3f13a880c9907a1b0f68"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "06748e0b75c001e3c909b7e1876e2c0f"
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
