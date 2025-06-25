---
title: 微机原理（DSP）笔记
top_img: /image/top3.jpg
mathjax: true
cover: https://img2.baidu.com/it/u=1235612171,3868693941&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281
description: 恳请各个教学班的老师能不能统一一下教学大纲和考纲...
tags: 
  - 电气
  - 笔记
  - 大三
  - 微机
categories: 课程

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

# 课程笔记

## 时钟与系统控制

| 从属     | 名称   | 描述                         | 使用                                          |
| -------- | ------ | ---------------------------- | --------------------------------------------- |
| 外部     | OSCCLK | 外部晶振信号                 |                                               |
| 时钟控制 | PLLCR  | 提供倍数于参考信号的系统时钟 | $\text{SYSCLK}=\frac{f\cdot\text{PLLCR}}2$    |
|          | PCLKCR | 外设时钟信号                 |                                               |
|          | HISPCP | 高速时钟信号                 |                                               |
|          | LOSPCP | 低速时钟信号                 |                                               |
| 看门狗   | WDCR   | 看门狗时钟寄存器             | 含使能控制、逻辑校验位、频率设置              |
|          | SCSR   | 系统控制和状态寄存器         | 含WDINTS（中断状态位）、WDENNIT（中断使能位） |
| 低功耗   | LPMCR0 | 低功耗控制寄存器0            | 低二位LPM控制低功耗模式，QUALSTDBY控制频率    |
|          | LPMCR1 | 低功耗控制寄存器1            | 低八位控制STDBY模式的唤醒（全1唤醒）          |

## GPIO

| 从属       | 名称    | 描述               | 使用                        |
| ---------- | ------- | ------------------ | --------------------------- |
| 控制寄存器 | GPxMUX  | 功能选择控制寄存器 | ‘0’ - I/O；‘1’ - 外设       |
|            | GPxDIR  | 方向控制寄存器     | ‘0’ - Input；‘1’ - Output   |
|            | GPxQUAL | 输入限定控制       | 使输入在n个采样相同时才变化 |
| 数据寄存器 | GPxDAT  | 数据寄存器         | 16位                        |

## CPU定时器

| 从属         | 名称       | 描述             | 使用                                                         |
| ------------ | ---------- | ---------------- | ------------------------------------------------------------ |
| 减法计数     | TIMER0TIM  | 计数器寄存器     | 32位减法计数器，减到0产生中断（控制寄存器）                  |
|              | TIMER0TIMH |                  | 与上面的合起来                                               |
| 赋值（高位） | TIMER0PRD  | 周期寄存器       | 定义为`long int*`，可以直接实现两个一起赋值，最大4G          |
|              | TIMER0PRDH |                  | 合起来的话，在上面那个地方赋值                               |
| 控制         | TIMER0PCR  | 控制寄存器       | 15位 - 中断标志位，计数器减到0置1，否则为0，写入1清零<br />5位 - 定时器重装，写1时重装PRD和TDDR(TPR)的值 |
| 赋值（低位） | TIMER0TPR  | 预定标寄存器     | 必须分两块写入数据，每块16位最大256 bit                      |
|              | TIMER0TPRH |                  | 跟上面那个都定义为`unsigned int*`                            |
| 控制         | TIMER0TCR  | 定时器控制寄存器 | 第15位 - 中断标志位。定时器到0时置1，写入1清零               |

因此：
$$
T=\frac{\text{TDDRH:TDDR}+1}{\text{SYSCLKOUT}(Hz)}\cdot(\text{PRDH:PRD}+1)
$$

## 中断

| 从属    | 名称    | 描述                      | 使用                                   |
| ------- | ------- | ------------------------- | -------------------------------------- |
| CPU中断 | IER     | 中断使能寄存器（16位）    | ‘0’ - 禁止；‘1’ - 使能                 |
|         | IFR     | 中断标志寄存器（16位）    | ‘0’ - 清零；‘1’ - 中断                 |
|         | INTM    | 全局中断使能寄存器        | ‘1’ - 全局使能                         |
| PIE中断 | PIRIER  | PIE中断使能寄存器（12×8） | 同上                                   |
|         | PIEIFR  | PIE中断标志寄存器（12×8） | 同上                                   |
|         | PIEACK  | PIE中断应答寄存器         | 不确定几位，清0申请中断，置1为等待状态 |
|         | PIECTRL | PIE控制寄存器             | ENPIE，位0，置1表示向量取自PIE向量表   |

## 存储器与寄存器

### 存储器与CMD

CMD：记录下如何分配存储空间内容的文件

CMD的工作分为两步：

1. MEMORY：指示定义存储空间
2. SECTIONS：分配存储空间

```c
/* SRAM.CMD */
MEMORY{
    PAGE 1: // PAGE0表示程序空间，PAGE1表示数据空间
    	SPI_A	:origin=0x007740, length=0x000010
    //   名称    起始地址           长度
    // 相当于在仓库（存储空间）里开了一个大集装箱，名叫SPI_A，并告诉大家这块箱子在哪，能装多少东西
}
SECTIONS{
    SciaRegsFile	:>SCI_A,	PAGE=1
    // 输出段名称      地址（绝对地址或地址名）
    // 以后公司采购，分类为SpiaRegsFile的数据（PAGE=1）都会被丢到SPI_A的箱子里
    // 因此，以后就不用管箱子叫啥了，直接把东西归类为SpiaRegsFile，我们称之为“段”
}
```

在C语音中已经预先定义好了很多**“段”**，我们可以直接拿来用，或者我们可以自己新建或定义“段”，用于存放我们所需要的**变量**。方法如下：

```c
/* 写法 */
#progma DATA_SECTION(<variables>,"<section_name>");
struction variables;
/* 解释 */
// DATA_SECTION 定义数据段，CODE_SECTION 定义程序段
// <variables> 是变量名，如s；<section_name>是段名，如上文的SciaRegsFile
// 下面一行是常见的变量定义，如：unsigned int s[100];
/* 举例 */
#progma DATA_SECTION(SciaRegs,"SciaRegsFile")；
volatile struct SCI_REGS SciaRegs;
```

### 寄存器

位域与结构：为了解决（1）不能对位变量的独立操作；（2）每一位都要写出具体数字；的问题。下面简述我们的解决方案

**（一）定义一个位结构（位域）——> 联合结构（共同体）**

```c
/* 以下文件应该放在.h文件（Head）下 */
/* 1. 定义位结构（位域） */
// 用于独立的对变量进行操作
struct GPFDAT_BITS{
    Uint16 GPIO0:1; // 第一个为最低位，:1表示长度为1bit
    Uint16 GPIO1:1;
    ...
};
/* 2. 定义联合结构（共同体） */
// 由位结构struct+整型变量Uint共同组成，可以单独操作也可以整体操作
union GPFDAT_REG{
    struct GPFDAT_BITS bit; // 单独操作调用方法
    Uint16 all; // 整体操作调用方法
};
```

演示一下调用方法：

```c
union GPFDAT_REG GPFDAT;
GPFDAT.all = 0x00ff;
GPFDAT.bit.GPIO15 = 1;
```

**（二）定义一个包含一组联合的结构（结构体文件）**

说来复杂，其实也不难，就是把刚刚我们的一堆共同体union丢到一起，就是结构体文件了。一个结构体文件相当于一个班。

```c
/* 以下文件应该放在.h文件（Head）下 */
/* 定义结构体（这个是最大的结构体了） */
struct GPIO_DATA_REGS{ //结构体名字
    union GPADAT_REG GPADAT; // 类型（union GPADAT_REG）+ 变量（GPADAT）
    ...
    union GPFDAT_REG GPFDAT;
    Uint16 rsvd1[4]; // 不严谨啊，位置不在这的，就是表示一下也可以有Uint16这种类型变量在的意思
};
/* 定义变量 */
extern volatile struct GPIO_DATA_REGS GpioDataRegs; // 这个就是最后用的变量之一了！
```

**（三）申明结构体变量实体，并指定其与section的关系（即分配空间）**

前半句话，就是上面（二）代码块中的最后一行，合并在一起写了

后半句话，参考CMD中的progma代码段，一般常用的都定义好了

```c
/* 以下文件应该放在.c文件下 */
#ifdef __cplusplus 
#pragma DATA_SECTION("GpioDataRegsFile") 
#else 
#pragma DATA_SECTION(GpioDataRegs,"GpioDataRegsFile");
#endif
volatile struct GPIO_DATA_REGS GpioDataRegs;
```

**（四）在链接命令文件CMD中建立连接**

参考CMD中的第一个代码块

```c
MEMORY{
    PAGE 1:
        GPIODAT : origin = 0x0070E0, length = 0x000020
        PIE_VECT: origin = 0x000D00, length = 0x000100
}
SECTIONS{
    PieVectTableFile : > PIE_VECT,  PAGE = 1
    GpioDataRegsFile : > GPIODAT ，PAGE = 1
}
```

**（五）成功调用**

变量成为一个结构的成员，同时又有了自己的地址

```c
GpioDataRegs.GPFDAT.bit.GPIO11 = 1;
GpioDataRegs.GPFDAT.all = 0x1234;
// 大结构体.共同体union.位域bit或整体all
```

## 串行外设接口SPI

| 从属 | 名称     | 描述                  | 使用                                                         |
| ---- | -------- | --------------------- | ------------------------------------------------------------ |
| 配置 | SPICCR   | SPI配置控制寄存器     | 第6位控制信号极性（上升/下降沿）<br />0-3位控制单个字符读取数量 |
| 控制 | SPICTL   | SPI工作控制寄存器     | 第2位网络模式控制（‘0’ - 从机；‘1’ - 主机）<br />第1位主从机发送使能TALK；第0位中断使能 |
| 状态 | SPISTS   | SPI状态寄存器         | 第7位接收器溢出标志<br />第6位只读中断标志**INT FLAG**（完成数据发送/接收）<br />第5位发送缓冲器已满标志位**FULL** |
| 时钟 | SPIBRR   | SPI波特率寄存器       | 第0-6位控制波特率（$Rate=\frac{LSPCLK}{SPIBRR+1}$）          |
| 数据 | SPIRXBUF | SPI串行接收缓存寄存器 | 接收后INT FLAG置1                                            |
|      | SPITXBUF | SPI串行发送缓存寄存器 | 发送后TX BUF FULL被清除                                      |
|      | SPIDAT   | SPI串行数据寄存器     | 略                                                           |

## 事件管理器EV

* 以EVA的Timer1为例

| 从属  | 名称    | 描述                 | 使用                                                         |
| ----- | ------- | -------------------- | ------------------------------------------------------------ |
| 控制  | GPTCONA | 全局控制寄存器A      | .T1PIN：比较输出极性，01低，10高<br />.T1CMPOE：比较输出使能（1有效）<br />.TCMPOE：全局比较输出使能（1有效） |
|       | T1CON   | 定时器1控制寄存器    | .TECMPR：定时器比较使能（1有效）<br />.TCLKS10：时钟源（00内部时钟）<br />.TENABLE：定时器使能（1有效）<br />.TPS：输入时钟预定标因子（分频：HSPCLK/2^n）<br />.TMODE10：计数模式（01连续增减，10连续增） |
| 计数  | T1CNT   | 定时器1计数寄存器    | 略                                                           |
|       | T1PR    | 定时器1周期寄存器    | 略                                                           |
|       | T1CMPR  | 定时器1比较寄存器    | 略                                                           |
| 死区  | DBTCONA | 死区定时器控制寄存器 | .DBTPS：死区定时器预定标因子（分频：T1时钟/2^n）<br />.EDBT1：死区定时器1使能（1有效）<br />.DBT：死区周期 |
| PWM波 | CMPR1   | 比较寄存器1          | 略                                                           |

## 数模转换器ADC

* ADC的时钟分频：

1. 准备：PCLKCR使能
2. 外部晶振信号30MHz——PLLCR=0xA——SYSCLKOUT=150MHz
3. HISPCP=001（例）——HSPCLK=150/2MHz=75MHz
4. ADCTRL3.ADCCLKPS分频（2n）倍（n=0时不起作用）
5. ADCTRL1.CPS分频（m+1）倍

| 从属 | 名称           | 描述                       | 使用                                                         |
| ---- | -------------- | -------------------------- | ------------------------------------------------------------ |
| 控制 | ADCTRL1        | ADC控制寄存器1             | .CPS：内核时钟预定标，用于分频<br />.CONT RUN：连续运行or启停模式（一般选0启停）<br />.SEQ CASC：SEQ级联or双序列 |
|      | ADCTRL2        | ADC控制寄存器2             | .RST1：复位序列发生器<br />.SOC SEQ1：序列发生器1启动触发，主动写入/中断自动调用<br />.INT ENA SEQ1：中断使能<br />.INT MOD SEQ1：中断方式（每个/隔一个）<br />.EVA SOC SEQ1：事件管理器EVA允许触发使能<br />其余有关SEQ2的略，类似 |
|      | ADCTRL3        | ADC控制寄存器3             | .ADCBGRFDN：上电，一般写1，需要长延时<br />.ADCPWDN：上电，一般写1，需要长延时<br />.ADCCLKPS：时钟分频<br />.SMODE SEL：采样方式：顺序or并发 |
| 序列 | MAXCONV        | 最大转换通道寄存器         | 进行（n+1）次转换                                            |
|      | ADCCHSELSEQ1-4 | 输入通道选择序列控制寄存器 | 见书p254，一个CHSELSEQ有4个CONV，一个CONV寄存一个输入        |
| 状态 | ADCASEQSR      | 自动序列状态寄存器         | 看不懂                                                       |
|      | ADCST          | ADC状态和标志寄存器        | .INT SEQx CLR：中断清除位，写1清除<br />.SEQx BSY：忙状态位，0表示空闲，只读<br />.INT SEQx：中断标志位，1表示有中断，只读 |



# C语言代码

## 基本代码定义与框架

### 引脚定义实例

```c
#define <引脚名> *((volatile unsigned int*) 引脚号);
#define PLLCR *((volatile unsigned int*) 0x7021);
```

### 控制时钟PLL初始化

```c
void InitPLL(){
	EALLOW;
	PLLCR=10; // 0~10, SYSCLK=外部晶振f*PLLCR/2
	EDIS;
}
```

### 看门狗初始化

```c
void DisableDog(){
	EALLOW;
	WDCR = 0x0068; // 禁止WatchDog, 0x0028开启
	EDIS;
}
```

### 外设时钟初始化

```c
void InitPeripheralClock(){
	EALLOW;
	EVAENCLK = 1;
	EVBENCLK = 1;
	SCIENCLKA = 1;
	EDIS;
}
```

### 总初始化 InitSysCtrl

#### 写法1

```c
void InitSysCtrl(){
	DisableDog();
	InitPLL();
	InitPeripheralClock();
}
```

#### 写法2

```c
void InitSysCtrl(){
    EALLOW;
	// DisableDog();
	WDCR = 0x0068;
	// InitPLL();
    PLLCR=(0~10);
	// InitPeripheralClock();
    EVAENCLK = 1;
	EVBENCLK = 1;
	SCIENCLKA = 1;
    EDIS;
}
```

### GPIO初始化 InitGpio

```c
void InitGpioF(){
    EALLOW;
    GPFMUX=0x0000; // 也等于0x80FF等
    GPXDIR=0xFF00; // 也等于3F00等
    EDIS;
}
```

### CPU定时器初始化 InitCPUtimer

```c
#define TIMER0PRD *((volatile long int*)0x0C02;
#define TIMER0TCR *((volatile unsigned int*)0x0C04;
#define TIMER0TPR *((volatile unsigned int*)0x0C06;
#define TIMER0TPRH *((volatile unsigned int*)0x0C07;
// SYSCLKIN = 30 MHz, PLLCR = 10, SYSCLKOUT = 150 MHz
// 要求变成1s的定时器，这里先除150[(149+1)*(0+1)]，再除10e6(999999+1)
void InitCPUtimer(void){
    EALLOW;
    TIMER0TPR = 149;
    TIMER0TPRH = 0;
    TIMER0PRD = 999999;
    TIMER0TCR = 0xf000; // 中断清除
    EDIS;
}
```

### 时钟延时函数

```c
// 已经定义过InitCPUtimer
void Delay(unsigned int val){
    int k;
    EALLOW;
    TIMER0PRD = val;
    TIMER0TCR = 0xf020; // 重新装载数据
    do {k = TIMER0TCR} while ((k & 0x8000) == 0);
    EDIS;
}
```

### PIE中断初始化 InitPIE

```c
// 假设仅使用INT1.7，仅允许该中断通过
#define PIECTRL *((volatile unsigned int*)0x0CE0);
#define PIEACK *((volatile unsigned int*)0x0CE1);
#define PIEIER1 *((volatile unsigned int*)0x0CE2);
#define PIEIFR1 *((volatile unsigned int*)0x0CE3);
void InitPIE(void){
    EALLOW;
    PIEIFR1 = 0x0000;
    PIEIER1 = 0x0040; // 使能
    PIECTRL = 0x1; // 使向量取自PIE向量表
    PIEACK = 0x1; // 清零，表示暂无中断
}
```

### 中断向量的申请

```c
// 1. 申明
interrupt void INT_m_n(void); // m=0~12, n=0~8
// 2.地址计算
PIE_VECT_m_n = 0x0D40 + ((m-1)*8+(n-1))*2; // 起始地址为0x0D40，如INT1.7就是0x0D4C
// 3. 赋值
typedef interrupt void (*PINT)(void);
(*(PINT*) PIE_VECT_m_n) = &INT_m_n
```

### CPU中断初始化

```c
void InitCPU(void){
    EALLOW;
    // 汇编语言
    asm(" and IFR,#00H"); // IFR置0，表示此时无中断
    asm(" and IER,#01H"); // IER置1，使能
    asm(" EINT"); // 总闸使能，这个就是INTM
    EDIS;
}
```

### SPI初始化

```c
void InitSpi(void){
    EALLOW;
    GpioMuxRegs.GPFMUX.all = 0x000F; // SPI与GPIOF共用引脚
    EDIS;
    SpiaRegs.SPICCR.all = 0x47; // 个人感觉0x07也行
    SpiaRegs.SPICTL.all = 0x06; // 主机模型 + 禁用中断
    SpiaRegs.SPIBRR = 0x7F; // 书上作0x1D，配置波特率
    SpiaRegs.SPICCR.all = SpiaRegs.SPICCR.all | 0x0080; // 退出复位的方式
}
```

### SPI数据发送

```c
void SpiSent(int k){
    SpiaRegs.SPITXBUF = k; // 数据输入
    while (SpiaRegs.SPISTS.bit.INT_FLAG != 1) {} // 确认数据发送完毕
    SpiaRegs.SPIRXBUF = SpiaRegs.SPIRXBUF; // 复位
}
```

### 点红灯函数

```c
int redled = 0xffff;
void Out_redled(redled){
    EALLOW;
    int i;
    GpioMuxRegs.GPBDIR.all |= 0Xff00;
    GpioDataRegs.GPEDAT.all = 2;
    GpioDataRegs.GPBDAT.all = redled * 256;
    for(i = 0; i<10; i++){}
    GpioDataRegs.GPEDAT.all = 3;
    GpioDataRegs.GPBDAT.all = redled;
    for(i = 0; i<10; i++){}
    GpioDataRegs.GPEDAT.all = 7;
    GpioMuxRegs.GPBDIR.all &= 0X00ff;
    EDIS;
}
```

### 八段数码管循环

```c
void Display(void){
    int i;
    GpioDataRegs.GPADAT.bit.GPIOA11 = 0;
    for(i=0;i<8;i++){
        // 依次输入8个数据，数码管自动往前移位
        SpiaRegs.SPITXBUF= LEDCode[LEDReg[i]]; 
        while (SpiaRegs.SPISTS.bit.INT_FLAG!= 1) {};
        SpiaRegs.SPIRXBUF= SpiaRegs.SPIRXBUF;
    }
    GpioDataRegs.GPADAT.bit.GPIOA11 = 1;
}
```

### 键盘的读取

```c
int Keyin = 0xffff;
void Keyscan(void){
    unsigned int key1R , key2R; 
    int i;
    EALLOW;
    GpioMuxRegs.GPBDIR.all &= 0x00FF;
    /* KEYA - 低八位 */
    GpioDataRegs.GPEDAT.all  = 0xFFF8;
    for (i=0; i<100; i++) {} //短延时
    key1R = GpioDataRegs.GPBDAT.all;
    for (i=0; i<30000; i++) {}   // 长延时消除抖动
    if (key1R != GpioDataRegs.GPBDAT.all) key1R=0xffff ;
    /* KEYB - 高八位 */
    GpioDataRegs.GPEDAT.all  = 0xFFF9;
    for (i=0; i<100; i++) {} //短延时
    key2R = GpioDataRegs.GPBDAT.all;
    for (i=0; i<30000; i++) {}   // 长延时消除抖动
    if(key2R != GpioDataRegs.GPBDAT.all) key2R=0xffff;
    /* Add */
    Keyin = key2R & 0xff00 + key1R / 256; 
	// 例：key2R = 0xfbff, key1R = ffff, 则：Keyin = fbff, 同一时间不允许两个键同时按下 
    EDIS;
}
```

### 等待键盘输入

```c
void WaitKeyin(void){
    int temp;
    while (Keyin == 0xffff) {Keyscan();} // 等待直到键盘有输入
    temp = Keyin;
    while (Keyin != 0xffff) {Keyscan();} // 松开键盘时建立响应
    switch (temp){
        case K1: Keyin = 1; break;
        default : Keyin = 0x10; break;
    }
}
```

### 键号判别、功能转移

```c
void main(void){
    ...
    // for (;;) {asm(" IDLE");}
    for (;;) {KeyFunction();}
}
void KeyFunction(void){
    WaitKeyin();
    switch (Keyin){
        case 1: {
            	// do something
            	break;
        	}
        default: break;
    }
}
```

### 通用定时器编程初始化

```c
void EVA_Timer1(){
    EvaRegs.EXTCONA.bit.INDCOE= 1; // 决定T1，T2是否关联
    EvaRegs.GPTCONA.all= 0x0012; // 4.5.6位说明T1，T2是否输出
    EvaRegs.T1PR = 0x003; // 峰值
    EvaRegs.T1CMPR = 0x0001; // Compare
    EvaRegs.T1CNT = 0x0000; // 计数器初始化
    EvaRegs.T1CON.all = 0x1742; // 确定运行方式，或0x0F42
}
```

### 设置PWM波周期波形

1. 准备：PCLKCR使能EVA时钟
2. 晶振30MHz——PLLCR=10——SYSCLK=150MHz
3. HISPCP=001（例）——HSPCLK=150/2MHz=75MHz（见书p134）
4. T1CON.TPS10=n——T1CLK：HSPCLK/2^ n=75/2^n MHz
5. T1PR = T1CLK / 要求的时钟频率 - 1

* T1PWM，T2PWM不带死区
* PWM1-6带死区，12、34、56互补

```c
void InitEVA(void){
    /* 初始化设置 */
    EvaRegs.T1CON.bit.TMODE = 2; // 连续增
    EvaRegs.T1CON.bit.TPS = 1; // T1CLK = HSPCLK/2 = 37.5 MHz
    EvaRegs.T1CON.bit.TENABLE = 0; // 暂时禁止T1计数
    EvaRegs.T1CON.bit.TCLKS10 = 0; // 使用内部时钟T1CLK
    EvaRegs.T1CON.bit.TECMPR = 1; // 使能定时器比较操作
    EvaRegs.GPTCONA.bit.TCMPOE = 1; // T1和T2互不影响（书上代码写的是TCOMPOE?）
    EvaRegs.GPTCONA.bit.T1PIN = 1; //低电平有效
    EvaRegs.COMCONA.bit.CENABLE = 1; // 使能比较单元的比较操作
    EvaRegs.COMCONA.bit.FCOMPOE = 1; // 全比较输出
    EvaRegs.COMCONA.bit.CLD = 2;
    /* 具体设置——T1PWM */
    EvaRegs.T1PR = 0x927B; // 1kHz，计算详见书p239
    EvaRegs.T1CMPR = 0x3A98; // 占空比40%
    EvaRegs.T1CNT = 0;
    /* 死区设置——PWM1-6 */
    EvaRegs.DBTCONA.bit.DBT = 10; // 周期
    EvaRegs.DBTCONA.bit.EDBT1 = 1; // 死区定时器1使能
    EvaRegs.DBTCONA.bit.DBTPS = 4; // 预标定因子——分频
    EvaRegs.ACTRA.all = 0x9999;
    EvaRegs.CMPR1 = 0x3A98; // 占空比40%
}
void main(void){
    /* 初始化 */
    InitEVA();
    EvaRegs.T1CON.bit.TENABLE = 1; // 使能定时器1计数
    while(1){}
}
```

### ADC上电

```c
void AdcPower(void){
    int i;
    AdcRegs.ADCTRL3.bit.ADCBGRFDN = 0x3; // ADC带隙和参考电路加电
    for(i=0;i<100000;i++){} //至少5ms延时
    AdcRegs.ADCTRL3.bit.ADCPWDN = 1; // ADC模拟电路加电
    for(i=0;i<50000;i++){} //至少20us延时
}
```

### ADC初始化

```c
void InitAdc(void){
    AdcRegs.ADCTRL1.bit.CPS = 1; // 3分频 —— 75MHz/3 = 25MHz
    AdcRegs.ADCTRL1.bit.CONT_RUN = 0; // 启停模式
    AdcRegs.ADCTRL1.bit.SEQ_CASC = 1; // 单序列发生器
    AdcRegs.ADCTRL1.bit.ACQ_PS = 0xf; // 采样窗口大小
    AdcRegs.ADCTRL3.bit.ADCCLKPS = 2; // 4分频 —— 25MHz/4 = 6.25MHz
    AdcRegs.ADCTRL3.bit.SMODE_SEL = 0; // 顺序采样
    AdcRegs.ADCMAXCONV.all = 0x0; // 只采样1个通道，书上这里寄存器写错了
    AdcRegs.ADCCHSELSEQ1.bit.CONV00 = 0xF; // 本实验仅用到ADCINB7
    /* 书中还有下文，但是感觉应该都是控制中断，本实验不需要中断，因此不用初始化 */
}
```

### ADC调用示例

```c
void AdcFunction(void){
    AdcRegs.ADCTRL2.bit.SOC_SEQ1 = 1; // 手动启动
    while(AdcRegs.ADCST.bit.SEQ1_BSY == 1){} // 等待转换完毕
    int AD1,AD2;
    AD1 = AdcRegs.ADCRESULT0 >> 4; // 数据寄存在高12位，右移四位
    AD2 = (AD1-0x0)*3*1000 / 0x0fff; // 0x0对应0,0x0fff对应3V，线性比例关系。
    //  *1000 用于取小数，可自由增删0的个数，以增减精度（因为是int）
    /* TODO */
    AdcRegs.ADCTRL2.bit.RST_SEQ1 = 1; // 复位序列发生器SEQ1
}
```

### 键盘与红灯的冲突解决方案

原因是两者都会调用GPB和GPE，且键盘需要一直进行监视（`Keyscan()`），不能把GPB放出来。

1. 选择将`Keyscan()`这个函数放到CPUTimer中，而不是在main的死循环里面调用。
2. 将`Keyscan()`函数中的输出值放到全局变量中，并尽可能减小其时间，即删去防抖动的延时、减小反应时间延时。
3. `WaitKeyin()`函数不再被允许调用`Keyscan()`，而是直接读取数值
4. 在`Keyscan()`中的开头和结尾都要加上对GPB的控制

```c
int Keyin = 0xffff;
void Keyscan(void){
    unsigned int key1R , key2R; 
    int i;
    EALLOW;
    GpioMuxRegs.GPBDIR.all &= 0x00FF;
    /* KEYA - 低八位 */
    GpioDataRegs.GPEDAT.all  = 0xFFF8;
    for (i=0; i<10; i++) {} //短延时
    key1R = GpioDataRegs.GPBDAT.all;
    /* KEYB - 高八位 */
    GpioDataRegs.GPEDAT.all  = 0xFFF9;
    for (i=0; i<10; i++) {} //短延时
	key2R = GpioDataRegs.GPBDAT.all;
    /* Add */
    Keyin = key2R & 0xff00 + key1R / 256; 
	GpioMuxRegs.GPBDIR.all &= 0x00FF;
    EDIS;
}
void WaitKeyin(void){
    do {asm(" IDLE");} while(Keyin == 0xffff); // 按下
    temp = Keyin;
    do {asm(" IDLE");} while(Keyin != 0xffff); // 松开
    switch(temp){
        case 0xfffe: Keyout = 0; break; // 0
        default:
    }
}
int redled = 0xffff;
void Out_redled(redled){
    EALLOW;
    int i;
    GpioMuxRegs.GPBDIR.all |= 0Xff00;
    GpioDataRegs.GPEDAT.all = 2;
    GpioDataRegs.GPBDAT.all = redled * 256;
    for(i = 0; i<10; i++){}
    GpioDataRegs.GPEDAT.all = 3;
    GpioDataRegs.GPBDAT.all = redled;
    for(i = 0; i<10; i++){}
    GpioDataRegs.GPEDAT.all = 7;
    GpioMuxRegs.GPBDIR.all &= 0X00ff;
    EDIS;
}
```



## 实例

### 实例1 点灯

* 点亮六盏灯，利用GPIOF的8-13位输出。（高电平灭灯）

```c
#define GPFMUX *((volatile unsigned int*)0x70D4);
#define GPFDIR *((volatile unsigned int*)0x70D5);
#define GPFDAT *((volatile unsigned int*)0x70F4);
int delay_n 30000;
void InitSysCtrl(){}
void InitGpioF(){}
void Delay_Loop(int n){
    for (int i=0;i<n;i++){}
}
void main(){
    InitSysCtrl();
    InitGpioF();
    for (;;){
        Delay_Loop(delay_n);
        GPFDAT = 0x5600 // 0x56 = 01010110
        Delay_Loop(delay_n);
        GPFDAT = 0x1200 // 0x12 = 00010010
    }
}
```

### 实例2 中断编程

* 利用TIMER0中断，使GPIOF8闪烁，周期为3s，亮1s。

```c
typedef interrupt void(*PINT)(void);
interrupt void INT_1_7(void);
void main(void){
    // 四个初始化
    InitSysCtrl();
    InitGpioF();
    InitCPUtimer();
    InitPIE();
    // 主程序
    EALLOW;
    *(PINT*)0x0D4C = &INT_1_7;
    asm(" and IFR,#00H");
    asm(" and IER,#01H");
    asm(" EINT");
    LPMCR0 = 0x0; // 定义低功耗方式为00，即IDLE
    EDIS;
    // Else
    k = 0;
    for(;;){
        asm(" IDLE"); // 开始睡觉
    }
}
interrupt void INT_1_7(void){
    k += 1; // Global k
    if (k==3){
        k=0;
        GPFDAT = 0xfeff; // 开
    }else{
        GPFDAT = 0x0100; // 关
    }
    PIEACK = 0x1; // 表示响应过了（0的话会申请中断）
    TIMER0TCR = 0xf000; // 写1中断清除
}
```

### 实例3 绿灯闪烁+点红灯

* GPIOE

| 输入 | 效果                                        |
| ---- | ------------------------------------------- |
| 2    | 选择寄存器1，即GPBDAT与左边八盏红灯建立联系 |
| 3    | 选择寄存器2，即GPBDAT与右边八盏红灯建立联系 |
| 7    | 产生一个下降沿，使寄存器（GPBDAT）发送数据  |

* GPIOB

输入数据的前八位控制红灯（初始化GPBDIR为0xFF00）

如`GPBDAT = 0xfeff`，且`GPEDAT = 2`，则左边第一盏红灯亮。（DAT最低位对应第一盏灯）

```c
#define EALLOW asm(" EALLOW")
#define EDIS   asm(" EDIS")
#define PLLCR   *((volatile unsigned int *) 0x7021)
#define PCLKCR  *((volatile unsigned int *) 0x701C)
#define HISPCP  *((volatile unsigned int *) 0x701A)
#define LOSPCP  *((volatile unsigned int *) 0x701B)
#define WDCR    *((volatile unsigned int *) 0x7029)
#define SCSR    *((volatile unsigned int *) 0x7022)
#define LPMCR0  *((volatile unsigned int *) 0x701E)
#define GPFMUX  *((volatile unsigned int *) 0x70D4)
#define GPFDIR  *((volatile unsigned int *) 0x70D5)
#define GPFDAT  *((volatile unsigned int *) 0x70F4)
#define GPBMUX  *((volatile unsigned int *) 0x70C4)
#define GPBDIR  *((volatile unsigned int *) 0x70C5)
#define GPBDAT  *((volatile unsigned int *) 0x70E4)
#define GPEMUX  *((volatile unsigned int *) 0x70D0)
#define GPEDIR  *((volatile unsigned int *) 0x70D1)
#define GPEDAT  *((volatile unsigned int *) 0x70F0)
#define TIMER0PRD   *((volatile unsigned long int *) 0x0C02)
#define TIMER0TCR   *((volatile unsigned int *) 0x0C04)
#define TIMER0TPR   *((volatile unsigned int *) 0x0C06)
#define TIMER0TPRH  *((volatile unsigned int *) 0x0C07)
#define  PIECTRL    *((volatile unsigned int *) 0x0CE0)
#define  PIEACK     *((volatile unsigned int *) 0x0CE1)
#define  PIEIER1    *((volatile unsigned int *) 0x0CE2)
#define  PIEIFR1    *((volatile unsigned int *) 0x0CE3)

void InitPll(void)
{   int i;
    EALLOW;
    PLLCR = 10;//SYSCLK = 外部振荡频率（30M） * PLLCR /2
    EDIS;
    for(i= 0; i< ( (131072/2)/12 ); i++) {;}
}
void InitPeripheralClocks(void)
{   EALLOW;
    HISPCP = 1;  // HISPCLK= SYSCLK * HISPCP /2
    LOSPCP = 2;  // LOSPCLK= SYSCLK * LOSPCP /2
    PCLKCR = 0x909;// 开启部分外设
    EDIS;
}
void DisableDog(void)
{   EALLOW;
    WDCR = 0x0068; //关闭看门狗；；
    EDIS;
}
void InitSysCtrl(void)
{
    DisableDog();
    InitPll();
    InitPeripheralClocks();
}
void InitGpiof(void)
{   EALLOW;
    GPFMUX =0x0000;
    GPFDIR =0xFF00;
    EDIS;
}
void InitGpiob(void)
{   EALLOW;
    GPBMUX =0x0000;
    GPBDIR =0xFF00;
    EDIS;
}
void InitGpioe(void)
{   EALLOW;
    GPEMUX =0x0;
    GPEDIR =0x7;
    EDIS;
}
void InitCputimer(void)
{   EALLOW;
    TIMER0TPR=149;
    TIMER0TPRH=0;
    TIMER0PRD=999;//周期为0.001s，即1ms 
    TIMER0TCR=0xf000;
    EDIS;
}
void InitPIE(void)
{   EALLOW;
    PIEIFR1=0x0000;
    PIEIER1=0x0040;
    PIECTRL=0x1;
    PIEACK =0x1;
    EDIS;
}

typedef interrupt void(*PINT)(void);
interrupt void INT_1_7(void);
int a, b, c, d, e, f;
int i;
void main(void)
{   InitSysCtrl();
    InitGpiof();
    InitGpiob();
    InitGpioe();
    InitCputimer();
    InitPIE();
    EALLOW;

    //点红灯

    GPEDAT = 2;      //选第一组
    GPBDAT = 0xFDFF; //第二盏灯亮
//    for(i = 0;i<100;i++){}
    GPEDAT = 7;      //使产生一个下降沿

    GPEDAT = 3;      //选第二组
    GPBDAT = 0x7FFF; //第一盏灯亮
//    for(i = 0;i<100;i++){}
    GPEDAT = 7;      //使产生一个下降沿


    * (PINT *) 0x0D4C = & INT_1_7;
    asm("  and IFR,#00H");
    asm("  or  IER,#01H");
    asm("  EINT");
    LPMCR0=0x0;
    EDIS;
    a = 0, b = 0, c = 0, d = 0, e = 0, f = 0;
    for(;;){asm(" IDLE");};
}

interrupt void INT_1_7(void)
{
    //第一盏灯
    a+=1;
    if(a == 500){
        GPFDAT=GPFDAT&0xFEFF;//变亮
    }
    if(a == 2000){
        a = 0;
        GPFDAT=GPFDAT|0x0100;//变暗
    }

    //第二盏灯
    b+=1;
    if(b == 300){
        GPFDAT=GPFDAT&0xFDFF;//变亮
    }
    if(b == 1000){
        b = 0;
        GPFDAT=GPFDAT|0x0200;//变暗
    }

    //第三盏灯
    c+=1;
    if(c == 100){
        GPFDAT=GPFDAT&0xFBFF;//变亮
    }
    if(c == 200){
        c = 0;
        GPFDAT=GPFDAT|0x0400;//变暗
    }

    //第四盏灯
    d+=1;
    if(d == 10){
        GPFDAT=GPFDAT&0xF7FF;//变亮
    }
    if(d == 20){
        d = 0;
        GPFDAT=GPFDAT|0x0800;//变暗
    }

    //第五盏灯
    e+=1;
    if(e == 9){
        GPFDAT=GPFDAT&0xEFFF;//变亮
    }
    if(e == 10){
        e = 0;
        GPFDAT=GPFDAT|0x1000;//变暗
    }

    //第六盏灯
    GPFDAT=GPFDAT|0x2000;
    
    PIEACK=0x1;
    TIMER0TCR=0xf000;
}
```

### 实例4 键盘响应+时钟+AD转换

```c
#include "DSP281x_Device.h"     // DSP281x头文件
#include "DSP281x_GlobalPrototypes.h"// Prototypes for global functions within the  .c files.

/* Init */ 
void InitGpiof(void)
{   EALLOW;
    GpioMuxRegs.GPFMUX.all =0x0000;
    GpioMuxRegs.GPFDIR.all =0xFF00;
    EDIS;
}
void InitGpioe(void)
{   EALLOW;
    GpioMuxRegs.GPEMUX.all =0x0;
    GpioMuxRegs.GPEDIR.all =0x7;
    EDIS;
}
void InitGpiob(void)
{   EALLOW;
    GpioMuxRegs.GPBMUX.all =0x0000;
    GpioMuxRegs.GPBDIR.all =0xFF00;
    EDIS;
}
void InitGpioa(void)
{   EALLOW;
    GpioMuxRegs.GPAMUX.all =0x0000;
    GpioMuxRegs.GPADIR.all =0xFF00;
    EDIS;
}
void InitCputimer(void)
{   EALLOW;
    CpuTimer0Regs.TPR.all = 149;
    CpuTimer0Regs.TPRH.all= 0;
    CpuTimer0Regs.PRD.all = 9999; // 10ms一个timer0中断
    CpuTimer0Regs.TCR.all =0xf000;
    EDIS;
}
void InitSpi(void){
    EALLOW;
    GpioMuxRegs.GPFMUX.all = 0x000F; // SPI与GPIOF共用引脚
    EDIS;
    SpiaRegs.SPICCR.all = 0x47; // 个人感觉0x07也行？ 
    SpiaRegs.SPICTL.all = 0x06; // 主机模型 + 禁用中断
    SpiaRegs.SPIBRR = 0x7F;
    SpiaRegs.SPICCR.all = SpiaRegs.SPICCR.all | 0x0080; // 退出复位的方式
}
//typedef interrupt void(*PINT)(void);
interrupt void INT_1_7(void);
void InitPIE(void)
{   EALLOW;
    PieCtrlRegs.PIEIFR1.all=0x0000;
    PieCtrlRegs.PIEIER1.all=0x0040;
    PieCtrlRegs.PIECRTL.bit.ENPIE=0x1;
    PieCtrlRegs.PIEACK.all =0x1;
    EDIS;
}
void AdcPower(void){
    int i;
    AdcRegs.ADCTRL3.bit.ADCBGRFDN = 0x3; // ADC带隙和参考电路加电
    for(i=0;i<10000;i++){} //至少5ms延时
    AdcRegs.ADCTRL3.bit.ADCPWDN = 1; // ADC模拟电路加电
    for(i=0;i<5000;i++){} //至少20us延时
}
void InitAdc(void){ // 这里跟老师的有点不太一样，改了分配，最终6.25MHz快了2倍
    AdcRegs.ADCTRL1.bit.CPS = 2; // 3分频 —— 75MHz/3 = 25MHz
    AdcRegs.ADCTRL1.bit.CONT_RUN = 0; // 启停模式
    AdcRegs.ADCTRL1.bit.SEQ_CASC = 0; // 单序列发生器
    AdcRegs.ADCTRL1.bit.ACQ_PS = 0xf; // 采样窗口大小
    AdcRegs.ADCTRL3.bit.ADCCLKPS = 2; // 4分频 —— 25MHz/4 = 6.25MHz
    AdcRegs.ADCTRL3.bit.SMODE_SEL = 0; // 顺序采样
    AdcRegs.ADCMAXCONV.all = 0x0; // 只采样1个通道
    AdcRegs.ADCCHSELSEQ1.bit.CONV00 = 0xF; // 本实验仅用到ADCINB7
    /* 书中还有下文，但是感觉应该都是控制中断，本实验不需要中断，因此不用初始化 */
}

/* Functions */
int sec=0,min=0,hour=0;
int LEDReg[8]={0,0,0,0,0,0,0,0};
unsigned  int LEDCode[30]={\
// 0      1      2     3      4      5       6      7      8      9
0xc000,0xf900,0xA400,0xB000,0x9900,0x9200,0x8200,0xF800,0x8000,0x9000,\
// A      b     C      d      E      F       P      -      c      空 
0x8800,0x8300,0xc600,0xa100,0x8600,0x8e00,0x8c00,0xbf00,0xa700,0xff00,\
// 0.     1.     2.    3.     4.     5.      6.     7.     8.     9.
0x4000,0x7900,0x2400,0x3000,0x1900,0x1200,0x0200,0x7800,0x0000,0x1000};
void Display(void){
    int i;
    GpioDataRegs.GPADAT.bit.GPIOA11 = 0;
    for( i=0;i<8;i++){
        // 依次输入8个数据，数码管自动往前移位
        SpiaRegs.SPITXBUF= LEDCode[LEDReg[i]]; 
        while (SpiaRegs.SPISTS.bit.INT_FLAG!= 1) {};
        SpiaRegs.SPIRXBUF= SpiaRegs.SPIRXBUF;
    }
    GpioDataRegs.GPADAT.bit.GPIOA11 = 1;
}

int redled  = 0x0000;//低八位是左边，从低到高是从左到右；高八位是右边，从高到低是从右到左
void Out_redled (redled){
    EALLOW;
    int i;
    GpioMuxRegs.GPBDIR.all |= 0XFF00;
    GpioDataRegs.GPEDAT.all = 2;
    GpioDataRegs.GPBDAT.all = redled * 256;
    for(i = 0; i<100; i++){}
    GpioDataRegs.GPEDAT.all = 3;
    GpioDataRegs.GPBDAT.all = redled;
    for(i = 0; i<100; i++){}
    GpioDataRegs.GPEDAT.all = 7;
    GpioMuxRegs.GPBDIR.all &= 0X00FF;
    EDIS;
}

int Keyin = 0xffff;
int Keyout = 16; // 0x10
int Flag_Stop = 0;
int flag_AD = 0; // 1-AD转换，0-时钟
int temp[6]={0,0,0,0,0,0};
int AD[4]={0,0,0,0};
int ten_ms = 0;//10ms计数
void Keyscan(void){
    unsigned int key1R , key2R; 
    int i;
    EALLOW;
    GpioMuxRegs.GPBDIR.all &= 0x00FF;
    /* KEYA - 低八位 */
    GpioDataRegs.GPEDAT.all  = 0xFFF8;
    for (i=0; i<100; i++) {} //短延时
    key1R = GpioDataRegs.GPBDAT.all;
    for (i=0; i<30000; i++) {}   // 长延时消除抖动
    if (key1R != GpioDataRegs.GPBDAT.all) key1R=0xffff ;
    /* KEYB - 高八位 */
    GpioDataRegs.GPEDAT.all  = 0xFFF9;
    for (i=0; i<100; i++) {} //短延时
    key2R = GpioDataRegs.GPBDAT.all;
    for (i=0; i<30000; i++) {}   // 长延时消除抖动
    if(key2R != GpioDataRegs.GPBDAT.all) key2R=0xffff;
    /* Add */
    Keyin = key2R & 0xff00 + key1R / 256; 
    // 例：key2R = 0xfbff, key1R = ffff, 则：Keyin = fbff
    // 同一时间不允许两个键同时按下
    EDIS;
}
void WaitKeyin(void){
    int temp;
    while (Keyin == 0xffff) {Keyscan();} // 等待直到键盘有输入
    temp = Keyin;
    while (Keyin != 0xffff) {Keyscan();} // 松开键盘时建立响应
    switch (temp){
        // 低八位 - key1R
        case 0xfffe: Keyout = 0; break; // 0
        case 0xfffd: Keyout = 1; break; // 1
        case 0xfffb: Keyout = 2; break; // 2
        case 0xfff7: Keyout = 3; break; // 3
        case 0xffef: Keyout = 4; break; // 4
        case 0xffdf: Keyout = 5; break; // 5
        case 0xffbf: Keyout = 6; break; // 6
        case 0xff7f: Keyout = 7; break; // 7
        // 高八位 - key2R
        case 0xfeff: Keyout = 8; break; // 8
        case 0xfdff: Keyout = 9; break; // 9
        case 0xfbff: Keyout = 10; break; // A
        case 0xf7ff: Keyout = 11; break; // B
        case 0xefff: Keyout = 12; break; // C
        case 0xdfff: Keyout = 13; break; // D
        case 0xbfff: Keyout = 14; break; // E
        case 0x7fff: Keyout = 15; break; // F
        default : Keyout = 0x10; break;
    }
}
void TimerModify(void){
    int i = 0, j = 0, flag = 0;
    while (i<6){
        WaitKeyin();
        switch (Keyout){
            case 0: temp[i++] = 0; break;
            case 1: temp[i++] = 1; break;
            case 2: temp[i++] = 2; break;
            case 3: temp[i++] = 3; break;
            case 4: temp[i++] = 4; break;
            case 5: temp[i++] = 5; break;
            case 6: temp[i++] = 6; break;
            case 7: temp[i++] = 7; break;
            case 8: temp[i++] = 8; break;
            case 9: temp[i++] = 9; break;
            default: {
                flag = 1;
                for (j=0;j<6;temp[j++]=0){}
                i = 6;
                break;
            }
        }
    }
    if (!flag){
        hour = temp[0]*10+temp[1];
        min = temp[2]*10+temp[3];
        sec = temp[4]*10+temp[5];
        for (j=0;j<6;temp[j++]=0){}
    }
}
void LED_Filling(void){
    LEDReg[0] = hour / 10; LEDReg[1] = hour % 10; // hour
    LEDReg[3] = min / 10; LEDReg[4] = min % 10; // min
    LEDReg[6] = sec / 10; LEDReg[7] = sec % 10; // sec
    LEDReg[2] = 17; LEDReg[5] = 17; // 分隔符:-
}
void AdcFunction(void){
    /* Read */
    while(AdcRegs.ADCST.bit.SEQ1_BSY == 1){} // 等待转换完毕
    unsigned long int AD1,AD2,i;
    AD1 = AdcRegs.ADCRESULT0 >> 4; // 数据寄存在高12位，右移四位
    AD2 = (AD1)*3*1000 / 0x0fff; // 0x0对应0,0x0fff对应3V，线性比例关系。
    //  *1000 用于取小数，可自由增删0的个数，以增减精度（因为是int）
    AD[0] = AD2 / 1000;
    AD[1] = (AD2 % 1000) / 100;
    AD[2] = (AD2 % 100) / 10;
    AD[3] = (AD2 % 10);
    AdcRegs.ADCTRL2.bit.RST_SEQ1 = 1; // 复位序列发生器SEQ1
    AdcRegs.ADCTRL2.bit.SOC_SEQ1 = 1; // 手动启动
    /* Led Filling */
    for (i=0;i<3;i++) LEDReg[i+5] = AD[i+1];
    LEDReg[4] = AD[0] + 20; // 带小数点
    LEDReg[0] = 10; LEDReg[1] = 13; LEDReg[2] = 18; LEDReg[3] = 17; // 标识符：Adc-
    //LEDReg[7] = 19;
    int offset = AD2 / 500;
    GpioDataRegs.GPFDAT.all = (0xff00 << offset) % 0x10000;
}
void KeyFunction(void){
    WaitKeyin();
    switch (Keyout){
        case 0: {
            if(++sec >=60) sec = 0; //秒+1
            LED_Filling();
            Display();
            break;
        }
        case 1: {
            if(--sec <0) sec = 59; //秒-1
            LED_Filling();
            Display();
            break;
        }
        case 2: {
            if(++min >=60) min = 0; //分+1
            LED_Filling();
            Display();
            break;
        }
        case 3: {
            if(--min <0) min = 59; //分-1
            LED_Filling();
            Display();
            break;
        }
        case 4: {
            if(++hour >=24) hour = 0; //时+1
            LED_Filling();
            Display();
            break;
        }
        case 5: {
            if(--hour <0) hour = 23; //时-1
            LED_Filling();
            Display();
            break;
        }
        case 6: {
            Flag_Stop = 1;      //暂停
            break;
        }
        case 7: {
            Flag_Stop = 0;      //启动
            break;
        }
        case 8: {
            sec=0,min=0,hour=0; //清零重启
            LED_Filling();
            Display();
            break;
        }
        case 10:{ // A
            flag_AD = !flag_AD; // AD与时钟的转换
            break;
        }
        case 11:{ // B
            flag_AD = 0; // AD与时钟的转换
            break;
        }
        case 15:{ // F
            TimerModify(); // 自由修改
            break;
        }
        default: break;
    }
}

/* main */

void main(void){
    InitSysCtrl();
    AdcPower();
    InitGpiof();
    InitGpiob();
    InitGpioe();
    InitGpioa();
    InitCputimer();
    InitPIE();
    InitSpi();
    InitAdc();
    EALLOW;
    PieVectTable.TINT0 = & INT_1_7;
    asm("  and IFR,#00H");
    asm("  or  IER,#01H");
    asm("  EINT");
    EDIS;
    Out_redled (redled); // 全亮
    for (;;){
        KeyFunction();
    }
}

interrupt void INT_1_7(void){
    /* time add */
    if (flag_AD == 0){ // 时钟
        if(Flag_Stop == 0 && ++ten_ms == 100){ // 不暂停
            ten_ms = 0;
            /* time add */
            sec ++;
            if (sec == 60){
                sec = 0;
                min ++;
            }
            if (min == 60){
                min = 0;
                hour ++;
            }
            if (hour == 24){
                hour = 0;
            }
            /* LEDReg filling */
            LED_Filling();
            Display();
        }
    }else{ // AD
        AdcFunction();
        Display();
    }
    PieCtrlRegs.PIEACK.all = 0x1;
    CpuTimer0Regs.TCR.all = 0xf000;
}
```

### 实例5 跑马灯——正弦亮度变化

```c
#include "DSP281x_Device.h"     // DSP281x头文件
#include "DSP281x_GlobalPrototypes.h"// Prototypes for global functions within the  .c files.

/* Parameters */
int redled  = 0xffff; //低八位是左边，从低到高是从左到右；高八位是右边，从高到低是从右到左
int times = 0; // 20ms改变一次比较值
int index = 0; // 2s周期内一共100个比较值,16等分则index += 100/16
const int T_Period = 587; // EvaRegs.T1PR+1
int led_tab[100]={
587,585,583,580,576,571,565,558,549,540,
530,518,506,493,479,465,449,434,417,400,
383,365,347,329,311,293,274,256,238,220,
202,185,168,151,136,120,106,92 ,79 ,67 ,
55 ,45 ,36 ,27 ,20 ,14 ,9  ,9  ,9  ,9  ,
9  ,9  ,9  ,9  ,9  ,14 ,20 ,27 ,36 ,45 ,
55 ,67 ,79 ,92 ,106,120,136,151,168,185,
202,220,238,256,274,292,311,329,347,365,
383,400,417,434,449,465,479,493,506,518,
530,540,549,558,565,571,576,580,583,585
};

/* Init */
//interrupt void INT_Timer(void);
interrupt void INT_T1(void);// 控制左数1-4盏灯
interrupt void INT_T1CINT(void);// 左数第1盏
interrupt void INT_CMP1(void);// 左数第2盏
interrupt void INT_CMP2(void);// 左数第3盏
interrupt void INT_CMP3(void);// 左数第4盏
interrupt void INT_T3(void);// 控制左数5-8盏灯
interrupt void INT_T3CINT(void);// 左数第5盏
interrupt void INT_CMP4(void);// 左数第6盏
interrupt void INT_CMP5(void);// 左数第7盏
interrupt void INT_CMP6(void);// 左数第8盏

void Init_Sys(void) /*初始化系统*/
{
  SysCtrlRegs.PLLCR.all=0xA;
  SysCtrlRegs.PCLKCR.all=0xffff;//使能外设时钟
  SysCtrlRegs.HISPCP.all=0x1;   //default默认设置
  SysCtrlRegs.LOSPCP.all=0x2;   //default
  SysCtrlRegs.WDCR=0x68;    //disable w d
  SysCtrlRegs.LPMCR0.all=0x0;   //Low power --Idle
}

void InitGpio(void){
    EALLOW;
    GpioMuxRegs.GPFMUX.all=0x00ff;    //f8~f13配置为通用io口
    GpioMuxRegs.GPFDIR.all=0x3f00;//方向设置为输出
    GpioDataRegs.GPFDAT.all=0x0700;//右边三灯先行亮起

    GpioMuxRegs.GPEMUX.all=0x0;   //e口全io
    GpioMuxRegs.GPEDIR.all=0xFF;//全输出
    GpioDataRegs.GPEDAT.all=0xFFFF;//全1

    GpioMuxRegs.GPBMUX.all=0x0;   //b口全io，但只用到高8位
    GpioMuxRegs.GPBDIR.all=0xFF00;//高8位为输出
    GpioDataRegs.GPBDAT.all=0xff00;//高8位全为1，全熄灭

    int i;
    GpioDataRegs.GPEDAT.all=0xFFFA;//e口最低位1010/////////为什么这里要先行配置e口
    for(i=0;i<100;i++){}
    GpioDataRegs.GPEDAT.all=0xFFFB;//e口最低位1011，锁存
    for(i=0;i<100;i++){}
    GpioDataRegs.GPEDAT.all=0xFFFF;//e口低位1111，锁存
    EDIS;
}
void InitCputimer(void){
    EALLOW;
    CpuTimer0Regs.TPR.all = 149;
    CpuTimer0Regs.TPRH.all= 0;
    CpuTimer0Regs.PRD.all = 999999; // 1秒一个timer0中断
    CpuTimer0Regs.TCR.all =0xf000;
    EDIS;
}
void InitCpuINT(void){
    EALLOW;
    //extern cregister volatile unsigned int IFR;
    //extern cregister volatile unsigned int IER;
    IFR = 0x0;
    IER = 0x000f; // 0xA for 1010 - INT2 & INT4
    EDIS;
}
void InitPIE(void){
    EALLOW;
    PieCtrlRegs.PIEIFR1.all = 0x0000;
//    PieCtrlRegs.PIEIER1.all = 0x0040;
    PieCtrlRegs.PIEIFR2.all = 0x0000; // 初始清零
    PieCtrlRegs.PIEIER2.all = 0x001f; // INT2.1 - INT2.5
    PieCtrlRegs.PIEIFR4.all = 0x0000;
    PieCtrlRegs.PIEIER4.all = 0x001f; // INT4.1 - INT4.5
    PieCtrlRegs.PIEACK.all =0x0;//错误点
    PieCtrlRegs.PIECRTL.all=1;
    /* 中断函数定义 */
//    PieVectTable.TINT0 = & INT_Timer;
    PieVectTable.T1PINT = & INT_T1;
    PieVectTable.CMP1INT = & INT_CMP1;
    PieVectTable.CMP2INT = & INT_CMP2;
    PieVectTable.CMP3INT = & INT_CMP3;
    PieVectTable.T1CINT = & INT_T1CINT;
    PieVectTable.T3PINT = & INT_T3;
    PieVectTable.CMP4INT = & INT_CMP4;
    PieVectTable.CMP5INT = & INT_CMP5;
    PieVectTable.CMP6INT = & INT_CMP6;
    PieVectTable.T3CINT = & INT_T3CINT;
    EDIS;
}
void InitEva(void){
    EvaRegs.EXTCONA.all=1;
    EvaRegs.GPTCONA.all=0x0010;//定时器1比较输出使能,比较输出极性为强制低,因为用不到pwm波
    EvaRegs.T1CON.all=0x17ca;//0001 0111 1100 1010连续增计数、预定标因子为/128,重载条件为立即重载，避免因为装载时间造成显示不准
    EvaRegs.T1PR   =586;
    EvaRegs.COMCONA.all=0x82e0;//1000 0010 1110 0000使能比较操作，使能比较器输出，对比较器1/2/3输出使能
    EvaRegs.ACTRA.all=0x1;//比较输出引脚CMP1输出极性设置为低有效,但其实并不用到此引脚
    EvaRegs.DBTCONA.all=0;//不加死区控制
    EvaRegs.T1CMPR=index;
    EvaRegs.CMPR1=index+7;
    EvaRegs.CMPR2=index+14;
    EvaRegs.CMPR3=index+21;
    EvaRegs.EVAIMRA.all=0x018e;//0000 0001 1000 1110定时器1比较和周期中断使能，比较单元1/2/3比较中断使能
    EvaRegs.EVAIFRA.all=0;
}
void InitEvb(void){
    EvbRegs.EXTCONB.all=1;
    EvbRegs.GPTCONB.all=0x0010;//定时器3比较输出使能,比较输出极性为强制低,因为用不到pwm波
    EvbRegs.T3CON.all=0x17ca;//0001 0111 1100 1010连续增计数、预定标因子为/128,重载条件为立即重载，避免因为装载时间造成显示不准
    EvbRegs.T3PR   =586;
    EvbRegs.COMCONB.all=0x82e0;//1000 0010 1110 0000使能比较操作，使能比较器输出，对比较器4/5/6输出使能
    EvbRegs.ACTRB.all=0x1;//比较输出引脚CMP1输出极性设置为低有效
    EvbRegs.DBTCONB.all=0;//不加死区控制
    EvbRegs.T3CMPR=index+28;
    EvbRegs.CMPR4=index+35;
    EvbRegs.CMPR5=index+42;
    EvbRegs.CMPR6=index+49;
    EvbRegs.EVBIMRA.all=0x018e;//0000 0001 1000 1110定时器1比较和周期中断使能，比较单元1/2/3比较中断使能
    EvbRegs.EVBIFRA.all=0;
}
/* Functions */
void Out_redled (redled)
{
    int i;
    GpioDataRegs.GPBDAT.all=redled;
    GpioDataRegs.GPEDAT.all=2;
    for(i=0;i<5;i++){}
    GpioDataRegs.GPEDAT.all=7;
    //点右边灯
    GpioDataRegs.GPBDAT.all=redled*256;
    GpioDataRegs.GPEDAT.all=3;
    for(i=0;i<5;i++){}
    GpioDataRegs.GPEDAT.all=7;
}
interrupt void CPU_timer0_isr(){
    PieCtrlRegs.PIEACK.all=1;
}

/* 只在这个中断里更改times和index */
interrupt void INT_T1(void){ // 控制左数1-8盏灯
    redled = 0xff00; // 点亮最左边8盏
    Out_redled(redled);
    int i;for(i=0;i<100;i++){}
    if (++times == 20){
        times = 0;
        if (++index == 100) {
            index = 0;
        }
        EvaRegs.T1CMPR = led_tab[index];
        EvaRegs.CMPR1 = led_tab[(index +7)%100];
        EvaRegs.CMPR2 = led_tab[(index +7*2)%100];
        EvaRegs.CMPR3 = led_tab[(index +7*3)%100];
        EvbRegs.T3CMPR = led_tab[(index +7*4)%100];
        EvbRegs.CMPR4 = led_tab[(index +7*5)%100];
        EvbRegs.CMPR5 = led_tab[(index +7*6)%100];
        EvbRegs.CMPR6 = led_tab[(index +7*7)%100];
    }
    EvaRegs.EVAIFRA.bit.T1PINT = 1; // 中断清除
    EvbRegs.EVBIFRA.bit.T3PINT = 1; // 中断清除
    PieCtrlRegs.PIEACK.all = 2;
}
interrupt void INT_T3(void){
    EvbRegs.EVBIFRA.bit.T3PINT = 1; // 中断清除
    PieCtrlRegs.PIEACK.all = 8;
}
interrupt void INT_T1CINT(void){ // 左数第1盏
    redled = redled ^ 0x0101;
    Out_redled(redled);
    EvaRegs.EVAIFRA.bit.T1CINT = 1; // 中断清除
    PieCtrlRegs.PIEACK.all = 2;
}
interrupt void INT_CMP1(void){ // 左数第二盏
    redled = redled ^ 0x0202;
    Out_redled(redled);
    EvaRegs.EVAIFRA.bit.CMP1INT = 1; // 中断清除
    PieCtrlRegs.PIEACK.all = 2;
}
interrupt void INT_CMP2(void){ // 左数第三盏
    redled = redled ^ 0x0404;
    Out_redled(redled);
    EvaRegs.EVAIFRA.bit.CMP2INT = 1; // 中断清除
    PieCtrlRegs.PIEACK.all = 2;
}
interrupt void INT_CMP3(void){ // 左数第四盏
    redled = redled ^ 0x0808;
    Out_redled(redled);
    EvaRegs.EVAIFRA.bit.CMP3INT = 1; // 中断清除
    PieCtrlRegs.PIEACK.all = 2;
}
interrupt void INT_T3CINT(void){ //左数第五盏
    redled = redled ^ 0x1010;
    Out_redled(redled);
    EvbRegs.EVBIFRA.bit.T3CINT = 1; // 中断清除
    PieCtrlRegs.PIEACK.all = 8;
}
interrupt void INT_CMP4(void){ //左数第六盏
    redled = redled ^ 0x2020;
    Out_redled(redled);
    EvbRegs.EVBIFRA.bit.CMP4INT = 1; // 中断清除
    PieCtrlRegs.PIEACK.all = 8;
}
interrupt void INT_CMP5(void){ //左数第七盏
    redled = redled ^ 0x4040;
    Out_redled(redled);
    EvbRegs.EVBIFRA.bit.CMP5INT = 1; // 中断清除
    PieCtrlRegs.PIEACK.all = 8;
}
interrupt void INT_CMP6(void){ //左数第八盏
    redled = redled ^ 0x8080;
    Out_redled(redled);
    EvbRegs.EVBIFRA.bit.CMP6INT = 1; // 中断清除
    PieCtrlRegs.PIEACK.all = 8;
}

/* Main */
void main(void){
    int i;
    DINT;
    EALLOW;
    Init_Sys();
    for(i=0;i<10000;i++){}
    InitGpio();
//    InitCputimer();
    InitCpuINT();
    InitPIE();
    InitEva();
    InitEvb();
    PieCtrlRegs.PIEACK.all =10;
    EDIS;
    EINT;

    for(;;){asm(" IDLE");}
}
```
