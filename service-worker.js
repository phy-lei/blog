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
    "revision": "8120e26a87668c3d09d0b1244f1c9731"
  },
  {
    "url": "20200526/index.html",
    "revision": "2e8e929403ca18f92e4af69dd19c58a8"
  },
  {
    "url": "20200528/index.html",
    "revision": "ab4c46d5c017aaa23f43e318a3fbf7ea"
  },
  {
    "url": "20200529/index.html",
    "revision": "06f48684aed4df035ea217d91b733b47"
  },
  {
    "url": "20200601/index.html",
    "revision": "b710421a15e63f9446adf5a6f9b671eb"
  },
  {
    "url": "20200602/index.html",
    "revision": "874b655629768b7a6686d3f78a699d08"
  },
  {
    "url": "20200604/index.html",
    "revision": "fb78755d6db88927d3a51f7e359769e4"
  },
  {
    "url": "20200612/index.html",
    "revision": "14c9d9f9781bf5fd772a7f5598de3eca"
  },
  {
    "url": "20200720/index.html",
    "revision": "49378ea4b19a0e7e0231e4c7478bf55e"
  },
  {
    "url": "20200804/index.html",
    "revision": "0de39c340ad4d002f98e103644affcc4"
  },
  {
    "url": "20200812/index.html",
    "revision": "d0e048f49e0785981c3e3e9e629bafa6"
  },
  {
    "url": "20201013/index.html",
    "revision": "75d7b2db8720604ba613ed4351be21aa"
  },
  {
    "url": "20210112/index.html",
    "revision": "d7dd7e6ef1973067eeab676682413f5e"
  },
  {
    "url": "20210123/index.html",
    "revision": "8bc474cfbd3c77cad1e39c8283ad4dfd"
  },
  {
    "url": "20210129/index.html",
    "revision": "be08b4e1b2c44f7c04431d34116cfffc"
  },
  {
    "url": "20210327/index.html",
    "revision": "d6418a52079945fa0821629c0915fd69"
  },
  {
    "url": "20210502/index.html",
    "revision": "6f4a153342e03799192843bc62750b14"
  },
  {
    "url": "20210507_01/index.html",
    "revision": "f95601c1c69582cb643f4d5ad8a6298c"
  },
  {
    "url": "20210507_02/index.html",
    "revision": "fcfb3b7a86084ed2eb4d32a2a4c653ab"
  },
  {
    "url": "20210508/index.html",
    "revision": "7dbfb3589ac20d300644c5223270190d"
  },
  {
    "url": "20210510/index.html",
    "revision": "b57084a6ec6833f7518a3b7d242221e0"
  },
  {
    "url": "20210703/index.html",
    "revision": "4af2098a805a8b54644b63ad30a940ee"
  },
  {
    "url": "404.html",
    "revision": "b934b6cadf4eaf2dc4d4c0e3fb51e9f4"
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
    "url": "assets/js/10.716e5d02.js",
    "revision": "7339c67ae3bba91eacf251cfb09b290f"
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
    "url": "assets/js/22.5a61e294.js",
    "revision": "840496e55338a2fe8ed3ce4b6c480451"
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
    "url": "assets/js/25.b8639e2a.js",
    "revision": "af191493369198651cdd0a95558abc3f"
  },
  {
    "url": "assets/js/26.597c10d3.js",
    "revision": "2d17fa5420975cd14ba86a37b9d79a5f"
  },
  {
    "url": "assets/js/27.8923e889.js",
    "revision": "fc718fc0e45b01f76cc67391e15d50ea"
  },
  {
    "url": "assets/js/28.46746604.js",
    "revision": "63c9312a0219f37080cb9a79e1338413"
  },
  {
    "url": "assets/js/29.af1e8458.js",
    "revision": "a2ab7c0b52e9d5ddb5ebe53126c422ef"
  },
  {
    "url": "assets/js/3.85657320.js",
    "revision": "ded4e694ba473251ad0f154cb76e213e"
  },
  {
    "url": "assets/js/30.ee590005.js",
    "revision": "d0c76365ccc1dd72df1726f21126c32e"
  },
  {
    "url": "assets/js/31.2aa79afb.js",
    "revision": "1dd68135fdc187d4b6816ab3a2f78c30"
  },
  {
    "url": "assets/js/32.594201d3.js",
    "revision": "99b62f8aa12bf62943ff4d2e6b206bbf"
  },
  {
    "url": "assets/js/33.86a82625.js",
    "revision": "d888461ed45d461929a33a43f4b993f7"
  },
  {
    "url": "assets/js/34.e20d514b.js",
    "revision": "4b988e81edfd997e9176a2454d5eb990"
  },
  {
    "url": "assets/js/35.a66817e0.js",
    "revision": "d65395319c8cba3005235bd0a5e4090d"
  },
  {
    "url": "assets/js/36.bee929ac.js",
    "revision": "2987a6553d43aa31f2171e2e441c9579"
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
    "url": "assets/js/app.4721928a.js",
    "revision": "87215539088590a54674692ba55fd0d0"
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
    "revision": "67ec68237f3bf778cc28b41bf94c7c9b"
  },
  {
    "url": "categories/css/index.html",
    "revision": "a1179dcc99f9b382ae62b5bb12c689ea"
  },
  {
    "url": "categories/index.html",
    "revision": "08eb9c001072b81db17ca7d9c7c85739"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "f0569fbf73ef87da97e54d69d2eef0f7"
  },
  {
    "url": "categories/react/index.html",
    "revision": "e1d198d81686e76608b2793463871766"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "323e95eb2c4a80b1c54db5f572b5eccd"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "eea642a4e0b126edf4e473a0bee1aea6"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "0107e5abf971372732de53cf24b6e43b"
  },
  {
    "url": "categories/成长之路/index.html",
    "revision": "568c2881e9bd0e14160cb7b115bd2ea8"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "5e796c5dd385415d03874e95b7a9b75f"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "dc958a6b63818714d4907f4d077b35b8"
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
    "revision": "abeb623dc15b35892e4bb445d89f73ea"
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
    "revision": "b62036539d61ebfaf6edf80dc3766e3b"
  },
  {
    "url": "tag/index.html",
    "revision": "acf6fce38ebaec63ab1adbb86576b4eb"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "fac8773390bccb9cc3e7a96a2cb94210"
  },
  {
    "url": "tag/react/index.html",
    "revision": "99d1e6dbec28623b980ab1d9b2b1c978"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "191f32343ace1eefede656b0424ebb70"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "909107279345954c421331ef1b306f89"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "a16393389c089e7cdb6cc09c1ac381af"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "32d5e1799fd4b78b19c0b591267c1fb4"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "2a271cec81f24a1bb41b6900bbb0a3da"
  },
  {
    "url": "tag/成长之路/index.html",
    "revision": "448639531ee29b31c42ac66929e0efca"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "1ec08c2e48ac968879dfeeeca5b0c58f"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "5b3d1787aeabba07bc00cce65d7a0203"
  },
  {
    "url": "timeline/index.html",
    "revision": "b98780ab3c8b91a31a06b6bc83315a82"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "99babb7f3d46d9c2c137105515513279"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "2e9ef3e3adbbf3f897a2edbdaf642a20"
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
