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
    "revision": "ddbf956503e351c7653c89e52192f31d"
  },
  {
    "url": "20200526/index.html",
    "revision": "b97109ef7d8432a4bbad1d6678b186d7"
  },
  {
    "url": "20200528/index.html",
    "revision": "b118e92c9e9454d930c431843b9691bd"
  },
  {
    "url": "20200529/index.html",
    "revision": "94fbd9ad207db79747dbce57c88805a8"
  },
  {
    "url": "20200601/index.html",
    "revision": "77501c831c6949d9ec7da43bf59ec2d7"
  },
  {
    "url": "20200602/index.html",
    "revision": "8d5304f0904d1c63b470e4b44abe7324"
  },
  {
    "url": "20200604/index.html",
    "revision": "fa94ae978a60d47ad4ac938a44b33212"
  },
  {
    "url": "20200612/index.html",
    "revision": "c33c5545d3d2ba445065fe23c1790a21"
  },
  {
    "url": "20200720/index.html",
    "revision": "dce263084c81914f2d61e99514328f6d"
  },
  {
    "url": "20200804/index.html",
    "revision": "a0bf13453166d0b8c507bc3513de4a6c"
  },
  {
    "url": "20200812/index.html",
    "revision": "050b5fa88adcb89c29f5c1d22e89a13b"
  },
  {
    "url": "20201013/index.html",
    "revision": "281a62c9f1f70617dfd27017e6e86ae9"
  },
  {
    "url": "20210112/index.html",
    "revision": "1be5178ea405fe991073e7f8a8f317cc"
  },
  {
    "url": "20210123/index.html",
    "revision": "87ae2c6b5e22f88262abf79920196005"
  },
  {
    "url": "20210129/index.html",
    "revision": "f50af4941413463f7210e7854f5dcfb9"
  },
  {
    "url": "20210327/index.html",
    "revision": "68b11fad126205542ba39d2926d4a458"
  },
  {
    "url": "20210502/index.html",
    "revision": "8b396d542ad091eb5a1cbf11449a659d"
  },
  {
    "url": "20210507_01/index.html",
    "revision": "1e986d2dccbfdbd95134f5351732bf50"
  },
  {
    "url": "20210507_02/index.html",
    "revision": "98ca08c446ed0fa10ea7a374c8957a2f"
  },
  {
    "url": "20210508/index.html",
    "revision": "8b631e17f1ec4d7b2665394d99d1ee00"
  },
  {
    "url": "20210510/index.html",
    "revision": "cc710caacb09697afabf7eb3861b7780"
  },
  {
    "url": "20210703/index.html",
    "revision": "04f0fe15b3846a7230fa58e43e68fda0"
  },
  {
    "url": "20210809/index.html",
    "revision": "1cf0ee1eda10a746e6366539ba260e49"
  },
  {
    "url": "20210901/index.html",
    "revision": "f8f90ea0b53aee69efbf77742c71b30d"
  },
  {
    "url": "20211124/index.html",
    "revision": "ca39c2f3331a5f94f7cf3801cd442d03"
  },
  {
    "url": "404.html",
    "revision": "4c8b366da52f67408c584c25c315f751"
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
    "url": "assets/js/10.26b3bfac.js",
    "revision": "5aa02ca2dd0fbc36d51fc6b407af765c"
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
    "url": "assets/js/16.410ca962.js",
    "revision": "5fac8ac7b4398fc5940f4fb3b2ff94d9"
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
    "url": "assets/js/30.602a730d.js",
    "revision": "7ba261c628228326a17648ca6d2f7711"
  },
  {
    "url": "assets/js/31.7e69df5d.js",
    "revision": "6eb24ea67bb30cf6e840a31d521a5810"
  },
  {
    "url": "assets/js/32.38843890.js",
    "revision": "93adec24b3089b45d168a8736ab40833"
  },
  {
    "url": "assets/js/33.77ac4cf7.js",
    "revision": "a44805c0a0f6d557563b383af9f01465"
  },
  {
    "url": "assets/js/34.4180ed08.js",
    "revision": "fc51a2f38252c2e265f0ab951861ce66"
  },
  {
    "url": "assets/js/35.a55b3ea6.js",
    "revision": "a20d5ca0bf18066d533df643a544e337"
  },
  {
    "url": "assets/js/36.2d2901cc.js",
    "revision": "3e12879587fa0e52ae7d576ff9ba0205"
  },
  {
    "url": "assets/js/37.26a088b6.js",
    "revision": "c27cc6cb241d4b5bbfa29805706fdfae"
  },
  {
    "url": "assets/js/38.92feb45f.js",
    "revision": "9205fa8058419d8de376ce03ecb445d1"
  },
  {
    "url": "assets/js/39.29b2412b.js",
    "revision": "88c28f5c4bf1330e8de872e5294fdea9"
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
    "url": "assets/js/app.6a5ee54d.js",
    "revision": "98617fe8b2fe5340e63a1e05ab463104"
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
    "revision": "f5360e35f88e1749585c666a56aba1bd"
  },
  {
    "url": "categories/css/index.html",
    "revision": "99ce38526378cb3d02caf36157a923f5"
  },
  {
    "url": "categories/git/index.html",
    "revision": "702838a037125ae93e255f8557d35187"
  },
  {
    "url": "categories/index.html",
    "revision": "98ac58f9d8022c153e19a1fbb0cdce2a"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "5ed03c8fd5b09206c931ee95657b4e34"
  },
  {
    "url": "categories/react/index.html",
    "revision": "6d0b90b70e986d63ca93e4b948366ddf"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "ded495e274b8e6e10853d30f90de7a56"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "fd575a63867b960a4289029e276d451f"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "24c110d52830f06a601b7a82dc56f354"
  },
  {
    "url": "categories/成长之路/index.html",
    "revision": "fc6f81ad95cae5ec87bd603995c8785b"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "1b7bc721b166ebb7372c5c605db9c593"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "9ed255af7976f0f42647b19c8c343a53"
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
    "revision": "3d58301ea318cb81d9923a056f923fd6"
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
    "revision": "eaf266987dd6fd6841d13b0d5ea0671d"
  },
  {
    "url": "tag/git/index.html",
    "revision": "1b93847d0d3163cf083321e21a9d0ab1"
  },
  {
    "url": "tag/index.html",
    "revision": "82c0ffeff62a35e38be07daefb67b04f"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "19a486915eea78e36efcc02763a67f53"
  },
  {
    "url": "tag/react/index.html",
    "revision": "46fa1ff25a76293e667a685a2e94b626"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "4c365a4af3e8b6d3081798b0754df6f1"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "0e29cddf9a6e6b2c77f116839c2877ef"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "555bf5be80689d9298bb7433a5776da9"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "325a5bbc7aa7a4f333d5cab46c96e00d"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "7b96ec97308007bd81cb9b0178bd23e1"
  },
  {
    "url": "tag/成长之路/index.html",
    "revision": "b502dc3bc7197c3c810e092e5835f6b7"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "2f23330f2399dcae43c7c19e8cc0eb10"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "f0b16cb608b9448309a4f05566154233"
  },
  {
    "url": "timeline/index.html",
    "revision": "6babb09cd9c7d7b2d6d1b03931ac0c38"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "b23a492d9d6ed270e150d5e692068c2b"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "e6eb1b4d04bc4818848ac0627fa0a88e"
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
