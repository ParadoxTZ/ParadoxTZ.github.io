---
title: 从Word、MarkDown到Latex，打造最优雅的写作方式
date: 2025-06-26
top_img: /image/top3.jpg
mathjax: true
cover: /image/tanlang.jpg
description: 不会真的还有人在用word写硕博毕业论文吧？
tags: 
  - Latex
  - Markdown
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

```
本来我是没有写这篇文章的，但是因为最近正好换了新电脑，所以Latex环境要全部重配，因此干脆顺便记录一下使用过程以及debug过程。
```



# Markdown与Typora

如果你具有较为充足的时间，并且考虑使用电子产品做课程笔记，那么Markdown将会是你在学习Latex前很好的过渡工具。

如果不是，那么可以直接跳转到后文观看Latex的使用，以应付你的毕业设计。

## 功能介绍与下载安装

* **Markdown**是一种轻量化文本标记语言，其本质同word差别不大，对于理工科人而言，最好的区别在于其在word的基础上增加了**公式**与一些简单的**标记**（比如这里显示的加粗与前面的序列）。可以将Markdown试做Latex的超级轻量化版本，主要用于掌握数学公式的语法，这在后续撰写Latex的时候也将更加习惯。
  * Word是一种**所见即所得**的语言，即你打出来的字同你最终得到的效果是一致的
  * Markdown严格来讲是一种**所见非所得**的语言，即你所打字的内容不仅包含主要内容，还包含对格式的定义等，需要通过额外的**编译**步骤才能得到最终生成的文本or PDF。
  * 由于Markdown的语法本身比较简单，所以Typora将这种所见非所得的语言简化为了所见即所得的格式，即你在打字的同时Typora就在帮你**实时编译**。这一操作极大地方便了从Word过渡到Markdown的用户。
  * Typora打字界面的左下角有一个小按钮，为`启用源代码模式`，点击即可看到所生成代码的源代码，即在**编译之前**的语言。有时一些小bug可以在源代码界面中进行修改。


- **Typora**是markdown的编辑器之一，如同Microsoft和WPS都是word的编辑器之一一样。
- Typora简洁并且独立，同时也为Markdown做了一定的特定优化方案，缺点是要钱，不过下面有一套完整的免(po)费(jie)Typora下载方案：
  - 先在以下链接中下载1.9.3版本（实际上是1.9.5）：[Typora — stable release channel](https://typoraio.cn/releases/stable.html)
  - 下载完成后进入该链接下载工具包（百度云或蓝奏云）并根据教程进行序列号提取：[Typora 免费安装教程（支持版本：1.9.5）_typora免费版-CSDN博客](https://blog.csdn.net/qq_61621323/article/details/141036982)


## Markdown的配置

完成安装后，进入“文件”-“偏好设置”，进行一些个人推荐的基础配置：

1. “编辑器” - “成对使用的符号” - “匹配Markdown字符” 勾选，这个选项可以让你更方便的进行字体的**加粗**和*倾斜*。
2. “Markdown” - “Markdown扩展语法” - “内联公式`$$`” 勾选，这个可以让你快速的用`$$`输入行内公式，现在这个用法已经不算很扩展了，很多编译器（包括Latex的）都支持。其他的扩展语法可勾可不勾，但需要知道的是这些语法是Typora才有的，换成Latex语法或者其他的Markdown编辑器都是不支持的，仅是为了方便你使用。
3. “外观” - “字体大小” 可以改成自定义，自行调整大小，我用的16-17。

## Markdown的语法

Markdown本身的语法很简单，基本常用就是以下几个：（没列出来的一般就用的比较少了）

| 语法                                 | 备注                                               | 效果          |
| ------------------------------------ | -------------------------------------------------- | ------------- |
| `**加粗**`                           | （快捷键 Ctrl+B）                                  | **加粗**      |
| `*斜体*`                             | （快捷键 Ctrl+I）                                  | *斜体*        |
| `<u>下划线</u>`                      | （快捷键 Ctrl+U）                                  | <u>下划线</u> |
| 竖杠线（大括号右边那个）             | 连续输入三个，每个中间空格，输完回车               | 表格          |
|                                      | （Ctrl+Enter换行）                                 |               |
| `- `（后面有空格）                   | （Tab变子列表）                                    | 无序列表      |
| `1. `（后面有空格）                  | （Tab变子列表）                                    | 有序列表      |
| `# `（后面有空格）                   |                                                    | 一级标题      |
| `## `（后面有空格）                  | （以此类推，最小6级）                              | 二级标题      |
| `键盘左上角的顿号（波浪号下面那个）` | 把内容放在两个顿号中间，行内代码                   | `效果`        |
| `键盘左上角的顿号（波浪号下面那个）` | 连按三个后回车，行间代码，可选择语言(如c,python等) | 同上          |

比较难记的是数学公式，行内数学公式使用`$公式$`输入，行间数学公式使用

```
$$
公式
$$
```

输入。**数学公式和希腊字母表**见链接：[markdown公式符号大全_markdown符号-CSDN博客](https://blog.csdn.net/konglongdanfo1/article/details/85204312)。

举个例子，常见的二次方程求根公式 $x_{1,2} = \frac{-b \pm \sqrt{b^2-4ac}}{2a}$  在Markdown中的语法是：

```
$ x_{1,2}=\frac{-b \pm \sqrt{b^2-4ac}}{2a} $
```

在熟练之后，**这套数学公式语法体系将比Mathtype要快上数倍**。



# 基于VSCode的Latex编译

​	同上文一致，Latex也是一种文本语言，但是其结构比Markdown要复杂的多，可以说Markdown就是在Word的基础上加上了Latex的数学公式部分而已。除数学公式外，Latex能通过文本直接定义所生成内容的一切格式，就像在Word中常见的居中、字体、页码、页眉页脚、封面等等一切。Word是一种**所见即所得**的文本语言，而Latex**不是**，也就是说你**所打字打出来的内容同你最终编译得到的内容（在格式方面）千差万别**。

​	Latex的好处是在经历初期繁琐的设置和一定的学习成本之后，可以让创作者专注于内容本身——因为格式早就已经被写好了。

​	同Microsoft、WPS、Typora类似，Latex作为一种语言也需要相应的编辑器支持，比较常用的有简单易上手的在线编辑器Overleaf（但是因为在网页端所以存在大小限制问题），专门的TEX编辑器TexStudio（本人刚上手用的时候一直报错遂放弃），以及理工科代码领域的神，大名鼎鼎的万能软件**VSCode**（值得一提的是，他同样也可以当做Markdown编辑器）。

## 下载与环境配置

- 本小节参考知乎[Visual Studio Code (vscode)配置LaTeX - 知乎](https://zhuanlan.zhihu.com/p/166523064)

### TexLive的下载与安装

​	编辑Latex所需要环境和语言有很多种可选，比如MikTex、TexLive等，具体区别可参考[（译）在Windows上使用TeX：TeX Live与MiKTeX的对比 - gisliuliang - 博客园](https://www.cnblogs.com/liuliang1999/p/12656706.html)。这里以TexLive为例进行安装和使用。

​	TexLive的下载网址在这：[Acquiring TeX Live as an ISO image - TeX Users Group](https://tug.org/texlive/acquire-iso.html)。当然如果网络不行的话，可以选择开源的镜像网站进行下载，也就是该网页中自带的“download from a nearby CTAN mirror”。所需要下载的文件是”TexLive-版本号.iso“这一光盘映像文件，这个文件极大，可能需要下载几十分钟。

​	下载完成后，进入该映像文件，选择 **"install-tl-windows"** 文件，为了后面不必要的麻烦，右键**以管理员身份运行**。在所出现的安装界面Installer中，仅需要更改两个内容：**安装位置**和**取消勾选“安装TexLive前端”**。（本文中所使用的前端就是VSCode，所需无需TexLive自带的前端）。安装过程如下图所示：

![](\image\latex01.png)

​	这个下载的过程极久，总用时从大几十分钟到几个小时不等。安装结束后会出现`running mktexlsr ‘安装目录’`的字样，这是配置文件的写入。出现“欢迎进入Latex的世界”表明安装成功。可以在命令行窗口（Win+R → cmd）输入`xelatex -v`来确认安装版本和完成情况。

### VSCode的下载与环境配置

​	如果你没有VSCode，那么直接上官网下载即可，记得更改相应的安装路径，并在安装时勾选“**添加到PATH**”。如果你忘记了自己是否将其添加到Path内，则在此电脑或Win中搜索“环境变量”后，查看`Path`内是否含有VSCode的安装路径（精确到`bin`），如下图。如果没有，新建添加进去即可，比如我的环境变量是`D:\Microsoft VS Code\bin`。

![](\image\latex02.png)

1. **中文插件：**

   为安装相应的中文扩展，在VSCode的扩展栏中输入`Chinese`搜索，安装`Chinese (Simplified) Language Pack for Visual Studio Code`插件，重启VSCode后生效。

2. **Latex插件：**

   在VSCode的扩展栏中输入`latex`搜索，安装`Latex Workshop`插件，直接生效。

3. **设置：**

   1. 点击VSCode左下角的齿轮图案，选择`设置`。在右上角找到`打开设置(json)`的图标并单击，进入VSCode的json配置界面`settings.json`。如果是新的Latex，那么现在所呈现的内容将只有一段花括号。

   2. 输入以下内容：

      ```json
      // Latex settings:
      {
          "latex-workshop.latex.autoBuild.run": "never",
          "latex-workshop.showContextMenu": true,
          "latex-workshop.intellisense.package.enabled": true,
          "latex-workshop.message.error.show": false,
          "latex-workshop.message.warning.show": false,
          "latex-workshop.latex.tools": [
              {
                  "name": "xelatex",
                  "command": "xelatex",
                  "args": [
                      "-synctex=1",
                      "-interaction=nonstopmode",
                      "-file-line-error",
                      "%DOCFILE%"
                  ]
              },
              {
                  "name": "pdflatex",
                  "command": "pdflatex",
                  "args": [
                      "-synctex=1",
                      "-interaction=nonstopmode",
                      "-file-line-error",
                      "%DOCFILE%"
                  ]
              },
              {
                  "name": "latexmk",
                  "command": "latexmk",
                  "args": [
                      "-synctex=1",
                      "-interaction=nonstopmode",
                      "-file-line-error",
                      "-pdf",
                      "-outdir=%OUTDIR%",
                      "%DOCFILE%"
                  ]
              },
              {
                  "name": "bibtex",
                  "command": "bibtex",
                  "args": [
                      "%DOCFILE%"
                  ]
              }
          ],
          "latex-workshop.latex.recipes": [
              {
                  "name": "XeLaTeX",
                  "tools": [
                      "xelatex"
                  ]
              },
              {
                  "name": "PDFLaTeX",
                  "tools": [
                      "pdflatex"
                  ]
              },
              {
                  "name": "BibTeX",
                  "tools": [
                      "bibtex"
                  ]
              },
              {
                  "name": "LaTeXmk",
                  "tools": [
                      "latexmk"
                  ]
              },
              {
                  "name": "xelatex -> bibtex -> xelatex*2",
                  "tools": [
                      "xelatex",
                      "bibtex",
                      "xelatex",
                      "xelatex"
                  ]
              },
              {
                  "name": "pdflatex -> bibtex -> pdflatex*2",
                  "tools": [
                      "pdflatex",
                      "bibtex",
                      "pdflatex",
                      "pdflatex"
                  ]
              },
          ],
          "latex-workshop.latex.clean.fileTypes": [
              "*.aux",
              "*.bbl",
              "*.blg",
              "*.idx",
              "*.ind",
              "*.lof",
              "*.lot",
              "*.out",
              "*.toc",
              "*.acn",
              "*.acr",
              "*.alg",
              "*.glg",
              "*.glo",
              "*.gls",
              "*.ist",
              "*.fls",
              "*.log",
              "*.fdb_latexmk"
          ],
          "latex-workshop.latex.autoClean.run": "onFailed",
          "latex-workshop.latex.recipe.default": "lastUsed",
          "latex-workshop.view.pdf.internal.synctex.keybinding": "ctrl-click" // 我把原配置double-click改成了ctrl-click，这个是编译生成的pdf结果如何定位到原文的快捷键，个人习惯ctrl+click
      }
      ```

**注：**

1. 本人一般都使用VSCode作为默认的PDF查看器，所以这段代码**不包含外部PDF查看器的设置和使用**，通常这二者是冲突的，即最好不要在使用其他软件打开所编译的PDF的情况下进行Latex的编译。
2. 根据 json 文件编写规则，**每个代码语句（除了代码块儿最后一句）都需要加上英文状态下的`,`**，否则就会报错；而每个代码块儿的最后一句是不需要加上`,`的。从上文整个代码块儿可以看出此规则。所以当你日后再次更改json文件为其他插件进行配置时，记得在最后加上`,`。
3. 代码块解读请参考[Visual Studio Code (vscode)配置LaTeX - 知乎](https://zhuanlan.zhihu.com/p/166523064)的6.2小节或其他相关文章。每篇教程所给出的latex配置json文件会有部分差异，所以为了日后使用建议还是读一下。



## 以电气学院毕设为例的Latex使用

### 基本使用步骤

1. 首先下载浙大电气学院下的毕设模板latex包（下载地址为[关于公布《电气工程学院2025届本科生毕业设计（论文）工作管理实施细则》的通知（更新）](http://ee.office.zju.edu.cn/2024/1028/c33877a2981079/page.htm)，需内网，同毕设模板一起），解压得到如下文件夹（我是编译过了所以多了些奇奇怪怪的文件，不用在意）。其中`body`文件夹存放主要的文章内容，`figure`文件夹存放文章图片，是两个比较常用的子文件夹。

![](\image\latex05.png)

2. 使用VSCode打开`zjuthesis`这一整个文件夹（文件夹名字如果不是zjuthesis而是后面有一堆什么version的也一样，无所谓），并使用VSCode双击打开后缀是`tex`的文件`zjuthesis.tex`。这个tex文件是整个毕设论文的总配置文件，后面所有的子文件都被该主文件调用才能进行编译。

3. 点击VSCode右上角的绿色小三角形`Build Latex project`。

   1. 如果VSCode的左下角开始转圈，一会儿后文件夹中多了一堆同名不同后缀的文件，主要关注`zjuthesis.pdf`，则表明编译成功。可以用VSCode打开该PDF文件，并左右分屏（如下图），实现左边输入，右边观测输出的写作模式。
   2. 如果没有任何反应，在搜索栏搜索`settings.json`，并重新复制上面的一长串代码后再次尝试（原因是zjuthesis可能自带了一个配置文件）。
   3. 如果还不行，可尝试的操作有：1）删去`.latexmkrc`；2）在其他教程上搜索一份`settings.json`的配置代码放入。
   4. 如果之前存在**编译出错或长时间编译失败**的问题，建议打开左侧的Latex扩展，选择`清理辅助文件`进行重置。此外，建议**打开VSCode下方的命令行窗口中的`输出`栏**，查看编译过程信息，若有编译问题会显示问号`?`。

![](\image\latex06.png)

4. 这里以**电气工程学院ee的本科生undergraduate毕业设计的最终版本final**（而非开题版本）进行演示。`zjuthesis.tex`文件中包含了作者的一些基本信息和文件调用，原作者有比较详细的注释，跟着填写即可，编译后右侧的PDF会同步更新。

5. 下面这些代码无需更改，但是需要看一下，只要稍微有点英文和代码基础都能理解。
   1. `\newcommand{\inputundergraduate}`，很明显，这启用了一个新的代码块，这段代码块将其他文件夹下`undergruduate`的部分引用了进来。下面还有一个类似的`\newcommand`，但是那个是研究生的。因为我们已经在上面设置过我们是`undergraduate`，所以只需要关注这里的就行。
   2. `\ifthenelse{\equal{\Period}{final}}`， `\newcommand{\undergradcurrstage}{final}`，我们是最终版本而不是开题，所以选择`final`而不是`proposal`，所以这只需要关注这一块即可。
   3. `\inputpage{final}{cover}`，说明我们的文章构成中有`cover`这一个东西。这个东西也是他帮你生成好了的。


![](\image\latex04.png)

6. **那我们要改那些地方呢？**——主文件`zjuthesis.tex`和你所使用的文件夹中的所有`.tex`文件就是你的内容，在本例中，就是`zjuthesis/undergraduate/final`**里面的所有文件，包含`abstract.tex`（摘要）、`content.tex`（目录和主体内容）等**。下面一节将具体讲解在写毕设论文的时候，该如何使用它去写。

### 手把手教你写毕设

现在，可以用latex原文+pdf编译结果的双屏显示来快速熟悉该毕设的代码架构了。

1. 完善填写`zjuthesis.tex`中的个人基本信息，填写完成后编译查看是否有问题。

2. 顺着PDF的结构往下阅读，可以对PDF中的文字使用`Ctrl+Click`或`double Click`来**快速跳转到PDF文件对应的Latex原文**。
   1. 快捷键取决于`settings.json`中最后一行设置的`latex-workshop.view.pdf.internal.synctex.keybinding`是哪个）。
   2. 可以在左侧的**资源管理器中看到文件所处的位置和文件名**，**一般需要自己改动的文件存在上文介绍的文件夹`\final`中，不需要自己改动的文件存在`\page`中**。
   3. 一般而言，**在标题、作者等这类属于“论文基本信息”的位置，很多Latex模板（包括上面的毕设模板）都采取的是“先定义、后调用”的方式**，所以使用该双向定位可能不准。如果跳转到了`\page`下的文件中，说明实际需要修改的位置不在这里。


![](\image\latex07.png)

3. 目录是自动生成的（作者写好相应的代码了），无需改动
4. **文章的主体内容章节存在`content.tex`文件中**，打开即可看到如下图所示界面。
   1. **很容易知道里面所示的`instructions`、`introductions`等四部分就是`zjuthesis.pdf`生成的四个章节（第一到四章）**。所以可以在这里增/删/改内容以实现文章主要内容的替换。
   2. 个人建议可以先保留原文的几个章节，因为这几个章节中有一小部分Latex代码的语法说明，可以帮助你进行上手和学习。复制其中的某一章节，重命名为`Chapter1_Introduction`并仿照格式插入到`content.tex`中，并将其中的非代码部分替换为自己的内容即可得到所需内容。


![](\image\latex08.png)

### 常用快捷键

| 快捷键     | 作用                                  | 备注                                                 |
| ---------- | ------------------------------------- | ---------------------------------------------------- |
| Ctrl+Alt+B | 编译Latex（等同于右上方的绿色小三角） | 觉得难按的可以在`文件-首选项-键盘快捷方式`中进行替换 |
| Ctrl+Alt+J | 从Latex文件位置快速定位到PDF位置      | 同上                                                 |
| Ctrl+Click | 从PDF位置快速定位到Latex文件位置      | 快捷键取决于`settings.json`最后一行                  |

## 如何使用期刊的Latex模板

- **毕设论文的模板使用比期刊复杂的多得多**，因为毕设论文太长了，格式要求也很多，而期刊短得多！

1. 首先找到你所需要投稿的期刊的Latex模板，下面给出一些常用的检索方法：

   1. IEEE的论文期刊模板： [IEEE-Template Selector](https://template-selector.ieee.org/secure/templateSelector/publicationType)
   2. SCI的论文期刊模板：[【LetPub】最新SCI期刊影响因子查询及投稿分析系统（2024-2025年） - LetPub](https://www.letpub.com.cn/index.php?page=journalapp)，进去选择期刊后可以在作者指南或者期刊官网中找
   3. 期刊官网（很多中文期刊没有Latex模板，英文的基本都有）

2. 以IEEE为例演示如何下载期刊的Latex模板

   1. 进入上文给出的IEEE论文期刊模板网站
   2. 在这里搜索你所投稿的期刊名，如`IEEE Electrification Magzine`（IEEE 电气化杂志），下载
   3. 下载完成后解压得到如下文件夹，可以看到非常的简洁

3. 如何使用期刊的Latex模板

   1. 使用VSCode打开该**文件夹**

   2. 可以看到里面只有两个`.tex`后缀的文件，其中一个文件名是`how-to`，很明显不是正文，所以打开另一个。

   3. 打开后得到如下界面，啥也别管先编译一遍，生成同名的`.pdf`文件，双屏打开，到这一步没有问题那就成功90%了。

      ![](\image\latex09.png)

   4. 使用上文的快捷键可以快速实现Latex代码和PDF位置的**双向定位**，以供你得知什么地方需要修改。值得注意的是，**在标题、作者等这类属于“论文基本信息”的位置，很多Latex模板（包括上面的毕设模板）都采取的是“先定义、后调用”的方式**，所以使用该双向定位可能不准。

# Latex的基本语法

- Latex的语法很多，没必要一口气学完。可以先看看下面的基础语法，当你需要更加精细的格式设置时，再上网搜索使用和设置方法，现学现用会更好。

## 换段落与换行

可以用`\newline`，但**一般使用空行进行新建段落**。比如：

```latex
段落1的内容

段落2的内容 % 中间需要空一行才能正常生成2段
```

​	这个有什么用呢，就是一般我们写完**数学公式**的时候下面会紧跟着，“式中，$\sigma$表示……”这种**不空两格的解释语句**，那么这个时候这段话与数学公式间就不要空行，**这样生成的内容就会顶格而非空两格**。

## 标题

大标题 `\section`

然后是 `\subsection`，`\subsubsection`，我记得最多就到这了，也就是最后会生成`1.1.1 xxxxx`这样的标题

## 字体

一般而言需要乱动字体的情况不多，一般也不建议乱动。

最常用的就是**加粗**，在Latex中表示为`\textbf{加粗内容}`。此外可能会用到*斜体*，在Latex中表示为`\itshape{斜体内容}`。

EE学院提供的zjuthesis对字体（在你看不见的定义文件中）做了比较详细的定义，所以可能存在部分函数是zjuthesis独有的（自定义了一些函数），在其他Latex文件中不适用。默认英文字体为新罗马 Times New Roman，默认正文中的中文字体为仿宋，应该都不需要咋改。

## 列表

```latex
\begin{enumerate}[label=\textbf{(\alph*)}]  % itemize为无序列表，[]内为备注和格式设置
    \item 第一段；  % \item 表示另起一段
    \item 第二段。
\end{enumerate}
```

- 详细配置可参考：[LaTeX 排版（1）：列表 | Linux 中国 - 知乎](https://zhuanlan.zhihu.com/p/350596731)

## 图片

```latex
\begin{figure}[!ht]  % 可选参数有：!htbp
    \centering  % 居中
    \includegraphics[width=.8\linewidth]{example/texlive-image.png}  
    	% 图片宽度设置为0.8的页宽，图片位置为\figure\example\texlive-image.png
    \caption{清华开源镜像站Texlive}  % 图片下面的标题（序号自动生成）
    \label{fig:texlive-image}  % 图片的标签，用于引用图片，详见下文引用
\end{figure}
```

- 详细配置可参考：[LaTex的使用（一）：图片的插入及排版方法_latex图片排版-CSDN博客](https://blog.csdn.net/qq_31347869/article/details/103832190)

- 关于Latex进行**多行多列**的图片排版（比如常见的`图1.1 (a)aaa (b)bbb`），建议参考这个[关于Latex并排多张图片及加入图片说明的方法_latex图片说明-CSDN博客](https://blog.csdn.net/binbinczsohu/article/details/109900248)

## 表格（三线表）

一般而言论文中的表格都是三线表

```latex
\begin{table}[H]
	\caption{Example 1}  % 表格上方的标题
	\centering  % 居中
	\label{tab:sample}  % 表格的标签，用于引用表格，详见下文引用
	\begin{tabular}{cccc} % 四个c代表该表一共四列，内容全部居中
	\toprule % 第一道横线，下面写表格的第一行（标题行）
		Item 1 & Item 2 & Item 3 & Item 4 \\  % 用&分割内容，双斜杠表示换行
	\midrule % 第二道横线 
		Data1 & Data2 & Data3 & Data4 \\  % 用&分割内容，必须与上文一一对应
		Data5 & Data6 & Data7 & Data8 \\
	\bottomrule%第三道横线
\end{tabular}
```

- 详细配置可参考：[Latex中经典三线表、多线表、内容跨行/跨列复杂表的详解与源代码_latex toprule-CSDN博客](https://blog.csdn.net/qq_37707218/article/details/107393636)，其中包含三线表中标题行需要有**多行、多列的特殊情况**，笔者在论文中也有使用。

## 数学公式

```latex
\begin{equation}
    \label{equ:sample}  % 公式的标签，用于引用公式，详见下文引用
    A=\overbrace{(a+b+c)+\underbrace{i(d+e+f)}_{\text{虚数}}}^{\text{复数}}  % 公示内容，自动编号
\end{equation}
```

- 关于数学公式符号语法，若有遗忘，可以参考：[Latex数学公式符号大全（超详细）_latex数学符号-CSDN博客](https://blog.csdn.net/Yushan_Ji/article/details/134322574)
- 关于数学公式的换行问题，可以参考：[Latex公式排版（编号、换行、括号内换行、对齐）_latex公式换行编号合并-CSDN博客](https://blog.csdn.net/puchapu/article/details/86543580)

## 引用

​	**数学公式、图片和表格的引用**使用`\autoref`命令，如`如\autoref{code:sample}所示，这是一段代码。`，其中的`code:sample`是你在输入公式时给他写的`\label{}`。如果公式没有写这个，那么无法引用。

​	个人的强烈建议：可以给公式的`\label`全都命名成`equ:Name`的格式，图片`fig:Name`的格式，表格`tab:Name`的形式，方便引用。Name可以和你的图、表、公式标题一致或类似，方便引用的时候查找。

## 参考文献

- 参考文献列在`ref.bib`中，不同于以往任何一个引用格式，BibTex是专门为Latex设计的参考文献格式，知网、谷歌学术等知名论文浏览平台均可以直接下载到所需文献的BibTex参考文献格式。复制进去即可。
- 需要注意的是，可能需要根据学校或者论文的要求，**对BibTex中所列明的参考文献条目进行删改**。比如，学校的毕设论文不要求DOI，但是有些参考文献在复制BibTex格式时就会自带DOI，这个时候需要**手动删除**。

```latex
@article{example2,
  title = {Energy peer-to-peer trading in virtual microgrids in smart grids: a game-theoretic approach},
  journal = {IEEE Transactions on Smart Grid},
  author = {Kelvin Anoh and Sabita Maharjan and Augustine Ikpehai and Yan Zhang and Bamidele Adebisi},
  year = {2019},
  urldate = {2024-10-31},
  doi = {10.1109/TSG.2019.2934830},
}
```

- 参考文献的**引用标签**就是BibTex中第一行，`{`后面紧跟的内容。这段内容是你**唯一可以且需要更改**的地方。为了方便引用，非常建议**统一参考文献的引用标签格式**，比如常见的“论文作者+论文时间”的格式`Paradox2025`，或其他你自己喜欢的格式。
- 比如上面这个参考文献，引用方式应该是：

```latex
文献\parencite{example2}中新的实验结论表明，Paradox是最阴暗的下水道鼠鼠\cite{example2}。
```

- 生成的内容如下（这两种引用方式的区别应该很明显了）：

文献${[1]}$中提出了一种新的实验结论，即Paradox是最阴暗的下水道鼠鼠$^{[1]}$。

- Latex会依据你的引用顺序进行自动标号。
