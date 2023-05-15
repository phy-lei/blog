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
    "revision": "fa87beeae819120b0950688220ba9498"
  },
  {
    "url": "20200526/index.html",
    "revision": "7a2c59bf7207c6824369aa07f2af9fdb"
  },
  {
    "url": "20200528/index.html",
    "revision": "084548f29c7b9bfd81a9b5da852bf214"
  },
  {
    "url": "20200529/index.html",
    "revision": "5ec23d6dce8018231146b3de6ecbb153"
  },
  {
    "url": "20200601/index.html",
    "revision": "ff20472b9bfa72251a46ac62fa4dad93"
  },
  {
    "url": "20200602/index.html",
    "revision": "a1f9c8b5699c6e8392aa8ffaf0574c0b"
  },
  {
    "url": "20200604/index.html",
    "revision": "d4376705039f0dfcd9bb1b18ce39ab6f"
  },
  {
    "url": "20200612/index.html",
    "revision": "27901bf952aaa58cbaf5357e94fa3777"
  },
  {
    "url": "20200720/index.html",
    "revision": "0884969e1a8b7ff3d2b617eac61dd0e8"
  },
  {
    "url": "20200804/index.html",
    "revision": "f0913b7f4408c50704556928ea22a916"
  },
  {
    "url": "20200812/index.html",
    "revision": "ebc055874f0ad1f0f4bec9f0cdb6a287"
  },
  {
    "url": "20201013/index.html",
    "revision": "21d3462d78948ad12ed2911d440fa750"
  },
  {
    "url": "20210112/index.html",
    "revision": "dfa06fc2d91909ed642e198ef95509e3"
  },
  {
    "url": "20210123/index.html",
    "revision": "d59241d2142c83d2b68647a406fb11cd"
  },
  {
    "url": "20210129/index.html",
    "revision": "025f0c34d814e1ad0e30b4d20bdfb5db"
  },
  {
    "url": "20210327/index.html",
    "revision": "155436c891371f034bc7c44380930f20"
  },
  {
    "url": "20210502/index.html",
    "revision": "cb6b3bc50eb463291089e83e9e5be85d"
  },
  {
    "url": "20210507_01/index.html",
    "revision": "f019000cb3d947e1b879e572722b4071"
  },
  {
    "url": "20210507_02/index.html",
    "revision": "c3547647764dd589c554d89f60945d74"
  },
  {
    "url": "20210508/index.html",
    "revision": "6587d324ad9cab7d86394230e2dd9863"
  },
  {
    "url": "20210510/index.html",
    "revision": "2cc1f17fe123a2f0016863528a641b3b"
  },
  {
    "url": "20210703/index.html",
    "revision": "3199df7f66041ed30fce33c0f3d8e28b"
  },
  {
    "url": "20210809/index.html",
    "revision": "ea07a8ec4baeee86ef3eaf054fe5081e"
  },
  {
    "url": "20210901/index.html",
    "revision": "92c6d6208f4dabf4978a9f79a65c223e"
  },
  {
    "url": "20211124/index.html",
    "revision": "e4379d87e2e72bccd47aa253684b1395"
  },
  {
    "url": "20211210/index.html",
    "revision": "8b8a65c48a6c3ed3cfb8f6d26410f4e1"
  },
  {
    "url": "20220212/index.html",
    "revision": "ee0def9128668c74be40ac6d913443e5"
  },
  {
    "url": "20220513/index.html",
    "revision": "4b18aae1c143b6dd8e3cb0f7a5b35de4"
  },
  {
    "url": "20220530/index.html",
    "revision": "ff797e4db7df3a695cd2cb50f3bedbf3"
  },
  {
    "url": "20220704/index.html",
    "revision": "756fa24f120a7d48ac21ac7d723432e8"
  },
  {
    "url": "20220804/index.html",
    "revision": "416449c0eaded575fdefde5034d50513"
  },
  {
    "url": "20221125/index.html",
    "revision": "8b3243342121670a88ee333ce32001a7"
  },
  {
    "url": "20230513/index.html",
    "revision": "1d92a8d24275fc9192f7ea3c931b0418"
  },
  {
    "url": "404.html",
    "revision": "0fdbf2f5884f4c153d4e756cf65f6287"
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
    "url": "assets/js/11.87a9ad58.js",
    "revision": "b10189bedea60631006580bbc3610af5"
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
    "url": "assets/js/18.5a64d7a5.js",
    "revision": "f08eb358b3bc0a37b2a2caceb3bf8321"
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
    "url": "assets/js/25.bb36bd54.js",
    "revision": "36e9aff70bd914f75775f64bd89aff4e"
  },
  {
    "url": "assets/js/26.1d165ca2.js",
    "revision": "94f80b5a8219d25e7e3cb8fa46b29e9a"
  },
  {
    "url": "assets/js/27.3bab0f35.js",
    "revision": "f85fc8dee9a31a4537bcfbe33416c799"
  },
  {
    "url": "assets/js/28.3ff2367e.js",
    "revision": "0e0d0f028724b18263a6177861d0d046"
  },
  {
    "url": "assets/js/29.1a73f6e8.js",
    "revision": "d6d57019dcd342bddaaadf7c8568a40c"
  },
  {
    "url": "assets/js/3.db1300e1.js",
    "revision": "c6d4a584de35a41b06fef400f1d3c4d3"
  },
  {
    "url": "assets/js/30.48097f68.js",
    "revision": "474809ef97beea3864722e36f5b4c5e9"
  },
  {
    "url": "assets/js/31.f05cca76.js",
    "revision": "a24ae254b98aa0c8de56be97476f921d"
  },
  {
    "url": "assets/js/32.6fc028cd.js",
    "revision": "08b37fe7f84edc8fe106954fb7bb25f6"
  },
  {
    "url": "assets/js/33.676fc902.js",
    "revision": "1778dcd430678567feef176585d1e09f"
  },
  {
    "url": "assets/js/34.c82a3354.js",
    "revision": "89098145cf0316276c3a653fcc6c7b62"
  },
  {
    "url": "assets/js/35.53268a8b.js",
    "revision": "599d9fe6bb9ea6812140c7f9b1d6eebc"
  },
  {
    "url": "assets/js/36.f6729d3e.js",
    "revision": "e86cb8e1f13e3a204b64e27ffeccfa23"
  },
  {
    "url": "assets/js/37.e535bc5c.js",
    "revision": "46e340e839368f5aedb377391d9c4bd5"
  },
  {
    "url": "assets/js/38.832e01b7.js",
    "revision": "2bf3306da335524562824156974e2561"
  },
  {
    "url": "assets/js/39.b1fa6de7.js",
    "revision": "50bde362c3217caccd5a084ca7bc4a40"
  },
  {
    "url": "assets/js/4.339729e1.js",
    "revision": "08de63f91865dc542434ded9704e1ed9"
  },
  {
    "url": "assets/js/40.31a1d568.js",
    "revision": "2adc89ce58b9953889def4a71b6376ca"
  },
  {
    "url": "assets/js/41.97af4c16.js",
    "revision": "4f93f7e38fa4f9634ee07e27070bce03"
  },
  {
    "url": "assets/js/42.429d5c87.js",
    "revision": "08d874382db6bb548d345f2c5b8a6d81"
  },
  {
    "url": "assets/js/43.4e0a3c5f.js",
    "revision": "1392446f4fab9773671b9a9fe52efc11"
  },
  {
    "url": "assets/js/44.6451e1bb.js",
    "revision": "852ead30b28a7daf5a0eb4217ca5a9aa"
  },
  {
    "url": "assets/js/45.00602f08.js",
    "revision": "d740aebade414d45f8dfd5b368b1acdc"
  },
  {
    "url": "assets/js/46.bbde9b51.js",
    "revision": "a473731c82055091f3723ee87f43eae5"
  },
  {
    "url": "assets/js/47.8789d43e.js",
    "revision": "774695b4fc475b8d04728bbd46e05442"
  },
  {
    "url": "assets/js/48.b701826e.js",
    "revision": "81a4c96f36937054b10d8e21a3235a0e"
  },
  {
    "url": "assets/js/5.2202e623.js",
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
    "url": "assets/js/app.2820f157.js",
    "revision": "7c4529543316b6aca606fcab4d74c5b1"
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
    "revision": "d99c02508277ede3604ed19d09835c47"
  },
  {
    "url": "categories/css/index.html",
    "revision": "c9a87c67e30049cf8ddb73b32bb6cd52"
  },
  {
    "url": "categories/git/index.html",
    "revision": "137dfae2e09badb0faa0b01827fadc50"
  },
  {
    "url": "categories/index.html",
    "revision": "48ee36c2ff79198c78190bab12652833"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "f9a26caff674d678589e9b021b649b17"
  },
  {
    "url": "categories/react/index.html",
    "revision": "cac5de39453fba707662bb9a2d87f366"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "cde06d17852bea068bdc3b415141fbfb"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "82e0d7b62e9752fef39bd70ee89e6cbd"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "649649b112bcd036ff82273237b19c77"
  },
  {
    "url": "categories/成长之路/index.html",
    "revision": "bdd0252a1e9db1587922509031c3b3fb"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "c7122151d761a23bb1e6d30bfa1af99e"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "183ef0d9da4c2d0822dd6c7ba96fce9c"
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
    "revision": "8040692de2b7dafaba92430663d7050a"
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
    "revision": "f762e250ae147cccee40678ef0877962"
  },
  {
    "url": "tag/git/index.html",
    "revision": "9f857f083efce6934153c56f53340a50"
  },
  {
    "url": "tag/index.html",
    "revision": "fd1c05f4e40dacd40f8395395ccc552b"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "f673593744993a7f54649919abb2e971"
  },
  {
    "url": "tag/react/index.html",
    "revision": "23c77606f044c9b862fdde20568a9186"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "06940294bd7285af925bf6314f5948df"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "58ca9c75c791f18334a6f994627481b9"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "b87ad44321aeb623ab3a5806ebed0428"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "627e631898031d880aa0192baf379269"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "e3f4b79c152109e72845f15982dab163"
  },
  {
    "url": "tag/成长之路/index.html",
    "revision": "1f446fcf127ac483ba454b9283968185"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "f994e985c64e5bf2c59c3444dfb66b2b"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "15f17638e4c70846289a84ddfdc0b516"
  },
  {
    "url": "timeline/index.html",
    "revision": "f33cbfe889d0bdf9beb19bf081630b3a"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "b5cc4ee722a49db35ff039c938fdc7bd"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "e76de95206082396a044ae8cb8eab0a4"
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
