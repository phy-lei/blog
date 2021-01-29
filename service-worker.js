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
    "revision": "082cca2649d5da19d74fb58361b48a08"
  },
  {
    "url": "20200526/index.html",
    "revision": "594608459fc840da6a2b6d4459f3d4d8"
  },
  {
    "url": "20200528/index.html",
    "revision": "bfab030877feab5e8c8e0df600cdbfe2"
  },
  {
    "url": "20200529/index.html",
    "revision": "ec49dc49388bb199ac5a12160f2ef63e"
  },
  {
    "url": "20200601/index.html",
    "revision": "338d44576073aee8204ef24adec774df"
  },
  {
    "url": "20200602/index.html",
    "revision": "fe1765e9df13cb7f91a320d3e1a2d41d"
  },
  {
    "url": "20200604/index.html",
    "revision": "d649ba81ca9487870c4ea93fd6cbcb1d"
  },
  {
    "url": "20200612/index.html",
    "revision": "9ab2c042c177185c165d01b8bb61fb6f"
  },
  {
    "url": "20200720/index.html",
    "revision": "48af0d711a125e5b8ec2ee4f5beb80d8"
  },
  {
    "url": "20200804/index.html",
    "revision": "9e0a453f40710e19820f0c28ead7b0f8"
  },
  {
    "url": "20200812/index.html",
    "revision": "20018ba3314b75bf38fe7bd303fa76bd"
  },
  {
    "url": "20201013/index.html",
    "revision": "dae4d79961d5f25c6604d419c46a1c6b"
  },
  {
    "url": "20210112/index.html",
    "revision": "bf8dd8b7970cdb9e715606d62bdd5cc9"
  },
  {
    "url": "20210123/index.html",
    "revision": "382a919970f6d6220481f22e6d00c79e"
  },
  {
    "url": "20210129/index.html",
    "revision": "0fe7096ad15dc66064424ada553a01cc"
  },
  {
    "url": "404.html",
    "revision": "6b9e7a586db63a04224f38e521e5cfdc"
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
    "url": "assets/js/21.579a6fec.js",
    "revision": "a1e9a36edbae392769acdaac543be1b2"
  },
  {
    "url": "assets/js/22.d6211982.js",
    "revision": "7b854d6b669438b0312dec8572092457"
  },
  {
    "url": "assets/js/23.c550b098.js",
    "revision": "87244c9c9d1111b3eaa59b247370b9fd"
  },
  {
    "url": "assets/js/24.0b8d07dc.js",
    "revision": "b218f20befd29587cd6b27a85c3308a8"
  },
  {
    "url": "assets/js/25.24cd1097.js",
    "revision": "3f683a5bd89380e495c96de625d6947b"
  },
  {
    "url": "assets/js/26.c1969f96.js",
    "revision": "2c115999405d340e12f534ea4d317b6a"
  },
  {
    "url": "assets/js/27.493c6f62.js",
    "revision": "358c762205c84275e1709972e681928c"
  },
  {
    "url": "assets/js/28.38b0464a.js",
    "revision": "977d91a83733c0dc4f4850a736d88aab"
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
    "url": "assets/js/app.3a265af2.js",
    "revision": "72ad7cfe4916f7fe9447f0620e6834f5"
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
    "revision": "613a0ce528cdd7268815c0dda1793f5c"
  },
  {
    "url": "categories/css/index.html",
    "revision": "f41de89366ac4ccf7c8eb3adfe9a0ef4"
  },
  {
    "url": "categories/index.html",
    "revision": "bf4b43ae7e439affe6139c902c543f81"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "8280d900b5c100bd67bcfd50f36c85b7"
  },
  {
    "url": "categories/react/index.html",
    "revision": "b1cdf4e838692f34cee7d16d4a4c5bdb"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "0246d9c27fc8bae288658bbf15ff4803"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "c27d771e6846137210858e21f41b3b86"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "ecd64dd551ff1f8f179b66484569f1fe"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "afcf04aed9a8eb0772650958e3630509"
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
    "revision": "fa8da893e2a543c47425a7af878c676c"
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
    "revision": "486d0dac667a5a62d7f05cd4bb1b97c7"
  },
  {
    "url": "tag/index.html",
    "revision": "4cc792ad0a58d0956185fce1145b72b9"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "22cbf3c6d0253cf0ff0d137e59b2a6ce"
  },
  {
    "url": "tag/react/index.html",
    "revision": "18b3f464081dde1a1bccc0eae379a3c9"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "1d6831d0c8ede44d5e5020fbc2926c34"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "0c084b7ea2e9e0bdac6dee1e2858e344"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "e3534b0905142382a98ec9e7349641fd"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "6437e9e0d18b53c395981b5132f3d5d8"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "3116d5a61668719ba93adcf658fe0926"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "5699b8790cb46b1884aec6129aa192e3"
  },
  {
    "url": "timeline/index.html",
    "revision": "7eb4f5c2c139b599c780747b5932b102"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "ff6c9da2ccad3f09895b46b822bdd1e0"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "e9046bbe434ae4800c7d93c13b31760c"
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
