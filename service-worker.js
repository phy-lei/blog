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
    "revision": "d660ca61b2e17c318d777244196a4606"
  },
  {
    "url": "20200526/index.html",
    "revision": "9666b7ada260ca5c16673b0a9afead01"
  },
  {
    "url": "20200528/index.html",
    "revision": "9ae56c45fb2cf4900dc64c04ad58f715"
  },
  {
    "url": "20200529/index.html",
    "revision": "c6ec90f0418ecb12ecdfcc917e326931"
  },
  {
    "url": "20200601/index.html",
    "revision": "7f0146cbeaf3b020bdf8e57ec4caf337"
  },
  {
    "url": "20200602/index.html",
    "revision": "5f406e43496c12e5d262dcaf304baa47"
  },
  {
    "url": "20200604/index.html",
    "revision": "5ce2b925f1949ba68cfdfa42761d7a11"
  },
  {
    "url": "20200612/index.html",
    "revision": "77a286dbe6db17243492eee7038bfa57"
  },
  {
    "url": "20200720/index.html",
    "revision": "f05514652fa89b13e445794f6da6478b"
  },
  {
    "url": "20200804/index.html",
    "revision": "2c67322ade18225fc0a0a62dc5e44b8f"
  },
  {
    "url": "20200812/index.html",
    "revision": "e284b36f90e8e6af732a7088d7ea5b18"
  },
  {
    "url": "20201013/index.html",
    "revision": "20bf752d40aebb8fc914121fe5256f4e"
  },
  {
    "url": "20210112/index.html",
    "revision": "6999245efd89db2ba3ee5132bdc064ad"
  },
  {
    "url": "20210123/index.html",
    "revision": "80f55a957581999c74b454b85c726426"
  },
  {
    "url": "20210129/index.html",
    "revision": "0776f1500051e85eb5d318d75d69baed"
  },
  {
    "url": "20210327/index.html",
    "revision": "f8d6c8ba6eb176bcdfc023550da5851e"
  },
  {
    "url": "404.html",
    "revision": "58224d13897c56c898dea81fbcbb2646"
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
    "url": "assets/js/10.f79f10ab.js",
    "revision": "8c154289a41a452ea7aa81fd48e91955"
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
    "url": "assets/js/27.2b3c203b.js",
    "revision": "f03215c2f006fed50c4c303dfcd1f96f"
  },
  {
    "url": "assets/js/28.70392e39.js",
    "revision": "8ba626498a6f173b4ef877c3db5ad020"
  },
  {
    "url": "assets/js/29.2ca756e2.js",
    "revision": "f2995300db7b9d8be84fb94d20c03b06"
  },
  {
    "url": "assets/js/3.85657320.js",
    "revision": "ded4e694ba473251ad0f154cb76e213e"
  },
  {
    "url": "assets/js/30.4935657e.js",
    "revision": "26811c7997586551c0b289fc6b66fdf4"
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
    "url": "assets/js/app.57977ca4.js",
    "revision": "51b33f634785aaecfcdab2c981611a27"
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
    "revision": "9f1143b53fb01ee3a87845bbbc88ac9b"
  },
  {
    "url": "categories/css/index.html",
    "revision": "e377e5ecfabd384ca1436be80b298fd0"
  },
  {
    "url": "categories/index.html",
    "revision": "3d32563054c242af09ab6e2b862d6896"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "49767c417661569cd08a9434fff00558"
  },
  {
    "url": "categories/react/index.html",
    "revision": "b24f256d863de3e4038735d4bfae2774"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "04e5a3211b185b894837d17249e5ca31"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "10d050408070e97512ff4e988e348e57"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "1a5db7e619eb862bd838a4354986f97e"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "303ea96d4389df84fd579a3683bfb746"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "4118f213a171e32d4024218008396deb"
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
    "revision": "e8c1b4878c6b3d529702ea99e52e978f"
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
    "revision": "30b06576de2267f1dbd622608a9b4bce"
  },
  {
    "url": "tag/index.html",
    "revision": "50cdf1f6421f87ea9e0c670f2a559902"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "550ab1b18461d331398f86c91dc7d256"
  },
  {
    "url": "tag/react/index.html",
    "revision": "1948be3d7deaf80d37b5fc93448dd964"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "e83912cd12b87e83ce198010c9092e63"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "98051ff86c5f1fc629b92fc031ccc9b1"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "32ed96ada1311ab58be1063371068904"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "70a1adc93263ca826e4f6d46bc207c2a"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "254900c99fa8f0070b1dbf42e3745549"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "51ab9fd315e919a380f25453fb7e7100"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "ced9bec8a31763614b0511cbb9cc6c91"
  },
  {
    "url": "timeline/index.html",
    "revision": "408300ceb74b8459759941a14cad293d"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "9282d57ba2cb8a7b89345f94aed3ac24"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "f74542a599dae133426c9052c2b1b1b0"
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
