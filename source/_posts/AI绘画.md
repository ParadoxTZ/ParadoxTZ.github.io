---
title: 纯小白也能变大画师？SD：AI绘画的神！
date: 2023-10-02
top_img: /image/top3.jpg
mathjax: true
cover: https://img1.baidu.com/it/u=161683432,2488264310&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500
description: Stable Diffusion：一个极其强大的AI绘画工具整合包
tags: 
  - 教程
  - 有趣的东西
  - AI绘画
categories: 软件教程

post_meta:
  page:
    date_type: both # created or updated or both 主页文章日期是创建日或者更新日或都显示
    date_format: date # date/relative 显示日期还是相对日期
    categories: true # true or false 主页是否显示分类
    tags: true # true or false 主页是否显示标签
    label: true # true or false 显示描述性文字
  post:
    date_type: both # created or updated or both 文章页日期是创建日或者更新日或都显示
    date_format: date # date/relative 显示日期还是相对日期
    categories: true # true or false 文章页是否显示分类
    tags: true # true or false 文章页是否显示标签
    label: true # true or false 显示描述性文字

copyright_author: Paradox
copyright_author_href: https://github.com/ParadoxTZ
copyright_info: 此文章版权归Paradox所有，如有转载，请注明来自原作者
---


# 引言

* Stable Diffusion是一个极其强大的AI绘画工具整合包（开源项目），大菩萨UP主秋葉aaaki根据整合包创作了一个非常牛逼的网页启动器，包含了版本更新、插件下载、报错检测等等，并涵盖了很多插件；而大佛祖UP主Nenly同学上传了一套极为详细的使用教程。因为现在AI绘画的行业还处在起步的阶段，行业内并不规范，因此这里仅以秋葉aaaki提供的启动器和整合包进行创作，更复杂的我也不会。在机缘巧合之下我才接触到这个神奇的东西，因为之前一直没有关注、没有实践，所以现在尝试一下纯小白上手，绘制出属于自己的AI画作。

* 相比于教程，本篇更像是一个个人使用的经历。因此暂时只涉及AI绘画的尝试，并不涉及模型调教（带佬可以试试自己跑一个模型出来）

* 推荐关注UP主“秋葉aaaki”和“Nenly同学”，以及这里放一些他们的教程合集。本篇博客以秋葉提供的整合包做安装和基本入门，加以Nenly的更为细致的教学。

---

* 秋葉aaaki

【前置要求】

一个流畅的翻墙软件，在很多地方，这个东西需要科学上网。

【新手快速入门】
全套入门教程：https://www.bilibili.com/read/cv22159609
快速入门生成图片：https://www.bilibili.com/read/cv22661198
模型安装使用教程：https://www.bilibili.com/read/cv21362202
2023年4月模型分享：https://www.bilibili.com/video/BV1em4y1z7Dg

【常用网站】
AI 作图知识库(教程): https://guide.novelai.dev/
标签超市(解析组合): https://tags.novelai.dev/
原图提取标签: https://spell.novelai.dev/

【细致教程】
入门参数设置基础：https://guide.novelai.dev/guide/configuration/param-basic
常见安装问题: https://guide.novelai.dev/s/troubleshooting/install
常见跑图问题: https://guide.novelai.dev/s/troubleshooting/generate
怎么写提示词？ https://guide.novelai.dev/advanced/prompt-engineering/
怎么训练模型？ https://guide.novelai.dev/advanced/finetuning/
最新消息: https://guide.novelai.dev/newsfeed

【问题速查】
- CUDA out of memory： 炸显存 换启动参数 换显卡
- DefaultCPUAllocator: 炸内存 加虚拟内存 加内存条
- CUDA driver initialization failed: 装CUDA驱动
- Training models with lowvram not possible: 这点显存还想炼丹？
- WinError 5: 建议重装电脑，或者等下一个整合包

---

* Nenly同学

{% btn 'https://www.bilibili.com/video/BV1As4y127HW',Click,far fa-hand-point-right,center,larger %}

【资料下载】

https://nenly.notion.site/017c3341c8b84a7ebb4c2cb16f36e28f

# 软件及插件的安装

​	这里涉及到两个，一个是这个软件（绘世启动器及整个整合包），这个整个东西非常大，因此建议找一个空的盘安装；另一个是非常好用的ControlNet插件，第一次上手可以先跳过这一部分，等把软件搞明白了再来看插件。**我暂且推荐用我给你们的百度网盘链接下载安装**，因为我这个已经做好了非常好的汉化、UI改善和更新，并且具有了绝大部分的常用插件，非常方便。或者是根据秋葉的整合包下载安装（秋葉神中神），当然你可以在很多地方找到这个整合包，因为他是开源的，但是这会给后续的使用带来不便。

## 绘世启动器&整合包安装

### 下载

​	因为这个东西迭代更新速度很快，秋葉的大部分教程可能都还是version2、version3的软件，现在已经更新到version4.4了。可以考虑跟着他比较新的一个视频来进行安装。

{% btn 'https://www.bilibili.com/video/BV1iM4y1y7oA',Click,far fa-hand-point-right,center,larger %}

或者我这里也有一个v4.1的版本，安装完成之后可以进去直接更新，效果是一样的。

链接：https://pan.baidu.com/s/1EIV7MvfHqQRMsJ8pAmUSMA 
提取码：72cj 
--来自百度网盘超级会员V4的分享

### 安装

以我发的百度网盘连接为例进行安装。下载完成之后大概是一个这样子的文件结构：

```markdown
sd-webui-aki
	|--可选controlnet1.1
	|--启动器运行依赖.exe
	|--sd-webui-aki-v4.1.zip
```

​	双击启动器运行依赖.exe自动完成安装，然后解压v4.1.zip压缩包，找到下面的“A启动器.exe”，双击运行。启动完成后如下图所示，进入左边栏的“版本管理” - “内核” - “稳定版”，点击“切换”即可完成版本切换。（建议使用稳定版而不是开发版本）

![](\image\微信图片_20231002123148.png)

## ControlNet插件

关于ControlNet插件的安装和使用，可以参考秋葉的这两个视频：

初代：https://www.bilibili.com/video/BV1Wo4y1i77v

v1.1版本：https://www.bilibili.com/video/BV1fa4y1G71W

​	如果你在之前启动器的下载中选择了我的百度网盘链接进行安装，那么想必肯定已经有controlnet1.1的文件夹了。其实就是跳过了初代版本的bag，直接更新了bag而已。

* 我这里好像默认提供了controlnet的插件，你可以在“版本管理” - “扩展”中找一下是否有controlnet，如果有那么就代表没问题，更新一下即可。如果没有，请参照上文的第一个哔哩哔哩网址视频中**第30秒至第1分07秒**的内容进行插件安装。

* 模型的安装可以直接参考第二个哔哩哔哩网址视频中**第2分18秒至第2分55秒**

## AI绘画，启动！

首先开启翻墙软件，然后开启A启动器，点击右下角的“一键启动”。之后会出现一个“控制台”，也就是一个类似于bash文件的东西。第一次启动所需时间可能较久，大概在2-3分钟左右。成功的标志是跳出一个网页。大概长这样：

![](\image\微信图片_20231002125925.png)

记得不要把控制台关掉哦~

# 文生图创作技巧

文生图创作是AI创作最基本的方式。这部分可以参考秋葉的文档：https://www.bilibili.com/read/cv22661198

当然，这里我也会用我自己的语言详细说明。

## 模型

* **Stable Diffusion模型：**这个是AI绘画的大模型，一开始进入应该只有一个叫“anything……”什么的模型，这个是一个有名的二次元模型，直接用就好了。如果你是官方版本下载，可能是一个叫官方模组Stable Diffusion的东西。在后文我也会介绍更多的SD模型，相当于使用了不同的画风、不同的创作手法之类，如果你是大佬（大佬应该不会看我这篇文档）可以试试自己调教一个模型出来（就是机器学习的过程），但是本篇不做介绍。
* **外挂vae模型：**目前你先直接选择animevae.pt即可

## 标签（Tag&Prompt）

* **正向提示词Prompt：**选择你想要的内容，英文表述，逗号分隔。比如你想要画面中有一个女的，就写`1girl`；想要画面以教室为背景，就写`classroom`，以此类推。
* **反向提示词Negative Prompt：**选择你不想要的内容，比如一般可以有如下类似的描述（提供了两个模板）：

```
 ((((ugly)))), (((duplicate))), ((morbid)), ((mutilated)), (((tranny))), (((trans))), (((trannsexual))), (hermaphrodite), [out of frame], extra fingers, mutated hands, ((poorly drawn hands)), ((poorly drawn face)), (((mutation))), (((deformed))), ((ugly)), blurry, ((bad anatomy)), (((bad proportions))), ((extra limbs)), cloned face, (((disfigured))),out of frame, ugly, extra limbs, (bad anatomy), gross proportions, (malformed limbs), ((missing arms)), ((missing legs)), (((extra arms))), (((extra legs))), mutated hands, (fused fingers), (too many fingers), (((long neck)))
```

```
lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry 
```

* **进阶使用：**以 girl 这个 Tag 作为例子
  * (girl) 加权重，这里是1.1倍。括号是可以叠加的，如（(girl)) 加很多权重：1.1*1.1=1.21倍。
  * [girl] 减权重，一般用的少。减权重也一般就用下面的指定倍数。
  * (girl = 1.2)指定权重
* **标签超市**
  * https://tags.novelai.dev/
  * https://ai.dawnmark.cn/
  * 进入标签超市，可以根据你的喜好任意选择标签（自己打的时候不知道怎么表述，这里就提供了很多标签和预制的标签组合）这玩意儿的使用非常简单，因为个人觉得很多功能都不需要，只需要知道最基本的几个即可。
  * 但是吧，我也不知道这个作者怎么想的，为什么感觉很多标签都这么变态啊…估计生产这玩意儿的是个技术高超的二刺猿宅男LSP，这我也莫得什么办法。

![](\image\微信图片_20231003143640.png)

```markdown
高标准品质：best quality, masterpiece, highres,
插画风格：paiting, illustration, drawing,
二次元：anime, comic, game CG
写实：photorealistic, realistic
Embeddings：ng_deepnegative_v1_75t, easynegative, EasyNegativeV2, negative_hand, negative_hand-neg, BadDream, Neg_Facelift768, badhandv4 （详见Embeddings章节）
```

## 其他

* **迭代次数：**不需要太大，一般在50以内。通常20~28是一个不错的值。

* **采样器：**采样器没有优劣之分，但是他们速度不同。全看个人喜好。UP主秋葉推荐的有
  Euler A；DPM++ 2M Karras；DPM++SDE Karras
  个人也用过DDIM，感觉也还可以。

* **提示词相关性：**提示词相关性代表你输入的 Tag 对画面的引导程度有多大，可以理解为 “越小AI越自由发挥”

  太大会出现锐化、线条变粗的效果。太小AI就自由发挥了，不看 Tag。一般设置在7~12之间。

* **随机种子：**随机种子是 生成过程中所有随机性的源头 每个种子都是一幅不一样的画。默认的 -1 是代表每次都换一个随机种子。由随机种子，生成了随机的噪声图，再交给AI进行画出来。如果你之前跑了一张图感觉很好，想做微调，那么就把那张图的随机种子找出来（图片信息），然后复制进去。

* 没讲到的东西少动点O.o

## 图片尺寸

* 请不要选择过大的图片尺寸，不然AI是跑不出来的。选择比较推荐的尺寸有：512×512；768×1024（或者再砍一半）；1024×768（或者再砍一半）。
* 有人会问，如果我觉得太不清晰了怎么办？可以选择一个较小的尺寸，然后开启“高分辨率修复”，其中UP秋葉给出的推荐参数如下图所示：（放大倍数自己定，别太贪心把自己电脑炸了）这部分在本篇博客后续章节“图像の高清修复”中会更加详细地讲述。
* **个人建议先选一个小尺寸**，这样子跑的时候就比较快。**如果跑出来一张你觉得比较好的比较喜欢，再点击后期处理**（我这个版本里是图像右下角一个三角尺的标志，叫什么send image … to extra tab；或者你可以在“文生图”边上找到“后期处理”），然后进行放大算法处理。
* 当然小尺寸也有缺点，就是当尺寸过小时，很多细节都会跑不出来，这高清修复也修不了。如果电脑显存够建议跑1024左右大小的。

![](\image\微信图片_20231002133105.png)

## 启动！

​	自己随便放了几个关键词跑出来的一张图，整体看着还挺不错了。（其实我用了很多技巧呜呜呜，尤其是AI画手画的真的是一言难尽，天天给我整出六七根手指）想要真正让他跑出一个好图出来，确实很难。

![](\image\s1.png)

# ControlNet美化

在网页的下方打开ControlNet，出现如下图所示的内容（具体格式可能每个人有差别，但大差不差，这里演示的是1.1版本）。

![](\image\微信图片_20231002153828.png)

​	下面的操作想必大部分人看名字都能看懂什么意思，基本上就是控制**“预处理器影响效果的强弱”**。另外，低显存模式（在显存不够的时候降速）和允许预览应该都能理解，完美像素模式比较强大，大致就是会自动计算预处理的最优像素，建议勾选。

​	这里详细说明一下各个预处理器和模型的功能。这个插件的功能就是，把你的输入图片经过某个预处理器进行处理，得到一张效果图，然后网站在根据你这张效果图的指导生成新的图片。

* 操作方式：根据你想要实现的效果选择对应的预处理器，然后选择与预处理器同名的模型，放入图片即可。

* 更加详细的理解和应用可以参考Nenly的教程：

{% btn 'https://www.bilibili.com/video/BV1Ds4y1e7ZB',Click,far fa-hand-point-right,center,larger %}

* 这里会着重挑选几个常用的、易用的预处理器和使用方法进行讲解。（任何一个效果在第一次使用、生成的时候都会非常卡，这是正常的）

## Openpose

Openpose预处理器是指导动作骨架，放入一张真人图片，然后他会根据真人图片生成骨骼，再根据骨骼指导人物动作来AI作画。如图所示：

| 引导图                                  | 骨骼                        | 创作结果           |
| --------------------------------------- | --------------------------- | ------------------ |
| ![](\image\微信图片_20231002160402.png) | ![](\image\tmpjp_dhaa1.png) | ![](\image\s2.png) |

​	不同的Openpose预处理器可以产生不同的骨骼图，大家根据上面的英文后缀或者中文翻译应该都能非常好理解，比如是否带上手部动作、脸部表情等等。

## Depth

Depth顾名思义，深度。在一张图片中，计算机其实并不能很好的识别空间关系，经常把他当成二维图像来处理。举个例子，在Openpose预处理器中你选了一张手放在额头上的照片，但是AI跑出来手放在了后脑勺上。从骨骼图上讲，这两个是一样的，区别就是手和头部的空间关系。显然，单纯的Openpose并不具备空间处理的能力。

Depth下也有很多预处理器，其中最强的是Leres++，但是相应的速度也会变慢。在空间关系不那么复杂的情况下，可以考虑使用Zoe或者Medas来处理图像。（比如上述照片，用Depth处理或许就能得到比Openpose更加好的结果）

| 原图                 | 深度图（Medas）       | 创作结果             |
| -------------------- | --------------------- | -------------------- |
| ![](\image\back.png) | ![](\image\image.png) | ![](\image\home.png) |

（看上去AI跑的没有原图牛逼，实际上不是AI的问题，是原图的pixiv画师太特么牛的）

## Canny及其拓展

Canny是一种边缘检测算法，致力于边缘检测、识别图像特征。在刚刚的Depth里面我们就可以看到，生成图少了很多的细节，这是因为Depth识别的是大体的空间关系，如果想要识别更加多的细节，那么就使用Canny吧。

* Canny：将图像经过处理形成一张白底黑线的边缘图，然后根据边缘图和你的提示词来进行图片的生成。下面有两个阈值（Threshold）调节滑块，如果觉得线条太少就把阈值拉低，线条太多就把阈值拉高。
* Invert：原理一样，但是有的时候我们使用的是白底黑线的素描线稿图（类似于你画的草稿），这个时候Canny由于算法的问题会识别的比较模糊，于是这个时候我们把预处理器改成Invert。
* Lineart：暂时可以把这个理解为是Canny的全面升级。当然你要是要求不高用Canny也行。

| 原图                 | 边缘线条图             | 创作结果               |
| -------------------- | ---------------------- | ---------------------- |
| ![](\image\back.png) | ![](\image\image2.png) | ![](\image\canny1.png) |

## HED & SoftEdge

HED是老版本，新版本（v1.1）里变成了SoftEdge，全称柔和边缘。SoftEdge生成出来的效果图要比Canny边缘更为柔和，因此在你认为Canny太过于拘束、写实的时候可以尝试用SoftEdge，提取一些更为关键的边缘信息，忽略不重要的边缘信息。这样做出来的图更加柔和，关系更加稳定一些。

这里面的四个预处理器，HED的质量比Pid更高，Safe是精简版的意思。

| 原图                                    | 边缘图                 | 创作结果           |
| :-------------------------------------- | :--------------------- | ------------------ |
| ![](\image\微信图片_20231002160402.png) | ![](\image\image3.png) | ![](\image\SE.png) |

## Scribble

原意涂鸦乱画，这个就是当初非常惊艳我们的随便画几笔就能生成图片的那个工具了。自己在PS里面随便画几笔，文本中输出不那么多的限定性不强的提示词，就能够生成 非常具有创造力的图片了。注意，Scribble也是黑底白线的模式，所以如果使用了白底黑线，那么请使用Invert处理器。

| 原图（也可以手绘）      | 边缘图                 | 创作结果            |
| ----------------------- | ---------------------- | ------------------- |
| ![](\image\Back_Li.jpg) | ![](\image\image4.png) | ![](\image\cyb.png) |

## Tile

增加局部细节，根据画面自动推断内容，修复放大分辨率而导致的细节丢失。

| before                | after                  |
| --------------------- | ---------------------- |
| ![](\image\after.png) | ![](\image\before.png) |

## Multiple - ControlNet

多重控制网，可以同时加载多个ControlNet预处理器，以达到他们功能和优缺点的互补。

​	比如上文中提到的Openpose的缺陷，就可以使用Openpose+Depth的双重控制来实现。同一张图，在两个Union中分别用Openpose和Depth来跑，并降低次要预处理器的权重系数（比如这里把Depth权重降为0.5左右），就可以实现手放在额头上，并且人物肢体动作被Openpose规定的效果了。

​	并非任意两个效果都可以叠加，需要注意他们的相性。除了上文提及的，其余常用的组合还有比如Depth+Canny，Openpose+SoftEdge等。

# SD模型

​	模型，就是在创作页面中最左上角的Stable Diffusion模型了。一个模型对应的就是一组训练集，喂给AI不同风格的图片加以训练就能产生不同风格的AI画风，想要改变画风就可以改变模型。

​	右侧外挂的vae模型相当于是滤镜，不同的画风适配不同的滤镜，我推荐去网上下载一个“kl-f8-anime2”（直接在C站搜索就行），这个是比较普适的滤镜，对于大部分（二次元）模型都能有不错的效果。此外初始提供的anime的vae也是一个普适的二次元画风。下载我的安装包的同学会发现里面自带了一个“vae-ft-mse-840000”的vae，这个对很多非二次元画风也有很好的作用。市面上有些比较有名的模型可能会自带vae。

## 模型下载网站

### Hugging Face 抱脸

网址：https://huggingface.co

找后缀名为ckpt的下载（当然也有些模型不是以ckpt作为后缀，详见Nenly的教程）

### C站 Civitai

（可以不注册使用，注册的话注意一下身体顶不顶得住）

Model Type直接选择CheckPoint就行，其他不用管，选自己喜欢的。

### Nenly大佬提供

https://pan.baidu.com/s/10rzgzIjzad7AKmj-w8zO_w?pwd=nely

大家可以进这个链接进行下载，其中模型部分是SD04，选择自己需要的下载即可，不然你的电脑会爆掉。他提供了下面我说的这几个常用模型。

## 分类

### 二次元类

偏漫画、插画风格，具有比较鲜明的绘画笔触质感

1. Anything V5 （中文名万象熔炉，就是一开始我让大噶选的）
2. Counterfeit（精致感很好，细节还原程度高）
3. Dreamlike Diffusion（比较具有科幻、梦幻色彩，带一点点赛博的感觉）
4. Abyss Orange Mix（中文名深渊橘/橙，经典有名的二次元风格模型）

### 真实系

拟真化程度高，对现实世界还原较好

1. Deliberate（目前最好的真实系模型之一，细节和质感都不错）
2. Realistic Vision（更加朴素的写实类模型）
3. LOFI（精致的照片级别人像专精模型）
4. Film Grain 2.0（胶片颗粒2.0）
   1. 是大佬Hello World模型的上一版，可惜我Hello World SDXL老是报错，退而求其次了
   2. 建议使用Negative hand这个Embedding
5. Majic 橘麦写实V2.5（用了几次，感觉真不行）
   1. 不要开脸部修复AD etailer
   2. 推荐关键词：`Best quality, masterpiece, ultra high res, (photorealistic:1.4), 1girl`
   3. 推荐负面关键词：`ng_deepnegative_v1_75t, badhandv4`
   5. 脸部修复的方法 to inpaint the face: inpaint-->only masked-->set to 512x512-->Denoising strength:0.2~0.5

### 2.5D

类似建模软件的三维渲染图，三渲二那种感觉

1. NeverEnding Dream（接近三次元的2.5D模型，适合游戏中精致的人物建模）
2. Protogen（优秀的照片效果和创意发挥空间）
3. GuoFeng3（国风、古风主题模型，国人的优秀作品）
4. MengX_Mix_Fantacy（偏向幻想风格的模型，偏向真人一点）
   1. 建议使用插件：ADetailer 来进行面部和手部修复
   2. 负面关键词 ：`(ng_deepnegative_v1_75t),(badhandv4),(worst quality:2),(low quality:2),(normal quality:2),lowres,bad anatomy,bad hands,normal quality,((monochrome)),((grayscale)),`


## 实验

这里用同一张农夫山泉跑了几组类似的图（如果是农夫山泉的话…）

| 二次元：万象熔炉+kl-f8              | 二次元：DreamLike+animevae         | 二次元：深渊橘V3+kl-f8          |
| ----------------------------------- | ---------------------------------- | ------------------------------- |
| ![](\image\农夫山泉2.png)           | ![](\image\农夫山泉_DreamLike.png) | ![](\image\农夫山泉_深渊橘.png) |
| **2.5D风：国风3+kl-f8**             | **2.5D风：NE Dream+kl-f8**         |                                 |
| ![](\image\农夫山泉_国风.png)       | ![](\image\农夫山泉_NED.png)       |                                 |
| **真实系：Deliberate+84000**        | **真实系：LOFI+84000**             |                                 |
| ![](\image\农夫山泉_Deliberate.png) | ![](\image\农夫山泉_LF.png)        |                                 |

# 图像の高清修复

## 高清修复（Hires.fix）

​	正如上文所言，我推荐你在一个低分辨率的情况下跑AI进行抽卡，当你抽中一张比较符合你内心想法的画作的时候，就可以丢到文生图下方的高分辨率修复里面去了。使用方法很简单，把你喜欢的跑图的种子复制进来以确保产生的图几乎类似，然后开高清修复，尺寸可以用倍数设置也可以用分辨率设置。

* 放大算法：各种放大算法在经过实验之后得出的结论是没有什么区别，几乎都长差不多。比较推荐的有Legan、R-ESRGAN、R-ESRGAN Anime6B（这个适合二次元），当然你可以选别的自己尝试，反正大差不差。

* 采样步数：高清修复相当于重绘，因此同样需要设置采样步数。设置为默认0的话则采用与图像生成一样的采样步数。

* 重绘幅度：如果跟原图偏差不想太大，选0.3 ~ 0.5；想稍微变一点让AI自由创作一些，选0.5 ~ 0.7。太小会使细节不够，太大有几率会出现奇怪现象。

## 后期处理/附加功能

这个就在文生图/图生图边上，操作方法不用人讲应该都能看懂：设置一个放大倍数和一个放大算法，剩下的全部维持默认一个别管。

优点：跑得快，时间短

缺点：精细程度较低

特点：相当于重绘幅度为0的重绘，有点类似于PS的放大再锐化

## SD Upscale脚本

* 优点：显存小也能出大图；缺点：跑的比较慢。
* 脚本的安装：进入网页最右侧的扩展，从网页下载，输入下方链接进行安装，完成后重启网页UI。

https://github.com/Coyote-A/ultimate-upscale-for-automatic1111

* 在图生图模式的最下方可以找到脚本，选择SD Upscale进入。自定义尺寸、选择放大算法不再赘述。
* 蒙版边缘模糊程度：这个东西的原理是把一张大图切割成不同的小图去跑，这个参数越大相当于两张图重叠越大，过渡越柔和，但是也不应该太大，一般32 ~ 128是一个较好的值。

| 原图                 | 结果图              |
| -------------------- | ------------------- |
| ![](\image\home.png) | ![](\image\SDU.png) |

# 小模型

在之前我们介绍过了SD模型，其后缀通常为CheckPoint，机翻为检查点，实际含义也就是大模型。而除了大模型之外，我们还可以使用小模型，恰到好处地美化AI图片，解决诸如AI不会画手在内的一系列难题。

## Embeddings 文本嵌入

​	这个东西在机器学习中被称为嵌入式向量，在C站中可以使用Textual Invention来检索它。这是一个仅有KB级别大小的文件，直接丢在Embeddings文件夹，并在图像生成时输入对应的一个关键词即可。这个相当于是一个小小的扩展，帮助AI了解某个特定的词语。比如AI被喂了人和鱼的信息，但是不知道美人鱼是什么，这时候特定的Embedding就会告诉他，这是一个“上半身女人，下班人鱼尾”的生物。

* 一个很好用的例子：解决手部错乱

​	网上有非常多著名的Embeddings都是为了解决手部问题而生，他们记录了一系列手部错误的集合，然后只需要把他们加入**负面提示词**内，即可将这个问题得到极大地改善。推荐几个：

1. EasyNegative：主要针对二次元画风，关键词为`easynegative`，`EasyNegativeV2`
2. DeepNegative：主要针对真人模型，关键词为`ng_deepnegative_v1_75t`
3. Negative-Hand：关键词为`negative_hand`，`negative_hand-neg`
3. badhandv4：关键词为`badhandv4`

## LoRa 低秩适应模式

​	LoRa相比于上面的Embeddings，更着重于人物。比如说我想让AI帮我画一个嘉然（然然…嘿嘿我的嘉然…），但是这玩意儿肯定不是像美人鱼一样两三句话说得清的，于是就有作者专门针对嘉然构建了一个训练集。LoRa文件丢在models文件夹下的lora文件夹内，并在使用时加入`<lora: LoRa_Name:0.8>`这样的方式来调用，建议不要把提示强度开太高（大部分作者建议是0.5~0.8），不然容易影响画风。

​	可以考虑安装插件Additional Network，可以以一种可视化非常好的方式调用LoRa。此外，建议**详细研读LoRa作者的作图建议**。

​	这里下载了C站上一个下载量比较高的嘉然模型（触发关键词为`jiaran`），和另一个小众的嘉然常服训练集（无触发词），试一下。

| 图1                     | 图2                     |
| ----------------------- | ----------------------- |
| ![](\image\Jiaran1.png) | ![](\image\jiaran2.png) |

​	根据Nenly的教程，LoRa基本上可以分为五种应用，即：

1. 人物角色形象塑造：最常用的功能，比如上面的嘉然，一般来讲提示词强度开到0.7上下
2. 画风/风格塑造：比如宫崎骏画风等，影响出图整体效果，一般提示词强度开到0.3上下
3. 概念/构图：不太好描述，比如说画面变成抽卡立绘的感觉、角色呆在水晶球玻璃瓶的构图这样，一般不开太高
4. 服饰：改变角色服饰，一般提示词强度开到0.2-0.3
5. 物体/特定元素，常用于图生图局部重绘，改变特定部分的风格，一般不开太高

### My LoRa

1. 嘉然`Jiaran`
2. 嘉然-常服`Jiaran_Changfu`
   1. 数值在0.5-0.7之间最佳
3. 细节修复`Detail Tweaker`
   1. Based Model: SD1.5
   2. 权重可以是-2到2之间的任何值，负值可以减少细节
4. 细节增加`Detail Enhancer`
   1. Based Model: SD1.5
   2. 权重推荐在0.5上下，小于0.5可以获得比较微妙的效果。1太高了。
5. 胶片风格`LEOSAM's FilmGirl`
   1. Based Model: Hello World SDXL
   2. 这是用于生成胶片风格AI写真照片的LoHA & LoRA模型，可以生成逼真的胶片风格照片。可以搭配`negative_hand`的Embedding
   3. 常用的CFG范围是6 ~ 7，Lora权重通常在0.5 ~ 0.7
   5. Clip skip设为1或2时，生成的效果会有所不同，看自己喜欢哪种风格
6. 塔罗牌风格`taro`
   1. 可以用`{} background`来设置背景，如`blue background`
   2. 推荐使用Embedding：`EasyNegative, badhandv4`
   3. 推荐强度：0.8~1
   4. Based Model: 万象熔炉 & 深渊橘
7. 服装调节器
   1. 权重设置在-1到1之间，权重越大，对象衣物越少
   2. 跟LoRa5、Hello World SDHX模型是同一个大佬发布的
8. 带背景立绘`tachi-e`
   1. 一般使用`wight background, full doby, looking at viewers`提示词
   2. 触发词`tachi-e`，一般权重可以直接设置成1
9. 弹弓泳衣`slingshot swimsuit`
   1. 建议Clip Skip：2
   2. 强度似乎是1 ~ 1.2？自己感觉0.8左右别大于1
10. 人物美化Cute Girl`mix4`
    1. 推荐强度0.4~0.7
11. 亚洲女性脸模`MengX girl_Mix_V40`
    1. 推荐强度0.7~1.0
    2. 务必打开ADetailer插件使用
    3. 可以尝试在提示词中增加blush，或许能更加可爱、少女
12. 私房写真风的泛用少女感混血脸`shojovibe_v11`
    1. 推荐强度0.6-0.8
13. 八重神子
    1. 应我室友要求搞的，被80了呜呜呜
    2. 推荐提示词强度：0.45-0.75
14. 液体波浪概念衣服
    1. 触发词：`liquid clothes, water`
    2. 可用提示词：`blue theme, blue dress, waves, sea, water, water dress`，甚至`liquid hair`和`sky_print`
15. 露西（赛博朋克边缘行者）
    1. 提示词强度0.65左右，最大1（1有点小大）
    2. 建议提示词：`(robot joints:0.5), mechanical parts, lucy \(cyberpunk\), jacket, shorts`
16. 素体机娘
    1. 建议提示词：`mecha musume, mechanical arms, headgear, bodysuit (可选)`
    2. 提示词强度:1-1.5
17. Oversized Clothes
    1.  LORA 权重：建议为 0.2-0.7（我在图像中使用了 0.5）
    2. 关键词：`oversized_hoodie`、`oversized_sweater`




## HyperNetwork

​	中文名：超网络，一般用于改善整体画风。一般来讲用的比较少，业内风评也相对一般。这里举一个著名的例子，C站的“Waven Chibi Style”，开启后可以获得非常Q版的图像。开启方式：将HyperNetwork文件丢在对应的文件夹内，然后在网页UI的设置界面中选择超网络。

# 局部重绘

字面意思很好理解，用于修正那些大题都非常满意，细节不太行的图。

## 图生图局部重绘

蒙版边缘模糊=羽化（10以下的非0值），蒙版边缘预留像素=扩展+融合（默认32，修改区域大就开大，反之减小）

蒙版区域内容处理：选择“填充”可以使变化自由一些。

重绘区域：一般建议修改区域大可以选整张图片，区域小选仅蒙版。

## 图生图涂鸦重绘

比局部重绘多了一个调色盘，意思就是说你画上去的东西会影响他的生成。比如你想在原有美女的脸上画一个带白色爱心的蓝色口罩，那你就可以自己简单用蓝色画一个口罩，再用白色画一个爱心即可。这样引导性会更强一些。记得修改提示词。

# 插件

https://pan.baidu.com/s/10rzgzIjzad7AKmj-w8zO_w?pwd=nely

其中插件是SD08

## Trigger

根据图画反推提示词，跟图生图里的类似但效果更好，但是不知道为什么我找不到这玩意儿。

## LLUL

局部细节重绘，使用方法跟图像放大类似。

## Cut Off

使用一些非常精细的描述（比如非常准确地描述人物穿搭），常常会使AI产生误判。将这些提示词丢到Cut Off里面可以大大减少AI误判程度。

## AD etailer

https://github.com/Bing-su/adetailer

着重人脸修复。提示词直接复制模型提示词即可。

| 模型                  | 适用对象      |
| --------------------- | ------------- |
| face_yolov8n.pt       | 2D / 真实人脸 |
| face_yolov8s.pt       | 2D / 真实人脸 |
| hand_yolov8n.pt       | 2D / 真实人手 |
| person_yolov8n-seg.pt | 2D / 真实全身 |
| person_yolov8s-seg.pt | 2D/真实全身   |
| mediapipe_face_full   | 真实人脸      |
| mediapipe_face_short  | 真实人脸      |
| mediapipe_face_mesh   | 真实人脸      |
