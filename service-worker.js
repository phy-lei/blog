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
    "revision": "661bca25646691335efa0ef6e3b6e841"
  },
  {
    "url": "20200526/index.html",
    "revision": "33e0874821cf6617bbe48b4f0632b15d"
  },
  {
    "url": "20200528/index.html",
    "revision": "320ca960454b548461a3453593d3d4df"
  },
  {
    "url": "20200529/index.html",
    "revision": "0f97cb704af980dff563bb2938253ebb"
  },
  {
    "url": "20200601/index.html",
    "revision": "1a94d3fd9cd88df9bdd50c4bf80d61f5"
  },
  {
    "url": "20200602/index.html",
    "revision": "0eb11f8d6635f2c918ab1fbf96fa5670"
  },
  {
    "url": "20200604/index.html",
    "revision": "1b07efa263ad92a5477ffbe10843bedd"
  },
  {
    "url": "20200612/index.html",
    "revision": "a687ef34c1464aaae052ed8c72a3fed4"
  },
  {
    "url": "20200720/index.html",
    "revision": "bc9c69f6e18c92950fb3dc0a569aee2a"
  },
  {
    "url": "20200804/index.html",
    "revision": "ad0287b4a99cadd0f2562a94cb0a31f0"
  },
  {
    "url": "20200812/index.html",
    "revision": "548b2609bc21be98c068260119bfda46"
  },
  {
    "url": "404.html",
    "revision": "4ce46b5f1f9e473c7da97b6ca8d9e2cc"
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
    "url": "assets/js/17.86b30de2.js",
    "revision": "2b4c15ef46e08e48031da0049017886d"
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
    "url": "assets/js/app.8ce6fb31.js",
    "revision": "1b6b30d662026edbb7807115c8f043f9"
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
    "revision": "dd48476642c84aaa6fe5f62b882f176c"
  },
  {
    "url": "categories/css/index.html",
    "revision": "c078bf33bb9241cd67f981524a5077d0"
  },
  {
    "url": "categories/index.html",
    "revision": "d7540a6b1539cb386d5745e9d4a671f8"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "c28fa9d143de422a20f7d06f625db21f"
  },
  {
    "url": "categories/react/index.html",
    "revision": "31f1a0f2b045a4aac303eecc76108c05"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "8e5302967e7dfd9147887274b5062bb0"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "3c4beae7d86aa58572e43ddb1e1e055d"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "864b0aeda125568c278b2378850a770e"
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
    "revision": "d7bc974e6765b050a261903e6e38ca58"
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
    "revision": "d312ed92420d4fb48a95621635547411"
  },
  {
    "url": "tag/index.html",
    "revision": "d57a4ef0f042043d4a92c8a0c409b2af"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "ac6d3186068293a74cd79c033611b72a"
  },
  {
    "url": "tag/react/index.html",
    "revision": "76c71082698e7f184e11980a679f10dc"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "22bf8cb2e10a35e35d1dcdaea843d0a5"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "eccae793fea2415aa63eff28ded8dce0"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "b277a0cf42b6c68dc98fd8fc2aa46615"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "2d8311e1a7c5961eaf20543bfd53b26f"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "142ac5d7fcc20cba359f5af586eceeac"
  },
  {
    "url": "timeline/index.html",
    "revision": "9486e2dde7bafdb7a7765e55e5f133de"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "75f6ff0bb4c8f5678199cd593c56d867"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "91d8b25bb72419166952d8370e253fca"
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
