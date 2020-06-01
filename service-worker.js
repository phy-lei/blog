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
    "url": "404.html",
    "revision": "86eba5796bd350d2c594330d47970017"
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
    "url": "assets/js/10.23915a81.js",
    "revision": "7dbda9d1853282247bd86569a1fa915d"
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
    "url": "assets/js/14.7e70a678.js",
    "revision": "2b291f7a7883f0e8a056609dd7304fe9"
  },
  {
    "url": "assets/js/15.c038c9d4.js",
    "revision": "ed1b46c9337dde7e8b8982ccbc5223c7"
  },
  {
    "url": "assets/js/16.16d4ae35.js",
    "revision": "fba610393d0f0ffcac2dac0a5bac9957"
  },
  {
    "url": "assets/js/17.899aac7d.js",
    "revision": "03e0a0b6a8ce9c405f9e4cf1836e1d88"
  },
  {
    "url": "assets/js/18.370ac121.js",
    "revision": "8fc601038427e2b2e03b6836240286ca"
  },
  {
    "url": "assets/js/19.b224c123.js",
    "revision": "8c56d7ee01492c25453ab7de007a112e"
  },
  {
    "url": "assets/js/20.d6ac1ecc.js",
    "revision": "717096b0fd364c3945fa7a6d960bb78e"
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
    "url": "assets/js/app.d8820032.js",
    "revision": "e61b9fc7226465234758fd87340444ce"
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
    "revision": "5c777809f520b535e255886de97f049c"
  },
  {
    "url": "categories/index.html",
    "revision": "19208e89dee487b4907867f68e3ef8f6"
  },
  {
    "url": "categories/noteDev/index.html",
    "revision": "112ebe17de467bfeb8e16ef363f0fe34"
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
    "revision": "8d9b2b8542f967b8b5cc63ab9a667d77"
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
    "revision": "33cc9b300db31e0085b8e6b1df6ea78c"
  },
  {
    "url": "tag/index.html",
    "revision": "1c24c34f81e73997f4221e6f9bd7e01d"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "80cd0c8e6afbe62c5f57d2b5d47f8082"
  },
  {
    "url": "tag/react/index.html",
    "revision": "cb2ffbd506df39eec39ab82851873138"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "3a651e1cc26a7432373db7f3408cf19c"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "512d4de7049d29b3ea757966107db6ac"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "dd6f0d592546d49af9b64a3e57c5ffd4"
  },
  {
    "url": "timeline/index.html",
    "revision": "e953e489a64d35fc3456d547687c14a8"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "27e1e448921edefc08de5cfc79762c85"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "500a032cb057a182e4b45c69aec45621"
  },
  {
    "url": "views/noteDev/css/20200601.html",
    "revision": "4426a0d17b814feffcd8680d698b3ead"
  },
  {
    "url": "views/noteDev/linux/2020529.html",
    "revision": "3fc516b712e637dad6fa0359032aba40"
  },
  {
    "url": "views/noteDev/react/hook踩坑记.html",
    "revision": "5a166f30d5a95f6323e87f0a0aa16e80"
  },
  {
    "url": "views/noteDev/vuepress/200526.html",
    "revision": "f357aca0feb7b7cbbb86e6e6c3995114"
  },
  {
    "url": "views/noteDev/vuepress/history模式.html",
    "revision": "e4be5499c977487e4d810adeb236394f"
  },
  {
    "url": "views/other/guide.html",
    "revision": "74ccdd852d4cc18bfab46acd099f25e3"
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
