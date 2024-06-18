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
    "revision": "642de6bd59397f2f157a99d2027152ba"
  },
  {
    "url": "20200526/index.html",
    "revision": "d23429b624fb3919767902a5a63641f9"
  },
  {
    "url": "20200528/index.html",
    "revision": "32dfd23375837d38ba16a24f48ac6a6c"
  },
  {
    "url": "20200529/index.html",
    "revision": "5372af4bf8e857000ee80acec392f364"
  },
  {
    "url": "20200601/index.html",
    "revision": "6edc9273ddba28008b5a343031b2f98c"
  },
  {
    "url": "20200602/index.html",
    "revision": "d6d73265ba8590880f6f8fd3b5399017"
  },
  {
    "url": "20200604/index.html",
    "revision": "a0a382cccb8454c22a1f1a38f7d8a546"
  },
  {
    "url": "20200612/index.html",
    "revision": "75ef07180b6302267b000bd4288b7575"
  },
  {
    "url": "20200720/index.html",
    "revision": "e7c46d13273d5edf83a35c33ebb87b03"
  },
  {
    "url": "20200804/index.html",
    "revision": "e39ddf05615a96f4c0b3fdee5c50b6c4"
  },
  {
    "url": "20200812/index.html",
    "revision": "015c31b65ea538bc8af21cf1bf73623c"
  },
  {
    "url": "20201013/index.html",
    "revision": "df452ef0b2114518628145427193c45b"
  },
  {
    "url": "20210112/index.html",
    "revision": "1cdb4f84a3afbc8eb0e99bde8f280560"
  },
  {
    "url": "20210123/index.html",
    "revision": "69c8b506f0d42c17324dcbb320be4285"
  },
  {
    "url": "20210129/index.html",
    "revision": "25c6d99636e109b9291a5cc0592660d8"
  },
  {
    "url": "20210327/index.html",
    "revision": "96ee13116cf8049ce353cf893c32283d"
  },
  {
    "url": "20210502/index.html",
    "revision": "667595772e630b05ec82b89baf013956"
  },
  {
    "url": "20210507_01/index.html",
    "revision": "d87872568d3fd9556b2f7d1aaf9c85d6"
  },
  {
    "url": "20210507_02/index.html",
    "revision": "0f42a7fa6af142b60aaeb31f4e097306"
  },
  {
    "url": "20210508/index.html",
    "revision": "0574b1124948a126d9824f1e369584f3"
  },
  {
    "url": "20210510/index.html",
    "revision": "54e0ea9166a1a95bf64ea94a3cd65245"
  },
  {
    "url": "20210703/index.html",
    "revision": "d0b6484edf0518c15b38f112cc97dc93"
  },
  {
    "url": "20210809/index.html",
    "revision": "73ac1562379205d05c086dd93782d49e"
  },
  {
    "url": "20210901/index.html",
    "revision": "435712803a3aaf46b72400aeefae8f23"
  },
  {
    "url": "20211124/index.html",
    "revision": "64e4eb87044f9013dd1dd8d665caf817"
  },
  {
    "url": "20211210/index.html",
    "revision": "b8da18dc06ab7dbbe3182b9d9390afc8"
  },
  {
    "url": "20220212/index.html",
    "revision": "e4a386c797452e622e41e2dbcdba7da9"
  },
  {
    "url": "20220513/index.html",
    "revision": "b4deb14a2f9b949b19825d685a4cb9e3"
  },
  {
    "url": "20220530/index.html",
    "revision": "8507de5454ded65cf822c04afa8299cf"
  },
  {
    "url": "20220704/index.html",
    "revision": "efb9b27245472b6bc8098a4999d457db"
  },
  {
    "url": "20220804/index.html",
    "revision": "6f3abdd2b4f2a0d6cf41cf880b3b7f00"
  },
  {
    "url": "20221125/index.html",
    "revision": "1f38c3129086b39d0ad953a72bab2864"
  },
  {
    "url": "20230513/index.html",
    "revision": "78d96014e65cf449d7f888f099752137"
  },
  {
    "url": "20230928/index.html",
    "revision": "ac0da0537ff6fb395a95ea96eb23e810"
  },
  {
    "url": "20231206/index.html",
    "revision": "32a45bb008c0ba387e15e87afa86ae89"
  },
  {
    "url": "20240126/index.html",
    "revision": "e143a6068ec1223b62767082168124b7"
  },
  {
    "url": "20240304/index.html",
    "revision": "03f9d3b0a743acd0a32c39bee1f32ae7"
  },
  {
    "url": "20240327/index.html",
    "revision": "9e1c8a80f784cd21289f626141bd6ef4"
  },
  {
    "url": "20240419/index.html",
    "revision": "7f888701648802b225198874f3c96e19"
  },
  {
    "url": "404.html",
    "revision": "da07be6a549f4548d4e802be4cf60aa0"
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
    "url": "assets/20240327/01.png",
    "revision": "1ee0edb3734bb8759a644fa575b1f442"
  },
  {
    "url": "assets/20240419/01.png",
    "revision": "7bc867842f00ef6271ca053bf2a99060"
  },
  {
    "url": "assets/20240419/02.png",
    "revision": "9771301cdaa404fad49aea077c303793"
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
    "url": "assets/js/11.2bd0d46c.js",
    "revision": "9a63a3a4a2d3c297299c641401c1622e"
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
    "url": "assets/js/15.6f53b053.js",
    "revision": "9b23d0d06feddcc2eb8f99c4a3a0c47a"
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
    "url": "assets/js/18.a9138cde.js",
    "revision": "ed0795a546b11097e67ac9468f64d9d1"
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
    "url": "assets/js/22.aa3443c1.js",
    "revision": "66eb9bfb3aa51166e41a6aecc8694fa9"
  },
  {
    "url": "assets/js/23.bab65398.js",
    "revision": "684eaa524a7998112f31930867b1e6f1"
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
    "url": "assets/js/41.bcde4f3b.js",
    "revision": "c285e6b79cca5a3bdbc2fc1e002dedcc"
  },
  {
    "url": "assets/js/42.7b3a29a1.js",
    "revision": "e673755878efd0c0e088a9054b0f00e2"
  },
  {
    "url": "assets/js/43.a48600ee.js",
    "revision": "4dc1baecef883d85f8354f5d2d799b1f"
  },
  {
    "url": "assets/js/44.fb24dbfc.js",
    "revision": "942c71ce91e9834c3418a70058047ea6"
  },
  {
    "url": "assets/js/45.37c4d8b7.js",
    "revision": "e9f4ae4f65bb49b9c8b3af9d9da0b7a0"
  },
  {
    "url": "assets/js/46.3a33d0a3.js",
    "revision": "2324fd5a8f264bacd2de32e78c6a9a3b"
  },
  {
    "url": "assets/js/47.1b8689a0.js",
    "revision": "85193eba9057ba7e6056e7a38782c1f1"
  },
  {
    "url": "assets/js/48.9bb4de33.js",
    "revision": "6ab0536b6a46d75cfc9411a7735ae054"
  },
  {
    "url": "assets/js/49.4c2394e8.js",
    "revision": "93f0bad08a96a7abf6b34c9ae4f57f07"
  },
  {
    "url": "assets/js/5.2202e623.js",
    "revision": "12aba6e2a20561cb65660f97da9d051c"
  },
  {
    "url": "assets/js/50.4d5610e8.js",
    "revision": "6a4a1702b6e77b8a6123eb941c460f28"
  },
  {
    "url": "assets/js/51.5fca731b.js",
    "revision": "8f3bf4d48fa6b409fe76c75d76111f34"
  },
  {
    "url": "assets/js/52.518903df.js",
    "revision": "f59900775b74578b30088eaabf3726e9"
  },
  {
    "url": "assets/js/53.06f41321.js",
    "revision": "38b3deb65e859eff4157265213835b38"
  },
  {
    "url": "assets/js/54.70028eae.js",
    "revision": "37008bf43bb6c78c4bad1685e1ac1ba8"
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
    "url": "assets/js/app.a71c39df.js",
    "revision": "cba059c1a7a82736d36a1836e9b74bd1"
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
    "revision": "c7167c28c3039a991550b4f714eb2317"
  },
  {
    "url": "categories/css/index.html",
    "revision": "09b0b037a7f17b30b8fb768a778941ab"
  },
  {
    "url": "categories/git/index.html",
    "revision": "68b318fe44119d55ba6452dfe6458981"
  },
  {
    "url": "categories/index.html",
    "revision": "cfdc637a0beadb03c574fa9dfe26a4f5"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "ff36d62c5428e27f1aed9ffd01f6c6ef"
  },
  {
    "url": "categories/react/index.html",
    "revision": "6bd984aa29b9655c63081ed1c893b9d0"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "29b0cabcf12ba2475e94ee1a60e910c9"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "c352de177d7b00d7cd5c76fc9d68e31d"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "707a617e23d9995c411fb2aad4e05eaa"
  },
  {
    "url": "categories/成长之路/index.html",
    "revision": "0ff549c663e20e96f53105f2fe3f9be0"
  },
  {
    "url": "categories/成长之路/page/2/index.html",
    "revision": "147ed4cc206e8f3ff4e1f3a9b4729e2b"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "300d9c5d4cf5cbd8a21452f861897b32"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "0ae7426794b83c16a15e8e48421b45e3"
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
    "revision": "f5b6575143eaa8b97ef0ce0d3583eca0"
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
    "revision": "558dd6881b1720ac1249e33d387615bb"
  },
  {
    "url": "tag/git/index.html",
    "revision": "d0eb3b58b310b759b605a3b5e49e48e2"
  },
  {
    "url": "tag/index.html",
    "revision": "0f260565c3fa07aec76c622cc2ebefae"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "e58d48b2cd8e45e4271c2264b590a23d"
  },
  {
    "url": "tag/react/index.html",
    "revision": "2f737fb78bebf6953bc7e656b4e8ff0f"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "a4a700316aa004ce044060e3e311090b"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "26d08554f5361b5397d39407843b8d57"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "43215e6fafa5b0c0cd56dd856c467c12"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "2e36e8f3edc21abac41c9f9dca360da4"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "fb2bb234826184fc70efc15b5f4ec7be"
  },
  {
    "url": "tag/成长之路/index.html",
    "revision": "5903c4002976c127580404fac5bd2608"
  },
  {
    "url": "tag/成长之路/page/2/index.html",
    "revision": "f8eba276377d5e1baf0d4ecd97517a3e"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "5a29163e0cfeb67411d3c979aa8657fa"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "49a9f993f51346c8ced8e1805170e613"
  },
  {
    "url": "timeline/index.html",
    "revision": "64f730ba88dda18d74e9b356d38ff548"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "88ccbbde7c25c6a8942ef9b079b726a3"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "ea0810e999ee07e4d6be14a76508ae2d"
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
