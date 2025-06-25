---
title: MATLAB面向对象编程
top_img: /image/top3.jpg
mathjax: true
cover: /image/xnzb.jpg
description: 创建对象！New Object!
tags: 
  - 编程
  - 笔记
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



# 基础

## 类与对象

下面这是一个类`class`：

```matlab
% ClassName.m
classdef className < handle
	properties % 属性 block
		...
	end
	
	methods   % 方法 block
   		...
	end
end
```

下面以创建一个二维点的案例作为示例，其中`Point2D`是一个类，`p1`和`p2`是对象

```matlab
% Point2D.m
classdef Point2D < handle
	properties
		x = 0.0; % 默认值，可没有，如y
		y
	end
	methods
		function obj = Point2D(x0,y0) % 构造类型函数
			obj.x = x0;
			obj.y = y0;
		end
		function normalize(obj)     % 归一化方法类函数
			r = sqrt(obj.x^2 + obj.y^2);
			obj.x = obj.x/r;
			obj/y = obj.y/r;
		end
	end
end
```

这里的`Point2D`不是普通的函数，是一个类的构造函数`Constructor`，可以用以下方法创建对象：

```matlab
p1 = Point2D(1,1);
p2 = Point2D(2.5,4.0);
```

## 类的属性、方法及其分类

用下面一段代码（仍然以`Point2D`为例说明）

```matlab
classdef Point2D < handle
	properties
		x
		y
	end
	properties(Constant)   % 常量属性
		R = pi/180;
	end
	properties(Dependent)  % 非独立属性
		r % 不占用存储空间，可以通过p1.r调用
	end
	properties(Hidden)    % 隐藏属性
		var % 不会显示，开发、交互时有用
	end
	methods
		function result = get.r(obj)
			result = sqrt(obj.x^2 + obj.y^2); % 通过get方法进行调用计算
		end
		normalize(obj); % 仅提供声明，可在外部独立文件中编程
		           % 需要创建名为@Point2D的文件夹，把这些都丢进去
	end
end
```

在定义方法时，`obj`必须作为成员方法的参数之一，说明传递给该成员方法的参数是一个对象。当然你可以使用任何其他单词，这里使用`obj`是为了和C++语言中的`this`以及Python中的`self`进行区分

虽然方法也可以通过函数调用，如`normalize(p1)`，但还是更推荐使用点调用，即`p1.normalize()`。

## 类的构造函数

构造函数Constructor是一种特殊的成员方法，比如上文的`p1 = Point2D(1,1);`：

* 其**名字与类名相同**
* 类定义中至多只能有1个构造函数
* 其返回值必须只能是新创建的对象
* 这是唯一一个创建新对象的方法

```matlab
% 提供多种输入参数数目的方法
...
function obj = Point2D(x0,y0)
	if nargin==0 % 输入参数数量
		obj.x = 0; obj.y = 1;
	elseif nargin==2
		obj.x=x0; obj.y=y0;
	elseif nargin==1
		obj.x=x0;obj.y=x0;
	else
		error('wrong input');
	end
end
```

如果没有创建构造函数，MATLAB后台会自动创建一个空函数用于构造。该函数没有输入。

## 类的关系：继承、组合、聚集

### 继承

在逻辑上，继承即为泛化关系，表示B是A的“一种”(a kind of)，是父子、基类-派生类的关系。子类是父类的特殊类型，具有父类的全部属性，比如父类是电机，具有定子、转子、气隙这些属性，子类可以是永磁同步电机，额外具有永磁体属性。如：

```matlab
% Point3D.m
classdef Point3D < Point2D
	properties
		z
	end
	methods
		function obj = Point3D(x0,y0,z0);
			obj = obj@Point2D(x0,y0); % 用@表示调用父类，子类必须先调用父类
			obj.z = z0;
		end
		function print(obj);
			print@Point2D(obj); % 调用同名方法：函数名@父类类名(obj，其它参数)
			disp(['z=',num2str(obj.z)]);
		end
	end
end
```

### 组合

继承中子类可以得到父类的全部属性，但是不能为了让B的功能更多而盲目地对A和B使用继承，否则将造成混乱。另一种逻辑关系是组合，比如人脸和五官之间的关系。

```matlab
classdef Mouse < handle
	% ...
end
... % Other Classes in other Matlab Files
classdef Face < handle % 使用handle而非多重继承：Mouse&Eye&Nose
	properties
		mouse
		... % Others Like eye/nose/ear
	end
	methods
		function obj=Face()
			obj.mouse = Mouse();
			... % Others Like Eye/Nose/Ear
		end
	end
end
```

### 聚集

聚集跟组合的关系类似，但聚集更加**松散**。部分结构不依赖于整体存在，比如自行车的车轮可以先被定义（制造），然后再装到自行车上面去。这意味着**子对象可以被独立创建**。

```matlab
%% Bike.m
classdef Bike < handle
	properties
		frontWheel
		rearWheel
		seat
	end
end
%% Scripts
frontWheelObj = Wheel();  % 独立存在
rearWheelObj = Wheel();
seatObj = Seat();
...
myBike = Bike();
myBike.frontWheel = frontWheelObj; % 聚集关系
...
```

## Handle类的set和get方法

### set方法

set方法为对象 属性的幅值提供了一个中间层，在对象A的外部，任何对属性a（A.a）的幅值都需要经过`set.a`这个中间层，通常用来检测赋值是否合理，如：

```matlab
classdef Point_Quadrant1 < handle
	properties
		x
		y
	end
	methods
		function set.x(obj,valx)
			if (valx<0)
				error('Not in First Quadrant');
			else
				obj.x = valx;
			end
		end
		function set.y(obj,valy) 
			% ...略
		end
	end
end
```

### get方法

get方法已经在上面介绍过了，是一种对成员属性查询的中间层。可以理解为get和set的调用正好相反：

* `set`是对某个值进行设置，因此写为：`obj.a = val`
* `get`是对某个值进行调用，因此写为：`val = obj.a`

进阶用法暂时不讲了

## 访问权限

跟前面属性的非独立、常量、隐藏属性类型，**属性和方法**都可以加上权限设置：`methods(Access = private/protected/public)`

在OOP中，`public`类应该尽量少用，这和面向对象的封装是矛盾的

此外，`Access`还可以细分为`GetAccess`和`SetAccess`，表示读取权限和设置权限

此外，还可以通过更加细节的设置，指定某个类的访问权限，比如：

```matlab
%% BankAccount.m
classdef BankAccount < handle
	properties(SetAccess = {?BankTeller,?Paradox}) % 只允许BankTeller、Paradox、类内部的方法访问
		balance % 允许银行柜员修改账户余额的数值
	end
	methods
		function deposit(obj,val)
			obj.balance = obj.balance+val; % 存钱，类内部的成员方法可以访问
		end
	end
end
%% BankTeller.m
classdef BankTeller < handle
	methods
		function deposit(obj,acc,val)
			acc.balance = acc.balance+val; % 因为具有访问权限，所以可以直接修改
		end
	end
end
%% Scripts
myCard = BankAccount();
myCard.deposit(500); % 存500块钱，允许
myCard.balance = myCard.balance+500; % 妄图直接修改账户余额，报错！
xiaoE = BankTeller();
xiaoE.deposit(myCard,500); % 银行柜员小E给你的卡增加了500块钱，允许
```

# 句柄类和实体值类

## 定义与区别

以下只是鄙人粗浅的理解：

* 可以认为句柄类对象（Handle）是MATLAB传参的一种高级手段，有点类似于C的指针。MATLAB会在内存中开出一块空间，用于存放这个变量的具体数值，而在该对象中仅留下一个地址，指向该数据存放的位置。
* `value`类适合比较简单的数据，其原理就是很单纯的数值传递，且对对象的处理主要不是为了改变原有的数值，而是为了获得新的事物
* `handle`类适合希望这些数据在各个方法、函数之间迅捷传递，不需要被局部复制，所有对象共享属性（改一个就能改掉所有）的时候。
* 他俩操作的区别主要就是有没有在`classdef`里面加上`< handle`

## 类的析构函数 Destructor



看不懂喵





































