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
    "revision": "c01d6046ef4539a7fb1d03be13bd4496"
  },
  {
    "url": "20200526/index.html",
    "revision": "2aabe379e74d7401287ffeb80a37e1f7"
  },
  {
    "url": "20200528/index.html",
    "revision": "05fba2864c646316de1f5944ffda8710"
  },
  {
    "url": "20200529/index.html",
    "revision": "6145cae6f6b8f9ccbf8d1bf9302ade96"
  },
  {
    "url": "20200601/index.html",
    "revision": "10ade407345e57b8b30114b14c3fc609"
  },
  {
    "url": "20200602/index.html",
    "revision": "6c15b68fb2db1cbac83ca72a2745f918"
  },
  {
    "url": "20200604/index.html",
    "revision": "cb475da0597c9870b1c290a19d05ce4a"
  },
  {
    "url": "20200612/index.html",
    "revision": "2d2f677f1f488659cade95c41f1bd239"
  },
  {
    "url": "20200720/index.html",
    "revision": "591c96abf334ebb6db075fc0f20ef8df"
  },
  {
    "url": "20200804/index.html",
    "revision": "2c238860db3f3eedcbc0b93188d26414"
  },
  {
    "url": "20200812/index.html",
    "revision": "caa35a418ea608f7612ff0a4aa3c54c0"
  },
  {
    "url": "20201013/index.html",
    "revision": "a43e6412649e196d397e34b4f0f33567"
  },
  {
    "url": "20210112/index.html",
    "revision": "4d10f9055eae20aba3686f86456742eb"
  },
  {
    "url": "20210123/index.html",
    "revision": "4bf9de119d64cbfa2cd18cea5099775d"
  },
  {
    "url": "20210129/index.html",
    "revision": "8fd0aad2b3731ee82c52e442efe747f3"
  },
  {
    "url": "20210327/index.html",
    "revision": "96b201e210c9ca863b6c04567df65e6b"
  },
  {
    "url": "20210502/index.html",
    "revision": "55a68303d3264dd4f31a75d03101ed45"
  },
  {
    "url": "20210507_01/index.html",
    "revision": "0fe121094f9d1d7608163d304556074d"
  },
  {
    "url": "20210507_02/index.html",
    "revision": "24768081f2e15fa4535e63d2ea00e91c"
  },
  {
    "url": "20210508/index.html",
    "revision": "6bfb68fe5fd97bb69ba488d6c6bfb1ed"
  },
  {
    "url": "20210510/index.html",
    "revision": "fba2e2af6f7f5c3b2a7f6221395013c4"
  },
  {
    "url": "20210703/index.html",
    "revision": "ed5ab8152b51bef9355c1082372eb565"
  },
  {
    "url": "20210809/index.html",
    "revision": "54e76edcf472fb9545ebd20648767c0a"
  },
  {
    "url": "20210901/index.html",
    "revision": "598f5c9d77c0f586eb5ce846164ff683"
  },
  {
    "url": "20211124/index.html",
    "revision": "022c27a7c84f693512fd5866a720df3c"
  },
  {
    "url": "20211210/index.html",
    "revision": "03b0a7e58f57c2325143150f69006e03"
  },
  {
    "url": "20220212/index.html",
    "revision": "c274dcdc4955aab3e4d7ce2f8edd7ac8"
  },
  {
    "url": "20220513/index.html",
    "revision": "8f453f952908a8e982d1c6e797221189"
  },
  {
    "url": "20220530/index.html",
    "revision": "5df5c8cdf2c824867e46bba68ad25d52"
  },
  {
    "url": "20220704/index.html",
    "revision": "f9b30f1b0eff7ead2d620605f9ade559"
  },
  {
    "url": "20220804/index.html",
    "revision": "909370fe7fb7264263a2b9495f15b4fd"
  },
  {
    "url": "404.html",
    "revision": "935ac265add8ee688d7d606d31fc0aa6"
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
    "revision": "fc43a4fa8c944ca07a2a0afdb0439b42"
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
    "url": "assets/js/app.cc9f2e61.js",
    "revision": "edd0c08860370e4959c6be6f2956dd65"
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
    "revision": "6db5ea43efea3cae9ea45da298f83e8a"
  },
  {
    "url": "categories/css/index.html",
    "revision": "6126d793f20f8fc691cf3db4399023a9"
  },
  {
    "url": "categories/git/index.html",
    "revision": "400e635930ce55160aefabbb9e00cd6c"
  },
  {
    "url": "categories/index.html",
    "revision": "3b536cf2e6c1edf4522cf0049bed3e5c"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "869ef51689b21df36ae703452db829a2"
  },
  {
    "url": "categories/react/index.html",
    "revision": "1ee29dd66c0f53b810aeb0e85f750423"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "49dee5418b8c16a618ec4818bff32b33"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "1ebc560d51f27e84cf9419313cbb8484"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "93d72f364106887240b81a950b9be16d"
  },
  {
    "url": "categories/成长之路/index.html",
    "revision": "bdb5875b49a8e9029a586dfaef48e840"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "3978f5042003c7355759c13ebadcf0ea"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "42eaea7cb0ccca871aa435a5dfcf788a"
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
    "revision": "b153730106609a2df8794b1f4daa0f85"
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
    "revision": "bfdd197e2f76fe763bfe9e19960a89e5"
  },
  {
    "url": "tag/git/index.html",
    "revision": "c9d679501dc14423d8e1cc8a2e303572"
  },
  {
    "url": "tag/index.html",
    "revision": "c21f16f8b94a8939433c28744f1da601"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "8ffb37859c67800e0a10901238bf4fbd"
  },
  {
    "url": "tag/react/index.html",
    "revision": "d9d0443d8d32375d5a15280321c76384"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "1b4f116038252a6881a88cf4c4aebba0"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "ea12b7dcde9881df0c5059e016a60a98"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "d69d6e11981fca04fe8f9b702e9a415a"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "056bf152bdb5c8d5ead0a5626fedced6"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "379188a8ccd5b6091105d0eac28254cf"
  },
  {
    "url": "tag/成长之路/index.html",
    "revision": "f39815352f21725a81c644e7613fb922"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "287bf9e14b0a606ed1e82ed83b3d22d3"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "19ad001c2b13d8725eaf55242e1ac0e8"
  },
  {
    "url": "timeline/index.html",
    "revision": "4c4ca5767db22addee2bf0256b7fdc89"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "4d4b64746db2f6b2580d1adf52390cc7"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "d7e7a24a521887a781702e1b62c3742d"
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
