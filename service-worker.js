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
    "revision": "04cf3cb2afe0e84fe1e476eb9aa82c74"
  },
  {
    "url": "20200526/index.html",
    "revision": "507cf1cdd77b13cbeb871ddc7d1a9205"
  },
  {
    "url": "20200528/index.html",
    "revision": "c06dad4ef3917d04e95f1ff79862dcb5"
  },
  {
    "url": "20200529/index.html",
    "revision": "cdac6ff491d6ef9f1ee925881795d779"
  },
  {
    "url": "20200601/index.html",
    "revision": "66d83b4c6800b665ee7706fc0499c88f"
  },
  {
    "url": "20200602/index.html",
    "revision": "d60cca79c268ff00ef86a215edfb68c3"
  },
  {
    "url": "20200604/index.html",
    "revision": "2ae4e380c236fdfb4ba2f06dc2b56588"
  },
  {
    "url": "20200612/index.html",
    "revision": "b33a751e8d2c7ec1a74fc3ad35800446"
  },
  {
    "url": "20200720/index.html",
    "revision": "4057029bca4a2f6ac8528a7b1df73600"
  },
  {
    "url": "20200804/index.html",
    "revision": "26e89c321a2d39cf2925765072dfcbe5"
  },
  {
    "url": "20200812/index.html",
    "revision": "218a641d19490fcf016adaf99d3f73a6"
  },
  {
    "url": "20201013/index.html",
    "revision": "616b7ad640cc7ef500782083fb10846f"
  },
  {
    "url": "20210112/index.html",
    "revision": "88e660bbd2fa1e8c07ddcbe99da0a507"
  },
  {
    "url": "20210123/index.html",
    "revision": "b0125b5cfc17ad50fcac938d8fd00af9"
  },
  {
    "url": "20210129/index.html",
    "revision": "25cb1f03b37e30b40b96f4e21206a879"
  },
  {
    "url": "20210327/index.html",
    "revision": "3e73158ec7bf9be454bc45be585aeac8"
  },
  {
    "url": "20210502/index.html",
    "revision": "727b8952f842329d4158297735219ffa"
  },
  {
    "url": "20210507_01/index.html",
    "revision": "e5bd468dd1ee2516a8e9efd90b8b5dca"
  },
  {
    "url": "20210507_02/index.html",
    "revision": "535b7f8d303065861e3334ced9d860fa"
  },
  {
    "url": "20210508/index.html",
    "revision": "f9ad68ec8a678a428a45e9c46f2ef7e1"
  },
  {
    "url": "20210510/index.html",
    "revision": "a61ce5c30cf7f7595045b16d52f8b830"
  },
  {
    "url": "20210703/index.html",
    "revision": "d23b7b4a375b7726019ffc6998f66ab8"
  },
  {
    "url": "20210809/index.html",
    "revision": "e95e2fc854a48b4f389cedeb9903e6b2"
  },
  {
    "url": "20210901/index.html",
    "revision": "ee15e83391500db5718bd8b499f192d9"
  },
  {
    "url": "20211124/index.html",
    "revision": "544c933c9b6e9d32c6a39a731a16ddb1"
  },
  {
    "url": "20211210/index.html",
    "revision": "4528f991145e6563285c2749a822a602"
  },
  {
    "url": "404.html",
    "revision": "25011b87d2a8c8b6bffd071a2dce1f35"
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
    "url": "assets/js/11.a9b4b66b.js",
    "revision": "9bbd55889b3f697fb139264a78948025"
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
    "url": "assets/js/28.08c00ef4.js",
    "revision": "4f3857023ef6dde911efce15594c720e"
  },
  {
    "url": "assets/js/29.7d73e7f6.js",
    "revision": "12e701e2cb9388bbb089e119e7ae613d"
  },
  {
    "url": "assets/js/3.1d0553cb.js",
    "revision": "c6d4a584de35a41b06fef400f1d3c4d3"
  },
  {
    "url": "assets/js/30.4206881e.js",
    "revision": "c1099b345e4f66308e31996c94432281"
  },
  {
    "url": "assets/js/31.aa9ecef4.js",
    "revision": "0077fe9102d6fe692b913825b5048b35"
  },
  {
    "url": "assets/js/32.da696195.js",
    "revision": "08e50f49ccb31013ca37797fd7b84964"
  },
  {
    "url": "assets/js/33.20e7ed3c.js",
    "revision": "64e6019bd83f828f24c12025c0ae7d5b"
  },
  {
    "url": "assets/js/34.cdaadb9c.js",
    "revision": "014d0bafb1a0f5c83f25cf1f3b3d96c3"
  },
  {
    "url": "assets/js/35.c4dd1184.js",
    "revision": "ee214514356cb4298e79c76f72e39a9d"
  },
  {
    "url": "assets/js/36.c6758090.js",
    "revision": "077ee974f96b511ec292b3254edf9b23"
  },
  {
    "url": "assets/js/37.26cc1022.js",
    "revision": "d550e704cc58e6bdf7511751842e9fa2"
  },
  {
    "url": "assets/js/38.7e5daa40.js",
    "revision": "01c3f1dbbc1847f4633f2b810135dd4e"
  },
  {
    "url": "assets/js/39.48c0a733.js",
    "revision": "24963a47cdec057200980b96f4cbd169"
  },
  {
    "url": "assets/js/4.d0f4a55d.js",
    "revision": "08de63f91865dc542434ded9704e1ed9"
  },
  {
    "url": "assets/js/40.ed68b0b3.js",
    "revision": "a45ff714863ae6aa30853d65b6a03f77"
  },
  {
    "url": "assets/js/41.1be6c352.js",
    "revision": "64a2520714bcc0260ec000934431845f"
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
    "url": "assets/js/app.94e36d22.js",
    "revision": "0fece6f983c65c60cafe0dd29d0d2862"
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
    "revision": "1f8c6ef9981fece9384503e6d2448002"
  },
  {
    "url": "categories/css/index.html",
    "revision": "35bd7e6b39895eb934ab7c88e78b0c45"
  },
  {
    "url": "categories/git/index.html",
    "revision": "65e8a2fab7f8402001d3c37c84cf6030"
  },
  {
    "url": "categories/index.html",
    "revision": "9c74786b49e30711da2b3aa99773de83"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "160803ad27d4e1a26ecbfc494cab210a"
  },
  {
    "url": "categories/react/index.html",
    "revision": "e34615815c423ce05d1e9432a7c32258"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "33b1bdc5a87de1e6520be314137f5502"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "1445cd56c09daf39d051a2fe51202d44"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "eae1d29bbbd68152092fddfa6bc220e6"
  },
  {
    "url": "categories/成长之路/index.html",
    "revision": "9150c57e525f5b0363b11479ed72891c"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "0dee00fcab8618ee79f3d18d59096c18"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "0c2d256f957dd6d8b74b9f51afc94070"
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
    "revision": "51aa4ad5f1a7acc32620b1a868435174"
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
    "revision": "761fe566c2ecfdef938629086bc79620"
  },
  {
    "url": "tag/git/index.html",
    "revision": "d68d9c7c34df0a54e1fb94b0103ce441"
  },
  {
    "url": "tag/index.html",
    "revision": "e15cbe43dcd6b9c91ea5b829cfe7fbb5"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "4c5cc04a4f24a8736f57c43355372a47"
  },
  {
    "url": "tag/react/index.html",
    "revision": "630b04f771f195b4edec5e0fceaf9745"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "12339312b96e9eb41ac3ac5a676d595c"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "1fde4cdbebfb8d57ef60d84ca1d3effd"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "ffb20fd41560dee320e10f169668c136"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "3bdb9cb35c39068f2b6e04406b59b372"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "30ac34bdfd2c356b2023507b6ff39abe"
  },
  {
    "url": "tag/成长之路/index.html",
    "revision": "ed190f7d46009d81c7c9cc2b0faa4fc6"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "70625e4c34ecc112b7f9343fe8255685"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "f2817cd6f944b50e72b1314d61f1f6d5"
  },
  {
    "url": "timeline/index.html",
    "revision": "190d6e171c145ed9239e7401a1f34bd7"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "5bdfe26f21d0afa51e82c3b31772cd6d"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "bc07e69561d231a9a7caa337c93e3dbb"
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
