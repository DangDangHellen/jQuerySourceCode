# jQuerySourceCode
Read and analyse the jQuery Source Code in order to consolidate JS knowledge and learn some fantastic technic.

2017.7.5

jQuery Source Code( One )

顺一遍jQuery源码的大体逻辑：

一些变量和函数
jQuery继承 即extend方法
jQuery.extend方法，即jQuery的静态方法，也可以说是一些工具方法
Sizzle选择器，是对复杂选择器的处理，可以单独拿出来用
回调对象$.Callbacks
延迟对象，依赖于回调对象对函数的管理
数据缓存： data()方法等等
功能检测
队列管理，queue()方法和dequeue()方法等，动画用的比较多
事件管理，$.on(); $.bind(), $.trigger()等方法
DOM元素属性操作： attr(); removeAttr();  addClass(); removerClass();等等
样式操作：css(),考虑了很多，包括浏览器兼容性处理， 样式的单位px,em,百分比等等
DOM元素的增删，遍历，修改，筛选等等；
动画操作： show(), hide(), toggle(), fadeIn(), fadeOut()等等
ajax功能： load(), ajax(), get(), post(), getScript(), getJson()，包括处理跨域问题
尺寸、位置等的获取，各种offset
jQuery对模块化的支持；jQuery1.7.2支持AMD； jQuery2.0支持AMD和COMMONJS。

之前阅读高云那篇解析jQuery源码的书时，对jQuery架构有了初步的了解；
整个jQuery架构主要分为三个模块：
入口模块、底层支持模块和功能模块。
入口模块指的就是立即执行函数以及jQuery对象的创建；
功能模块也很容易理解，就是我们平时开发时用到的jQuery功能函数，包括DOM元素的遍历，DOM样式的设置，事件的处理，ajax函数请求，动画的产生等等。
那么其他的应该就算是底层支持模块里面的了。
主要有这么几种：（正好跟上面提到的方法对应起来）
工具方法：应该就是上面提到的jQuery.extend方法；异步队列、队列、回调函数列表、数据缓存、浏览器功能检测、选择器

本部分代码主要对jQuery源码进行实现

主要实现了jQuery入口模块，jQuery对象的创建，并且实现了两个库冲突时，$使用权的释放问题；
即源码noConflict部分的等价代码，因为此时还没有涉及到jQuery的extend方法来扩展静态方法，所以先自己写了一个函数来实现。


2017.7.8

关于jQuery源码中，对jQuery对象创建时，起重要作用的init函数进行了梳理，主要是对selector的不同情况进行处理，最复杂的是selector为字符串的情况，包含了单标签，复杂标签，不完整标签以及ID，还有
各种简单复杂选择器。
这些都在博客中有分析。http://blog.csdn.net/u010046318/article/details/74729911

另： 分析了jQuery.fn对象（即jQuery原型）中的几个重点方法，主要包括：pushStack(),end(),  map(), each(),  eq(i), toArray(), slice()等等， 具体在http://blog.csdn.net/u010046318/article/details/74852745中有源码分析。
上传的代码主要是对pushStack()以及end()方法的检验。

2017.7.10
关于jQuery源码中extend函数的用法
在应用层面上，我们可以用extend函数做对象扩展，分别涉及到深拷贝和浅拷贝，这个会在博客里面分析；
另一种用法就是利用extend函数来扩展插件，分别包括全局插件（扩展到jQuery上）和实例插件（扩展到jQuery对象上）。

后面是关于extend的面试题，利用extend实现继承时，如何避免覆盖?
我能想到的方法就是将多个父类再用对象包裹一层，然后使用浅拷贝，这样就不会相互之间覆盖相同名称的属性。

2017.7.11

今天阅读了jQuery源码中的extend函数代码，对于其中的避免循环那一部分代码有了深刻的理解，上传上测试代码。

2017.7.18

这两天参加了华为优招，并且回了趟家，所以进展稍微有点慢。昨天和今天主要阅读了jQuery.ready()部分的源码，对于$(function(){})这种写法的背后原理有了比较清楚的理解。并进行了一些测试。
关于Ready部分的源码，主要就三部分： 监听DOMContentLoaded事件；事件处理函数的编写；将回调函数加入到ReadyList中，页面加载成功时调回调函数（这部分属于回调模块，后面看到会再整理）。

2017.7.19

今天阅读了jQuery静态方法中的关于类型检测的几个方法，逻辑比较复杂的一个并且比较重点的一个方法是isPlainObject方法。考虑得很全面。代码中测试了几种情况。详细分析见博客http://blog.csdn.net/u010046318/article/details/75353858

2017.7.20
今天分析了jQuery静态方法中的 map,each,grep; makeArray, inArray以及merge方法。这几个方法用的比较多，原理上也简单易懂。

2017.7.21
对于jQuery的Callbacks对象在功能上进行分析，以及了解了options参数各种情况的测试。

2017.7.24
对于jQuery 的Callbacks回调模块进行整理。并对fireWith函数做了测试，必须传入参数，不传参数，this表示的是全局对象Window，如果后面直接add函数（带memory标志），此时this的指向也指向Window对象。
测试代码已上传。