Roam
====
A funny (shabi) js-based html UI.
----

Roam是一个基于JS的HTML UI(感觉是废话),或者叫做布局吧...不懂这东西.总之,它能让一行内放置多个容器,每次只有一个容器被展开,其他容器都处于收回状态,当用户将鼠标移到收回的容器时,该容器将会被展开,同时已展开的容器将会被收回.

我总是觉得这东西应该已经有很成熟的实现了,但总又找不到,所以只好赶鸭子上架似的硬着头皮写了一个...(如果真的有一个已有的实现的话,请务必告诉我,我会很高兴的...)

How to use
----

#### 依赖:
jQuery

#### 导入:
在HTML头加入roam-[版本].min.js和roam-[版本].css的引用就行了,例如.
<link rel="stylesheet" type="text/css" href="roam-0.1.css" />
<script type="text/javascript" src="roam-0.1.min.js" ></script>
(别忘了加上jQuery的引用)

#### 使用:
Roam目前有4个CSS Class,分别是roam-container,roam-block,roam-title和roam-content.未来将引入第5个:roam-context(暂时).

**roam-container** 即一个Roam区块容器,将roam-block放在容器内后才能使用.

现在需要加入width和height手动指定宽高,具体详见示例.

**roam-block** 即一个Roam区块,将其放入roam-container后,设置好参数就能用了.

目前它有3个参数:

min-width 收缩后的宽度

max-width 展开后的宽度

roam-toggle 默认是否处于展开状态,可选值为true或false

**roam-title** 是收回时显示的内容,可以理解为标题.roam-title无论在展开还是收回时都会限制.

参数:

position 显示在左下角还是右下角,可选值为left(左下角)和right(右下角)

**roam-content** 是展开后显示的内容,可以理解为正文.

参数:

position 显示在左上角还是右上角,可选值为left(左上角)和right(右上角)

Road map
----

其实这个库就是为了做自己的网站的首页用的...因此写的很艹,另外我本身就不是网页程序员,至少不是前端...所以自然是烂到猹.
- 关于未来的计划,目前计划要解决的问题是:
- 引入roam-context(上下文),即允许多个container中仅有一个block处于激活状态.
- 为roam-container引入layout或类似名字的参数,用于设定block布局(目前仅有线性布局).
- 尽量让width和height之类的参数自动计算...
- 改善roam-title和roam-content.
- 加入对触屏的优化和支持.

Licence
----
嘛...最宽松的MITLicence,愉快地拉去魔改吧.