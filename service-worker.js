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
    "revision": "c19895bd579f5331ed43a3c9880cd94a"
  },
  {
    "url": "20200526/index.html",
    "revision": "1284babc046838ce473d74d4d33e8523"
  },
  {
    "url": "20200528/index.html",
    "revision": "37b40d12dcf2895f02fcfa65217f573b"
  },
  {
    "url": "20200529/index.html",
    "revision": "bd88279ecc1ec4c118ed798645825a7d"
  },
  {
    "url": "20200601/index.html",
    "revision": "3ecaec24dc91b21913074fd4291aff1a"
  },
  {
    "url": "20200602/index.html",
    "revision": "7ccea62b57aca5834aaf6079bc21710d"
  },
  {
    "url": "20200604/index.html",
    "revision": "365c57855a9d3633082d732964dc6dde"
  },
  {
    "url": "20200612/index.html",
    "revision": "e493593a78842a7ca999ad9235910b31"
  },
  {
    "url": "20200720/index.html",
    "revision": "82ee0c283cbe54ca6cb66511c4d545d6"
  },
  {
    "url": "20200804/index.html",
    "revision": "deabb82919301ee0a7ff03aff5edbbb3"
  },
  {
    "url": "20200812/index.html",
    "revision": "84425238ac5d1ce054dd1b9bc72f82d4"
  },
  {
    "url": "20201013/index.html",
    "revision": "21a28200ad5a5fc16da073f0b89c3fa1"
  },
  {
    "url": "20210112/index.html",
    "revision": "04a2f600e69a7c6457b9e9591a0ad84f"
  },
  {
    "url": "20210123/index.html",
    "revision": "207061d8a7e10a2afb0756176639f7f4"
  },
  {
    "url": "20210129/index.html",
    "revision": "14a5f81cdacae2a1d914fb0d8d4c3f99"
  },
  {
    "url": "20210327/index.html",
    "revision": "21a3305d65caef42b7a6d1370383a529"
  },
  {
    "url": "20210502/index.html",
    "revision": "a04bbb05ee158fe3263e7f220201196a"
  },
  {
    "url": "20210507_01/index.html",
    "revision": "76ef390b5b6294715585c322edf97442"
  },
  {
    "url": "20210507_02/index.html",
    "revision": "0c81315bd91726dabf540bd8fe8569c3"
  },
  {
    "url": "20210508/index.html",
    "revision": "dcb2f4cdf56d6a289f03e7fc6ee0544e"
  },
  {
    "url": "20210510/index.html",
    "revision": "d3841915e17f98d36af1a774a5fb3018"
  },
  {
    "url": "20210703/index.html",
    "revision": "bbc8e64f24a862f69f3111d4d085a710"
  },
  {
    "url": "20210809/index.html",
    "revision": "6db8420fa608e2296a89ed545a145b79"
  },
  {
    "url": "404.html",
    "revision": "ba78251a8f6e225d474b917ad95d2b4f"
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
    "url": "assets/css/0.styles.772212fd.css",
    "revision": "882938592519bdb75ac2f8811fdc2eb0"
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
    "url": "assets/js/1.51d2f36d.js",
    "revision": "ddc9f734993167dbe05adceab30f6431"
  },
  {
    "url": "assets/js/10.0afd6a30.js",
    "revision": "0402c52f01d0ecc3790b801457e88072"
  },
  {
    "url": "assets/js/11.4f6187af.js",
    "revision": "60459eb502a796ddba6617318363d612"
  },
  {
    "url": "assets/js/12.1b857093.js",
    "revision": "f299510804768fbcf669fdf5d2f4b0fd"
  },
  {
    "url": "assets/js/13.d823568a.js",
    "revision": "bd4c124c8112c31713622b247d7f6b48"
  },
  {
    "url": "assets/js/14.63d09ad0.js",
    "revision": "a77d2034168087a5dfb61557531e2d25"
  },
  {
    "url": "assets/js/15.bda9a92d.js",
    "revision": "5ade1d8f60fa253eb673a07d1b599323"
  },
  {
    "url": "assets/js/16.bbeabf8d.js",
    "revision": "3a1e8a35f0a669e45b890069ae26eab2"
  },
  {
    "url": "assets/js/17.de6a5b76.js",
    "revision": "b424ee0f83ea3d94e4af554032bf9d9c"
  },
  {
    "url": "assets/js/18.5cb611ef.js",
    "revision": "8fc601038427e2b2e03b6836240286ca"
  },
  {
    "url": "assets/js/19.a8cc77e2.js",
    "revision": "a3f80e6eeb0f9d96b7387d0f5494d82c"
  },
  {
    "url": "assets/js/20.eebc22d1.js",
    "revision": "08e91a66aaf741e6ba065f8866f7cdcd"
  },
  {
    "url": "assets/js/21.579a6fec.js",
    "revision": "a1e9a36edbae392769acdaac543be1b2"
  },
  {
    "url": "assets/js/22.3bb8e36d.js",
    "revision": "7701b0034b730f3319fdba53c8eb941c"
  },
  {
    "url": "assets/js/23.7192ccff.js",
    "revision": "b82403b70f449c7f6c9fe860fafeba63"
  },
  {
    "url": "assets/js/24.5a7a2b26.js",
    "revision": "69282275e58b2491b5a8a85d0010d069"
  },
  {
    "url": "assets/js/25.33a68d66.js",
    "revision": "4b7e13b22f2b6b4ede09aa16084a6c78"
  },
  {
    "url": "assets/js/26.5cfb2df4.js",
    "revision": "3b182a65f37a6b9a8ac38162933fbe46"
  },
  {
    "url": "assets/js/27.e9e71335.js",
    "revision": "85c5ed3a10dbdb0585106bcb0438bba4"
  },
  {
    "url": "assets/js/28.3f0b63b8.js",
    "revision": "88473812db18f7ec66600eb63acbf30b"
  },
  {
    "url": "assets/js/29.788df60f.js",
    "revision": "605b574701278e38e85449edeccc03b8"
  },
  {
    "url": "assets/js/3.85657320.js",
    "revision": "ded4e694ba473251ad0f154cb76e213e"
  },
  {
    "url": "assets/js/30.3aa0b4b7.js",
    "revision": "06bae55087382e9bb2696b9897b2b206"
  },
  {
    "url": "assets/js/31.c6fb524a.js",
    "revision": "77d28e8d243bf2813cfde8554cc9ec7a"
  },
  {
    "url": "assets/js/32.52fc9f23.js",
    "revision": "5fec1a94b21e5a0d96c95a2d964e0a39"
  },
  {
    "url": "assets/js/33.2465be72.js",
    "revision": "ad8668a312a2fc4f67ce6f1df7ddbe8b"
  },
  {
    "url": "assets/js/34.0a235ca4.js",
    "revision": "98985970190e9d2e8fc1e5386d39be21"
  },
  {
    "url": "assets/js/35.53ed309f.js",
    "revision": "a30ea9dbe72641f1df67a61604631a0f"
  },
  {
    "url": "assets/js/36.31569dbe.js",
    "revision": "e34327db367b965612115dff3108c7d4"
  },
  {
    "url": "assets/js/37.a9dd4569.js",
    "revision": "ce72424cbf40878464d0f6f2350d8371"
  },
  {
    "url": "assets/js/4.1cf9f4e2.js",
    "revision": "8f1d40e98ffd36666e4baa8d162865bd"
  },
  {
    "url": "assets/js/5.66c8e8a2.js",
    "revision": "80ec14f88bdcd5309d8fd2a679e14a82"
  },
  {
    "url": "assets/js/6.ce1903cd.js",
    "revision": "cd66800acc7c520670fde0afed1b37d0"
  },
  {
    "url": "assets/js/7.ed70543c.js",
    "revision": "dd640a424ffbf42024847bd004a8f47c"
  },
  {
    "url": "assets/js/8.6cf24346.js",
    "revision": "74c477d681bccd495648d0c5633bab57"
  },
  {
    "url": "assets/js/9.15c99a4c.js",
    "revision": "cede3f5545191377cb7a311a60354524"
  },
  {
    "url": "assets/js/app.5b90470d.js",
    "revision": "9087734aac61c31cdaf1a814c8bc21e3"
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
    "url": "bg.jpg",
    "revision": "e06f1a51f4c146f1fd7d42ec4b6451ad"
  },
  {
    "url": "categories/article/index.html",
    "revision": "1c130e576ea130a52b5d4dc40ae29378"
  },
  {
    "url": "categories/css/index.html",
    "revision": "8ef9b37f4e78ad4cf26cb2426a5a8d7c"
  },
  {
    "url": "categories/index.html",
    "revision": "b121331db7e987e5cbbb46c70460a947"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "6f37c8f1e8fbe75322c93c6899e4212e"
  },
  {
    "url": "categories/react/index.html",
    "revision": "86900938ade8b3c9262c096426254a8e"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "462d500868e73f4016b7309fcc627014"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "d566cbc96d5eea8d6d21001dbe3431cc"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "7fde317438aeb511c3df9436e128e567"
  },
  {
    "url": "categories/成长之路/index.html",
    "revision": "753e578851a461b9fc62783d1e1b9b16"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "4d42d311d124ee80ff579567c78ea3d3"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "7ae527bc81c1da4a30f679a21d480b37"
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
    "revision": "c96737b45085798dbf3de731f22559e2"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "mine.jpg",
    "revision": "5ef1240314ed8707848ed856f43d7b13"
  },
  {
    "url": "tag/css/index.html",
    "revision": "9a09e123af61676f14821a6e5b933726"
  },
  {
    "url": "tag/index.html",
    "revision": "07a5ea23fde1aa7dbf5844928b1731f6"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "2fe22d7b44112b10b6fa77fa9fb735aa"
  },
  {
    "url": "tag/react/index.html",
    "revision": "56dc63e27cd63c36651f0a6c55b24d32"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "d2a185655c4b0fcccdbb92c1a20ad00b"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "85b5a802ce85ba0e12b0138de759eca5"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "55e0ad0275879f4632382a7c9e51b0ed"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "1688e10f855309fb23bd4b99e1b4cb39"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "35c27f2442f5a327609efc1457606a6d"
  },
  {
    "url": "tag/成长之路/index.html",
    "revision": "36d3de8603bfc519b29daa27daa092cd"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "26884fa9289b25628c030603f4f6ac24"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "228b0e883cc15c1b602a726ed642739d"
  },
  {
    "url": "timeline/index.html",
    "revision": "a956dff24efa91a54190054b8f73c397"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "abec764a925b7ca875bf7d73fa372bd9"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "04a60c0189c2aa79956a962884cc9c71"
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
