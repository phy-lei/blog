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
    "revision": "f220c4f25ba4def0594444834f67a2cb"
  },
  {
    "url": "20200526/index.html",
    "revision": "075dd7f83092073399bbaa5b4ceb1707"
  },
  {
    "url": "20200528/index.html",
    "revision": "19020ea06228522287573f2fdec96173"
  },
  {
    "url": "20200529/index.html",
    "revision": "2cdac84b030fff254608575061115329"
  },
  {
    "url": "20200601/index.html",
    "revision": "328ffda44279489838158bc01b01c661"
  },
  {
    "url": "20200602/index.html",
    "revision": "fc86fbb11ef571307363a4a14a4a9e2e"
  },
  {
    "url": "20200604/index.html",
    "revision": "34813c323d3acccf8b73b38a5807fdc9"
  },
  {
    "url": "20200612/index.html",
    "revision": "4b7bb768d6aac2892e66b8f8840f3e73"
  },
  {
    "url": "20200720/index.html",
    "revision": "4ae07411d277694290f5d6742b723a13"
  },
  {
    "url": "20200804/index.html",
    "revision": "0b5e3b3680d335a26395e0562f3b10ff"
  },
  {
    "url": "20200812/index.html",
    "revision": "bcf8b9266c620b87c63fdb72114fbaf3"
  },
  {
    "url": "20201013/index.html",
    "revision": "d276adf4016ebf03cf66baa69f57fbed"
  },
  {
    "url": "20210112/index.html",
    "revision": "0b640980828062f2e5714406650094c1"
  },
  {
    "url": "20210123/index.html",
    "revision": "9bb85275a32482b985c350454d0ea2d3"
  },
  {
    "url": "20210129/index.html",
    "revision": "7566d4a321623d32c0857656d350c9ac"
  },
  {
    "url": "20210327/index.html",
    "revision": "c60428c2de837c3881cf4b10ee0e9f39"
  },
  {
    "url": "20210502/index.html",
    "revision": "e2cf9ffbc6801b21e0705b206808b375"
  },
  {
    "url": "20210507_01/index.html",
    "revision": "ba1b129e9004d2c838c6e6cc5fae6d8e"
  },
  {
    "url": "20210507_02/index.html",
    "revision": "8e894f3746fa481ab2a3260e58482989"
  },
  {
    "url": "20210508/index.html",
    "revision": "a2b21755b4a7a6fa49330e5ed3ec0ea0"
  },
  {
    "url": "20210510/index.html",
    "revision": "2528d2014e0309260feffa24409d72b7"
  },
  {
    "url": "20210703/index.html",
    "revision": "f11f2a57b8dedbdc1330efc1adf97d35"
  },
  {
    "url": "20210809/index.html",
    "revision": "79212e1b3dbeaf08f1b234b34454d2fd"
  },
  {
    "url": "20210901/index.html",
    "revision": "1409a3891292a7f8ee19055f8f794ff8"
  },
  {
    "url": "20211124/index.html",
    "revision": "ed1b7f43523e00832770a84f7a9dd46d"
  },
  {
    "url": "20211210/index.html",
    "revision": "0f00d04f1cbefd7a4ef5290efcb1abcb"
  },
  {
    "url": "20220212/index.html",
    "revision": "aa1082ce153d744059283827134cfe7e"
  },
  {
    "url": "404.html",
    "revision": "7a1f60ce6d6e14df1daa553424d57814"
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
    "url": "assets/js/app.6f519806.js",
    "revision": "bd4ace96cd578f363def0660b4eff970"
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
    "revision": "77afe3ca05e0122500d4d7ab6e24b2f2"
  },
  {
    "url": "categories/css/index.html",
    "revision": "744d072d2738b2fef553160ed1723082"
  },
  {
    "url": "categories/git/index.html",
    "revision": "d3462f36c74eb2062611f61987ed4213"
  },
  {
    "url": "categories/index.html",
    "revision": "f2ebe09e1195a8cf86875ee86516b6f8"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "7a7a0bef9bd748dab713deefcb541591"
  },
  {
    "url": "categories/react/index.html",
    "revision": "9f1bb8a1b1aa74ad7045cfae9faefe95"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "5298021baf9b375890110ac0afe38db6"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "6b49ecce458eb59f9e1421cc1b5fb431"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "dca3f20d6e8829c4bde0e2630c1d7b84"
  },
  {
    "url": "categories/成长之路/index.html",
    "revision": "8695a41d40a9b336eddbb5064910e535"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "6c52ec59d32b697487fae7ade4ff7e80"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "4c0afca5f4862ba1a7e3a3c85bea1e23"
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
    "revision": "6bfb1a6b96037ff5b08a2cccda8751e4"
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
    "revision": "0162b6165cbc50fba285fe6180ea8818"
  },
  {
    "url": "tag/git/index.html",
    "revision": "84c5068f59b4fb9c9558aa23f0ca415c"
  },
  {
    "url": "tag/index.html",
    "revision": "0118f41047a01d0585a20fa2c60846a8"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "0ec0cd17b659ffed65aced474d3dd402"
  },
  {
    "url": "tag/react/index.html",
    "revision": "d32e3412eb5e5c22e98423f2e2b45404"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "f152b5365bc672c9bc334bd5ad7b06a9"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "bb0c9f2db4a06b78f2bb508aedf9fc3c"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "824603e58c041fe3760530ea74a9e11b"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "fcb35726cf466797d28ba4eec34b5514"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "551db586a1aed7b1a61187c62ea7070d"
  },
  {
    "url": "tag/成长之路/index.html",
    "revision": "2ae950a36cc3c86a63e399401e0c075a"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "1b666f451c5cddff24f570bd7e2eb677"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "0776bf4d815340c32ed73cd6b42bb77d"
  },
  {
    "url": "timeline/index.html",
    "revision": "4d6a04ca9a28f67129a718f671ea807b"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "abe8117677c220bc9270405a954fd083"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "abe16dc59f3f4591b02b712be2c6be74"
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
