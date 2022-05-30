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
    "revision": "0bb48bf69dbf837cae1ebbd2079eecd2"
  },
  {
    "url": "20200526/index.html",
    "revision": "ae5461d4b88245ce70299dbfccb80fb2"
  },
  {
    "url": "20200528/index.html",
    "revision": "ccfd7d75c1669cd133e4b3de22d341be"
  },
  {
    "url": "20200529/index.html",
    "revision": "4b1dedfca33eadb8af8c32b6a7c2bd07"
  },
  {
    "url": "20200601/index.html",
    "revision": "198717397885479a0cf0cd453e57b994"
  },
  {
    "url": "20200602/index.html",
    "revision": "9bf4ac257ba4358825a4c0dcaeaf98c1"
  },
  {
    "url": "20200604/index.html",
    "revision": "53902b1ea03ceae8e9ccd6a31ae75c8a"
  },
  {
    "url": "20200612/index.html",
    "revision": "aa9ffcab52043b3a392a74631f9c9487"
  },
  {
    "url": "20200720/index.html",
    "revision": "6c1067836908375e76bf67552332f6aa"
  },
  {
    "url": "20200804/index.html",
    "revision": "136bf79ab48f59910a7c6b24229720d0"
  },
  {
    "url": "20200812/index.html",
    "revision": "ec363a18328d21b753fa774eeefb3c1d"
  },
  {
    "url": "20201013/index.html",
    "revision": "445603dcbf2d6a3ac52130c81babd0bf"
  },
  {
    "url": "20210112/index.html",
    "revision": "c6dbad607fb6255b3283436857d2df72"
  },
  {
    "url": "20210123/index.html",
    "revision": "b7ee7a3da0c916140cfc3f4ea62d4003"
  },
  {
    "url": "20210129/index.html",
    "revision": "dc2890d3b11e219d6fa255a37689abd6"
  },
  {
    "url": "20210327/index.html",
    "revision": "94a5f316e0f7de3a1f0ca8b25c56176f"
  },
  {
    "url": "20210502/index.html",
    "revision": "5bcf7f74be4ea49fb7e8f718fe6323dc"
  },
  {
    "url": "20210507_01/index.html",
    "revision": "20a91558c0ad329de1aecdcf9a0172d5"
  },
  {
    "url": "20210507_02/index.html",
    "revision": "9d1e12428ae0cc4c8a4a1597e41e2387"
  },
  {
    "url": "20210508/index.html",
    "revision": "67cd376351387ece6dbd34448f9086b4"
  },
  {
    "url": "20210510/index.html",
    "revision": "0783f8bb6b9dfcf0cbcf1f65a6871fd0"
  },
  {
    "url": "20210703/index.html",
    "revision": "67f38ded271846cfdf4ca33597b2c995"
  },
  {
    "url": "20210809/index.html",
    "revision": "b18cbc6b5355609ab440975c5e84b7ad"
  },
  {
    "url": "20210901/index.html",
    "revision": "7b4779140b6c36fe6b9932a6787b2f79"
  },
  {
    "url": "20211124/index.html",
    "revision": "693c9ea346b0735adb890f49477b2e98"
  },
  {
    "url": "20211210/index.html",
    "revision": "aa893a89c13681aed415bd4cbb7dcaf2"
  },
  {
    "url": "20220212/index.html",
    "revision": "e62859a6a0d5b8bff188b76904e72350"
  },
  {
    "url": "20220513/index.html",
    "revision": "19fb5b36cc41e91d8fabdf6b4a468cd1"
  },
  {
    "url": "20220530/index.html",
    "revision": "4b7887c68eb408bba4af75b03c2d9339"
  },
  {
    "url": "404.html",
    "revision": "c01ec76748c3f575358edfb1640d3553"
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
    "url": "assets/js/18.1e300c14.js",
    "revision": "2bc56db72e7c12b8be2760c0725680ba"
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
    "url": "assets/js/app.ffead4bd.js",
    "revision": "e8c67faef7331aa1c3ef554fa520b439"
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
    "revision": "c340e72d9d2147a5fc26df2d4ba1403b"
  },
  {
    "url": "categories/css/index.html",
    "revision": "c6ad8ce43795c5978f3316c8dd2a0547"
  },
  {
    "url": "categories/git/index.html",
    "revision": "973ee6affb398dfb99aa267f60bbd44c"
  },
  {
    "url": "categories/index.html",
    "revision": "551176c4be037826279ae805fedbe400"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "20ba178dec48af827711dc52842c8c6c"
  },
  {
    "url": "categories/react/index.html",
    "revision": "be08fe22d2475d2c945af099372e0a3c"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "912369978d4892ab121004e692ea7de4"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "f5851388b81e531bdc7212586c882a58"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "78c588d6a709abfe2ad6ab8bfab73fe7"
  },
  {
    "url": "categories/成长之路/index.html",
    "revision": "dfdfa53dc9865f568ddb51e4e3d8d8e4"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "65de769a5793c5127e8ed1a6ad6f6c1f"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "412d7a1fff9005c1c5480345e612fb1a"
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
    "revision": "995373d9b3af93843d87a80159dea493"
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
    "revision": "c74c5f1ca9441c1d8e381e0e778b819f"
  },
  {
    "url": "tag/git/index.html",
    "revision": "04df4e7fa4dcb2ce84193bd3bb38d59a"
  },
  {
    "url": "tag/index.html",
    "revision": "d4f64fd57f3ff6ca1f80484e1b4b7e56"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "772f84dda8de8e13ffa6cf5026850d90"
  },
  {
    "url": "tag/react/index.html",
    "revision": "b2461479ef788f7c06d6ff9ebf359635"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "5edf848be21d20c4acd7efaa95af1a16"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "4ab24135992db5726b2f8d588bf7d07d"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "9f5f858de9eb3b80bbd91a00990389df"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "8a8e4ae1b3bb0ee20ed67971f9312967"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "0f11b585ac79d8870f75665611be472d"
  },
  {
    "url": "tag/成长之路/index.html",
    "revision": "36871bb4249ccd2d996f50640411ab6b"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "ece537bf2a529d19e976446b776401e6"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "5c3241b533f613e99ffe03639ec6c6b3"
  },
  {
    "url": "timeline/index.html",
    "revision": "a1771a493961486653f646242fff4992"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "55ed5eaf6528512da4f97e3b0d9a5a04"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "0578cda1cb5e59de2ba3aa7d321d0739"
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
