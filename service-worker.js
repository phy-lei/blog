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
    "revision": "fa1c2574e7adf9d6b8744072bfe6a346"
  },
  {
    "url": "20200526/index.html",
    "revision": "388e7432704a75e232c38ae12e5f883a"
  },
  {
    "url": "20200528/index.html",
    "revision": "ef0a0322adef942353682a16c8b849d5"
  },
  {
    "url": "20200529/index.html",
    "revision": "cd5608ec6e8c84d7820b3ab8660c75cc"
  },
  {
    "url": "20200601/index.html",
    "revision": "094e510cd52465986f1c8c6ce549061a"
  },
  {
    "url": "20200602/index.html",
    "revision": "9246dcb34d1779c35833b5e8f70ab765"
  },
  {
    "url": "20200604/index.html",
    "revision": "5983d239ce2e22ca75c236b82d80fb43"
  },
  {
    "url": "20200612/index.html",
    "revision": "46ab39402c72703fdad837c8fdb4086d"
  },
  {
    "url": "20200720/index.html",
    "revision": "b8ddb03e52697e3208dd09666c23d7b3"
  },
  {
    "url": "20200804/index.html",
    "revision": "65af4eed06be5ddcd7ac8c001f4c21de"
  },
  {
    "url": "20200812/index.html",
    "revision": "0d166e78c5d74a2e2e0de2ab18695170"
  },
  {
    "url": "20201013/index.html",
    "revision": "0ad64dea6a2701528eedb989d7ba3d88"
  },
  {
    "url": "20210112/index.html",
    "revision": "5dbeaf900ad0ee7d9d27a31ca80aaa9c"
  },
  {
    "url": "20210123/index.html",
    "revision": "0c52f71af66b5c2763a471f13e01e66f"
  },
  {
    "url": "20210129/index.html",
    "revision": "3439c5032590abe88b1828e5a64dea71"
  },
  {
    "url": "20210327/index.html",
    "revision": "496e67347b7678563ccfe7b2778f38db"
  },
  {
    "url": "20210502/index.html",
    "revision": "03114ab06f8326a7933d9ec2f3045669"
  },
  {
    "url": "20210507_01/index.html",
    "revision": "1adffba8c91121f4effcf6f38b264518"
  },
  {
    "url": "20210507_02/index.html",
    "revision": "9a503e76ccb9e9adaad28909abc1d707"
  },
  {
    "url": "20210508/index.html",
    "revision": "388dbd3bb6f78533ba1fe7666b766808"
  },
  {
    "url": "20210510/index.html",
    "revision": "64d7013983192232da55d6925b2a2c62"
  },
  {
    "url": "20210703/index.html",
    "revision": "c3fba47aa3c7ae41237874f974e5b810"
  },
  {
    "url": "20210809/index.html",
    "revision": "b17dd70c082e8d1bd74ac0f1aad737a8"
  },
  {
    "url": "20210901/index.html",
    "revision": "e36bb414dcbd68cbae532f63fe25a30b"
  },
  {
    "url": "20211124/index.html",
    "revision": "19fbe1db2857f7d6261d6c9fdb84fbeb"
  },
  {
    "url": "20211210/index.html",
    "revision": "e5471514f0adc71b8bc2eda3fbea1250"
  },
  {
    "url": "20220212/index.html",
    "revision": "f4fd40d7819a619c72aec153c4ae5932"
  },
  {
    "url": "20220513/index.html",
    "revision": "e6abccfecdda2f8da48844bc781bace4"
  },
  {
    "url": "404.html",
    "revision": "4b0f6d798cf0b652544af388e70e39e9"
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
    "url": "assets/js/11.838498a3.js",
    "revision": "47def22d65f4621417f47cbf9cb62daa"
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
    "url": "assets/js/18.a040dadb.js",
    "revision": "fca51386cbe6be6a8a14bd473c9c575c"
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
    "url": "assets/js/25.17d0829f.js",
    "revision": "805a9990d29ba785350e765dd040759e"
  },
  {
    "url": "assets/js/26.00f79d04.js",
    "revision": "d727620e7b29fdf3658e4cc0e34f57c4"
  },
  {
    "url": "assets/js/27.3c2cd72b.js",
    "revision": "23414f9c1b2553127bb7e3f6f6423169"
  },
  {
    "url": "assets/js/28.d12ee78d.js",
    "revision": "0c7110f91a00e0d50a575d32cc1fe209"
  },
  {
    "url": "assets/js/29.1ccaeead.js",
    "revision": "adc3d0473cca9ccf18f00ff5713cc8b6"
  },
  {
    "url": "assets/js/3.1d0553cb.js",
    "revision": "c6d4a584de35a41b06fef400f1d3c4d3"
  },
  {
    "url": "assets/js/30.945909c3.js",
    "revision": "51417d8a0f3295dd472ff482e455615e"
  },
  {
    "url": "assets/js/31.9d5759ae.js",
    "revision": "813951e74a163e10420f72195e26895a"
  },
  {
    "url": "assets/js/32.c33fca81.js",
    "revision": "9943060f614e371d294009fcc4b642f5"
  },
  {
    "url": "assets/js/33.9a54cf5f.js",
    "revision": "a9a3ea862c01539f804442e1f4cad4f0"
  },
  {
    "url": "assets/js/34.44971813.js",
    "revision": "a9e551a0351c5e481d30f124dfb45152"
  },
  {
    "url": "assets/js/35.c438492d.js",
    "revision": "3d4ff3314258d5ba16ff71edafd83dad"
  },
  {
    "url": "assets/js/36.470085c2.js",
    "revision": "6c824cf3978498c67e8f60b62708e34d"
  },
  {
    "url": "assets/js/37.c444fb4e.js",
    "revision": "fce71c8053ba9b8683f64ef0966b049e"
  },
  {
    "url": "assets/js/38.37d2ebc8.js",
    "revision": "74892e0ece4956c73725c5b6908d7250"
  },
  {
    "url": "assets/js/39.57432211.js",
    "revision": "f4439d0d5b7560ab7c49f6ab57ab4cc9"
  },
  {
    "url": "assets/js/4.d0f4a55d.js",
    "revision": "08de63f91865dc542434ded9704e1ed9"
  },
  {
    "url": "assets/js/40.96e5af2f.js",
    "revision": "354be06d3ed76eeee23a72167e01f83c"
  },
  {
    "url": "assets/js/41.dd20e5b4.js",
    "revision": "3fb74e13d7ddb6f8c9e0dcade6bd9a5b"
  },
  {
    "url": "assets/js/42.59cc3afd.js",
    "revision": "8c632c76749d8b3b13a56d91b3b41707"
  },
  {
    "url": "assets/js/43.73a68a92.js",
    "revision": "aa37ed1692d1ef118776f412436f8890"
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
    "url": "assets/js/app.1d39e8da.js",
    "revision": "174731ea546b5fbe703ce2e8db501c70"
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
    "revision": "a89df2a4db77e03e9125b8c529e928e4"
  },
  {
    "url": "categories/css/index.html",
    "revision": "5465b7e015d4cdc5684ca9400ca626c1"
  },
  {
    "url": "categories/git/index.html",
    "revision": "c894fcdc4f821177f9bb3375c81e27c0"
  },
  {
    "url": "categories/index.html",
    "revision": "a6e4f89213b0404743e8a98624a321ad"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "2176ee918a5a62430da55452ccbee559"
  },
  {
    "url": "categories/react/index.html",
    "revision": "effc25922856ce20b78dfae164ee1257"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "5dce28ecd7afc0f47b398af2bf8958d5"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "1f22b8a41fefa0997bc59317b91ef873"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "c28bb73b8916f93df265d5c64cb6118b"
  },
  {
    "url": "categories/成长之路/index.html",
    "revision": "36833385165f824c9377a475530a7817"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "d04d6a673d322518d8926c0b0ddc9f19"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "8725994e26524e2cf569f81b24dbcef2"
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
    "revision": "82cc7392a4717daade3d9d556f845a45"
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
    "revision": "1fbf7ed079ccd8912a337e6050f8974a"
  },
  {
    "url": "tag/git/index.html",
    "revision": "f2117c5fb67254d869142c305d765974"
  },
  {
    "url": "tag/index.html",
    "revision": "7ecd2b433b6569961d805ee843173a2c"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "1ed6be3746bda348661cf48923069fc8"
  },
  {
    "url": "tag/react/index.html",
    "revision": "aa02d3c695b97aec049d0ee1a07c202e"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "b74794baf1fb2b5639ca5c3b41d54a89"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "7f85fb3a0832988c9e8d4dfd5be2e850"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "7c14b5533c6bf3fc73448745324d8a37"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "52ceddb286d4a8691ab05d88de9f5002"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "60d5b19d35727615250640fc6d99d938"
  },
  {
    "url": "tag/成长之路/index.html",
    "revision": "16eefc691ca786d2a2fd4083f6708f69"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "d932a1b7d25ac7c32bfba9e9396a9f79"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "3957fcd90de19dd7bfe6ace0d5dc97c9"
  },
  {
    "url": "timeline/index.html",
    "revision": "9a99b1dc8a2544cd87871cc6d47a9cc7"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "25566fe23b57b4595c4b3ecc7aadea60"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "b155a9b4963543d71e36b97664e25da6"
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
