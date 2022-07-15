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
    "revision": "b57f46e0f3615f12267165e20c173fee"
  },
  {
    "url": "20200526/index.html",
    "revision": "ba6595aac44c5640d7fa591ebe03b0f3"
  },
  {
    "url": "20200528/index.html",
    "revision": "b6e4aa7ba8523fa0e277329c658a8d86"
  },
  {
    "url": "20200529/index.html",
    "revision": "0decd318a5f621e0b6afc6be42ed3478"
  },
  {
    "url": "20200601/index.html",
    "revision": "3dcd7b76d3190024c914cb9d2306bc39"
  },
  {
    "url": "20200602/index.html",
    "revision": "94c9c218ffd937617ab42e5d006d919e"
  },
  {
    "url": "20200604/index.html",
    "revision": "ad732cd8087e5cdc45ad6fc3c4bde23d"
  },
  {
    "url": "20200612/index.html",
    "revision": "d3b866c970736f72b367257bf6b30825"
  },
  {
    "url": "20200720/index.html",
    "revision": "d4387deadc54d5f3444fc0215fb55a9c"
  },
  {
    "url": "20200804/index.html",
    "revision": "9d55c3227be701c896a96f1d1819874e"
  },
  {
    "url": "20200812/index.html",
    "revision": "5e5d8a6c36f39ecd56836ad47e86c84e"
  },
  {
    "url": "20201013/index.html",
    "revision": "74f0a6d14d758e95e0b11c2018239c08"
  },
  {
    "url": "20210112/index.html",
    "revision": "13ea23ba3e262056fe0413184f6f8aea"
  },
  {
    "url": "20210123/index.html",
    "revision": "93471f125ae609612ee60cd32ce5fd29"
  },
  {
    "url": "20210129/index.html",
    "revision": "fe1440dee040a6c373e7545679fe0abf"
  },
  {
    "url": "20210327/index.html",
    "revision": "1246e4dd1fb06bae945664eeff2966b2"
  },
  {
    "url": "20210502/index.html",
    "revision": "12d091dd622e2ac105083191b9dadaad"
  },
  {
    "url": "20210507_01/index.html",
    "revision": "a960c18b6522f6188967694bbda7297c"
  },
  {
    "url": "20210507_02/index.html",
    "revision": "8b49dda76a2c599c7fc16edd8ccf3797"
  },
  {
    "url": "20210508/index.html",
    "revision": "1d4ced5e5cf8e33c68a78787cca197f6"
  },
  {
    "url": "20210510/index.html",
    "revision": "2f79d3cb72c67b98bb2f8dbd6f12e8fd"
  },
  {
    "url": "20210703/index.html",
    "revision": "c2778bf9fbb965da92b15134a44b63d7"
  },
  {
    "url": "20210809/index.html",
    "revision": "a88a9267057a20f79a8c7f90a4f30204"
  },
  {
    "url": "20210901/index.html",
    "revision": "d68c32ec8cd00c076977ede8c61a4ce2"
  },
  {
    "url": "20211124/index.html",
    "revision": "0e5dc4bbc730411126db2b5bf5f64c08"
  },
  {
    "url": "20211210/index.html",
    "revision": "0ff4b6c7a9ae3d7ac6864cba1ad78932"
  },
  {
    "url": "20220212/index.html",
    "revision": "4d783f7f89f37c4c1a7cc3c0cebd0b1a"
  },
  {
    "url": "20220513/index.html",
    "revision": "7eaf488ad89ea3ace8d7e5bfcc6af042"
  },
  {
    "url": "20220530/index.html",
    "revision": "1d3dbbd6e5fe5b1950812ba605854eb0"
  },
  {
    "url": "20220704/index.html",
    "revision": "ea01936f31f55c4adb2619830dd21b0f"
  },
  {
    "url": "404.html",
    "revision": "4b38ff174676b231ae23bdc9fc777561"
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
    "url": "assets/js/11.07594fc3.js",
    "revision": "fba4932a4f68b8b6a99608dba7867ad2"
  },
  {
    "url": "assets/js/12.8ea7b09a.js",
    "revision": "21fe26bdbedd081f7c9bf7ba174d927d"
  },
  {
    "url": "assets/js/13.f3906a6a.js",
    "revision": "7c326d5c1df995d322c265f058b4a6ec"
  },
  {
    "url": "assets/js/14.74706196.js",
    "revision": "777d6efbf9d7efd5a7e0e2d97f577f6f"
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
    "url": "assets/js/30.794f8aff.js",
    "revision": "45ae6db1869abf2c379b7c6e1cf33b0e"
  },
  {
    "url": "assets/js/31.a3a8c745.js",
    "revision": "e04cbe757cfaecca4b5921073c59ce75"
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
    "url": "assets/js/39.a535bac7.js",
    "revision": "000dfb21ce95a4ad7ea1d7ddac3bc9a0"
  },
  {
    "url": "assets/js/4.d0f4a55d.js",
    "revision": "08de63f91865dc542434ded9704e1ed9"
  },
  {
    "url": "assets/js/40.cd98e32c.js",
    "revision": "9cda0a7002edac88a2ddf37dfc44f112"
  },
  {
    "url": "assets/js/41.f0cdadcc.js",
    "revision": "4b947153e993c5208a3120afe9d0b7c5"
  },
  {
    "url": "assets/js/42.bf0cab6d.js",
    "revision": "e80c6d76341107b8d7061b00e8a806f8"
  },
  {
    "url": "assets/js/43.dfc70b4f.js",
    "revision": "ff859c11039546af8ed4c44672ce87a6"
  },
  {
    "url": "assets/js/44.5f5fb248.js",
    "revision": "a9d3f2a964c8a68a7f91de833b2e56fc"
  },
  {
    "url": "assets/js/45.d46f4abc.js",
    "revision": "6bd29d3ba3ed18c5cebbebde12dfe477"
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
    "url": "assets/js/app.2c6242ed.js",
    "revision": "97a9816e5d65085362c78c8ac65481ff"
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
    "revision": "da58251ae17b20b3c3adf4c370535a55"
  },
  {
    "url": "categories/css/index.html",
    "revision": "b8210b92f23d3ce922ea9ce6ac4d7458"
  },
  {
    "url": "categories/git/index.html",
    "revision": "2aa9cda6dbde8681935a4a24f6600843"
  },
  {
    "url": "categories/index.html",
    "revision": "13001ef9fd3c86e8eef30e3ddca7fec6"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "269be16057939da3755a942d69473600"
  },
  {
    "url": "categories/react/index.html",
    "revision": "8d61c530ac278a0e8a2949cdacc0375d"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "2af0a0b6ae5cf41ed418b568fde2753b"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "9ff01656922422c5d941662d859b2b99"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "a34d3c5214367bb212cda30c76b8d16e"
  },
  {
    "url": "categories/成长之路/index.html",
    "revision": "b397ce9c7e44558315711536913ff04f"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "1777fa9f06f80522930197473868d093"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "e679ba649732fd01e7753b12b4c184a9"
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
    "revision": "6350fed015404881cdd808e8bbd92fd9"
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
    "revision": "44d6608f1938eb46d35520b7b6c15f21"
  },
  {
    "url": "tag/git/index.html",
    "revision": "d75ad60aa38e9357ef5569e0ff24a994"
  },
  {
    "url": "tag/index.html",
    "revision": "bb52db7ca1b3fd8053991aff79942d35"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "75397e6788f3ddcebcffdb542c20cbc0"
  },
  {
    "url": "tag/react/index.html",
    "revision": "0dd4c8fabdd6708d9e39e0cc712c83ea"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "10b64ad3f58cb94f21982a35e0db416b"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "cb68fcdb0b764a0aaf47ffc874cee3d8"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "5dced8d6982ff252b3d5d9c1f277382a"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "b5027ee444f47664e141d01d8cb1dcc1"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "aa863094c827b2f45ad40eeae2551b91"
  },
  {
    "url": "tag/成长之路/index.html",
    "revision": "d90266c30e39adc06aa6487b735bdb40"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "8ccb48ebea9e2f259696e6df83fa1cab"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "98444217c273004e34a4f607416028d0"
  },
  {
    "url": "timeline/index.html",
    "revision": "b3e2616b1d39692298835fc5562d0096"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "2c96d806b90b8959ed8e8faa03e25707"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "ce404462ea582645934e40a7fe8f4dfb"
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
