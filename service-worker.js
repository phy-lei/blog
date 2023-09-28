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
    "revision": "d9fde10cfeae01facb6460fc005b340e"
  },
  {
    "url": "20200526/index.html",
    "revision": "befffc6c99cd53865cff2b2905d0c98e"
  },
  {
    "url": "20200528/index.html",
    "revision": "d75654e3dd5f30486a8a5fa1e6af9800"
  },
  {
    "url": "20200529/index.html",
    "revision": "aa063d6fa77dda0ef23078f0850d0ab3"
  },
  {
    "url": "20200601/index.html",
    "revision": "80b293af1d2800fb508ba149e0b8480e"
  },
  {
    "url": "20200602/index.html",
    "revision": "922068d81d0d0d264254b6064bbe3bf6"
  },
  {
    "url": "20200604/index.html",
    "revision": "c4688162ca0afd03c1e0b14de8554b16"
  },
  {
    "url": "20200612/index.html",
    "revision": "ba0faf78fcf9b204918efc4ef815ef77"
  },
  {
    "url": "20200720/index.html",
    "revision": "3758c03f42e278dc6e0c96101308e69b"
  },
  {
    "url": "20200804/index.html",
    "revision": "6ba065279067ccd4e1c6a906dd0d0420"
  },
  {
    "url": "20200812/index.html",
    "revision": "14e2fdc75b3580f7ee9870dbfeaddb37"
  },
  {
    "url": "20201013/index.html",
    "revision": "d815336eb2143ab9ff831e0167f0d8b8"
  },
  {
    "url": "20210112/index.html",
    "revision": "88b99765ea4739633110d717fb585c0b"
  },
  {
    "url": "20210123/index.html",
    "revision": "0e9eb8ae1d1323cf6a5a169c5afd7e04"
  },
  {
    "url": "20210129/index.html",
    "revision": "bbb83a532abf13bc4b4cd225cd87b676"
  },
  {
    "url": "20210327/index.html",
    "revision": "e24892a0654d4e0da5f84b467f17d701"
  },
  {
    "url": "20210502/index.html",
    "revision": "49b6e88b5e5003c736beae3c756aa614"
  },
  {
    "url": "20210507_01/index.html",
    "revision": "fcb01e986bf3487dd36d76ac6043f76f"
  },
  {
    "url": "20210507_02/index.html",
    "revision": "8c12081fefe373ebc0fef91870f7ae30"
  },
  {
    "url": "20210508/index.html",
    "revision": "f42f2e7ebf0c64d4ffb4b07b143e03fc"
  },
  {
    "url": "20210510/index.html",
    "revision": "3518bd805ff931af08b8e90218f1c914"
  },
  {
    "url": "20210703/index.html",
    "revision": "558d2fd647743ace561fb6b404d8df8a"
  },
  {
    "url": "20210809/index.html",
    "revision": "81a9425ce7543ec804ec9a1975341a67"
  },
  {
    "url": "20210901/index.html",
    "revision": "b40f4a5d98a933692b5c2e713b9ddb0b"
  },
  {
    "url": "20211124/index.html",
    "revision": "e84ebd64a84add1a961ca3369384b823"
  },
  {
    "url": "20211210/index.html",
    "revision": "07dd9f8fa685ed78c45efcaefe464b73"
  },
  {
    "url": "20220212/index.html",
    "revision": "ea1e4005e631992026b0fc08fda5419a"
  },
  {
    "url": "20220513/index.html",
    "revision": "1ef118391358c88f2f2530b6440dc883"
  },
  {
    "url": "20220530/index.html",
    "revision": "f8d0c6703984b514ee32231395946183"
  },
  {
    "url": "20220704/index.html",
    "revision": "4cc2d3a47362e4a724c75167b7aaa275"
  },
  {
    "url": "20220804/index.html",
    "revision": "1980838c4ac056487d555a7f0dcdb012"
  },
  {
    "url": "20221125/index.html",
    "revision": "9dd3c982d4694b69bf34abc6137f8183"
  },
  {
    "url": "20230513/index.html",
    "revision": "c33414dea5a6903810a10f6d96253ca6"
  },
  {
    "url": "20230928/index.html",
    "revision": "34c11ee8d3f8da0d2f8a94f6e27385f7"
  },
  {
    "url": "404.html",
    "revision": "90ba0e24739671cbb3db52e2d5792c6a"
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
    "url": "assets/js/11.9a801a61.js",
    "revision": "639a3b7b02d95fee82a785f9c95a3293"
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
    "url": "assets/js/35.48a443df.js",
    "revision": "c8463881cccef530e390097f39a676e2"
  },
  {
    "url": "assets/js/36.7b96ec15.js",
    "revision": "089a47b050a5ab0dd2b2b2d4e4fb5e81"
  },
  {
    "url": "assets/js/37.c94e7590.js",
    "revision": "75ca9e463088237bdf473bff28434dc6"
  },
  {
    "url": "assets/js/38.7ed2489f.js",
    "revision": "a942640a08fefc5a9372515f95272264"
  },
  {
    "url": "assets/js/39.1fd47e50.js",
    "revision": "df5892945f774fcfb115d518ebdd3597"
  },
  {
    "url": "assets/js/4.339729e1.js",
    "revision": "08de63f91865dc542434ded9704e1ed9"
  },
  {
    "url": "assets/js/40.b67c83d8.js",
    "revision": "12c160a0906bfa735a8333f3f54e3a5c"
  },
  {
    "url": "assets/js/41.02d654d9.js",
    "revision": "526eca29e9a4d56ade3cf328b949a465"
  },
  {
    "url": "assets/js/42.763ec80f.js",
    "revision": "b505ad2e7e6a1811df2a27b7ef2669cd"
  },
  {
    "url": "assets/js/43.dc07c5fa.js",
    "revision": "10bb35aa3b6386b6ebc1b1f46c482627"
  },
  {
    "url": "assets/js/44.8d137256.js",
    "revision": "e031eb089167e73b9f19d42cc39add44"
  },
  {
    "url": "assets/js/45.fb051a19.js",
    "revision": "882a46ce48dc78af61ffa4473be6ee7a"
  },
  {
    "url": "assets/js/46.263d4f7f.js",
    "revision": "a8cf0e9adc61ced2d20cfa0bf681e540"
  },
  {
    "url": "assets/js/47.be2594e3.js",
    "revision": "be63321eed65b30902d0645f46794258"
  },
  {
    "url": "assets/js/48.e4835ac9.js",
    "revision": "a04ef999721a3fb6264f9e901c834025"
  },
  {
    "url": "assets/js/49.129e9ed0.js",
    "revision": "43117195ac0b2d78edf3ca70e6484e0c"
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
    "url": "assets/js/app.6e1ac92e.js",
    "revision": "39a868bbdd506058f56e1e10337cb3ce"
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
    "revision": "c03723d7ca305d9ac0dc8b3a80fa7a79"
  },
  {
    "url": "categories/css/index.html",
    "revision": "3d6b8889f71642444b5ef2c8a2fe169e"
  },
  {
    "url": "categories/git/index.html",
    "revision": "0391d5d0f370f126a7dd94338d743a6d"
  },
  {
    "url": "categories/index.html",
    "revision": "7107d811a905a431414c7f7e8b61f3c7"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "2d7345f7b9ac830972aa9c6439999baa"
  },
  {
    "url": "categories/react/index.html",
    "revision": "2c4feb746d5dcc6f95bfcb4323a2e3d3"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "c182d0ada6245e21a83ae9a6cca1f0c9"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "dc9c41468a2d3152d4ef7fda63326023"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "4610d4b3e67347cff1d0a263669cd4b0"
  },
  {
    "url": "categories/成长之路/index.html",
    "revision": "8010e35e1986512686009b673f0f1d42"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "8542d376152e7ccb94fa3cddb7dbfbee"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "305bbf8489d53b132a580414f6b56d8f"
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
    "revision": "3d94c1266f08bf517d8d13b4a5216667"
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
    "revision": "60b498e7626b91eb65af236c2eea9947"
  },
  {
    "url": "tag/git/index.html",
    "revision": "33d0b3f1331cea474146bfc60056ecf5"
  },
  {
    "url": "tag/index.html",
    "revision": "0e5cd61a51702a2e6c4d2206de881b33"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "4fb1979f0f09fe1ccb4c16bb7e13159f"
  },
  {
    "url": "tag/react/index.html",
    "revision": "556205da1200d0b8e0525e56db48053d"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "e233a05f0205fff8f319110efbbdaa80"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "dda7f1ec30c2fc88a794066cd273204a"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "e12e97fedfbbb054785d66914c398f30"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "16f80f9e38441bd0d74cdbd87e411286"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "192c991e744b1a5ded1066190fbfcf75"
  },
  {
    "url": "tag/成长之路/index.html",
    "revision": "91f0464ee8745f23cce07aed5d1807cc"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "721d6bbfd926cd365d57d84c15eb7f43"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "15d500e488a3a602e866b4d0ce7e4af1"
  },
  {
    "url": "timeline/index.html",
    "revision": "6e63f51d0c52afd3f833f12b9634b357"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "a632949c74b95cb33737c8f425e26264"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "593cd4a978237569e599f805c6fed9d1"
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
