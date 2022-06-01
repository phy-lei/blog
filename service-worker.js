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
    "revision": "d9b7d7156d595c51a3f5ebc214e1176c"
  },
  {
    "url": "20200526/index.html",
    "revision": "182098ffb9732242dde932166e4ccd2f"
  },
  {
    "url": "20200528/index.html",
    "revision": "fec9a4155355080f60fda3b2e0213fe1"
  },
  {
    "url": "20200529/index.html",
    "revision": "c50510326bafd83f6b48d04f0d21b66b"
  },
  {
    "url": "20200601/index.html",
    "revision": "7000999472be2d5e6e5c4bd39b600216"
  },
  {
    "url": "20200602/index.html",
    "revision": "aa5bd639405d82e3fa8ff91a6d8de687"
  },
  {
    "url": "20200604/index.html",
    "revision": "bf442e0024a48bb35343768d51069020"
  },
  {
    "url": "20200612/index.html",
    "revision": "250b8d14d77c327f572ea50525c0f836"
  },
  {
    "url": "20200720/index.html",
    "revision": "255cb4d0cee5ce4c8fba9ed33e2bcdca"
  },
  {
    "url": "20200804/index.html",
    "revision": "4b6c5fdf044fdbd1a41778e58fd25bcb"
  },
  {
    "url": "20200812/index.html",
    "revision": "149dff0464573fc79b9cf1388314bd19"
  },
  {
    "url": "20201013/index.html",
    "revision": "f87277a11153ef12c01429b171605b13"
  },
  {
    "url": "20210112/index.html",
    "revision": "bfea02b78d0bca043a17fd061615954e"
  },
  {
    "url": "20210123/index.html",
    "revision": "a55cb1d63384e4a128b92e98c05171c3"
  },
  {
    "url": "20210129/index.html",
    "revision": "407aacdfad86ab2ff8012c0e07e8dcdf"
  },
  {
    "url": "20210327/index.html",
    "revision": "fa940669d3c452bf4efc9b95f0a2ed9e"
  },
  {
    "url": "20210502/index.html",
    "revision": "70cb4903d00eee84aca41d1ded5b7fa6"
  },
  {
    "url": "20210507_01/index.html",
    "revision": "f1bfea938d4230a5774b8f6b191644e6"
  },
  {
    "url": "20210507_02/index.html",
    "revision": "11fae0eec4b82ffcb73dea9cf10cb172"
  },
  {
    "url": "20210508/index.html",
    "revision": "799c1ef651731c49f543d828cf1a6914"
  },
  {
    "url": "20210510/index.html",
    "revision": "9c3e65a9b3e2eadeedc086b1e45ba3da"
  },
  {
    "url": "20210703/index.html",
    "revision": "84858eb8bb4de274ba8186433df331bb"
  },
  {
    "url": "20210809/index.html",
    "revision": "a6d75cf7fe30c0bbcf8bc78905df0e4b"
  },
  {
    "url": "20210901/index.html",
    "revision": "d63a16deec08c75516f3ec5ee51d06e9"
  },
  {
    "url": "20211124/index.html",
    "revision": "6c2ad58d7693f1b32796955ec7a18b65"
  },
  {
    "url": "20211210/index.html",
    "revision": "2c0a0dcca985590603b74b19cac63a4b"
  },
  {
    "url": "20220212/index.html",
    "revision": "c7ab4e7ee94bbec05f5641f420ca0a31"
  },
  {
    "url": "20220513/index.html",
    "revision": "6d2fab98021cfa9d697f63adcb6912db"
  },
  {
    "url": "20220530/index.html",
    "revision": "3734c5a709ba5a0998c16eaf1d6479a9"
  },
  {
    "url": "404.html",
    "revision": "4810e6d207af16fc66a375d542b91c32"
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
    "url": "assets/js/11.2a2a67bb.js",
    "revision": "1a88baac88333d497dfa0d6a598c6baf"
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
    "url": "assets/js/25.9fbce0e0.js",
    "revision": "7b7853660a4e24ef8cfc8ead7ee4c356"
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
    "url": "assets/js/36.272e24c3.js",
    "revision": "b5e0e2a4bef7646dacb5c432d1b2d7fc"
  },
  {
    "url": "assets/js/37.dfb1958a.js",
    "revision": "de16da71cdf188a074fb4fee0083b85f"
  },
  {
    "url": "assets/js/38.b3bbcdc2.js",
    "revision": "cf88fef385faefbc164073bd4fd9d7af"
  },
  {
    "url": "assets/js/39.7fba4280.js",
    "revision": "cc580573271b91845b9c863297e1a71c"
  },
  {
    "url": "assets/js/4.d0f4a55d.js",
    "revision": "08de63f91865dc542434ded9704e1ed9"
  },
  {
    "url": "assets/js/40.4b467345.js",
    "revision": "96050ea4d6b8c5188d430f89a104241c"
  },
  {
    "url": "assets/js/41.b4135f15.js",
    "revision": "ce263dde5c11040b99352bda100a6101"
  },
  {
    "url": "assets/js/42.0e09299c.js",
    "revision": "2a886c1007b1e14c98d63615292ada0c"
  },
  {
    "url": "assets/js/43.0f9ba8e2.js",
    "revision": "d4a8a75c95016d59703fedcf03ec573c"
  },
  {
    "url": "assets/js/44.55b424f6.js",
    "revision": "b49148f3986c594b49809d9b5b28ae2c"
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
    "url": "assets/js/app.fd9b0749.js",
    "revision": "4f15a6790b0318ec543b664199712e76"
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
    "revision": "c885f95772fa1d1bf888d9ce2ba062f8"
  },
  {
    "url": "categories/css/index.html",
    "revision": "2411412ed48ddbc6a08bcd1796e4350d"
  },
  {
    "url": "categories/git/index.html",
    "revision": "70682721811004069467b8d93a50bc9c"
  },
  {
    "url": "categories/index.html",
    "revision": "372997ff16c3068123cb548df2a21fab"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "50f76621742140da1ee6e68a3693f541"
  },
  {
    "url": "categories/react/index.html",
    "revision": "112f6d08e85c829ebd126f334cfa95ca"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "7d0f7bf8511ba174330d4ff073973fe6"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "24ed0dcb4e86b1a197f522e3e9a6e313"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "58f43d2896e5a134ed3a127134f02d4f"
  },
  {
    "url": "categories/成长之路/index.html",
    "revision": "41d763fc208f374f325ef5a52e146b51"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "056d0eeeb15c8c598a6b296f6999117a"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "533ac7ad67c37a2d7f25c2b80ae945e1"
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
    "revision": "1b0a450d9d9e0dc082652bc22f2b5b76"
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
    "revision": "5d40ae8653006d06f06a80f29e2245fe"
  },
  {
    "url": "tag/git/index.html",
    "revision": "3bb9891affe29ce7a91a9ff881cdbfaa"
  },
  {
    "url": "tag/index.html",
    "revision": "ff4fa8eb685645b8ee1d496e00b25634"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "f04b70b9931ab923ce771651fe6460f9"
  },
  {
    "url": "tag/react/index.html",
    "revision": "5f476e298cf398cc630f4ae544cf7f25"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "66d28bfc7e008a2b7edaf8fabedcc688"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "83da5a36d10e241ab981f46895ee6a51"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "727c1c6243b20d291dd655af31a6ccc8"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "a66f542a64d41acf6258e71e00e0787c"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "a0cbcfa760a3578bda6ee9ce34c0f554"
  },
  {
    "url": "tag/成长之路/index.html",
    "revision": "b9bf319375cb3f43001448c0824d0262"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "ee89a55006052d93a849241d5a0f59c1"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "877d764b9e79e42f5078967fa4c919d2"
  },
  {
    "url": "timeline/index.html",
    "revision": "3508231a2c1b18e38c502848dde48253"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "b5e097f4e4aa8ddea4ac28fdcc79dfc6"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "253b32e18cda5b710a839213e73788b8"
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
