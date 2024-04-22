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
    "revision": "597e766fc5410c9ad574867c985a0234"
  },
  {
    "url": "20200526/index.html",
    "revision": "3f07d1ca2af2c34f5b40a70d138977d8"
  },
  {
    "url": "20200528/index.html",
    "revision": "d3b9bafc8646b23b47ad71a80cb5baf7"
  },
  {
    "url": "20200529/index.html",
    "revision": "e4c0e79113825c2f500a3363c4b6f5fe"
  },
  {
    "url": "20200601/index.html",
    "revision": "90c34af4c5761fb8291afdef083dc3e7"
  },
  {
    "url": "20200602/index.html",
    "revision": "1009be36d21d84156c0dd57e4089fac0"
  },
  {
    "url": "20200604/index.html",
    "revision": "1f422625edfc8c6d799c928f84e26050"
  },
  {
    "url": "20200612/index.html",
    "revision": "d6b45cafe706ec0434c95541943fa243"
  },
  {
    "url": "20200720/index.html",
    "revision": "fa416f7e4d0b32608201c264876bbd39"
  },
  {
    "url": "20200804/index.html",
    "revision": "41c47ca81a43ba55fad499b5c7ec157e"
  },
  {
    "url": "20200812/index.html",
    "revision": "3379f90cac2622a5892f0e921ebdf46a"
  },
  {
    "url": "20201013/index.html",
    "revision": "a694db3595a5a906a32c3b8d72fbe2d6"
  },
  {
    "url": "20210112/index.html",
    "revision": "385bc369cbf427a437dd18deebddecd7"
  },
  {
    "url": "20210123/index.html",
    "revision": "c76b1b021103c69bec16cfbe8c4476c4"
  },
  {
    "url": "20210129/index.html",
    "revision": "808cba6b2dba393d437660b1542dc3bd"
  },
  {
    "url": "20210327/index.html",
    "revision": "9f1a884a55296b37184c582ed1b22aaf"
  },
  {
    "url": "20210502/index.html",
    "revision": "8b2c42ed55e3aa66d534eb3b082cd5e1"
  },
  {
    "url": "20210507_01/index.html",
    "revision": "462a3fdc1ecace8334e32f6aeba90d03"
  },
  {
    "url": "20210507_02/index.html",
    "revision": "1b27e1275352a6dbaf2893d32ac875a2"
  },
  {
    "url": "20210508/index.html",
    "revision": "30cd65d49b66d6eb618b7e5555298907"
  },
  {
    "url": "20210510/index.html",
    "revision": "3cc5376b75cd90a1781131cfdc7984fc"
  },
  {
    "url": "20210703/index.html",
    "revision": "b1ed39094c296408e6e95a12fb8724e2"
  },
  {
    "url": "20210809/index.html",
    "revision": "9f1a7d963b0418df23ee611f72e0a934"
  },
  {
    "url": "20210901/index.html",
    "revision": "106774c45da0bf8d437a224332e7a63c"
  },
  {
    "url": "20211124/index.html",
    "revision": "99ba38144c46783e4cbb350835bfbde2"
  },
  {
    "url": "20211210/index.html",
    "revision": "7e5deffe03643ef1931197d540e5a61a"
  },
  {
    "url": "20220212/index.html",
    "revision": "71e40f9429a43af4f05805a0319461ae"
  },
  {
    "url": "20220513/index.html",
    "revision": "4fda06cf25d532241ad9eb3452f49fbe"
  },
  {
    "url": "20220530/index.html",
    "revision": "26103bd5ebd79c33f63418f92477af0c"
  },
  {
    "url": "20220704/index.html",
    "revision": "082ca55a7377b8d89398301fab820225"
  },
  {
    "url": "20220804/index.html",
    "revision": "0acf4a3bfaa5cfbe869fec0b1ad9f190"
  },
  {
    "url": "20221125/index.html",
    "revision": "5ad57676fa3eddd4310b913c2c62253b"
  },
  {
    "url": "20230513/index.html",
    "revision": "24bc76027ff0e3ecd5e6c5313874701b"
  },
  {
    "url": "20230928/index.html",
    "revision": "a41481a106f4d01cc37f81e853c6f4bf"
  },
  {
    "url": "20231206/index.html",
    "revision": "1054803e0c6d401b4771cd6330d8b70e"
  },
  {
    "url": "20240126/index.html",
    "revision": "00b754f95436ec61d28c11fd2bc56148"
  },
  {
    "url": "20240304/index.html",
    "revision": "68f0b106037b11c4906044308d191840"
  },
  {
    "url": "20240327/index.html",
    "revision": "fd951056836f77519f2d211816a35409"
  },
  {
    "url": "20240419/index.html",
    "revision": "8cf05388f29da797a85d8dff578e5428"
  },
  {
    "url": "404.html",
    "revision": "1d5cfcdd33f850627861a020c1191a63"
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
    "url": "assets/js/14.8df0cca7.js",
    "revision": "04162e2bfcad2f65ecdb86ea50df7d53"
  },
  {
    "url": "assets/js/15.83a9d7a5.js",
    "revision": "fbe47e409d757eddd2b8485d1be7eb0f"
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
    "url": "assets/js/19.89fa4ca6.js",
    "revision": "924b0c42b0ed2b22a4a07705df5d3814"
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
    "url": "assets/js/30.48c6b808.js",
    "revision": "048ed040b5f857592ad2e3fdf39ebd5b"
  },
  {
    "url": "assets/js/31.419de084.js",
    "revision": "db26e83e362147479658e3ec5027ec4f"
  },
  {
    "url": "assets/js/32.f0465e38.js",
    "revision": "f3d75f94006225ffa8993ee2aaeac36f"
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
    "url": "assets/js/36.1e6790b9.js",
    "revision": "b431276a4739a240d64c81881620c2f7"
  },
  {
    "url": "assets/js/37.237c025c.js",
    "revision": "40093ac62baddd43be884baa93b88e89"
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
    "url": "assets/js/40.fe528f5a.js",
    "revision": "f58d07b8b65eb700576d3e813cc48483"
  },
  {
    "url": "assets/js/41.834839d0.js",
    "revision": "e0aec0d4cd8d744272b67f6dacec483c"
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
    "url": "assets/js/44.b89560be.js",
    "revision": "c195bd2cef102f6b0d36f222fed34de7"
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
    "url": "assets/js/48.c25885fc.js",
    "revision": "0f69953e7af855c767a3b843fb917f6d"
  },
  {
    "url": "assets/js/49.0325f1e9.js",
    "revision": "e29b33759ce4ea5ce743e66c254fbc06"
  },
  {
    "url": "assets/js/5.2202e623.js",
    "revision": "12aba6e2a20561cb65660f97da9d051c"
  },
  {
    "url": "assets/js/50.786da955.js",
    "revision": "6358a320ccdc5119d0ef24168d75efe8"
  },
  {
    "url": "assets/js/51.88b6dd57.js",
    "revision": "398499a09873a7cb7a07db5df8885b59"
  },
  {
    "url": "assets/js/52.91980065.js",
    "revision": "96f8f732f4ee2b77646e2667a13f1834"
  },
  {
    "url": "assets/js/53.cc680d92.js",
    "revision": "c752bb77fb2d8cd24c53154d8f3da7b2"
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
    "url": "assets/js/app.cc9a024a.js",
    "revision": "bbf56df47fa87956409bbc8395fec0b7"
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
    "revision": "419e9c583601597e57dc715c5d0a2679"
  },
  {
    "url": "categories/css/index.html",
    "revision": "797128dc4810b813418c18c848a297a5"
  },
  {
    "url": "categories/git/index.html",
    "revision": "5392b447b44607012a5b562c63fafbfb"
  },
  {
    "url": "categories/index.html",
    "revision": "3dec03821571e392da14cc7fc0670312"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "85c77bdbe8612f2ea0243a7692773553"
  },
  {
    "url": "categories/react/index.html",
    "revision": "9d7a64960f2137477e58e077702b0716"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "9c4aed8ef260c15b5da29729a675f918"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "b43a49baab3be625e59530d74dcc3be5"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "6513c046632d78b666f011c7c5a1a155"
  },
  {
    "url": "categories/成长之路/index.html",
    "revision": "253e9d8867706bf63fa74f2741166315"
  },
  {
    "url": "categories/成长之路/page/2/index.html",
    "revision": "a868d5ee3f12776780d0edef046e1428"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "83168308d43f962c4b555afe160bc72f"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "4e47ccc8e4a8f759c0456a1fdc9b6255"
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
    "revision": "b97fad30dd54650ccdc9733bbf76d648"
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
    "revision": "c5193c0ba0fd14f6c4b02a88b7815322"
  },
  {
    "url": "tag/git/index.html",
    "revision": "4abb4ba3c24379f67589d7d4b7408a5a"
  },
  {
    "url": "tag/index.html",
    "revision": "b252aebdd1c425ded6e6d59d66bd0356"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "4f31991525ce6ec0caba544e66009bfe"
  },
  {
    "url": "tag/react/index.html",
    "revision": "8dfe8da71135637ac21f052231cddcb8"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "6f3a4a5b26ef209b8f9b525fa2b106a2"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "9a25ed23d6d3bf2cf6c09dd4ea82978e"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "fbc4aeb9c5c59a35dfa5eb80c991ec55"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "39475ad1c8c046797274f995cda25d2d"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "ca7f29182a5d24f3a2daa3202bd3788d"
  },
  {
    "url": "tag/成长之路/index.html",
    "revision": "213bd03c37c40c75ab3c291aa5452a3e"
  },
  {
    "url": "tag/成长之路/page/2/index.html",
    "revision": "9c0e9fb4b6b942d4dc880d99e55957ad"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "aae0f298a2e1185eaef5a589e2d329bb"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "12bd4a3e815aace7f1ecccabf3344a79"
  },
  {
    "url": "timeline/index.html",
    "revision": "42621e93a7e1bd00d8d57759040a4388"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "4be6acc83ae61eee19a1d80da57461aa"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "29db4133d0295f7ee1da673408317ce5"
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
