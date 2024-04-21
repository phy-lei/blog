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
    "revision": "9ba81309a03201adde0ad456d64bffc7"
  },
  {
    "url": "20200526/index.html",
    "revision": "3342aab538164ac733d8e84c1de50430"
  },
  {
    "url": "20200528/index.html",
    "revision": "90acea434b4de08e55e467b134c360bc"
  },
  {
    "url": "20200529/index.html",
    "revision": "3f130c78ef302eb610ec41ea51e096e9"
  },
  {
    "url": "20200601/index.html",
    "revision": "43a8dd262e020c4caea636c2aba0370d"
  },
  {
    "url": "20200602/index.html",
    "revision": "168fcdf035f1375faa7330551a57eb6c"
  },
  {
    "url": "20200604/index.html",
    "revision": "94d3277e3304cf99fe08d6a3a5f3956b"
  },
  {
    "url": "20200612/index.html",
    "revision": "0c4ec84f4a95911f6914265765b9a03c"
  },
  {
    "url": "20200720/index.html",
    "revision": "ef9424e9a4055cdc9d1ae04aecee658e"
  },
  {
    "url": "20200804/index.html",
    "revision": "21715af6d68895a1377c7629a52a1b97"
  },
  {
    "url": "20200812/index.html",
    "revision": "172f2be0530acfd5aad80fd27b598421"
  },
  {
    "url": "20201013/index.html",
    "revision": "3cc55635601bfc51ac4fdda98723b164"
  },
  {
    "url": "20210112/index.html",
    "revision": "1c453949eb225bfccfa374da5cf1d9ec"
  },
  {
    "url": "20210123/index.html",
    "revision": "1b403a83ddc6fd87710501f13f91e473"
  },
  {
    "url": "20210129/index.html",
    "revision": "9699c06d286bdd823475667557224d2c"
  },
  {
    "url": "20210327/index.html",
    "revision": "9f17aee285f7766c0559ba814a47be6d"
  },
  {
    "url": "20210502/index.html",
    "revision": "f33fb4704abdafe3f828f092f22b5be1"
  },
  {
    "url": "20210507_01/index.html",
    "revision": "ead6b9cf41ee4b3e92d6d6baa1ff25c1"
  },
  {
    "url": "20210507_02/index.html",
    "revision": "0fee34b1f8e693e8d198c1a4ca7e9f9d"
  },
  {
    "url": "20210508/index.html",
    "revision": "4bc7d198f28b7c66d0662dc71525a628"
  },
  {
    "url": "20210510/index.html",
    "revision": "9919e3d12bd356f66b483bcfe2f50b80"
  },
  {
    "url": "20210703/index.html",
    "revision": "da75959367e7eb1afa24373cc58b6c7d"
  },
  {
    "url": "20210809/index.html",
    "revision": "d85ab2243ec097874140f743f31934cc"
  },
  {
    "url": "20210901/index.html",
    "revision": "f3d8952d8362c596029f1824a1909f27"
  },
  {
    "url": "20211124/index.html",
    "revision": "a7724018e722440edbf69cb091fe0607"
  },
  {
    "url": "20211210/index.html",
    "revision": "f95f5cc06cac649605135fd66bc5262f"
  },
  {
    "url": "20220212/index.html",
    "revision": "b607f9e3a072e71c32531e120bbd8205"
  },
  {
    "url": "20220513/index.html",
    "revision": "d33bb5749d2114f7212fed25008c70b4"
  },
  {
    "url": "20220530/index.html",
    "revision": "fe76072f8d13edd4351becfb5821574d"
  },
  {
    "url": "20220704/index.html",
    "revision": "01a19d6681c11888afa3e69963ea7d1d"
  },
  {
    "url": "20220804/index.html",
    "revision": "9befe424e7c3bb6f347969389bcc79dc"
  },
  {
    "url": "20221125/index.html",
    "revision": "726975ef9fadc0f4fa04a909311a4c25"
  },
  {
    "url": "20230513/index.html",
    "revision": "236ba1628682e76a65da217726e19824"
  },
  {
    "url": "20230928/index.html",
    "revision": "851b27857859df3c008a5bfa6b521ca4"
  },
  {
    "url": "20231206/index.html",
    "revision": "29b9d1d16637ff8ebbbacfd9656e1793"
  },
  {
    "url": "20240126/index.html",
    "revision": "6bf0d4a48d888ebf9543b41bc5dd1c0b"
  },
  {
    "url": "20240304/index.html",
    "revision": "881e6c5fa99a3137839ca64cbbd894ca"
  },
  {
    "url": "20240327/index.html",
    "revision": "f675b5632009e2d127abe7c5d4be5f70"
  },
  {
    "url": "20240419/index.html",
    "revision": "4877291f589f00116e57502ca16554df"
  },
  {
    "url": "404.html",
    "revision": "6d6373d5fb2e3378900c84fcf38a7ac2"
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
    "url": "assets/js/17.79b9531f.js",
    "revision": "976dee4c8da20f9accfec143b329749d"
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
    "url": "assets/js/20.6fe4c2a2.js",
    "revision": "5a17d16bb231e8a40dc10c0be9ccc5fd"
  },
  {
    "url": "assets/js/21.2de00e28.js",
    "revision": "9b0181fa1e5a23438cf84914fd9469ab"
  },
  {
    "url": "assets/js/22.6b097b2f.js",
    "revision": "8e68c6b16e726dad2d1a61f441bbc837"
  },
  {
    "url": "assets/js/23.bab65398.js",
    "revision": "684eaa524a7998112f31930867b1e6f1"
  },
  {
    "url": "assets/js/24.ac4b04d5.js",
    "revision": "cc4d70ea96b9f8688c54fcdca5f20eb1"
  },
  {
    "url": "assets/js/25.9eb1cdb1.js",
    "revision": "86fe6b2ea6cf198a81eab462cb1a7ffb"
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
    "url": "assets/js/44.86ec4a22.js",
    "revision": "68b381a4f74799e8aa52b40b51261cc1"
  },
  {
    "url": "assets/js/45.fcdf55bc.js",
    "revision": "0d855ad9dca95ce552cc1ac57a1c864e"
  },
  {
    "url": "assets/js/46.d220ec6c.js",
    "revision": "147a8fbeda8a80b7e85d169e8889907c"
  },
  {
    "url": "assets/js/47.1325d5fc.js",
    "revision": "72b472a58e1e11632dab71db22d3bd77"
  },
  {
    "url": "assets/js/48.3da0abca.js",
    "revision": "342457adb3f164dc39dc4380eaa1e149"
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
    "url": "assets/js/app.6a76133a.js",
    "revision": "65e2881a1bd41a0b3ada172206b9bdad"
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
    "revision": "3165b3cfd40f2b6c392dc3d136625128"
  },
  {
    "url": "categories/css/index.html",
    "revision": "8739b44834c8b28455dd29fbbadcf2df"
  },
  {
    "url": "categories/git/index.html",
    "revision": "d6d6869e1d3dbe457a769df08309deb5"
  },
  {
    "url": "categories/index.html",
    "revision": "a31abc5341481dcd8e5c2b1fda43fc16"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "9b2fc17144d9cb68a6131547991fb5e4"
  },
  {
    "url": "categories/react/index.html",
    "revision": "8199852ab2de5c4f0bf690d1d607f9ba"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "62cd001c3129841cf04eeb7ae13a9859"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "5d59b56087ee7190d853373a70582869"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "f5ad149adede4646ff5c3e2bf9ba4478"
  },
  {
    "url": "categories/成长之路/index.html",
    "revision": "75f39eb3c408def09b372734392d098a"
  },
  {
    "url": "categories/成长之路/page/2/index.html",
    "revision": "b218d84d8468eea70982e71477bddad9"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "60f9af3c8050de8c818ed896459fafa9"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "f78364b785a450ea65961aa986c2546a"
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
    "revision": "65381441c59ed6015e28e6986ccc745d"
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
    "revision": "1f1faba228051c8a73b51a811a43e094"
  },
  {
    "url": "tag/git/index.html",
    "revision": "4a260b3d834b981c82f7ba3d4b47dd9d"
  },
  {
    "url": "tag/index.html",
    "revision": "08e87cf63b4cb316af646cae8a92b716"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "86876f3d630e9c96c9c1963e1ef2d47c"
  },
  {
    "url": "tag/react/index.html",
    "revision": "78ab4d7132dac5c45119d77e6f7f5675"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "62cb129b29d59a1d2fc6c23af09bb5af"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "d738cbb1ff0add23303995c453e83b67"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "ab9490993ab6cebf648e536f2339ad56"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "10aaefbfa138fa79ad90f82e495ebb34"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "363802a62f7ec3fec5d1ab85d8f8a563"
  },
  {
    "url": "tag/成长之路/index.html",
    "revision": "90954bd57b8d8ba4a906faa249231ede"
  },
  {
    "url": "tag/成长之路/page/2/index.html",
    "revision": "58b2d0cf1c8c9d1474289efddaacca63"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "4835273a1cf505e9b298d764e6087fca"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "833bf6bae1974b6ef7f73b1b0a22eda9"
  },
  {
    "url": "timeline/index.html",
    "revision": "d329225b0b08968f98d77944bc6d5e22"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "0ce57bf13913bd7ab75149ba91df98ec"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "d527daa4401a56139adf3c3f6864c4af"
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
