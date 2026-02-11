/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/09/24/hello-world/index.html","0c74eb8f84e7a5e82dc4e6715a380f0a"],["/2023/09/26/FDS/index.html","e56ea051e38fac506453e05fcbbe7ad2"],["/2023/09/26/工程原理/index.html","d51d3176ee3e6f4ce3bd84cf432b9f07"],["/2023/09/26/理/index.html","ad876504ec18127fa799075f0302decb"],["/2023/09/26/电气学院大二下课程汇总/index.html","df8419d2b4d3baa0d47c0124254fd4bd"],["/2023/09/27/Read Me/index.html","71f86b27a830f972eac0f266f8f45e8b"],["/2023/09/27/大二上答案/index.html","3732597a5fe156c549a6762025cb6087"],["/2023/09/28/微机原理（DSP）/index.html","81933724a6a5f62b8e6f9ddc604e9ba1"],["/2023/10/02/AI绘画/index.html","0ea5a858c3b4bee56176b4e18fcf87fa"],["/2023/10/06/双足机器人/index.html","8147816418b54800e701fbee242a5ca2"],["/2023/10/07/电机学/index.html","8d4d3495942573737fb92b6cdf0f3197"],["/2023/10/10/电力系统稳态分析/index.html","e25d3def941931e4306a6f44e7e22218"],["/2023/12/05/控制理论/index.html","4c4f2fce70a4b6384a59a95d76d87bb3"],["/2023/12/27/微机原理课本外知识点补充/index.html","0f9653778ffa6582ee383c1ed8f14aff"],["/2024/01/15/大三上课程总结/index.html","d697ad89c9594c367c11950c7ffea151"],["/2024/04/02/电机系统建模与分析/index.html","096d796bd6815c0e9aa170439de42174"],["/2024/04/18/电力电子技术/index.html","4d78076b8cbfcce48c831fdd82a926cd"],["/2024/04/27/运筹学/index.html","511e4df109468d39edf25adc0a810bed"],["/2024/06/11/电机控制/index.html","21c739fcc5cb469cd43fe93aa6a04255"],["/2024/07/09/二月十三/index.html","df73cb4c29040f0fc936a7f2b8f7c2e5"],["/2024/12/13/电机工程创新实践/index.html","6c07ed7b86efc4a093ad1a10b65eb27d"],["/2025/01/02/MATLAB面向对象编程/index.html","8179be877084dcf339a8323a29446169"],["/2025/01/13/基于Git和gitee的协同开发/index.html","1de452596b8e66e8f5b302fb8c1252a2"],["/2025/06/26/latex教程/index.html","3ac134f05f15cd03bf6f98f70b8d3aa2"],["/2025/11/02/现代运动控制策略/index.html","ebf518f9d90d0357cfb0bb742694322d"],["/2025/11/06/交流电机调速理论/index.html","7fb4ffcf1092ab3f912e34d91a02f801"],["/2025/11/28/AI入门/index.html","1baa54250cb5fcb3bb9b48cf83a933ef"],["/2025/11/28/投资理财/index.html","02e76c41a65d7cce11c51819531bad4e"],["/2026/01/09/动力与电气工程工业应用综述/index.html","fcd92dbe64b9a937e5b37dc13a96c9fb"],["/archives/2023/09/index.html","e1bedf9dfe9ef05cf17fa78358e401ba"],["/archives/2023/10/index.html","b43f8e19a660652663099ec52c9ac791"],["/archives/2023/12/index.html","d8be2c34fd05b0ba869465da355210ac"],["/archives/2023/index.html","f77ba1722caf43e26271b9773cd47db5"],["/archives/2023/page/2/index.html","867d49eb9d23a2b599fe0b0dd58d01c8"],["/archives/2024/01/index.html","715e97e4828cdee411a957707bd53038"],["/archives/2024/04/index.html","df9efed69350300554cfbdd51e2d002d"],["/archives/2024/06/index.html","fb8b6170eb35185b7c2d8adb50242c23"],["/archives/2024/07/index.html","b59c809d28d26e541b9c9ca9b4aeff13"],["/archives/2024/12/index.html","490fbaf9e26ec743a612572855b2ced8"],["/archives/2024/index.html","3d42acc51a50a2ab8c8868f3bb390c95"],["/archives/2025/01/index.html","b99df5d9f3dfc5e4eb304f959429de3d"],["/archives/2025/06/index.html","f3b2e9390081cf79172683f2a4d8f0b9"],["/archives/2025/11/index.html","134ebdbe5f1605dec619800cbc6dd29f"],["/archives/2025/index.html","14927375c7598529eba81b3ac0edd5c8"],["/archives/2026/01/index.html","b345a73a0e0308875784fff43f11f715"],["/archives/2026/index.html","2721c0be517c51506b115501e4daaec1"],["/archives/index.html","f83f67775efd2209733a99dec3b2ec62"],["/archives/page/2/index.html","e045bfa588bdb49f886ebc7f1e0d89f1"],["/archives/page/3/index.html","911cb1ba5ef9040fdd636853816ffe28"],["/artitalk/index.html","08f461915e4de645b7dbcaf3d21a047b"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/index.html","438b7b2e5e86de9ec552c881df75b2f7"],["/categories/投资理财/index.html","1137787e6b18075451905027c1b83dcf"],["/categories/课程/index.html","09c0d0b9fcc2acb15fa2d327dd064e2e"],["/categories/课程/page/2/index.html","6f66195ef67cf658222e3c9d24ef538e"],["/categories/软件教程/index.html","f6b74a35bf618d628951ff5501a1fcb3"],["/categories/随笔/index.html","92630b915464b9f375157b7730c5f5a7"],["/css/index.css","03f34c81be8b45d30e1c96b542f95dc2"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","f01a26a18cffa45a6c410fc212dce045"],["/gallery/new/index.html","d03cf4ac73a53fa7ef5f06aa0993798f"],["/gallery/new/top3.jpg","a1538ebc5ca84421defcb7d923be3fe0"],["/gallery/new/微信图片_20230926180015.jpg","3c4f09ba672ae0f5f5a181ccaee42e6d"],["/gallery/new/微信图片_202309261800151.jpg","7dacfd54927eaac7e6949d2fd8071731"],["/gallery/new/微信图片_20230926180016.jpg","b7aca2ab9b07aed0d252094ff9639406"],["/gallery/new/微信图片_20230926180017.jpg","1d0c6548d036a8ce4dba1c266df5a1bb"],["/gallery/new/微信图片_20230926180018.jpg","3ad4e7641e3de6bd9da6ad9ed134a3d4"],["/gallery/new/微信图片_202309261800181.jpg","c79a8076e4b075ec6d7187f78d5f76a1"],["/gallery/new/微信图片_20230926180019.jpg","d547f4f8607e8fa1cab910bdc4ff693e"],["/gallery/new/微信图片_20230926180020.jpg","699f01d51f9271c0677ad8a2769ef1f8"],["/gallery/new/微信图片_20230926180021.jpg","58e07b4c15d1dc1cb2982a8fa3653197"],["/gallery/二次元/index.html","64fade86806ba7060dbccf640d8268ff"],["/gallery/二次元/剑冢1.png","6ea890717117ce7288aee13f8481a19f"],["/gallery/二次元/剑冢2.png","9db9fa7ac3a89074bd71aed470dfccd4"],["/gallery/二次元/剑冢3.png","b221374c2ecb57fb3ee734f8f4dc5d33"],["/gallery/二次元/剑冢4.png","296742bfbd902165c16815f5be5da27b"],["/gallery/二次元/剑冢5.png","5198db4d63d1e0067e3597e14ae68465"],["/gallery/二次元/嘉然1.png","ca4be511f6a5f023691e9c95b5fd496c"],["/gallery/二次元/嘉然2.png","7913428326510924efed5b37e5355445"],["/gallery/二次元/嘉然3.png","605003a45e44b07f90fe20e76fad9ff2"],["/gallery/二次元/嘉然4.png","8f7764f1ea875744759a50ad3067a07a"],["/gallery/二次元/机甲1.png","fd5991047e49fc34d21d7ee5320415d2"],["/gallery/二次元/机甲2.png","4db82c59a42031ae531dc0db7f560971"],["/gallery/二次元/机甲3.png","9434c151b3e10e8176be642d7d39561c"],["/gallery/二次元/机甲4.png","bebb04c6d4419f5d234eb5043cb01d6f"],["/gallery/二次元/机甲5.png","0479ead8c8779439d93144a11527edb9"],["/gallery/二次元/机甲6.png","68a6a9f1a861f47eb1c6bef1f8ef0c1a"],["/gallery/二次元/泳衣1.png","4cabc2d61866b709f85c145ae3ee2e30"],["/gallery/二次元/泳衣2.png","33fa6faeb7cf25256afaf30b350d4d97"],["/gallery/二次元/泳衣3.png","860e27447792d1549b3d96d6fe2a2365"],["/gallery/二次元/泳衣4.png","10368990ff4f51ee554b938eee25f371"],["/gallery/八重神子/index.html","2f5f7fc75ab1dcef5712376da17fad7b"],["/gallery/八重神子/八重神子.png","bca449c5839d6cc6206cb9dad07005de"],["/gallery/八重神子/八重神子01.png","53adaf32fed2a632a28bb054455f2410"],["/gallery/八重神子/八重神子02.png","e9232ea6cc250262d13979f0a1d5d36e"],["/gallery/八重神子/八重神子03.png","948d4a000ddb252dce447038f63a07d6"],["/gallery/八重神子/八重神子1.png","939bcd29cb6f26e9bdc7ba42e177a84d"],["/gallery/八重神子/八重神子3.png","8ee62f28da553bcdbc14e17f9a425aaf"],["/gallery/八重神子/八重神子_真人1.png","c6c56115b9bbc3037c9fe80715df47cc"],["/gallery/八重神子/八重神子真人版2.png","ab226983ce489fcf2af4cc601f1bf512"],["/gallery/八重神子/八重神子立牌.png","c52e044833783059d7e88b76c4df2123"],["/gallery/幻想系/index.html","7adc402366cc163649708ed6ab066d41"],["/gallery/幻想系/冥想1.png","7d1c6ea86e36a19a8a9787c4e41d8d51"],["/gallery/幻想系/冥想2.png","9ef5955b68a54d0ef3cf7b0b39e018ca"],["/gallery/幻想系/冥想3.png","1f821ef9bcf6d1d815793434b6d697a0"],["/gallery/幻想系/冥想4.png","cd08e7ecdd78670adab65560c3648a3d"],["/gallery/幻想系/冥想5.png","df0eafbae3e3326db27b7899ca4a49cf"],["/gallery/幻想系/冥想6.png","969db568606adf5242fce5a1443277d0"],["/gallery/幻想系/冥想7.png","3399ba17367b0009e816e3439d21503c"],["/gallery/幻想系/山崖1.png","dd5ec06e330b153f7ccad94a22296ef3"],["/gallery/幻想系/山崖2.png","72347fc823c93cadd084235b9b352ce1"],["/gallery/幻想系/山崖3.png","b2ce2b75591081cfeed3be30738114b3"],["/gallery/幻想系/山崖4.png","99dc238b8efd90cc7e27e2cf787b7f15"],["/gallery/幻想系/山崖5.png","03b18c445567315d9e8c23da106304a4"],["/gallery/幻想系/山崖6.png","5fb45558422e3f93e726760d65ed95ce"],["/gallery/幻想系/山崖7.png","4e680ef98e57a1e098d24b4e94fa5c6a"],["/gallery/幻想系/教室1.png","8120a508ebe181ce987867f655ad7a8d"],["/gallery/幻想系/牛仔.png","b7b1517d6f2ecb548715127088c93c4f"],["/gallery/幻想系/王座1.png","ca74fd6a9f80b94eb5aba57f5cbfd2e6"],["/gallery/幻想系/王座2.png","b4378c95d9172b1e136ffc84c657b7ed"],["/gallery/幻想系/王座3.png","25ae191c9af4e487304e15fce8ffd214"],["/gallery/幻想系/王座4.png","72d3db78ebf3546b0c7fe039fa39d58f"],["/gallery/幻想系/王座5.png","9661b8cd952ace6d02e2bbeb634197ca"],["/gallery/幻想系/王座6.png","84f29a8e5a07cd270b5deaee88ebc555"],["/gallery/幻想系/王座7.png","e26ca7745e776035fe6ef7a0aff8acc4"],["/gallery/幻想系/王座8.png","1434e4aa8d4ae96b9f2710a168f932f0"],["/gallery/幻想系/风雪1.png","f34c6e18c2bcc0236d90e9d6cf4cfc31"],["/gallery/幻想系/风雪2.png","fe06ad6e1d9590a2b9666821989effbd"],["/gallery/真实系/index.html","0d9854991ef46a881003727de781ebf9"],["/gallery/真实系/乌篷船1.png","7c17dcd134375be4db54a5d75ca73c6f"],["/gallery/真实系/乌篷船2.png","7f1feb73c834a05ac9e0a68ce2db1f47"],["/gallery/真实系/乌篷船3.png","e6502245f59285c3d6c2ef3f643af583"],["/gallery/真实系/乌篷船4.png","48645b60b5f74e06de86641202cf288e"],["/gallery/真实系/乌篷船5.png","4c0b3510104f01cec0bc7f6dd5a0ca70"],["/gallery/真实系/乌篷船6.png","106011dc84541d22e3230634a3dc85ae"],["/gallery/真实系/乌篷船7.png","677562f130af90e95cae57db1fed85ba"],["/gallery/真实系/排球1.png","363af34f8226a36ccdd024efd192927a"],["/gallery/真实系/排球2.png","54b2e895a728516afe85b5c501723caa"],["/gallery/真实系/排球3.png","dd07cd1ef33f5d115db336404407202d"],["/gallery/真实系/排球4.png","2b34a04920c17878a7a5134efad98c5d"],["/gallery/真实系/排球5.png","ac1d027413bfd39c209b0902fd03c526"],["/gallery/真实系/排球6.png","7912daddeaf84708354a88868bb97f1f"],["/gallery/真实系/排球7.png","d1bab602fb746a737267bf1fe3a55bb5"],["/gallery/真实系/排球8.png","3a9dda86b7515150007a76173b0d7c53"],["/gallery/真实系/排球9.png","98f3f21cab661caa79f51fdbec632e82"],["/gallery/真实系/教室2.png","caa548485d1f7f569c5472836de84e00"],["/gallery/真实系/教室3.png","50d0e18fdca88e26a1a68effee2a9e56"],["/gallery/真实系/教室4.png","45fb8d06dda574f672ca0cb29ce2bf61"],["/gallery/真实系/教室5.png","064ecee888d02d1f9965128e08ae4642"],["/gallery/真实系/教室6.png","424f7c365ae3ede722cbedcffb4b810a"],["/gallery/真实系/教室7.png","90eb1c3ac41bec7e9a77831611397a49"],["/gallery/真实系/更衣室1.png","0eb0f1d62fb03535e2beb6fe0db05eff"],["/gallery/真实系/清新0.png","1b17f378c786d97039db5a48c4ef6541"],["/gallery/真实系/清新1.png","979195910d0e84185d64a86f10295f07"],["/gallery/真实系/清新2.png","efccce3f304f42e6f4b10bf5127fc183"],["/gallery/真实系/清新3.png","7d952b2ab4c0c8f7c22bc6386002782c"],["/gallery/真实系/清新4.png","b1abd7466a4e6184391d6bde75f1300b"],["/gallery/真实系/清新5.png","df0bd6cba8e6c84190991a39f09fa6bc"],["/gallery/真实系/清新6.png","2a583ac4f151c2d255ad876270973afd"],["/image/Back_Li.jpg","ad000243b1dd6dfb94b5254a5e95dce0"],["/image/Boki.png","a13b9bfdbe5198c37547d30e8ee5548c"],["/image/DZ.jpg","24e9268042ba6f938dd64f7cd5d1ba8a"],["/image/FIRE.jpg","f1651cd7103e46d66bf6686752f65ccd"],["/image/FIRE02.png","6ed7ad2c76ae140603cbb52ef4b0a0f5"],["/image/FIRE03.png","6ed7ad2c76ae140603cbb52ef4b0a0f5"],["/image/Fufu.jpg","ef74a654b5f2764fd501e3464fb64c70"],["/image/LLM01.png","69f40359f513c4ba24d0a6c72c49afff"],["/image/LLM02.png","15c6731a037cf921601c7a2de129ccb4"],["/image/LLM03.png","b9f5020be8c5d9097a24b777c9bde7e8"],["/image/LLM04.png","80b1ad10851d01467baaff1496a38321"],["/image/LLM05.png","b7e5eb02f06ad99197e24312a1d7272a"],["/image/LLM06.png","7892a253deaed270b6633be27da42068"],["/image/LLM07.png","243186ffdc74d40e6293225d8fa4b957"],["/image/LLM09.png","9b8c9c65663494db9ca64964dbd7a63a"],["/image/LLM10.png","d62125931b8632ffdcb6265f2c53d313"],["/image/LLM11.png","ea641eda843da6bc904fd62b04eb6e45"],["/image/LLM12.png","281a501184a23dbafff7c3fee027b0c0"],["/image/LLM13.png","8ff6e0a0b40c439cdc1d9d51511a1e9c"],["/image/LLM14.png","ff3da829bcce7a1b169f3b22380ef9b3"],["/image/LLM15.png","9c820488f1be0141ad6956107f261a2d"],["/image/LLM16.png","fdc8097dab345ed2a6f4a42ffed1a1a6"],["/image/LLM17.png","8e057bb1585a6e4a3d63a94fb95b1d0c"],["/image/SE.png","9bc31dbc1b3b6cae37177477e55eee8d"],["/image/Saki.jpg","c5c7e54a86ce6f5e28c1dbe7a794589d"],["/image/after.png","3190145c54c24a9416b16686389e53e0"],["/image/anno.gif","4452d14f13e4b722eaeb92c7673e20e7"],["/image/apple.jpg","6d294cb9bfe80ded1caa52e31f93ef95"],["/image/before.png","d07a4934bc802c46e42df6cd1ef7b57a"],["/image/boat-4812434_1280.jpg","7ad1818263b366a44ebad9525522f1d6"],["/image/djkz01.png","b50fb22d911fd4f243bd30358ced8189"],["/image/djkz02.png","079e012c534d674a18a2a7c42938643f"],["/image/djkz03.png","4e979a3a5596b470170dfa3eefaf2ed8"],["/image/djkz04.jpg","c47c5b78cd900d6f9d85d3577017bc62"],["/image/djkz05.png","50c8d6bbc57b2136426301d3646a4e90"],["/image/djkz06.jpg","13858d721e6afad0a40a72bf37e0d616"],["/image/djkz07.png","1cb29a3f0a68825bf8941ada0e8dd367"],["/image/djkz08.png","7baebdbdf64f452a71b757133630a86d"],["/image/djkz09.jpg","5566e7b87cb1d58ea42cc0a7b102f3e6"],["/image/djkz10.jpg","fbafe5ff31e53114498b70a12c7a9598"],["/image/djkz11.jpg","8e7c9349e838ba4b7bed124d1dd931a8"],["/image/djkz12.png","e741d32e92191f8c85be73a02aed85b8"],["/image/djkz13.png","7c2ce1a60dbb096edacf633bae2014ac"],["/image/djkz14.jpg","473aa27ea0007c15e567f30038e8f84e"],["/image/djkz15.jpg","cd8789143ae8e03bb75003f278f0aa8b"],["/image/djkz16.png","a34f351fc2f17ddbc6507c6f5879a304"],["/image/djkz17.png","e741201280992a6a18595d984581f9da"],["/image/djkz18.jpg","c1cb4b0671a19da341e7e37c102cf558"],["/image/djkz19.png","4af955fc6b13ad0461fab44334a77094"],["/image/djkz20.png","a5fce02b554bac431a4cf82659b8eee1"],["/image/djkz21.png","ee2ef21191a78001ca759a86248ea06b"],["/image/djkz22.png","4251fcf84bb12bece9a6840e111b118d"],["/image/djkz23.jpg","65cadf72376dbe3160d2c28796f2d543"],["/image/djkz24.jpg","5eb1847eae2a1dbeb9e52c16e392a2f4"],["/image/djkz25.jpg","777508d7b9dfd3bd5e33d27f7cc35a3d"],["/image/djkz26.jpg","0d99825036501eb0d5ab05b5f1444925"],["/image/djkz27.jpg","3eaea4b0a0da7bf28a97df479abf672c"],["/image/djkz28.jpg","0993efd32e43d64ef785a1920027384b"],["/image/djkz29.jpg","e287496d481ae3b8ddb94c02bbe8fc4a"],["/image/djkz30.jpg","d069127c5f02fdcdde9a3308ce61aada"],["/image/djkz31.jpg","426a3ab188faa4067fd27064cbbc5724"],["/image/djkz32.jpg","7d48aa81a000bd848a51950e575a2e75"],["/image/djkz33.jpg","410a3ef5150fd4d2161fefb5e67652b5"],["/image/dog.jpg","62345ec83c90b23ea62edf409765e2be"],["/image/fpx.jpg","a72c977201fded2e9d6ae1babb92e4d9"],["/image/friren.jpg","28c3d73768a4e1a920c025745e464462"],["/image/git1.png","ec202022191aadafe8c645fe61dd1b18"],["/image/git2.png","a227e078fc5b2651109c26537dc40ac7"],["/image/git3.png","4339b802dd85ba6e5cf234af0d43dc19"],["/image/git4.png","726273ccd07d178efdfcc8c5a467beb8"],["/image/git5.png","be725047e7e9bb1a1deae3a6e1712785"],["/image/git6.png","4e4853291240aa719a822a491bc0bc74"],["/image/git7.png","36297258c36a899a0911c446b07dbde8"],["/image/git8.png","b04a37def3e232672bc042ad21e2cd88"],["/image/git9.png","7e59356aaf30d07d28d987b0130da313"],["/image/home.png","a85da99170b055efd32e9e8f1e594529"],["/image/hxy1.png","6821ad6f6b4e1528a08a9ffef07126a8"],["/image/hxy10.png","a20f629d02b96e99813afd7ad2f52747"],["/image/hxy11.png","103e41ca9b26639c867043b5fe8428a7"],["/image/hxy12.png","af911c76b515042ad50aaee9a5058573"],["/image/hxy13.png","caa77df128da3cc76a44e2615efa6ab8"],["/image/hxy14.png","f4bfc8b64b6d45db4088ea766ae4700a"],["/image/hxy15.png","3177b5330633a188104316dab1ffbe5d"],["/image/hxy2.png","cff87c8f010600ecaf9c0d11476901d6"],["/image/hxy3.png","c0340c5b914299557eedc7e7d200c08f"],["/image/hxy4.png","74f53521c8a7c954605c3eafda16c478"],["/image/hxy5.png","605d247cf749b8ca87218f150724bb33"],["/image/hxy6.png","0c59eeb7bd2e09ba7b6b9d1a47029cbb"],["/image/hxy7.png","ddaa176514c9b15cde97cb96e8d8e47f"],["/image/hxy8.png","dd4faa19ce146755fa8f5753185109c6"],["/image/hxy9.png","9e03bb338604bda7ed4ef06f5669a69b"],["/image/image.png","a3caab704217dd3ca09bd97c05e47dfd"],["/image/image2.png","6bfba846548470aaa0f4b54d4e115e66"],["/image/image3.png","aefcbc279e02d52c60449e044ec34add"],["/image/image4.png","c53999402fc0e71e2e9a66e8a0a4182e"],["/image/jldj01.png","5681df622757e0cd5da9f8d8e7949f0d"],["/image/jldj02.png","d4b759c3502e6953581a07a4c2456122"],["/image/jldj03.png","248e6793dd93e0f0dec57c7e76a8a301"],["/image/jldj04.png","5aa503f0e837f5d86564cf3a56dad43e"],["/image/jldj05.png","87fd1094652cb511582823258aebb22e"],["/image/jldj06.png","f066a446ed018c3c7a0d157d9ac6fc28"],["/image/jldj07.png","9f04e0e3e67c270f9def19ee4cdfe6d1"],["/image/jldj08.png","a1a0b0ef73fb14746d0a44bd28a49c5e"],["/image/jldj09.png","e940dc18a11a58d7eb6230931b65710b"],["/image/jldj10.png","39ad3bc75bed023ee329ff59bd623fc4"],["/image/jldj11.png","0172ed15bd56c6ba85a03bbb9f0fbb4e"],["/image/jldj12.png","2f8e29072e992789ebc96a21532a3708"],["/image/keyan.jpg","0cd6c86f5eade32cea7d8796f2dd36fc"],["/image/latex01.png","e571b41e332af461431e74946582d24f"],["/image/latex02.png","4519fb704c7eba61ec8c69a50bfd13a9"],["/image/latex03.png","4e0cb321c221fb32cab68378b86b9d4d"],["/image/latex04.png","93cd9af41c8026bdfe49b125088752c5"],["/image/latex05.png","62fee820d5a89e1e444caa6e63ad544b"],["/image/latex06.png","44948c85cfa93e06ae8e14b06ebf318b"],["/image/latex07.png","ecc5037a6d7c0b260efdf1d982df9189"],["/image/latex08.png","371dcfc91b964470d4a4034c64737b0b"],["/image/lyy.png","af51eba79b815166769065067acb8f8b"],["/image/mygo.jpg","5b89adafb5d1c1eaab595df779aa233f"],["/image/qsc.jpg","8a868dbdf9c9087281def3741aaed590"],["/image/s1.png","12dfc7b2ea54a66f438f65705a5267ab"],["/image/s2.png","14537f57bfbe8a4f0cea077a80cf9ac2"],["/image/tanlang.jpg","d0ab98c0b61f24e5e503a1c1622ee5a0"],["/image/tmpjp_dhaa1.png","6443140fd584168c04daaa0d66ee924b"],["/image/wyVe7uLQ_400x400.jpg","5be338987df9e1da27e1b1e57b7e6836"],["/image/xdyk01.png","7258253de79dc4fddc90654e7173d730"],["/image/xdyk02.png","4b6949672a7bf54507b89792401a5d9a"],["/image/xdyk03.png","ff5b7fe9eadb9c23fe91f5a7f38f9bb3"],["/image/xdyk04.png","14d6dc88991d4a92df7601862178f06c"],["/image/xdyk05.png","a2eacc4f5cfd87e4b5d77ad6421b985d"],["/image/xdyk06.png","ab5df927f7aee86e01df011cb57704b9"],["/image/xdyk07.png","06fdaf544dd0b723b65513271a4cbc04"],["/image/xdyk08.png","f5222832ae695cc49395448bb52e02fd"],["/image/xdyk09.png","9b928e2a3605b5c44c9b9fe82bbdc3a4"],["/image/xdyk10.png","23482c200e2564cdfac470ba022300c8"],["/image/xdyk11.png","2f365ed1931309ff32f15e1c659f2020"],["/image/xdyk12.png","140ac09d83fa4015a59fde68bb0f0402"],["/image/xdyk13.png","5576ea77722420873ecb581c980d18fa"],["/image/xdyk14.png","11c1518b6b6348eba0e78694018f4e41"],["/image/xdyk15.png","41a617d1e9b7cfe85e66c936b8056625"],["/image/xdyk16.png","e0fc41f81e5d95f38500f48fd2be9805"],["/image/xdyk17.png","a486b0efb937888a31b702b92788eac3"],["/image/xdyk18.png","8860e531aec5313b9ea13d91c4964d5e"],["/image/xdyk19.png","837bc905b8d2f658eadfa02360d7227a"],["/image/xdyk20.png","0996d903d72932691bc9eaf53bb847ae"],["/image/xdyk21.png","05e5c8aed793c2e52b75dc27aa9f2beb"],["/image/xdyk22.png","01cfdaf9445da084b8945bb6283b8b02"],["/image/xdyk23.png","4b9c4ea49f5dee05c7dcd8499069ec8f"],["/image/xdyk24.png","8d545bd4c70622d3e2fd8d278f355d26"],["/image/xdyk25.png","d93c34bc9ee7a8e62e8926bd508b29d9"],["/image/xdyk26.png","4e17bda1ed56e4f3e89d597b530a4e5e"],["/image/xdyk27.png","0b7a7eca3bf8bc529df6799e45063c06"],["/image/xdyk28.png","2c9c2200e9f1a096a654673851d99827"],["/image/xdyk29.png","f03f4d1a02272f71338b68291d2011c7"],["/image/xdyk30.png","2c5aaeaad6989ecb5bf78acb08ee5957"],["/image/xdyk31.png","985fefa8e0e0100e66704cacc022ced2"],["/image/xdyk32.png","733b1e720f78cf6af7b537054a9612eb"],["/image/xdyk33.png","ea4c5cb235a8e9b21aa63dac561cad2d"],["/image/xdyk34.png","921a8d6dbec837e89ac76b896ed34d4f"],["/image/xnzb.jpg","1a2f22bab9adb0185380c0473bf8a98d"],["/image/zjutop3.jpg","ebc09589d47a1836790ff59525b9680e"],["/image/乌篷船4.png","ba51e35721a99612dc5cbfc126e117c3"],["/image/八重神子立牌.png","09df9f1235b574deb94c7e4e2d46e065"],["/image/农夫山泉1.png","c6f6ce82efbcf20b950e08a91a5e4aa3"],["/image/农夫山泉_Deliberate.png","f55cd9dcdfa82f71565a8ae28ab1f365"],["/image/农夫山泉_DreamLike.png","b3f07b4ef55b129d11ea42809ff8e553"],["/image/农夫山泉_LF.png","da0ac2df14af9b3d1427b187710e9c3d"],["/image/农夫山泉_NED.png","9e7b432837a6311891e90b8936a826e9"],["/image/农夫山泉_NED2.png","5ada496bf3df78d1b42fb0a1e957f27a"],["/image/双足01.png","427b414718bd35d51e149b10616d6f0b"],["/image/双足02.png","34dcdaed8c09fc85d287c0f09294d35e"],["/image/双足03.png","39109472be8f92014339adf393233685"],["/image/双足04.png","111005da258cffacdef176348ba696f9"],["/image/双足05.png","0cabd324bf9ffba8b4e93363275d5d7a"],["/image/双足06.png","c8cbb72ba6e81ac5ff166f55b9db8238"],["/image/吕布.jpg","1979df00c8c0041b43990c7d0a861e16"],["/image/圣诞.jpg","79e80e132770996775047b0c438edbde"],["/image/奖励.jpg","c9b1c24bc097de7f73f87091cf230595"],["/image/孤独摇滚.jpg","3bfc2cde9111c36e71d0fe0eee67d3dd"],["/image/封面.png","39c25ed847ffdccdc422eaceafd8af81"],["/image/微信图片_20231002123148.png","ae2628ad02fb067f0e5527e0f0746222"],["/image/微信图片_20231002125925.png","f584c4445dddb485fff59087031f0db4"],["/image/微信图片_20231002133105.png","af61509480ae151d32dba46313f6e616"],["/image/微信图片_20231002153828.png","fb5a5a319416d82fe018c3001bccf35c"],["/image/微信图片_20231003143640.png","5b9c3d5d8b0627805aa0c2b5a82dbb24"],["/image/微机01.png","3635d1c19f3de52ab76223598399a542"],["/image/控制理论01.jpg","9a21287978bb75c3477a6ee2ae0b7830"],["/image/控制理论02.png","db0be64f5901c9eebcbe506b2def8e15"],["/image/控制理论03.png","02c21420d7c83d0d2f841e5c00b9f151"],["/image/控制理论04.png","05b2b9db593cd8dc72a6b9c0c1599266"],["/image/控制理论05.png","12207306c024e5446380a71973e49be8"],["/image/控制理论06.png","cf60631cfc39757541c5988dabecfcf6"],["/image/控制理论07.png","88d4f948a52bb5d84797aa4f74cf0d23"],["/image/控制理论08.jpg","35768ca8a60b53e0cec700f8e848f30a"],["/image/控制理论09.jpg","bb777acb2b8cfd2f7f1288681513e419"],["/image/水母.png","4ef7160929f7cefcf82eec5d4c8bead4"],["/image/求是大讲堂.jpg","433d2dbeda920779837eff94982a08d1"],["/image/现金流.jpg","4a8a45187956e33d066b302c1384ef9d"],["/image/电力电子01.png","f1ce050c8fbabd3fc2c05759bafdc9cc"],["/image/电力电子02.png","0c130771f8b64f130399d94f6da6f1ee"],["/image/电力电子03.png","3e50a530348d50fd990447cd33d57e12"],["/image/电力电子04.png","a5c9d0bac597e1db52de4bb15e9f4167"],["/image/电力电子05.png","fd7e3906072004afbf93de950b00a824"],["/image/电力电子06.png","66563ff708afc9f9cedd234918dd6815"],["/image/电力电子07.png","c055a1789b80db3d174e907faa134c48"],["/image/电力电子08.png","7e196ea686490bd651769218f0624692"],["/image/电力电子09.png","e8ff6919427edcd809564f343fb7789d"],["/image/电力电子1.jpg","d3b5f16cf97fbc478d77bedf4176ff87"],["/image/电力电子10.png","38986ec211626d9240c800a8596d5a16"],["/image/电力电子11.png","c0d766251b80979ea8154b83084048c5"],["/image/电力电子12.png","0e7dcf5cec310525ad870bbdffcb5ea3"],["/image/电力电子13.png","f5378dca0beea85e787be78778cc71dd"],["/image/电力电子14.png","e43121ed53b0098a2da267ffa96c57a7"],["/image/电力电子15.png","8f296f5cc1a00b7e999e7ed925a06377"],["/image/电力电子16.png","1313324b10a6e48d9d18034da12fc3cf"],["/image/电力电子17.png","8eb7b3470f1aaa4f63f248b7a51d9f4b"],["/image/电力电子18.png","fdbfb495a60b5c7892faf2f46df9bd47"],["/image/电力电子19.png","076385bd0386daedb767547cf3564cd0"],["/image/电力电子2.jpg","49d6f716c2dece9b2cbc598bc6567149"],["/image/电力电子20.png","26d3110d1239dd3a11a6cb5fb575e20c"],["/image/电力电子21.png","0342a98ad41e7524ec2db44dcb62172a"],["/image/电力电子22.png","efc90e1caaa79513e5692b3d20209917"],["/image/电力电子23.png","203dbcfcce3afcd9cac635738bbe0709"],["/image/电力电子24.png","256e0a84751a4fb1af2637fef610a60c"],["/image/电力电子25.png","e673a0ed385e0a0db96f7c6463e0d015"],["/image/电力电子26.png","8f2207f1805f7343bc464f174f4e11ae"],["/image/电力电子27.png","2c6b13e98326deebb57f2c8507b5dc76"],["/image/电力电子28.png","e92463f12217134ad914b40ef0167322"],["/image/电力电子29.png","3e3779d4b3f0657c19f42ca5a43948d0"],["/image/电力电子3.jpg","06961cda2dbfde66791db94da9447ff3"],["/image/电力电子30.png","cc51cadb494a1c2baa6d73f9d9f5ad11"],["/image/电力电子31.png","b7f744a36d057aec7a18ba819f4e7bad"],["/image/电力电子32.png","5c97a9477f7b426f0deadca9bdc776c6"],["/image/电力电子33.png","8f36aa1ef8b1af327b3000db612af2d9"],["/image/电力电子34.png","f4afd32b33442c28cb0024ebec499221"],["/image/电力电子35.png","5026eee46867af0faa0aef63939c3f5c"],["/image/电力电子36.png","3e77cdcae6c1d2b4a06d6dec06e92947"],["/image/电力电子37.png","b4f434d23a12b28619e88c2d2bcd79fd"],["/image/电力电子38.png","7cf39119baf342f68e89fbdd942b8d83"],["/image/电力电子39.png","974e2a46c881508587a9a5533e51a7c2"],["/image/电力电子4.jpg","56c2af32c028856f862feb4ad8e78a97"],["/image/电力电子40.png","20c183f6f90f8c9fb1647dbcda5f2977"],["/image/电力电子41.png","499600570458e7628d9e01e28eb04734"],["/image/电力电子42.png","a329472ec0b803c55f68ab5fe9ab9d97"],["/image/电力电子43.png","9467118e1d2c1aed8551ec4f307b1759"],["/image/电力电子44.png","14252577b788e8f5bb84debc9599a086"],["/image/电力电子45.png","3ea06cbefb65a4892cbc94d841dbbc57"],["/image/电力电子5.jpg","c2b473c587ece23fa7d2700c402e448c"],["/image/电力电子6.jpg","8ddf88a0a92d6ea714f341850335e316"],["/image/电力电子7.jpg","c62ef189388f9e90f67ab9050d79308d"],["/image/电机学01.png","9307caf3cc41c84aa9de218f75fe3fd0"],["/image/电机学02.png","46513652cbc1ccda7ab388de6836de7a"],["/image/电机学03.jpg","5546490bcb7b4e79eff1b80e09d58dfd"],["/image/电机学04.jpg","aad0ac8ecc118c0db703aa670840ff1a"],["/image/电机学05.png","ef3fa97f1bb4cac8b66f29bcaef2d213"],["/image/电机学061.jpg","9ed26ba9e7cfaf6fd5fd7ef5386cbb0b"],["/image/电机学062.jpg","2400cb1e404184214ebbfba663e29225"],["/image/电机学07.png","247775dbce3ced14a3502f3186fe9626"],["/image/电机学08.png","35739c3527ad7f52e4dfadddcc16e488"],["/image/电机学09.jpg","70d526b0e24a153121a94745d0b52bb6"],["/image/电机学10.jpg","7e79464f3b95eb8bdc39d04e4d00f149"],["/image/电机学11.png","77ad22c115572ffdecb1aae413e3167a"],["/image/电机学12.png","36652777922d800b4ecffa0c51f78e2e"],["/image/电机学13.png","a41430b4cf7ca68a6cdde1cc5329ba36"],["/image/电机学14.png","636064defe522ec8f75efa0d42fb9f84"],["/image/电机学15.jpg","eaf0f1ab0854d55823d532508c940f17"],["/image/电机学16.png","4609c7c3433b88ed304417f23e0135f4"],["/image/电机学17.png","e933137ffabada4063752d6f3de8e1ff"],["/image/电机学18.png","7f6841d8b4f134dd67d7fa1e34550e0e"],["/image/电机学19.png","da8bea12d283ad845ece59851781e925"],["/image/电机学20.png","a3b24e24f422cbe9976b94dfdc40067a"],["/image/电机学21.png","5bca297415d876010cb6a51d61192bf3"],["/image/电机学22.png","7d2a6c743ab9339d00724546f73c5ad8"],["/image/电机学23.png","bfda7e2f8ea1ab3e2915ea755589a682"],["/image/电机学24.png","03e182f10a41146e994280f798a02ccc"],["/image/电机学25.png","ad7f3c3d9104721e4302184ed37818b6"],["/image/电机学26.png","0067dbd282d9a74dc6a4ab3e9db9ccb2"],["/image/电机学27.png","47e1bca5476cabc49fa3963e3fdb491f"],["/image/电机学28.jpg","d75dd6287a1278549f8286dad340bec2"],["/image/电机学29.jpg","833c76bc392517f42234bbeb3701e7ef"],["/image/电机学30.png","77826d747fed75976ac051bd22457984"],["/image/电机建模01.png","9231861abc8537745b5f65582623e070"],["/image/电机建模02.png","3f3c758ca42ba5908342e2d9563a92fa"],["/image/电机建模03.png","c4b69a689570fa259e76c214d09e2248"],["/image/电机建模04.png","ed2152fcf3f6e9ca2bdfb0c655ba1093"],["/image/电机建模05.png","ab15e804712c6a0e0c60bd32eea1bac7"],["/image/电机建模06.png","6fd850d5cad0bb97981cf48da940f758"],["/image/电机建模07.png","a5d9c79e7148ac756a2d1dc0b2567cb2"],["/image/电机建模08.png","d57ddde941b029d73d4465b44665ade3"],["/image/电机建模09.png","5f72903d70681b2d81c75dd58f212379"],["/image/电机建模10.png","022798d8fa129e09b45fccda6eec4626"],["/image/电机建模11.jpg","5ecb0554ed036bb8926e53301ddaa1dd"],["/image/电机建模12.jpg","ffe1f938a0096398cdcd28c02486312a"],["/image/电机建模13.jpg","38d7f999e278b16a7da6f34208834d33"],["/image/电机建模14.jpg","082d52e927e8988a6e9924e9f42bee25"],["/image/电机建模15.png","ffbdeb5eda78e1367ed4ba7ff7953476"],["/image/电机建模16.png","c57ff61de55d556efe014644d79253a9"],["/image/电机建模17.jpg","065e272339e5ac837f85906008f34205"],["/image/稳态01.png","8dc5396c17f0b6c782c3c37aa4a39610"],["/image/稳态02.png","6506b13a4ff10d34b2ab97eebdd07a5d"],["/image/稳态03.png","a65e7608c9305e8550eea255d6800b9c"],["/image/稳态04.png","5d778a44445c6611db528e198f462ec7"],["/image/稳态05.png","264d29c8089b0dae8da9c3ad018ab297"],["/image/稳态06.png","bd97fc7cea56b1f27afccb2f1dca35d7"],["/image/稳态07.png","b9df4fbd88348c449ab541319b76036c"],["/image/稳态08.png","0ba42104494223ac2824d36d7734e138"],["/image/稳态09.png","cad45f0f1448f3a99af0bb4182aac7bf"],["/image/稳态10.png","847cef29d8ef728546ed7f98d09b50eb"],["/image/稳态11.png","b141029e442a5179d459e90c2f54add7"],["/image/稳态12.png","3ca73d7d9e5581966f5577de4fa2f145"],["/image/稳态13.png","5645bb48520263709bd87faf27ba5238"],["/image/稳态14.png","58126381450dc8726bd74f8fc506dc6a"],["/image/稳态15.png","06860d04722f36c7338afcb68e885ef8"],["/image/稳态16.png","1de541e8917e320f8137538856d8a2b2"],["/image/红利.jpg","9ed4fafaf903d06900c117be5129da04"],["/image/纳指.jpg","0a85240e26059736135304da939237a1"],["/image/老八.jpg","c97487645ea03b281ccbbe73564a1d64"],["/image/跑马的代价.jpg","01d20f709167c72dd6490503a171ebde"],["/image/风雪1.png","6c400c8e87668fd52ae150d99cd8ee61"],["/image/鹿.jpg","9b450d4c367edbcae328ae90304835cc"],["/image/黄金.jpg","c3aa9585f91e4e503925d7de9fb7212d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","5c67654c67f62e5d74b24192584465b9"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/link/index.html","037e824973a71ce4cc84e0b6ca60282c"],["/myfile/电机系统建模与分析.html","d6fb6365e4ece0a6cf719944e882408c"],["/page/2/index.html","abe173c44ecbb189e40d8aad49623a20"],["/page/3/index.html","d0f61aed927a41faf36ab2136f1d2fc5"],["/sw-register.js","fbf1b1241f3bc3a2dcc0b99637051600"],["/tags/ACEE/index.html","0e29d566913c64543fd5916d5e00fe9b"],["/tags/AI/index.html","e665a5e3a8ce21502ce691a8fe9ed552"],["/tags/AI绘画/index.html","4dffec8820e0c4c00a48548aef02dd7c"],["/tags/Hexo/index.html","ed8e97eeefe973001517d044508b3b15"],["/tags/Latex/index.html","1fd3d4e0a16a1723017fd05b7d48c70c"],["/tags/Markdown/index.html","67e38c6f66c43d0301b26b211610f03c"],["/tags/index.html","5922547789cac398661d9fb2db88547a"],["/tags/大三/index.html","89c3e669cbb138b864e81f355c84c357"],["/tags/大三/page/2/index.html","970cafcdc31d884ca0f6a59fd8109c13"],["/tags/大二/index.html","c74574d40b581b322eddb2da39e79851"],["/tags/大四/index.html","78b24263231400aa1747d6142a8c1e58"],["/tags/微机/index.html","e5f0eb88b9ee3fff950718a8e2fa55eb"],["/tags/教程/index.html","6ae608030672819b0332b392ac550ac5"],["/tags/有趣的东西/index.html","cbf170569856cc61156427955065defa"],["/tags/电气/index.html","d5efb09adb75a8e8880bac621a854b52"],["/tags/电气/page/2/index.html","fc4ea2f4f0d53303e61a388567a03ebe"],["/tags/研究生/index.html","13b794a9f94dfd81b6683678b3018d34"],["/tags/笔记/index.html","2eef6d121fe09ba042f8f5da7cfda59d"],["/tags/笔记/page/2/index.html","bacc468b521d23f7d8ababe41b421f47"],["/tags/编程/index.html","b94375b41407b1bbb542df35416401f2"],["/tags/课程资料/index.html","4ee848a17ba2d9f3f593362b7e6bc4a2"],["/tags/随笔/index.html","0661b4b88d0dccdb21d03bc45a8f079f"]];
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
