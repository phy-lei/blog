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
    "revision": "9d3c5968527552eb6aba1e2c4b813f7c"
  },
  {
    "url": "20200526/index.html",
    "revision": "f58d355d69aaccf5725ff847eb41c910"
  },
  {
    "url": "20200528/index.html",
    "revision": "b73892fd0a0c6739537bec95ce4f9bba"
  },
  {
    "url": "20200529/index.html",
    "revision": "c8dc8b4c9827cfa28398c59407e18307"
  },
  {
    "url": "20200601/index.html",
    "revision": "e0b0ca255e221a8450de2aeae54c70d4"
  },
  {
    "url": "20200602/index.html",
    "revision": "e06dd5351b69bebf91043f994bf5fc22"
  },
  {
    "url": "20200604/index.html",
    "revision": "3b56b1a617d42202057074401a0fe083"
  },
  {
    "url": "20200612/index.html",
    "revision": "c3cc2814eaef7bbc528b9eb454dbf36c"
  },
  {
    "url": "20200720/index.html",
    "revision": "50287704cb0331e317fe1016fdabff94"
  },
  {
    "url": "20200804/index.html",
    "revision": "928fcb65e00ae6b22cb4856bdd416880"
  },
  {
    "url": "20200812/index.html",
    "revision": "a92ee22ba6933cea5c04d11f6c6c6a0b"
  },
  {
    "url": "20201013/index.html",
    "revision": "1d90a11d328bed31aa40144fbdc0c28e"
  },
  {
    "url": "20210112/index.html",
    "revision": "b468d305ffbfa3a9cc00732eb7c95b19"
  },
  {
    "url": "20210123/index.html",
    "revision": "8c42c6492c91c6cb3496c39244c80e66"
  },
  {
    "url": "20210129/index.html",
    "revision": "090c8514f9aba878353ec76defb3d4ae"
  },
  {
    "url": "20210327/index.html",
    "revision": "e5a1b10403a3d76e7673b47241ea6af7"
  },
  {
    "url": "20210502/index.html",
    "revision": "ea292d86fc3491c4dc73e90e83a8a0ec"
  },
  {
    "url": "20210507_01/index.html",
    "revision": "4f20b8545063fc82be2694e5e24341a8"
  },
  {
    "url": "20210507_02/index.html",
    "revision": "9c0e2912980da7b876d09d78f4d74bae"
  },
  {
    "url": "20210508/index.html",
    "revision": "7b38730afac6054bc82c030e97951b1d"
  },
  {
    "url": "20210510/index.html",
    "revision": "150cb8e8dc5053fde0c92350608a1298"
  },
  {
    "url": "20210703/index.html",
    "revision": "7e2d276e00343f7bf8c68dbfc8ac503a"
  },
  {
    "url": "20210809/index.html",
    "revision": "7927573e5fc3ef115a4d3a4243b7ebf4"
  },
  {
    "url": "20210901/index.html",
    "revision": "e131c5fe66c2c96e51f6c5d469734845"
  },
  {
    "url": "20211124/index.html",
    "revision": "0209427214c091cff46ad0a3e501e4f9"
  },
  {
    "url": "20211210/index.html",
    "revision": "e90bf7a7a952c234b8664daffc03f942"
  },
  {
    "url": "20220212/index.html",
    "revision": "121b3a588f36f93ff74cd06f8bc302fd"
  },
  {
    "url": "20220513/index.html",
    "revision": "ef9516e930715b8ab7b4809112428852"
  },
  {
    "url": "20220530/index.html",
    "revision": "124f1f72f91b6bd6dec813b0c0a16d7c"
  },
  {
    "url": "20220704/index.html",
    "revision": "78416b3e7e096c7c5cd508de1269bb90"
  },
  {
    "url": "20220804/index.html",
    "revision": "eecd9f59a2fbdbc9544b94e588aba5fc"
  },
  {
    "url": "20221125/index.html",
    "revision": "b9d919c6c0b94a7f81fd9841d72489fe"
  },
  {
    "url": "20230513/index.html",
    "revision": "f70db763790f8344f681bf05078095fe"
  },
  {
    "url": "404.html",
    "revision": "0bb56f60cc7e94a115ef69de8b8b401f"
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
    "url": "assets/js/47.f9d9908d.js",
    "revision": "b10608ed0d104a5097e25d15e1cbe085"
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
    "url": "assets/js/app.4b654f8e.js",
    "revision": "26ff4f5d151717990d54aef03a07a114"
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
    "revision": "1e413e35ce10acf2cab2912fd8c6b46a"
  },
  {
    "url": "categories/css/index.html",
    "revision": "8259cc7fc38680fc3aa360cf7646da76"
  },
  {
    "url": "categories/git/index.html",
    "revision": "3cab1712cbc3e061bb7919ba6594da1c"
  },
  {
    "url": "categories/index.html",
    "revision": "d86d7564a3515e3939976c85ae2eef5f"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "5bb5c8fca46e2bb97c23b0cae4b93bb2"
  },
  {
    "url": "categories/react/index.html",
    "revision": "a9658a95889039653d05051dd20dbfe0"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "d4bcbe8db7b7a9d793caa83d80e4df0b"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "ee7bc80843aa2160a09ecac325b348e5"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "154b3e98618f9ca1a3e065208bff341d"
  },
  {
    "url": "categories/成长之路/index.html",
    "revision": "5dfaeeafc9d10c9fca291c2fafa61263"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "60e292195b58b94cdf3345cb4ea5e460"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "692cba646a662620176b3133bc3fe69c"
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
    "revision": "3d4b07d0d75c389f20cf5e71e584a623"
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
    "revision": "cff2362880786c67d3c2972077d85028"
  },
  {
    "url": "tag/git/index.html",
    "revision": "dce5fb6f277a0e3d485c0b3d3ff22417"
  },
  {
    "url": "tag/index.html",
    "revision": "13b340fa106c374ad554e5fa2838f828"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "66d20d5ff8a8aab0bf7f92bfa90ef031"
  },
  {
    "url": "tag/react/index.html",
    "revision": "92632b2986788a29d506c17aa4bb92bc"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "67f5caaab175f1b7abfbd650c05cd1c4"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "3b83a8cea8de5a8f7fb482bfd6516b17"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "106173ad8d6e2607875edb5d1a2efcd0"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "a079799c103592d24101e1c3b5a40699"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "4b715b8a89010a0b979872a7ffc5db10"
  },
  {
    "url": "tag/成长之路/index.html",
    "revision": "a765ec37b0c6bcf5bb826fbf4b8beeae"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "33043297ea094f84e005d4e1e5b820ce"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "89db8e7050c6dde6c9311834b2a93e8b"
  },
  {
    "url": "timeline/index.html",
    "revision": "dc9291de5726de388103890c1209e3b3"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "09a4164cd2cc84fb2f526f7410babb24"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "ada360abc9662f771b3ca510fc6af089"
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
