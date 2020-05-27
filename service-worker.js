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
    "revision": "2c92e4c32f80e048e1fa097491dda28f"
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
    "url": "assets/js/1.c300a727.js",
    "revision": "6b94d0184e6e59269756021b4055a8a1"
  },
  {
    "url": "assets/js/10.ce5ef26b.js",
    "revision": "8795c0fef11e50885ac2d6928ece68fe"
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
    "url": "assets/js/14.51f45e3d.js",
    "revision": "de2a3b3d8f3d6cfee028b49f814c0e26"
  },
  {
    "url": "assets/js/15.d7a6811d.js",
    "revision": "84b2cf8268c619136703614ee3e14ff4"
  },
  {
    "url": "assets/js/16.9b7b1bbc.js",
    "revision": "65753754821343f0824bf3ce51d638c6"
  },
  {
    "url": "assets/js/17.5c1a66ca.js",
    "revision": "a48f622100c2e977d1b89f2361d1d2ca"
  },
  {
    "url": "assets/js/3.19e0475c.js",
    "revision": "e986beba85364f7c2f67049c58843a17"
  },
  {
    "url": "assets/js/4.50176cde.js",
    "revision": "facbb44fc293b068e928edf4e1fb3ab9"
  },
  {
    "url": "assets/js/5.1f0d2755.js",
    "revision": "f430b99c588072a51d9cbd970723d9ec"
  },
  {
    "url": "assets/js/6.a3ed9642.js",
    "revision": "498bb7b609557cb44b0da72206a20532"
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
    "url": "assets/js/9.cdb74153.js",
    "revision": "66fd050c627ec3a1cd0e4f18a42c37fc"
  },
  {
    "url": "assets/js/app.874ae282.js",
    "revision": "edf6f5a8372f9cc28b537f208dc73da3"
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
    "revision": "d925dacb2ce358ab4c87285b92161444"
  },
  {
    "url": "categories/index.html",
    "revision": "be25219f7ab543254616c95a4de4e5d6"
  },
  {
    "url": "categories/noteDev/index.html",
    "revision": "72f045afe06b4594e560d5f70f8da257"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
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
    "revision": "a4abd9549dd82b84957ec4c71659cef8"
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
    "url": "tag/index.html",
    "revision": "b17be7424b088ed65de6f116ec8be436"
  },
  {
    "url": "tag/tag1/index.html",
    "revision": "a70107189481282e2b977002a8ed7e77"
  },
  {
    "url": "tag/tag2/index.html",
    "revision": "d2f36964eb2c869f2483355fd7aa2e55"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "9db754efa2edd02b554540729df35c08"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "226590832ec0bd83d0a307ba595a991e"
  },
  {
    "url": "timeline/index.html",
    "revision": "d2a787ecc667f72a8a2c7f4813999161"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "43f839b8fc80fd7f22de014c2bc99700"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "a97e471a705a526ee7b8285c74b9b467"
  },
  {
    "url": "views/noteDev/2018/121501.html",
    "revision": "b6da6457bef79911cceb83b0dbeeb9de"
  },
  {
    "url": "views/noteDev/2020/200526.html",
    "revision": "9fc194beee7ec221da4ad463ed625131"
  },
  {
    "url": "views/other/guide.html",
    "revision": "07396761fc27e907930aceaac6b2331f"
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
