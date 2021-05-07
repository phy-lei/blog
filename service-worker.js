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
    "revision": "e091fd07921c8e44082a5726561d4ff5"
  },
  {
    "url": "20200526/index.html",
    "revision": "3a054cb4fad6a39bbbbe4bf6b9d44abc"
  },
  {
    "url": "20200528/index.html",
    "revision": "58525f3a8ec7b95b5e7ba8a84b4fae47"
  },
  {
    "url": "20200529/index.html",
    "revision": "810d34efedd5c91f877f619ffe6f7e8d"
  },
  {
    "url": "20200601/index.html",
    "revision": "c89e96f259c9fa5a5f630db6b8b1dc0d"
  },
  {
    "url": "20200602/index.html",
    "revision": "ff0812193b988ed5e2f1afe402063711"
  },
  {
    "url": "20200604/index.html",
    "revision": "2d6cfb27628a9766696f38ef07105582"
  },
  {
    "url": "20200612/index.html",
    "revision": "6c01e858d7c47292ce6cb9c3aeea124a"
  },
  {
    "url": "20200720/index.html",
    "revision": "33682b9019db6a9618c2011134b4fd40"
  },
  {
    "url": "20200804/index.html",
    "revision": "133ce3e36d7c3e8f585be322a85312b3"
  },
  {
    "url": "20200812/index.html",
    "revision": "c061b47cb45c3b2d799fa42d9c25540a"
  },
  {
    "url": "20201013/index.html",
    "revision": "1efaa362152565af9cc09d57acedc6e3"
  },
  {
    "url": "20210112/index.html",
    "revision": "ac198c5f28ab9735039c3ed201898b1f"
  },
  {
    "url": "20210123/index.html",
    "revision": "5062d6f377c9d81511ea4492dcae24cb"
  },
  {
    "url": "20210129/index.html",
    "revision": "f9a6f0cb016d7f7cb5538865e82ceca9"
  },
  {
    "url": "20210327/index.html",
    "revision": "ed81a4daf9c2612ed728f3eb0b20eb3d"
  },
  {
    "url": "20210502/index.html",
    "revision": "04d77184da40f32efe4c0c72ccaed389"
  },
  {
    "url": "20210507/index.html",
    "revision": "455f030d169f35c82c99af5ab253fe83"
  },
  {
    "url": "404.html",
    "revision": "5a4355b0b1618eac814b90703b5c09f8"
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
    "url": "assets/js/10.f836cba1.js",
    "revision": "c9f71c34b63ee65bddd45e645d647386"
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
    "url": "assets/js/27.cb16278f.js",
    "revision": "c3ea246d58db43271f64af93ead862ac"
  },
  {
    "url": "assets/js/28.8781322e.js",
    "revision": "2318358de3271819c601b0385119afc4"
  },
  {
    "url": "assets/js/29.b17507f0.js",
    "revision": "6c1c111111bc89c285ff9c65cc7c0725"
  },
  {
    "url": "assets/js/3.85657320.js",
    "revision": "ded4e694ba473251ad0f154cb76e213e"
  },
  {
    "url": "assets/js/30.9adabb82.js",
    "revision": "471deed85525ff2e523ea2588a040fac"
  },
  {
    "url": "assets/js/31.77fc9330.js",
    "revision": "112920e7dccc0ce811ba0a33a5c871db"
  },
  {
    "url": "assets/js/32.5bff5188.js",
    "revision": "0c0d31addb7a884c75bd85349c6434be"
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
    "url": "assets/js/app.f89043e2.js",
    "revision": "65eef28ecd00670b55b146d33b74ed53"
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
    "revision": "bed047aa5104ef8fd0deb8b39cb23dc6"
  },
  {
    "url": "categories/css/index.html",
    "revision": "ac75d0a3da1944476ce32dfc1083e0ff"
  },
  {
    "url": "categories/index.html",
    "revision": "aad0aa2b3ef65b72a23a1829edd78525"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "2f19496002f9aba78120c6303cd763a4"
  },
  {
    "url": "categories/react/index.html",
    "revision": "fbb8013ec9cc88e6cc7cf47e28db072b"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "53687371640c5e7937d8d2e6fb13f98e"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "a44d76f27c09ab0906410631143bd892"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "947527e13a0dcbe59c37ad0e375a95e0"
  },
  {
    "url": "categories/成长之路/index.html",
    "revision": "1c5e986040346483613e8c305d7e38d9"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "0934b3aa86036c845a72ed007688a179"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "08eecdedbb9b865b3a26580d1f45bf11"
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
    "revision": "a2049f5305f0166b8cad617d4185eb6f"
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
    "revision": "13efcaca9288abf67e88348110d1b5a0"
  },
  {
    "url": "tag/index.html",
    "revision": "9be1a605e1895026e711e79dd55e6796"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "abddeabad9eb1f16d1fef39306a2d99f"
  },
  {
    "url": "tag/react/index.html",
    "revision": "7ec8a00793bd4664d7c97c798bbeca13"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "3108e77d693450964c0546e7ceb2a688"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "09f2603ac8135d98ea8ac451a2055c46"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "315397200987240a3451de445f34a9d1"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "082b5d7c477488332deda4d0f7faab8b"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "92ba0140c978fedc58648beab0b2925a"
  },
  {
    "url": "tag/成长之路/index.html",
    "revision": "e51c7fe153049219a617fa7f7234d217"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "83ec0a3447c2533799d4f5f19f023f95"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "26135abb40731f78a873d92b1ef9800d"
  },
  {
    "url": "timeline/index.html",
    "revision": "18977803d5dfb4db436a621e899f3598"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "7bb1f7c9d331eba1c3f513fc08d8014e"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "3cc540b2feb2733e9c79bbda9817c95b"
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
