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
    "revision": "4f5c557af73466fa063abd74e4729e6f"
  },
  {
    "url": "20200526/index.html",
    "revision": "e59195cf8eb9620756397de96ab483c3"
  },
  {
    "url": "20200528/index.html",
    "revision": "07ae621de5fd3eb487457d7de3d403bb"
  },
  {
    "url": "20200529/index.html",
    "revision": "e63b4c14a25d72cc4656baa7c7983146"
  },
  {
    "url": "20200601/index.html",
    "revision": "d6016c5aa5c5151c2d7d7a8429bb95c1"
  },
  {
    "url": "20200602/index.html",
    "revision": "c32b45467dffe9debcc0e2316c47898e"
  },
  {
    "url": "20200604/index.html",
    "revision": "1c9f60f830c7ea69f165021ed0bfb475"
  },
  {
    "url": "20200612/index.html",
    "revision": "8a9895e757ebcf392694e03db1ca2a43"
  },
  {
    "url": "20200720/index.html",
    "revision": "33a50a06b56e72a21c2590527ba35632"
  },
  {
    "url": "20200804/index.html",
    "revision": "c1121dacd7dc959583698c7ab17221fa"
  },
  {
    "url": "20200812/index.html",
    "revision": "c8f9659b03d1be311500dc03f32a5c6e"
  },
  {
    "url": "20201013/index.html",
    "revision": "439b5f3ae3e92f6934ed34c091535e3b"
  },
  {
    "url": "20210112/index.html",
    "revision": "cb0400cbf6c9e2c5d9c29a43ced93849"
  },
  {
    "url": "20210123/index.html",
    "revision": "d03453c33aded5809e35390eeb216eaa"
  },
  {
    "url": "20210129/index.html",
    "revision": "26335f14169327de5d9dc677517d4294"
  },
  {
    "url": "20210327/index.html",
    "revision": "db8c8e3644784ded01c1f0ccc6230eed"
  },
  {
    "url": "20210502/index.html",
    "revision": "9a6a285a2195e856d661f233659cc180"
  },
  {
    "url": "20210507_01/index.html",
    "revision": "c0633da83d503b1f473b90cbc11b8e01"
  },
  {
    "url": "20210507_02/index.html",
    "revision": "ff74462a756b6454c3b006f1edc05a83"
  },
  {
    "url": "20210508/index.html",
    "revision": "58171414a6428282aead993c4295b393"
  },
  {
    "url": "20210510/index.html",
    "revision": "f5eb37abce1e16516c15d902a0bc7640"
  },
  {
    "url": "20210703/index.html",
    "revision": "36a5b65fd58b4f9214f60774fd4ae959"
  },
  {
    "url": "20210809/index.html",
    "revision": "6181d828bd9964b31c0897b3bff731b4"
  },
  {
    "url": "20210901/index.html",
    "revision": "e2c836807deb37a88ef61376c681f880"
  },
  {
    "url": "20211124/index.html",
    "revision": "fb270fb2431724b615e18a0ace08542b"
  },
  {
    "url": "20211210/index.html",
    "revision": "bdc7e666a3b87cc7b7f29ee0e9ae265f"
  },
  {
    "url": "20220212/index.html",
    "revision": "845baaf6a1487af26e5f2b374f16623e"
  },
  {
    "url": "20220513/index.html",
    "revision": "58a6e17577add0d843dd28dad80187de"
  },
  {
    "url": "20220530/index.html",
    "revision": "6563cab2ce40b8ec8d763ce4b320cc25"
  },
  {
    "url": "20220704/index.html",
    "revision": "29b09f4cf205baa1f9b3b99e7bfb3fe7"
  },
  {
    "url": "20220804/index.html",
    "revision": "e53dae75386faee7c7857a61f4042701"
  },
  {
    "url": "20221125/index.html",
    "revision": "701d1ab81c840ccd15d53807eaa29c44"
  },
  {
    "url": "20230513/index.html",
    "revision": "f1ca8d24ce3b9466d423004ecb547ff2"
  },
  {
    "url": "20230928/index.html",
    "revision": "959c25413c36296e86a7b32373f4c8fe"
  },
  {
    "url": "20231206/index.html",
    "revision": "b2ad84ec84e46db7c7ed1fd4b4577391"
  },
  {
    "url": "20240126/index.html",
    "revision": "c41c0e44279879e33bf16ff34144438b"
  },
  {
    "url": "20240304/index.html",
    "revision": "72694598066edeffc2b1292047b0d1d6"
  },
  {
    "url": "404.html",
    "revision": "ff62aea42883431d2d6dfa2048805230"
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
    "url": "assets/20231206/1.gif",
    "revision": "7e2bcff213f6b4501d9ab0dd5e3e49f8"
  },
  {
    "url": "assets/20240126/1.png",
    "revision": "f28854fed02da061f5bed534eca49fae"
  },
  {
    "url": "assets/20240126/2.png",
    "revision": "6758602a41f13570eba2a7736f71f466"
  },
  {
    "url": "assets/20240126/3.png",
    "revision": "3218ee9986b347fb4ed9a6af0e64d533"
  },
  {
    "url": "assets/20240126/4.gif",
    "revision": "1a0097ac81494c7e88e9d03842ba1be1"
  },
  {
    "url": "assets/20240304/02.png",
    "revision": "81d6403a4057d84e1c34703a0e6b97ee"
  },
  {
    "url": "assets/20240304/03.png",
    "revision": "fe7e9e095690f890663b8cb8246ba323"
  },
  {
    "url": "assets/20240304/04.png",
    "revision": "896b47655267ca60dc6ddb12554233ef"
  },
  {
    "url": "assets/20240304/05.png",
    "revision": "abbf51bf2a5624b637cf053565c50fcb"
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
    "url": "assets/js/11.0cad6e5b.js",
    "revision": "a962a3bffb76ed7b1f2f00e0d33b56af"
  },
  {
    "url": "assets/js/12.c1063d85.js",
    "revision": "2002bb71d2ed33a11968b1d01aad8e37"
  },
  {
    "url": "assets/js/13.f3906a6a.js",
    "revision": "7c326d5c1df995d322c265f058b4a6ec"
  },
  {
    "url": "assets/js/14.3b5a59ef.js",
    "revision": "4fdf06f1818ec8954f692bccc699f154"
  },
  {
    "url": "assets/js/15.70328a95.js",
    "revision": "ad3232f9390d8824d3106730cad22bb3"
  },
  {
    "url": "assets/js/16.04caaf07.js",
    "revision": "7a4d4ff189e9a132b2cc0a7958affa58"
  },
  {
    "url": "assets/js/17.c5a5b962.js",
    "revision": "db296a534aed8b4b7c8770808fffd931"
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
    "url": "assets/js/23.311054de.js",
    "revision": "ae52ec22d8b16f03c568ecd7e51fd46f"
  },
  {
    "url": "assets/js/24.9a584cdf.js",
    "revision": "f61c64af399fdea8e41d14b5146a520b"
  },
  {
    "url": "assets/js/25.88cfe008.js",
    "revision": "a801268d3bb0ae84279c1200de16355d"
  },
  {
    "url": "assets/js/26.e9e81028.js",
    "revision": "6978fc5d92164cb2444b4fa0af1e060a"
  },
  {
    "url": "assets/js/27.8a9b7ccf.js",
    "revision": "1ae3a59f71d171485e310e67345d98cb"
  },
  {
    "url": "assets/js/28.39890126.js",
    "revision": "d62eddfa1a54775966275fcbb431d02a"
  },
  {
    "url": "assets/js/29.2ebef512.js",
    "revision": "e0038b71af7f9f6409166eb091838a7c"
  },
  {
    "url": "assets/js/3.db1300e1.js",
    "revision": "c6d4a584de35a41b06fef400f1d3c4d3"
  },
  {
    "url": "assets/js/30.0b695f17.js",
    "revision": "168e5d798855aaaf1f0bb87a9f263fe6"
  },
  {
    "url": "assets/js/31.419de084.js",
    "revision": "db26e83e362147479658e3ec5027ec4f"
  },
  {
    "url": "assets/js/32.9bbd2bf8.js",
    "revision": "34657ebc59a19a425e1863cd5d5b2d20"
  },
  {
    "url": "assets/js/33.2e3c2c89.js",
    "revision": "c5b965b8eeee9508e48c15b7fb730dfc"
  },
  {
    "url": "assets/js/34.d1a0ff8f.js",
    "revision": "bf34642f7aa7feafe5eca5c745561923"
  },
  {
    "url": "assets/js/35.e1c2afe6.js",
    "revision": "1165e404d4680c2a469450cd1602bd83"
  },
  {
    "url": "assets/js/36.01625add.js",
    "revision": "52d8c18967276ec9445392812ce6bf1e"
  },
  {
    "url": "assets/js/37.9b16cff8.js",
    "revision": "f6118d2426c9feb11cdac927d633486a"
  },
  {
    "url": "assets/js/38.85826116.js",
    "revision": "767b1a0894457c856d25beb94bebc6db"
  },
  {
    "url": "assets/js/39.c149d470.js",
    "revision": "03b05e222fd76decbd9710df884c1cb0"
  },
  {
    "url": "assets/js/4.339729e1.js",
    "revision": "08de63f91865dc542434ded9704e1ed9"
  },
  {
    "url": "assets/js/40.0a419395.js",
    "revision": "38939d3a829b329b60a24985e1af619e"
  },
  {
    "url": "assets/js/41.468e51a1.js",
    "revision": "4210d11447a84f29fe2e9b812947f6b6"
  },
  {
    "url": "assets/js/42.b422c09e.js",
    "revision": "91822e8f483ecfc356507db8835f5f5f"
  },
  {
    "url": "assets/js/43.ba815a5e.js",
    "revision": "210bde02e48b3c1300b65258d0f50750"
  },
  {
    "url": "assets/js/44.86ec4a22.js",
    "revision": "68b381a4f74799e8aa52b40b51261cc1"
  },
  {
    "url": "assets/js/45.11d91176.js",
    "revision": "6be1e4cfa07463b25ef1d85f50e3f5f4"
  },
  {
    "url": "assets/js/46.52f1097d.js",
    "revision": "e166309a780d5e46b84231d932a599a9"
  },
  {
    "url": "assets/js/47.efe7b98a.js",
    "revision": "026b396c3b5f208018d8e5f016ce697c"
  },
  {
    "url": "assets/js/48.3f109e64.js",
    "revision": "8cb1dc1301f2f2fdf1a5909dd6764ee4"
  },
  {
    "url": "assets/js/49.9198f0a2.js",
    "revision": "53f14f8de5f4a699f1f45b9dfdd95ed3"
  },
  {
    "url": "assets/js/5.2202e623.js",
    "revision": "12aba6e2a20561cb65660f97da9d051c"
  },
  {
    "url": "assets/js/50.64e35aa1.js",
    "revision": "bd63eb63365523fc3d7d22bfb05be263"
  },
  {
    "url": "assets/js/51.c8908644.js",
    "revision": "dfe4cf901c957dc02bb47b4ab41f9890"
  },
  {
    "url": "assets/js/52.5d55bb39.js",
    "revision": "057938737889b7db278d0d25a7e01ee8"
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
    "url": "assets/js/app.81841f0a.js",
    "revision": "db9ac8d9a8b7feac479abbd27673a419"
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
    "revision": "62891ff7e9026de7d548f40103605fd8"
  },
  {
    "url": "categories/css/index.html",
    "revision": "054f70719dcc706c8c0952db4262551a"
  },
  {
    "url": "categories/git/index.html",
    "revision": "cecc666f8d1c389e59d17285a88d308e"
  },
  {
    "url": "categories/index.html",
    "revision": "2d2a78677a0013e14d9c7449da36cfa5"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "41d8db901074fe5558d536696157244a"
  },
  {
    "url": "categories/react/index.html",
    "revision": "91aeddad93fb3c944a6a1dcb33f6699e"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "d3a0b965ee7f8fcb973bc978049df2d4"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "967553e6d9ce197afee1d20ca41dbfa7"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "dc502434e31767d6a1f508769b2b9f9d"
  },
  {
    "url": "categories/成长之路/index.html",
    "revision": "f3f1ee3cf4640302dc85f895063ef9c4"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "6a63e2ca0f8338a5051c6bd8147c3c66"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "f1d40a8fdcec1fd01eacd110f4d5a678"
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
    "revision": "80eb3537c44ce4810461b0e229f89971"
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
    "revision": "d548c09ba63cb5325467b1d5de169ac1"
  },
  {
    "url": "tag/git/index.html",
    "revision": "ea4a6896609fc8e5293eff87702668c6"
  },
  {
    "url": "tag/index.html",
    "revision": "987cf16577cf4e7ac5f88e75cecd0397"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "beb78d461f8cc790232c2d4bffa4ee5d"
  },
  {
    "url": "tag/react/index.html",
    "revision": "7c0dc534dee11e96a8c395db4e9f6bc5"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "24f6cabfcc7e839918a98e479b33b31e"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "9cc03f2448d0091757e3b1d9fdbcb148"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "30f2ae758dc3938af0cdd966cffcb94b"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "0c02227f517d60e37ed893ae82d25579"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "8fabf60622aff7ce0111685fcc4189a7"
  },
  {
    "url": "tag/成长之路/index.html",
    "revision": "442cf29ae97e9db11c5090ea0542489f"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "bc4563093ca272c158f6a5134c3c2425"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "e210387685636ce39ff72602dbd043ae"
  },
  {
    "url": "timeline/index.html",
    "revision": "fd9bae2ccd154593f2078a5a944e33ec"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "6f9f5f90a85cf1d7de85e071478f4fbe"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "da01a88f1ba68b71e4623233ece1e260"
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
