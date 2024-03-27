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
    "revision": "2d3f7515556e77b771f363907376755f"
  },
  {
    "url": "20200526/index.html",
    "revision": "50abc9f70865dba32b42d1e6a3d3286a"
  },
  {
    "url": "20200528/index.html",
    "revision": "bb17f9bf2053ba1e1988cf392dadefa0"
  },
  {
    "url": "20200529/index.html",
    "revision": "30bf97008fe2b9079b1a1422be90bace"
  },
  {
    "url": "20200601/index.html",
    "revision": "9e9b3ede7c3fab942d8f4e6e4b16fb72"
  },
  {
    "url": "20200602/index.html",
    "revision": "54d1d35b0a69db9ab0e25305e2d9ab75"
  },
  {
    "url": "20200604/index.html",
    "revision": "11e205dcda1380afb9a1a4033b79235f"
  },
  {
    "url": "20200612/index.html",
    "revision": "ecf32c00cd96170bcb5995548e813cc5"
  },
  {
    "url": "20200720/index.html",
    "revision": "a9ac7bea4b7767d0fcfb34fb5087bef1"
  },
  {
    "url": "20200804/index.html",
    "revision": "51e1f4f230193ba2691fb9fddbec3909"
  },
  {
    "url": "20200812/index.html",
    "revision": "9d09b06e2ba3b7dab2b4f5051a79163c"
  },
  {
    "url": "20201013/index.html",
    "revision": "2b19a4dbd88fbcfbf951effc5e68a3e9"
  },
  {
    "url": "20210112/index.html",
    "revision": "4b1dc9c0735617530594268c83b4b4ae"
  },
  {
    "url": "20210123/index.html",
    "revision": "fe4dc4db8d09115d02744566396fab08"
  },
  {
    "url": "20210129/index.html",
    "revision": "f3df20ca296f6cc0c06ecc05e5c820b4"
  },
  {
    "url": "20210327/index.html",
    "revision": "356a3afcf6f093cd416e1a9fcfd7d8a1"
  },
  {
    "url": "20210502/index.html",
    "revision": "45e8aa25151af375ee860c948aad8c72"
  },
  {
    "url": "20210507_01/index.html",
    "revision": "664c400178af044cd4f57ceaf2905d45"
  },
  {
    "url": "20210507_02/index.html",
    "revision": "7c7da65460818c57e1b190f5bbd87048"
  },
  {
    "url": "20210508/index.html",
    "revision": "1774fe9a18c5a0237ee0957af5252122"
  },
  {
    "url": "20210510/index.html",
    "revision": "4e4fe8c972c7f5217e17f7c4e13c95a0"
  },
  {
    "url": "20210703/index.html",
    "revision": "627764067e5ba0a9ff9a200ff3589a93"
  },
  {
    "url": "20210809/index.html",
    "revision": "2c444fe0642a3943f21f259dfba6f004"
  },
  {
    "url": "20210901/index.html",
    "revision": "71653a22f21a57e5950bdc4ed0c853d1"
  },
  {
    "url": "20211124/index.html",
    "revision": "322703219b669ee7ea586b5c9015f3f1"
  },
  {
    "url": "20211210/index.html",
    "revision": "a51f05b939f0f780b68dcc6a85860606"
  },
  {
    "url": "20220212/index.html",
    "revision": "13170972ea53df33af72ad3250360ae1"
  },
  {
    "url": "20220513/index.html",
    "revision": "9640f3698776f008e2817db2d9e8aba9"
  },
  {
    "url": "20220530/index.html",
    "revision": "755c88f1a2dab23300d8a292fd5d2aa5"
  },
  {
    "url": "20220704/index.html",
    "revision": "d93f2069c7a0b8fdfa0b3272c8474e02"
  },
  {
    "url": "20220804/index.html",
    "revision": "9b9ddc9a17ee6fc93aabf12b7ae5e5c4"
  },
  {
    "url": "20221125/index.html",
    "revision": "431391d160a3dddf5e44b79cd7345237"
  },
  {
    "url": "20230513/index.html",
    "revision": "46f7629026030b520c5ccee2709f52dd"
  },
  {
    "url": "20230928/index.html",
    "revision": "9838bb45f7ffd6676aeef3aee5c42fda"
  },
  {
    "url": "20231206/index.html",
    "revision": "e2a20fa1dbd9b7be7d027b3b93f93d27"
  },
  {
    "url": "20240126/index.html",
    "revision": "2f3dd467c040254c827d12b1b9c2054b"
  },
  {
    "url": "20240304/index.html",
    "revision": "fe0985f62393052c2b57b9801f4a1698"
  },
  {
    "url": "20240327/index.html",
    "revision": "be89d3c0d27ab46253ace1b3e7b0d11d"
  },
  {
    "url": "404.html",
    "revision": "5a2b6b459bf9d1889e1324d8c952813d"
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
    "url": "assets/js/11.c755a511.js",
    "revision": "4afb2bd7136f01eff3f79f3e246b32b5"
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
    "url": "assets/js/15.6f53b053.js",
    "revision": "9b23d0d06feddcc2eb8f99c4a3a0c47a"
  },
  {
    "url": "assets/js/16.f7d6c0ed.js",
    "revision": "59cd341df677b37fd24774f1379549af"
  },
  {
    "url": "assets/js/17.c78593f8.js",
    "revision": "8a7dc23db753693c091d0ecbfda916b5"
  },
  {
    "url": "assets/js/18.863b6a74.js",
    "revision": "7015e6e0db1ef3208034f9f8d4489996"
  },
  {
    "url": "assets/js/19.92fa2658.js",
    "revision": "2b5d80ae3acc3f2bd4d7518e8e430538"
  },
  {
    "url": "assets/js/20.5061d308.js",
    "revision": "5ac5a8b127271155f05e6d3f0afe9b35"
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
    "url": "assets/js/25.f724c956.js",
    "revision": "b244f9e4e3a2b4228b09318d7a706cca"
  },
  {
    "url": "assets/js/26.d603f3b8.js",
    "revision": "157396ad79442a3677242da0dcd92774"
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
    "url": "assets/js/34.eef1f0f9.js",
    "revision": "c2b082ba1e8ecfa21bfc1d0d63a5acd1"
  },
  {
    "url": "assets/js/35.d3ec49d4.js",
    "revision": "c177bc452de38609239468d2a9a71e6c"
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
    "url": "assets/js/39.07a56eb1.js",
    "revision": "1b1999cb21f47ee49b66c72deef79afb"
  },
  {
    "url": "assets/js/4.339729e1.js",
    "revision": "08de63f91865dc542434ded9704e1ed9"
  },
  {
    "url": "assets/js/40.d3c4844b.js",
    "revision": "7730490e2e0715801e2f9e1fc9efaa52"
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
    "url": "assets/js/44.b89560be.js",
    "revision": "c195bd2cef102f6b0d36f222fed34de7"
  },
  {
    "url": "assets/js/45.37c4d8b7.js",
    "revision": "e9f4ae4f65bb49b9c8b3af9d9da0b7a0"
  },
  {
    "url": "assets/js/46.f83bb67e.js",
    "revision": "a952271ada29565725210c60eb8b6a1c"
  },
  {
    "url": "assets/js/47.1496d0d1.js",
    "revision": "5dea904c15ea48a2e13fb471ce4ac571"
  },
  {
    "url": "assets/js/48.f3941368.js",
    "revision": "8cb55ea9d99fb77a977cb67cb7dea21e"
  },
  {
    "url": "assets/js/49.ad0b8d5a.js",
    "revision": "5f5bbde901876d0a8cf4737cf6c98bab"
  },
  {
    "url": "assets/js/5.2202e623.js",
    "revision": "12aba6e2a20561cb65660f97da9d051c"
  },
  {
    "url": "assets/js/50.99bb9bc0.js",
    "revision": "b391c1b49276b8124f376cb2ab00104e"
  },
  {
    "url": "assets/js/51.f4390e28.js",
    "revision": "d6d8c97e1401e7ba09dd34e7679b9284"
  },
  {
    "url": "assets/js/52.59ac16f6.js",
    "revision": "7a072623b9ea6b85f63281636481eee1"
  },
  {
    "url": "assets/js/53.6bbb1867.js",
    "revision": "8590feaf74d8c0ad2b5c708655c7d127"
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
    "url": "assets/js/app.a79009e7.js",
    "revision": "21adac7d69fa06dcf261154c6b484477"
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
    "revision": "d2b694bed4635df16d8e7f9907a38d07"
  },
  {
    "url": "categories/css/index.html",
    "revision": "49a41a57b5d73912d00253052c2479ed"
  },
  {
    "url": "categories/git/index.html",
    "revision": "20a6398ff442bcd5cc69a10408d676e5"
  },
  {
    "url": "categories/index.html",
    "revision": "5332438ca0e63f00b5751e71b0726c93"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "de5d5692c1c6c2e8f01771ec7ee22e70"
  },
  {
    "url": "categories/react/index.html",
    "revision": "fae443ce43ff6daa2f5119eb77fe6e93"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "9901149f4ece747873fece98305ac9ed"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "1f9bd8cb011a95d9c9752f468a4591da"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "85be81326905df3febbabc391738cd73"
  },
  {
    "url": "categories/成长之路/index.html",
    "revision": "0419128e919dc605a23135debd504bb7"
  },
  {
    "url": "categories/成长之路/page/2/index.html",
    "revision": "2d9d8460ec4414627b8f07887657a5a0"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "5eb65eed3280491985ccc2b40be16a31"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "1f3374a8b10fb4c4fe9d12541dc20aaf"
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
    "revision": "fc18964c5db2a197fad25fd830c42ec7"
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
    "revision": "4f9305184e155557bddb8ad68420bfac"
  },
  {
    "url": "tag/git/index.html",
    "revision": "3192813985e8f8717202e47b960424c5"
  },
  {
    "url": "tag/index.html",
    "revision": "30d82016ddb3e978cd5451f120b8103f"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "ec193c830f581bdeea9ddce9c35c53cb"
  },
  {
    "url": "tag/react/index.html",
    "revision": "8ab02b07b7a82ece0e64f79d093dc4d4"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "aaed3e74ad5a2bbaed7dbff04c3252cc"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "a6bc34957f351cc2246ac10d97ab1cba"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "4764b49c7e231543d162b8f279f473ed"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "616e672644c5e814bbb5a5b8d9bdb293"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "e7fcfe943f8440e17711da7c532958da"
  },
  {
    "url": "tag/成长之路/index.html",
    "revision": "4cbd6db3cddedafddc17b9c6d7f225d4"
  },
  {
    "url": "tag/成长之路/page/2/index.html",
    "revision": "be0654a608fcafd847c50680b98246b2"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "9d3bf3bc08d5b852df841ea0d1929950"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "46788fc9a99ccf3f272465ea8147f68b"
  },
  {
    "url": "timeline/index.html",
    "revision": "702edeb1fe9f838d0d621b3dbb22b0b1"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "be03ad708e6760e8709470744082d129"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "681b688d221eec697648a807cfc7b504"
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
