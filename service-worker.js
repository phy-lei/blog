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
    "revision": "df14f74f2fb2a983e837c4c27f2ae2cb"
  },
  {
    "url": "20200526/index.html",
    "revision": "6c121e0028f82221f1307ebffa43010d"
  },
  {
    "url": "20200528/index.html",
    "revision": "420c4b66d6a77243724ed3ac43df5cd2"
  },
  {
    "url": "20200529/index.html",
    "revision": "3580bda49cf3ff8d809379b53eaa47d8"
  },
  {
    "url": "20200601/index.html",
    "revision": "8283a2583f926001d23a30ce127edb2d"
  },
  {
    "url": "20200602/index.html",
    "revision": "dc88ffebf42e0427ddfdc516de08f9d9"
  },
  {
    "url": "20200604/index.html",
    "revision": "b49ffa858370026ecba470a1384bfb5c"
  },
  {
    "url": "20200612/index.html",
    "revision": "2a6d8b5b652734c1bc44b35109d03962"
  },
  {
    "url": "20200720/index.html",
    "revision": "2e48c41a5713adea13243e48b8bbaba4"
  },
  {
    "url": "20200804/index.html",
    "revision": "bc2532fff24524a8d4f173ef883a080a"
  },
  {
    "url": "20200812/index.html",
    "revision": "cb22edee3ad19779847227c5e4294f85"
  },
  {
    "url": "20201013/index.html",
    "revision": "2107f4d0091c52406e71a032682ae1b4"
  },
  {
    "url": "20210112/index.html",
    "revision": "671ad881653ff7d1cebc2982a29038f6"
  },
  {
    "url": "20210123/index.html",
    "revision": "4acdfd13996fdcff7be041a37579229a"
  },
  {
    "url": "20210129/index.html",
    "revision": "888f1a02fcff65e7705fa14df9bba014"
  },
  {
    "url": "404.html",
    "revision": "af78d273dd690bab4a905a90dd7cacb8"
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
    "url": "assets/js/10.9163a9ee.js",
    "revision": "f549915d3f2852312a14561637b8223c"
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
    "url": "assets/js/21.8ce2c8cf.js",
    "revision": "f435bd5dbcd0d931d78abb6829ceafb8"
  },
  {
    "url": "assets/js/22.d6211982.js",
    "revision": "7b854d6b669438b0312dec8572092457"
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
    "url": "assets/js/27.2b3c203b.js",
    "revision": "f03215c2f006fed50c4c303dfcd1f96f"
  },
  {
    "url": "assets/js/28.70392e39.js",
    "revision": "8ba626498a6f173b4ef877c3db5ad020"
  },
  {
    "url": "assets/js/29.bb45302d.js",
    "revision": "aa164b77f772320735509c3c2c0b48e5"
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
    "url": "assets/js/9.15c99a4c.js",
    "revision": "cede3f5545191377cb7a311a60354524"
  },
  {
    "url": "assets/js/app.42085aa0.js",
    "revision": "fa7e9cb0515e1f6353bfbb6d2d83b39a"
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
    "revision": "2ec05fc57eece917b32a32a8be411e15"
  },
  {
    "url": "categories/css/index.html",
    "revision": "4ad5503f7cab161d9c1ae16ef66b74e4"
  },
  {
    "url": "categories/index.html",
    "revision": "218c7f89c30c1d2f7a2e9be8af27bbe9"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "bceb42f8d54b8b26caf9d8521060ea48"
  },
  {
    "url": "categories/react/index.html",
    "revision": "f3de3481255dba79371e751890a90293"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "6bfe8322290420df256317814fb00bcd"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "1392d3489eac1d7f8be59766869a78bd"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "298858db3ddd3665fcf9a2f18e909417"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "afbeb24232f3fb4d3157a80509f5d3e8"
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
    "revision": "4b935a069826420d1d1f0dc3caa069a8"
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
    "revision": "f218b55fa37a4d4dba4b424808250f4d"
  },
  {
    "url": "tag/index.html",
    "revision": "e4c2f26d48abe2448a14b22522966dbf"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "5cbce8934887dc066760e9ee0a8b0843"
  },
  {
    "url": "tag/react/index.html",
    "revision": "3505d70c040b04c91f8e5a618ececa0b"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "fa9d84cacb6b8b1ab39babb1935f7275"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "b492bf5a87d77f6b36f75b36f0dddbcf"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "d45b6a508cf3d5f1583fca769c08649d"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "56ed6288ad2c2ca502c616380e546989"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "4f8836e261d9049a0a2c1c738dbd9d64"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "080ea25da20240e7e27ae8aa84892c39"
  },
  {
    "url": "timeline/index.html",
    "revision": "ca6b79849ee430772fe3f632c74f1cb5"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "6b44a5e26a0b1b02a907200df7ef1925"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "1a5cd0c36c308b7aee03d69ee8b9ccf2"
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
