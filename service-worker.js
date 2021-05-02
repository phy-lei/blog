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
    "revision": "123088cb3394559c4b2761a4f5d1a9b1"
  },
  {
    "url": "20200526/index.html",
    "revision": "5b6e0292614f8c499e1de8f46f1a7387"
  },
  {
    "url": "20200528/index.html",
    "revision": "26e1a131f81796030d8a1bbc4989581e"
  },
  {
    "url": "20200529/index.html",
    "revision": "5e7612defac544818e604076140846dc"
  },
  {
    "url": "20200601/index.html",
    "revision": "31f5f292d4f94071599071fc14a0776e"
  },
  {
    "url": "20200602/index.html",
    "revision": "3aeeb4a8e811ed93e9a477ddaf3d01b2"
  },
  {
    "url": "20200604/index.html",
    "revision": "c86c549db17ea46586a647e615886eee"
  },
  {
    "url": "20200612/index.html",
    "revision": "f788d41443ba854ae9cc294b95fc66ee"
  },
  {
    "url": "20200720/index.html",
    "revision": "b8d3851cb71db460b7ded1818e154ee1"
  },
  {
    "url": "20200804/index.html",
    "revision": "e9879055b982d55de414ceb05b0413d8"
  },
  {
    "url": "20200812/index.html",
    "revision": "875c758a1c7589e1213c03d42283dc4e"
  },
  {
    "url": "20201013/index.html",
    "revision": "3c81627541b10c83802cfbb0cb32e36f"
  },
  {
    "url": "20210112/index.html",
    "revision": "0e43ef86cd814ef0d492ed29498b5ba3"
  },
  {
    "url": "20210123/index.html",
    "revision": "f0706361b640d5efe9c550d5a8152c9a"
  },
  {
    "url": "20210129/index.html",
    "revision": "575dfdeac6c72a69a239e915cf9cfc50"
  },
  {
    "url": "20210327/index.html",
    "revision": "88d25c3d5e8de2d202b911ac9bd28a04"
  },
  {
    "url": "20210502/index.html",
    "revision": "cd91d524366cbcbe5d20d16b297828d0"
  },
  {
    "url": "404.html",
    "revision": "653b883c876f1350d5455ed867dbce81"
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
    "url": "assets/js/10.05bca616.js",
    "revision": "bde10d470636b38506132f5379f7ee3c"
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
    "url": "assets/js/28.e613cd29.js",
    "revision": "a2d2766ae0a559616328a8e3b764dc2f"
  },
  {
    "url": "assets/js/29.b208564c.js",
    "revision": "dc3176d7f948e1b97bc6563e2836ef4f"
  },
  {
    "url": "assets/js/3.85657320.js",
    "revision": "ded4e694ba473251ad0f154cb76e213e"
  },
  {
    "url": "assets/js/30.420e68e6.js",
    "revision": "7858282b41c7c7e91229cff88abd8345"
  },
  {
    "url": "assets/js/31.7543e17f.js",
    "revision": "fe67c171fd9f0db199f4a21f6d504af8"
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
    "url": "assets/js/app.3aa074e6.js",
    "revision": "b39f91f86f8ca6057ef94c6cbd25edcb"
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
    "revision": "3697d8a13b05d717b37e75c6958e2924"
  },
  {
    "url": "categories/css/index.html",
    "revision": "092d6dd215eefa2030026a5aec7867ba"
  },
  {
    "url": "categories/index.html",
    "revision": "1776f7107392b6ca64e83f74b6a7b2e3"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "147fcb5c418ec6e0ce0b328c8636d834"
  },
  {
    "url": "categories/react/index.html",
    "revision": "55354dc695dcda95d0b4d023b1d444cd"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "ede7a49254bfdb9136627055c865349d"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "3d13af422be55713df69e6308b870dc4"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "8aab10078a0a1a07bc5774f7a84c9600"
  },
  {
    "url": "categories/成长之路/index.html",
    "revision": "1e545625f89f6b429fbffba5b6e10308"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "ba2f50c8bfd8ab433932d3f26207d28e"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "487cb3a7b0ca1736a076d783773ef883"
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
    "revision": "26b247a617c768b32051ca14cbea899d"
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
    "revision": "7a02d48ea9fffd2136b1818b8b0cdb4f"
  },
  {
    "url": "tag/index.html",
    "revision": "2bf85b65240804f7ed781f5abd661184"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "a121e8418d17774ada7fc36361c493ec"
  },
  {
    "url": "tag/react/index.html",
    "revision": "17f98df122d4534d3ed1d0e005c77c47"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "e90d7ad3f087d120d9f2d5ab0b96dc9f"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "2490c4533c49174f6ba8575683d59113"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "7de86b889ddaa97617639feea75dd58d"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "470991ab38fb72cc3d79a6ab9541ef68"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "78497f0b2c3101249705d2bc67575705"
  },
  {
    "url": "tag/成长之路/index.html",
    "revision": "b41a3e87a2214d31dc446c3e5b2f7e5e"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "05edf685c193fd27e847add310e2ae6a"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "926d202f77456e5d84603d565e165c25"
  },
  {
    "url": "timeline/index.html",
    "revision": "2ed144852f38ad8e05cb8c33c1366fca"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "0eca13276958eb97dbf52e577470a294"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "7c6d174fe5803b2004d66381427716d3"
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
