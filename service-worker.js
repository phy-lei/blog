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
    "revision": "c03d35f4b5adc7b9280a9fcafca6e50f"
  },
  {
    "url": "20200526/index.html",
    "revision": "8b1db2148cc40acfcbf48922565d7839"
  },
  {
    "url": "20200528/index.html",
    "revision": "b9640484afede968ac467797b1e2ed08"
  },
  {
    "url": "20200529/index.html",
    "revision": "b363dd2d12ef7890e4557b01a8178c07"
  },
  {
    "url": "20200601/index.html",
    "revision": "c705422834f5993556546b7c65c712d6"
  },
  {
    "url": "20200602/index.html",
    "revision": "39553a9cb409760214b7432f6a975dbd"
  },
  {
    "url": "20200604/index.html",
    "revision": "50ff8e41d9edac3ddae4a522e93b4c7f"
  },
  {
    "url": "20200612/index.html",
    "revision": "44d6a10196daa0454ee7e279081e6152"
  },
  {
    "url": "20200720/index.html",
    "revision": "56f921c17322af25bcac32b3e950dac9"
  },
  {
    "url": "20200804/index.html",
    "revision": "52d71f87f1e130554329c904bfca578d"
  },
  {
    "url": "20200812/index.html",
    "revision": "a96f587a472ba992088727b6e62ed1c8"
  },
  {
    "url": "20201013/index.html",
    "revision": "948a1833d6f2d7ed5866002f8223a794"
  },
  {
    "url": "20210112/index.html",
    "revision": "82413f0290e8b2e0e93c369d5d3681ea"
  },
  {
    "url": "404.html",
    "revision": "088391d8d4196f184500d85ae739a3e0"
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
    "url": "assets/js/10.f0c5e175.js",
    "revision": "79116810d10d8503ab8f7b91fb7e403a"
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
    "url": "assets/js/25.3350cd37.js",
    "revision": "5829d02a4ccef221fa404c8099270705"
  },
  {
    "url": "assets/js/26.177163ff.js",
    "revision": "5743acdd75c34cc4b2f79a92941ad2f9"
  },
  {
    "url": "assets/js/27.9754af4b.js",
    "revision": "3dbc60c5f6b29555930fc6c85bc5d7a1"
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
    "url": "assets/js/app.3f77669b.js",
    "revision": "220ef801fe25db8ccae7c22f6e297f48"
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
    "revision": "2b4c43637d508abd6acb5e21cf86f8e7"
  },
  {
    "url": "categories/css/index.html",
    "revision": "573083d82fc2667c2da6aa86d3ff9602"
  },
  {
    "url": "categories/index.html",
    "revision": "bc1dd5296fca7d28f6ddbbdc636fea84"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "d3d33e914b2bdfe693dc06bb64bd52b3"
  },
  {
    "url": "categories/react/index.html",
    "revision": "434de54da614c894d261d7f2139cbc25"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "d04a1f08533612bdfdad62cbcb527280"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "77ac4702c76ff7f06402159a285f6f25"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "381c135d89e92c15575004d8419adf6a"
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
    "revision": "00ea7df74bc39948ab323c34752a61c9"
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
    "revision": "e6e047146c7094c23fc60eb7d8b262b9"
  },
  {
    "url": "tag/index.html",
    "revision": "f6688650a63bb0a2fcb1c5e1b8397b55"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "6bcff3845922f47c45cac5f5fa74b814"
  },
  {
    "url": "tag/react/index.html",
    "revision": "75f91af1c6d9e990c6c4b10a0b495fa8"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "3b89ec31d626383c1ba0abb7998a7fcd"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "6b980cface8d47945b416392e2b4b3ba"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "71e2cdc49568a36aa66bc37fcee68090"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "3816a976a97a8ee43f48ae6eda75a6e8"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "c3096ed3f961edb30e79c1ad13d23961"
  },
  {
    "url": "timeline/index.html",
    "revision": "8309ffee9639ce0e00bcd819000e4ddb"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "6aa9edca38ffedb67b4183c98ded22b2"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "8d7212a46c379a57160320c483b3efaf"
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
