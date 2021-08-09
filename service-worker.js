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
    "revision": "4426fd862f075c140b1c9004a0dc0223"
  },
  {
    "url": "20200526/index.html",
    "revision": "5631cd3339019d452d20ca47a1285919"
  },
  {
    "url": "20200528/index.html",
    "revision": "e7f546094cb9c53acbb8e42da5dc3f23"
  },
  {
    "url": "20200529/index.html",
    "revision": "396402803efac29b6dfc4cd9b8ce280c"
  },
  {
    "url": "20200601/index.html",
    "revision": "5c87f9379ca83cfead5ab4e8612d6570"
  },
  {
    "url": "20200602/index.html",
    "revision": "40a19aa13d75667407a38c1380169698"
  },
  {
    "url": "20200604/index.html",
    "revision": "1729845ac0383081169a33414897c81d"
  },
  {
    "url": "20200612/index.html",
    "revision": "839ef8194142cb9ec981d1594b6d607a"
  },
  {
    "url": "20200720/index.html",
    "revision": "7a5cb46f20282d0eeede0cccec5cab90"
  },
  {
    "url": "20200804/index.html",
    "revision": "824c89687d81acd3797fa8f5b1754b8d"
  },
  {
    "url": "20200812/index.html",
    "revision": "0ec9c77605158a058b72dedfd2d6cf68"
  },
  {
    "url": "20201013/index.html",
    "revision": "663bcec5f2c2845232674b8b79b01b3b"
  },
  {
    "url": "20210112/index.html",
    "revision": "6972534550aed2cca63d5b51dc2513c0"
  },
  {
    "url": "20210123/index.html",
    "revision": "759e61132c256163611f1692526c0391"
  },
  {
    "url": "20210129/index.html",
    "revision": "46aa8181151ad7fc56bab7fd7d1ac1bd"
  },
  {
    "url": "20210327/index.html",
    "revision": "5fc8518cf429f35b6db98b78e2fe01db"
  },
  {
    "url": "20210502/index.html",
    "revision": "7eed55506bb4b7fcd5c58bba4c7241f3"
  },
  {
    "url": "20210507_01/index.html",
    "revision": "1d029908aaf1982ff53e244dd03aa604"
  },
  {
    "url": "20210507_02/index.html",
    "revision": "a09198f4c20d896f2204f337c1289138"
  },
  {
    "url": "20210508/index.html",
    "revision": "eced80219e696f3a54859143ed84275f"
  },
  {
    "url": "20210510/index.html",
    "revision": "255aa36146656a14fc817047e85cdae9"
  },
  {
    "url": "20210703/index.html",
    "revision": "bd117c25210dba8c87408466f7849890"
  },
  {
    "url": "20210809/index.html",
    "revision": "d723edc0f44bce29eb5138f780429ef1"
  },
  {
    "url": "404.html",
    "revision": "4bd1bb9aa9392048179bf433389cc16f"
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
    "url": "assets/js/10.0afd6a30.js",
    "revision": "0402c52f01d0ecc3790b801457e88072"
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
    "url": "assets/js/16.bbeabf8d.js",
    "revision": "3a1e8a35f0a669e45b890069ae26eab2"
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
    "url": "assets/js/22.3bb8e36d.js",
    "revision": "7701b0034b730f3319fdba53c8eb941c"
  },
  {
    "url": "assets/js/23.7192ccff.js",
    "revision": "b82403b70f449c7f6c9fe860fafeba63"
  },
  {
    "url": "assets/js/24.5a7a2b26.js",
    "revision": "69282275e58b2491b5a8a85d0010d069"
  },
  {
    "url": "assets/js/25.804b2927.js",
    "revision": "4ec9104ff54135d2c06393e7ba08f6b4"
  },
  {
    "url": "assets/js/26.5cfb2df4.js",
    "revision": "3b182a65f37a6b9a8ac38162933fbe46"
  },
  {
    "url": "assets/js/27.e9e71335.js",
    "revision": "85c5ed3a10dbdb0585106bcb0438bba4"
  },
  {
    "url": "assets/js/28.3f0b63b8.js",
    "revision": "88473812db18f7ec66600eb63acbf30b"
  },
  {
    "url": "assets/js/29.788df60f.js",
    "revision": "605b574701278e38e85449edeccc03b8"
  },
  {
    "url": "assets/js/3.85657320.js",
    "revision": "ded4e694ba473251ad0f154cb76e213e"
  },
  {
    "url": "assets/js/30.3aa0b4b7.js",
    "revision": "06bae55087382e9bb2696b9897b2b206"
  },
  {
    "url": "assets/js/31.c6fb524a.js",
    "revision": "77d28e8d243bf2813cfde8554cc9ec7a"
  },
  {
    "url": "assets/js/32.52fc9f23.js",
    "revision": "5fec1a94b21e5a0d96c95a2d964e0a39"
  },
  {
    "url": "assets/js/33.2465be72.js",
    "revision": "ad8668a312a2fc4f67ce6f1df7ddbe8b"
  },
  {
    "url": "assets/js/34.0a235ca4.js",
    "revision": "98985970190e9d2e8fc1e5386d39be21"
  },
  {
    "url": "assets/js/35.53ed309f.js",
    "revision": "a30ea9dbe72641f1df67a61604631a0f"
  },
  {
    "url": "assets/js/36.31569dbe.js",
    "revision": "e34327db367b965612115dff3108c7d4"
  },
  {
    "url": "assets/js/37.a9dd4569.js",
    "revision": "ce72424cbf40878464d0f6f2350d8371"
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
    "url": "assets/js/app.d8491404.js",
    "revision": "b5de090ecfa845c26a8d801dc6c909c1"
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
    "revision": "b01cc6809c43581cbd77af2f3e5257fb"
  },
  {
    "url": "categories/css/index.html",
    "revision": "227d459fd25242932659c52a1bce26b2"
  },
  {
    "url": "categories/index.html",
    "revision": "b86ce08e3b3f0fff3118ef8a843be870"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "2989e57cf13fa21e702f84ed4ce1d955"
  },
  {
    "url": "categories/react/index.html",
    "revision": "3c9572e43a147f09ffc3e76989e03607"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "3cfc9ea1301571f13246765de5fe03b3"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "3953b2e36424d353bc53b5466181075b"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "2bfdfc55cbb3b1e1ce708893511c851a"
  },
  {
    "url": "categories/成长之路/index.html",
    "revision": "12756d48cac69b5139a6cebbd31b45c2"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "576493a00834618c2290950a5668ad00"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "371812532b4141b29eef1b6fc4cacdfe"
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
    "revision": "f5cae34c7f319bac6ae1e11f37a5362b"
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
    "revision": "540a2a5243ced85f5c665bef64509550"
  },
  {
    "url": "tag/index.html",
    "revision": "22776b53c253c69a35d104c6d630b80f"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "0f5d0bb1ceb48e8a73dc42f8f3e900e2"
  },
  {
    "url": "tag/react/index.html",
    "revision": "2cc75c95f79a301d9780b3d5c1460ffe"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "604b6e1159e464228aead561d10274c6"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "4bbc872f3ece2eadca0f5cca394ffcd5"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "302baa5b34d4c42e899620b73ea58a79"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "ba909bb4c1a4344eda6702fad3eacc8a"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "d862cbaa1f5f73f8e27080a4e8737904"
  },
  {
    "url": "tag/成长之路/index.html",
    "revision": "379596808e381504a568af9ce5c9acc5"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "a7928b2c770cc4a4c70266e7f81bbd60"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "3ab12d83a397bb2dc6f68b17403dc321"
  },
  {
    "url": "timeline/index.html",
    "revision": "0c4550626b4b1cee7d0f3c76cf7e9a5b"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "0a56a65f4902ea1a20da2f596c24c5a5"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "d569c2dde1751c31878b62a677cb95db"
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
