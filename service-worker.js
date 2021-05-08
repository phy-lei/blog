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
    "revision": "fb46a32d0b9e343798c3bc39fbefe56f"
  },
  {
    "url": "20200526/index.html",
    "revision": "f1f32bb147c0d6db8937361dce68f25a"
  },
  {
    "url": "20200528/index.html",
    "revision": "8f9feb3212fc01552c29b6393b29758d"
  },
  {
    "url": "20200529/index.html",
    "revision": "4bf6878900ca4e852f398b7597e6730f"
  },
  {
    "url": "20200601/index.html",
    "revision": "62dd02f85e3276bd56c2bb1138e407b7"
  },
  {
    "url": "20200602/index.html",
    "revision": "36c2b184885fc34c15e83a8b1ac6ef75"
  },
  {
    "url": "20200604/index.html",
    "revision": "f3bfbbbfb5865484e29c2d492789f377"
  },
  {
    "url": "20200612/index.html",
    "revision": "774b3746d69cd62977925602eba031c7"
  },
  {
    "url": "20200720/index.html",
    "revision": "0f798e922bd2fb1328d86558d8a74682"
  },
  {
    "url": "20200804/index.html",
    "revision": "8894b17803296418f961d950038558e2"
  },
  {
    "url": "20200812/index.html",
    "revision": "3e376e6d258f25ecb9a148180bc29c91"
  },
  {
    "url": "20201013/index.html",
    "revision": "070b86048e2115a437324844be2e3eb6"
  },
  {
    "url": "20210112/index.html",
    "revision": "3fc8294ba96bd25a0152d0817e872f91"
  },
  {
    "url": "20210123/index.html",
    "revision": "43007ab3705facb93c7cfd1951cd7484"
  },
  {
    "url": "20210129/index.html",
    "revision": "95bba7da457686cf9557530d2c141ee0"
  },
  {
    "url": "20210327/index.html",
    "revision": "62ebf507acba9b7cf3fe4fe9f6091d26"
  },
  {
    "url": "20210502/index.html",
    "revision": "65e0f193798bf7d881b3fa4de94f96c8"
  },
  {
    "url": "20210507_01/index.html",
    "revision": "5a6676f3a019373823530a962585b50e"
  },
  {
    "url": "20210507_02/index.html",
    "revision": "05ae091057ee45a8634a825e867e6a12"
  },
  {
    "url": "20210508/index.html",
    "revision": "b1b6817bf87e2410870344cb59dc8abb"
  },
  {
    "url": "404.html",
    "revision": "8d2d0ac0b8f3f2d56ffddec7064a66af"
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
    "url": "assets/js/app.63479517.js",
    "revision": "c0b73950c50f96f8188c553f7950a942"
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
    "revision": "e6b5e164cb54247eed32a6a4a3716a7d"
  },
  {
    "url": "categories/css/index.html",
    "revision": "76e5f9ec0ee9bbff4193050003e441cd"
  },
  {
    "url": "categories/index.html",
    "revision": "90e0cce5cd8f98d77a65b554f31bf9ca"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "eaf8895378cd2453e1ca41ccf8098b47"
  },
  {
    "url": "categories/react/index.html",
    "revision": "c4caa1de20e2089eed118dd024f4260c"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "9b1dc43583cb5c97bed8e5530f678b40"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "8de5661fb19d41318bc85cb965daeefc"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "66aea9290d993f790c1c62cbfea28bb3"
  },
  {
    "url": "categories/成长之路/index.html",
    "revision": "efb094b4f2a90fa819b31144d5101182"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "7c0c357fa86705b44a235229e97a5855"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "b38ba4081f82930faca178f8d6cfefbc"
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
    "revision": "e7efe1a64a2b81d848c57fe8d629e059"
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
    "revision": "34cef268caa54460ca02da11ac7a5a02"
  },
  {
    "url": "tag/index.html",
    "revision": "8ea5c717f7018f55f35b009287cc930c"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "3df48bae02510063f982341d6d891efb"
  },
  {
    "url": "tag/react/index.html",
    "revision": "7ad7558937ca1843aa07fea6a2103225"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "50fb9b1e686a55ecc37f40a1a200c3c6"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "1d9a6b483dc2c837b59679a242c111eb"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "7516ba0322b774960e3d237b4ceb0218"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "df912a3035fa7caaf1af365813d7243e"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "8afa121ac6c225d40c96523feb65f382"
  },
  {
    "url": "tag/成长之路/index.html",
    "revision": "f65100f943c441d597cbc2c760cb7fd6"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "6c6f75777ec5c37842bb0ed52d07c9fe"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "eb835f383386fd599012de80f655f1bc"
  },
  {
    "url": "timeline/index.html",
    "revision": "12354ac4a49cba3a40b98cb91efe0842"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "fcf595ac7152fd1b5de8d62d3e040bf2"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "5e0a0d49d02b5a7fa59b5dd8c4f21924"
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
