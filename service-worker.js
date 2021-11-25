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
    "revision": "f78bf61545d2b132ab6bb6c786f4ea12"
  },
  {
    "url": "20200526/index.html",
    "revision": "bf5288c04e92815c944a17ce73c80cde"
  },
  {
    "url": "20200528/index.html",
    "revision": "17177affe4107526339af2a1c871d6f1"
  },
  {
    "url": "20200529/index.html",
    "revision": "0e8c912eb6e6e8639e5fd831b3486ddf"
  },
  {
    "url": "20200601/index.html",
    "revision": "0ae8ab5f545670f5edbf9d7b0c2b53a8"
  },
  {
    "url": "20200602/index.html",
    "revision": "0d0e00701ec2fa6b78b444f5f6be85e2"
  },
  {
    "url": "20200604/index.html",
    "revision": "44f643656d27029cccb34e26ee12280a"
  },
  {
    "url": "20200612/index.html",
    "revision": "ea1890b337097af2cbd894d2fe83ead8"
  },
  {
    "url": "20200720/index.html",
    "revision": "e91da90ec57211692e6f041b67d0d502"
  },
  {
    "url": "20200804/index.html",
    "revision": "87c2d894d69f7d1f67a24670272ef010"
  },
  {
    "url": "20200812/index.html",
    "revision": "4568f9783dacc4d771fa10a84cac6e5a"
  },
  {
    "url": "20201013/index.html",
    "revision": "e247d34593d79ef0416c705bfb812c72"
  },
  {
    "url": "20210112/index.html",
    "revision": "5cbf9d59f2bf5109387b8a405171e9d9"
  },
  {
    "url": "20210123/index.html",
    "revision": "d3d5b8dc71908c0396df801808640a12"
  },
  {
    "url": "20210129/index.html",
    "revision": "c599e3e80f4bfe1f4d0c49b15cde647f"
  },
  {
    "url": "20210327/index.html",
    "revision": "2f08b3127a5bf000c70d20f29478cf35"
  },
  {
    "url": "20210502/index.html",
    "revision": "701e85e69543eb906116956a2d399f5b"
  },
  {
    "url": "20210507_01/index.html",
    "revision": "4f9a753c7a9fc43a825802b5ee803d9f"
  },
  {
    "url": "20210507_02/index.html",
    "revision": "0560c48be9f5c052ced8bd5456565ada"
  },
  {
    "url": "20210508/index.html",
    "revision": "ac3f533f9869e6f50cd621dbfeff6a3e"
  },
  {
    "url": "20210510/index.html",
    "revision": "fd97d4ae22f69aecf0746c548fe8bee0"
  },
  {
    "url": "20210703/index.html",
    "revision": "65ec0a4c71ba3389f7a13e6d755715a3"
  },
  {
    "url": "20210809/index.html",
    "revision": "4fde47ea2cc3c0714d0789915d8ebf74"
  },
  {
    "url": "20210901/index.html",
    "revision": "6fbedd43353163e1d3ee1be02433df6f"
  },
  {
    "url": "20211124/index.html",
    "revision": "2d168f95d25f710d42bc50fa24e7301c"
  },
  {
    "url": "404.html",
    "revision": "49e7d7c2c78df690bee496a87147bdcd"
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
    "url": "assets/js/30.a4f4253c.js",
    "revision": "cd8a3ad8d9679b397b32d55798153a08"
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
    "url": "assets/js/app.555ee38c.js",
    "revision": "c7db2d6bc94719841e653a24deef97c8"
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
    "revision": "251c7e2458401f67b5217c6d18eac940"
  },
  {
    "url": "categories/css/index.html",
    "revision": "fee4954b90876ceca53ebf8d68a358ea"
  },
  {
    "url": "categories/git/index.html",
    "revision": "6487f10b7a6092cb57431b53009a75f2"
  },
  {
    "url": "categories/index.html",
    "revision": "c478270bb8f8b2029c99554c4b3cb72b"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "cc8ee8ca73304808d233e45db746ce49"
  },
  {
    "url": "categories/react/index.html",
    "revision": "1a00e506cc637f11d627591559043e72"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "2fe798156b28ce99edfc2566cfcd8dc4"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "d1ca1be5fff82b471844ebf373195f21"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "06d18a48f304404b41a7906908759665"
  },
  {
    "url": "categories/成长之路/index.html",
    "revision": "1ff94717dd60eff4b4b1d9b56f179fa2"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "6fdd0270bac0837d4a64c8c21c548b29"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "2cbe225942482eb60f6a1dd876a8fef7"
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
    "revision": "4602b05f5ac787d21c27387a2a66c9e3"
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
    "revision": "2119efd6dea619699dbc6fa837977169"
  },
  {
    "url": "tag/git/index.html",
    "revision": "bbfc2ee269ad15abc7417b23be71bc46"
  },
  {
    "url": "tag/index.html",
    "revision": "69b7d6ee79b41dfaf1641417493985cd"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "7e817e67894dc3fcf3d6282b7c0a2dc4"
  },
  {
    "url": "tag/react/index.html",
    "revision": "34b7c5d0dcf2b4f4f8201c39fefe5eed"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "b4df88b3bd4c407eaaca5721f546502b"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "5d0b942ef8c1416947da364fc9343df1"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "9c67fa0e0b9bd5c37f5d01d9f8debf65"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "228ea8b20998cfe73fd2900bee385bfb"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "b2e302919cacbe1f12151adc575dcd05"
  },
  {
    "url": "tag/成长之路/index.html",
    "revision": "75df6871b04eb1a25bf6d9f23a13d226"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "03057bbf828f1676945f83f8dbcfc8ce"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "d7f7bc9521e6e5651c873daf2ebbd84b"
  },
  {
    "url": "timeline/index.html",
    "revision": "72316925756a28dc43be96cc677071e5"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "3d3d0475b62db6bd947d378ea3415f3c"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "33473cd83654beb6dac65c52ba6a22bf"
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
