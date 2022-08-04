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
    "revision": "0ef0c3775e116173094b875a74671058"
  },
  {
    "url": "20200526/index.html",
    "revision": "3782c6792d3e2d90bba649bad26a7659"
  },
  {
    "url": "20200528/index.html",
    "revision": "1a1597be16d5224b9b32c6b4c078167c"
  },
  {
    "url": "20200529/index.html",
    "revision": "75689b71633da28bc7ec974f6b81a04d"
  },
  {
    "url": "20200601/index.html",
    "revision": "3b540601338c0cce308292faa6da1626"
  },
  {
    "url": "20200602/index.html",
    "revision": "01165f6bb60e77c59241dddbd56b6f4b"
  },
  {
    "url": "20200604/index.html",
    "revision": "dd0c8f472d58f2b0945278b22f18f5ac"
  },
  {
    "url": "20200612/index.html",
    "revision": "95717dbfc897a19c03cf3aaed910dac3"
  },
  {
    "url": "20200720/index.html",
    "revision": "c1c9cf959bad2a10e68b63c4197bc809"
  },
  {
    "url": "20200804/index.html",
    "revision": "9229fb6fbd8067de3fb7fb54460cf4a8"
  },
  {
    "url": "20200812/index.html",
    "revision": "b5a60774b01c16419a3b0da54d24f930"
  },
  {
    "url": "20201013/index.html",
    "revision": "340523500060d9d573a6c1cb531367d8"
  },
  {
    "url": "20210112/index.html",
    "revision": "6380d3b53e944056acc975ed6778bad6"
  },
  {
    "url": "20210123/index.html",
    "revision": "9d3be042f0037b5413f2f20d76e02c20"
  },
  {
    "url": "20210129/index.html",
    "revision": "7476d92cb36ead05b5e7d1de41656c4c"
  },
  {
    "url": "20210327/index.html",
    "revision": "c7d6763e2133415db1a14435a60fe5ed"
  },
  {
    "url": "20210502/index.html",
    "revision": "9e58252eb8acedcc025d51c0c7625aa3"
  },
  {
    "url": "20210507_01/index.html",
    "revision": "27d6b6bfa568c48caca85495f78fcfbb"
  },
  {
    "url": "20210507_02/index.html",
    "revision": "ec7e1219444ef49c30da7a3957ce4257"
  },
  {
    "url": "20210508/index.html",
    "revision": "7a8b3b40c8a746efd893e4c33691b590"
  },
  {
    "url": "20210510/index.html",
    "revision": "fb8fb3cbddde43dd3de7cbc2fa39ca44"
  },
  {
    "url": "20210703/index.html",
    "revision": "564ecd5827bf55e592df93074a0ad343"
  },
  {
    "url": "20210809/index.html",
    "revision": "38e8f4c08d8a06cb6217fa82cd9af688"
  },
  {
    "url": "20210901/index.html",
    "revision": "52cee47540fbf163d1cc734ae7b5b798"
  },
  {
    "url": "20211124/index.html",
    "revision": "25f367e7fbc47a6380cddfc4a5c9fd78"
  },
  {
    "url": "20211210/index.html",
    "revision": "d4a023f7db35cf96eb455b3f3dbc31ad"
  },
  {
    "url": "20220212/index.html",
    "revision": "dcae947ba42cea4f28bfa8d552c3bc05"
  },
  {
    "url": "20220513/index.html",
    "revision": "cb4564f6e0b72f7050b509e9f448c319"
  },
  {
    "url": "20220530/index.html",
    "revision": "e1a8d01a6e0aac7d0426e02fc19e434d"
  },
  {
    "url": "20220704/index.html",
    "revision": "a95d856b0c9cca6778a9dd5f29610f20"
  },
  {
    "url": "20220804/index.html",
    "revision": "162ac50f92897ae2dd14c829d9b2f2c1"
  },
  {
    "url": "404.html",
    "revision": "490cb325c000ce46ca50abafa5493c6a"
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
    "url": "assets/js/39.75fc149a.js",
    "revision": "1edce8fb17f321842031ceda76a867cf"
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
    "url": "assets/js/app.84b8a0a5.js",
    "revision": "39de12f7a36a026fbf199a7f8a38cb42"
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
    "revision": "3c93b32434676d6c28b484d60f09a824"
  },
  {
    "url": "categories/css/index.html",
    "revision": "e7a739a9404585578632b1203f683855"
  },
  {
    "url": "categories/git/index.html",
    "revision": "ed0af0c7d7afdc5a6d2ff45c46afc40e"
  },
  {
    "url": "categories/index.html",
    "revision": "030b00a7e958ffbe1244441146647cb8"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "69a7814c3307275415ef9690414581c2"
  },
  {
    "url": "categories/react/index.html",
    "revision": "51429a2bd294f4d0b34ae1ed357865a7"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "64ef6d5365492cda997055c794a9eb6a"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "59baf3f7da7cca13b611cb2afa35c8fa"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "02044a89a0a5e0a66555a7b82b7d5eac"
  },
  {
    "url": "categories/成长之路/index.html",
    "revision": "1cf96323b83a8143c7938f93c5ddc2ac"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "771bb913e360bc7e666457d6182766fd"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "a1f54a2f0711abc7b47ab6b0f4d2e5b0"
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
    "revision": "43242657eaac2ee3c103794028ee8f65"
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
    "revision": "55493f6b58535c1617ff16a27aea3e9d"
  },
  {
    "url": "tag/git/index.html",
    "revision": "40eb528f17ab1822e0de101196242ff6"
  },
  {
    "url": "tag/index.html",
    "revision": "191425e3ea7323163f97df0246edaf84"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "5cff6503110844f5f60775d4a6c32602"
  },
  {
    "url": "tag/react/index.html",
    "revision": "736ae519457ecdb9d256ffafa4ebc4c2"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "cbebd26867c1ca53f2442804f5c0e7e1"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "b2a2d2dc1135e7e573d0dfc8638f203a"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "75ec6065e72021a8b7a04163a9c39890"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "e8038fe96bd77396baf5417ddbcfed34"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "95977c9ad83ab30e724e29002adaf138"
  },
  {
    "url": "tag/成长之路/index.html",
    "revision": "acc3bc48c8d1b96488d43677c89ae0c8"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "ed4649fd98e20e2b1ae9231833d7aca2"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "c7d08b8a5f4b9dff8d5bba798966f3af"
  },
  {
    "url": "timeline/index.html",
    "revision": "0b7b4f4630d9f1b20cbb789eb59368a0"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "cf2c924c97d6994e36eb0ffe5b803360"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "c0f1bce0148467d354e2dbc316fbc2c9"
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
