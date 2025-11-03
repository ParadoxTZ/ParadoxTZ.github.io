/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/09/24/hello-world/index.html","2e838d2109e2b9299ef12f544684ed06"],["/2023/09/26/FDS/index.html","0c1e65705b950c84516c193da3a70d27"],["/2023/09/26/工程原理/index.html","01dd4f0155afd058ba2f58adf4e0cc2b"],["/2023/09/26/理/index.html","968262d01e04b211e2cfd22d970ee7e2"],["/2023/09/26/电气学院大二下课程汇总/index.html","e118e5592de6902d0995e24789a17d98"],["/2023/09/27/Read Me/index.html","4eb216ade0b7591108e16900b764319f"],["/2023/09/27/大二上答案/index.html","4f74d641f3d07f805a2bf72bfff0b0d7"],["/2023/09/28/微机原理（DSP）/index.html","b3870720f10dbfcd0a20c196c4e2ac24"],["/2023/10/02/AI绘画/index.html","c6706867e58fa0bb5213886aa6a3ed09"],["/2023/10/06/双足机器人/index.html","e744cff7f4df49b3ac20a26725b5348f"],["/2023/10/07/电机学/index.html","296f50a8c0a6bb0995583c168175ede5"],["/2023/10/10/电力系统稳态分析/index.html","4ad92983ba17602143793ccf15618972"],["/2023/12/05/控制理论/index.html","b997d605999f6d9546a5c6244163a627"],["/2023/12/27/微机原理课本外知识点补充/index.html","e993bb34b1ba915ed72567a30590b341"],["/2024/01/15/大三上课程总结/index.html","6bbc8cfd5b2574a33b835a351a7a6e67"],["/2024/04/02/电机系统建模与分析/index.html","661211681fdd8e8720997acfa14ef3d5"],["/2024/04/18/电力电子技术/index.html","069fe095337750b57518803a4354c753"],["/2024/04/27/运筹学/index.html","bdcdcf7ec6d278b9d24577a1effbf3ac"],["/2024/06/11/电机控制/index.html","48214e5df49bd8665ebaac9d31a85fa5"],["/2024/07/09/二月十三/index.html","c08eb65434cd7e1c848a9a95504f42ca"],["/2024/12/13/电机工程创新实践/index.html","6284a4b4f8bb9b157747ab2f39e29b8b"],["/2025/01/02/MATLAB面向对象编程/index.html","1a9b24d1534b0dc0c2013956151d5ab1"],["/2025/01/13/基于Git和gitee的协同开发/index.html","c79990b9c6eb4a3bf897afb9b56f20b8"],["/2025/06/26/latex教程/index.html","cb69fa4979f3c1685ea04b3451bddc31"],["/2025/11/02/现代运动控制策略/index.html","a596dc114acac0d11afb6ae3f87b8e7f"],["/archives/2023/09/index.html","9eac81ba4b92421704b8f73174d3bc69"],["/archives/2023/10/index.html","d9d5376e67716aeb0b9f81d787692060"],["/archives/2023/12/index.html","4075acbb3e2ec4538e771e5464f35468"],["/archives/2023/index.html","f3ca9621f19d25ca4134077da0e584c0"],["/archives/2023/page/2/index.html","a538f0addb15919124a18741249d83fb"],["/archives/2024/01/index.html","393bb9d73dc81551957a0f6e0342f4da"],["/archives/2024/04/index.html","e4c7410dbd4c6291a8d86ce534a403f7"],["/archives/2024/06/index.html","149fa36336ff5aa4130edab35df8f1ce"],["/archives/2024/07/index.html","b2c0a67e3708d9a5b16b681dd83069bc"],["/archives/2024/12/index.html","a99e83fc12b9d6b5b24fe276378c92f1"],["/archives/2024/index.html","fe96c064bc88fe41cc48e58fe98df2fa"],["/archives/2025/01/index.html","ca2e996216897f1520782153f83518eb"],["/archives/2025/06/index.html","5bd68004423ea17aaa16558c8c9126ce"],["/archives/2025/11/index.html","480c593cef25c0ee46040f50e0678c22"],["/archives/2025/index.html","c67f85bfe8eb243e11f1c0f685d63868"],["/archives/index.html","941d41829f09f19a43da1a2a813c3da3"],["/archives/page/2/index.html","9829d4147c779fb906eefa2e350f5bda"],["/archives/page/3/index.html","cd226d8e63da9f9e900dd6f0d0d5d6d6"],["/artitalk/index.html","7be81c895f37904b7bfc578b260929f9"],["/assets/css/APlayer.min.css","41261cec5af2bcc3ae7f92f35324d9cd"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/index.html","5f39991143f33480f175ce2a102fe16b"],["/categories/课程/index.html","72a1425c0a3e256cd2fe8fbe04f01b12"],["/categories/课程/page/2/index.html","83fc852baac080ddf062433313cfe2c3"],["/categories/软件教程/index.html","7e09d0cb04c37136ecd2db219c61a4a7"],["/categories/随笔/index.html","d74f2122fedff48f3b97ce8ee6c47bc9"],["/css/index.css","63e80f8c0a22d9ca0dba701d5bc25fed"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","ac3e5178af11d8b958e12e1a0e9a33ea"],["/gallery/new/index.html","31aa4e40c345907852ae28afff3fef25"],["/gallery/new/top3.jpg","a1538ebc5ca84421defcb7d923be3fe0"],["/gallery/new/微信图片_20230926180015.jpg","3c4f09ba672ae0f5f5a181ccaee42e6d"],["/gallery/new/微信图片_202309261800151.jpg","7dacfd54927eaac7e6949d2fd8071731"],["/gallery/new/微信图片_20230926180016.jpg","b7aca2ab9b07aed0d252094ff9639406"],["/gallery/new/微信图片_20230926180017.jpg","1d0c6548d036a8ce4dba1c266df5a1bb"],["/gallery/new/微信图片_20230926180018.jpg","3ad4e7641e3de6bd9da6ad9ed134a3d4"],["/gallery/new/微信图片_202309261800181.jpg","c79a8076e4b075ec6d7187f78d5f76a1"],["/gallery/new/微信图片_20230926180019.jpg","d547f4f8607e8fa1cab910bdc4ff693e"],["/gallery/new/微信图片_20230926180020.jpg","699f01d51f9271c0677ad8a2769ef1f8"],["/gallery/new/微信图片_20230926180021.jpg","58e07b4c15d1dc1cb2982a8fa3653197"],["/gallery/二次元/index.html","346dd2eb321e5849d39305c338bb5ba2"],["/gallery/二次元/剑冢1.png","6ea890717117ce7288aee13f8481a19f"],["/gallery/二次元/剑冢2.png","9db9fa7ac3a89074bd71aed470dfccd4"],["/gallery/二次元/剑冢3.png","b221374c2ecb57fb3ee734f8f4dc5d33"],["/gallery/二次元/剑冢4.png","296742bfbd902165c16815f5be5da27b"],["/gallery/二次元/剑冢5.png","5198db4d63d1e0067e3597e14ae68465"],["/gallery/二次元/嘉然1.png","ca4be511f6a5f023691e9c95b5fd496c"],["/gallery/二次元/嘉然2.png","7913428326510924efed5b37e5355445"],["/gallery/二次元/嘉然3.png","605003a45e44b07f90fe20e76fad9ff2"],["/gallery/二次元/嘉然4.png","8f7764f1ea875744759a50ad3067a07a"],["/gallery/二次元/机甲1.png","fd5991047e49fc34d21d7ee5320415d2"],["/gallery/二次元/机甲2.png","4db82c59a42031ae531dc0db7f560971"],["/gallery/二次元/机甲3.png","9434c151b3e10e8176be642d7d39561c"],["/gallery/二次元/机甲4.png","bebb04c6d4419f5d234eb5043cb01d6f"],["/gallery/二次元/机甲5.png","0479ead8c8779439d93144a11527edb9"],["/gallery/二次元/机甲6.png","68a6a9f1a861f47eb1c6bef1f8ef0c1a"],["/gallery/二次元/泳衣1.png","4cabc2d61866b709f85c145ae3ee2e30"],["/gallery/二次元/泳衣2.png","33fa6faeb7cf25256afaf30b350d4d97"],["/gallery/二次元/泳衣3.png","860e27447792d1549b3d96d6fe2a2365"],["/gallery/二次元/泳衣4.png","10368990ff4f51ee554b938eee25f371"],["/gallery/八重神子/index.html","d73e8c0dcf7847096c3bcd50087d1448"],["/gallery/八重神子/八重神子.png","bca449c5839d6cc6206cb9dad07005de"],["/gallery/八重神子/八重神子01.png","53adaf32fed2a632a28bb054455f2410"],["/gallery/八重神子/八重神子02.png","e9232ea6cc250262d13979f0a1d5d36e"],["/gallery/八重神子/八重神子03.png","948d4a000ddb252dce447038f63a07d6"],["/gallery/八重神子/八重神子1.png","939bcd29cb6f26e9bdc7ba42e177a84d"],["/gallery/八重神子/八重神子3.png","8ee62f28da553bcdbc14e17f9a425aaf"],["/gallery/八重神子/八重神子_真人1.png","c6c56115b9bbc3037c9fe80715df47cc"],["/gallery/八重神子/八重神子真人版2.png","ab226983ce489fcf2af4cc601f1bf512"],["/gallery/八重神子/八重神子立牌.png","c52e044833783059d7e88b76c4df2123"],["/gallery/幻想系/index.html","dc3acc3600b0903f9fa76eb8d67b701d"],["/gallery/幻想系/冥想1.png","7d1c6ea86e36a19a8a9787c4e41d8d51"],["/gallery/幻想系/冥想2.png","9ef5955b68a54d0ef3cf7b0b39e018ca"],["/gallery/幻想系/冥想3.png","1f821ef9bcf6d1d815793434b6d697a0"],["/gallery/幻想系/冥想4.png","cd08e7ecdd78670adab65560c3648a3d"],["/gallery/幻想系/冥想5.png","df0eafbae3e3326db27b7899ca4a49cf"],["/gallery/幻想系/冥想6.png","969db568606adf5242fce5a1443277d0"],["/gallery/幻想系/冥想7.png","3399ba17367b0009e816e3439d21503c"],["/gallery/幻想系/山崖1.png","dd5ec06e330b153f7ccad94a22296ef3"],["/gallery/幻想系/山崖2.png","72347fc823c93cadd084235b9b352ce1"],["/gallery/幻想系/山崖3.png","b2ce2b75591081cfeed3be30738114b3"],["/gallery/幻想系/山崖4.png","99dc238b8efd90cc7e27e2cf787b7f15"],["/gallery/幻想系/山崖5.png","03b18c445567315d9e8c23da106304a4"],["/gallery/幻想系/山崖6.png","5fb45558422e3f93e726760d65ed95ce"],["/gallery/幻想系/山崖7.png","4e680ef98e57a1e098d24b4e94fa5c6a"],["/gallery/幻想系/教室1.png","8120a508ebe181ce987867f655ad7a8d"],["/gallery/幻想系/牛仔.png","b7b1517d6f2ecb548715127088c93c4f"],["/gallery/幻想系/王座1.png","ca74fd6a9f80b94eb5aba57f5cbfd2e6"],["/gallery/幻想系/王座2.png","b4378c95d9172b1e136ffc84c657b7ed"],["/gallery/幻想系/王座3.png","25ae191c9af4e487304e15fce8ffd214"],["/gallery/幻想系/王座4.png","72d3db78ebf3546b0c7fe039fa39d58f"],["/gallery/幻想系/王座5.png","9661b8cd952ace6d02e2bbeb634197ca"],["/gallery/幻想系/王座6.png","84f29a8e5a07cd270b5deaee88ebc555"],["/gallery/幻想系/王座7.png","e26ca7745e776035fe6ef7a0aff8acc4"],["/gallery/幻想系/王座8.png","1434e4aa8d4ae96b9f2710a168f932f0"],["/gallery/幻想系/风雪1.png","f34c6e18c2bcc0236d90e9d6cf4cfc31"],["/gallery/幻想系/风雪2.png","fe06ad6e1d9590a2b9666821989effbd"],["/gallery/真实系/index.html","a63f38e3601f08fba0cf211b2fa99870"],["/gallery/真实系/乌篷船1.png","7c17dcd134375be4db54a5d75ca73c6f"],["/gallery/真实系/乌篷船2.png","7f1feb73c834a05ac9e0a68ce2db1f47"],["/gallery/真实系/乌篷船3.png","e6502245f59285c3d6c2ef3f643af583"],["/gallery/真实系/乌篷船4.png","48645b60b5f74e06de86641202cf288e"],["/gallery/真实系/乌篷船5.png","4c0b3510104f01cec0bc7f6dd5a0ca70"],["/gallery/真实系/乌篷船6.png","106011dc84541d22e3230634a3dc85ae"],["/gallery/真实系/乌篷船7.png","677562f130af90e95cae57db1fed85ba"],["/gallery/真实系/排球1.png","363af34f8226a36ccdd024efd192927a"],["/gallery/真实系/排球2.png","54b2e895a728516afe85b5c501723caa"],["/gallery/真实系/排球3.png","dd07cd1ef33f5d115db336404407202d"],["/gallery/真实系/排球4.png","2b34a04920c17878a7a5134efad98c5d"],["/gallery/真实系/排球5.png","ac1d027413bfd39c209b0902fd03c526"],["/gallery/真实系/排球6.png","7912daddeaf84708354a88868bb97f1f"],["/gallery/真实系/排球7.png","d1bab602fb746a737267bf1fe3a55bb5"],["/gallery/真实系/排球8.png","3a9dda86b7515150007a76173b0d7c53"],["/gallery/真实系/排球9.png","98f3f21cab661caa79f51fdbec632e82"],["/gallery/真实系/教室2.png","caa548485d1f7f569c5472836de84e00"],["/gallery/真实系/教室3.png","50d0e18fdca88e26a1a68effee2a9e56"],["/gallery/真实系/教室4.png","45fb8d06dda574f672ca0cb29ce2bf61"],["/gallery/真实系/教室5.png","064ecee888d02d1f9965128e08ae4642"],["/gallery/真实系/教室6.png","424f7c365ae3ede722cbedcffb4b810a"],["/gallery/真实系/教室7.png","90eb1c3ac41bec7e9a77831611397a49"],["/gallery/真实系/更衣室1.png","0eb0f1d62fb03535e2beb6fe0db05eff"],["/gallery/真实系/清新0.png","1b17f378c786d97039db5a48c4ef6541"],["/gallery/真实系/清新1.png","979195910d0e84185d64a86f10295f07"],["/gallery/真实系/清新2.png","efccce3f304f42e6f4b10bf5127fc183"],["/gallery/真实系/清新3.png","7d952b2ab4c0c8f7c22bc6386002782c"],["/gallery/真实系/清新4.png","b1abd7466a4e6184391d6bde75f1300b"],["/gallery/真实系/清新5.png","df0bd6cba8e6c84190991a39f09fa6bc"],["/gallery/真实系/清新6.png","2a583ac4f151c2d255ad876270973afd"],["/image/Back_Li.jpg","afd750c514c673623c6d4e048f6be5fc"],["/image/Boki.png","b3c9c28a8b4d5cc0894fb1a60fbd1bed"],["/image/DZ.jpg","a769401c8374a96df99c04e93a99b622"],["/image/Fufu.jpg","7fc671be66b06babf969ef9461c4afae"],["/image/Jiaran1.png","3e5f177dfa803a2694cea2a73137e8d2"],["/image/SDU.png","883c06e8cf45154dc8a77dcd1ed4f734"],["/image/SE.png","2f6e28e8ed47a279da2812df4682df7d"],["/image/after.png","13c955fc59bf15d384435ffc626455c9"],["/image/anno.gif","4452d14f13e4b722eaeb92c7673e20e7"],["/image/apple.jpg","860e5eab72fd3437724a9d3513d1f56a"],["/image/back.png","4e2dd81406a0a30cdf61575ad3ca4bc5"],["/image/before.png","fbc8b93c561e74cc85d9a5c7277b4a52"],["/image/boat-4812434_1280.jpg","9bfa99ed0bd7db4fa3c8af3434a9801e"],["/image/canny1.png","678966f62629d1bebdcbfc35ddfd3e22"],["/image/cyb.png","81d59c9b0b856105eef2af21153d0b68"],["/image/djkz01.png","6a4ad110164f00aed84babb8f244d1a7"],["/image/djkz02.png","21da335fab7f7e2643ecb1fa2e3b82f4"],["/image/djkz03.png","1f1f0187dd41133462c77926b27367af"],["/image/djkz04.jpg","73091e36ccf10bb499bf0c268787898f"],["/image/djkz05.png","56c0eed2243da3ffea7fa67574452a62"],["/image/djkz06.jpg","64c56cb0c477dad62aa2cb18a68a1997"],["/image/djkz07.png","5627e5bba509645e5a78e1dae5dd024e"],["/image/djkz08.png","1ed919acb411d0eb2256a7f8cc6bb79f"],["/image/djkz09.jpg","20a3f2016ec3cee21d2376f8ac4211f2"],["/image/djkz10.jpg","30f6a2b1adfaf420ea9c7553ab5a55ac"],["/image/djkz11.jpg","47eb226ddb3a1e46553680c168d25483"],["/image/djkz12.png","dda44d442719d04bb6e97500445af28f"],["/image/djkz13.png","2632b98101113556d000e3afa6bec8e3"],["/image/djkz14.jpg","cc9cd3893ec9cc8ef114b1b9a4d045b2"],["/image/djkz15.jpg","97751316d338820679010501f8603463"],["/image/djkz16.png","5fc14d15c0d8c995f83de121d1897e7f"],["/image/djkz17.png","8719b5a85c2fc31f82adb19bc1e8f60b"],["/image/djkz18.jpg","9796d26b58a71fda50dc391b8a437fb4"],["/image/djkz19.png","0ed7e60818882b2b374f362ff934a2d5"],["/image/djkz20.png","3f40ea6584d0be263de56b4d447843f6"],["/image/djkz21.png","496024051eb456b104d924ed34720a9a"],["/image/djkz22.png","0bf5de8488fa104b7979b73f2fc31635"],["/image/djkz23.jpg","45f8bdfb54be7845111093fc928fe0e8"],["/image/djkz24.jpg","aed5d54f88fbe47de51c203b4432b2db"],["/image/djkz25.jpg","014963db9e50fda6bfa4cb64a152839f"],["/image/djkz26.jpg","dafa3ed43f50dfcd30d063532c67855b"],["/image/djkz27.jpg","9bc58413922c6bbd4f07101d06b28658"],["/image/djkz28.jpg","e5b1249e6cc75f3ddc3eee3b4311a00d"],["/image/djkz29.jpg","7ede66ee63f7635baa0f0307c220a4af"],["/image/djkz30.jpg","e5b94ad70edd848b4382f39d834196d5"],["/image/djkz31.jpg","9868fbe325e36d4d15e84cdbb91ed1fc"],["/image/djkz32.jpg","aa5e9858123adbe2c5e30a6940f89c46"],["/image/djkz33.jpg","e78df8f2f959cc31f9d445685f967e7d"],["/image/dog.jpg","30f9f56e6a720aea4b29e791833801a3"],["/image/fpx.jpg","318751702802e5867db83b605a52df28"],["/image/friren.jpg","48b833eed8907f3e6631205988696b37"],["/image/git1.png","f5b1ec4e68e94369cb2bc10c0273e40e"],["/image/git2.png","34616d8f734fd575a46c31559bcfbca2"],["/image/git3.png","51bca0cbb645e3628ee4a5bc5dff62a4"],["/image/git4.png","a608b83a83fea3e5e01caa41d8640188"],["/image/git5.png","ea532b23a371362485c28dd20e3ba141"],["/image/git6.png","0fa78eaa148e18bf36bfbc1172e97b50"],["/image/git7.png","66e792efd5a6ad0ec02cb37f94cb42f0"],["/image/git8.png","ae1b3b251ebab4504335029ccce2fcc0"],["/image/git9.png","1e4eee61f6c74a31a432c8f97b81969c"],["/image/home.png","176f6a55eb7d35cb83c1e618b533ca95"],["/image/hxy1.png","dbd39d0984b0e61116926dd9759e9bf6"],["/image/hxy10.png","6cd143e722b7ff7ac8bfb486f5824339"],["/image/hxy11.png","ff1610bce082d91a0a606929c1c7757a"],["/image/hxy12.png","153e961eda0fcc173675db85f85727cb"],["/image/hxy13.png","956c623001a243b631b1e02997030224"],["/image/hxy14.png","ea0c621eb4a5e945b0a977295245f13d"],["/image/hxy15.png","578947a6d861afb563f4b2145f2f100d"],["/image/hxy2.png","bc6769b96d0c7d26fe65ad75cc79ca28"],["/image/hxy3.png","bbfd54e495d233bae1b1ea1bb432dac1"],["/image/hxy4.png","3a08db722f0c2d4253cdc47f5b6cd73c"],["/image/hxy5.png","8b5852bac8776bb5816cf395d581154d"],["/image/hxy6.png","d6f0d9b2e0d92eb1505bbdd42416f635"],["/image/hxy7.png","dbb4587fc423b3dc0ba9411308dbf0e0"],["/image/hxy8.png","c68c73e193f1cd0186beafc7d41ca632"],["/image/hxy9.png","fe2aa1019d9b5d7955e6bb7f2c831435"],["/image/image.png","5fb1393d4570ad47ec139a52c05662f7"],["/image/image2.png","8a1525d48073c29054ea0a5dfa532d44"],["/image/image3.png","63ce93d734858d18b0b29dc3d5ab2858"],["/image/image4.png","7905870dc30562a6c6465b259146e06e"],["/image/jiaran2.png","7a396512de5b459976eae71dc555f49f"],["/image/keyan.jpg","168481037715e9b0499f9d1ecdda5d92"],["/image/latex01.png","7437bdd65140cd68652193717d2f6cc3"],["/image/latex02.png","dcb9cca7c766dfa9fbbb49e2a5d2fa3e"],["/image/latex03.png","ccead86be7a2a88a8a6c8954f92c1cbd"],["/image/latex04.png","071dc282e64bbbb484ad9902fda94831"],["/image/latex05.png","1ece3751667129f4fe0e05563eacfad4"],["/image/latex06.png","94cea1042991c1ec7d9b928484b17f0d"],["/image/latex07.png","254834c2655397509d163978d4b77fd9"],["/image/latex08.png","694bff15d8944e203776858e6114bea0"],["/image/latex09.png","42cf7a991bcfba76d01aa0a36340a0e8"],["/image/lyy.png","e19de8d945158ab0b6165d888af3e2e5"],["/image/mygo.jpg","e911c7e7be81f2d7900e81e16123f673"],["/image/s1.png","8686b45db4810640189cfd25ae73fd0d"],["/image/s2.png","f06e00f36d75a962271b9143888de01f"],["/image/tanlang.jpg","08c8c6ad9f50b8a6d11c142c48e2c215"],["/image/tmpjp_dhaa1.png","a882f3b8d85639130a6e70a94931c806"],["/image/top3.jpg","a1538ebc5ca84421defcb7d923be3fe0"],["/image/wyVe7uLQ_400x400.jpg","384bcc105c8e84c3775ab2d51be91ef6"],["/image/xdyk01.png","799bb058ae3e879b37f2adbfe8af106f"],["/image/xdyk02.png","69bcbd772558cad136d520c6ee703272"],["/image/xdyk03.png","a457a8a99e4f9b339e05ef5d9cb9b9bf"],["/image/xdyk04.png","a65b1c59af6ea570ec64b585f6b8f001"],["/image/xdyk05.png","62af140aafe470526e64973bb52336b8"],["/image/xdyk06.png","3a1fdfe14b6b72b82a5c8dde5451b5f1"],["/image/xdyk07.png","3cd230a1538591c37d0de10b07e6402a"],["/image/xdyk08.png","7a1bbb9383f95dbe423efa567c5a9c01"],["/image/xdyk09.png","34775987df60790fdbe64fdb3af6d6f5"],["/image/xdyk10.png","714b5f4c63c7ddc0162628fad2cbccbb"],["/image/xdyk11.png","5b53ad1469f7626fa1f184bedbddb3ab"],["/image/xdyk12.png","8cb0227f1c2db747339222ea2a166a1a"],["/image/xdyk13.png","13116e235c9ef7edd4664002aafdbdf0"],["/image/xdyk14.png","9d2ac7db32f1465c958bc2330602d1bf"],["/image/xdyk15.png","35ff29efa7e7370d973f9e86284e9a04"],["/image/xdyk16.png","67427087ea61f839cb7a692512fdc870"],["/image/xdyk17.png","3059a4470530569f286dcd0c6128cf9f"],["/image/xdyk18.png","20e902fb9d699d69ff2446a482bee847"],["/image/xdyk19.png","c69f979065273980a47d8f5662608632"],["/image/xdyk20.png","f7ced5f46045bb4a8ee5de413ea8def2"],["/image/xdyk21.png","e5c962340bcc743ebd38cc76fe4fd0b5"],["/image/xdyk22.png","ee763e83cfd1126a80798e4d7c5ec69d"],["/image/xdyk23.png","cc5bd658b76aa78256f3edd7cd8cf60c"],["/image/xdyk24.png","1d023ec49bcb9922737d139ba581de9c"],["/image/xdyk25.png","c9386fa59a306ab074b93af3f495711e"],["/image/xdyk26.png","1329dd5b4a603cbfe8f55d40c2020a76"],["/image/xnzb.jpg","68ccdbeb24de0c455b5375cac72622a7"],["/image/zjutop3.jpg","ec880b8eea41d57e34a59056a4f17da6"],["/image/乌篷船4.png","48645b60b5f74e06de86641202cf288e"],["/image/八重神子立牌.png","c52e044833783059d7e88b76c4df2123"],["/image/农夫山泉1.png","affa6235f4ac32831f45c84d3e01b20b"],["/image/农夫山泉2.png","236fc15d64668db5ecb9c244be60ed38"],["/image/农夫山泉_Deliberate.png","31f0a1031ad61e6c3be0a1963a6e8695"],["/image/农夫山泉_DreamLike.png","4f00279a2bf92d9ad587da1f191d4ba1"],["/image/农夫山泉_LF.png","e67561d32d404d7b3fd5a9346d6949fa"],["/image/农夫山泉_NED.png","b9c0fecbc2d0662a9905b32477dd2033"],["/image/农夫山泉_NED2.png","e864b21c53ee87a1c3ecca22340ccd0c"],["/image/农夫山泉_国风.png","9c18d88b804fc3e1ad040d174ad8ede7"],["/image/农夫山泉_深渊橘.png","191b16594b50c302c63a8c0ed4e0c9ff"],["/image/剑冢4.png","296742bfbd902165c16815f5be5da27b"],["/image/双足01.png","ba46e00fcf0ef283e1c8c5cb5665f91f"],["/image/双足02.png","492b48191cd3c704521c92858c93127d"],["/image/双足03.png","ec62ee71cfe71a90eae043cd7dd44281"],["/image/双足04.png","86f155bdc62d71b786601a85ae7a2210"],["/image/双足05.png","eb3516e19e60d1c707644ed21edd8c1f"],["/image/双足06.png","b14d3b2e2bf10888e1e53f344e4edf15"],["/image/吕布.jpg","3a8294d068ace3afc9c96222c3de8935"],["/image/奖励.jpg","9276e055de71d9616771d7970ae191c0"],["/image/孤独摇滚.jpg","a16797f4f9cadc9b556f3d88a1d0edd2"],["/image/封面.png","7d1e38d979c316f7d7e620e222bf8a89"],["/image/微信图片_20231002123148.png","5b5ace734e9bc5e161b481391c4b9777"],["/image/微信图片_20231002125925.png","c76f707b2d67e025652d710b29cdb686"],["/image/微信图片_20231002133105.png","4e3a53971def87d1e153b882a82eb1ca"],["/image/微信图片_20231002153828.png","0844a9d04be6b4c49411f280d0a34f53"],["/image/微信图片_20231002160402.png","99e181a73a9e9fa3441482a3119cc5b2"],["/image/微信图片_20231003143640.png","a1c858f3085846570ff6700b656e4dfe"],["/image/微机01.png","909422466bf0b55a54f9e8c9f8ea8f22"],["/image/控制理论01.jpg","25402e8a5264ccc49350eab957ee71b4"],["/image/控制理论02.png","46faf3760e2e8b3617664afb12575ead"],["/image/控制理论03.png","7a1d7fd14d9034fbe3b9238e5efc47b4"],["/image/控制理论04.png","868fc179ab56778b4e28ef8ca3b9021f"],["/image/控制理论05.png","755c9ee4c11d8c88eee84514bf8f3dc3"],["/image/控制理论06.png","e057612c1623568fc39068c8ae0e7aaa"],["/image/控制理论07.png","ec8dbb7767a0f8db047babfa4ca786ec"],["/image/控制理论08.jpg","1c3a1968b2fd0394fc334529753998f3"],["/image/控制理论09.jpg","a2f0d2bdf67b841f7919ee92aced52cb"],["/image/求是大讲堂.jpg","93b6f24159f8f8bdf9f485ef7b486dd4"],["/image/电力电子01.png","c9b6de1fd184fb68ac46833fa25e949b"],["/image/电力电子02.png","97721949ac3b90caa74347e2ddca05cf"],["/image/电力电子03.png","4281516be8764ed3aeb38185483f4b94"],["/image/电力电子04.png","1557fdcc1769fc331d9ed4c0b996c415"],["/image/电力电子05.png","4659aabad01a8a23eaf375f131b19d40"],["/image/电力电子06.png","34e1976600ab2d7f93bf60edb830dd7f"],["/image/电力电子07.png","0eb3afa1517676b60876eec7b857ba22"],["/image/电力电子08.png","ad9273224a0077f4c5d0cc27959957df"],["/image/电力电子09.png","1329e808e02f73a470fb41268756d251"],["/image/电力电子1.jpg","a480bbe2c972cb33b90c4a8c73580610"],["/image/电力电子10.png","2f55a2c8ee0ed8333e9dd3e26f216404"],["/image/电力电子11.png","26826844b3336d85992bd71c3a40f690"],["/image/电力电子12.png","9b3340fef9fff18f1091690002fc7279"],["/image/电力电子13.png","61a2b3f156b49e3f898df99e347158ef"],["/image/电力电子14.png","dc70dd0838834d135e1062d66c297b1c"],["/image/电力电子15.png","d8d64d0fa59bade9609776ea3d95650a"],["/image/电力电子16.png","3fd98fa8c466d5020e1ac085fbb47b03"],["/image/电力电子17.png","a2e219cfe6bc0122fe74776d178b9e5c"],["/image/电力电子18.png","bf170cd68afaabacd2b4d4fdf3c296ad"],["/image/电力电子19.png","517d5baf19696722bd5e59086b0c4649"],["/image/电力电子2.jpg","0fdd97bd8cb2d32cb651088b1504c0d2"],["/image/电力电子20.png","94d3472b86e67cb83f9b9db502d5921b"],["/image/电力电子21.png","b6ed201812fe4f8ce782eb44a78f1a9c"],["/image/电力电子22.png","9e2ead1bf28cc2156c552f69d3486526"],["/image/电力电子23.png","298f4ff64ece176ae3237694ca0b6ccf"],["/image/电力电子24.png","b80bd07d331fd6668311751a1b716dba"],["/image/电力电子25.png","36642f875e9d188e924ac5a45e6aa5a3"],["/image/电力电子26.png","04528ebfc3784ba258b37979ba686d7e"],["/image/电力电子27.png","39ef0444849ff933d281de12ce7bd1d3"],["/image/电力电子28.png","6e2001f40995067985b73a15660ea923"],["/image/电力电子29.png","e1d84e153208ce19531a115f4cd65bb6"],["/image/电力电子3.jpg","684f75caea69cc36f99eeaac1d2d37dc"],["/image/电力电子30.png","0a0a1da44a4ae415a9dfae71d1808c90"],["/image/电力电子31.png","941a573695d74efa65066c3f3ab00238"],["/image/电力电子32.png","9c7af937b4da277adb3a34ea93a9bae8"],["/image/电力电子33.png","73613a114bcf3de8779de43f69e4ac68"],["/image/电力电子34.png","655b4e76553d43214deace5ccd4574b0"],["/image/电力电子35.png","a7cc33f39dc6beee289af714644748dc"],["/image/电力电子36.png","8c7e713c7decc3590b15850f1291195b"],["/image/电力电子37.png","6393912d7f9987b51095352269cc352e"],["/image/电力电子38.png","8728a1af643180a0e1b996e7d660bd8b"],["/image/电力电子39.png","8b0c76769d6a09cb006b6f2fd146eb9c"],["/image/电力电子4.jpg","d86bf9334576575f49509d29004d1c4b"],["/image/电力电子40.png","e58e921fc0b177211d71a9c6aa420786"],["/image/电力电子41.png","eb684b05329daf63aace6d6cbceedf85"],["/image/电力电子42.png","c83b738c39365bafb417c583418d3043"],["/image/电力电子43.png","f135a7f09f2055be3e95d2ff11f02610"],["/image/电力电子44.png","a3e4339759abfbc4b50f7b4b05875dfe"],["/image/电力电子45.png","43f2c2a743dbbec0476dfd31ac8c0bf1"],["/image/电力电子5.jpg","25ab8d4289289fdb21c7589cac3e8720"],["/image/电力电子6.jpg","cb2ee31e6401e83262e60c37f7d2a740"],["/image/电力电子7.jpg","bbb94d33ccf3c57c41daa0dd7371d877"],["/image/电机学01.png","3f49af06ee9c8687482fd9edb9787663"],["/image/电机学02.png","dc063068b9f5fd9b58559d9d9ed1d08b"],["/image/电机学03.jpg","337968c679c00d1f89a49162a504a27b"],["/image/电机学04.jpg","b37f833e1411adcb7d91d5566ee775d5"],["/image/电机学05.png","44932659c48e18bfbd369fa3d4d4caa8"],["/image/电机学061.jpg","b6bf1d9c1e6ebf720e21bcee5b2dc83f"],["/image/电机学062.jpg","664a73416d2979cb36dae520dd868f18"],["/image/电机学07.png","e1f66f60c1dc37269d4f2afe8bce708b"],["/image/电机学08.png","9af65712159d38bc776e97499473807e"],["/image/电机学09.jpg","91a1ca70ba2a88c4f9838939342ab2e4"],["/image/电机学10.jpg","612f1c7acd4bdc0362e335225d07a9e1"],["/image/电机学11.png","6cb3acb71e0efd87177d9f20f5f63e25"],["/image/电机学12.png","be1626a204ec98438b78a482e3f91aae"],["/image/电机学13.png","ebd09894065d75ec63c023a860d8cc15"],["/image/电机学14.png","48f39984105d2b06f2a4ba129aff10d7"],["/image/电机学15.jpg","2b45d3a2d77892bcdddeb5b684c7c9a3"],["/image/电机学16.png","48fd944ad7d0825a71835b1cdaa5d17d"],["/image/电机学17.png","d8ee49d462c1a853057df5386fa0f645"],["/image/电机学18.png","4cea855f51cb61b266735a04fcca1d5e"],["/image/电机学19.png","6f15b2163c46f9e9b10a0e61923bb420"],["/image/电机学20.png","59992fbc5eb799b5d165d4ec98bb54ae"],["/image/电机学21.png","7bf77095bf2ed8896ba4b16967cbc282"],["/image/电机学22.png","4c0a035e954f77222321760de395e6d7"],["/image/电机学23.png","9a8d87467989c0e4133446c9a21eba8f"],["/image/电机学24.png","3799323641b67d48097f9b9468090d49"],["/image/电机学25.png","4334d8858a568ca24585df5149cd30e7"],["/image/电机学26.png","f97cdc941bd62bdc5fddac4151811476"],["/image/电机学27.png","916c21b83938e58654777fd23302664c"],["/image/电机学28.jpg","0446e69706164f54fd59636a4a12d527"],["/image/电机学29.jpg","df2ca9a6512308dbcc35a14f716e38c5"],["/image/电机学30.png","56d94c65bbee276495a024a61bc41ade"],["/image/电机建模01.png","874be08ee0cd6e68e5c613d24892ae31"],["/image/电机建模02.png","e21b1101a6d531b743931f3292fe9d49"],["/image/电机建模03.png","c5dec810571ecb1c2720df60f9313566"],["/image/电机建模04.png","7fb882bbdb63d5b3b2abbebe982316e0"],["/image/电机建模05.png","10a6b59748347882a01bd76ef60aebcb"],["/image/电机建模06.png","1b78932ad7b12c5df413f7a8b58ce0bb"],["/image/电机建模07.png","6fd4c85145a7925abba72692a50aafb6"],["/image/电机建模08.png","0d1f59eee4f80a220212c76b3d0cea5f"],["/image/电机建模09.png","b5c2804e108e53394d8cd37867ab8717"],["/image/电机建模10.png","4b8f80ea263406120d0812db30cce7dc"],["/image/电机建模11.jpg","1a2bff83f3ebb7ce3d57519289ec5524"],["/image/电机建模12.jpg","e8d2f8f17ee072d5c4971781265499b4"],["/image/电机建模13.jpg","4a8f64b4a967769476b7c5b5e874be4e"],["/image/电机建模14.jpg","84cbc3d1e4c9fa6b8ead35fa1def3ad8"],["/image/电机建模15.png","01a07472ad6edf1fa94d243cab484aed"],["/image/电机建模16.png","a94b29511b6c4b4b968537063f5f1126"],["/image/电机建模17.jpg","e0febb58d986c153a00728fa807acba7"],["/image/稳态01.png","9f2a6e07e65d92c8bdf757a5c337788f"],["/image/稳态02.png","b48de9e7efd9729ae02e0bcaa976aa83"],["/image/稳态03.png","7be50f391f9ce6ab4a13957dbb811a19"],["/image/稳态04.png","00e3cc0395924254f682d024ebd69903"],["/image/稳态05.png","00660123359ce987fbccb9bc655fb31f"],["/image/稳态06.png","180cdf68314cd61c78960d45eaffc4b0"],["/image/稳态07.png","e2d4b03b9e33ece47d3561d8f9a90889"],["/image/稳态08.png","2231594c50d129b7231efbc6fb4cd33c"],["/image/稳态09.png","5dc8ef6b120d60b843337a307ba81618"],["/image/稳态10.png","7d4bda525065f05e9b66f6c58554bdae"],["/image/稳态11.png","3ba04e08776e2cfe64da04c2470fd169"],["/image/稳态12.png","db9c958273bdacba60206ceca887b456"],["/image/稳态13.png","862a0c5fac683d9014865cd571bc97f6"],["/image/稳态14.png","f2a461c72e864b49312282b78cb3c131"],["/image/稳态15.png","d601f012f52c75842190a2a1001e0633"],["/image/稳态16.png","81195fc30301c15ba580845837a4b290"],["/image/老八.jpg","c723c89aea1e9610b77956e110f118e1"],["/image/跑马的代价.jpg","6d7b382bbaeaeb50a5a0521a61d0bd25"],["/image/风雪1.png","f34c6e18c2bcc0236d90e9d6cf4cfc31"],["/image/鹿.jpg","70179521b2b1736457a364e1bd1d5cf5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","560e6ed06d85098c342154cbfdcc6273"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/link/index.html","33913da1930cdbc4eae9a995759d7651"],["/main.js","978a71af793986c2d10c028a631d5435"],["/myfile/电机系统建模与分析.html","39c557e810182ee13e05ba785cd80078"],["/page/2/index.html","c55ec115b90da6d1c3e89c64ab96b07c"],["/page/3/index.html","80c8da866492b2efc5ace19045a8b9e9"],["/search/algolia.js","13392c0cdd38efb391589b88d4979947"],["/search/local-search.js","4617b4d9c56688b4376e7c6f50b3674a"],["/sw-register.js","c30f9d71e4f1aaac8dcbc4db6c0e8f71"],["/tags/ACEE/index.html","cbe614d43491b91b3aab5ad0c8968034"],["/tags/AI绘画/index.html","9e1f81aaeb840063666286cf1c562d68"],["/tags/Hexo/index.html","c25204b08efacc42805614401a82b784"],["/tags/Latex/index.html","a359017dd052f5f7bac31c3ed6f4840b"],["/tags/Markdown/index.html","07f122534af7b035fd206cabf30b0e71"],["/tags/index.html","6b1221f9f14fe59a710ac940eaaaa1b9"],["/tags/大三/index.html","d0a506e623adbeaf9913d3c389177925"],["/tags/大三/page/2/index.html","1e9bb4f1b5915a5eb69f196f7fb8382d"],["/tags/大二/index.html","ae5b74e0872333e356c98f712b237d69"],["/tags/大四/index.html","bac3d1d4cc552168f1e8fa2a8f299ab8"],["/tags/微机/index.html","9139865239272070aa5f74658633043f"],["/tags/教程/index.html","78481778d1d07192e92d3c342601c128"],["/tags/有趣的东西/index.html","6be64c91cca06585f5d0badb98024575"],["/tags/电气/index.html","28389333c532cf07446ecff362ca1479"],["/tags/电气/page/2/index.html","7fd0c148385c1ab135ee14e3823d687e"],["/tags/研究生/index.html","7cd15a93b235209d5fa6d065174c294c"],["/tags/笔记/index.html","3ddaa9a7942c8d2a28eb2d33d7d4d313"],["/tags/笔记/page/2/index.html","8837c1538399ea8bbfdf500f099914da"],["/tags/编程/index.html","61bed875adf104ac839ead2721a6c08e"],["/tags/课程资料/index.html","cca44cea730bfb7556ed5ba69717748a"],["/tags/随笔/index.html","8e20e7a28336c2c2b281c7397a41cfa3"],["/tw_cn.js","c0d74f703ad286f1601aacd5edce5edb"],["/utils.js","64d575832a912566569701d53b678a91"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
