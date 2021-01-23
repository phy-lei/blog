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
    "revision": "682ee2b9914f3c38ca613a7ddd79be56"
  },
  {
    "url": "20200526/index.html",
    "revision": "5ab1e7d053886fa270e6e412514e6606"
  },
  {
    "url": "20200528/index.html",
    "revision": "8614aeb9da5cf93fd8e75e12c49ea122"
  },
  {
    "url": "20200529/index.html",
    "revision": "0dda8b6c41ced45aa80780270519bccd"
  },
  {
    "url": "20200601/index.html",
    "revision": "b138ce03be4cc309a587db34d108ac7f"
  },
  {
    "url": "20200602/index.html",
    "revision": "2ec4610d18ca10a75614731916562a38"
  },
  {
    "url": "20200604/index.html",
    "revision": "0f87c5ce794352601c99f89e365a9dfe"
  },
  {
    "url": "20200612/index.html",
    "revision": "cb47119f6b3914d440e56524fc41adaf"
  },
  {
    "url": "20200720/index.html",
    "revision": "e35e671ff605c9ca4f185167b9105b1a"
  },
  {
    "url": "20200804/index.html",
    "revision": "307c894a1324c78764b65db4a040c5d4"
  },
  {
    "url": "20200812/index.html",
    "revision": "0c9583993de9b8b69edfa587de9a5cb8"
  },
  {
    "url": "20201013/index.html",
    "revision": "78b8aa3751528a1b5a0c7a845e447ed0"
  },
  {
    "url": "20210112/index.html",
    "revision": "ec81449361b9c079125f6ab2922b9a83"
  },
  {
    "url": "20210123/index.html",
    "revision": "216213d2de81d5c7edbc456df477a563"
  },
  {
    "url": "404.html",
    "revision": "e0600b206feb4199b6b2d028d9db4c1c"
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
    "url": "assets/js/1.51d2f36d.js",
    "revision": "ddc9f734993167dbe05adceab30f6431"
  },
  {
    "url": "assets/js/10.b681ca1a.js",
    "revision": "84bad1f8a7ce7aa5d27cc2574ba69ab9"
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
    "url": "assets/js/21.ad7dc282.js",
    "revision": "dcde36c9f587f32e64b21c01e3d455ae"
  },
  {
    "url": "assets/js/22.6564701a.js",
    "revision": "c9e6ff09b66d37a99876ce9fe6a6d4b2"
  },
  {
    "url": "assets/js/23.118c6889.js",
    "revision": "d31bbe09105a01d9b148f4fc6c8daf82"
  },
  {
    "url": "assets/js/24.f6c14a86.js",
    "revision": "9b3ffb802c4cb7b51ceadcc5e207d215"
  },
  {
    "url": "assets/js/25.6eea1bee.js",
    "revision": "537d7b1aa782797128d7c4b2359f4f81"
  },
  {
    "url": "assets/js/26.fa948253.js",
    "revision": "eb0c54451d0e590975e3aeef3132e9e7"
  },
  {
    "url": "assets/js/27.5e266543.js",
    "revision": "4104a00dd86309470d57cee67c5b30c5"
  },
  {
    "url": "assets/js/28.fdd65fbd.js",
    "revision": "59dc26e2d3ace0814d956a23c46a6064"
  },
  {
    "url": "assets/js/3.85657320.js",
    "revision": "ded4e694ba473251ad0f154cb76e213e"
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
    "url": "assets/js/9.52c33c76.js",
    "revision": "fc62a4b21369b026bd2a2ac098a58732"
  },
  {
    "url": "assets/js/app.fc7aed59.js",
    "revision": "16c05d7d5692208d4a5bfb0a04e06d4a"
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
    "revision": "0630157718bdd30523460717c37863b2"
  },
  {
    "url": "categories/css/index.html",
    "revision": "69b5b4614daf1150be01921227eecd48"
  },
  {
    "url": "categories/index.html",
    "revision": "fd8e989af7a56ddaab1d792a1ba37290"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "7dbc68fb008c08089c044d1be5ad838c"
  },
  {
    "url": "categories/react/index.html",
    "revision": "885f9c47777a88cee576d7067309d92f"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "a61e314d510921f05271720f5734e309"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "f46d52a14e8c955e1d2ab6f32587d843"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "b17fdad518df7e5c57fad00bb666bc0e"
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
    "revision": "48cd0d4f682a67e309d4b2fb68bee4dc"
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
    "revision": "40bde9702b0dbb98e9b8552ca301a99b"
  },
  {
    "url": "tag/index.html",
    "revision": "541554a3a7c0ec0ec8426d8112c172c8"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "5dc5b6df681d5aab5caa8f4e9ca3484b"
  },
  {
    "url": "tag/react/index.html",
    "revision": "d32de94a4e648c30f9f6214c0f33b58f"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "0e72903f2b29d93113629901dc2a07e2"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "26b9f18f705c573c84f7e106f0b87afe"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "bc8b53ab7fd68ffcdc27293eadc2edde"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "9879224809c4a18e9aba9798e532f411"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "878f65ffa4a09a19af119e0544d7a8a8"
  },
  {
    "url": "timeline/index.html",
    "revision": "39a640b0a8e316c1cea7472cf9acbe11"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "504fed40a56ae697bde258186979e958"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "0c144c7ef63d09999197a9f344afb401"
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
