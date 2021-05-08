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
    "revision": "c77d5dcdd75bff4cb7abe9264ebc540f"
  },
  {
    "url": "20200526/index.html",
    "revision": "4a11c4f7b6c3fbfb1135d8b716fc583c"
  },
  {
    "url": "20200528/index.html",
    "revision": "f091445f5945be0b56ac9dbfdaad4e23"
  },
  {
    "url": "20200529/index.html",
    "revision": "3ecc37a1fe102754434ffc3717a60e4c"
  },
  {
    "url": "20200601/index.html",
    "revision": "d88cb36abaa96b16178d6a9e0fa48ef6"
  },
  {
    "url": "20200602/index.html",
    "revision": "8a7988d03c0418fd757004c8e1ae79b1"
  },
  {
    "url": "20200604/index.html",
    "revision": "905b2a189609a76d148db9353c134992"
  },
  {
    "url": "20200612/index.html",
    "revision": "e55d4a2a1aab991f241c4f665a1c2c71"
  },
  {
    "url": "20200720/index.html",
    "revision": "33a0acab0509598bba358d2a3e41af0a"
  },
  {
    "url": "20200804/index.html",
    "revision": "2c05b382cfe9496ed621dceff3763c0c"
  },
  {
    "url": "20200812/index.html",
    "revision": "31823cb7655959eadd5d56118c9595a0"
  },
  {
    "url": "20201013/index.html",
    "revision": "556d5a24694da79e20ddd496b32f0b51"
  },
  {
    "url": "20210112/index.html",
    "revision": "6268231e847c93f87ed26f34156413d0"
  },
  {
    "url": "20210123/index.html",
    "revision": "51c5cd74add032fb328f96a14d2b08d5"
  },
  {
    "url": "20210129/index.html",
    "revision": "f03831c5bcf9390f77dd830a3043b93c"
  },
  {
    "url": "20210327/index.html",
    "revision": "e68298a8592e11e940c28b17c6355ac3"
  },
  {
    "url": "20210502/index.html",
    "revision": "106bd7561690a435f0ae8f755dfb1345"
  },
  {
    "url": "20210507_01/index.html",
    "revision": "412804b86840c72ba035ad53892ca093"
  },
  {
    "url": "20210507_02/index.html",
    "revision": "6f9f1c51ecf9e02391751aa8577f8c40"
  },
  {
    "url": "20210508/index.html",
    "revision": "7184bffbf5be79048e404d8badc03aab"
  },
  {
    "url": "404.html",
    "revision": "2c7000bb629eb8e5630cbb970106a888"
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
    "url": "assets/js/10.03312ab5.js",
    "revision": "abfc8e3fdf2812987df46eeaf300f89e"
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
    "url": "assets/js/27.cb16278f.js",
    "revision": "c3ea246d58db43271f64af93ead862ac"
  },
  {
    "url": "assets/js/28.289098ad.js",
    "revision": "810013718ec6d9809b9ae3e89571b6b9"
  },
  {
    "url": "assets/js/29.09dfce3c.js",
    "revision": "a43d12e5cd74cd093df742ae78758e97"
  },
  {
    "url": "assets/js/3.85657320.js",
    "revision": "ded4e694ba473251ad0f154cb76e213e"
  },
  {
    "url": "assets/js/30.ddb788d5.js",
    "revision": "b1aced840f7843d99e2ae4dec37c4516"
  },
  {
    "url": "assets/js/31.5eca772d.js",
    "revision": "e0d348d871308bd4481d519f9ddaa58a"
  },
  {
    "url": "assets/js/32.08513ab6.js",
    "revision": "d40efa31946d600b30e4a41303650372"
  },
  {
    "url": "assets/js/33.a2faed5f.js",
    "revision": "7347931ed3c755a0ca799f39a1986442"
  },
  {
    "url": "assets/js/34.b7a161b9.js",
    "revision": "4f4c069b77a330bf7ff7e7dcb2bd2d9f"
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
    "url": "assets/js/app.f6e45bc2.js",
    "revision": "cb492f7e71b9693164e862f8fc4351d4"
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
    "revision": "bd4aaa4284737fefc5803a5c74250dad"
  },
  {
    "url": "categories/css/index.html",
    "revision": "e42a47fce3286a656a5620088a7e2919"
  },
  {
    "url": "categories/index.html",
    "revision": "2563d6facd38cfeb4e6acba3b7d21eaf"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "4c2e351eb629aeb3f377d8756014bc84"
  },
  {
    "url": "categories/react/index.html",
    "revision": "cb07c11f00410e24c3804a4a6e53022e"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "1397ba0acee7ed8b67e2b8eb10c8f4ee"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "a5cd05ec239b6d166bb50b6c0875d545"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "4ccb26acbadc28f356bdea39666fb79e"
  },
  {
    "url": "categories/成长之路/index.html",
    "revision": "c0f33d2390899c8d565b55767d9ad99e"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "11d9d23c428c655b1069fe15b906fe9b"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "cb59afc937fd3021ea05d17aab259e50"
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
    "revision": "55e5182dd54ec0c1e70ed7a13ed3da4d"
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
    "revision": "f54d1c9812d114c113063148f55264ac"
  },
  {
    "url": "tag/index.html",
    "revision": "ae7fa4f6408039b22d365b291eea6e55"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "190671e3fa8766ca0c9829dfffa09b51"
  },
  {
    "url": "tag/react/index.html",
    "revision": "051a9ba1c118b0aa504fc548ec9d8769"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "ee5bf23de33da6e4b5a83b07286eb1a7"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "796c95efc285017b3465a65f3c969123"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "f55b576bece810b15d56e3cac9ef36df"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "e706ff784580a3bd812d23a4a1c6a059"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "0539e0a93a4d9631bbf303dc1ae7ac7a"
  },
  {
    "url": "tag/成长之路/index.html",
    "revision": "1ce206c72a0310c1ca6244478ef95f5c"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "27a6b32794261032ac00548087a924e8"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "0b2b2a0a907d31ad4a64c1e3a913dbc4"
  },
  {
    "url": "timeline/index.html",
    "revision": "fcff548967928cc30412b4fb34971bd3"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "a99cd14c0e97c3d7fde17d6f8c595bd8"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "bd0622d6ed9fdf1e5e21dae152c0522a"
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
