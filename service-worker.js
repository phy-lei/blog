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
    "revision": "ee4705862161fb830171ec8284b323d4"
  },
  {
    "url": "20200526/index.html",
    "revision": "5a96d49084ebf3755c9b9a7b3d38985f"
  },
  {
    "url": "20200528/index.html",
    "revision": "a788af49c6651ac8e0d885d7df03d51c"
  },
  {
    "url": "20200529/index.html",
    "revision": "349ad86f63b090d1e1425dd9e14d20a2"
  },
  {
    "url": "20200601/index.html",
    "revision": "d41fe1618bc45970279ec69f22b5cd63"
  },
  {
    "url": "20200602/index.html",
    "revision": "c7d86c7a3180e51420b9558c5a4187ce"
  },
  {
    "url": "20200604/index.html",
    "revision": "931ad40cc426702f1ff777b596c6dadf"
  },
  {
    "url": "20200612/index.html",
    "revision": "ea4ef9feaf8a7715ac0a98b48cf18c85"
  },
  {
    "url": "20200720/index.html",
    "revision": "a9339018c12cc9c508319f23ad06e8a8"
  },
  {
    "url": "20200804/index.html",
    "revision": "55d752fd4510f66a2ff1169d8385ac3d"
  },
  {
    "url": "20200812/index.html",
    "revision": "750db3b910c967177adf1dc6b31a1f38"
  },
  {
    "url": "20201013/index.html",
    "revision": "63703c9422a147f7347c1cd36bcc08be"
  },
  {
    "url": "20210112/index.html",
    "revision": "0155f97136178efec132cdc3d1c9a9e7"
  },
  {
    "url": "20210123/index.html",
    "revision": "f33a292d6d51d48b743295b9101faa3d"
  },
  {
    "url": "20210129/index.html",
    "revision": "0f8d46f378922b389281067f37726858"
  },
  {
    "url": "20210327/index.html",
    "revision": "cb8da08343b10c08658f2a95dbf1202d"
  },
  {
    "url": "20210502/index.html",
    "revision": "60f684c2efb2565171d0ebe757a15670"
  },
  {
    "url": "20210507_01/index.html",
    "revision": "d91710ba4f3cfa2f2f53171281115c2b"
  },
  {
    "url": "20210507_02/index.html",
    "revision": "a261f0fbdcb3dec091207d5ce41beed2"
  },
  {
    "url": "20210508/index.html",
    "revision": "3f5fc6f168dc9039301bb0cba9d4187e"
  },
  {
    "url": "20210510/index.html",
    "revision": "f0a2e1a213afa9f52905df9d47b21dec"
  },
  {
    "url": "20210703/index.html",
    "revision": "6bd18b3a9459ba146c7c092f697f7200"
  },
  {
    "url": "20210809/index.html",
    "revision": "d0ebb823abf525eb04fbad7c65c29fe6"
  },
  {
    "url": "20210901/index.html",
    "revision": "b5b32ebf097386ae2a2a789d0a02765b"
  },
  {
    "url": "20211124/index.html",
    "revision": "2f3c53b19d26cd8f3aae271948469fe9"
  },
  {
    "url": "20211210/index.html",
    "revision": "11c4eb4c4a60c7413db06d0feed4326c"
  },
  {
    "url": "20220212/index.html",
    "revision": "f56c51db304c16bd2d91a382844d9788"
  },
  {
    "url": "20220513/index.html",
    "revision": "334053996d8f5b29814e87429d486296"
  },
  {
    "url": "20220530/index.html",
    "revision": "943f8b71bd3bdb67a8f59ab270e35f55"
  },
  {
    "url": "20220704/index.html",
    "revision": "efd7e0219ea556fd7412f530b854cd7e"
  },
  {
    "url": "20220804/index.html",
    "revision": "953f3cd0851cc759eef71fdb2c664b8c"
  },
  {
    "url": "404.html",
    "revision": "4d2e4184f4651c207207a5d71e4693d1"
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
    "url": "assets/20220513/01.png",
    "revision": "55633fac698a450a8d6a062e14f4f22f"
  },
  {
    "url": "assets/20220513/02.png",
    "revision": "7883f20df6ac2d52a866c9274224d46a"
  },
  {
    "url": "assets/20220705/flow-core.png",
    "revision": "1ef5a364f4f492159daf614f4b225ce8"
  },
  {
    "url": "assets/css/0.styles.9a13c917.css",
    "revision": "5d1a34a04c5adc5a831aac23ee96acfa"
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
    "url": "assets/js/1.e0ccd5ab.js",
    "revision": "ddeea9f24369cc1579939a909ea8a135"
  },
  {
    "url": "assets/js/10.c35fdf02.js",
    "revision": "3c5e7a60909a03378b0885dd61157619"
  },
  {
    "url": "assets/js/11.51bbaab3.js",
    "revision": "d71b5aa8a05dcd50947c16b0f2f49792"
  },
  {
    "url": "assets/js/12.03fbf9d6.js",
    "revision": "03bfedbb428506f56be93550c62de1d5"
  },
  {
    "url": "assets/js/13.fb421e4a.js",
    "revision": "b1567cb4212564c2ee00e294cf7227b5"
  },
  {
    "url": "assets/js/14.3b5a59ef.js",
    "revision": "4fdf06f1818ec8954f692bccc699f154"
  },
  {
    "url": "assets/js/15.5dea467a.js",
    "revision": "c8ce052211b2ecb288a89e139d2f18f0"
  },
  {
    "url": "assets/js/16.d1a10e76.js",
    "revision": "1a7e6ba52a8fcec34e5e5ef19c720b24"
  },
  {
    "url": "assets/js/17.c3dc14f5.js",
    "revision": "3f04e41188a6cd9b30212874677e4bd7"
  },
  {
    "url": "assets/js/18.5a64d7a5.js",
    "revision": "f08eb358b3bc0a37b2a2caceb3bf8321"
  },
  {
    "url": "assets/js/19.7dd95545.js",
    "revision": "564120e440052f945bab2d7ab860c38e"
  },
  {
    "url": "assets/js/20.6fe4c2a2.js",
    "revision": "5a17d16bb231e8a40dc10c0be9ccc5fd"
  },
  {
    "url": "assets/js/21.2de00e28.js",
    "revision": "9b0181fa1e5a23438cf84914fd9469ab"
  },
  {
    "url": "assets/js/22.cd885551.js",
    "revision": "a4355de62832863cd77649b790393b93"
  },
  {
    "url": "assets/js/23.e2b5fa89.js",
    "revision": "055094e952cf52e283fd0a3624800a96"
  },
  {
    "url": "assets/js/24.d464d9f0.js",
    "revision": "d680f6371892d673b20eb0c2434c5cb7"
  },
  {
    "url": "assets/js/25.4b9ed10b.js",
    "revision": "60b9d36127eb2c1530c6ada71f8aeeb5"
  },
  {
    "url": "assets/js/26.f7510e82.js",
    "revision": "fe960e57f66ee066c8fca81ed31a76e7"
  },
  {
    "url": "assets/js/27.60f1ef4d.js",
    "revision": "acc440110f6b684ceaf1d6ce69407014"
  },
  {
    "url": "assets/js/28.b528e715.js",
    "revision": "7c38205fcbe0089e775c0b992d677107"
  },
  {
    "url": "assets/js/29.1466b6b8.js",
    "revision": "3bf679d3941a10adab0bf3a2ce809768"
  },
  {
    "url": "assets/js/3.1d0553cb.js",
    "revision": "c6d4a584de35a41b06fef400f1d3c4d3"
  },
  {
    "url": "assets/js/30.32d9e625.js",
    "revision": "afe9e79570bea49c7b68fa70a0b45b4d"
  },
  {
    "url": "assets/js/31.305332a3.js",
    "revision": "c86c6deafb025489c686341e824c92fe"
  },
  {
    "url": "assets/js/32.2f139327.js",
    "revision": "c27e90f7a8f1f3ca30720448b7145f1c"
  },
  {
    "url": "assets/js/33.6cefc102.js",
    "revision": "c1279ddc38c4b69a8afab9ba10b59ebc"
  },
  {
    "url": "assets/js/34.99081001.js",
    "revision": "ebe5d9877e2773c3c981031e29d8305e"
  },
  {
    "url": "assets/js/35.a3c4e9d3.js",
    "revision": "62c85ba1d0e80fd376151a8e81de994d"
  },
  {
    "url": "assets/js/36.862892b1.js",
    "revision": "dbf3070a46ae038f572e1b90f080e1f8"
  },
  {
    "url": "assets/js/37.9e50b9b7.js",
    "revision": "ff6863ef703d7a5f81ec73c406c3b5d7"
  },
  {
    "url": "assets/js/38.1406b1a0.js",
    "revision": "8da609887e3134c9142e8b5d61248300"
  },
  {
    "url": "assets/js/39.04fc8a0d.js",
    "revision": "d1706c56d277ae47adf28c217bf5dc32"
  },
  {
    "url": "assets/js/4.d0f4a55d.js",
    "revision": "08de63f91865dc542434ded9704e1ed9"
  },
  {
    "url": "assets/js/40.f6fbbb99.js",
    "revision": "fc2ef552c9d1d35d4a9a684edb3e152c"
  },
  {
    "url": "assets/js/41.086ad9dc.js",
    "revision": "0d946526614a589ebb563baf06d0e8a2"
  },
  {
    "url": "assets/js/42.be165fce.js",
    "revision": "c7ff2e2a3996fd8e0d6a89daeaeda401"
  },
  {
    "url": "assets/js/43.c95fb814.js",
    "revision": "d16e87564b54e3006ad8c3d53e42805b"
  },
  {
    "url": "assets/js/44.0deeeaf5.js",
    "revision": "feb0ad8b3e3a529893d3ebd4fad7e47d"
  },
  {
    "url": "assets/js/45.41099f60.js",
    "revision": "b2f3f93fbf75bb326778fc51e7b42259"
  },
  {
    "url": "assets/js/46.edd03eec.js",
    "revision": "d70c59aaa9cd1c5e6eba2e56ce6a7b0c"
  },
  {
    "url": "assets/js/5.03ebc6e9.js",
    "revision": "12aba6e2a20561cb65660f97da9d051c"
  },
  {
    "url": "assets/js/6.a1fd875e.js",
    "revision": "6c2a75a577746c6044c4318e66756b1b"
  },
  {
    "url": "assets/js/7.fb3f8319.js",
    "revision": "f51efe38411ecc26ee1cc8311321f51f"
  },
  {
    "url": "assets/js/8.14261d42.js",
    "revision": "8f4fd915be26d4e2f96318640275dcfe"
  },
  {
    "url": "assets/js/9.16585bcc.js",
    "revision": "f40f1f53eee1b95ca328f2c603486a09"
  },
  {
    "url": "assets/js/app.899041c8.js",
    "revision": "a1127a813abe0ba9d1ee00bfb439c9eb"
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
    "url": "categories/article/index.html",
    "revision": "02f82af03ab8f7df91f3a230dd7a42a6"
  },
  {
    "url": "categories/css/index.html",
    "revision": "f93f612ef1432a8c96f59e38dc371ef8"
  },
  {
    "url": "categories/git/index.html",
    "revision": "bbf44b44b7bc6ded8185fc3ab2cf7878"
  },
  {
    "url": "categories/index.html",
    "revision": "fd5abf04ff2aa7f371d142645727043b"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "b757ad25dbb99b595da84d4540f54356"
  },
  {
    "url": "categories/react/index.html",
    "revision": "16a1155b323f160e0b876512467f787e"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "87c7343d35f76068de3eb10a76973d97"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "481e059f4299f02ad17bbb1b84586721"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "ed6d73fe452686972cc9442a3ca4a773"
  },
  {
    "url": "categories/成长之路/index.html",
    "revision": "5a9e0fb048c16d7eec854a91e8e269f3"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "97d19b13218e7c225b8bd69bb69fad7a"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "8915d7783b550df225a3f4fc95414277"
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
    "revision": "699ee1d2bc31b765ec51e7834905e9f0"
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
    "revision": "6d9141f235bf22104a2bca4515bbc8e2"
  },
  {
    "url": "tag/git/index.html",
    "revision": "0ca5cb12c951bc563674d25b974136a6"
  },
  {
    "url": "tag/index.html",
    "revision": "c957d69fc07dccbae7bd019d2ac16db4"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "7b3ce854bb3a55caa04aeafdde5e4711"
  },
  {
    "url": "tag/react/index.html",
    "revision": "be6a7cea02aa2368dceb85dc26b4ffb6"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "797f68c61cca4bdd49e82b5f8100f740"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "e2b9fd37e4250f54dfe1290bcee5c07d"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "f8f89e4905ab2cf6927ee3e83c820a99"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "ddffaf1066272c7c3c33e4e223d3b381"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "c51aa4db1b560277e2133c95b978be16"
  },
  {
    "url": "tag/成长之路/index.html",
    "revision": "f983ebc748791ec73424c410f84d4bce"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "c16567c76d0f4c8867629644a38e500f"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "0772bcbb93bf0e6c0a4338c6b93ba170"
  },
  {
    "url": "timeline/index.html",
    "revision": "48cd47a23376fc57d95bef3ac1b25810"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "e9fc446f949d1504b961ad02752513b7"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "4d09c7779454b0d810ec525d2d1dcb6f"
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
