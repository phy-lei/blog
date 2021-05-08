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
    "revision": "346bfdd81293ef8ff27ee4adb4aa2edf"
  },
  {
    "url": "20200526/index.html",
    "revision": "c833d67019377fa828bb17fde6aab3ff"
  },
  {
    "url": "20200528/index.html",
    "revision": "c4619a16abfdc18ec2b22a88910c5084"
  },
  {
    "url": "20200529/index.html",
    "revision": "3d7af60ccbc5ee04b837841da9b05a0f"
  },
  {
    "url": "20200601/index.html",
    "revision": "28edf13d6b828b4c0a4d66991455ae26"
  },
  {
    "url": "20200602/index.html",
    "revision": "bec735a6239a90fbba5522b90dfedc2b"
  },
  {
    "url": "20200604/index.html",
    "revision": "db93f70727eda2bf34192c36680ce95b"
  },
  {
    "url": "20200612/index.html",
    "revision": "815d049d183e03cfbb62d3f6110c14e7"
  },
  {
    "url": "20200720/index.html",
    "revision": "5e3d00e8db570e76d359261ee9877cc7"
  },
  {
    "url": "20200804/index.html",
    "revision": "d887d109a01115531395bd2027ecb374"
  },
  {
    "url": "20200812/index.html",
    "revision": "b578260edcb0ff210a127b754f7ec919"
  },
  {
    "url": "20201013/index.html",
    "revision": "e9380240c90febb9e804e0466d5645bc"
  },
  {
    "url": "20210112/index.html",
    "revision": "131b0308a81ab947804444213df9d52b"
  },
  {
    "url": "20210123/index.html",
    "revision": "cb810be6299ed72316cffd3d1a555bf0"
  },
  {
    "url": "20210129/index.html",
    "revision": "2001b25fb8604706b693386965feab06"
  },
  {
    "url": "20210327/index.html",
    "revision": "ad65578dd4e92911ace210bddd0d42dd"
  },
  {
    "url": "20210502/index.html",
    "revision": "62868ef0496a5cd2dca255d874ddf0df"
  },
  {
    "url": "20210507_01/index.html",
    "revision": "b3dabccb76140b6362d62797dad67c88"
  },
  {
    "url": "20210507_02/index.html",
    "revision": "a2e89c2be3faedce6c57a6bb0eb4a3fa"
  },
  {
    "url": "20210508/index.html",
    "revision": "9e7646e9b1af34536f1527124a43512a"
  },
  {
    "url": "404.html",
    "revision": "fc7e4298bcea43028e1e9b6ff8b74b83"
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
    "url": "assets/js/28.68ce9827.js",
    "revision": "6dd3a905a81e036e920273c274f3a8ee"
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
    "url": "assets/js/app.b16d3be2.js",
    "revision": "0dffe5f0b2e33a907894558da213b62f"
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
    "revision": "2903e93505e988de20d15d02417bb50a"
  },
  {
    "url": "categories/css/index.html",
    "revision": "81327d983afb298a53047bf6f2f58e1f"
  },
  {
    "url": "categories/index.html",
    "revision": "78b686eab0baed36780571e578a0f0f2"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "b3f5740b86a567a989c4c95e0bd18f78"
  },
  {
    "url": "categories/react/index.html",
    "revision": "cb39e5198bc694dd5c21e9584f117072"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "4061acbaa3ec0225463b01e76e0837a7"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "bea8a18037c1333cb3b91a8a6bb54655"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "8166a79d3e623acf444b0912cedde488"
  },
  {
    "url": "categories/成长之路/index.html",
    "revision": "85e1523ffc01c9aa7e2bcb06dc44da1b"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "87b80515a9b3af6abe761fcaeca5bec3"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "017777cf606b61d308ab24c33a47ff7e"
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
    "revision": "7ca02f64b57d51a43d04311ef04a3174"
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
    "revision": "1aef720bc470e6fe2634631095dc0e51"
  },
  {
    "url": "tag/index.html",
    "revision": "7c23765f3a84d30199e868a0ba649740"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "9e40c716a16ab5e976edbb0fb1d15333"
  },
  {
    "url": "tag/react/index.html",
    "revision": "bce1297567dc77360637734a603c2432"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "d7585b23b1f10d72f1c4fccf8ec663ba"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "c15b8aada5af509ba68c39041b4bfe37"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "025260f064dc3e4d4077468b0fb4011c"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "de7cc334a51501fba160b19d654076c0"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "98701da2fb896bf3f65b85302333be04"
  },
  {
    "url": "tag/成长之路/index.html",
    "revision": "ad8af61691f8eeba45bf24b35f475e38"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "d4e3fd2f23ac25339a1e7e9597d72269"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "21144bfb6d42a987390e00f8c0bbe09e"
  },
  {
    "url": "timeline/index.html",
    "revision": "5aa0a709ebcb07d49eb05de772a67a9f"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "17de213be8a28b92cc54ba92f117bcc2"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "b0eacd5b12f2391a783b39da8df88d15"
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
