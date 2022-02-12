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
    "revision": "73bd83452984e1f85ca7893df9c945ef"
  },
  {
    "url": "20200526/index.html",
    "revision": "36670eb09ea60099a6baee30afb6abcd"
  },
  {
    "url": "20200528/index.html",
    "revision": "a36887017a1724e1faff17bf4d0f7216"
  },
  {
    "url": "20200529/index.html",
    "revision": "9728c11d88a580759c4ae23c15e2eb38"
  },
  {
    "url": "20200601/index.html",
    "revision": "80395e7545d3067502449e5063deafd2"
  },
  {
    "url": "20200602/index.html",
    "revision": "b04c4712b2ea4dc6b26245754765b7b0"
  },
  {
    "url": "20200604/index.html",
    "revision": "596ebd8d4f09f6e2570cf843fb4cfcc6"
  },
  {
    "url": "20200612/index.html",
    "revision": "0d449591787a1805b4586c49a3679033"
  },
  {
    "url": "20200720/index.html",
    "revision": "a095b61407253fe321d0c2dca77f2f43"
  },
  {
    "url": "20200804/index.html",
    "revision": "e1e6fbeea125735d3a491a851e2c91db"
  },
  {
    "url": "20200812/index.html",
    "revision": "337cbb2d59eb7b0da6f5c115a549b019"
  },
  {
    "url": "20201013/index.html",
    "revision": "c0a491eab8cc4f064ccd5f1e82e815e7"
  },
  {
    "url": "20210112/index.html",
    "revision": "b6be8f9c53269ec8690c7eccceda4abc"
  },
  {
    "url": "20210123/index.html",
    "revision": "0a2bacb8ba78b24637302db85c85ae6e"
  },
  {
    "url": "20210129/index.html",
    "revision": "b905d1139b1add3ffd25617878b8d237"
  },
  {
    "url": "20210327/index.html",
    "revision": "2837be81590d8f5e36d2b63cedbaf87b"
  },
  {
    "url": "20210502/index.html",
    "revision": "e50dbe3dbf07770d230809422c3166f5"
  },
  {
    "url": "20210507_01/index.html",
    "revision": "1140ec66c0db9d2d685a922dfcd52038"
  },
  {
    "url": "20210507_02/index.html",
    "revision": "0829db39bbce9272d9cf0d044dd4bc66"
  },
  {
    "url": "20210508/index.html",
    "revision": "e66019401b4ed161f6a7b398b361893f"
  },
  {
    "url": "20210510/index.html",
    "revision": "de1db2e4713652313a373ceae7c8ae6b"
  },
  {
    "url": "20210703/index.html",
    "revision": "022831471740db741f9ef55d6cef92a7"
  },
  {
    "url": "20210809/index.html",
    "revision": "b70aa1caab35df23900f32518dffd2cb"
  },
  {
    "url": "20210901/index.html",
    "revision": "c576c2be84624511f4884140bb5ae507"
  },
  {
    "url": "20211124/index.html",
    "revision": "6ec7a69319c3ffaf58469a9ad208920c"
  },
  {
    "url": "20211210/index.html",
    "revision": "f319fdff122d0e2b0cd29f503eca9f50"
  },
  {
    "url": "20220212/index.html",
    "revision": "703a0ade0bd0dcd9dbf3cf397b4e5911"
  },
  {
    "url": "404.html",
    "revision": "84357d2f8f425daf7ffa04b70ca758f8"
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
    "url": "assets/js/11.79e8b832.js",
    "revision": "d1c58bf074af304bcbc7cf829dada665"
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
    "url": "assets/js/18.c92ccd77.js",
    "revision": "6e1bbe4db3ae98e9761b8b387287fd99"
  },
  {
    "url": "assets/js/19.08a3dcb5.js",
    "revision": "fca729a41924e37bade918d1a052f40c"
  },
  {
    "url": "assets/js/20.255b94b4.js",
    "revision": "4f772baf2fc3b8f7981a04ed7a8d47ac"
  },
  {
    "url": "assets/js/21.b005ebaa.js",
    "revision": "cb8fedb6c54b7028664f6dd7c3ef5042"
  },
  {
    "url": "assets/js/22.2db62ea4.js",
    "revision": "f93c0b4d6773f290428d11250444fb6c"
  },
  {
    "url": "assets/js/23.13fa4cce.js",
    "revision": "86de30f38f4df5010a997d757b5b52c9"
  },
  {
    "url": "assets/js/24.837cb716.js",
    "revision": "3c7e1761b5d35458e0ad294c58b288a7"
  },
  {
    "url": "assets/js/25.3e00d2b0.js",
    "revision": "0464e4be6f252fa6cd1196dce8f524de"
  },
  {
    "url": "assets/js/26.8d4a23bb.js",
    "revision": "af22c3b9f331484e3d5009b7c9dad356"
  },
  {
    "url": "assets/js/27.19b2ee13.js",
    "revision": "fddc5d50737764b49ddab310fcd469b6"
  },
  {
    "url": "assets/js/28.63424207.js",
    "revision": "7683c9f7dc169c36a318c04cf16e78cb"
  },
  {
    "url": "assets/js/29.ab4106ad.js",
    "revision": "f3612907f0860fea7034305fef81a05f"
  },
  {
    "url": "assets/js/3.1d0553cb.js",
    "revision": "c6d4a584de35a41b06fef400f1d3c4d3"
  },
  {
    "url": "assets/js/30.32335ed4.js",
    "revision": "70c01810c058d89aa77e4cbc04541062"
  },
  {
    "url": "assets/js/31.3df0641e.js",
    "revision": "f6f04b6cf2c45736c516546f96dfab9a"
  },
  {
    "url": "assets/js/32.42e4baf7.js",
    "revision": "59a7ad7c616ab6085ec97048fb1d21d6"
  },
  {
    "url": "assets/js/33.622de53c.js",
    "revision": "7684a921a59a62e4bcb0fb6e53af9e63"
  },
  {
    "url": "assets/js/34.27ffae45.js",
    "revision": "f8a8d38773b37717c796d171a140612c"
  },
  {
    "url": "assets/js/35.71761aff.js",
    "revision": "df7379449e121710b183c719a54263b5"
  },
  {
    "url": "assets/js/36.750b5771.js",
    "revision": "b44b46389464d682be1117b437d94a9f"
  },
  {
    "url": "assets/js/37.ea661514.js",
    "revision": "2f0a12dc33021ce2248301c66c38214c"
  },
  {
    "url": "assets/js/38.30dba6de.js",
    "revision": "579fc9a8d398cd1bd41c8274d9fd8c54"
  },
  {
    "url": "assets/js/39.f764d02f.js",
    "revision": "bff1e57ad67096b64204176dba34ec1a"
  },
  {
    "url": "assets/js/4.d0f4a55d.js",
    "revision": "08de63f91865dc542434ded9704e1ed9"
  },
  {
    "url": "assets/js/40.bee8a90f.js",
    "revision": "1a8cc30f87fb96eb883e741636149cc3"
  },
  {
    "url": "assets/js/41.c5a8fa19.js",
    "revision": "2822b7aabac68eaf25fbba14e9405364"
  },
  {
    "url": "assets/js/42.ba0f8284.js",
    "revision": "ecae25cbbe584df8c6b5d9f1f1fc5a54"
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
    "url": "assets/js/app.aaa3b55e.js",
    "revision": "af1eaed6131c95cb7406b5deca73ad4e"
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
    "revision": "681e972b6312b78b1641c951ceb830b4"
  },
  {
    "url": "categories/css/index.html",
    "revision": "652bd114990b4ee5c4aaba89fbf3940b"
  },
  {
    "url": "categories/git/index.html",
    "revision": "4ac50b7ff8a42fe723d43adf5b908a06"
  },
  {
    "url": "categories/index.html",
    "revision": "ee92d27cbbef8fb73efb95518e292240"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "4fa6beb2d78cce60f4f316442c3294ee"
  },
  {
    "url": "categories/react/index.html",
    "revision": "2c327ed7ace74e93546506adb49e09b8"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "08c6de5f9e0f03dbe5a9d60ddab00056"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "9787714f79248a43b78f3eca47372dca"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "3aa6a7aec71d06bc83679151ddd67762"
  },
  {
    "url": "categories/成长之路/index.html",
    "revision": "30d4dcb2d06e9fdaa34dd2e06acef731"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "f214cb62a17796f20ada86756d29785a"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "0036b4299ffdad7a0d88942eb66fc240"
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
    "revision": "06c81e7005313baa2cfc53e0b00001be"
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
    "revision": "41600194ec5cb54a2c4b31931b74b631"
  },
  {
    "url": "tag/git/index.html",
    "revision": "a99ccb93614c9f216f0657e265226c55"
  },
  {
    "url": "tag/index.html",
    "revision": "67ce1bb742214de67a9c2cd560478f89"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "49d7a539357604c646d9e2a1de2a1238"
  },
  {
    "url": "tag/react/index.html",
    "revision": "5a1a890d15c6c2695cd38ca686b36f69"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "58ee6bf9b513ee8a3dcb22e3fd503dce"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "cee1afccc976c2aa49cf5268349c7192"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "4c3a2666547f3171518b01bbaa507667"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "3c8e3f1d3423502e7357cbd8bf6c1284"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "f20e1aff2a4857c35cb6d2204ced61de"
  },
  {
    "url": "tag/成长之路/index.html",
    "revision": "3206d2432953fc5c70068824f4ee92cb"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "c0cd8a9cfd9db3972afa4a8f2217ecf5"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "027f3faf15672a203031cfc2a8494720"
  },
  {
    "url": "timeline/index.html",
    "revision": "960ebb44a9d5e334878bd0de8133b136"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "2f238d0802a7e9d34c128006c4d43a62"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "02a2928cbed76f125c830dd2a5d017d6"
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
