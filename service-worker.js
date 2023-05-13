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
    "revision": "05fa43e5141fdc1d84298de1b102ca2a"
  },
  {
    "url": "20200526/index.html",
    "revision": "759beabdae04f817f1822cbed45cb025"
  },
  {
    "url": "20200528/index.html",
    "revision": "793f6bd526e7db3a8bc1c7d52ff7e1ea"
  },
  {
    "url": "20200529/index.html",
    "revision": "7fb0e4fff8d57587cea1bd817f5934d5"
  },
  {
    "url": "20200601/index.html",
    "revision": "45ffc9f0e28b66640a031b58e72f81fe"
  },
  {
    "url": "20200602/index.html",
    "revision": "9fa36f7e665736997980b2979401a559"
  },
  {
    "url": "20200604/index.html",
    "revision": "22a562111d06ad01b8702f8094567749"
  },
  {
    "url": "20200612/index.html",
    "revision": "53c68a78f5d7f5df944015faaabfa61a"
  },
  {
    "url": "20200720/index.html",
    "revision": "059501984638cd46a6de923109234036"
  },
  {
    "url": "20200804/index.html",
    "revision": "f9dbf5b67caeb1242b454decdc12a523"
  },
  {
    "url": "20200812/index.html",
    "revision": "b1291f791072d261cf4e37b462b68145"
  },
  {
    "url": "20201013/index.html",
    "revision": "6463d7ff6682e8f65597cd0d2c478cf8"
  },
  {
    "url": "20210112/index.html",
    "revision": "ea5de73a59574c2b80651894a09927ca"
  },
  {
    "url": "20210123/index.html",
    "revision": "3b3c642413567e1a4e797b96432dbcc8"
  },
  {
    "url": "20210129/index.html",
    "revision": "3dcd8aad71a97f2b6db26d35c45276d5"
  },
  {
    "url": "20210327/index.html",
    "revision": "2fc5730a19139f3c5f8bb3157d621179"
  },
  {
    "url": "20210502/index.html",
    "revision": "4c901b361db01c37f8192e25ae978123"
  },
  {
    "url": "20210507_01/index.html",
    "revision": "87588849734d99893d3c1edf04d09b24"
  },
  {
    "url": "20210507_02/index.html",
    "revision": "6fdcaa265e17791fbda2f1ea62463d4d"
  },
  {
    "url": "20210508/index.html",
    "revision": "4e7cfbedfe336a159f28f09dd94832ee"
  },
  {
    "url": "20210510/index.html",
    "revision": "436a7db9e959b5cb9e024b5625f513e8"
  },
  {
    "url": "20210703/index.html",
    "revision": "dca3289e51bfaa7440625b55db91b671"
  },
  {
    "url": "20210809/index.html",
    "revision": "7e068e4b04f42b7de8355c49d260d471"
  },
  {
    "url": "20210901/index.html",
    "revision": "d85304d568d30dde9c42b3dc37c387f9"
  },
  {
    "url": "20211124/index.html",
    "revision": "1850410202d6248a1f121226b399a79a"
  },
  {
    "url": "20211210/index.html",
    "revision": "e539a2b9afbad45b7b0b20dfced02f62"
  },
  {
    "url": "20220212/index.html",
    "revision": "2d655a7a30c2c68834b5ffa95c42cdb7"
  },
  {
    "url": "20220513/index.html",
    "revision": "f682935cd8c4cb0cdfdb23e3746c0a86"
  },
  {
    "url": "20220530/index.html",
    "revision": "622a862e57fbcf25c31d584c89e2332a"
  },
  {
    "url": "20220704/index.html",
    "revision": "30e5b50b9dbaff7d724591808745887f"
  },
  {
    "url": "20220804/index.html",
    "revision": "c97a964a42ffa754d48ba45b2795cdc0"
  },
  {
    "url": "20221125/index.html",
    "revision": "3562c0a7cd6cd797641dd89e9287dc3a"
  },
  {
    "url": "20230513/index.html",
    "revision": "101cea48d55361109a979e953463a5ef"
  },
  {
    "url": "404.html",
    "revision": "07a2d6d50ce99425b195c2e36b738cf0"
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
    "url": "assets/js/33.b2520781.js",
    "revision": "ed813d1cda48408f59ae23bbd5a2d32e"
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
    "url": "assets/js/app.a7bbdb1e.js",
    "revision": "6cc2142268835cd772ddd751a265da3e"
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
    "revision": "646b291711d93b091ed136303a034e75"
  },
  {
    "url": "categories/css/index.html",
    "revision": "93d4e691e0fe582b798ff337de54dd3b"
  },
  {
    "url": "categories/git/index.html",
    "revision": "b85969b9ade5fd9b2c4643f40dca9df7"
  },
  {
    "url": "categories/index.html",
    "revision": "c73892f7d40e5e419895980311e4bad9"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "49f9627f3f03604e20d7c3db59ecd1f9"
  },
  {
    "url": "categories/react/index.html",
    "revision": "5ffe2c86c0b1720602646ae01d2cf974"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "28575791454a180f14d3e7054d3b4b3f"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "54d46106c409b653b5a36d917970b0ec"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "a5d1e2264bc0ad4a6c529ec08595849b"
  },
  {
    "url": "categories/成长之路/index.html",
    "revision": "78c6549a29482cc3e54e48aea1c1d8ec"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "163bb9112b59337b881038fae28f77fa"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "3bd89c8efcaa8da10781a7caaa044074"
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
    "revision": "a03a72e3ef23a1acb375d764f2675dac"
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
    "revision": "ee1f020945b5d1913acceee435413c27"
  },
  {
    "url": "tag/git/index.html",
    "revision": "192ae69a33cd0febc46a8287e4336d48"
  },
  {
    "url": "tag/index.html",
    "revision": "c9980111bdf0d4cfda8de1874885c2ce"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "dc1dd252faf0f5969ad06b83fe522517"
  },
  {
    "url": "tag/react/index.html",
    "revision": "3f22ed54cdabbf7404b2b8d35e70964d"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "136f9b2970708afbcdf50012d3637241"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "fbd9163d4799491f8c1ea8b6dd3a8469"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "c2187cb5c693f3f2e113da62699089d2"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "a4e73e4b81cdb4a49fc0fb221f78ae54"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "1277dba1e3f7a56cbaf3b1c917a4db7a"
  },
  {
    "url": "tag/成长之路/index.html",
    "revision": "84bb80630f8bae261001a19ce00ab5b8"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "2d5c1b5ef4983018dec58586997b8eab"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "27b521df321f89a448ce4ec0e4df23fd"
  },
  {
    "url": "timeline/index.html",
    "revision": "ac3c5ff734507268755df9ed026662a6"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "adf0681b95dec6396e3cb4803ce94584"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "6b4db2769814c2a422ec54c8fb8d8c68"
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
