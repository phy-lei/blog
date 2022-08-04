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
    "revision": "542494cbd3bd34dd44aacde2d363efae"
  },
  {
    "url": "20200526/index.html",
    "revision": "d972de23e16e3f2558581e6c11c8d670"
  },
  {
    "url": "20200528/index.html",
    "revision": "aa7df91f0765cb3ee61b984f963ec342"
  },
  {
    "url": "20200529/index.html",
    "revision": "b35532d43caea5d0e114a1aee47daeb5"
  },
  {
    "url": "20200601/index.html",
    "revision": "1d535c393a437755ab092b6b65d1462c"
  },
  {
    "url": "20200602/index.html",
    "revision": "c968e0b32d989fc10932e4d2be2918ef"
  },
  {
    "url": "20200604/index.html",
    "revision": "b347b97291eb435f34892e2a1a4c9b47"
  },
  {
    "url": "20200612/index.html",
    "revision": "033ff37bec7388d7521af170a7e368aa"
  },
  {
    "url": "20200720/index.html",
    "revision": "153fcf8842225cc440b891f514bd4cce"
  },
  {
    "url": "20200804/index.html",
    "revision": "3c1afe2bad29e6200195a289db6f6d29"
  },
  {
    "url": "20200812/index.html",
    "revision": "a4489926756175ceb6f81ddc0ba6532b"
  },
  {
    "url": "20201013/index.html",
    "revision": "dec3ad265101cec906e8f573e71d6719"
  },
  {
    "url": "20210112/index.html",
    "revision": "e8b055f2229b223b234d4f9531d7323f"
  },
  {
    "url": "20210123/index.html",
    "revision": "214fa589f1296afa4f2cfc9ffa65397e"
  },
  {
    "url": "20210129/index.html",
    "revision": "ddcda5c16db09c1cb31735e32fbb218f"
  },
  {
    "url": "20210327/index.html",
    "revision": "ca5e909deb759d2a14e714893a13c766"
  },
  {
    "url": "20210502/index.html",
    "revision": "e16867f951e9160e38fa7607e1249948"
  },
  {
    "url": "20210507_01/index.html",
    "revision": "4d9dc1fe72cabcf07984cb66fa4b79e8"
  },
  {
    "url": "20210507_02/index.html",
    "revision": "9b8c12a726ff35397c1f02cc9bcbb6f9"
  },
  {
    "url": "20210508/index.html",
    "revision": "4aa228468f06d70fbe2d37498d3e1f94"
  },
  {
    "url": "20210510/index.html",
    "revision": "b97caa943873838b98afbf0f6998e22a"
  },
  {
    "url": "20210703/index.html",
    "revision": "0bbf9a7adfa03293466c337f475a096d"
  },
  {
    "url": "20210809/index.html",
    "revision": "f0b5c1d43287c68682c829e943cc2b16"
  },
  {
    "url": "20210901/index.html",
    "revision": "17ae1142e8e3bb7e0a31bc4e49c36f6f"
  },
  {
    "url": "20211124/index.html",
    "revision": "fac7fa99bf2687626295247bad882a48"
  },
  {
    "url": "20211210/index.html",
    "revision": "e84112f730e0fbd39964d370a7b155bd"
  },
  {
    "url": "20220212/index.html",
    "revision": "d7a4d0b25f9d3ff0fba4128077b88111"
  },
  {
    "url": "20220513/index.html",
    "revision": "095a979c0efc18d4b7734cd585666578"
  },
  {
    "url": "20220530/index.html",
    "revision": "9ca9242316a272db5d12d37ad74148f6"
  },
  {
    "url": "20220704/index.html",
    "revision": "e0a0d00b2dd1adb2fa83e895003c1737"
  },
  {
    "url": "20220804/index.html",
    "revision": "1f4bc14967ab4b8916071da44d1b264c"
  },
  {
    "url": "404.html",
    "revision": "7517876c57aae09b4cc0bb9ca5b50582"
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
    "revision": "fc43a4fa8c944ca07a2a0afdb0439b42"
  },
  {
    "url": "assets/20220705/flow-core.png",
    "revision": "1ef5a364f4f492159daf614f4b225ce8"
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
    "url": "assets/js/1.e0ccd5ab.js",
    "revision": "ddeea9f24369cc1579939a909ea8a135"
  },
  {
    "url": "assets/js/10.c35fdf02.js",
    "revision": "3c5e7a60909a03378b0885dd61157619"
  },
  {
    "url": "assets/js/11.51bbaab3.js",
    "revision": "d71b5aa8a05dcd50947c16b0f2f49792"
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
    "url": "assets/js/16.d1a10e76.js",
    "revision": "1a7e6ba52a8fcec34e5e5ef19c720b24"
  },
  {
    "url": "assets/js/17.c3dc14f5.js",
    "revision": "3f04e41188a6cd9b30212874677e4bd7"
  },
  {
    "url": "assets/js/18.33323711.js",
    "revision": "f1846f50af7c490ba277d2448d503fca"
  },
  {
    "url": "assets/js/19.7dd95545.js",
    "revision": "564120e440052f945bab2d7ab860c38e"
  },
  {
    "url": "assets/js/20.6fe4c2a2.js",
    "revision": "5a17d16bb231e8a40dc10c0be9ccc5fd"
  },
  {
    "url": "assets/js/21.2de00e28.js",
    "revision": "9b0181fa1e5a23438cf84914fd9469ab"
  },
  {
    "url": "assets/js/22.cd885551.js",
    "revision": "a4355de62832863cd77649b790393b93"
  },
  {
    "url": "assets/js/23.e2b5fa89.js",
    "revision": "055094e952cf52e283fd0a3624800a96"
  },
  {
    "url": "assets/js/24.d464d9f0.js",
    "revision": "d680f6371892d673b20eb0c2434c5cb7"
  },
  {
    "url": "assets/js/25.4b9ed10b.js",
    "revision": "60b9d36127eb2c1530c6ada71f8aeeb5"
  },
  {
    "url": "assets/js/26.f7510e82.js",
    "revision": "fe960e57f66ee066c8fca81ed31a76e7"
  },
  {
    "url": "assets/js/27.60f1ef4d.js",
    "revision": "acc440110f6b684ceaf1d6ce69407014"
  },
  {
    "url": "assets/js/28.b528e715.js",
    "revision": "7c38205fcbe0089e775c0b992d677107"
  },
  {
    "url": "assets/js/29.1466b6b8.js",
    "revision": "3bf679d3941a10adab0bf3a2ce809768"
  },
  {
    "url": "assets/js/3.1d0553cb.js",
    "revision": "c6d4a584de35a41b06fef400f1d3c4d3"
  },
  {
    "url": "assets/js/30.32d9e625.js",
    "revision": "afe9e79570bea49c7b68fa70a0b45b4d"
  },
  {
    "url": "assets/js/31.305332a3.js",
    "revision": "c86c6deafb025489c686341e824c92fe"
  },
  {
    "url": "assets/js/32.2f139327.js",
    "revision": "c27e90f7a8f1f3ca30720448b7145f1c"
  },
  {
    "url": "assets/js/33.6cefc102.js",
    "revision": "c1279ddc38c4b69a8afab9ba10b59ebc"
  },
  {
    "url": "assets/js/34.99081001.js",
    "revision": "ebe5d9877e2773c3c981031e29d8305e"
  },
  {
    "url": "assets/js/35.a3c4e9d3.js",
    "revision": "62c85ba1d0e80fd376151a8e81de994d"
  },
  {
    "url": "assets/js/36.862892b1.js",
    "revision": "dbf3070a46ae038f572e1b90f080e1f8"
  },
  {
    "url": "assets/js/37.9e50b9b7.js",
    "revision": "ff6863ef703d7a5f81ec73c406c3b5d7"
  },
  {
    "url": "assets/js/38.1406b1a0.js",
    "revision": "8da609887e3134c9142e8b5d61248300"
  },
  {
    "url": "assets/js/39.1e5f9b7c.js",
    "revision": "8c518c919cce8b3bdd15ed5b34cf8bf8"
  },
  {
    "url": "assets/js/4.d0f4a55d.js",
    "revision": "08de63f91865dc542434ded9704e1ed9"
  },
  {
    "url": "assets/js/40.f6fbbb99.js",
    "revision": "fc2ef552c9d1d35d4a9a684edb3e152c"
  },
  {
    "url": "assets/js/41.086ad9dc.js",
    "revision": "0d946526614a589ebb563baf06d0e8a2"
  },
  {
    "url": "assets/js/42.be165fce.js",
    "revision": "c7ff2e2a3996fd8e0d6a89daeaeda401"
  },
  {
    "url": "assets/js/43.c95fb814.js",
    "revision": "d16e87564b54e3006ad8c3d53e42805b"
  },
  {
    "url": "assets/js/44.0deeeaf5.js",
    "revision": "feb0ad8b3e3a529893d3ebd4fad7e47d"
  },
  {
    "url": "assets/js/45.41099f60.js",
    "revision": "b2f3f93fbf75bb326778fc51e7b42259"
  },
  {
    "url": "assets/js/46.edd03eec.js",
    "revision": "d70c59aaa9cd1c5e6eba2e56ce6a7b0c"
  },
  {
    "url": "assets/js/5.03ebc6e9.js",
    "revision": "12aba6e2a20561cb65660f97da9d051c"
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
    "url": "assets/js/app.ea76dd48.js",
    "revision": "7e8e909115a5790afd3418beb590707e"
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
    "revision": "3ba44926222bba15c7ebfb632931dc7a"
  },
  {
    "url": "categories/css/index.html",
    "revision": "00ced22c11a98e9c5f38a2e990952049"
  },
  {
    "url": "categories/git/index.html",
    "revision": "52ad86d7eb43baf08ed54ff97f89f7b5"
  },
  {
    "url": "categories/index.html",
    "revision": "00973d005c651678291777a565585fad"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "fd6eb797ce5c648957adc6fabe20a3ba"
  },
  {
    "url": "categories/react/index.html",
    "revision": "e0038d76cf36c2270be47bf020f4117f"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "8284afee53338a04e90cb0a89b41e6eb"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "23132a8b47b53d8dbdbbd61ce4a948ac"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "44b2ce7a2902cadf3dea1408e3cccc85"
  },
  {
    "url": "categories/成长之路/index.html",
    "revision": "15d645dd25be5b63b09ccfe261fca479"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "6b916d0be0b7591c2d4e2f947b2d97cf"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "258ac3ef600e28508c3164dcbe48f892"
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
    "revision": "c349d9f7825ef8b6a7afec8e9b50f82c"
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
    "revision": "aa4781acf9a946d4f9ac3d748631a782"
  },
  {
    "url": "tag/git/index.html",
    "revision": "b54c78a58346587fbcd95c63c7d94226"
  },
  {
    "url": "tag/index.html",
    "revision": "081c0353b75f455dc95eb38be13db1ac"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "4f0c154c2310d63fec96f3859a133a78"
  },
  {
    "url": "tag/react/index.html",
    "revision": "f85ec41d95ddff3362d09bcf21b1a646"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "6ce74db55e9d61ea131b6f4223f7774d"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "da96575d3b413967dd5156b24ad418b2"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "ef56b1eaeace04e1bdb2f952ded20bfc"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "f0e4a8cb80c7245b5ce8be5957c3b117"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "7e289ceabfd5e16b3df04eb439dd6da9"
  },
  {
    "url": "tag/成长之路/index.html",
    "revision": "695280d30b13211f67f45507a8751163"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "24f5142518078ea025e1aa286f07400a"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "3577af9a14b38ab1b35b1d4a8b7429a5"
  },
  {
    "url": "timeline/index.html",
    "revision": "db36605b8afbaa7ea15e92cf3000362b"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "b54ce7395c81e72e4c8b4aaa37524a66"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "d2f574221f76efca32da63ea2157bd64"
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
