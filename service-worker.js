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
    "revision": "7e4a9f87e000efdd41b66c53e8ad63d8"
  },
  {
    "url": "20200526/index.html",
    "revision": "a322d987947e6a7661d68082ef4cedb6"
  },
  {
    "url": "20200528/index.html",
    "revision": "265a8d44de2fb1dedaf429fe771b1abd"
  },
  {
    "url": "20200529/index.html",
    "revision": "7408f429330e8adf17eafcdb5b1be3dd"
  },
  {
    "url": "20200601/index.html",
    "revision": "d3ee0e7ad2f139e28827cc62b01fefc5"
  },
  {
    "url": "20200602/index.html",
    "revision": "5292a08c339764553e69467dffc0be75"
  },
  {
    "url": "20200604/index.html",
    "revision": "6bfd13e494d3bf6b4aa14f1345bd38ed"
  },
  {
    "url": "20200612/index.html",
    "revision": "b8a878f1b6b29b8bb1b33d8aed4ef9f5"
  },
  {
    "url": "20200720/index.html",
    "revision": "44bec7933d6b48b7240f58d89c558e4d"
  },
  {
    "url": "20200804/index.html",
    "revision": "91a58053cac5bcf1c8723ea77dff9a97"
  },
  {
    "url": "20200812/index.html",
    "revision": "597328539fe498683a4a39673f9b2fb7"
  },
  {
    "url": "20201013/index.html",
    "revision": "5bad3e1bad4b9233f341c8b679f4935c"
  },
  {
    "url": "20210112/index.html",
    "revision": "d2a3d9486446cdc0dd441fe6947d4d0c"
  },
  {
    "url": "20210123/index.html",
    "revision": "40954da64a63534c72eac4560a5013f5"
  },
  {
    "url": "20210129/index.html",
    "revision": "aca94ba233720550356c9190b3264601"
  },
  {
    "url": "20210327/index.html",
    "revision": "4c2fff57c71ac034df68c7e7556a5dcc"
  },
  {
    "url": "20210502/index.html",
    "revision": "a0e6cac0b31395328e21aee27cb45081"
  },
  {
    "url": "20210507_01/index.html",
    "revision": "a25195ac677d61e41a76672b2d730c8b"
  },
  {
    "url": "20210507_02/index.html",
    "revision": "d17bc0424246619d17c926e43dd0214e"
  },
  {
    "url": "20210508/index.html",
    "revision": "a40869d699c241ad86110e430409c0d9"
  },
  {
    "url": "20210510/index.html",
    "revision": "f8984bcf0495ef03aaea8858ec710df8"
  },
  {
    "url": "20210703/index.html",
    "revision": "0f2675dcd00622eb9f77ad973e51b112"
  },
  {
    "url": "20210809/index.html",
    "revision": "fcd2a53c14750bca96109c47a9e999dc"
  },
  {
    "url": "20210901/index.html",
    "revision": "27370867c4bab56c100cd1b814308a97"
  },
  {
    "url": "20211124/index.html",
    "revision": "79d4322877ef8613b76392a947a8af15"
  },
  {
    "url": "20211210/index.html",
    "revision": "8151802a5bb0d54cdc1852d8d839067f"
  },
  {
    "url": "20220212/index.html",
    "revision": "28de25c2efdc0859c9002452cbbbb92c"
  },
  {
    "url": "20220513/index.html",
    "revision": "04e0e623fdd5d8c6c6ee62c6e9ed2d2c"
  },
  {
    "url": "20220530/index.html",
    "revision": "48a098fd84e039b20f248b783c60cf7d"
  },
  {
    "url": "20220704/index.html",
    "revision": "5882e65a8c4f1f7cbce52d920ac55a8b"
  },
  {
    "url": "20220804/index.html",
    "revision": "2a556d6fa2fcfa7977842f1c02fee4d5"
  },
  {
    "url": "20221125/index.html",
    "revision": "dd127ab9d19bc8fed155b7121f44bd77"
  },
  {
    "url": "20230513/index.html",
    "revision": "b1602d9ae29e2b2052463772c5d98cac"
  },
  {
    "url": "20230928/index.html",
    "revision": "2c80f332eeb6b68f30c04fe52ed16b00"
  },
  {
    "url": "20231206/index.html",
    "revision": "733d69d3923ed7803d205f9a12d9863c"
  },
  {
    "url": "20240126/index.html",
    "revision": "785ddbc94ff28169f6d8e0db0e951205"
  },
  {
    "url": "404.html",
    "revision": "6c9d0cff925d679667923fc32973cb4f"
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
    "url": "assets/js/11.691da697.js",
    "revision": "dd908b1a616828a2c1c9bba854708e88"
  },
  {
    "url": "assets/js/12.03fbf9d6.js",
    "revision": "03bfedbb428506f56be93550c62de1d5"
  },
  {
    "url": "assets/js/13.b1ce5ebb.js",
    "revision": "58dc8c8fbee0a4353438b9c00729bea4"
  },
  {
    "url": "assets/js/14.74706196.js",
    "revision": "777d6efbf9d7efd5a7e0e2d97f577f6f"
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
    "url": "assets/js/17.c3dc14f5.js",
    "revision": "3f04e41188a6cd9b30212874677e4bd7"
  },
  {
    "url": "assets/js/18.863b6a74.js",
    "revision": "7015e6e0db1ef3208034f9f8d4489996"
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
    "url": "assets/js/35.b5cb965e.js",
    "revision": "51319107e948cd5aa4e48ad9a119c74b"
  },
  {
    "url": "assets/js/36.bf54e900.js",
    "revision": "e7328031a7380003dc41c48efed7372e"
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
    "url": "assets/js/42.47021439.js",
    "revision": "4bb1a94552186e694d77e488903998f6"
  },
  {
    "url": "assets/js/43.6e660ac6.js",
    "revision": "4eedf7e33611c1a901d38c30cb8765b5"
  },
  {
    "url": "assets/js/44.e6bf4d2b.js",
    "revision": "339229b6a51abcf50b899675d861dd37"
  },
  {
    "url": "assets/js/45.9552477d.js",
    "revision": "a595849b1a056a0b01d16580390031fb"
  },
  {
    "url": "assets/js/46.57444d6e.js",
    "revision": "8437c297eec0b2bb9804b11a11453af3"
  },
  {
    "url": "assets/js/47.f451a595.js",
    "revision": "4057b2afe9841514efb94a6595c6ce96"
  },
  {
    "url": "assets/js/48.4fb6c878.js",
    "revision": "94fa95652e26a5b53a76fe5a499e0f1a"
  },
  {
    "url": "assets/js/49.f80c094f.js",
    "revision": "ca848ebc05d28d74efecbb920cd96705"
  },
  {
    "url": "assets/js/5.2202e623.js",
    "revision": "12aba6e2a20561cb65660f97da9d051c"
  },
  {
    "url": "assets/js/50.4f3ca1be.js",
    "revision": "9e61a938bdbf7d1d8980e447098bc865"
  },
  {
    "url": "assets/js/51.c3042359.js",
    "revision": "e765d251b4753a5234f60950780c6842"
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
    "url": "assets/js/app.9bb75ff0.js",
    "revision": "15ae46bac7da75793f75949b1ecb623d"
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
    "revision": "f8238ee069059b58f8ce97c5e13e05c4"
  },
  {
    "url": "categories/css/index.html",
    "revision": "383bcf1a8b07445f5cd2d760391e0dd0"
  },
  {
    "url": "categories/git/index.html",
    "revision": "c85937c59ec28d84e4644d2bbe08dd9f"
  },
  {
    "url": "categories/index.html",
    "revision": "6141c9f4a155e5144fb5efac8c9920bc"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "c74bdea9514b0b00f8dee83ac33465e3"
  },
  {
    "url": "categories/react/index.html",
    "revision": "553b07713c8fcf229759f4da44b23bb7"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "a48c0021e242b92ed327aef830d25f29"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "29b7a37fd8d5110cb85e63d0f51ca656"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "b67eee399f1de30c1ff375b7ca817ba5"
  },
  {
    "url": "categories/成长之路/index.html",
    "revision": "30f6e7c053ad5f58fd48a3435d9aa8c0"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "3cc8470c59d3e4bd3655e513c188e563"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "f9cb4e51ac8b579aefba5813b32396ce"
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
    "revision": "ef3f5135da39843c09ad7964b0493ee0"
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
    "revision": "4bf0cccbccdd8caa6a078ca5985e8991"
  },
  {
    "url": "tag/git/index.html",
    "revision": "64217e709e7dadac6f54cd4d29e72259"
  },
  {
    "url": "tag/index.html",
    "revision": "7f63dba8db385c0f591388cc45217abd"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "737e6329ceb0db58a427c5edd3ad117e"
  },
  {
    "url": "tag/react/index.html",
    "revision": "171aa6ad42aa9c77166821aa1f99819a"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "44ce9ed8eebff1a038f2075b5ea1a539"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "6757dce1c7b3d91aec8b19324eda5e61"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "2d9c82d43f8e807ae780e4208915b3bf"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "ef8b1e5b7238b17d586e8cbcd61ee40c"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "a7aab908c5c54c1b12553bd93ff07bf5"
  },
  {
    "url": "tag/成长之路/index.html",
    "revision": "df33c14eafea2d45b733a1386b206c4a"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "2bfe66dd5eb9d17f9a22365bac834a2e"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "51ca6951d7929e2d141054a4c5a00b47"
  },
  {
    "url": "timeline/index.html",
    "revision": "66b5da73d28af15fa99db3d3e72d3d19"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "1263df17ac1867bd18a9ce5999fc7608"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "70fda7455e762c6bef658bfea92141db"
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
