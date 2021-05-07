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
    "revision": "b5ddde51237e34edb00658e108cd87c1"
  },
  {
    "url": "20200526/index.html",
    "revision": "917c1f53b0b068ae2ddc954bb3c2c517"
  },
  {
    "url": "20200528/index.html",
    "revision": "95774847bdacadf5a3b15cda4a74e8e6"
  },
  {
    "url": "20200529/index.html",
    "revision": "2e93923f6fb0a198891f7ab5ecfac897"
  },
  {
    "url": "20200601/index.html",
    "revision": "8efb393e599c56cb8004131a2e7e8d15"
  },
  {
    "url": "20200602/index.html",
    "revision": "baa0ef0cc312acca02c680b0a2f51a1b"
  },
  {
    "url": "20200604/index.html",
    "revision": "2cc67f1cd972684ef90f3c0d32b79af0"
  },
  {
    "url": "20200612/index.html",
    "revision": "956bc84460b1b6aadd0f77d6c648f296"
  },
  {
    "url": "20200720/index.html",
    "revision": "aa4831c21d87f910b7116d45118abdbf"
  },
  {
    "url": "20200804/index.html",
    "revision": "4f9670b30c16afe2d32fbe94eae3f095"
  },
  {
    "url": "20200812/index.html",
    "revision": "f47e4ac683b122ff5bdbd2a0d1dd5b7b"
  },
  {
    "url": "20201013/index.html",
    "revision": "f3d0b6ca6b8ea600762dafa62e737199"
  },
  {
    "url": "20210112/index.html",
    "revision": "be5279b6dc464d33845038780632766e"
  },
  {
    "url": "20210123/index.html",
    "revision": "f730ad8658a884495f8f4553ee456148"
  },
  {
    "url": "20210129/index.html",
    "revision": "4c528d530bb32cd154303204e7305e04"
  },
  {
    "url": "20210327/index.html",
    "revision": "5c5684a2360bf430cde94d7da1814d5f"
  },
  {
    "url": "20210502/index.html",
    "revision": "19f9c4f994c3cf0d2a9a7cedcb8d1762"
  },
  {
    "url": "20210507/index.html",
    "revision": "04ca28757bde5b3870030cbba715062f"
  },
  {
    "url": "404.html",
    "revision": "12c1d30bfdf296f8809f323c5a9b5957"
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
    "url": "assets/js/17.49febea1.js",
    "revision": "7c460eeabfeabdde429ab800e4adab67"
  },
  {
    "url": "assets/js/18.dcb11019.js",
    "revision": "3be19e971ea77922bcdbec6c81495225"
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
    "url": "assets/js/app.4355b03a.js",
    "revision": "96860e6717a99574a6ce048a9e2e3ff4"
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
    "revision": "543e17b598a4640acf5f4bb833a997ff"
  },
  {
    "url": "categories/css/index.html",
    "revision": "d72af96c9618f2e7f071f0bfbe26a034"
  },
  {
    "url": "categories/index.html",
    "revision": "7a1157ae3c2605109d09bd254c6a78ae"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "163ae137fd7553a9c87b36dacdf893a9"
  },
  {
    "url": "categories/react/index.html",
    "revision": "3d4393ef38a8457e6334485907625dfa"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "4791513f100e72f77b91f3d996224bf4"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "5fd6f4bd3ec89a651c8fe8167b52abc2"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "25c2023931389d253e427d3f07ace0a5"
  },
  {
    "url": "categories/成长之路/index.html",
    "revision": "cc7c8c66cae45699c846bb7ddc6f60a9"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "99f8393b6d79feaf12a4b2c3402f6bd6"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "fa98c928a260924f32c8b844f5ab28f0"
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
    "revision": "a924257b064e51df1c8efb6976a19bf6"
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
    "revision": "1f7cd60bed1d62b8cabe8b08289de3eb"
  },
  {
    "url": "tag/index.html",
    "revision": "c40969383bfb055213097064bad874d9"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "ccfdbd3786ed8b9b107dd0a6a83a23cf"
  },
  {
    "url": "tag/react/index.html",
    "revision": "19200db98840dd54824d0ac57a82cd59"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "d313e54c70db08d25804df471e5e938c"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "f9d8db372e5f439aca08dfeef2e782e7"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "3877fe3aa569f7a80eda5296e06b87b8"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "0855f08d1e9658291adb022242a52630"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "fb692d97d53b07dcdf75c4be93ca84af"
  },
  {
    "url": "tag/成长之路/index.html",
    "revision": "d6a57189e36354c94881eecaaac6a9b0"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "fcd0105288b4ebbfc5b4947cc0c15040"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "d877afe41a1d6fbfa5d1bf3e146bab79"
  },
  {
    "url": "timeline/index.html",
    "revision": "c562e119abf9c5bdc8719bdeb63233a4"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "c1eef17ca42940d1ec998a808e0e925a"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "51d6dc01bc6a8247fae1a2bf0b96b169"
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
