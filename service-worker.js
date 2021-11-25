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
    "revision": "e2a355b2e892eaa2770938fa953576b5"
  },
  {
    "url": "20200526/index.html",
    "revision": "468b96c9bb504770ffd7cbbf81a52fad"
  },
  {
    "url": "20200528/index.html",
    "revision": "df1d9d1d731a90b094c9cef5e7d3cf30"
  },
  {
    "url": "20200529/index.html",
    "revision": "60ae73379c73ca15f35b7273309a4fa7"
  },
  {
    "url": "20200601/index.html",
    "revision": "9f59613cd02032838f908f3def9bba49"
  },
  {
    "url": "20200602/index.html",
    "revision": "d410a3f34790ffc4908fbb0d0feb1b0c"
  },
  {
    "url": "20200604/index.html",
    "revision": "84ac6b3c85448581a183a7d7407159e8"
  },
  {
    "url": "20200612/index.html",
    "revision": "b621ae0d79b2cab297bb9ac33cb8b613"
  },
  {
    "url": "20200720/index.html",
    "revision": "4970e56aaf620aee0741b560af3f137a"
  },
  {
    "url": "20200804/index.html",
    "revision": "c8fe685764fc3591a6fc1ef5f21f4dbf"
  },
  {
    "url": "20200812/index.html",
    "revision": "8f06f20d14e94c1423070764e98a8624"
  },
  {
    "url": "20201013/index.html",
    "revision": "47fe171d450afc5223eaf953fedcf287"
  },
  {
    "url": "20210112/index.html",
    "revision": "32678beeb0488459d5e3702f3d8cf70a"
  },
  {
    "url": "20210123/index.html",
    "revision": "85e864d7c1b70988d0d680ba27021e17"
  },
  {
    "url": "20210129/index.html",
    "revision": "5f6223d8c8df598023c955680e708441"
  },
  {
    "url": "20210327/index.html",
    "revision": "9231c22814c5d2cc00e61e5f02ef11f4"
  },
  {
    "url": "20210502/index.html",
    "revision": "b517100d11357e6a96d0466fa3750fcc"
  },
  {
    "url": "20210507_01/index.html",
    "revision": "eefe6a3b7897913aed68c3aa7bba602b"
  },
  {
    "url": "20210507_02/index.html",
    "revision": "64e953d45f3ed15e7ae7b89718734c42"
  },
  {
    "url": "20210508/index.html",
    "revision": "b3e563f61e21feeae237a455d21909ed"
  },
  {
    "url": "20210510/index.html",
    "revision": "1134e289bb9edeb77840aecf66e2a3da"
  },
  {
    "url": "20210703/index.html",
    "revision": "c24afd65552a7285f5d90664536db191"
  },
  {
    "url": "20210809/index.html",
    "revision": "cde4591e1325465d76bb5eb578c01026"
  },
  {
    "url": "20210901/index.html",
    "revision": "8b43e8d212710eff969b452b2d6dc2d1"
  },
  {
    "url": "20211124/index.html",
    "revision": "4bf3efe5cdde5def5d67d9ddd3f8b28c"
  },
  {
    "url": "404.html",
    "revision": "58cb1879d4b38f52cfc13611a1d4dd6d"
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
    "url": "assets/js/10.26b3bfac.js",
    "revision": "5aa02ca2dd0fbc36d51fc6b407af765c"
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
    "url": "assets/js/30.d45e132f.js",
    "revision": "3ae4de820bfe7c1a18c426b4bfab951d"
  },
  {
    "url": "assets/js/31.7e69df5d.js",
    "revision": "6eb24ea67bb30cf6e840a31d521a5810"
  },
  {
    "url": "assets/js/32.38843890.js",
    "revision": "93adec24b3089b45d168a8736ab40833"
  },
  {
    "url": "assets/js/33.77ac4cf7.js",
    "revision": "a44805c0a0f6d557563b383af9f01465"
  },
  {
    "url": "assets/js/34.4180ed08.js",
    "revision": "fc51a2f38252c2e265f0ab951861ce66"
  },
  {
    "url": "assets/js/35.a55b3ea6.js",
    "revision": "a20d5ca0bf18066d533df643a544e337"
  },
  {
    "url": "assets/js/36.2d2901cc.js",
    "revision": "3e12879587fa0e52ae7d576ff9ba0205"
  },
  {
    "url": "assets/js/37.26a088b6.js",
    "revision": "c27cc6cb241d4b5bbfa29805706fdfae"
  },
  {
    "url": "assets/js/38.92feb45f.js",
    "revision": "9205fa8058419d8de376ce03ecb445d1"
  },
  {
    "url": "assets/js/39.29b2412b.js",
    "revision": "88c28f5c4bf1330e8de872e5294fdea9"
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
    "url": "assets/js/app.ffeca23b.js",
    "revision": "68d3ce3ca31d76f2ccad9d15ed657670"
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
    "url": "categories/article/index.html",
    "revision": "f730ba2de89f0e3db86a627cb7f01a10"
  },
  {
    "url": "categories/css/index.html",
    "revision": "c9ad72a4fa5ce6c199a654ea1bc4772d"
  },
  {
    "url": "categories/git/index.html",
    "revision": "0ef85786ba7211cf0a19db03fbea67bb"
  },
  {
    "url": "categories/index.html",
    "revision": "213e8e4343609db21e7a58cc71a37a10"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "3280451c90777e024e9aad52c51ad94f"
  },
  {
    "url": "categories/react/index.html",
    "revision": "db8ffb2e65eca220a85acfa0ac0ab532"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "e08523e6e3a5a54265bf521f2567794c"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "1f7f3e0b5e70fbc593bb788f69b97089"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "f2634fcc8bfd92efd9b10b56f804c41b"
  },
  {
    "url": "categories/成长之路/index.html",
    "revision": "6e203b1e752a2795ce6d156f866e9c4e"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "bba2d05f69be15223efc8b928f6d1b81"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "b884d7fb450542c662bc51f41e32566c"
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
    "revision": "a9e5a9a9052fc22706393bf179a7b0e9"
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
    "revision": "12f8db19b5ae924b868c48247634937e"
  },
  {
    "url": "tag/git/index.html",
    "revision": "54822747c2e47b24ba57cd3aa91cee9d"
  },
  {
    "url": "tag/index.html",
    "revision": "45ad2664c7043f026c373ef22ce7d4f2"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "810a0bc63687588f15015491fa6cbc92"
  },
  {
    "url": "tag/react/index.html",
    "revision": "df9d282ee1352585aa73e951a50f9e55"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "5b23b0ac5a71e391a40529f13da60a3e"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "c307a7a487582144c854842de5ce4dac"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "8813f269dd31823b3ef4a3fc741f160a"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "1b6f3fe48ae058d5378a7626cb91ecdb"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "abfbb911843b8d4190270f70279fe2fb"
  },
  {
    "url": "tag/成长之路/index.html",
    "revision": "ebc371b7760b7a3eeaa18056ee7fc7f2"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "1151b99e8cdedfc3a51c8c917c93666c"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "ccb88e2baa003b08625f3b7286ed0e21"
  },
  {
    "url": "timeline/index.html",
    "revision": "887fd19ac270f5d5a4d7e49e6ad96a6b"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "8eab560e058720d4ff434f026c11c469"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "3cfbc8d2c12dc0a83a32627d8e7494a6"
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
