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
    "revision": "b7acdd4408645c9dc90c064a0296528f"
  },
  {
    "url": "20200526/index.html",
    "revision": "b089003c60f684772666f4c53134f630"
  },
  {
    "url": "20200528/index.html",
    "revision": "b9c1129bc649bf84ad99a9d3a98a5fc4"
  },
  {
    "url": "20200529/index.html",
    "revision": "e6df1d38ac37009c081cb7eadcc48c72"
  },
  {
    "url": "20200601/index.html",
    "revision": "ad1752ac76b4bbae72d2be61929cb0c6"
  },
  {
    "url": "20200602/index.html",
    "revision": "52b0f8363329f0e6e98ea710bb91a276"
  },
  {
    "url": "20200604/index.html",
    "revision": "7460905f0662864b4aaea4adad30ac78"
  },
  {
    "url": "20200612/index.html",
    "revision": "15f445fd0ff6c5dc0a4134d9be8d0330"
  },
  {
    "url": "20200720/index.html",
    "revision": "19945a52f10d782b98c9646785432d85"
  },
  {
    "url": "20200804/index.html",
    "revision": "7c4ba8a425f8fd883207d25dbfa379e2"
  },
  {
    "url": "20200812/index.html",
    "revision": "4584bb03381467026646daf22e708f86"
  },
  {
    "url": "20201013/index.html",
    "revision": "ec1500620671e3ef12b70c915395283c"
  },
  {
    "url": "20210112/index.html",
    "revision": "c759338bb4ee95d9b6f0466be9523527"
  },
  {
    "url": "20210123/index.html",
    "revision": "ca15708023a956f7f6c03fce026f8978"
  },
  {
    "url": "20210129/index.html",
    "revision": "6e1a614f2bd31ec92ee6ca480330f062"
  },
  {
    "url": "20210327/index.html",
    "revision": "3def2b1a5ff402a0c99eee46263ef70a"
  },
  {
    "url": "20210502/index.html",
    "revision": "997431ff04cdcaf3dd2690d1b2fa18cd"
  },
  {
    "url": "20210507_01/index.html",
    "revision": "0c74c92ade55b99c1650eafd775e19db"
  },
  {
    "url": "20210507_02/index.html",
    "revision": "9c10bf82fa7a91d479938b4f27c0cb42"
  },
  {
    "url": "20210508/index.html",
    "revision": "03078e8af634c84fd7d9f15acdec5795"
  },
  {
    "url": "20210510/index.html",
    "revision": "51864872390c6a68dfac82ab200a0f8d"
  },
  {
    "url": "20210703/index.html",
    "revision": "1b6bb94b01ec97d696c3bdcaa7fb7b4d"
  },
  {
    "url": "20210809/index.html",
    "revision": "71b3580c87eddb99cb8c57959719ce86"
  },
  {
    "url": "20210901/index.html",
    "revision": "e45bbb47973f0cd51bf80308d787b73e"
  },
  {
    "url": "20211124/index.html",
    "revision": "f42a3d185ae5fb8be2a02ef0d4cc94e2"
  },
  {
    "url": "20211210/index.html",
    "revision": "069b9785999389dc877c0f3897b6340f"
  },
  {
    "url": "20220212/index.html",
    "revision": "8ec32e5c7c27f3cb59a25b61ffc82221"
  },
  {
    "url": "20220513/index.html",
    "revision": "6ab558a4298db93e45e6d4a2231040f6"
  },
  {
    "url": "20220530/index.html",
    "revision": "346bb7e72958b7ecc2d1a5c3c561baab"
  },
  {
    "url": "20220704/index.html",
    "revision": "ececf1d8bbc0c9e8c2fc3f903a7fe137"
  },
  {
    "url": "20220804/index.html",
    "revision": "4a8c85d2f3e859ab0a924d77c8f16c6f"
  },
  {
    "url": "20221125/index.html",
    "revision": "6c5a47ccc82247f4281267753929964f"
  },
  {
    "url": "20230513/index.html",
    "revision": "60433328014b3da5900d6b45069d168e"
  },
  {
    "url": "20230928/index.html",
    "revision": "3e8216569bdcb7e992c1996501f3ff08"
  },
  {
    "url": "20231206/index.html",
    "revision": "73a7c1613a7adfde458f47c1b38f860f"
  },
  {
    "url": "404.html",
    "revision": "1c3646e403997d242c5ce90f967fb8a8"
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
    "url": "assets/js/11.95a80bb6.js",
    "revision": "cc25d8d2cdd79b15bdd8e7fed4436527"
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
    "url": "assets/js/15.70328a95.js",
    "revision": "ad3232f9390d8824d3106730cad22bb3"
  },
  {
    "url": "assets/js/16.4fa23831.js",
    "revision": "8d9139ea3477f202466207aab13faaed"
  },
  {
    "url": "assets/js/17.7b5fbc7a.js",
    "revision": "da5ec2163577d3b8448096807265885d"
  },
  {
    "url": "assets/js/18.acf619b1.js",
    "revision": "9016bdb4a6bfc7bdcc68eead1d1b574d"
  },
  {
    "url": "assets/js/19.7dd95545.js",
    "revision": "564120e440052f945bab2d7ab860c38e"
  },
  {
    "url": "assets/js/20.302198e6.js",
    "revision": "9ca93bf75d7236a8dbeb3e7db55acbcc"
  },
  {
    "url": "assets/js/21.c2b528ce.js",
    "revision": "61bf8ae16785cf2ff41ba47f4cd46de1"
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
    "url": "assets/js/29.f7f6a9fa.js",
    "revision": "6eb7727dacdd8f18c9c41d551fe39c63"
  },
  {
    "url": "assets/js/3.db1300e1.js",
    "revision": "c6d4a584de35a41b06fef400f1d3c4d3"
  },
  {
    "url": "assets/js/30.ed52addf.js",
    "revision": "71336ac709fd6f5d68e405cc57c8173b"
  },
  {
    "url": "assets/js/31.c8f9b712.js",
    "revision": "719131aa93d4f48b4e1c54c4ced5eb49"
  },
  {
    "url": "assets/js/32.d3eec213.js",
    "revision": "57e4f7650e6b3b40044655d5741be60e"
  },
  {
    "url": "assets/js/33.2d7034b4.js",
    "revision": "b057204e274bd0c03a55f5e1379d86f4"
  },
  {
    "url": "assets/js/34.d1a0ff8f.js",
    "revision": "bf34642f7aa7feafe5eca5c745561923"
  },
  {
    "url": "assets/js/35.b5cb965e.js",
    "revision": "51319107e948cd5aa4e48ad9a119c74b"
  },
  {
    "url": "assets/js/36.bf54e900.js",
    "revision": "e7328031a7380003dc41c48efed7372e"
  },
  {
    "url": "assets/js/37.45b08437.js",
    "revision": "3723974b67d0b2a5850ef4bca5c4eba8"
  },
  {
    "url": "assets/js/38.4b3793dc.js",
    "revision": "2ad5e8dd31532a62c4c0677dfe8f8532"
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
    "url": "assets/js/42.47021439.js",
    "revision": "4bb1a94552186e694d77e488903998f6"
  },
  {
    "url": "assets/js/43.6e660ac6.js",
    "revision": "4eedf7e33611c1a901d38c30cb8765b5"
  },
  {
    "url": "assets/js/44.47a35575.js",
    "revision": "f71abead3ad9459a87bc8e17e531718a"
  },
  {
    "url": "assets/js/45.1c7233a3.js",
    "revision": "3119b4dbdf2b456172f589881af78f20"
  },
  {
    "url": "assets/js/46.e8c60a66.js",
    "revision": "62d536e4fa608af1f5279b5ff11959a6"
  },
  {
    "url": "assets/js/47.ac34752c.js",
    "revision": "ec9abfeb29754bbc59829caffa436a2f"
  },
  {
    "url": "assets/js/48.f59b2ec3.js",
    "revision": "6a1d72f2edc4fdb8c1799b82f9b2691b"
  },
  {
    "url": "assets/js/49.906c5c13.js",
    "revision": "388b0209e089d66b987a14001e8e003c"
  },
  {
    "url": "assets/js/5.2202e623.js",
    "revision": "12aba6e2a20561cb65660f97da9d051c"
  },
  {
    "url": "assets/js/50.3a4a3a36.js",
    "revision": "d168d7bd2977e6a02b9508a7052e9e4e"
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
    "url": "assets/js/app.721b2db8.js",
    "revision": "2fa4683a5b43ed2ee626a3247f17eb49"
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
    "revision": "fc1c3660ebf680e18088ecd50f0cdb2a"
  },
  {
    "url": "categories/css/index.html",
    "revision": "03579602c4ef85a513d904b6cdbcb869"
  },
  {
    "url": "categories/git/index.html",
    "revision": "dead536795c2097884954b6c523642c2"
  },
  {
    "url": "categories/index.html",
    "revision": "999a03f1b2fd3516d90b6d185f6b16f4"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "64de2a54026bdbe92deb3140d045a2a9"
  },
  {
    "url": "categories/react/index.html",
    "revision": "e34730c247a0367159fa3cee9b55ee12"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "0fd616c5ed204103ce1710c7f1eb56cb"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "9c29a9e48800a17c8bd7e70990c78925"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "88a32f3b8108b8576a0580949a242376"
  },
  {
    "url": "categories/成长之路/index.html",
    "revision": "c879b0f6ec313bdf5f1c5098e1771b16"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "591bbe4027eb9f20bac02cb4aa11cba2"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "2405100170aeeba8f7dc611bf176302d"
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
    "revision": "f28fcc6f8b33f9d5dcbde7aa94899472"
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
    "revision": "7d1ff84dbcae13b505217b343f6e9f5e"
  },
  {
    "url": "tag/git/index.html",
    "revision": "73723c1f7867ee7ecdeee9047e829287"
  },
  {
    "url": "tag/index.html",
    "revision": "7824116ac09ea7ebad1942b6b6aa7a51"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "9d27af107b31dbabd88c757614477cac"
  },
  {
    "url": "tag/react/index.html",
    "revision": "4aeb88e5efec37c13fb045d9f71e4094"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "0ce59b782d4e308bbc664d51dc55ca93"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "c078e8340b0c2fe84a7bddc1c69c7eaf"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "3c06e005c03f0f62c5b17ec27fd2c2d0"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "385a783d79d13e8c6af6392b1e6d9b09"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "ae20db3c514e0f22ba7e7a3d402d8ab2"
  },
  {
    "url": "tag/成长之路/index.html",
    "revision": "6feea289cb6bcf6d8ed5c13cee87028e"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "e778666ffee0941dfe4ba172df6f1021"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "841cd3187da1d5775cd8235decf3f8fd"
  },
  {
    "url": "timeline/index.html",
    "revision": "f7cf231ca45a3b3d5448f2685d28c333"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "ca5060da9bc605e8ed8179541740d25e"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "b2892783d0441374704342d4a56d7511"
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
