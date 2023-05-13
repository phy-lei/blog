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
    "revision": "d51cda0b11a62836c10c1870435c8f35"
  },
  {
    "url": "20200526/index.html",
    "revision": "6a3ab1d45eda4f936da04091e5c946f1"
  },
  {
    "url": "20200528/index.html",
    "revision": "a5c29988ebdad3713a2b11b7ad7afcf0"
  },
  {
    "url": "20200529/index.html",
    "revision": "30a8e88cca6df1f163cd5e4523a9d1e1"
  },
  {
    "url": "20200601/index.html",
    "revision": "eac46ffda3630ec285cf7f5359093fb8"
  },
  {
    "url": "20200602/index.html",
    "revision": "332934bb3d3e6b0d399f3034af25fc3d"
  },
  {
    "url": "20200604/index.html",
    "revision": "75dd09cd8f0303faae505aa95564b41e"
  },
  {
    "url": "20200612/index.html",
    "revision": "4e4e501626677312a556c6d785ebca38"
  },
  {
    "url": "20200720/index.html",
    "revision": "f2772132489617365b2819bb178a2be5"
  },
  {
    "url": "20200804/index.html",
    "revision": "6592ba741eac3897a5286a8f54cc3d25"
  },
  {
    "url": "20200812/index.html",
    "revision": "451d2c454026be405bab1c8688a51d5c"
  },
  {
    "url": "20201013/index.html",
    "revision": "78128e9bab584db3df4d989b1cbefb56"
  },
  {
    "url": "20210112/index.html",
    "revision": "a823cc51ba6c4ba5a53e924a8a9efecf"
  },
  {
    "url": "20210123/index.html",
    "revision": "18f713617e997058f4ae8d55ff0c08f4"
  },
  {
    "url": "20210129/index.html",
    "revision": "c9f616c9066c3dde7260cb7f2d9bc8e1"
  },
  {
    "url": "20210327/index.html",
    "revision": "47525fca6891dfc114164456e52bdde6"
  },
  {
    "url": "20210502/index.html",
    "revision": "1da4e8cc8dcc1db612a31f8b18bc29b6"
  },
  {
    "url": "20210507_01/index.html",
    "revision": "4a9d9341c93d5ab21e0175ff61ab685d"
  },
  {
    "url": "20210507_02/index.html",
    "revision": "6e3af8eaa9dd5ff27d8c01c1634eaffa"
  },
  {
    "url": "20210508/index.html",
    "revision": "f26756ff205b026ff22be9a6683cffa8"
  },
  {
    "url": "20210510/index.html",
    "revision": "a9dc953f4270c9728efb6fd426d02d71"
  },
  {
    "url": "20210703/index.html",
    "revision": "0aa3edf462549391d1d134f2832e4a89"
  },
  {
    "url": "20210809/index.html",
    "revision": "a6cde51604da9f0c55bd613dc0ebf9ba"
  },
  {
    "url": "20210901/index.html",
    "revision": "ad1d7d38f81a6b6c4e5b3add880b842f"
  },
  {
    "url": "20211124/index.html",
    "revision": "336127d89d2186894a0f63837e33403d"
  },
  {
    "url": "20211210/index.html",
    "revision": "0aa7d25aaa170fd9edb4ca7909a6f870"
  },
  {
    "url": "20220212/index.html",
    "revision": "4185b5df3db0063f3ca61ff0bd55c134"
  },
  {
    "url": "20220513/index.html",
    "revision": "3c0c29171adf4a8ed6248ad3800ecae1"
  },
  {
    "url": "20220530/index.html",
    "revision": "2812d06d97639f7eb5c2dfd1278061e2"
  },
  {
    "url": "20220704/index.html",
    "revision": "16d7ffb2159389fbeabbf7fd28d2aa46"
  },
  {
    "url": "20220804/index.html",
    "revision": "567467e098689cb8d9b55512f40c89ed"
  },
  {
    "url": "20221125/index.html",
    "revision": "a7e63b035353ff8eb0af0a7fc6febe05"
  },
  {
    "url": "20230513/index.html",
    "revision": "4b58948cc4ec94db3a1bb613bd44afb6"
  },
  {
    "url": "404.html",
    "revision": "eb68833f51220ec8a8e7bd4785cd5456"
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
    "url": "assets/js/12.b88a1de9.js",
    "revision": "5420726e3c27c462578c4ab999a17380"
  },
  {
    "url": "assets/js/13.f3906a6a.js",
    "revision": "7c326d5c1df995d322c265f058b4a6ec"
  },
  {
    "url": "assets/js/14.74706196.js",
    "revision": "777d6efbf9d7efd5a7e0e2d97f577f6f"
  },
  {
    "url": "assets/js/15.83a9d7a5.js",
    "revision": "fbe47e409d757eddd2b8485d1be7eb0f"
  },
  {
    "url": "assets/js/16.04caaf07.js",
    "revision": "7a4d4ff189e9a132b2cc0a7958affa58"
  },
  {
    "url": "assets/js/17.c78593f8.js",
    "revision": "8a7dc23db753693c091d0ecbfda916b5"
  },
  {
    "url": "assets/js/18.acf619b1.js",
    "revision": "9016bdb4a6bfc7bdcc68eead1d1b574d"
  },
  {
    "url": "assets/js/19.bf5a87d0.js",
    "revision": "3f618d1296c69dbcb990073fd0aa55bd"
  },
  {
    "url": "assets/js/20.038d0cf5.js",
    "revision": "67f167191beec94eaa76a898a905f97d"
  },
  {
    "url": "assets/js/21.c2b528ce.js",
    "revision": "61bf8ae16785cf2ff41ba47f4cd46de1"
  },
  {
    "url": "assets/js/22.9c081076.js",
    "revision": "fb98c0175a8ae003729cc17422eaa772"
  },
  {
    "url": "assets/js/23.fcf13288.js",
    "revision": "6e9fe320ccf9151c478d0c3cbd9e592c"
  },
  {
    "url": "assets/js/24.a51905ee.js",
    "revision": "0e4d9cfa7b1f6e9255991445221add35"
  },
  {
    "url": "assets/js/25.30dd95ec.js",
    "revision": "3500131353fb31527252d146d6374d28"
  },
  {
    "url": "assets/js/26.18331d05.js",
    "revision": "176f5572cd43d2f3542a9ce36e0e950c"
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
    "url": "assets/js/33.3df83c23.js",
    "revision": "3520cc09968efe957b1ac3b584fa88d9"
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
    "url": "assets/js/app.e83006ae.js",
    "revision": "9b3c43ea283b620a967182c8030fd53b"
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
    "revision": "0a23a15cad0ebfd43b40890c72418750"
  },
  {
    "url": "categories/css/index.html",
    "revision": "dcd6fafe418089ba8d797fe52fc3709d"
  },
  {
    "url": "categories/git/index.html",
    "revision": "df18efeef6fa3c078e87dfd45cdee487"
  },
  {
    "url": "categories/index.html",
    "revision": "73ce2d3180e5a4c4bfcf02228672711e"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "f29ab3edcb8159658e7dca9ccdfd4504"
  },
  {
    "url": "categories/react/index.html",
    "revision": "3c4e19218a6852ed817964a4cefaed2d"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "ed2093ba555f9c8011959ceccb7a76c1"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "c87180cc44e36685e15b11bb840c92f5"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "73a66c99b14a448e908523ba4d49b670"
  },
  {
    "url": "categories/成长之路/index.html",
    "revision": "4a6a9f78575aa12fde5089c25791b4c9"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "d1b042589ad5fee9e51290feb33c36a6"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "1ff038421851bc81d5fca06b18b4deb0"
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
    "revision": "45087c37f28ec41f8a074786f52e9e67"
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
    "revision": "90574f9ce598bd801d0ddd1ddf79b0cf"
  },
  {
    "url": "tag/git/index.html",
    "revision": "11939424d0a766df8c0c708613d1a9c0"
  },
  {
    "url": "tag/index.html",
    "revision": "9c772e1baf7f13187bebdeca933b946a"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "3c034f72241ade996f3a9b4240b461f6"
  },
  {
    "url": "tag/react/index.html",
    "revision": "200a8ce7ece6f46531eecee80b87aafd"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "6ff5cb76de7befb64475c4b93042c497"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "4b332a98ea6a43cfbd8758806bb5ca55"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "477b74738554bb3b306c2d3c6f97d679"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "cc2ace22a0bb96d7fb08360efc705394"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "c4d61559e3fd75884386bc42f76b4dc1"
  },
  {
    "url": "tag/成长之路/index.html",
    "revision": "269773993634065043b6ae5dd2b95abc"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "c63f4ec3aa1638b22c67607bdb1e3e5d"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "5dedf425a0250146f4760b43de2f071c"
  },
  {
    "url": "timeline/index.html",
    "revision": "8c5b058aab7dc3e6edafa8053035de01"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "627c0f05a1220cb3ea54796e89baa27e"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "7944c22b0628fe0b897d43ea3178c48c"
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
