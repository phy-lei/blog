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
    "revision": "d4ea80fa8f095319097d625acca3a1e8"
  },
  {
    "url": "20200526/index.html",
    "revision": "36e5c36a07ae6b9ed02cf37ab7b52dd3"
  },
  {
    "url": "20200528/index.html",
    "revision": "064437d4313d6f38010fa9bed48c4bc4"
  },
  {
    "url": "20200529/index.html",
    "revision": "406bebd683a102f3076590d306e70c43"
  },
  {
    "url": "20200601/index.html",
    "revision": "d2421b12385bd630cdedc5a2fde89b10"
  },
  {
    "url": "20200602/index.html",
    "revision": "69ad418d8b62f7b06de02aad2aef2784"
  },
  {
    "url": "20200604/index.html",
    "revision": "f8bc79d52a57eef8e0306a04f425b44c"
  },
  {
    "url": "20200612/index.html",
    "revision": "4dcbc7e85596f5078dcc5d7a238759a2"
  },
  {
    "url": "20200720/index.html",
    "revision": "512178e4c27501e03ff22773f8f3b04d"
  },
  {
    "url": "20200804/index.html",
    "revision": "a9d0c82f52288425afb938b39f0ac2bf"
  },
  {
    "url": "20200812/index.html",
    "revision": "8112dcf519f04a0edda26ee831b21297"
  },
  {
    "url": "20201013/index.html",
    "revision": "ec5ac10ed835e67a61f4b625bb70304f"
  },
  {
    "url": "20210112/index.html",
    "revision": "83a14d1073525857ce994c5867698d1b"
  },
  {
    "url": "20210123/index.html",
    "revision": "44650c0e25e0392dcd20bb2a25a8b465"
  },
  {
    "url": "20210129/index.html",
    "revision": "5b1319d22780b2e500181523fd511631"
  },
  {
    "url": "20210327/index.html",
    "revision": "4438f23229f9126bf8077230a6bd77c3"
  },
  {
    "url": "20210502/index.html",
    "revision": "254d28a3ea59348cd0682e02b8886302"
  },
  {
    "url": "20210507_01/index.html",
    "revision": "b0c128bd697c1a6eb7a389bbdf1550f4"
  },
  {
    "url": "20210507_02/index.html",
    "revision": "901ef761708d84961a4d66a7bac1cf38"
  },
  {
    "url": "20210508/index.html",
    "revision": "9e5654db0392d628009593bdaa4512e7"
  },
  {
    "url": "20210510/index.html",
    "revision": "8c28401976aa8e085fcbb1c03656e637"
  },
  {
    "url": "20210703/index.html",
    "revision": "59c34047f45c16976c6507afa09e0b58"
  },
  {
    "url": "20210809/index.html",
    "revision": "2205f38048a85851579a238e3df8a510"
  },
  {
    "url": "20210901/index.html",
    "revision": "6e4c88e2d47f18e6eaa466073c24c514"
  },
  {
    "url": "404.html",
    "revision": "346cffc7ddd5acf61e165b1e958ce6ce"
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
    "url": "assets/20210901/01.png",
    "revision": "f4b3574a73f662f41b1043223b216e53"
  },
  {
    "url": "assets/20210901/02.png",
    "revision": "1ceadf3311761be0eb613d89191afdd3"
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
    "url": "assets/js/10.eec45478.js",
    "revision": "86421c8195897f4a3b36ebcf617600d8"
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
    "url": "assets/js/16.d4215386.js",
    "revision": "a728d86e9237b062fb00255937d05bed"
  },
  {
    "url": "assets/js/17.5a25fb46.js",
    "revision": "9330746586622b5a1039d949d40b2c4b"
  },
  {
    "url": "assets/js/18.cbe4c522.js",
    "revision": "e80901471a296271ffc78d9babc4d3a6"
  },
  {
    "url": "assets/js/19.883925c7.js",
    "revision": "4e0b923d093a87155e77a8317ed3af70"
  },
  {
    "url": "assets/js/20.d31c021b.js",
    "revision": "c7d7815e25b2b2a63c3c2ec0da2c81c8"
  },
  {
    "url": "assets/js/21.cadd2e1e.js",
    "revision": "026b3887e022f659f3f1bc7f56ee051b"
  },
  {
    "url": "assets/js/22.46071fb9.js",
    "revision": "42c93c55a6072d7e9e5f9771ebce4754"
  },
  {
    "url": "assets/js/23.e04e81f8.js",
    "revision": "114c34e44d24f9b5a510e60b9c99ee63"
  },
  {
    "url": "assets/js/24.6d639456.js",
    "revision": "f90a328081d492b65ea66cf3ad2cea1a"
  },
  {
    "url": "assets/js/25.c8ebb8fc.js",
    "revision": "a482172252b98959559f157770bba734"
  },
  {
    "url": "assets/js/26.52c0f139.js",
    "revision": "67e315770fe35f8b23d8a3e499a5635f"
  },
  {
    "url": "assets/js/27.9eb9b2f9.js",
    "revision": "c343c48c5dc038b5228434d41fccaa1f"
  },
  {
    "url": "assets/js/28.15487421.js",
    "revision": "ffce4ab5b3eb93e7d112fdb52b60d155"
  },
  {
    "url": "assets/js/29.2c642a8e.js",
    "revision": "470bd61fa74650b9bb09793c25c5a9e6"
  },
  {
    "url": "assets/js/3.85657320.js",
    "revision": "ded4e694ba473251ad0f154cb76e213e"
  },
  {
    "url": "assets/js/30.db9068e4.js",
    "revision": "fac38fe4d880131f5b4bb1eefacb491d"
  },
  {
    "url": "assets/js/31.4ed4fec9.js",
    "revision": "36eb2a7a5cef965835979b69812694d2"
  },
  {
    "url": "assets/js/32.41e6bab9.js",
    "revision": "d4d05f90f8fe8d58589168cf99ec1f8d"
  },
  {
    "url": "assets/js/33.6dab963f.js",
    "revision": "3819c381378259e1979c1c367f559644"
  },
  {
    "url": "assets/js/34.e2dc201e.js",
    "revision": "5de21c24611e5393d1a71f68491cddaf"
  },
  {
    "url": "assets/js/35.f744df89.js",
    "revision": "556bedacd9a6d08872c0e20c2d9b5365"
  },
  {
    "url": "assets/js/36.f5e1ad4d.js",
    "revision": "2f63a82fc5e6f315b2a72405bd818655"
  },
  {
    "url": "assets/js/37.8ac5bff0.js",
    "revision": "409e0b18a832d65dacf2a44d4030b72c"
  },
  {
    "url": "assets/js/38.7e864c99.js",
    "revision": "e10ca517a72a01e6c36a7812b521592b"
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
    "url": "assets/js/app.bbdc87d7.js",
    "revision": "e98b9438688fd7928f3c578a823c35af"
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
    "revision": "8ee8cdc930b7a1aeaf9616dd4c40c818"
  },
  {
    "url": "categories/css/index.html",
    "revision": "8fd2a6d92fd0166467aafe063f5addda"
  },
  {
    "url": "categories/git/index.html",
    "revision": "8db454a354174bc5d40219525b63e22b"
  },
  {
    "url": "categories/index.html",
    "revision": "a5d2f8b304cadd4613b800eb483ef2a3"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "619e337a350062e4e3beeb12b4e873e5"
  },
  {
    "url": "categories/react/index.html",
    "revision": "b5860082e955fe3db4a037698f9ddc9a"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "52fad19ac6d256850a217159cae5381f"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "2fd3f2f0b7ddb0eac7c75e4505a1b5cd"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "24202380d51ff32c0b155608f39dcbe5"
  },
  {
    "url": "categories/成长之路/index.html",
    "revision": "87a131f4b7938a006c1a91d5483da162"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "92d7cf69d7d487ca23df4f12415ac8ad"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "2b2d5a05e57255862cc9352f19e17de0"
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
    "revision": "a7667343d9c523401985aac715c338e0"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "mine_1.jpg",
    "revision": "5ef1240314ed8707848ed856f43d7b13"
  },
  {
    "url": "mine.jpg",
    "revision": "9529d372528c3a82c56f93f099e53105"
  },
  {
    "url": "tag/css/index.html",
    "revision": "dbad13fec84c0378ab8184306c60229a"
  },
  {
    "url": "tag/git/index.html",
    "revision": "d5826f6f1b3026fb9e346045ae879297"
  },
  {
    "url": "tag/index.html",
    "revision": "8960f28ecaf26c85ba1dfdef8b129c85"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "a5df0d92613ba1a86b4007f8365e8d85"
  },
  {
    "url": "tag/react/index.html",
    "revision": "f63664a801cb0ac61e13e1b0365cf211"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "a2313870aa3fcf0c2d3153ddfdc011a4"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "fd4d0a54cf7f2ca1f136a5161eb378af"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "d32f2e3ebc39eeace31f08c45244149e"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "3eea1e58a4dab3e74984c95d80ed292a"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "ecc969be5cd456ea3e4011c16625a51f"
  },
  {
    "url": "tag/成长之路/index.html",
    "revision": "fa2bd981a6e8d1384d5508ed6e8f7341"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "196a328d388666b6a281a6d493c14f8f"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "675d0ddf96d82faf9260891b3bccff28"
  },
  {
    "url": "timeline/index.html",
    "revision": "43d16962e8ce265b99033fc750806f2e"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "6ef5382288ab0ffe3f08f7779f3eef13"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "18c1b707e711493e0897fde4a5a44d03"
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
