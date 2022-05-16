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
    "revision": "2b59c8f4187628d0ad2085c30b72ba11"
  },
  {
    "url": "20200526/index.html",
    "revision": "2134563dafc28f4d8763ddafa40ac216"
  },
  {
    "url": "20200528/index.html",
    "revision": "ed2459ed7a07cff8b20316e2a22546ad"
  },
  {
    "url": "20200529/index.html",
    "revision": "37d3c3ffa879fe66d83e9309a40bd46d"
  },
  {
    "url": "20200601/index.html",
    "revision": "a0859db4fe97f96d89b6669643cdccae"
  },
  {
    "url": "20200602/index.html",
    "revision": "bc3837a1db2fa4a2192dbcae7fd8ca50"
  },
  {
    "url": "20200604/index.html",
    "revision": "b32097a2bd4bc541eeb8451b02f01a84"
  },
  {
    "url": "20200612/index.html",
    "revision": "d1a99183119791cb89849dc934fece1d"
  },
  {
    "url": "20200720/index.html",
    "revision": "1a4ff63ce3978b720a3f0fb6c3afc87e"
  },
  {
    "url": "20200804/index.html",
    "revision": "bb3a31182b2792270ad0ffa0450ef6b4"
  },
  {
    "url": "20200812/index.html",
    "revision": "5f5c51a3a8b7938dc007430c4a7f911e"
  },
  {
    "url": "20201013/index.html",
    "revision": "0f6b793ed3c23b8a35ff6e8abc8afc70"
  },
  {
    "url": "20210112/index.html",
    "revision": "f60965e8d6ee60cffda76f5d63bf3bbc"
  },
  {
    "url": "20210123/index.html",
    "revision": "17ef00a43f5ed2b811972f53c222d536"
  },
  {
    "url": "20210129/index.html",
    "revision": "c89532c62ebbe53f654090494885103e"
  },
  {
    "url": "20210327/index.html",
    "revision": "9588ddbc2e1dde4bf38d5e7a2873ede5"
  },
  {
    "url": "20210502/index.html",
    "revision": "6e690ddd8d4bd52e67f1445677aefd03"
  },
  {
    "url": "20210507_01/index.html",
    "revision": "7fcf3b7bbe3aab70fc14712bd89a72a7"
  },
  {
    "url": "20210507_02/index.html",
    "revision": "3e3258a1be3a6b342204d017c02d3393"
  },
  {
    "url": "20210508/index.html",
    "revision": "cf9d8ceb0f7ce66e58aa216fa27fc790"
  },
  {
    "url": "20210510/index.html",
    "revision": "5f10a9319a177f9ae1e216f0d9663095"
  },
  {
    "url": "20210703/index.html",
    "revision": "75b41ad48c97e215fc3d1aa976fe93aa"
  },
  {
    "url": "20210809/index.html",
    "revision": "e74ff7e42f728c884ca197c997db8724"
  },
  {
    "url": "20210901/index.html",
    "revision": "0b13b0634f43a3bcebebd210aefbd2ee"
  },
  {
    "url": "20211124/index.html",
    "revision": "9d3363a5a35b66ecb58d966d7d157aa2"
  },
  {
    "url": "20211210/index.html",
    "revision": "e10155b9d15bad5c45062eecdbf5afeb"
  },
  {
    "url": "20220212/index.html",
    "revision": "8633c56d315913ab3e7cfe501e3762bb"
  },
  {
    "url": "20220513/index.html",
    "revision": "bd19b2062563eb5199c2e67f8ad2dde5"
  },
  {
    "url": "404.html",
    "revision": "10349a20ed2cd86727b0994eae06aa0a"
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
    "url": "assets/js/11.838498a3.js",
    "revision": "47def22d65f4621417f47cbf9cb62daa"
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
    "url": "assets/js/18.1e300c14.js",
    "revision": "2bc56db72e7c12b8be2760c0725680ba"
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
    "url": "assets/js/25.17d0829f.js",
    "revision": "805a9990d29ba785350e765dd040759e"
  },
  {
    "url": "assets/js/26.00f79d04.js",
    "revision": "d727620e7b29fdf3658e4cc0e34f57c4"
  },
  {
    "url": "assets/js/27.3c2cd72b.js",
    "revision": "23414f9c1b2553127bb7e3f6f6423169"
  },
  {
    "url": "assets/js/28.d12ee78d.js",
    "revision": "0c7110f91a00e0d50a575d32cc1fe209"
  },
  {
    "url": "assets/js/29.1ccaeead.js",
    "revision": "adc3d0473cca9ccf18f00ff5713cc8b6"
  },
  {
    "url": "assets/js/3.1d0553cb.js",
    "revision": "c6d4a584de35a41b06fef400f1d3c4d3"
  },
  {
    "url": "assets/js/30.945909c3.js",
    "revision": "51417d8a0f3295dd472ff482e455615e"
  },
  {
    "url": "assets/js/31.9d5759ae.js",
    "revision": "813951e74a163e10420f72195e26895a"
  },
  {
    "url": "assets/js/32.c33fca81.js",
    "revision": "9943060f614e371d294009fcc4b642f5"
  },
  {
    "url": "assets/js/33.9a54cf5f.js",
    "revision": "a9a3ea862c01539f804442e1f4cad4f0"
  },
  {
    "url": "assets/js/34.44971813.js",
    "revision": "a9e551a0351c5e481d30f124dfb45152"
  },
  {
    "url": "assets/js/35.c438492d.js",
    "revision": "3d4ff3314258d5ba16ff71edafd83dad"
  },
  {
    "url": "assets/js/36.470085c2.js",
    "revision": "6c824cf3978498c67e8f60b62708e34d"
  },
  {
    "url": "assets/js/37.c444fb4e.js",
    "revision": "fce71c8053ba9b8683f64ef0966b049e"
  },
  {
    "url": "assets/js/38.37d2ebc8.js",
    "revision": "74892e0ece4956c73725c5b6908d7250"
  },
  {
    "url": "assets/js/39.57432211.js",
    "revision": "f4439d0d5b7560ab7c49f6ab57ab4cc9"
  },
  {
    "url": "assets/js/4.d0f4a55d.js",
    "revision": "08de63f91865dc542434ded9704e1ed9"
  },
  {
    "url": "assets/js/40.96e5af2f.js",
    "revision": "354be06d3ed76eeee23a72167e01f83c"
  },
  {
    "url": "assets/js/41.dd20e5b4.js",
    "revision": "3fb74e13d7ddb6f8c9e0dcade6bd9a5b"
  },
  {
    "url": "assets/js/42.59cc3afd.js",
    "revision": "8c632c76749d8b3b13a56d91b3b41707"
  },
  {
    "url": "assets/js/43.73a68a92.js",
    "revision": "aa37ed1692d1ef118776f412436f8890"
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
    "url": "assets/js/app.5ee9c75d.js",
    "revision": "769a234307926ba23511a7fb82d8e157"
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
    "revision": "d3961fe963ce3f9eaf7315fdd54c2c49"
  },
  {
    "url": "categories/css/index.html",
    "revision": "846e53fb2aca46198b2c78d84fcd507c"
  },
  {
    "url": "categories/git/index.html",
    "revision": "d5d9200b89b1f4eee720146325f6723b"
  },
  {
    "url": "categories/index.html",
    "revision": "618e9b349ff990c5b2778b3fd14cb570"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "b2dbd2c4d70efc347df215d3960552db"
  },
  {
    "url": "categories/react/index.html",
    "revision": "c87228ee4b36dda4fec537ca6168adcf"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "287c53a1c2f8170ac2fb6eb0a1340c8c"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "ebc6244cf32a7ac080c1b980f4c3b543"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "67197f06085756188a1d496eff2f98f1"
  },
  {
    "url": "categories/成长之路/index.html",
    "revision": "a343b965ca080345408ebdc40886835f"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "b06b8daf122c70d73d5b1802d28b0be4"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "2e376603db90f34abe20e2f33dd26030"
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
    "revision": "41780ae85a0452e9bcca4332190809c0"
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
    "revision": "9ea2c99e58ef42473f3602c428269872"
  },
  {
    "url": "tag/git/index.html",
    "revision": "e5417871a04f76b53833c1f65129eada"
  },
  {
    "url": "tag/index.html",
    "revision": "5c5f056226291ed7d2a568b644885779"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "62aaf025fd5e7a4412cf00e422c738e8"
  },
  {
    "url": "tag/react/index.html",
    "revision": "c0d0173ee7552a1dd70ae6e05a31876b"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "d16ffabb5722dc14dae7fc4a1d98cb10"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "49a643167527c30895f0265956f1dce8"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "ce6b51f33a4db6fe0318bcdfde3cb74d"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "2b022d0d443706b887773b13f8c7a1d1"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "4592c73c7ca22917487840952cdedcfc"
  },
  {
    "url": "tag/成长之路/index.html",
    "revision": "86b0a45d503c1ac28f4671b939e9933f"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "30c745bfc15a2cceae229bc71f606935"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "67e9014917d431c72403d0864d56ce28"
  },
  {
    "url": "timeline/index.html",
    "revision": "7710d602349e4a25ae14e3dcee739e9b"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "97b0aef0188ae3f97e6f23c811f0be1f"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "b1d92162850ac3f9a47dbfbd8b74648b"
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
