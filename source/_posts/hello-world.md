---
title: Hello World
date: 2023-09-24
top_img: /image/top3.jpg
mathjax: true
cover: https://img1.baidu.com/it/u=2357593784,3294108420&fm=253&fmt=auto&app=120&f=JPEG?w=854&h=480
description: Hello, World!
tags: 
  - Hexo
  - 随笔
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

* This article is for me.

## 一些网页端的简记

### 开头

在每篇文档开头，打上标签，如下：

````markdown
---
title: 文章标题
date: 2023-09-25
comments: true
mathjax: true # 开启数学公式
top_img: /image/top3.jpg
cover: 缩略图图片连接
description: 文章简介
tags: 标签
categories: 分类

post_meta:
  page:
    date_type: both 
    date_format: date 
    categories: true 
    tags: true 
    label: true 
  post:
    date_type: both 
    date_format: date 
    categories: true 
    tags: true 
    label: true 

copyright_author: Paradox
copyright_author_href: https://github.com/ParadoxTZ
copyright_info: 此文章版权归Paradox所有，如有转载，请注明来自原作者

---
````

### 使用

* 文章的标题图片统一使用“/image/top3.jpg”

* 页面的标题图片统一使用“/image/top.jpeg”

* 标准图表网站：[Find Icons with the Perfect Look & Feel | Font Awesome](https://fontawesome.com/)
  * 例：``<i class="fa-brands fa-github"></i>``
  * 改为：fab fa-github
  
* 按钮button（附上两个好看的。第二个有手指第一个没有）

```markdown
    {% btn [url],[text],[icon],[color] [style] [layout] [position] [size] %}
    中间用逗号或"-"隔开，按要求
    [url]         : 链接
    [text]        : 按钮文字
    [icon]        : [可选] 图标
    [color]       : [可选] 按钮背景顔色(默认style时）
                          按钮字体和边框顔色(outline时)，default/blue/pink/red/purple/orange/green
    [style]       : [可选] 按钮样式 默认实心，outline/留空
    [layout]      : [可选] 按钮佈局 默认为line，block/留空
    [position]    : [可选] 按钮位置 前提是设置了layout为block 默认为左边，center/right/留空
    [size]        : [可选] 按钮大小，larger/留空
```

```markdown
    {% btn 'https://butterfly.js.org/',Butterfly %}
    {% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,larger %}
```

* 

### 文章缩略图

按需取用：

```
default_cover: 
    - https://img2.baidu.com/it/u=1235612171,3868693941&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281（√）
    - https://img1.baidu.com/it/u=2996267891,32376633&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500（√）
    - https://img1.baidu.com/it/u=312822943,1236795569&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800
    - https://img0.baidu.com/it/u=1804133410,3139237737&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800
    - https://img1.baidu.com/it/u=161683432,2488264310&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500（√）
    - https://img1.baidu.com/it/u=3498215964,1377341541&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500
    - https://img1.baidu.com/it/u=3664282049,2844914481&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500
    - https://img0.baidu.com/it/u=2189029883,1880322455&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800
    - https://img1.baidu.com/it/u=2477736930,489697403&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800
    - https://img2.baidu.com/it/u=504235302,299195994&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281
    - https://img0.baidu.com/it/u=6927155,1857076631&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281
    - https://img0.baidu.com/it/u=3270195087,2703081542&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800
```



### Test Part

$q=\frac{T_1-T_2}{\frac1{h_1A}+\frac{\delta}{\lambda A}+\frac1{h_2A}}$

