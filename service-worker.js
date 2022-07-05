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
    "revision": "2977f4474aae0592bc7cbfeea77bafdc"
  },
  {
    "url": "20200526/index.html",
    "revision": "c193b25ebb55311a0b3bd10fcae05841"
  },
  {
    "url": "20200528/index.html",
    "revision": "f39afa4926cacb4f8d1b2e424e207f9d"
  },
  {
    "url": "20200529/index.html",
    "revision": "36996e4b0c1915346ae873be95d2bbf4"
  },
  {
    "url": "20200601/index.html",
    "revision": "a76eab31c4d4f9d894dddf3bfe7f32a0"
  },
  {
    "url": "20200602/index.html",
    "revision": "361a9da64d0ae742526d5b9a4f4160e8"
  },
  {
    "url": "20200604/index.html",
    "revision": "2c75307e4be1db5eec096c49849496d8"
  },
  {
    "url": "20200612/index.html",
    "revision": "e25ce8ece0c7cb16c816498242f1ae50"
  },
  {
    "url": "20200720/index.html",
    "revision": "f7f5ceb2a792a79f1e433a463cf453b8"
  },
  {
    "url": "20200804/index.html",
    "revision": "541dd6afca72aad72e90813fa9df7fe8"
  },
  {
    "url": "20200812/index.html",
    "revision": "b225b12b19a3cdb15b66c275a2594171"
  },
  {
    "url": "20201013/index.html",
    "revision": "a3f6211bf6d455db490aaf3217e02961"
  },
  {
    "url": "20210112/index.html",
    "revision": "c3471746a7edc31cd010c81fcdc3f990"
  },
  {
    "url": "20210123/index.html",
    "revision": "03e7cf7d16a481fa1e8c6963016456c1"
  },
  {
    "url": "20210129/index.html",
    "revision": "d63b28b533c75b3b98dd6ad730978302"
  },
  {
    "url": "20210327/index.html",
    "revision": "f69f63c4cb7e57e869a1aaf54b53116b"
  },
  {
    "url": "20210502/index.html",
    "revision": "56c0df9d749fe405e2e33798772bf968"
  },
  {
    "url": "20210507_01/index.html",
    "revision": "1c62025fb7516297ce14215a3bb31055"
  },
  {
    "url": "20210507_02/index.html",
    "revision": "4a5dec3b8ae87a6c549cfa28e9ddcff2"
  },
  {
    "url": "20210508/index.html",
    "revision": "61e322fb1b5d3c52bf88b6177e0979ed"
  },
  {
    "url": "20210510/index.html",
    "revision": "96b612c262668942ac92138d130b1026"
  },
  {
    "url": "20210703/index.html",
    "revision": "f2fc877e42186f7e4f8c8a826a43fd5e"
  },
  {
    "url": "20210809/index.html",
    "revision": "613eb7979e08e4e1575612aa92e9590b"
  },
  {
    "url": "20210901/index.html",
    "revision": "831cdb16271cd2c2a2ad9cb536196599"
  },
  {
    "url": "20211124/index.html",
    "revision": "c9ca94d9bb752001daf795c38d3547c5"
  },
  {
    "url": "20211210/index.html",
    "revision": "e19472b66c2e3c3a25f77cf0432b1f24"
  },
  {
    "url": "20220212/index.html",
    "revision": "f784d8c70eb9353bf51e7fdb3dfebc7f"
  },
  {
    "url": "20220513/index.html",
    "revision": "eaae21cdfaab669a7b90abddf658c4af"
  },
  {
    "url": "20220530/index.html",
    "revision": "a6198dc8afd0dbc94e24f131cb2d5303"
  },
  {
    "url": "20220704/index.html",
    "revision": "5c91a1ac293dc31a932a53d2032bcde7"
  },
  {
    "url": "404.html",
    "revision": "6e04452f0c5a18fd01bb5916fd9c4ed9"
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
    "url": "assets/js/11.07594fc3.js",
    "revision": "fba4932a4f68b8b6a99608dba7867ad2"
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
    "url": "assets/js/39.a535bac7.js",
    "revision": "000dfb21ce95a4ad7ea1d7ddac3bc9a0"
  },
  {
    "url": "assets/js/4.d0f4a55d.js",
    "revision": "08de63f91865dc542434ded9704e1ed9"
  },
  {
    "url": "assets/js/40.cd98e32c.js",
    "revision": "9cda0a7002edac88a2ddf37dfc44f112"
  },
  {
    "url": "assets/js/41.f0cdadcc.js",
    "revision": "4b947153e993c5208a3120afe9d0b7c5"
  },
  {
    "url": "assets/js/42.bf0cab6d.js",
    "revision": "e80c6d76341107b8d7061b00e8a806f8"
  },
  {
    "url": "assets/js/43.dfc70b4f.js",
    "revision": "ff859c11039546af8ed4c44672ce87a6"
  },
  {
    "url": "assets/js/44.5f5fb248.js",
    "revision": "a9d3f2a964c8a68a7f91de833b2e56fc"
  },
  {
    "url": "assets/js/45.d46f4abc.js",
    "revision": "6bd29d3ba3ed18c5cebbebde12dfe477"
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
    "url": "assets/js/app.9a0c675c.js",
    "revision": "e409953238ae2b374082509b807939c7"
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
    "revision": "c988fe632e967cccfee106950a2c4194"
  },
  {
    "url": "categories/css/index.html",
    "revision": "7c801be77460830e8c57c059483155c6"
  },
  {
    "url": "categories/git/index.html",
    "revision": "0d74cf156d6889bbffcaf209e2a59984"
  },
  {
    "url": "categories/index.html",
    "revision": "97eb298e5e3f5c4778d9de6d4ddd82cd"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "673221666a84d9c894c44d96430e296c"
  },
  {
    "url": "categories/react/index.html",
    "revision": "289bfabee07a56dc759cdb94bc241c36"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "ca0c4376c38145037366dc068aba91ac"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "185d9dc38ab3ccb940fe0841980f91bc"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "f8c16c522675c35f0accdad7ab633fb0"
  },
  {
    "url": "categories/成长之路/index.html",
    "revision": "3a0d8c4db1fa130acb93db06f7821dca"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "f9a0579ce41ae795da8c10c135e10816"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "3b9ee499f01f3c7eb5426a9c0b78e60c"
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
    "revision": "def4b06a8a65cb38e5a4290c51eecefc"
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
    "revision": "9c799b5077e27f3313fb00ba8ba0d7bf"
  },
  {
    "url": "tag/git/index.html",
    "revision": "611b19b198a845e96153601a4f902a10"
  },
  {
    "url": "tag/index.html",
    "revision": "ae91aa2ad754f7cefc4372985e6c42e3"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "4c9ca83df00f922cd36c375f4c21a5ad"
  },
  {
    "url": "tag/react/index.html",
    "revision": "eb10303cc00e1b86b36d826e039ec7d4"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "767811b20f1397199f6418a543c093e6"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "44a278a83af596e87c3c395b4d47de0b"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "f719ecafbfec4ec3758ebaf0506cf055"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "a5ebb208245bcf7f46954bcaaaa9409a"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "1cc0940b249b0bc5ad108684cf450f7f"
  },
  {
    "url": "tag/成长之路/index.html",
    "revision": "8adcc545da6d3479db37d11f84a08207"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "75a252547c739c01760cc0cbe92b358d"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "94577a5034afe62866b3d7235014089e"
  },
  {
    "url": "timeline/index.html",
    "revision": "db5545e05b5cbc01a0e342989e49caaa"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "9544cfcdc5c3a9406517b7232aadbdae"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "68d52802f8ae2aa01e6a5ec73fca2caf"
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
