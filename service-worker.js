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
    "revision": "6a8304e980cea2485553e6f48c68e993"
  },
  {
    "url": "20200526/index.html",
    "revision": "337b8fa482fb3cfa2f172292efcbefbf"
  },
  {
    "url": "20200528/index.html",
    "revision": "d930b2c58852c1f89608aa8d0e7bfa92"
  },
  {
    "url": "20200529/index.html",
    "revision": "4c77e97d271fda05bc31314ac807579b"
  },
  {
    "url": "20200601/index.html",
    "revision": "93c46293d65a8c6d63e5d874d9bae24e"
  },
  {
    "url": "20200602/index.html",
    "revision": "479c38d15450620979b891296eaed89e"
  },
  {
    "url": "20200604/index.html",
    "revision": "5d82d92bf1cfe1aa9ff5c5f349576583"
  },
  {
    "url": "20200612/index.html",
    "revision": "c8d419b3432a9fdd4911cefb0333f829"
  },
  {
    "url": "20200720/index.html",
    "revision": "c8b2e7613845c3f0c424b56641d602d6"
  },
  {
    "url": "20200804/index.html",
    "revision": "33c9879f080c611824e21735b2cbd04a"
  },
  {
    "url": "20200812/index.html",
    "revision": "3f40c2ed3b8388d347280df51aadebd7"
  },
  {
    "url": "20201013/index.html",
    "revision": "0646566a759df10921b0e10cf25ec21e"
  },
  {
    "url": "20210112/index.html",
    "revision": "b7fa6540a9521f80f6dfa177a4b68d7e"
  },
  {
    "url": "20210123/index.html",
    "revision": "0e44659759c9aee6a321371b923283c0"
  },
  {
    "url": "20210129/index.html",
    "revision": "9820b9b945f479a1941e6cdc754af5ec"
  },
  {
    "url": "20210327/index.html",
    "revision": "cb931bd54b06bcb7fb3e6a0f40de782c"
  },
  {
    "url": "20210502/index.html",
    "revision": "2f21512aa2cf685b89f8b57bde968c1b"
  },
  {
    "url": "20210507_01/index.html",
    "revision": "f0fb92af3c39a447e17518286b513138"
  },
  {
    "url": "20210507_02/index.html",
    "revision": "c0a8ea41ad7b718a7295d3fce4e0a586"
  },
  {
    "url": "20210508/index.html",
    "revision": "5dd636e9fb65c8e82d49770acfa7a0c8"
  },
  {
    "url": "20210510/index.html",
    "revision": "858d9119ef8d28d4a365f3578b29d596"
  },
  {
    "url": "20210703/index.html",
    "revision": "c39b7a8af619a5f00ec59f60085be857"
  },
  {
    "url": "20210809/index.html",
    "revision": "5916ab440238456ea3d1613a8c5943d1"
  },
  {
    "url": "20210901/index.html",
    "revision": "4432797ff790856651d738c19c4758c3"
  },
  {
    "url": "404.html",
    "revision": "3111d665d89ce232121bd22a1254fbd7"
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
    "url": "assets/20210507/1.png",
    "revision": "51cd9c14fdf09f6841b8c810e75dea07"
  },
  {
    "url": "assets/20210901/01.png",
    "revision": "f4b3574a73f662f41b1043223b216e53"
  },
  {
    "url": "assets/20210901/02.png",
    "revision": "1ceadf3311761be0eb613d89191afdd3"
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
    "url": "assets/interview/01.jpg",
    "revision": "4ba6a5e4af975258cc1f47d55dcd38ca"
  },
  {
    "url": "assets/js/1.51d2f36d.js",
    "revision": "ddc9f734993167dbe05adceab30f6431"
  },
  {
    "url": "assets/js/10.eec45478.js",
    "revision": "86421c8195897f4a3b36ebcf617600d8"
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
    "url": "assets/js/16.410ca962.js",
    "revision": "5fac8ac7b4398fc5940f4fb3b2ff94d9"
  },
  {
    "url": "assets/js/17.5a25fb46.js",
    "revision": "9330746586622b5a1039d949d40b2c4b"
  },
  {
    "url": "assets/js/18.cbe4c522.js",
    "revision": "e80901471a296271ffc78d9babc4d3a6"
  },
  {
    "url": "assets/js/19.883925c7.js",
    "revision": "4e0b923d093a87155e77a8317ed3af70"
  },
  {
    "url": "assets/js/20.d31c021b.js",
    "revision": "c7d7815e25b2b2a63c3c2ec0da2c81c8"
  },
  {
    "url": "assets/js/21.cadd2e1e.js",
    "revision": "026b3887e022f659f3f1bc7f56ee051b"
  },
  {
    "url": "assets/js/22.46071fb9.js",
    "revision": "42c93c55a6072d7e9e5f9771ebce4754"
  },
  {
    "url": "assets/js/23.e04e81f8.js",
    "revision": "114c34e44d24f9b5a510e60b9c99ee63"
  },
  {
    "url": "assets/js/24.6d639456.js",
    "revision": "f90a328081d492b65ea66cf3ad2cea1a"
  },
  {
    "url": "assets/js/25.c8ebb8fc.js",
    "revision": "a482172252b98959559f157770bba734"
  },
  {
    "url": "assets/js/26.52c0f139.js",
    "revision": "67e315770fe35f8b23d8a3e499a5635f"
  },
  {
    "url": "assets/js/27.9eb9b2f9.js",
    "revision": "c343c48c5dc038b5228434d41fccaa1f"
  },
  {
    "url": "assets/js/28.15487421.js",
    "revision": "ffce4ab5b3eb93e7d112fdb52b60d155"
  },
  {
    "url": "assets/js/29.2c642a8e.js",
    "revision": "470bd61fa74650b9bb09793c25c5a9e6"
  },
  {
    "url": "assets/js/3.85657320.js",
    "revision": "ded4e694ba473251ad0f154cb76e213e"
  },
  {
    "url": "assets/js/30.db9068e4.js",
    "revision": "fac38fe4d880131f5b4bb1eefacb491d"
  },
  {
    "url": "assets/js/31.4ed4fec9.js",
    "revision": "36eb2a7a5cef965835979b69812694d2"
  },
  {
    "url": "assets/js/32.41e6bab9.js",
    "revision": "d4d05f90f8fe8d58589168cf99ec1f8d"
  },
  {
    "url": "assets/js/33.6dab963f.js",
    "revision": "3819c381378259e1979c1c367f559644"
  },
  {
    "url": "assets/js/34.e2dc201e.js",
    "revision": "5de21c24611e5393d1a71f68491cddaf"
  },
  {
    "url": "assets/js/35.f744df89.js",
    "revision": "556bedacd9a6d08872c0e20c2d9b5365"
  },
  {
    "url": "assets/js/36.f5e1ad4d.js",
    "revision": "2f63a82fc5e6f315b2a72405bd818655"
  },
  {
    "url": "assets/js/37.8ac5bff0.js",
    "revision": "409e0b18a832d65dacf2a44d4030b72c"
  },
  {
    "url": "assets/js/38.7e864c99.js",
    "revision": "e10ca517a72a01e6c36a7812b521592b"
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
    "url": "assets/js/9.15c99a4c.js",
    "revision": "cede3f5545191377cb7a311a60354524"
  },
  {
    "url": "assets/js/app.cb659556.js",
    "revision": "227b84ba40b4e096097fbb4fdc220c51"
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
    "revision": "d9b3f776ed8df64b75161ab970d3d797"
  },
  {
    "url": "categories/css/index.html",
    "revision": "db41aee2b2d36df91dd95ff92feda5c0"
  },
  {
    "url": "categories/git/index.html",
    "revision": "c045e08c2b328df979807ce9135c2bbe"
  },
  {
    "url": "categories/index.html",
    "revision": "3e8daf7fd43dc4a25f2366e87ff0f426"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "155b857e184ef8e722878e78e4bab045"
  },
  {
    "url": "categories/react/index.html",
    "revision": "f902a2c4df8079ddd6615bab51773b4b"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "9ee3637498ccd9399d1cc570cc216fa3"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "bf2a191454a545e8c37ffd854c3cc417"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "852c8b038f5b6418b8ffeeb2f96f8be1"
  },
  {
    "url": "categories/成长之路/index.html",
    "revision": "b3b6ba4cd7b317d8065bc071b3707dd0"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "9a5d30b81cbf7d882704a7bf0bff7f99"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "2f74a3a2253a741398c72f752d16b5b9"
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
    "revision": "f1cc747ca38f6585bb3cdb1b8eb16b5f"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "mine_1.jpg",
    "revision": "5ef1240314ed8707848ed856f43d7b13"
  },
  {
    "url": "mine.jpg",
    "revision": "9529d372528c3a82c56f93f099e53105"
  },
  {
    "url": "tag/css/index.html",
    "revision": "3116363e621eee47a33b8423b7de7a50"
  },
  {
    "url": "tag/git/index.html",
    "revision": "379b9af41d8ace223072f34a9a8a5a6e"
  },
  {
    "url": "tag/index.html",
    "revision": "61a579b6370a23053bd816400346b04a"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "462e0dc6989dca6351ffd169d96587e4"
  },
  {
    "url": "tag/react/index.html",
    "revision": "5ffefb5c40919c3098d83837ac5462a4"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "cd59936371d92cc94e5793b59d11a78f"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "7d144f5447c63935b52b4ef83a1876f0"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "776da157e618398d628a7a84e6ca935c"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "3a28c64f617fe33d4e1d686367e0d39c"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "d94bb08ea44440c855b646adc63c1a1d"
  },
  {
    "url": "tag/成长之路/index.html",
    "revision": "ad757b15aa8428a4025abd95a47f3fc0"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "33c56446816c35910c222be1f8d4d071"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "f3fbfedb15c8b92c87bd905aa93ecb7b"
  },
  {
    "url": "timeline/index.html",
    "revision": "f210e1fc60ee283658c2b70d52a5f6a8"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "79a68540e457169fa9f01f184a1b5e11"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "95e3899b7b438d797829d7323975c1b7"
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
