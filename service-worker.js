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
    "revision": "ce2e7060f5148b496ac4091b42c9882a"
  },
  {
    "url": "20200526/index.html",
    "revision": "25403a84f9c52932f2907ba0e38a020c"
  },
  {
    "url": "20200528/index.html",
    "revision": "821345065e2c3a47b0cff6df2a75b1bd"
  },
  {
    "url": "20200529/index.html",
    "revision": "436f9003c8dcb1e10d4f67dc955419b1"
  },
  {
    "url": "20200601/index.html",
    "revision": "c7f3fd812456535734edf5b2db78ae15"
  },
  {
    "url": "20200602/index.html",
    "revision": "fd8b368133d60c4273558ed2280bb050"
  },
  {
    "url": "20200604/index.html",
    "revision": "e808afc585f2e3b5c4be1ec26bd484a2"
  },
  {
    "url": "20200612/index.html",
    "revision": "7584deac3d54cea6ea33608101f783b6"
  },
  {
    "url": "20200720/index.html",
    "revision": "f364effa26b3422f8206ef0d7bcfb328"
  },
  {
    "url": "20200804/index.html",
    "revision": "9ec9793492cc1edcd8fa1867bbf46a29"
  },
  {
    "url": "20200812/index.html",
    "revision": "41ee3572d48c811397b3728e17a1e794"
  },
  {
    "url": "20201013/index.html",
    "revision": "6be21005cb13b8c02a14860f1f651627"
  },
  {
    "url": "20210112/index.html",
    "revision": "749c9874fe3c41063fdfb68310b5c850"
  },
  {
    "url": "20210123/index.html",
    "revision": "9f6c9f6c1a45fbccf9f08c9397002ee0"
  },
  {
    "url": "20210129/index.html",
    "revision": "bbb2e81b0800f77b11f7b3b3173de99c"
  },
  {
    "url": "20210327/index.html",
    "revision": "ef9268cd7663afab318f104cc63deb85"
  },
  {
    "url": "20210502/index.html",
    "revision": "a977f747adc6960d88bc73b1011a2315"
  },
  {
    "url": "20210507_01/index.html",
    "revision": "c94bd97f93e50e0ccd88b634604a53d9"
  },
  {
    "url": "20210507_02/index.html",
    "revision": "729a1d5364b3190872ce14504304d1b7"
  },
  {
    "url": "20210508/index.html",
    "revision": "1c613467d19ffc773dfc77fdb66f8e64"
  },
  {
    "url": "20210510/index.html",
    "revision": "7e54dc2cdfcf4956dd80ee0bade39ca6"
  },
  {
    "url": "404.html",
    "revision": "6c16bb89e971e9e1c5b348c0acbb0758"
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
    "url": "assets/js/10.6970b34e.js",
    "revision": "14dd63762bf9457ad6910050b9d11732"
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
    "url": "assets/js/30.d83901dd.js",
    "revision": "940a6d1bbf2d785561a10cae7258d6c6"
  },
  {
    "url": "assets/js/31.69a466de.js",
    "revision": "1ec7242fa1212b05676d519f4539235a"
  },
  {
    "url": "assets/js/32.8dc441e5.js",
    "revision": "5eed36276d8af5815ed6b69ac63efc96"
  },
  {
    "url": "assets/js/33.c07e95c9.js",
    "revision": "69ec31d49740bd0fa7e0c356fb25605e"
  },
  {
    "url": "assets/js/34.a3b21fca.js",
    "revision": "a132886b775405fc0ea7019998e62a48"
  },
  {
    "url": "assets/js/35.773efdcf.js",
    "revision": "10b3e5b7981c8df79932e231323d38e3"
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
    "url": "assets/js/app.3180a6d7.js",
    "revision": "b51fa2fab734e79195e61df14b7c3023"
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
    "revision": "be5886a43520827f8487c38136451d30"
  },
  {
    "url": "categories/css/index.html",
    "revision": "396a612f4d3b826158a864cfb527c22a"
  },
  {
    "url": "categories/index.html",
    "revision": "395fc3861a4ee76de750fdb19c542c5f"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "f6910de89d2bf2103d48beb031f59676"
  },
  {
    "url": "categories/react/index.html",
    "revision": "fd40065dc6d540e2a2fd9ce84a25d1af"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "abaa415ca84fa6e22908edb7e34a0868"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "3e218ccb5a3bd3a72c1ebabb41c18192"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "d30648e9188df6ba90e014f7b122f8ef"
  },
  {
    "url": "categories/成长之路/index.html",
    "revision": "de71b5ffeecef3192a951fd586e500b7"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "baf1dd4cbd19b53c113f4e1ead964fea"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "3b9ab048843674d0c555ddda31923b8e"
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
    "revision": "a24ccbae55491b326204d8fce5578d10"
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
    "revision": "5b9525bfb5ddff8d612ace77089d74b5"
  },
  {
    "url": "tag/index.html",
    "revision": "93c8c66ffc59df34e342517f48d041bb"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "f30c15a2a04e69548c1ba3ab445f792d"
  },
  {
    "url": "tag/react/index.html",
    "revision": "0bd58d286f7d2fc92a9f71bfdb95f23a"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "1db866f2273a7c9f54b4df2437b56f39"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "ec0361381427e87fae8e4e7981658a45"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "95695e9f290bdc210000cc4095974939"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "5d78fb96f7c78885dc348d65239e647c"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "eacbc4116d3db75c426a2489b57155b7"
  },
  {
    "url": "tag/成长之路/index.html",
    "revision": "6dd9c4c6ec0eec1ae2c3cc8a7adfb52a"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "2657b0ca8c486da91c95bed6262c22d4"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "63904f2077f2760c0266f0dc24c262f7"
  },
  {
    "url": "timeline/index.html",
    "revision": "ec6ffec87b41d45379ba6651f3139b39"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "293c12fc69b521b3f6ccca9811a08358"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "d5c4cb322b31a32de66fd5908c5e22ab"
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
