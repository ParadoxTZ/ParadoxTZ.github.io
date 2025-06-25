```
title: 从MarkDown到Latex，打造最好上手的写作方式
date: 2025-06-26
top_img: /image/top3.jpg
mathjax: true
cover: /image/tanlang.avif
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
```



# Markdown与Typora

## 功能介绍与下载安装

* **Markdown**是一种轻量化文本标记语言，其本质同word差别不大，对于理工科人而言，最好的区别在于其在word的基础上增加了**公式**与一些简单的**标记**（比如这里显示的加粗与前面的序列）。

- **Typora**是markdown的编辑器之一，如同Microsoft和WPS都是word的编辑器之一一样。Typora简洁并且独立，同时也为Markdown做了一定的特定优化方案，缺点是要钱，不过下面有一套完整的免(po)费(jie)Typora下载方案：
- 先在以下链接中下载1.9.3版本（实际上是1.9.5）：[Typora — stable release channel](https://typoraio.cn/releases/stable.html)
- 下载完成后进入该链接下载工具包（百度云或蓝奏云）并根据教程进行序列号提取：[Typora 免费安装教程（支持版本：1.9.5）_typora免费版-CSDN博客](https://blog.csdn.net/qq_61621323/article/details/141036982)

## Markdown的配置

完成安装后，进入“文件”-“偏好设置”，进行一些个人推荐的基础配置：

1. “编辑器” - “成对使用的符号” - “匹配Markdown字符” 勾选，这个选项可以让你更方便的进行字体的**加粗**和*倾斜*。
2. “Markdown” - “Markdown扩展语法” - “内联公式$$” 勾选，这个可以让你快速的用`$$`输入行内公式，现在这个用法已经不算很扩展了，很多编译器（包括Latex的）都支持。其他的扩展语法可勾可不勾，但需要知道的是这些语法是Typora才有的，仅是为了方便你使用。
3. “外观” - “字体大小” 可以改成自定义，自行调整大小，我用的16-17。

## Markdown的语法

Markdown本身的语法很简单，基本常用就是以下几个：（没列出来的一般就用的比较少了）

| 语法                | 备注                  | 效果          |
| ------------------- | --------------------- | ------------- |
| `**加粗**`          | （快捷键 Ctrl+B）     | **加粗**      |
| `*斜体*`            | （快捷键 Ctrl+I）     | *斜体*        |
| `<u>下划线</u>`     | （快捷键 Ctrl+U）     | <u>下划线</u> |
| `|标题1|标题2|`     | （Ctrl+Enter换行）    | 表格          |
| `- `（后面有空格）  | （Tab变子列表）       | 无序列表      |
| `1. `（后面有空格） | （Tab变子列表）       | 有序列表      |
| `# `（后面有空格）  |                       | 一级标题      |
| `## `（后面有空格） | （以此类推，最小6级） | 二级标题      |

比较难记的是数学公式，行内数学公式使用`$公式$`输入，行间数学公式使用

```
$$
公式
$$
```

输入。**数学公式和希腊字母表**见链接：[markdown公式符号大全_markdown符号-CSDN博客](https://blog.csdn.net/konglongdanfo1/article/details/85204312)



# 基于VSCode的Latex编译

​	同上文一致，Latex也是一种文本语言，但是其结构比Markdown要复杂的多，可以说Markdown就是在Word的基础上加上了Latex的数学公式部分而已。

​	除数学公式外，Latex能通过文本直接定义所生成内容的一切格式，就像在Word中常见的居中、字体、页码、页眉页脚、封面等等一切。Word是一种所见即所得的文本语言，而Latex不是，也就是说你所打字打出来的内容同你最终编译得到的内容（在格式方面）千差万别。

​	Latex的好处是在经历初期繁琐的设置和一定的学习成本之后，可以让创作者专注于内容本身——因为格式早就已经被写好了。