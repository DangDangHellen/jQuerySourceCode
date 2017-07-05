/*
* @Author: hellen
* @Date:   2017-07-05 21:51:46
* @Last Modified by:   hellen
* @Last Modified time: 2017-07-05 22:33:38
*/

/*'use strict';*/

//自己写的jQuery源码的一部分
;(function(window, undefined){

	var jQuery = (function(selector, context){
		
		//一些变量和函数
		var rootjQuery,   //后面在jQuery对象创建之后，rootjQuery= jQuery(document);为了后面用document方便，而不失语义性
		readyList      //用于DOM元素加载

		_$ = window.$;
		_jQuery = window.jQuery;        //这两个用于解决冲突

		//下来是一些正则表达式，这里先不做介绍

		var jQuery = function(selector, context){
			return new jQuery.fn.init(selector, context, rootjQuery);
		};

		//这部分先用简单的函数来实现，因为这块还没有实现jQuery.extend方法，来扩展jQuery静态方法
		function isFunction(func){
			if( typeof func == 'function')
			{
				return true;
			}
			else
			{
				return false;
			}
		}

		jQuery.fn = jQuery.prototype = {
			jQuery: 'lh.1.0',           //jQuery版本号
			constructor: jQuery,      //因为用该对象将jQuery原型覆盖掉了，所以需要重新让该原型指向jQuery构造函数
			length:0,                 //返回该对象中的元素个数
			init: function(selector, context, rootjQuery){
				/*this.selector = selector;
				this.context = context;
				return this;*/
				//处理复杂一点
				if(! selector)
				{
					return this;
				}
				if( isFunction(selector))  //判断是函数
				{
					console.log("选择器为方法");
					return this;
				}
				if( selector.nodeType)          //为DOM元素
				{
					this.seletor = selector;
					this.context = this[0] = selector;
					this.length = 1;
					return this;
				}
			},
			selector: '',
			toArray: function(){

			}
			//等等，还有很多方法，数组的一些方法
		};

		jQuery.fn.init.prototype = jQuery.fn;               //使得创建的对象在jQuery原型链上，共享jQuery对象的属性和方法
	
		window.$ = window.jQuery = jQuery;
	})();

})(window);