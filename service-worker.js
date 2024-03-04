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
    "revision": "c5380ae4858061cdfd6130525e7aea5f"
  },
  {
    "url": "20200526/index.html",
    "revision": "301eb35dec74153b6509c01e8285c084"
  },
  {
    "url": "20200528/index.html",
    "revision": "04c4189ab8caa64605b891115395a232"
  },
  {
    "url": "20200529/index.html",
    "revision": "c94157d5b6650f0cefc721f85bb88350"
  },
  {
    "url": "20200601/index.html",
    "revision": "3049cab9b2a06b0d46603db07fe66b09"
  },
  {
    "url": "20200602/index.html",
    "revision": "3ab2a1cdf8ed166cf61ace7a0141be04"
  },
  {
    "url": "20200604/index.html",
    "revision": "302ac4b12132ebc7034299cfde256556"
  },
  {
    "url": "20200612/index.html",
    "revision": "e9eaf77f1fd649155c18efc64f00c571"
  },
  {
    "url": "20200720/index.html",
    "revision": "7d1bfa907b69553b4a362cde06f4dbb9"
  },
  {
    "url": "20200804/index.html",
    "revision": "055cab2140368ce9e27658ae339b09fe"
  },
  {
    "url": "20200812/index.html",
    "revision": "f19e9cac89611abbe31ebf519047ca3f"
  },
  {
    "url": "20201013/index.html",
    "revision": "faa3d7f1c44e49acca3d04f44b5ecf08"
  },
  {
    "url": "20210112/index.html",
    "revision": "e54777ee6e95b7827cbf106626202ddb"
  },
  {
    "url": "20210123/index.html",
    "revision": "b282ba4beccaa439d4654aca33f04909"
  },
  {
    "url": "20210129/index.html",
    "revision": "b8e179f0e5d9cedfb796f19dedc80ab8"
  },
  {
    "url": "20210327/index.html",
    "revision": "0434fab0031f93c480b5902f55fb7161"
  },
  {
    "url": "20210502/index.html",
    "revision": "e84b5eaf2bc149af04ec9ad980be57d2"
  },
  {
    "url": "20210507_01/index.html",
    "revision": "36224e9bef9f3bc9d0700c6c03351189"
  },
  {
    "url": "20210507_02/index.html",
    "revision": "fbe157a5ec5cfc216d69985d1f587d92"
  },
  {
    "url": "20210508/index.html",
    "revision": "a36db87e3c49e46ffd3c05547f4be96b"
  },
  {
    "url": "20210510/index.html",
    "revision": "8c1c3fa5f50acbc9eb705b690c139c12"
  },
  {
    "url": "20210703/index.html",
    "revision": "9e465f667044e7a8ef368c1a1fe3ace0"
  },
  {
    "url": "20210809/index.html",
    "revision": "5b5c5145cf81ccd7daa1683cf8a47a11"
  },
  {
    "url": "20210901/index.html",
    "revision": "1e21aa8a8964f707a0d5f6fd44c01e7e"
  },
  {
    "url": "20211124/index.html",
    "revision": "00fad5b97780e8e4a79a91d7c9a6b729"
  },
  {
    "url": "20211210/index.html",
    "revision": "c7ef6e4ba9efa074e5ffe9a303c09e18"
  },
  {
    "url": "20220212/index.html",
    "revision": "449ee6788714372df1f1abe4ffd5bc0b"
  },
  {
    "url": "20220513/index.html",
    "revision": "6fabddd587f21168e87259e187c3682e"
  },
  {
    "url": "20220530/index.html",
    "revision": "21995df59158b8b8ad65e1cb89991fe8"
  },
  {
    "url": "20220704/index.html",
    "revision": "af8161e81557cce22e45fbec729d4151"
  },
  {
    "url": "20220804/index.html",
    "revision": "0498f20432b42d43cedf89b9518f7507"
  },
  {
    "url": "20221125/index.html",
    "revision": "bd42e062f9d8a575ca4d92f2be82ae22"
  },
  {
    "url": "20230513/index.html",
    "revision": "a0196683fca3055f9fcb54f0c0c1f31a"
  },
  {
    "url": "20230928/index.html",
    "revision": "0af77d53d1939ae5351a09d731a5dddb"
  },
  {
    "url": "20231206/index.html",
    "revision": "ffe834ff2c0fa4a30b5e2e7d0d4d7dfa"
  },
  {
    "url": "20240126/index.html",
    "revision": "9d559f402954ad5facc19500e3974693"
  },
  {
    "url": "20240304/index.html",
    "revision": "963202a9703a3fd16bb33f31a2736429"
  },
  {
    "url": "404.html",
    "revision": "a6e4c3285dac790e5f13d2df8058637e"
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
    "url": "assets/js/12.03fbf9d6.js",
    "revision": "03bfedbb428506f56be93550c62de1d5"
  },
  {
    "url": "assets/js/13.fb421e4a.js",
    "revision": "b1567cb4212564c2ee00e294cf7227b5"
  },
  {
    "url": "assets/js/14.092064b0.js",
    "revision": "2df045eeb88020bc079d544b1d3cfe21"
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
    "url": "assets/js/23.818ce7bf.js",
    "revision": "b3270cb684a3da4f5cc5ef1f63924e8d"
  },
  {
    "url": "assets/js/24.9a584cdf.js",
    "revision": "f61c64af399fdea8e41d14b5146a520b"
  },
  {
    "url": "assets/js/25.cfc55740.js",
    "revision": "50a6e29d7bedfb425a29d8258fffc837"
  },
  {
    "url": "assets/js/26.d603f3b8.js",
    "revision": "157396ad79442a3677242da0dcd92774"
  },
  {
    "url": "assets/js/27.a458f12d.js",
    "revision": "f59caddb28024ac38228d5482a34d5bb"
  },
  {
    "url": "assets/js/28.7541e861.js",
    "revision": "7e7d2bba5ed3ea53bd6788eb28c17db5"
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
    "url": "assets/js/31.1cf02e8c.js",
    "revision": "d3d63d5c5a8031b39fb944ecec6e44af"
  },
  {
    "url": "assets/js/32.a85919c2.js",
    "revision": "8ed8493257ff1c8e560c8b53e2fcbae2"
  },
  {
    "url": "assets/js/33.2e3c2c89.js",
    "revision": "c5b965b8eeee9508e48c15b7fb730dfc"
  },
  {
    "url": "assets/js/34.68e7f2f9.js",
    "revision": "afd4e670d3cfe23b10e43354328d3593"
  },
  {
    "url": "assets/js/35.d3ec49d4.js",
    "revision": "c177bc452de38609239468d2a9a71e6c"
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
    "url": "assets/js/43.6e660ac6.js",
    "revision": "4eedf7e33611c1a901d38c30cb8765b5"
  },
  {
    "url": "assets/js/44.3e7dd2a9.js",
    "revision": "ddf903d2c38c0960aed38b6bc88650cd"
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
    "url": "assets/js/48.4d7d2fc0.js",
    "revision": "3e252c7aa27fb75b3750c2e5b3e0c2a2"
  },
  {
    "url": "assets/js/49.62bb5f28.js",
    "revision": "c31b0910c4165c6ea2e56a4c34f87e47"
  },
  {
    "url": "assets/js/5.2202e623.js",
    "revision": "12aba6e2a20561cb65660f97da9d051c"
  },
  {
    "url": "assets/js/50.6bb31b60.js",
    "revision": "3982b70119564f6a7f5592090dd3324f"
  },
  {
    "url": "assets/js/51.b9e26737.js",
    "revision": "28fbb2312bbe58ee677e865cba7f3d61"
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
    "url": "assets/js/app.6063ceb7.js",
    "revision": "5b38c882c89d56a6059c07c509a11992"
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
    "revision": "c7854d6ce0cb110f3fbd4b38bce84c80"
  },
  {
    "url": "categories/css/index.html",
    "revision": "901eeb45d05f95e27a72c827ef9d64b5"
  },
  {
    "url": "categories/git/index.html",
    "revision": "463d542a4470771510742e92bb694723"
  },
  {
    "url": "categories/index.html",
    "revision": "4e8c86b598517f17383112205c809981"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "d52b79ec10786941d0e70891f6966977"
  },
  {
    "url": "categories/react/index.html",
    "revision": "b0cab58c06966471ea15cabdd914541a"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "6e860d081e69fa68e91f462145edc99f"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "4c00e54f8504af03e25c1ea3ca7146b8"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "a78a8762ad70fb6ee67b4bd37c67d7a0"
  },
  {
    "url": "categories/成长之路/index.html",
    "revision": "98e0486663c4ff3a98d019a0500d43d1"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "5133a16595f36e34505747e7d6ff6adb"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "35869579db7dca231d5877d0f8718587"
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
    "revision": "ddb97e800cc1eacc0e89ec590928af56"
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
    "revision": "c463c8d6d783a19f31fff95e8b031778"
  },
  {
    "url": "tag/git/index.html",
    "revision": "24349598a3ac977dfe26534f026e65dc"
  },
  {
    "url": "tag/index.html",
    "revision": "9ae77d4b133e96011aa0bd9df02cfeec"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "a07fc2f37c062db700b14e14d982e10b"
  },
  {
    "url": "tag/react/index.html",
    "revision": "7c78ef9b5ef90ede14f0695c629f3df5"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "8cfb0c889d4636436f796ede71eecea1"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "9860b32ebb0f889a92efe900480e51bc"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "517ee925a735e60c2acbc4837857307f"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "e6730009284dbf8bf2f771909f933ae1"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "74261b735483903ba4ab303b576fc805"
  },
  {
    "url": "tag/成长之路/index.html",
    "revision": "0d6c3e6fddfcd5c811c9bd54703a1ca8"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "a625dab8efab54acebd22c38bcea23f8"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "c9f4aaefcabeb2a401891626f3432d67"
  },
  {
    "url": "timeline/index.html",
    "revision": "4a14aaf2c5c754e9a3f69d6987113e3b"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "6b81db5d302eeb74bfe403517aebace4"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "20fa1ccf2a042c7f1c89fd0af414ea79"
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
