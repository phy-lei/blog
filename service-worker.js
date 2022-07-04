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
    "revision": "c413ca8cce17a10148bc1ad933e9a3fa"
  },
  {
    "url": "20200526/index.html",
    "revision": "eacf09aed153c414da0d6a36ee289da4"
  },
  {
    "url": "20200528/index.html",
    "revision": "67e9e1fe7b8785f44bb503345a3f6a95"
  },
  {
    "url": "20200529/index.html",
    "revision": "3db110ff055c7a6a4c04cda463be6af3"
  },
  {
    "url": "20200601/index.html",
    "revision": "cc18509ecd0fc5708c57ba73a26f1f96"
  },
  {
    "url": "20200602/index.html",
    "revision": "77c7dec5577089097ca882d3fba9e569"
  },
  {
    "url": "20200604/index.html",
    "revision": "f562384ca225162bcb3fbcd6545ba844"
  },
  {
    "url": "20200612/index.html",
    "revision": "8582d6f043e27829dbcf726027b3693e"
  },
  {
    "url": "20200720/index.html",
    "revision": "ec48cca0d984f504704e13297af96800"
  },
  {
    "url": "20200804/index.html",
    "revision": "3a23fc8020ad80ebe5891e0b2028395a"
  },
  {
    "url": "20200812/index.html",
    "revision": "02b6783c86d6bccdba172a6f0d2c7df4"
  },
  {
    "url": "20201013/index.html",
    "revision": "5a3d45b590acc1f7bf8959ad2a0326bb"
  },
  {
    "url": "20210112/index.html",
    "revision": "a737892bbddd094b6a987f7f662f6f1c"
  },
  {
    "url": "20210123/index.html",
    "revision": "ba898182405ff32c851606b160fc7d43"
  },
  {
    "url": "20210129/index.html",
    "revision": "4cc09b7d3bb4e79cd8cc34423f5e01d9"
  },
  {
    "url": "20210327/index.html",
    "revision": "902fe3ec699ee4c10fe9412f43d4732a"
  },
  {
    "url": "20210502/index.html",
    "revision": "f1997cd908da82090dbfe2aa1d5ea364"
  },
  {
    "url": "20210507_01/index.html",
    "revision": "b2adca46b9c4dae010d9897a50d89328"
  },
  {
    "url": "20210507_02/index.html",
    "revision": "657d3d0d26c47798e7497bc113029876"
  },
  {
    "url": "20210508/index.html",
    "revision": "0fda110ce74a7464a141e8a2adbed8f9"
  },
  {
    "url": "20210510/index.html",
    "revision": "28d39f08d55ebcb6a9e902a092e24fcb"
  },
  {
    "url": "20210703/index.html",
    "revision": "2fee585d507f7f83bbd85e681db288c8"
  },
  {
    "url": "20210809/index.html",
    "revision": "b8e0b013ce7237417179b4ba4cd6b749"
  },
  {
    "url": "20210901/index.html",
    "revision": "a8cb32ef30254a585cd7111aa61ffaea"
  },
  {
    "url": "20211124/index.html",
    "revision": "52d69e8572798c0eedded1a8ba08294f"
  },
  {
    "url": "20211210/index.html",
    "revision": "646ef5943f4d441b72e4c9a6c6c1bc84"
  },
  {
    "url": "20220212/index.html",
    "revision": "ac29c756b1fb10bad7a704ad4e13e3c7"
  },
  {
    "url": "20220513/index.html",
    "revision": "684b028746c342e8566a2a8262ea8262"
  },
  {
    "url": "20220530/index.html",
    "revision": "2da3b967fd71218b08fba7eb048c2ae3"
  },
  {
    "url": "404.html",
    "revision": "b7ba931f9dde7d1bb96bfe785d1fafd7"
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
    "url": "assets/js/app.0cc457fe.js",
    "revision": "af12e55a26e62a39431ef9b4b81a6213"
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
    "revision": "3b0084f8277fc1623e7d71b0c42c8c32"
  },
  {
    "url": "categories/css/index.html",
    "revision": "66bf01938438a298a977f269b8a7a6ce"
  },
  {
    "url": "categories/git/index.html",
    "revision": "d696313491cc02b7f9e2c5f3ed26f19e"
  },
  {
    "url": "categories/index.html",
    "revision": "d4d574fb0486c5fc6e460a61b05976ef"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "c775b9da7d446d0619b5592e713d9ac8"
  },
  {
    "url": "categories/react/index.html",
    "revision": "52edacf1b5ad062fbf068918ef67a08c"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "8b0362c5bb2c6653eb0b43a07f3682ae"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "4efae525b52cc22aeb9ccf027b008688"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "4ca82a8fd1d86e97e6fc68db33532ca0"
  },
  {
    "url": "categories/成长之路/index.html",
    "revision": "a219e41928aa80ac5779dbbc3f70fdc8"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "4b927f3f0bd2efa3bc04bc8a8438ceab"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "c83ed3f80390fea719eec0e3a7d12501"
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
    "revision": "720651119d363599e8877c9ea694b2a4"
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
    "revision": "cfffa3bdff17096dafb352ab65dbf421"
  },
  {
    "url": "tag/git/index.html",
    "revision": "800bc242520ae3c9a8cd9552094482aa"
  },
  {
    "url": "tag/index.html",
    "revision": "c143c4d39f1e5d9efbecd94f0d71b9be"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "d4d18b01b10664f394e11e7caad68b83"
  },
  {
    "url": "tag/react/index.html",
    "revision": "f62229f688a3e818c12ffe8a55c00867"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "61008c144c4b5a10862b6e427d4561c2"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "18453d6ed9012c9b7c8af7db13d3b23f"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "28188d7bec7dd038678dd370e1a2e27e"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "5e0b947b08e897456ed168f207a2f555"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "a8f3cd92139396ce802a8f68565aa85a"
  },
  {
    "url": "tag/成长之路/index.html",
    "revision": "caf65a143734560944731d42b9984869"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "5b09b6a2576adc9f0593b8873b0c4b94"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "83c3b5742505bce44c09d0b0f2249f57"
  },
  {
    "url": "timeline/index.html",
    "revision": "83c9b7b30e9629bbb0a3e2bda311b2f4"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "27e96bdebea6a733a437b109e62f38b3"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "aef480749afece6808cfa13dedcf11b4"
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
