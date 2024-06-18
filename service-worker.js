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
    "revision": "8cebda3f1147677a336f24148224af9c"
  },
  {
    "url": "20200526/index.html",
    "revision": "b8be679858421bd2ee561813bbbf1e0e"
  },
  {
    "url": "20200528/index.html",
    "revision": "1cdd718d61cc7d09799947694f7360ff"
  },
  {
    "url": "20200529/index.html",
    "revision": "94b5a989d7df311aaea6310cdc7a4784"
  },
  {
    "url": "20200601/index.html",
    "revision": "4fca0a15842cd454d0e406d9dc51faa0"
  },
  {
    "url": "20200602/index.html",
    "revision": "67cdb57dc69b9338bf07999d05402671"
  },
  {
    "url": "20200604/index.html",
    "revision": "532f5b9f6295108d424194c5c9b45130"
  },
  {
    "url": "20200612/index.html",
    "revision": "530cfb7ba7f34af57de1698adf07199d"
  },
  {
    "url": "20200720/index.html",
    "revision": "b68b7e880095b3213c828efa4f2c8b11"
  },
  {
    "url": "20200804/index.html",
    "revision": "3c9d3403c1148f253df137da181cc62a"
  },
  {
    "url": "20200812/index.html",
    "revision": "ade42969a40b0b18e3350884dd52fd41"
  },
  {
    "url": "20201013/index.html",
    "revision": "9e6114c389219434837d9e407a2d76f7"
  },
  {
    "url": "20210112/index.html",
    "revision": "546c8a8af0460c0a127e3371e90c0556"
  },
  {
    "url": "20210123/index.html",
    "revision": "d5c19da7c80fb7b76d02ce030c7f1ca4"
  },
  {
    "url": "20210129/index.html",
    "revision": "75224b18bae47ff2a7295f59aa0ddcd2"
  },
  {
    "url": "20210327/index.html",
    "revision": "57e7ee6692ba9c2218b78e90c82095a7"
  },
  {
    "url": "20210502/index.html",
    "revision": "e6e426e6783c8e3eb751f36cab40aac5"
  },
  {
    "url": "20210507_01/index.html",
    "revision": "93d13417d9ddb4df76748ff7d6c2921c"
  },
  {
    "url": "20210507_02/index.html",
    "revision": "fe7ad9599c357888e9cb72f3430cf005"
  },
  {
    "url": "20210508/index.html",
    "revision": "a4c8c2a402809a468ca3ea80e6da381e"
  },
  {
    "url": "20210510/index.html",
    "revision": "8c53e9c6bf0f0508c1c5f7175bc9a3e4"
  },
  {
    "url": "20210703/index.html",
    "revision": "58e8dba3493d249598a9469f2ecbe44a"
  },
  {
    "url": "20210809/index.html",
    "revision": "145d21628d8276b311651cee26a86d36"
  },
  {
    "url": "20210901/index.html",
    "revision": "24e793a9ffc38b0759ca7a470ded8d87"
  },
  {
    "url": "20211124/index.html",
    "revision": "0b84da86d2c953d74f61953a5c83fab6"
  },
  {
    "url": "20211210/index.html",
    "revision": "c955352f4b4a419e40f9cae045f54bdb"
  },
  {
    "url": "20220212/index.html",
    "revision": "9a9c87186fdcd60290bb2ea322ffb9a3"
  },
  {
    "url": "20220513/index.html",
    "revision": "14e9667711cadf23a99f09b7364c2766"
  },
  {
    "url": "20220530/index.html",
    "revision": "2d032bf3834966382068488a8c3e5830"
  },
  {
    "url": "20220704/index.html",
    "revision": "936ed4a45fb43efd644a9dd01e1d9cbf"
  },
  {
    "url": "20220804/index.html",
    "revision": "808e296234214577ee2519acf6f2245e"
  },
  {
    "url": "20221125/index.html",
    "revision": "c3c272e520c3af9fafba62ecfb1c7c7b"
  },
  {
    "url": "20230513/index.html",
    "revision": "c519c12c0d45d612007dac44ac748694"
  },
  {
    "url": "20230928/index.html",
    "revision": "edf1164769604c0abc8791e45590d8d7"
  },
  {
    "url": "20231206/index.html",
    "revision": "b8ff6a1f302b6ea756d3d06d0400aa44"
  },
  {
    "url": "20240126/index.html",
    "revision": "97f20f2794ba3f990ed8d80cac7d555f"
  },
  {
    "url": "20240304/index.html",
    "revision": "1162fe7e902e8e049d3c9479e8e684f3"
  },
  {
    "url": "20240327/index.html",
    "revision": "76428c84ecf033867a344219f56ad381"
  },
  {
    "url": "20240419/index.html",
    "revision": "eb5e4ce321ccdab7af3ad0c17b7afd5f"
  },
  {
    "url": "404.html",
    "revision": "f13c33c93ba3e7826827f48666f06473"
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
    "url": "assets/js/15.5dea467a.js",
    "revision": "c8ce052211b2ecb288a89e139d2f18f0"
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
    "url": "assets/js/20.2822efd3.js",
    "revision": "8ec7656b85067664fa4d05c1c19cd85a"
  },
  {
    "url": "assets/js/21.c2b528ce.js",
    "revision": "61bf8ae16785cf2ff41ba47f4cd46de1"
  },
  {
    "url": "assets/js/22.9c081076.js",
    "revision": "fb98c0175a8ae003729cc17422eaa772"
  },
  {
    "url": "assets/js/23.30e0b586.js",
    "revision": "31182b1840d4eca9b027068ff9308323"
  },
  {
    "url": "assets/js/24.879ceba5.js",
    "revision": "b4411702d097fc8acf490ac8f5e0c888"
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
    "url": "assets/js/40.fe528f5a.js",
    "revision": "f58d07b8b65eb700576d3e813cc48483"
  },
  {
    "url": "assets/js/41.834839d0.js",
    "revision": "e0aec0d4cd8d744272b67f6dacec483c"
  },
  {
    "url": "assets/js/42.b422c09e.js",
    "revision": "91822e8f483ecfc356507db8835f5f5f"
  },
  {
    "url": "assets/js/43.ba815a5e.js",
    "revision": "210bde02e48b3c1300b65258d0f50750"
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
    "url": "assets/js/app.cd61ecd2.js",
    "revision": "e3d2c77f8aa778968de05f2714334b22"
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
    "revision": "75a59abbec0bba006eb321bb1e5213f7"
  },
  {
    "url": "categories/css/index.html",
    "revision": "35529314e48f08732e5e688be6f4f56e"
  },
  {
    "url": "categories/git/index.html",
    "revision": "be6adbda2e063b60870bdef0777d5e66"
  },
  {
    "url": "categories/index.html",
    "revision": "53908c6d167bd0945e9a61132c014656"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "2109d2f3a7fe6ccb277f80f9c4222f1d"
  },
  {
    "url": "categories/react/index.html",
    "revision": "d72f7b9d49a9dba1e1fd06c5eb16b929"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "22e186811c4490708edc0e800f05f677"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "2f2281f74205662ee15c480f5927d603"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "37317cb594ca5da7bfca3936c9f4d40f"
  },
  {
    "url": "categories/成长之路/index.html",
    "revision": "68d292fea26deef7fc5205242aefe0bd"
  },
  {
    "url": "categories/成长之路/page/2/index.html",
    "revision": "54c88aa39643704593aa42a497ee3bc4"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "730e98310aa5b40b7b1b2f048f3905d1"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "0b2ee9f0a99aac4b30450ce9c33b8c25"
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
    "revision": "e4674b2f7efdbcf20b83c33886f1f20b"
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
    "revision": "5931dd2fe7aaa543b2eb0bbff33e4638"
  },
  {
    "url": "tag/git/index.html",
    "revision": "7377be99dedc1664d6bd5f305f047d7f"
  },
  {
    "url": "tag/index.html",
    "revision": "f8e2e2e4dab39b161a3d1d91d786a315"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "9421821e28ea846c588dc9fc69dc3ab3"
  },
  {
    "url": "tag/react/index.html",
    "revision": "449be44d45d279eea65a1a93eea40b16"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "8368bd0b2ef9c82dfcd57014bae1f197"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "29fe307585da287e38ca4af4fee49b07"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "63dec89963a3ac462fb10cbfaac4a708"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "2ae26f81f5e9c8d6e7572a61b866621d"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "eaa97efd6016e3dd879504775508108f"
  },
  {
    "url": "tag/成长之路/index.html",
    "revision": "b39f4dda4d68521ae783f55b3948ac25"
  },
  {
    "url": "tag/成长之路/page/2/index.html",
    "revision": "6eda4b7719cd4836d1ab366477896657"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "7366e28025517774f761d67557119fd5"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "ed0e8bed01abbb6182acbdaf9928714e"
  },
  {
    "url": "timeline/index.html",
    "revision": "272c7119acfa008f981cf0653805ef5e"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "d7b7fb2f62a03481ec587106d2d6cd1a"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "955055226065ba571a2bb128ffcd854c"
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
