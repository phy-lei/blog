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
    "revision": "e4ba9e4575aac22af014c03c1f6b0f7b"
  },
  {
    "url": "20200526/index.html",
    "revision": "6c17eb6f96c20b1d51495b65e6174191"
  },
  {
    "url": "20200528/index.html",
    "revision": "f226d3e2cc0f1a5a3c5b1c021c302ef9"
  },
  {
    "url": "20200529/index.html",
    "revision": "21d30c277d2e3f45987489e57b513da1"
  },
  {
    "url": "20200601/index.html",
    "revision": "27a4a636cb1252239dc2d9fce47a75be"
  },
  {
    "url": "20200602/index.html",
    "revision": "78a1941543f3ab5e0fc8152cefaa5c3b"
  },
  {
    "url": "20200604/index.html",
    "revision": "b6ca5629530c0ca2297131154bab64da"
  },
  {
    "url": "20200612/index.html",
    "revision": "e525372ca1396705055a24c8013e2116"
  },
  {
    "url": "20200720/index.html",
    "revision": "b9f53f9124175f4248c79bd6468d9601"
  },
  {
    "url": "20200804/index.html",
    "revision": "a9c0afccb4d8112cfb03328555b813cd"
  },
  {
    "url": "20200812/index.html",
    "revision": "8acfc322dd2e91c7da7f00257a728e51"
  },
  {
    "url": "20201013/index.html",
    "revision": "aab41524104d51943541103651d22868"
  },
  {
    "url": "20210112/index.html",
    "revision": "c885ad48adf4aeeb93d0d9b2dd5623d4"
  },
  {
    "url": "20210123/index.html",
    "revision": "a931e5e428434d257eba40d0caa69b2d"
  },
  {
    "url": "20210129/index.html",
    "revision": "d49af63c094748253b35a75e83085db6"
  },
  {
    "url": "20210327/index.html",
    "revision": "62550d57d2ca7a71202f4b9a048c0a54"
  },
  {
    "url": "404.html",
    "revision": "c977b7deb0dd88f1ed11625ff690bbc2"
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
    "url": "assets/js/app.fb8df197.js",
    "revision": "7b2ff1b463a573ce976176fae77dc834"
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
    "revision": "bc7b150396fe76614d80989f38de192b"
  },
  {
    "url": "categories/css/index.html",
    "revision": "066a0f9bcace18ed2925836ef4f4dc48"
  },
  {
    "url": "categories/index.html",
    "revision": "1549e46a889446ebbbc1236a65719ca8"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "29ca9a572a2d651590072bec5a784ecc"
  },
  {
    "url": "categories/react/index.html",
    "revision": "d66400b7829a20fc9ae5eb205c91a24b"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "e5c55bec88a0c2804c207b943005a4bb"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "083c670e3f17a939a9d8e19d4226d02d"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "5e56a6cca8e89ef3c6c5c07c3af2f6a5"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "20e538d98d7e521c94e3ac1b22df661b"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "6ad65496f6dc17f494ed30c4750130d2"
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
    "revision": "a7144998309e4b81d7f80dc1815a46a9"
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
    "revision": "663dd142380af7915442ff8f81df143b"
  },
  {
    "url": "tag/index.html",
    "revision": "f0d45ca2e2920fa65b10d2603adfd233"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "3226a7767f331384b7a41dce3d876fff"
  },
  {
    "url": "tag/react/index.html",
    "revision": "e4d591e4a21a1bbc26c8ae357f24e6e1"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "18db9fe961eb06a3abf4afcbbbb7201f"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "2d86cf585b37fd85745739f9c7f7d3c6"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "a9591297f642f8bc4bf8c75a7a6b8a75"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "b4544de639bff3cbbc042cecd55a5a71"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "bb7cce86c2ce9b9f8364412d100d3110"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "1a7602e09cc2c449d784079267688e65"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "6cd23ffac0f7bd5e3779d2f9fa746985"
  },
  {
    "url": "timeline/index.html",
    "revision": "fef68b21ca5a67d02e69fb0f74b4cacc"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "a9c32a771007f2176d2a49ba9ee308b0"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "af11c6c537b64476b9de3c07075fa788"
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
