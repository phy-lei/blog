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
    "revision": "eda12ba2b73c8ca1b058c67a2324ec6e"
  },
  {
    "url": "20200526/index.html",
    "revision": "ea5fa7ed8b82a8765a7f6def297360a8"
  },
  {
    "url": "20200528/index.html",
    "revision": "27a24921431ecfc6f865351bd0c47fff"
  },
  {
    "url": "20200529/index.html",
    "revision": "65320490ee3075a1926605a8ed1f5d29"
  },
  {
    "url": "20200601/index.html",
    "revision": "2fdfd4cec9a8916f060332723b022d35"
  },
  {
    "url": "20200602/index.html",
    "revision": "4e5f70a9620e4344ec3f5a5ac973a925"
  },
  {
    "url": "20200604/index.html",
    "revision": "f70422e637036e5b315ae2eed375cc6c"
  },
  {
    "url": "20200612/index.html",
    "revision": "dc9b11c35b31e3f81c7f780a913b92d0"
  },
  {
    "url": "20200720/index.html",
    "revision": "e169d00eabee099f36b83d71797760e9"
  },
  {
    "url": "20200804/index.html",
    "revision": "60851b8c3e505ae6cc115ac363c8b4d8"
  },
  {
    "url": "20200812/index.html",
    "revision": "9da5de5750f514d4968ad0b0338195dc"
  },
  {
    "url": "20201013/index.html",
    "revision": "0683b11db88a03660a700e63c6f6f159"
  },
  {
    "url": "20210112/index.html",
    "revision": "633fe3f5f0c4f07f94a7ebf38d110f7d"
  },
  {
    "url": "20210123/index.html",
    "revision": "1b693071058c4cdef916e817d878bd8c"
  },
  {
    "url": "20210129/index.html",
    "revision": "c4174bbdc3d2ed724df54e125e2057ad"
  },
  {
    "url": "20210327/index.html",
    "revision": "6643f023d3c354fcabc973d73ff06fb7"
  },
  {
    "url": "20210502/index.html",
    "revision": "b59d4f8021c3a261308ec5b0140415aa"
  },
  {
    "url": "20210507_01/index.html",
    "revision": "ee0743672fdc87f964575fe0df44c064"
  },
  {
    "url": "20210507_02/index.html",
    "revision": "5fdd1323996b6918a9121dd7869cc382"
  },
  {
    "url": "20210508/index.html",
    "revision": "7e9364391a3ce9d9734eb03fe987c458"
  },
  {
    "url": "20210510/index.html",
    "revision": "65a0f5af1730ee3effe86ac055ef4c8a"
  },
  {
    "url": "20210703/index.html",
    "revision": "4195ad7398d295b623f914c5f87956b5"
  },
  {
    "url": "20210809/index.html",
    "revision": "08ada980c4d8273e1ebc366168f7e50d"
  },
  {
    "url": "20210901/index.html",
    "revision": "dc870f0a9c6d4e70055719b24427e85d"
  },
  {
    "url": "20211124/index.html",
    "revision": "e164b4b8fb28b3cd9a7ec208c1452bbc"
  },
  {
    "url": "20211210/index.html",
    "revision": "9e11639601556d71a00ec1e650f3811f"
  },
  {
    "url": "20220212/index.html",
    "revision": "dbd725175cebe06794e8bddcd1c93b9c"
  },
  {
    "url": "20220513/index.html",
    "revision": "7a507ccd1bb76b8851734451ce2f3fac"
  },
  {
    "url": "20220530/index.html",
    "revision": "375dc2c5c926fe6551d10e006a42ca68"
  },
  {
    "url": "20220704/index.html",
    "revision": "8a1dcc58585df7c4c0ff91441f363224"
  },
  {
    "url": "20220804/index.html",
    "revision": "cc1badbb3ab58f4ef533320555ad0d74"
  },
  {
    "url": "404.html",
    "revision": "f6d508f633f4550da508fded8bcf8707"
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
    "url": "assets/js/18.33323711.js",
    "revision": "f1846f50af7c490ba277d2448d503fca"
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
    "url": "assets/js/app.70717c6b.js",
    "revision": "d980985b126de306abef8fe6a0e4f08b"
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
    "revision": "b2bd5c232f014f1ff7579e1faa448db1"
  },
  {
    "url": "categories/css/index.html",
    "revision": "38b5c82774ca4b09f4a8332000bc2796"
  },
  {
    "url": "categories/git/index.html",
    "revision": "49a8c46e0f8d61c2fd0bc4e9876f310b"
  },
  {
    "url": "categories/index.html",
    "revision": "95b9fac4d5a49dccba97ce2bb7cef14a"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "e82843e039befd1dd376f3dfe2d684a9"
  },
  {
    "url": "categories/react/index.html",
    "revision": "a752470c2a0f360e817214b3475a2638"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "8e11efdc747c03048b6bc8b8845ca66f"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "be5d81ea00ad924712149bd72c2e3a04"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "f20b5603a7b63f0f624d135a49ccbb62"
  },
  {
    "url": "categories/成长之路/index.html",
    "revision": "cd4adf077ad4babf3da6d35376c68a22"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "51d8229b3dd31fcc5802e6181478920c"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "43abebb6f1e020e6b45bce6e77c57ceb"
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
    "revision": "35334bcac962a35511967c9f8cd3dfcf"
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
    "revision": "7452ac4c12a198c16becd3e5838451c2"
  },
  {
    "url": "tag/git/index.html",
    "revision": "515152dd7b75f39923bd64c88502c001"
  },
  {
    "url": "tag/index.html",
    "revision": "bc18697c2cb2d322bec533e93c15f384"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "d261aba93c657c6d1f0ed0ccdb41d444"
  },
  {
    "url": "tag/react/index.html",
    "revision": "4c380feb883affd39708f895c0b10d38"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "dd4c0a215db595b6d1d02c94d5d4590f"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "b6038cae3df5a0811c47dcf2bc728ae7"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "d7d0b0185674ce1d1af131b235fc1caf"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "d61c510cc8104b89c5bb67420399d2ff"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "d949759a453bee3d7ca99cf3efe6e726"
  },
  {
    "url": "tag/成长之路/index.html",
    "revision": "12169145cf59f3e02f8040a89564aa8b"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "9e9b615f738d5f9a23f38de4a7f4703d"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "c54b1ab5006f21b3f265572fc23d0b3d"
  },
  {
    "url": "timeline/index.html",
    "revision": "0b8127d5b1c7693225b4a4ddbfa3d169"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "d558e5ba510685078259eb116023bd96"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "5332c6cdffb9155ed4d68fd4331555d1"
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
