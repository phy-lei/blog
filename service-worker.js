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
    "revision": "6baf6bdb5a17db12aa342b32e0857041"
  },
  {
    "url": "20200526/index.html",
    "revision": "46895cf209107ad4a3fefcef73a3512d"
  },
  {
    "url": "20200528/index.html",
    "revision": "11343cb8cc8708d537320e2572466360"
  },
  {
    "url": "20200529/index.html",
    "revision": "bb304141077da4673927bbd13ee534de"
  },
  {
    "url": "20200601/index.html",
    "revision": "3d34883cd2b6da373ce593397b0334d2"
  },
  {
    "url": "20200602/index.html",
    "revision": "eef816663e931214a6b45aa9356e0f75"
  },
  {
    "url": "20200604/index.html",
    "revision": "f4f94f6cd50d25d511e910cbe801b82e"
  },
  {
    "url": "20200612/index.html",
    "revision": "3d69fb662c1f8f1f48c809e195ee83d4"
  },
  {
    "url": "20200720/index.html",
    "revision": "6a5f8f287b16a17f77931a1ca771b9b4"
  },
  {
    "url": "20200804/index.html",
    "revision": "2596aeda4a97c3e260ece3cdcb636502"
  },
  {
    "url": "20200812/index.html",
    "revision": "285f0f3dd0d2a74e10606bb6be5b7939"
  },
  {
    "url": "20201013/index.html",
    "revision": "2edcd4b8ac99f4467a50dd1eb68d4bce"
  },
  {
    "url": "20210112/index.html",
    "revision": "21ddeeb3fc2eb9146b20936d2a817f1c"
  },
  {
    "url": "20210123/index.html",
    "revision": "e182e6a7a274edf05af579ab6c32c9aa"
  },
  {
    "url": "20210129/index.html",
    "revision": "4e019a8de5c390435dbf4493f4c9b73c"
  },
  {
    "url": "20210327/index.html",
    "revision": "85a0cdd0ce5fea5b45bbc8bd9ae4d1e7"
  },
  {
    "url": "20210502/index.html",
    "revision": "570619eb29d528d15069b0c991bd0f66"
  },
  {
    "url": "20210507_01/index.html",
    "revision": "f08a8d216c79ac689708cb25d6f1ab4b"
  },
  {
    "url": "20210507_02/index.html",
    "revision": "65b9c6e8ca708c185c03091ff9eab40d"
  },
  {
    "url": "20210508/index.html",
    "revision": "f8b4485ae912fde1f13dad45439a1700"
  },
  {
    "url": "20210510/index.html",
    "revision": "0456b6abd757674ed84ded29043a3025"
  },
  {
    "url": "20210703/index.html",
    "revision": "87e5f4dcad8166a9dc5c5a4e711e2335"
  },
  {
    "url": "20210809/index.html",
    "revision": "d6189159cd5159eb75a8c0b165ef42c3"
  },
  {
    "url": "20210901/index.html",
    "revision": "063371c8f6541e9479fe43f2397d17f7"
  },
  {
    "url": "20211124/index.html",
    "revision": "dd4dfaf1aaed56e0e659ebf1272fb268"
  },
  {
    "url": "20211210/index.html",
    "revision": "ffb9c3b5103d20ae439c49a5d5616e0a"
  },
  {
    "url": "20220212/index.html",
    "revision": "066e0b9b971d4ec771c27ba2322d8e03"
  },
  {
    "url": "20220513/index.html",
    "revision": "ed146ec51a10b1070504249e4c0936a2"
  },
  {
    "url": "20220530/index.html",
    "revision": "6a1087f4065a9aa4b8a66732d2bac43a"
  },
  {
    "url": "20220704/index.html",
    "revision": "269e54bc2390c79534b42ddaea98fb63"
  },
  {
    "url": "20220804/index.html",
    "revision": "0c81199eb23e321d50988aab73c613c1"
  },
  {
    "url": "20221125/index.html",
    "revision": "72acdc233d7cc32f26adfeab49cc0d5c"
  },
  {
    "url": "404.html",
    "revision": "139dbd0ba3d7843b7f1bc3534e74fd78"
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
    "url": "assets/js/1.e0ccd5ab.js",
    "revision": "ddeea9f24369cc1579939a909ea8a135"
  },
  {
    "url": "assets/js/10.c35fdf02.js",
    "revision": "3c5e7a60909a03378b0885dd61157619"
  },
  {
    "url": "assets/js/11.f913f133.js",
    "revision": "dd4f391334e682ec944b02591b7784fb"
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
    "url": "assets/js/3.1d0553cb.js",
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
    "url": "assets/js/33.5fe7d102.js",
    "revision": "8ad5f9e4edbd23ec5bf8a6814f23d026"
  },
  {
    "url": "assets/js/34.bf4f36ba.js",
    "revision": "7faf2e898d0c47958c1771c146ace3b0"
  },
  {
    "url": "assets/js/35.74c47905.js",
    "revision": "8bddde4fa2026a180c0a5d482f9e2737"
  },
  {
    "url": "assets/js/36.8865821e.js",
    "revision": "c6441557c8d8008463c689b8ca168c55"
  },
  {
    "url": "assets/js/37.17ab910f.js",
    "revision": "9f0fce61a39d89e04d3b5f3d737138d0"
  },
  {
    "url": "assets/js/38.958915af.js",
    "revision": "2ef75ea4ccb9120158cb4f476a7fe78f"
  },
  {
    "url": "assets/js/39.c45a56b3.js",
    "revision": "5ad8174efb86b974bcaf4e1046625f06"
  },
  {
    "url": "assets/js/4.d0f4a55d.js",
    "revision": "08de63f91865dc542434ded9704e1ed9"
  },
  {
    "url": "assets/js/40.4214d5ba.js",
    "revision": "3e66b627e4f00b44c4b83dcb4d9c3bb5"
  },
  {
    "url": "assets/js/41.5a42794f.js",
    "revision": "aee4f0e7b095de0373c4a1907ff992aa"
  },
  {
    "url": "assets/js/42.da32e178.js",
    "revision": "8ad90c22fc193cf954f3c50ef6cecf8f"
  },
  {
    "url": "assets/js/43.e9d55361.js",
    "revision": "ea7959a887bfc3f4aef1abb5e9dbc1c5"
  },
  {
    "url": "assets/js/44.3a6611f5.js",
    "revision": "4ff7afbfc6b1d9ba10997653a19deecc"
  },
  {
    "url": "assets/js/45.6316bd83.js",
    "revision": "abeef794e5ffec503bbd8091e6c86f06"
  },
  {
    "url": "assets/js/46.f4311427.js",
    "revision": "65df535de34ff8eaad41ccbd5ce65358"
  },
  {
    "url": "assets/js/47.bbef0cd6.js",
    "revision": "674c74a1effb0087219b33ddae8b8f19"
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
    "url": "assets/js/app.394f1232.js",
    "revision": "f7a4a6eb5eb50d9551036170627d494b"
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
    "revision": "734ec5d320c11dabec7eb0bb5c0b1a78"
  },
  {
    "url": "categories/css/index.html",
    "revision": "c89a15ada71bbf57cfc1f5ae0e75c866"
  },
  {
    "url": "categories/git/index.html",
    "revision": "656d7b3e3bdc5140c060b9c3fc1b0998"
  },
  {
    "url": "categories/index.html",
    "revision": "fa2953cacb2b3dbffbbaa57cbfd9658d"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "8fb429f3f6ef5d7fc308745892725d37"
  },
  {
    "url": "categories/react/index.html",
    "revision": "821d0c41fd37ea43280574ea008888c8"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "9fb36a3a21c729ca91514313b395498a"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "29294095e3e430093da8dcda6a81450d"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "f9302025d970c975793647c01f624a50"
  },
  {
    "url": "categories/成长之路/index.html",
    "revision": "40c9f375119e3a0c0446d37d417ed29a"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "bcd4fe02458b7626ddc66e24a93b0265"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "67650d3474cb1d0d4eedec6f776d6d9e"
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
    "revision": "3b1113cd4d496566315ca434dca644ed"
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
    "revision": "51898dd40a31c3c3058f0165cb835e51"
  },
  {
    "url": "tag/git/index.html",
    "revision": "14790c307bb7e193ccbc57bc05f164ab"
  },
  {
    "url": "tag/index.html",
    "revision": "487296e08340746dd15553d0bec69950"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "00e297f2e8155f6ddc5e8683fa261c5f"
  },
  {
    "url": "tag/react/index.html",
    "revision": "ed5b5e655307c2011a9221c06dc0f379"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "919be62a02ffe4a7f6aabc051e052174"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "dcf958cbb2a54f27b7d6dfe9e68c7993"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "4469a7b0ebe9221892b02778063f9a08"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "de870a94a349acdf7c252626ac533de0"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "db6b181de57205f6cba5698f26279f03"
  },
  {
    "url": "tag/成长之路/index.html",
    "revision": "91490455018d0146f9072f522d01c6db"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "318ef652ecfd591de50b8d8a5b17c043"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "6b6c9dd98b624badae2d793a11200ce5"
  },
  {
    "url": "timeline/index.html",
    "revision": "8f7771a9c1cefe2c7776062929d44ed2"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "811f25df7eb9f26d8c1b3035799cb66c"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "1b879f6cd6ce9b1b42972da191527cd7"
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
