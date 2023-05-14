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
    "revision": "6d3b98b0a5fd267f747bec5212c830ce"
  },
  {
    "url": "20200526/index.html",
    "revision": "b766e5b1fedce64178e99586c7c1d737"
  },
  {
    "url": "20200528/index.html",
    "revision": "f13c9f13e0d5fd90319874cea150e005"
  },
  {
    "url": "20200529/index.html",
    "revision": "6bdd957ee0ac0f3a3cefb215073cbdd4"
  },
  {
    "url": "20200601/index.html",
    "revision": "ff262d7fc176c2dfa85b7cb0a42d40cf"
  },
  {
    "url": "20200602/index.html",
    "revision": "28700af8ce782924de5f438d3d5bbbbc"
  },
  {
    "url": "20200604/index.html",
    "revision": "813ca1b0157af128a5ead5aedba2af35"
  },
  {
    "url": "20200612/index.html",
    "revision": "13cf961d6bf760335f53ecb57c61bbc8"
  },
  {
    "url": "20200720/index.html",
    "revision": "25a27571f2538d4436a13df20c9c3195"
  },
  {
    "url": "20200804/index.html",
    "revision": "4770389d6dd6b0d88bb91c2e35a11096"
  },
  {
    "url": "20200812/index.html",
    "revision": "652d5cc410b2c5670926fdfe8eeb02c7"
  },
  {
    "url": "20201013/index.html",
    "revision": "ee50712aac964418ea36380485d20855"
  },
  {
    "url": "20210112/index.html",
    "revision": "4ab1cd69f1d7b39ceebc4e1f13f525bb"
  },
  {
    "url": "20210123/index.html",
    "revision": "7e68820246760d5c5361fa14ea4a4a86"
  },
  {
    "url": "20210129/index.html",
    "revision": "5893172e914f010905a8487d8bd34e75"
  },
  {
    "url": "20210327/index.html",
    "revision": "71ea72b12f44b5321195b092b9ecaea0"
  },
  {
    "url": "20210502/index.html",
    "revision": "ebe593ce349a5e4019d88442f1d65ee4"
  },
  {
    "url": "20210507_01/index.html",
    "revision": "904242e7e34685b0139a375e5ff45827"
  },
  {
    "url": "20210507_02/index.html",
    "revision": "1604783304eccdf9a0c5f5d7632e1178"
  },
  {
    "url": "20210508/index.html",
    "revision": "25abf53ed05327b17733d2ac2e8ead1a"
  },
  {
    "url": "20210510/index.html",
    "revision": "962642954aea4e2cb9952f0e8b5a9e77"
  },
  {
    "url": "20210703/index.html",
    "revision": "a7a719830bee8369e0d3ce720a316398"
  },
  {
    "url": "20210809/index.html",
    "revision": "3c883476fe14dd84e4800d16fffc8bbb"
  },
  {
    "url": "20210901/index.html",
    "revision": "b47d47f281d73aa0462f81323ffc39c4"
  },
  {
    "url": "20211124/index.html",
    "revision": "b20ef7e98a0dde2e82d172ab7d3a79d9"
  },
  {
    "url": "20211210/index.html",
    "revision": "4927fef852279d61d8dd90f49c1f48ee"
  },
  {
    "url": "20220212/index.html",
    "revision": "434eee9e83efa9f5e605dc0413001c3e"
  },
  {
    "url": "20220513/index.html",
    "revision": "8e5205b63bacd1553d7527a9d7c6e154"
  },
  {
    "url": "20220530/index.html",
    "revision": "a8b451392138b0f4d10fccab66959882"
  },
  {
    "url": "20220704/index.html",
    "revision": "3c516ac69150181c53e9d754348372c9"
  },
  {
    "url": "20220804/index.html",
    "revision": "5cd0541d2ac99a156d77bec017446d95"
  },
  {
    "url": "20221125/index.html",
    "revision": "beb4058c9d9119d324156a3c006f2d1c"
  },
  {
    "url": "20230513/index.html",
    "revision": "f32866c99e504d47591fbd4f779a4134"
  },
  {
    "url": "404.html",
    "revision": "b22ac01f796ff3fd07f85d47243df2cb"
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
    "url": "assets/js/app.e443acaf.js",
    "revision": "93d3ad16923300a09602b8b81252628c"
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
    "revision": "850c3f3ba3ee819eac4a71dee758b56c"
  },
  {
    "url": "categories/css/index.html",
    "revision": "3c9483aec236d0706b47f7fcc286ad97"
  },
  {
    "url": "categories/git/index.html",
    "revision": "837c029bf0f3a8f6258155f71eaebab0"
  },
  {
    "url": "categories/index.html",
    "revision": "30800f604c9fa389ef80a4d0bbd43a12"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "54b344c8aa9b393036178f8dfbf44a36"
  },
  {
    "url": "categories/react/index.html",
    "revision": "e7b93b2a28d8d8d99d7afa344ba586c9"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "d354b34ab6cd8982601cf3055db05f86"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "577ffd8fe9a46a0ef2935b4cc8f50387"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "e574e8e5e6c43358c86ac1aa40f31eef"
  },
  {
    "url": "categories/成长之路/index.html",
    "revision": "9129d87bd696f68f9aef28dcd5ce47ea"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "d4d1051219af50c91f8f3bb9e67172fa"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "476a96e5a30f8b0856e29b1cba8a35a8"
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
    "revision": "edf1c6f14c5d333cd71cbaaa09fff693"
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
    "revision": "2fa1428dd2066ff95cbabc19451d8f2e"
  },
  {
    "url": "tag/git/index.html",
    "revision": "257d357966bf56cd9b96c028d503c14a"
  },
  {
    "url": "tag/index.html",
    "revision": "771866ca0383972846dd737a9b43674d"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "218820efe855fdeeaecf41f04241dcdd"
  },
  {
    "url": "tag/react/index.html",
    "revision": "480d905fbbe81b0c76fefaef4b35d457"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "900ab368a20d49805d5b05120f594424"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "2ee7fe51869a7f6975fc894205f8d2a5"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "5148410ec4990aa52058f3d71fd7cbe7"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "ba7c2eff965fce192c920aa4f9cc625a"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "4b349e2d280c5ed67cfd6d7df50715f1"
  },
  {
    "url": "tag/成长之路/index.html",
    "revision": "6f738830bdaf498e3adc198007134adb"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "ddb822d0fa62c81e1cfbc5355bec1efd"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "1ff1d56bfd3fa6c46d22886592fc91dd"
  },
  {
    "url": "timeline/index.html",
    "revision": "e84b8b2585204950704263a7b4c2e538"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "dbb44bb65bb25a54a00fa83dd72afa9f"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "e65388cb82779fe1a766b1bb93fe09c2"
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
