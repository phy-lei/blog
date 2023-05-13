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
    "revision": "7453ef716ed9b81b07826eb2c815b7fa"
  },
  {
    "url": "20200526/index.html",
    "revision": "7753899dd377e29a07e9661f54b66d8b"
  },
  {
    "url": "20200528/index.html",
    "revision": "714a310b25485863f7019a4ea6e7bb90"
  },
  {
    "url": "20200529/index.html",
    "revision": "99467695e58f201b392bc6bd85045791"
  },
  {
    "url": "20200601/index.html",
    "revision": "c99554ee0cf325666a623e97e2e02a08"
  },
  {
    "url": "20200602/index.html",
    "revision": "2d3eac6afbc5b65fc75e521e393cfb3f"
  },
  {
    "url": "20200604/index.html",
    "revision": "1f132003426bd49a6c307de6601910ba"
  },
  {
    "url": "20200612/index.html",
    "revision": "3fc0ca8148ae5ea19c4462ce34ac3665"
  },
  {
    "url": "20200720/index.html",
    "revision": "d4873db8a1eb560ab1a4dfd6a494fd1c"
  },
  {
    "url": "20200804/index.html",
    "revision": "051c5842145ab2126ab628f1f9b84ef9"
  },
  {
    "url": "20200812/index.html",
    "revision": "e2006d858be49ada6fe7b32f503d55d3"
  },
  {
    "url": "20201013/index.html",
    "revision": "9eb6eaac24cc17da25df3bdbdaab08c4"
  },
  {
    "url": "20210112/index.html",
    "revision": "f532b5ae7f1cb0e3060f95720f407518"
  },
  {
    "url": "20210123/index.html",
    "revision": "08faa528d9d6775ea2f7f947e7a57966"
  },
  {
    "url": "20210129/index.html",
    "revision": "fbde02ad515213058c90a106b8a0da4f"
  },
  {
    "url": "20210327/index.html",
    "revision": "c6491f0ddba21dbdfd879cf8c67b8442"
  },
  {
    "url": "20210502/index.html",
    "revision": "4c6b3fafc4823f30de48f5db824ca72b"
  },
  {
    "url": "20210507_01/index.html",
    "revision": "a4d3f99cbfd81a8aa0f8279a0b1d1574"
  },
  {
    "url": "20210507_02/index.html",
    "revision": "dc35257ef9182e32eb2c26506bc66f2d"
  },
  {
    "url": "20210508/index.html",
    "revision": "dee14d6d12ec1fe9db6a6d3954d50c95"
  },
  {
    "url": "20210510/index.html",
    "revision": "26be124740992e95bbf4d02d4765d1f1"
  },
  {
    "url": "20210703/index.html",
    "revision": "2e81f9f01e1577a1952b13fd4866226c"
  },
  {
    "url": "20210809/index.html",
    "revision": "b687970d115a8acf93769faa854db080"
  },
  {
    "url": "20210901/index.html",
    "revision": "09a2b415169e3f1d657d36349e88d869"
  },
  {
    "url": "20211124/index.html",
    "revision": "ee0d6b92f0f3a4ce49d95dee44e8ae1c"
  },
  {
    "url": "20211210/index.html",
    "revision": "51b94814ec0be87e8fe68bbed4d4690f"
  },
  {
    "url": "20220212/index.html",
    "revision": "967aa3da2db2961a3e88d3e3dbd41e05"
  },
  {
    "url": "20220513/index.html",
    "revision": "82b0bf4f0c6340f6354f6e3b8ff55c8e"
  },
  {
    "url": "20220530/index.html",
    "revision": "783f1387fec9f27c14349ea326f7c511"
  },
  {
    "url": "20220704/index.html",
    "revision": "49542063ae3dba8bbac6091f9e056893"
  },
  {
    "url": "20220804/index.html",
    "revision": "9f94aeeb750bc0a79099ee01454076e5"
  },
  {
    "url": "20221125/index.html",
    "revision": "ef1850b214287f4170d3feacca067be4"
  },
  {
    "url": "20230513/index.html",
    "revision": "6fa204d1ff37121b00aaa46b49741930"
  },
  {
    "url": "404.html",
    "revision": "8aa7e3b111c431b88c6021220f8f3c89"
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
    "url": "assets/js/1.83ab4468.js",
    "revision": "ddeea9f24369cc1579939a909ea8a135"
  },
  {
    "url": "assets/js/10.c35fdf02.js",
    "revision": "3c5e7a60909a03378b0885dd61157619"
  },
  {
    "url": "assets/js/11.87a9ad58.js",
    "revision": "b10189bedea60631006580bbc3610af5"
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
    "url": "assets/js/23.daa9b990.js",
    "revision": "cab6f7c938f12fcf3b273b3d2ce4e9b9"
  },
  {
    "url": "assets/js/24.a51905ee.js",
    "revision": "0e4d9cfa7b1f6e9255991445221add35"
  },
  {
    "url": "assets/js/25.30dd95ec.js",
    "revision": "3500131353fb31527252d146d6374d28"
  },
  {
    "url": "assets/js/26.1d165ca2.js",
    "revision": "94f80b5a8219d25e7e3cb8fa46b29e9a"
  },
  {
    "url": "assets/js/27.3bab0f35.js",
    "revision": "f85fc8dee9a31a4537bcfbe33416c799"
  },
  {
    "url": "assets/js/28.3ff2367e.js",
    "revision": "0e0d0f028724b18263a6177861d0d046"
  },
  {
    "url": "assets/js/29.1a73f6e8.js",
    "revision": "d6d57019dcd342bddaaadf7c8568a40c"
  },
  {
    "url": "assets/js/3.db1300e1.js",
    "revision": "c6d4a584de35a41b06fef400f1d3c4d3"
  },
  {
    "url": "assets/js/30.48097f68.js",
    "revision": "474809ef97beea3864722e36f5b4c5e9"
  },
  {
    "url": "assets/js/31.ad3845a6.js",
    "revision": "11620ba2ac383c6db94ec8bef8589082"
  },
  {
    "url": "assets/js/32.1cc8997d.js",
    "revision": "ad599b75255a71c8def6db301daa46bd"
  },
  {
    "url": "assets/js/33.b2520781.js",
    "revision": "ed813d1cda48408f59ae23bbd5a2d32e"
  },
  {
    "url": "assets/js/34.c82a3354.js",
    "revision": "89098145cf0316276c3a653fcc6c7b62"
  },
  {
    "url": "assets/js/35.53268a8b.js",
    "revision": "599d9fe6bb9ea6812140c7f9b1d6eebc"
  },
  {
    "url": "assets/js/36.f6729d3e.js",
    "revision": "e86cb8e1f13e3a204b64e27ffeccfa23"
  },
  {
    "url": "assets/js/37.e535bc5c.js",
    "revision": "46e340e839368f5aedb377391d9c4bd5"
  },
  {
    "url": "assets/js/38.832e01b7.js",
    "revision": "2bf3306da335524562824156974e2561"
  },
  {
    "url": "assets/js/39.b1fa6de7.js",
    "revision": "50bde362c3217caccd5a084ca7bc4a40"
  },
  {
    "url": "assets/js/4.339729e1.js",
    "revision": "08de63f91865dc542434ded9704e1ed9"
  },
  {
    "url": "assets/js/40.31a1d568.js",
    "revision": "2adc89ce58b9953889def4a71b6376ca"
  },
  {
    "url": "assets/js/41.97af4c16.js",
    "revision": "4f93f7e38fa4f9634ee07e27070bce03"
  },
  {
    "url": "assets/js/42.429d5c87.js",
    "revision": "08d874382db6bb548d345f2c5b8a6d81"
  },
  {
    "url": "assets/js/43.4e0a3c5f.js",
    "revision": "1392446f4fab9773671b9a9fe52efc11"
  },
  {
    "url": "assets/js/44.6451e1bb.js",
    "revision": "852ead30b28a7daf5a0eb4217ca5a9aa"
  },
  {
    "url": "assets/js/45.00602f08.js",
    "revision": "d740aebade414d45f8dfd5b368b1acdc"
  },
  {
    "url": "assets/js/46.bbde9b51.js",
    "revision": "a473731c82055091f3723ee87f43eae5"
  },
  {
    "url": "assets/js/47.8789d43e.js",
    "revision": "774695b4fc475b8d04728bbd46e05442"
  },
  {
    "url": "assets/js/48.b701826e.js",
    "revision": "81a4c96f36937054b10d8e21a3235a0e"
  },
  {
    "url": "assets/js/5.2202e623.js",
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
    "url": "assets/js/app.1db12add.js",
    "revision": "0a9b3a407c57dabb3a93da621ba04a18"
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
    "revision": "9b1a7feec90e8948c8b69bcd106556f1"
  },
  {
    "url": "categories/css/index.html",
    "revision": "c22a18c511e1dd3cc13684ac6b95c92c"
  },
  {
    "url": "categories/git/index.html",
    "revision": "10b998415e0a89a011ab823e0e2fed99"
  },
  {
    "url": "categories/index.html",
    "revision": "a623eefbed20e9259b39ba538b9496b8"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "b87541b8eb266bbbe6d0b0c39be6834c"
  },
  {
    "url": "categories/react/index.html",
    "revision": "a2bca9c9cdaae81a1ea9f9989e385937"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "d688dd857365273880493d21960e8284"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "8e9c0737dd1123bec8b63dad634dec73"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "ad9de6d4d68d05a6e47fb3f46dff35d4"
  },
  {
    "url": "categories/成长之路/index.html",
    "revision": "417ae523f6413717cb5c54ed0ac4f76a"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "a3b16a93eac6105c87040ee4ed25b94b"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "299fb30c8cc141139f72bbc4784604f5"
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
    "revision": "09fa7fa90466ac790dcfbcdab2216e24"
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
    "revision": "fd141567a7872bdca693888d9bc344b9"
  },
  {
    "url": "tag/git/index.html",
    "revision": "1778308562839414e262fdeda4dc2abe"
  },
  {
    "url": "tag/index.html",
    "revision": "f8f3d3b31a9f60a57afea7c184db64a4"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "98e8e0caf11f4d34c821f2aab5fe49d8"
  },
  {
    "url": "tag/react/index.html",
    "revision": "46d9ac50141c0993cfd69a94e25542d9"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "5158e1a5d598644715cab0fd932e2477"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "675fe0b7e316d06dbfd727b73982bb48"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "8caff75ff7072c77a9b1dc5d18f9af57"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "6b1e65bbece881e4b9324e531563441c"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "ce7d62ba2894ea89d8b13d12b4ba7c05"
  },
  {
    "url": "tag/成长之路/index.html",
    "revision": "a8df143403546c825f92a47a05819cb3"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "3425c2242c474ee79b38f26b18af012f"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "f245367dd21de86aac8b138305603f42"
  },
  {
    "url": "timeline/index.html",
    "revision": "d89959551e11f234fea10734849b9427"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "3aff6b3ead019260a52ac4738fa6a827"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "76b76f0f8858d5bc299e0a355a026b86"
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
