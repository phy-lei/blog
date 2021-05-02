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
    "revision": "d7b6d591cdb56bca4b7ce37b18d709ad"
  },
  {
    "url": "20200526/index.html",
    "revision": "500582e9024cbd07bd50c3d91c95ec98"
  },
  {
    "url": "20200528/index.html",
    "revision": "7034dc40fc714b2d51ab74934bd30110"
  },
  {
    "url": "20200529/index.html",
    "revision": "5de34190dbae43c9783a9adf9c3db745"
  },
  {
    "url": "20200601/index.html",
    "revision": "87d454baeb457dc3ebf20604a649645d"
  },
  {
    "url": "20200602/index.html",
    "revision": "662cabd0ca82a6fa8f226bdeeef1e1ea"
  },
  {
    "url": "20200604/index.html",
    "revision": "11a81939cc9ac6cdbf64b6fab0cff2fa"
  },
  {
    "url": "20200612/index.html",
    "revision": "569c2b869c9e137ad632e633486076f8"
  },
  {
    "url": "20200720/index.html",
    "revision": "6c6ca20518568d9b6e6bc7e930cc00e9"
  },
  {
    "url": "20200804/index.html",
    "revision": "0aeaf53554b3301e8ce0eb4dd88e420f"
  },
  {
    "url": "20200812/index.html",
    "revision": "7363c24c7e886fc03e8a28d231ad63cc"
  },
  {
    "url": "20201013/index.html",
    "revision": "c01d615c65f8291ae5af4a4f12951c55"
  },
  {
    "url": "20210112/index.html",
    "revision": "e52baefda2f07b05973d33e9b3e7c681"
  },
  {
    "url": "20210123/index.html",
    "revision": "1f3be5aaa5e9eb0d909741b1afd8f98a"
  },
  {
    "url": "20210129/index.html",
    "revision": "d87fef22e2612e29a0133b8cecbfa269"
  },
  {
    "url": "20210327/index.html",
    "revision": "06ab4d33db15c90cc54a53f2fa157ea0"
  },
  {
    "url": "20210502/index.html",
    "revision": "814de63fa82b41338bdf3c1579fc33fa"
  },
  {
    "url": "404.html",
    "revision": "a221a830b7ba436314455c87b9eec635"
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
    "url": "assets/interview/01.jpg",
    "revision": "4ba6a5e4af975258cc1f47d55dcd38ca"
  },
  {
    "url": "assets/js/1.51d2f36d.js",
    "revision": "ddc9f734993167dbe05adceab30f6431"
  },
  {
    "url": "assets/js/10.05bca616.js",
    "revision": "bde10d470636b38506132f5379f7ee3c"
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
    "url": "assets/js/27.978250d2.js",
    "revision": "5ad1443b5b0853e55607ae274e576dd5"
  },
  {
    "url": "assets/js/28.e613cd29.js",
    "revision": "a2d2766ae0a559616328a8e3b764dc2f"
  },
  {
    "url": "assets/js/29.b208564c.js",
    "revision": "dc3176d7f948e1b97bc6563e2836ef4f"
  },
  {
    "url": "assets/js/3.85657320.js",
    "revision": "ded4e694ba473251ad0f154cb76e213e"
  },
  {
    "url": "assets/js/30.420e68e6.js",
    "revision": "7858282b41c7c7e91229cff88abd8345"
  },
  {
    "url": "assets/js/31.7543e17f.js",
    "revision": "fe67c171fd9f0db199f4a21f6d504af8"
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
    "url": "assets/js/app.c0d11972.js",
    "revision": "57a31ff1aafba99786b7e506eb784648"
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
    "revision": "15c3bfd6938d78ccecf331e2f88f3ab8"
  },
  {
    "url": "categories/css/index.html",
    "revision": "7c00350f8835dd5675abe7e30f4c2e89"
  },
  {
    "url": "categories/index.html",
    "revision": "7d4c860743191588f160fa364fec153a"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "4a774dde3a6e18889b8076cd9ccd105c"
  },
  {
    "url": "categories/react/index.html",
    "revision": "a6d9ef182258ce33eb4fd341fcc85df6"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "11574e5d4c29d61dd78af93fe150d8df"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "5b41c824ac12f6de5beac205ee13db76"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "4f7443b116bd1b6bbcc906cf9ebeadb1"
  },
  {
    "url": "categories/成长之路/index.html",
    "revision": "c1160bcdb74fa92a16680c6b32a0927f"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "5577b8c08d1b11f37a39261bd24a2edf"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "1732c5b62db1a822b2d710cf567e7d5a"
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
    "revision": "50440d175d50bb00ce76745e7efc6199"
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
    "revision": "3bc5e119016aed9e14512f1d8f104d5e"
  },
  {
    "url": "tag/index.html",
    "revision": "d615d1d43ce06beb6cb200435a756165"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "9269d33d0bedbd994673821732a093cb"
  },
  {
    "url": "tag/react/index.html",
    "revision": "dd46fc7b9cfb68d24d2af5a4f2cdecab"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "00d07ac98931f2cfc10ee7cc5c8f8d10"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "f81322538db550153feac570900830af"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "b2a357dce271729afa569639940cf019"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "b8b4a9d10919886c08568a585a86678e"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "4aae668cf88578bf07803bdf95d0e090"
  },
  {
    "url": "tag/成长之路/index.html",
    "revision": "9340be89bd7458c2c71c48a7a8086d57"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "42e85a389e990855c1b5aee193b4e03f"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "2ce45b57d2141f8e4dae38dce32392f0"
  },
  {
    "url": "timeline/index.html",
    "revision": "3330d802d1d773055c07b4c0f861acda"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "38d289f5827f229581b56c0c96760d61"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "7762eac12e415e15595714c8b89b386f"
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
