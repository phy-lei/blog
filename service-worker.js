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
    "revision": "8073f9a865e20ffc1bdadfa2c3f925cb"
  },
  {
    "url": "20200526/index.html",
    "revision": "5b9446cfe402258db50f8184ae11a420"
  },
  {
    "url": "20200528/index.html",
    "revision": "26b3e1c403b08db6f7082fc756cbaf47"
  },
  {
    "url": "20200529/index.html",
    "revision": "a5672e405a1b3fb8420a7760505db73f"
  },
  {
    "url": "20200601/index.html",
    "revision": "ef2ad8cc9836a7af6b8aa3d37d990fdc"
  },
  {
    "url": "20200602/index.html",
    "revision": "91f355fb79c1e0d9a9607a61628b7f9b"
  },
  {
    "url": "20200604/index.html",
    "revision": "36e6916dc3a0f0abe934ad858d7b4328"
  },
  {
    "url": "20200612/index.html",
    "revision": "fd8dd63c1439c736b77784b687afa648"
  },
  {
    "url": "20200720/index.html",
    "revision": "ec44bbb24cad88f840d7a40694d95ede"
  },
  {
    "url": "20200804/index.html",
    "revision": "6b23e0649e40d91398f26ba9885d5940"
  },
  {
    "url": "20200812/index.html",
    "revision": "766f200c30c2857db8ede165f7146747"
  },
  {
    "url": "20201013/index.html",
    "revision": "2e84c9a0ea7b47f69c879a23b9039314"
  },
  {
    "url": "20210112/index.html",
    "revision": "2a952fdef583d1718d9bf8b233c1d566"
  },
  {
    "url": "20210123/index.html",
    "revision": "d0eee73765996e554f2384559f681625"
  },
  {
    "url": "20210129/index.html",
    "revision": "c8aaf3a9ca3ae75282c4a65e509b80a1"
  },
  {
    "url": "20210327/index.html",
    "revision": "24e6b3b71dad75b7a1446099bc46ce99"
  },
  {
    "url": "20210502/index.html",
    "revision": "0c70936de0101139ad84f2caebdc4c53"
  },
  {
    "url": "20210507_01/index.html",
    "revision": "b3d2916a477af0c7f06526991f34bab2"
  },
  {
    "url": "20210507_02/index.html",
    "revision": "397c4d249831afbc357702333252cf0e"
  },
  {
    "url": "404.html",
    "revision": "6013b9452fe791bdbecfe36f8a5c8b1c"
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
    "url": "assets/js/10.29753d55.js",
    "revision": "1613216d92e9dfbd996183040ebfcf71"
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
    "url": "assets/js/27.cb16278f.js",
    "revision": "c3ea246d58db43271f64af93ead862ac"
  },
  {
    "url": "assets/js/28.959a3378.js",
    "revision": "9b82d3d89fc415d94920b3579464136c"
  },
  {
    "url": "assets/js/29.fa918659.js",
    "revision": "f798f2d55d32701f39c37b46acb634a1"
  },
  {
    "url": "assets/js/3.85657320.js",
    "revision": "ded4e694ba473251ad0f154cb76e213e"
  },
  {
    "url": "assets/js/30.edf564d8.js",
    "revision": "8da582892f9b9e3514b7c4a86828df28"
  },
  {
    "url": "assets/js/31.668a2196.js",
    "revision": "09bf23f3029041a74308dba6d8047c66"
  },
  {
    "url": "assets/js/32.d2163710.js",
    "revision": "7c299fe2e9b1f5bf2e11c552eae7cbd3"
  },
  {
    "url": "assets/js/33.f6d7a150.js",
    "revision": "0dee00c4b4f86eaeff92f4ead4ca5349"
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
    "url": "assets/js/app.cf6fea99.js",
    "revision": "5cdee5f157a086116508ea8353ba216d"
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
    "revision": "654ccbbebeb8aaaf0642b330197ac81d"
  },
  {
    "url": "categories/css/index.html",
    "revision": "05ba950022338b701a15fc1cf7cc4559"
  },
  {
    "url": "categories/index.html",
    "revision": "97fac1b04781758d73664c615b57cc71"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "40a2bebcd81f0e031475d06533bd91b9"
  },
  {
    "url": "categories/react/index.html",
    "revision": "2c4161ec0b87c9909fba72a22acb48be"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "cb09dde0155f1602167a506157f63ffb"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "ee96321692fe13034d8b8ff82cb32cb8"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "15fcf51558485bc28c58053e10c78cc9"
  },
  {
    "url": "categories/成长之路/index.html",
    "revision": "1f678717c5a0acfae32ccdd387fe2147"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "6f54735a6e4b72824fdd7fd310a93d77"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "9f653f1fe0a62cbb4ca7fdd261ad958d"
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
    "revision": "9f989e5e73d15b790fa8bbff3d3846af"
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
    "revision": "d39a25ef3a232407a30b347a480650c3"
  },
  {
    "url": "tag/index.html",
    "revision": "247554a33ebee71f7d8d6509c1d66de8"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "d17e05654f1f797be202c2cd73c02632"
  },
  {
    "url": "tag/react/index.html",
    "revision": "8ed90d08920f0440442e6d186b2cd168"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "75c06850f88a52977171ef505902edbf"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "b377f253dbf3a67f1dc4791cccceb919"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "e2603596c0646c7bf13cdcdcd34c094e"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "fc715551fbeaa47364bb2ddc13a90e07"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "faeb318f7858276bb7087c2ce994d7fa"
  },
  {
    "url": "tag/成长之路/index.html",
    "revision": "65adf1172af1a7b2f1f95165687176dd"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "ef77c69e0c9fbf2a8919369f469f2396"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "bde71dec24f625d3d9d656c239278c6d"
  },
  {
    "url": "timeline/index.html",
    "revision": "3490559d7d2520fff60495adca6c505d"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "6007eb4d565441eb57057f28860b5b66"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "6e5ae452f576c281333bca98e714da88"
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
