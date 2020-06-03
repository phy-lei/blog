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
    "revision": "e1af2523db68884d21d9ef1e7d9878d9"
  },
  {
    "url": "20200526/index.html",
    "revision": "304cbefcb2dfdd5c3e262949c6be06bd"
  },
  {
    "url": "20200528/index.html",
    "revision": "63b4bd5f4816d350ec10a8f5ba293a3a"
  },
  {
    "url": "20200529/index.html",
    "revision": "1b786f168939f8e8f3a0f9baa338e9ac"
  },
  {
    "url": "20200601/index.html",
    "revision": "92bdb71e15e155eb992916befbd9cdd8"
  },
  {
    "url": "20200602/index.html",
    "revision": "81e3cf54ea565d6503514f235ef607bc"
  },
  {
    "url": "404.html",
    "revision": "08e9453763ac7035d83c5ec62e824fe4"
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
    "url": "assets/js/19.78fd399f.js",
    "revision": "13140046964d2001135631ac3efe8509"
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
    "url": "assets/js/app.a125dbdb.js",
    "revision": "d88dbec2949359a1b1a3337a930592d8"
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
    "revision": "b301cd894f45486a1ef695f1f95680c5"
  },
  {
    "url": "categories/css/index.html",
    "revision": "77325e6870b875b0d7ec11e0e76a0262"
  },
  {
    "url": "categories/index.html",
    "revision": "5f1e4578cb0e9fc48dc25405ecc4bde9"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "fbfe313697bdd344acaaa028bcda8210"
  },
  {
    "url": "categories/react/index.html",
    "revision": "1a5d559cc4d2d7db378b7654f5846272"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "d59d0a8f2b4e7c6275d3dac66a171aeb"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "57a5c93d97c6766b64fc754de00cad72"
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
    "revision": "a1f92a719899c41c768874845c4550c0"
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
    "revision": "23410701540aa95f4d3251a737741e8b"
  },
  {
    "url": "tag/index.html",
    "revision": "9cf9ae4d5cc4b8385691257115b8ab22"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "43976f10a3fdaede8bc7a6668b05d974"
  },
  {
    "url": "tag/react/index.html",
    "revision": "966cb21fadc2066c1e452e6c1407600e"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "2d3f8cacc84afd4055ecdb2421dce16f"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "cfdc1921e5359061882593664320cc33"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "906acd8cf4d011ce466d2c899e5c6c89"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "c30cae5f9e1bb37ea2786660a3d76977"
  },
  {
    "url": "timeline/index.html",
    "revision": "f5909629bc26ce78ec047e6fe699c844"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "a020d2b4173ce1c365e0798c3ac9cc64"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "2c100a1067543c0a452f107ef365ad86"
  },
  {
    "url": "views/other/guide.html",
    "revision": "cd5838dc6a812787250f5b8dfdc62d5a"
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
