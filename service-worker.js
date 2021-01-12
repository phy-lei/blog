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
    "revision": "bdaef3a3be31c87c6b6a79373f5add7f"
  },
  {
    "url": "20200526/index.html",
    "revision": "b8699800185f07ea570c6d55de65dd89"
  },
  {
    "url": "20200528/index.html",
    "revision": "d8d634f91ee2830855584aab0e55b8e1"
  },
  {
    "url": "20200529/index.html",
    "revision": "071f39cfae3f71b3661d9c0eb634990f"
  },
  {
    "url": "20200601/index.html",
    "revision": "0e1d0de8356037c1b676591bc2d5bf81"
  },
  {
    "url": "20200602/index.html",
    "revision": "ec85b3d22651fe38ade8a30f44878aea"
  },
  {
    "url": "20200604/index.html",
    "revision": "7eb41c85fc481c9413c05df5691380d4"
  },
  {
    "url": "20200612/index.html",
    "revision": "ac33973f69367f8568274d18f4d700da"
  },
  {
    "url": "20200720/index.html",
    "revision": "59ea11c21e5c5bed3c2e3cc3d74a4dc0"
  },
  {
    "url": "20200804/index.html",
    "revision": "b2bf29dec19c11dad247deda2737a083"
  },
  {
    "url": "20200812/index.html",
    "revision": "d18cd98d616e368a427852ca581d21a8"
  },
  {
    "url": "20201013/index.html",
    "revision": "a80756979babdb184d1a6cc17e54da7e"
  },
  {
    "url": "20210112/index.html",
    "revision": "a69a730724778322604c456123289d6f"
  },
  {
    "url": "404.html",
    "revision": "4a453868958b0d65759352982dbc9e00"
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
    "url": "assets/js/10.f0c5e175.js",
    "revision": "79116810d10d8503ab8f7b91fb7e403a"
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
    "url": "assets/js/17.de6a5b76.js",
    "revision": "b424ee0f83ea3d94e4af554032bf9d9c"
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
    "url": "assets/js/20.beb3a5bd.js",
    "revision": "798ce498bb0e2f1e4caf1db0f2790396"
  },
  {
    "url": "assets/js/21.ad7dc282.js",
    "revision": "dcde36c9f587f32e64b21c01e3d455ae"
  },
  {
    "url": "assets/js/22.6564701a.js",
    "revision": "c9e6ff09b66d37a99876ce9fe6a6d4b2"
  },
  {
    "url": "assets/js/23.118c6889.js",
    "revision": "d31bbe09105a01d9b148f4fc6c8daf82"
  },
  {
    "url": "assets/js/24.f6c14a86.js",
    "revision": "9b3ffb802c4cb7b51ceadcc5e207d215"
  },
  {
    "url": "assets/js/25.3350cd37.js",
    "revision": "5829d02a4ccef221fa404c8099270705"
  },
  {
    "url": "assets/js/26.177163ff.js",
    "revision": "5743acdd75c34cc4b2f79a92941ad2f9"
  },
  {
    "url": "assets/js/27.9754af4b.js",
    "revision": "3dbc60c5f6b29555930fc6c85bc5d7a1"
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
    "url": "assets/js/app.b9fd51cf.js",
    "revision": "313c91f9acaa02c240f0c398daf2763f"
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
    "revision": "b2cbf18676af6457ca1b9a9078f46bb9"
  },
  {
    "url": "categories/css/index.html",
    "revision": "aaefaf7fea80b85dba22dc11bfa96ea0"
  },
  {
    "url": "categories/index.html",
    "revision": "a651f051bc918193bd57ab485181b8e0"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "efeed903e9ff7ef05dcd84022fe7a527"
  },
  {
    "url": "categories/react/index.html",
    "revision": "81322aecafd53904238481e840a10f7b"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "0b1f5f30071c91adc2a285451c4cc15d"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "ee876a154a257aea94c4e990e450dbe3"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "885d63b577da5c7b554957998ae3cefb"
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
    "revision": "34f6f23739c77b2abbc0f13a7c54a41d"
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
    "revision": "436be1021c93703f4fc9c88143923e0d"
  },
  {
    "url": "tag/index.html",
    "revision": "033a9264a3dbb90340d846cd64427924"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "cf8f71a1953de9015f27f82b8e30ba43"
  },
  {
    "url": "tag/react/index.html",
    "revision": "1bfd49c1fe67636f11111a640738ed66"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "bda19f82e14a5946019b922dbe09c7f7"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "2e1dc4072a4bad309bf76283b34478c9"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "94fb689cc3ebe6500e4c1546ddecaaad"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "1b0730991d0e3d46454a0f60ec2fb79c"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "3c7db2e74248a7219e4595dad88f7669"
  },
  {
    "url": "timeline/index.html",
    "revision": "af54362df31662ec23e19606f701c18e"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "32c7a817eb1ffd26f3e540876471eff5"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "7f612d8e2db6572a1afccb988bf02346"
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
