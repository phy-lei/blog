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
    "revision": "d7a9a6e01eabafe11b2a524653df4f3a"
  },
  {
    "url": "20200526/index.html",
    "revision": "efdb8bbf0e6dc152cb55afe93d594a8c"
  },
  {
    "url": "20200528/index.html",
    "revision": "30eb178586aa5053cc0b781a4bd23010"
  },
  {
    "url": "20200529/index.html",
    "revision": "749905e750a568b7c46916be76de7ccf"
  },
  {
    "url": "20200601/index.html",
    "revision": "d18936cf16c107550f9450e3d8cc038a"
  },
  {
    "url": "20200602/index.html",
    "revision": "9d59b36737d95a166b511a7f0b60b3d9"
  },
  {
    "url": "20200604/index.html",
    "revision": "e88cba6baaabc03d322ea300ef875b9e"
  },
  {
    "url": "20200612/index.html",
    "revision": "e632cac9416749ddc6b8b40e17e0512a"
  },
  {
    "url": "20200720/index.html",
    "revision": "e8a5e93d9d7f0c03b09ec30037354c9c"
  },
  {
    "url": "20200804/index.html",
    "revision": "cfdf31cb4e5e0921866d096c85202b24"
  },
  {
    "url": "20200812/index.html",
    "revision": "b0cc1189748aca361979336228b4b680"
  },
  {
    "url": "20201013/index.html",
    "revision": "223f8220d9e88a897213ad53453e9cc0"
  },
  {
    "url": "20210112/index.html",
    "revision": "d6d6801c4c3d5240365e7eb578a319ac"
  },
  {
    "url": "20210123/index.html",
    "revision": "b1cb9a08d75be2d50595825d3d7d1f30"
  },
  {
    "url": "20210129/index.html",
    "revision": "94af8e3bc560707940b4a31864917070"
  },
  {
    "url": "20210327/index.html",
    "revision": "cfff8094f02d544f1400bb8d9c492cb1"
  },
  {
    "url": "404.html",
    "revision": "7ffcc07e6235eafd46702b5a85402280"
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
    "url": "assets/js/10.f79f10ab.js",
    "revision": "8c154289a41a452ea7aa81fd48e91955"
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
    "url": "assets/js/16.5e5443ff.js",
    "revision": "e70c4b388065b2e084324e38948e88fa"
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
    "url": "assets/js/22.b742108a.js",
    "revision": "1cc08f1cced09b870c760679f815d254"
  },
  {
    "url": "assets/js/23.10f7aac8.js",
    "revision": "2d1808fe9b68e3959efe5936c68beb8c"
  },
  {
    "url": "assets/js/24.eaa9fcbc.js",
    "revision": "cea7cecd5502b55f4110752809bc61e1"
  },
  {
    "url": "assets/js/25.7d5c3001.js",
    "revision": "8f6961db8322bae7577a9363f47b1388"
  },
  {
    "url": "assets/js/26.f7ffd602.js",
    "revision": "19bae0c00c20209e6375e7bbbe81db9e"
  },
  {
    "url": "assets/js/27.2b3c203b.js",
    "revision": "f03215c2f006fed50c4c303dfcd1f96f"
  },
  {
    "url": "assets/js/28.70392e39.js",
    "revision": "8ba626498a6f173b4ef877c3db5ad020"
  },
  {
    "url": "assets/js/29.6def4335.js",
    "revision": "6c7d9703cc9063020df2655d640c2911"
  },
  {
    "url": "assets/js/3.85657320.js",
    "revision": "ded4e694ba473251ad0f154cb76e213e"
  },
  {
    "url": "assets/js/30.4935657e.js",
    "revision": "26811c7997586551c0b289fc6b66fdf4"
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
    "url": "assets/js/app.9c733469.js",
    "revision": "b2aca225f2410bffd18930b2567aec8b"
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
    "revision": "d4b9a3f256f743d5ad69f03137f81665"
  },
  {
    "url": "categories/css/index.html",
    "revision": "97b7ecd65d06d9edc5d68468b606f8b5"
  },
  {
    "url": "categories/index.html",
    "revision": "add169e1eacf4fb8966df4e98ea14edb"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "a4564ee79c499ac0b71ee86ffa24909c"
  },
  {
    "url": "categories/react/index.html",
    "revision": "c90f7113c1e1b55e1e0abe3ccc06e95c"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "b9da78d1c308b3601b8c6b950919d7d4"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "fc1cc7b81db39c5944336cfa1037eb44"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "4c217e559231f878b5c69fd53b358e81"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "aef700228f659607c393ecfee7910f3b"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "fd66c10cfc14196c4e91440adccc5ae4"
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
    "revision": "7d2642363824bd839868a2e9cd2922d3"
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
    "revision": "18c892be2be25b8616f27a70799f92be"
  },
  {
    "url": "tag/index.html",
    "revision": "0eb6a9edfa1cee8326301379aff9a410"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "ca357ad96e318e29e0d4081bfcf02fab"
  },
  {
    "url": "tag/react/index.html",
    "revision": "d4b2e2a827c2e4263a4a45e552ac1d9f"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "5d264cb76674c0d24f45472604562462"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "469238e513f53025ea6f9e9a7feb3571"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "30a6257b3731273595d542e6cb6ce7bd"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "8523d719d762bc55080be3a81e479c5e"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "3d16beb678a86646309edb6d24b43efd"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "db254948b2053b6359e1a8d59c0bab38"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "68164be5f18ca4bb4889b42185e26dc5"
  },
  {
    "url": "timeline/index.html",
    "revision": "067bcce26daae82352c1cee08ef1dcf7"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "d4a2a444300a295dd8af0eabf6030446"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "64c827cf2b549210c4dc071d6a88eb74"
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
