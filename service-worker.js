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
    "revision": "d5413d581ac32dc35f952e0a93b3a7ce"
  },
  {
    "url": "20200526/index.html",
    "revision": "cb16ada9653c3a2f8d32ab041be2a3ea"
  },
  {
    "url": "20200528/index.html",
    "revision": "3a547b2c0674a594047c2c4e8429357c"
  },
  {
    "url": "20200529/index.html",
    "revision": "fa3b0748b0f884e19fde78b24f47b610"
  },
  {
    "url": "20200601/index.html",
    "revision": "b40ddc2d14035dcd332804acb8018dc9"
  },
  {
    "url": "20200602/index.html",
    "revision": "3d27786c5773d67f28ff7cd452c243b0"
  },
  {
    "url": "20200604/index.html",
    "revision": "c649663a4d9fdefdf881bcd5d9bbb537"
  },
  {
    "url": "20200612/index.html",
    "revision": "01ddc20743d9e837960064ff4e727465"
  },
  {
    "url": "20200720/index.html",
    "revision": "84f7929af6ecd86cf1b02e33cf23aa73"
  },
  {
    "url": "20200804/index.html",
    "revision": "e8a63760cbd3a3bea5520016f1be25aa"
  },
  {
    "url": "20200812/index.html",
    "revision": "b603832c1b5a43f59876ac68081f06c0"
  },
  {
    "url": "20201013/index.html",
    "revision": "3d707556c22f2e4a514dbc9249601850"
  },
  {
    "url": "20210112/index.html",
    "revision": "de95edb3b88a13a1882d527d1bf76786"
  },
  {
    "url": "20210123/index.html",
    "revision": "d710768ab8852cce94cc842fea029507"
  },
  {
    "url": "20210129/index.html",
    "revision": "4dd5c852a849c57639b13f6f89cbf180"
  },
  {
    "url": "20210327/index.html",
    "revision": "b2b021468e69e18875baab0788077f72"
  },
  {
    "url": "20210502/index.html",
    "revision": "0ab767cddfa30e76b234b61e7046744d"
  },
  {
    "url": "20210507_01/index.html",
    "revision": "0e43d04878f425d58c4d3f5a0c6fc646"
  },
  {
    "url": "20210507_02/index.html",
    "revision": "c2963a1938c2a64048642a0647c6e9c6"
  },
  {
    "url": "20210508/index.html",
    "revision": "a81b1d858a8a015d7e3da45b314386d8"
  },
  {
    "url": "20210510/index.html",
    "revision": "ac979b61502c92dc34cd5e92ab57cbb8"
  },
  {
    "url": "20210703/index.html",
    "revision": "74889aab6f13b2d56c7d1207979ac3e4"
  },
  {
    "url": "20210809/index.html",
    "revision": "df4a92f5217d26fa48f0f81d17e4371e"
  },
  {
    "url": "20210901/index.html",
    "revision": "107742f6750999d19b5d60974a0eb62e"
  },
  {
    "url": "20211124/index.html",
    "revision": "e3f17091e551bdebfd68d0cb421056b8"
  },
  {
    "url": "20211210/index.html",
    "revision": "0c4ddd7f7b7a609f1ff57c9cc2b0a712"
  },
  {
    "url": "20220212/index.html",
    "revision": "73dac769d2e8cd15786a24caced9e107"
  },
  {
    "url": "20220513/index.html",
    "revision": "cc819bf0ecb17d8dffa6e60b3ed209f7"
  },
  {
    "url": "20220530/index.html",
    "revision": "d8fa1e0b82995965243dfd3598d79ebd"
  },
  {
    "url": "20220704/index.html",
    "revision": "fdd2ff6fbcb20436c630a3c6b7a33da5"
  },
  {
    "url": "20220804/index.html",
    "revision": "25c102a00634f299ff8a5d3aefc1504e"
  },
  {
    "url": "20221125/index.html",
    "revision": "0377416f225666e202eb03da7e7ddd76"
  },
  {
    "url": "20230513/index.html",
    "revision": "e8aecd91c98a9d4dedb55f12a4b549bf"
  },
  {
    "url": "20230928/index.html",
    "revision": "74717cea3130935e043fb4df978777ad"
  },
  {
    "url": "20231206/index.html",
    "revision": "62cfa60c31de4b81a91e8893137ecf5e"
  },
  {
    "url": "20240126/index.html",
    "revision": "b55ee7b9b0e55ef74f637c9ceda31750"
  },
  {
    "url": "20240304/index.html",
    "revision": "1c057562c2d92f4e4cc8c2fcdc38acc7"
  },
  {
    "url": "20240327/index.html",
    "revision": "34ce90c4db0414a80dfeb4a208901f2f"
  },
  {
    "url": "20240419/index.html",
    "revision": "bc707ab082a099dd93c95a759e5a1e68"
  },
  {
    "url": "404.html",
    "revision": "4641bd2cdadbc57a1ee89c77251d43e4"
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
    "url": "assets/20230928/01.png",
    "revision": "70f8f486259370ccaf8ae7834fc9c424"
  },
  {
    "url": "assets/20230928/02.png",
    "revision": "2efb9da34fff40425e9927b248601574"
  },
  {
    "url": "assets/20230928/04.gif",
    "revision": "43032411c03db2aa967764d9cab4c808"
  },
  {
    "url": "assets/20231206/1.gif",
    "revision": "7e2bcff213f6b4501d9ab0dd5e3e49f8"
  },
  {
    "url": "assets/20240126/1.png",
    "revision": "f28854fed02da061f5bed534eca49fae"
  },
  {
    "url": "assets/20240126/2.png",
    "revision": "6758602a41f13570eba2a7736f71f466"
  },
  {
    "url": "assets/20240126/3.png",
    "revision": "3218ee9986b347fb4ed9a6af0e64d533"
  },
  {
    "url": "assets/20240126/4.gif",
    "revision": "1a0097ac81494c7e88e9d03842ba1be1"
  },
  {
    "url": "assets/20240304/02.png",
    "revision": "81d6403a4057d84e1c34703a0e6b97ee"
  },
  {
    "url": "assets/20240304/03.png",
    "revision": "fe7e9e095690f890663b8cb8246ba323"
  },
  {
    "url": "assets/20240304/04.png",
    "revision": "896b47655267ca60dc6ddb12554233ef"
  },
  {
    "url": "assets/20240304/05.png",
    "revision": "abbf51bf2a5624b637cf053565c50fcb"
  },
  {
    "url": "assets/20240327/01.png",
    "revision": "1ee0edb3734bb8759a644fa575b1f442"
  },
  {
    "url": "assets/20240419/01.png",
    "revision": "7bc867842f00ef6271ca053bf2a99060"
  },
  {
    "url": "assets/20240419/02.png",
    "revision": "9771301cdaa404fad49aea077c303793"
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
    "url": "assets/js/11.2bd0d46c.js",
    "revision": "9a63a3a4a2d3c297299c641401c1622e"
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
    "url": "assets/js/23.30e0b586.js",
    "revision": "31182b1840d4eca9b027068ff9308323"
  },
  {
    "url": "assets/js/24.ac4b04d5.js",
    "revision": "cc4d70ea96b9f8688c54fcdca5f20eb1"
  },
  {
    "url": "assets/js/25.88cfe008.js",
    "revision": "a801268d3bb0ae84279c1200de16355d"
  },
  {
    "url": "assets/js/26.e9e81028.js",
    "revision": "6978fc5d92164cb2444b4fa0af1e060a"
  },
  {
    "url": "assets/js/27.8a9b7ccf.js",
    "revision": "1ae3a59f71d171485e310e67345d98cb"
  },
  {
    "url": "assets/js/28.39890126.js",
    "revision": "d62eddfa1a54775966275fcbb431d02a"
  },
  {
    "url": "assets/js/29.bd605860.js",
    "revision": "af4afc8a9bdffa7687f17a116060135a"
  },
  {
    "url": "assets/js/3.db1300e1.js",
    "revision": "c6d4a584de35a41b06fef400f1d3c4d3"
  },
  {
    "url": "assets/js/30.ed52addf.js",
    "revision": "71336ac709fd6f5d68e405cc57c8173b"
  },
  {
    "url": "assets/js/31.c8f9b712.js",
    "revision": "719131aa93d4f48b4e1c54c4ced5eb49"
  },
  {
    "url": "assets/js/32.a85919c2.js",
    "revision": "8ed8493257ff1c8e560c8b53e2fcbae2"
  },
  {
    "url": "assets/js/33.b39c0912.js",
    "revision": "7fe96a315911237a4ac05d4061088ae9"
  },
  {
    "url": "assets/js/34.68e7f2f9.js",
    "revision": "afd4e670d3cfe23b10e43354328d3593"
  },
  {
    "url": "assets/js/35.83040e6b.js",
    "revision": "8b00aa509c99ab77f9b387126e10b4ae"
  },
  {
    "url": "assets/js/36.01625add.js",
    "revision": "52d8c18967276ec9445392812ce6bf1e"
  },
  {
    "url": "assets/js/37.928ec84a.js",
    "revision": "229f46c25554333f42efed76738c0493"
  },
  {
    "url": "assets/js/38.8a38703d.js",
    "revision": "0cc01284b761c530338857c7869c5d1b"
  },
  {
    "url": "assets/js/39.03f27cbd.js",
    "revision": "39cbb656e48a63817676aaa733b95fa1"
  },
  {
    "url": "assets/js/4.339729e1.js",
    "revision": "08de63f91865dc542434ded9704e1ed9"
  },
  {
    "url": "assets/js/40.0a419395.js",
    "revision": "38939d3a829b329b60a24985e1af619e"
  },
  {
    "url": "assets/js/41.468e51a1.js",
    "revision": "4210d11447a84f29fe2e9b812947f6b6"
  },
  {
    "url": "assets/js/42.47021439.js",
    "revision": "4bb1a94552186e694d77e488903998f6"
  },
  {
    "url": "assets/js/43.6e660ac6.js",
    "revision": "4eedf7e33611c1a901d38c30cb8765b5"
  },
  {
    "url": "assets/js/44.86ec4a22.js",
    "revision": "68b381a4f74799e8aa52b40b51261cc1"
  },
  {
    "url": "assets/js/45.fcdf55bc.js",
    "revision": "0d855ad9dca95ce552cc1ac57a1c864e"
  },
  {
    "url": "assets/js/46.1eff0f18.js",
    "revision": "dddb2b4295d2882201c7cd22596f9ed4"
  },
  {
    "url": "assets/js/47.1b8689a0.js",
    "revision": "85193eba9057ba7e6056e7a38782c1f1"
  },
  {
    "url": "assets/js/48.c25885fc.js",
    "revision": "0f69953e7af855c767a3b843fb917f6d"
  },
  {
    "url": "assets/js/49.0325f1e9.js",
    "revision": "e29b33759ce4ea5ce743e66c254fbc06"
  },
  {
    "url": "assets/js/5.2202e623.js",
    "revision": "12aba6e2a20561cb65660f97da9d051c"
  },
  {
    "url": "assets/js/50.4d5610e8.js",
    "revision": "6a4a1702b6e77b8a6123eb941c460f28"
  },
  {
    "url": "assets/js/51.5fca731b.js",
    "revision": "8f3bf4d48fa6b409fe76c75d76111f34"
  },
  {
    "url": "assets/js/52.dbbe56d9.js",
    "revision": "14e3b7a792e61131a1a012794814bef3"
  },
  {
    "url": "assets/js/53.849d4e15.js",
    "revision": "124ebfaa0c17307c6e9140613ccb0e4b"
  },
  {
    "url": "assets/js/54.70028eae.js",
    "revision": "37008bf43bb6c78c4bad1685e1ac1ba8"
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
    "url": "assets/js/app.8d1c5de3.js",
    "revision": "62f033e48b529f51b1b44f4dde559cdb"
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
    "revision": "15aec9c8c62c77f332198e021c98ebc3"
  },
  {
    "url": "categories/css/index.html",
    "revision": "2e85d594762294b9d47a40c7d3489de1"
  },
  {
    "url": "categories/git/index.html",
    "revision": "0ae99b9094b99ec9d2a0b9a336a7023e"
  },
  {
    "url": "categories/index.html",
    "revision": "a9fb98f5409201c5708b4770026044ee"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "b6ed649a6c564edd0244f35f0a6d665b"
  },
  {
    "url": "categories/react/index.html",
    "revision": "772781eedcedd0848b7ddec09e6d1f5a"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "537616234b2651bf38aaa80215aee3ed"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "91aebe4b611fba0b27014215973d79da"
  },
  {
    "url": "categories/前端的那些事儿/index.html",
    "revision": "49835e4f2a959281f61c895cdccc4d90"
  },
  {
    "url": "categories/成长之路/index.html",
    "revision": "1d0f552a1ea5f1126b5d18a41793d7c8"
  },
  {
    "url": "categories/成长之路/page/2/index.html",
    "revision": "50f3fda76530080f450703eabfd42dce"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "370de069b0c5f933af106b9099f0e839"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "be0f5f10671ae6ab8c33a0ed8f9de386"
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
    "revision": "19401243fab5be2660a5d426d396378f"
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
    "revision": "8c0b0307066a2d23ad4c751abbeb34e0"
  },
  {
    "url": "tag/git/index.html",
    "revision": "52389511c1c05a87b6d4702411b7b21d"
  },
  {
    "url": "tag/index.html",
    "revision": "0dec6d63ab72ae411148bd01d78289bd"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "b6a4d4fe026350d06f72550e22eb123a"
  },
  {
    "url": "tag/react/index.html",
    "revision": "47e68bbcfd3e30ea92c02adf8ded5da9"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "2a585f5dfebafad7592b7005024d2d78"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "3779c766d51f8f28ecabe121b43c4b0b"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "0678d0e398b59311cc1c3a28d7415613"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "a6b9a76c70793fa02c60ca2aced435c6"
  },
  {
    "url": "tag/前端的那些事儿/index.html",
    "revision": "d26dc681aecf7f194ca454978a15bc5a"
  },
  {
    "url": "tag/成长之路/index.html",
    "revision": "9530f3cce6680c108843937e820bbd51"
  },
  {
    "url": "tag/成长之路/page/2/index.html",
    "revision": "a0a561a73879fc4db2dc744ed380b35d"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "c9f1be84c39b133bed6d09d3d02d288e"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "dbcbbe278439ba898f37cad1eff62ff2"
  },
  {
    "url": "timeline/index.html",
    "revision": "ac28d62d4f3e8906943ca927cc7c2209"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "6af9ae94accc9c30fa5e87da26b9a736"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "d33d384fee53ff37d24a0adf0170c5e9"
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
