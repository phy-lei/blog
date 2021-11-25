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
    "revision": "bae9df4fa39501f4c00ee987c52a8c62"
  },
  {
    "url": "20200526/index.html",
    "revision": "d8a8a4eec670e54e70f31cc2234cb2d9"
  },
  {
    "url": "20200528/index.html",
    "revision": "965243286c0505697c30368195842221"
  },
  {
    "url": "20200529/index.html",
    "revision": "dcfc72ecf9883348020fd2be83d26cdb"
  },
  {
    "url": "20200601/index.html",
    "revision": "1a58eb32d10543f02bf1384e12109b47"
  },
  {
    "url": "20200602/index.html",
    "revision": "14f460287da92fd6ae5f447bde94f96a"
  },
  {
    "url": "20200604/index.html",
    "revision": "ab77a16e901cb0ca36718dc63b03a9be"
  },
  {
    "url": "20200612/index.html",
    "revision": "b484d3e5eb858921c1d6b1cde101e225"
  },
  {
    "url": "20200720/index.html",
    "revision": "ebe6d8aaebd6bc801acc517906a693be"
  },
  {
    "url": "20200804/index.html",
    "revision": "0208efdd60c5b7eb7a59028d910540d2"
  },
  {
    "url": "20200812/index.html",
    "revision": "cbc9802c50096465379d39da49887cff"
  },
  {
    "url": "20201013/index.html",
    "revision": "c2988a1e41a230c0d52f9df91a332d72"
  },
  {
    "url": "20210112/index.html",
    "revision": "4a44abc0c19428b2c7fed83a384a12ac"
  },
  {
    "url": "20210123/index.html",
    "revision": "cfd097e618a0d8fbd0fbffaa8dc092ef"
  },
  {
    "url": "20210129/index.html",
    "revision": "6069e9c3f66f4037082679db540f1ff2"
  },
  {
    "url": "20210327/index.html",
    "revision": "7c0d035ccafdf0448efe933ec9f50c3f"
  },
  {
    "url": "20210502/index.html",
    "revision": "c00b8d134c254d35eee50f5eb0d8c0c7"
  },
  {
    "url": "20210507_01/index.html",
    "revision": "7660d719012c5f0313fc923a9b2eef7d"
  },
  {
    "url": "20210507_02/index.html",
    "revision": "988e7f6849e0f7b0a74bf6e45a7226c9"
  },
  {
    "url": "20210508/index.html",
    "revision": "37ca83bd8e9c73969742d6876927f4cd"
  },
  {
    "url": "20210510/index.html",
    "revision": "21ac06e70980fb9313d200e1cec390a8"
  },
  {
    "url": "20210703/index.html",
    "revision": "f38fe9369597989611cad81d4c771428"
  },
  {
    "url": "20210809/index.html",
    "revision": "ea11b5e9e40fbf47e62f468bc646756f"
  },
  {
    "url": "20210901/index.html",
    "revision": "5e0b3e32defb1d98690d480b1ed477e1"
  },
  {
    "url": "20211124/index.html",
    "revision": "0b879897af52aba9376d72a5fedb190d"
  },
  {
    "url": "404.html",
    "revision": "5c63c54fdf1490de65d39305a7666c71"
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
    "url": "assets/js/30.a90b3543.js",
    "revision": "b8a2d5210351c83dff6a5b031c6b7b35"
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
    "url": "assets/js/app.47c45180.js",
    "revision": "bdac6a390741d2f491cb23baff5bce93"
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
    "revision": "877a974d823f25daa74e0343cab0caaa"
  },
  {
    "url": "categories/css/index.html",
    "revision": "8c3bbe14826a2638aa7bf031811ff127"
  },
  {
    "url": "categories/git/index.html",
    "revision": "d49b0aa18e424a1d087089f883032b65"
  },
  {
    "url": "categories/index.html",
    "revision": "1814e507607988ff094e6c6c42c36a40"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "af647b221338ba2aa6429b86adac88c2"
  },
  {
    "url": "categories/react/index.html",
    "revision": "cadf3cd1dbe3411317bd423cf2b26933"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "7b1b1014e7ff7a7ec13ec6a004fa627f"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "9bd7afeb202217c1cdae56ab66a2a183"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "823b1b2163c79910b726a6012aad3f69"
  },
  {
    "url": "categories/成长之路/index.html",
    "revision": "083b6cc83d3712220a6ce300089199b2"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "a543bb68f14d6e4ff26b4129e77a51d2"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "f8db825bf63d1735b8f4e740f6744995"
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
    "revision": "e51a66e695ee3ae555e6613981c68004"
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
    "revision": "118e2620a960c699e4b191ff27726128"
  },
  {
    "url": "tag/git/index.html",
    "revision": "d9a6a6e2e0356ebea02c3c140534c4c1"
  },
  {
    "url": "tag/index.html",
    "revision": "ba997beda5693fb6642253c45eeab805"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "53a8d491b4de0fe1f742e14a5192a1ba"
  },
  {
    "url": "tag/react/index.html",
    "revision": "c262193766ed3194ba5976af22ee13a6"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "0aa498cda0380cf5d62c0c5e0dcd96b6"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "c1672e670a234da98dea3d0693739237"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "58de34d9fb17d4f77fe4f6c06df382e4"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "d64b7fb90eb8d2ae50fb23365979fed2"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "1829121326bd14ce31a075db3cf2078e"
  },
  {
    "url": "tag/成长之路/index.html",
    "revision": "ff103ff457bbaefd97d19ba9645fbb65"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "47288a61347084ae42c2a99e6e16e2e9"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "ba02a8dafc1ee08c379e6edd8e639914"
  },
  {
    "url": "timeline/index.html",
    "revision": "b782c8b09f2d9b20a16410eb6c6c7829"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "728ef19d3d71f34052d4f9e24a685cd5"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "d0a9fbcada5da9f125750ecce138fb18"
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
