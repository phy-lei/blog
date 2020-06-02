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
    "revision": "e83f5cbe6ce11a60e6dba66395ec4d68"
  },
  {
    "url": "20200526/index.html",
    "revision": "183292160016fbaf017ff61dfa645631"
  },
  {
    "url": "20200528/index.html",
    "revision": "b5d47a1ac4b3a4097518682b49942616"
  },
  {
    "url": "20200529/index.html",
    "revision": "2e7c526509e7c7cc93544e8795c385f6"
  },
  {
    "url": "20200601/index.html",
    "revision": "61308888a5c18130f45e51d3f915f840"
  },
  {
    "url": "20200602/index.html",
    "revision": "a6bfc971f4b4cc41b9816c1d9ad03712"
  },
  {
    "url": "404.html",
    "revision": "4915825d97d839e9401b74c9041d3e5c"
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
    "url": "assets/js/10.1bd445b1.js",
    "revision": "50f281ccfe3d71b19979470cdc5b7da9"
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
    "url": "assets/js/14.8850cf67.js",
    "revision": "4f243cdaad2d1eeac48ea942051b3caf"
  },
  {
    "url": "assets/js/15.b3e93cbd.js",
    "revision": "ed1b46c9337dde7e8b8982ccbc5223c7"
  },
  {
    "url": "assets/js/16.fa6db216.js",
    "revision": "4d7ea495013dcd59bae05d81eeecd067"
  },
  {
    "url": "assets/js/17.f3145664.js",
    "revision": "2d024d2a9a57e4b3c3a572b337001de3"
  },
  {
    "url": "assets/js/18.f8e7debf.js",
    "revision": "6b142869006e33719357adc1a18e3593"
  },
  {
    "url": "assets/js/19.3af73a5b.js",
    "revision": "8d22cdec0914d2557a6ffcf712c2d573"
  },
  {
    "url": "assets/js/20.05129624.js",
    "revision": "3d89968bb2c2ae2de9c7dc585c87d5ed"
  },
  {
    "url": "assets/js/21.2b5e0f90.js",
    "revision": "a4711c2a61369e70dbb6fb3d8696d542"
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
    "url": "assets/js/app.71eb5b2b.js",
    "revision": "a0af26ed74da0bbc9a57b618821ba7a5"
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
    "revision": "47354eb1b87dbd0a0ca553e4a413e018"
  },
  {
    "url": "categories/css/index.html",
    "revision": "55f9ee5eebfa0eb68df20be7c1af2b84"
  },
  {
    "url": "categories/index.html",
    "revision": "62a76caf3953bee1cecb0e9874419075"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "a7af554f734f78a8932c39404c8a6ae0"
  },
  {
    "url": "categories/react/index.html",
    "revision": "7bf241734b8903c7a9ee08f8f3c9c984"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "bb84290d1436178d41ef87486c98a9d4"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "cc8a59b8a3c0a3391b41d21e5d7383b9"
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
    "revision": "44068fd27f7ed1b0aa3d99f81f3b1742"
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
    "revision": "b274270cbc18fa55730e073256167417"
  },
  {
    "url": "tag/index.html",
    "revision": "1d628b85e234e7172a573626a4b0b823"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "a9ce1f2d7e1eb313c08b1e9713657a3c"
  },
  {
    "url": "tag/react/index.html",
    "revision": "a49449d8d9097c41bf6ddedd7386c566"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "8eaf4aa7ae3041aaec21629f2935afe5"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "a5674c071cc30a988b08dee3cbdb7b4c"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "94d75bc603721d6f9f60739df251f520"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "83c977f77d5becdeca864562109841a8"
  },
  {
    "url": "timeline/index.html",
    "revision": "03e107b83ce51271d7751b9ae7f3d964"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "592269d9f3fdcdc8cd0319e0fca4f27b"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "2e461a54017474c8c66c662bd01ee6d4"
  },
  {
    "url": "views/other/guide.html",
    "revision": "9bcfc2dfffd7f5d485842eb735845103"
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
