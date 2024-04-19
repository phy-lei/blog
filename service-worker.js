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
    "revision": "77b6a21a9ee130739e75233520ba8920"
  },
  {
    "url": "20200526/index.html",
    "revision": "9b936854eb9f57b80806d317e4049f0b"
  },
  {
    "url": "20200528/index.html",
    "revision": "9fdf51fd40745a3334bed414961af8b7"
  },
  {
    "url": "20200529/index.html",
    "revision": "9e890b1026b43549ca15a21166f99d0d"
  },
  {
    "url": "20200601/index.html",
    "revision": "ae15039dab6a7658283ae8f5f2128308"
  },
  {
    "url": "20200602/index.html",
    "revision": "1dfc1d5069e3fea9390f4eae330148d4"
  },
  {
    "url": "20200604/index.html",
    "revision": "3f6d30237449b7b49711de5ae22755a6"
  },
  {
    "url": "20200612/index.html",
    "revision": "d16d29d34f2d0c192b7cf5f08a4fa2fb"
  },
  {
    "url": "20200720/index.html",
    "revision": "528d9fa385843f2257576c42d5d06ebb"
  },
  {
    "url": "20200804/index.html",
    "revision": "3defcf1b5fb55b12819a95d7d95a1917"
  },
  {
    "url": "20200812/index.html",
    "revision": "d915890956787b1d3852fd17245376f1"
  },
  {
    "url": "20201013/index.html",
    "revision": "88185824b1b3544cbf26a9477eda883c"
  },
  {
    "url": "20210112/index.html",
    "revision": "40dc64cf6ffed5ada8ce80eab5d52d77"
  },
  {
    "url": "20210123/index.html",
    "revision": "5147a72111f82bbded5f101f08ef667d"
  },
  {
    "url": "20210129/index.html",
    "revision": "ec85b719fbb90bb7665249bf80f95af3"
  },
  {
    "url": "20210327/index.html",
    "revision": "30e021f0ee641882ac9d1c40c9915982"
  },
  {
    "url": "20210502/index.html",
    "revision": "155e209c7e809aad71547238aff7943a"
  },
  {
    "url": "20210507_01/index.html",
    "revision": "52e6bebfd01b66c14416095907d57216"
  },
  {
    "url": "20210507_02/index.html",
    "revision": "3262bc313ab3497e1585a2cdad844851"
  },
  {
    "url": "20210508/index.html",
    "revision": "4c55e3f6d2765c93a01a1dd026febc8c"
  },
  {
    "url": "20210510/index.html",
    "revision": "d909d40102fdca50e317296d9c439bd9"
  },
  {
    "url": "20210703/index.html",
    "revision": "02264921d2bfc8d968e78a8b24c232d8"
  },
  {
    "url": "20210809/index.html",
    "revision": "38f34d2230494c388a5f4be628e6fee9"
  },
  {
    "url": "20210901/index.html",
    "revision": "71885b9fa0a98e42d1e4b9f70c6a8dca"
  },
  {
    "url": "20211124/index.html",
    "revision": "e5a26b7b2503e6be017be1b9ae2b5aae"
  },
  {
    "url": "20211210/index.html",
    "revision": "eab3bd9b77a00107d6147b520bc08677"
  },
  {
    "url": "20220212/index.html",
    "revision": "aa06769f200a5ee52ea4ad7d0de50f6e"
  },
  {
    "url": "20220513/index.html",
    "revision": "486bffe3e9a4a29982c220110d3b88b4"
  },
  {
    "url": "20220530/index.html",
    "revision": "5628fa7a537077f113cd2de8eb824eab"
  },
  {
    "url": "20220704/index.html",
    "revision": "81e62e957175608a190c49bcbb525df6"
  },
  {
    "url": "20220804/index.html",
    "revision": "45006105f3bf2bd131603519cc4fec4e"
  },
  {
    "url": "20221125/index.html",
    "revision": "c3fc781bec674478c7c4de95324953fd"
  },
  {
    "url": "20230513/index.html",
    "revision": "fe962eeea0b9b308137a6cfc7fdfdb10"
  },
  {
    "url": "20230928/index.html",
    "revision": "8f2b059052a2d2c58f6769367e4cf918"
  },
  {
    "url": "20231206/index.html",
    "revision": "deefc94815c56dd4bd9426cd729bc786"
  },
  {
    "url": "20240126/index.html",
    "revision": "05611fd645349a1f19372ebfd2782797"
  },
  {
    "url": "20240304/index.html",
    "revision": "67f97cf961d84e20a9504ff1bb1a9906"
  },
  {
    "url": "20240327/index.html",
    "revision": "38ec1488ab9f7d85b93e12ede0a42d59"
  },
  {
    "url": "20240419/index.html",
    "revision": "f0a0839649bb073ddb4204cc36ad8409"
  },
  {
    "url": "404.html",
    "revision": "6127af06871a2237de77697a5bfc6dcd"
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
    "url": "assets/js/29.f0c81752.js",
    "revision": "8548984b8098ff3b7c42b65630bed261"
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
    "url": "assets/js/34.fdc388d5.js",
    "revision": "1c4c4657a4b9a6687110f964daf351b5"
  },
  {
    "url": "assets/js/35.9405ce52.js",
    "revision": "81930725588b7f27b0706efbd81bd749"
  },
  {
    "url": "assets/js/36.aac00d72.js",
    "revision": "0276f6ccd75aaabde890d025aa426ed5"
  },
  {
    "url": "assets/js/37.606fed23.js",
    "revision": "0e807db1e134f5ee8ebbefa95e2b2ad6"
  },
  {
    "url": "assets/js/38.4b3793dc.js",
    "revision": "2ad5e8dd31532a62c4c0677dfe8f8532"
  },
  {
    "url": "assets/js/39.07a56eb1.js",
    "revision": "1b1999cb21f47ee49b66c72deef79afb"
  },
  {
    "url": "assets/js/4.339729e1.js",
    "revision": "08de63f91865dc542434ded9704e1ed9"
  },
  {
    "url": "assets/js/40.bf477aef.js",
    "revision": "6addfe47a819a092d6088ab46fc82d8e"
  },
  {
    "url": "assets/js/41.15be5b96.js",
    "revision": "e55220553de9b6212da8ffc188328c89"
  },
  {
    "url": "assets/js/42.47021439.js",
    "revision": "4bb1a94552186e694d77e488903998f6"
  },
  {
    "url": "assets/js/43.74a490fc.js",
    "revision": "c80c6310b8ad126d26a43c918fa63f57"
  },
  {
    "url": "assets/js/44.fb24dbfc.js",
    "revision": "942c71ce91e9834c3418a70058047ea6"
  },
  {
    "url": "assets/js/45.fcdf55bc.js",
    "revision": "0d855ad9dca95ce552cc1ac57a1c864e"
  },
  {
    "url": "assets/js/46.a00f2fc7.js",
    "revision": "6f1fbca6bdf06b8ac7c6447337b62e44"
  },
  {
    "url": "assets/js/47.0a6146c8.js",
    "revision": "d846f440197ad546a1335564f8bf0efd"
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
    "url": "assets/js/50.4d5610e8.js",
    "revision": "6a4a1702b6e77b8a6123eb941c460f28"
  },
  {
    "url": "assets/js/51.5fca731b.js",
    "revision": "8f3bf4d48fa6b409fe76c75d76111f34"
  },
  {
    "url": "assets/js/52.dbbe56d9.js",
    "revision": "14e3b7a792e61131a1a012794814bef3"
  },
  {
    "url": "assets/js/53.849d4e15.js",
    "revision": "124ebfaa0c17307c6e9140613ccb0e4b"
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
    "url": "assets/js/app.f4a79f70.js",
    "revision": "345f77cca2a0b6eed6368b40e6e6dbb4"
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
    "revision": "27dc21410b1abc1cd6b3218e5e076665"
  },
  {
    "url": "categories/css/index.html",
    "revision": "3237d33457d2457d927be27e3c5e88a5"
  },
  {
    "url": "categories/git/index.html",
    "revision": "d979a75b8e81f63a2f7bce58d3342226"
  },
  {
    "url": "categories/index.html",
    "revision": "dd3fe487ed179cf4a7ae3b25ec555565"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "6ea2e27ff9655c415ceddbac424476a5"
  },
  {
    "url": "categories/react/index.html",
    "revision": "9038fae61dba6b7d6eca920e4dfdb4e8"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "f127430cd85bb11710efe340de3f08e6"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "bfd79b4d99bb3506891849eb3c90c6b2"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "6bb6bbaedfb859ec60e1cd26245fb5a0"
  },
  {
    "url": "categories/成长之路/index.html",
    "revision": "b5ba8c87761fe64bfbdc9ed123237d8f"
  },
  {
    "url": "categories/成长之路/page/2/index.html",
    "revision": "bb4bf0b2c014dc54fc364bb801a5d651"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "23b3b018b694b7b768704347365f6c41"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "19cafb04cda0286934e65bc242c24c32"
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
    "revision": "10bab3e4baaa02b56bb0a40d68872266"
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
    "revision": "0f3b24cba50c4c42e711f6502251d95d"
  },
  {
    "url": "tag/git/index.html",
    "revision": "09a434c796a0929646d5cc3eeedb4610"
  },
  {
    "url": "tag/index.html",
    "revision": "d5230d3bb50d9ac5a1f8aaca40faefcb"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "27ed7c0bd9ad7c6c161c6f6087c9c22a"
  },
  {
    "url": "tag/react/index.html",
    "revision": "7d9ae1d0916267870cf129f7b0d156f9"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "c8eb3cc56917303b6decb9157b2b3136"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "6045fa86ef5cdf7a525141bd7b595b95"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "dbf0000c3fd6486745caf42d07019847"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "ec7abfb34ac2b1d1bf7d52ff80ad8ef5"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "1b7b83910edcda7e3e58b5730d18182a"
  },
  {
    "url": "tag/成长之路/index.html",
    "revision": "08ceb3fc788df5f958d01e281c4df5aa"
  },
  {
    "url": "tag/成长之路/page/2/index.html",
    "revision": "28176862b182f87be743ef3ec5195261"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "67ef0694ee003bc083e4c08da03722f5"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "05e1c00a84d9b8ab1766a32f4539c9b0"
  },
  {
    "url": "timeline/index.html",
    "revision": "70901fd732d8130f07da707e7a9b7052"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "2bc0223dd0c679dd9aca44332eb75700"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "98be465b537c68c270882b2a2bc2ea5d"
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
