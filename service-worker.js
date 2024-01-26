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
    "revision": "d53e6715ab4587277e545ac48445d118"
  },
  {
    "url": "20200526/index.html",
    "revision": "3c93205a2d755214802ad7fd5fef2e17"
  },
  {
    "url": "20200528/index.html",
    "revision": "33b21db0b7e9477619c5a1b82603a152"
  },
  {
    "url": "20200529/index.html",
    "revision": "79d76aa3e04c0bcb4f576ddc30ef43f4"
  },
  {
    "url": "20200601/index.html",
    "revision": "18e227570569c08c7024d22a0fb5956d"
  },
  {
    "url": "20200602/index.html",
    "revision": "5e99d15b201b5c822b52140ee2982689"
  },
  {
    "url": "20200604/index.html",
    "revision": "21dc3726c6cd30013d016e6df4aec8f8"
  },
  {
    "url": "20200612/index.html",
    "revision": "893c10da9aaf74e336afdcced49b4603"
  },
  {
    "url": "20200720/index.html",
    "revision": "9186d590b7f84c413d6cb3fd48b6cf6c"
  },
  {
    "url": "20200804/index.html",
    "revision": "5810e945b893aaba061e3390d291e7b2"
  },
  {
    "url": "20200812/index.html",
    "revision": "dde4d328d837380475345cd5c3554688"
  },
  {
    "url": "20201013/index.html",
    "revision": "7e468524c1419800ce0ec4bd60e83bd6"
  },
  {
    "url": "20210112/index.html",
    "revision": "4382ab37daddaacb8ccca922e3783740"
  },
  {
    "url": "20210123/index.html",
    "revision": "c88cd1a5251b353cf0a5dc6d8be2a7d3"
  },
  {
    "url": "20210129/index.html",
    "revision": "397ecf9279f46828a5be7292901ff5c4"
  },
  {
    "url": "20210327/index.html",
    "revision": "e25ac6468d22e30f8b2124a291c0ae44"
  },
  {
    "url": "20210502/index.html",
    "revision": "802c358c8ab504129931d9ce8405c926"
  },
  {
    "url": "20210507_01/index.html",
    "revision": "649b2d74dfa8d5c50a3f6fd0887c9020"
  },
  {
    "url": "20210507_02/index.html",
    "revision": "adea6590b96dd316b747965a8334500c"
  },
  {
    "url": "20210508/index.html",
    "revision": "cf867237a1224b7f2ceb70a6018012a9"
  },
  {
    "url": "20210510/index.html",
    "revision": "e57cebdf8ca1c2761967568ee07fa4fd"
  },
  {
    "url": "20210703/index.html",
    "revision": "192e33e8b966c0fd4341916cf799db81"
  },
  {
    "url": "20210809/index.html",
    "revision": "295c97413a7e7c9fdfe3dcd771abfafd"
  },
  {
    "url": "20210901/index.html",
    "revision": "64e4e42e8ca72b63b012e002553c9be2"
  },
  {
    "url": "20211124/index.html",
    "revision": "3c240055d482ff996a9b6e4a9e7477db"
  },
  {
    "url": "20211210/index.html",
    "revision": "a17681110ad10ba141302c022c5895e1"
  },
  {
    "url": "20220212/index.html",
    "revision": "e0e542a44b3dbf9db21ad5dbb1725a4d"
  },
  {
    "url": "20220513/index.html",
    "revision": "49559d40d7b9ea4a052ddb3cdd4605f3"
  },
  {
    "url": "20220530/index.html",
    "revision": "5b8dedc90f1d2418f955da7bf43895a3"
  },
  {
    "url": "20220704/index.html",
    "revision": "7d4b8562d4b0989f09c32bf31468ea6c"
  },
  {
    "url": "20220804/index.html",
    "revision": "f0d663680e536f60cfa1cc9f37bf443f"
  },
  {
    "url": "20221125/index.html",
    "revision": "d17e9d5ac8f803cd217a21f5126d22f4"
  },
  {
    "url": "20230513/index.html",
    "revision": "f989a7d4b6477683125d4a0fe8dd2993"
  },
  {
    "url": "20230928/index.html",
    "revision": "2c110d1ef4fc7ce30464ad63a4ecadc1"
  },
  {
    "url": "20231206/index.html",
    "revision": "6b29ce4b4f202daada7d9bf6a4b9e8b1"
  },
  {
    "url": "20240126/index.html",
    "revision": "436a68f2a57315e4e4039dead6e8db23"
  },
  {
    "url": "404.html",
    "revision": "8b1f9a17576c4c0393dae2a4a93c2403"
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
    "url": "assets/20220513/01.png",
    "revision": "55633fac698a450a8d6a062e14f4f22f"
  },
  {
    "url": "assets/20220513/02.png",
    "revision": "7883f20df6ac2d52a866c9274224d46a"
  },
  {
    "url": "assets/20220705/flow-core.png",
    "revision": "1ef5a364f4f492159daf614f4b225ce8"
  },
  {
    "url": "assets/20230928/01.png",
    "revision": "70f8f486259370ccaf8ae7834fc9c424"
  },
  {
    "url": "assets/20230928/02.png",
    "revision": "2efb9da34fff40425e9927b248601574"
  },
  {
    "url": "assets/20230928/04.gif",
    "revision": "43032411c03db2aa967764d9cab4c808"
  },
  {
    "url": "assets/20231206/1.gif",
    "revision": "7e2bcff213f6b4501d9ab0dd5e3e49f8"
  },
  {
    "url": "assets/20240126/1.png",
    "revision": "f28854fed02da061f5bed534eca49fae"
  },
  {
    "url": "assets/20240126/2.png",
    "revision": "6758602a41f13570eba2a7736f71f466"
  },
  {
    "url": "assets/20240126/3.png",
    "revision": "3218ee9986b347fb4ed9a6af0e64d533"
  },
  {
    "url": "assets/20240126/4.gif",
    "revision": "1a0097ac81494c7e88e9d03842ba1be1"
  },
  {
    "url": "assets/css/0.styles.9a13c917.css",
    "revision": "5d1a34a04c5adc5a831aac23ee96acfa"
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
    "url": "assets/js/1.83ab4468.js",
    "revision": "ddeea9f24369cc1579939a909ea8a135"
  },
  {
    "url": "assets/js/10.c35fdf02.js",
    "revision": "3c5e7a60909a03378b0885dd61157619"
  },
  {
    "url": "assets/js/11.691da697.js",
    "revision": "dd908b1a616828a2c1c9bba854708e88"
  },
  {
    "url": "assets/js/12.03fbf9d6.js",
    "revision": "03bfedbb428506f56be93550c62de1d5"
  },
  {
    "url": "assets/js/13.fb421e4a.js",
    "revision": "b1567cb4212564c2ee00e294cf7227b5"
  },
  {
    "url": "assets/js/14.3b5a59ef.js",
    "revision": "4fdf06f1818ec8954f692bccc699f154"
  },
  {
    "url": "assets/js/15.5dea467a.js",
    "revision": "c8ce052211b2ecb288a89e139d2f18f0"
  },
  {
    "url": "assets/js/16.4030bf8b.js",
    "revision": "059d08a26f01e2a2d1afbf811e5ee9a0"
  },
  {
    "url": "assets/js/17.c78593f8.js",
    "revision": "8a7dc23db753693c091d0ecbfda916b5"
  },
  {
    "url": "assets/js/18.5a64d7a5.js",
    "revision": "f08eb358b3bc0a37b2a2caceb3bf8321"
  },
  {
    "url": "assets/js/19.7dd95545.js",
    "revision": "564120e440052f945bab2d7ab860c38e"
  },
  {
    "url": "assets/js/20.302198e6.js",
    "revision": "9ca93bf75d7236a8dbeb3e7db55acbcc"
  },
  {
    "url": "assets/js/21.c2b528ce.js",
    "revision": "61bf8ae16785cf2ff41ba47f4cd46de1"
  },
  {
    "url": "assets/js/22.aa3443c1.js",
    "revision": "66eb9bfb3aa51166e41a6aecc8694fa9"
  },
  {
    "url": "assets/js/23.bab65398.js",
    "revision": "684eaa524a7998112f31930867b1e6f1"
  },
  {
    "url": "assets/js/24.9a584cdf.js",
    "revision": "f61c64af399fdea8e41d14b5146a520b"
  },
  {
    "url": "assets/js/25.88cfe008.js",
    "revision": "a801268d3bb0ae84279c1200de16355d"
  },
  {
    "url": "assets/js/26.e9e81028.js",
    "revision": "6978fc5d92164cb2444b4fa0af1e060a"
  },
  {
    "url": "assets/js/27.a458f12d.js",
    "revision": "f59caddb28024ac38228d5482a34d5bb"
  },
  {
    "url": "assets/js/28.7541e861.js",
    "revision": "7e7d2bba5ed3ea53bd6788eb28c17db5"
  },
  {
    "url": "assets/js/29.2ebef512.js",
    "revision": "e0038b71af7f9f6409166eb091838a7c"
  },
  {
    "url": "assets/js/3.db1300e1.js",
    "revision": "c6d4a584de35a41b06fef400f1d3c4d3"
  },
  {
    "url": "assets/js/30.0b695f17.js",
    "revision": "168e5d798855aaaf1f0bb87a9f263fe6"
  },
  {
    "url": "assets/js/31.a9a4ade7.js",
    "revision": "05962be0158c9bf4af135679569f0d36"
  },
  {
    "url": "assets/js/32.a85919c2.js",
    "revision": "8ed8493257ff1c8e560c8b53e2fcbae2"
  },
  {
    "url": "assets/js/33.2e3c2c89.js",
    "revision": "c5b965b8eeee9508e48c15b7fb730dfc"
  },
  {
    "url": "assets/js/34.68e7f2f9.js",
    "revision": "afd4e670d3cfe23b10e43354328d3593"
  },
  {
    "url": "assets/js/35.b5cb965e.js",
    "revision": "51319107e948cd5aa4e48ad9a119c74b"
  },
  {
    "url": "assets/js/36.1e6790b9.js",
    "revision": "b431276a4739a240d64c81881620c2f7"
  },
  {
    "url": "assets/js/37.45b08437.js",
    "revision": "3723974b67d0b2a5850ef4bca5c4eba8"
  },
  {
    "url": "assets/js/38.8a38703d.js",
    "revision": "0cc01284b761c530338857c7869c5d1b"
  },
  {
    "url": "assets/js/39.07a56eb1.js",
    "revision": "1b1999cb21f47ee49b66c72deef79afb"
  },
  {
    "url": "assets/js/4.339729e1.js",
    "revision": "08de63f91865dc542434ded9704e1ed9"
  },
  {
    "url": "assets/js/40.d3c4844b.js",
    "revision": "7730490e2e0715801e2f9e1fc9efaa52"
  },
  {
    "url": "assets/js/41.468e51a1.js",
    "revision": "4210d11447a84f29fe2e9b812947f6b6"
  },
  {
    "url": "assets/js/42.b422c09e.js",
    "revision": "91822e8f483ecfc356507db8835f5f5f"
  },
  {
    "url": "assets/js/43.ba815a5e.js",
    "revision": "210bde02e48b3c1300b65258d0f50750"
  },
  {
    "url": "assets/js/44.27460a47.js",
    "revision": "9db46f2498bdfffa8b9ecfb7f81ee47b"
  },
  {
    "url": "assets/js/45.a23e04aa.js",
    "revision": "468f48ca8fd9c74be67d333e341a3579"
  },
  {
    "url": "assets/js/46.c2d608b7.js",
    "revision": "983ca872da17c71f138447e607c86542"
  },
  {
    "url": "assets/js/47.67955330.js",
    "revision": "095211d0e4864d04b1f981a952aa02d2"
  },
  {
    "url": "assets/js/48.4fb6c878.js",
    "revision": "94fa95652e26a5b53a76fe5a499e0f1a"
  },
  {
    "url": "assets/js/49.c4183f9f.js",
    "revision": "4d0cf857a1a6a770bc56a3b1a42a74a4"
  },
  {
    "url": "assets/js/5.2202e623.js",
    "revision": "12aba6e2a20561cb65660f97da9d051c"
  },
  {
    "url": "assets/js/50.c9f2bd12.js",
    "revision": "490ef98d6f778d2a82d4e79d18c76071"
  },
  {
    "url": "assets/js/51.c3042359.js",
    "revision": "e765d251b4753a5234f60950780c6842"
  },
  {
    "url": "assets/js/6.a1fd875e.js",
    "revision": "6c2a75a577746c6044c4318e66756b1b"
  },
  {
    "url": "assets/js/7.fb3f8319.js",
    "revision": "f51efe38411ecc26ee1cc8311321f51f"
  },
  {
    "url": "assets/js/8.14261d42.js",
    "revision": "8f4fd915be26d4e2f96318640275dcfe"
  },
  {
    "url": "assets/js/9.16585bcc.js",
    "revision": "f40f1f53eee1b95ca328f2c603486a09"
  },
  {
    "url": "assets/js/app.d940d007.js",
    "revision": "0543dd903b1c4b3f338c876ba1984a5c"
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
    "revision": "1269b2d6947ead62d94576b6bec54c37"
  },
  {
    "url": "categories/css/index.html",
    "revision": "72968e5314dda3150c23fc1c75e80fc3"
  },
  {
    "url": "categories/git/index.html",
    "revision": "a8def10acaae847eb0baaa068ccf49de"
  },
  {
    "url": "categories/index.html",
    "revision": "d2121249328f6c88edee1127723a6b27"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "0667aa59995633bfacab4ac41b67bab5"
  },
  {
    "url": "categories/react/index.html",
    "revision": "5b5817edb94b3f1a4fc956f474ab6dfb"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "acc6460827ec06427298013fbfdd7a82"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "98ac7d26f9374cd18808ab9d8bc16ae6"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "be8197458aa662d9bc905b2960ea6cad"
  },
  {
    "url": "categories/成长之路/index.html",
    "revision": "6b946a5cd68ad7fdaf3f60ee74c32568"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "14461ea954e3ae3956de550cce67e04f"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "a00b4c4caaefb44a217e6743202e6ee5"
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
    "revision": "d81c81201d4fadb857e35e95e7bd044e"
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
    "revision": "56e51afc6e8ca12ab6c0c3a06ff8c1f9"
  },
  {
    "url": "tag/git/index.html",
    "revision": "b2d09add39671925a1512b4e2029d56c"
  },
  {
    "url": "tag/index.html",
    "revision": "6a5f3e49eab8938a88b19182405b9ffd"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "441d9835a2907bab9b0a583eefd06924"
  },
  {
    "url": "tag/react/index.html",
    "revision": "3e61219dbb62f436d91bb4430f13fb22"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "20ffabed837201cfbb3cb4a4d0107c45"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "4560f1cade71af5fe9f611164128ca01"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "966dc16bec384d5d199c435f0f68759e"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "92181d1e164e7bb494a0188438aad7b9"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "e42ea2c89012c2888c3c7aa4bbaa28d4"
  },
  {
    "url": "tag/成长之路/index.html",
    "revision": "aa8c6b6bdb6b3fe480dce430461ac54f"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "6d9afccff1b20c0094737157efc18341"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "06894ef00f4f5b238d7e0e2dc4fa89fe"
  },
  {
    "url": "timeline/index.html",
    "revision": "53b13a699c518a8ee47f863e5fa5e3a8"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "f526fe906e1e2e12b07f6b6805f1ce80"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "4033e6e20520c34727ea0c040ed3b4bb"
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
