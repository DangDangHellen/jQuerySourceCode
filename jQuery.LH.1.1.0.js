/*
* @Author: hellen
* @Date:   2017-06-28 16:04:43
* @Last Modified by:   hellen
* @Last Modified time: 2017-07-08 17:34:26
*/

/*'use strict';*/

(function(window, undefined){

	/*var rootjQuery = document;*/
	/*console.log(rootjQuery);*/

	var rootjQuery,           //jQuery(document)的一个引用；在jQuery对象创建之后赋值
		readyList;            //与DOM加载有关的

	var location = window.location;
	var document = window.document;
	var docElement = document.documentElement;

	var jQuery = (function(){
		var jQuery = function(selector, context){
			return new jQuery.fn.init(selector, context);
		}
		
	var quickExpr = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/;          //匹配标签和id选择器
	var rsingleTag = /^<(\w+\s*)\/?>(?:<\/\1>)?$/;
		jQuery.fn = jQuery.prototype = {
			constructor: jQuery,

			//可能的情况
			//$(DOM 元素)；   $(function(){});    $('')
			//下面的都是选择器为字符串的形式
			//$('ul');   $('#id')   $('.class'); $('ul li.class');    $('<div>jdioeusroiuewo')  
			//$('<div></div>');    $('<div>dekwpoioewueoi</div>');    
			init : function(selector, context, rootjQuery){
				/*this.person = selector;
				this.name = context;
				return this;*/

				//情况一: 输入参数为null,undefined或者""
				if(! selector)
				{
					return this;
				}
				/*if(selector == 'document')
				{
					this.context = this[0] = document;
					return this;
				}*/
				//输入参数为DOM元素(通过nodeType来判断是否为DDOM元素)
				if( selector.nodeType)
				{
					this.context = this[0] = selector;
					this.length = 1;
					return this;
				}
				var match;     
				if( typeof selector === 'string')
				{
					//如果是标签  $('<div></div>');    $('<div>dekwpoioewueoi</div>');  $('<ul><li>列表复杂标签</li></ul>')
					if( selector.charAt(0) === '<' && selector.charAt(selector.length - 1) === '>' && selector.length >= 3)
					{
						match = [null, selector, null];
					}
					else //不是完整标签； $('ul');   $('#id')   $('.class'); $('ul li.class');    $('<div>jdioeusroiuewo')
					{
						match = quickExpr.exec(selector); 
						//如果是标签 $('<div>jdioeusroiuewo'), match = ['<div>jdioeusroiuewo', 'div', undefined];
						//如果是id选择器$('#id') , match = ['#id', undefined, 'id'];
						//如果是其他情况，match = null;
					}

					//上面得到了match数组，不同情况对应不同的值；下来根据不同结果再分
					if(match && (match[1] || !context))    //所有match为真的情况
					{
						//是标签  $('<div></div>');    $('<div>dekwpoioewueoi</div>');  $('<ul><li>列表复杂标签</li></ul>')
						//$('<div>jdioeusroiuewo')    match = ['<div>jdioeusroiuewo', 'div', undefined];
						//id选择器$('#id')  match = ['#id', undefined, 'id'];
						if(match[1])  //标签、不完整标签、以及复杂标签
						{
							//jQuery 对象中context的概念，表示当前上下文，一般情况下都是document,如果有iFrame的话可能是iFrame里面的contentWindow.document
							//所以context还是有必要的
							context = context instanceof jQuery ? context[0] : context;
							doc = context ? (context.ownerDocument || context) : document;

							//在判断是否是单标签
							ret = rsingleTag.exec(selector);

							if(ret) { //如果是单标签
								if( jQuery.isPlainObject(context) ) {  //判断是否是$('<li></li>', { title: 'List1', html: '苹果' })这种形式

									selector = [ doc.createElement( match[1]) ];
									//设置属性
									jQuery.fn.attr.call(selector, context, true);
								}
								else   //就一个单标签
								{
									selector = [ doc.createElement( match[1] ) ];
								}
							} else {    //不是单标签的标签，比如$('<li>苹果</li>', $('<img src="#" />'), $('<ul><li></li><li></li></ul>'))等比较复杂的标签
								ret = jQuery.buildFragment( [ match[1] ], [ doc ] );  //如何处理？还是要再看看
								selector = ( ret.cacheable ? jQuery.clone(ret.fragment) : ret.fragment ).childNodes;
							}
							return jQuery.merge( this, selector );
						} else {         //id选择器
							elem = doc.getElementById( match[2] );
							if(elem && elem.parentNode)
							{
								if( elem.id !== match[2])
								{
									//说明IE中查到的是name为match[2]的元素
									//这时候调用$(document).find()方法，利用选择器来查
									return rootjQuery.find( selector );     //后续得看看find方法
								}
								this[0] = elem;
								this.length = 1;
							}
							this.context = doc;
							this.selector = selector;
							return this;
						}
					} else if( !context ||  context.jquery) //这几种情况$('ul');   $('.class');  $('ul li.class'); 对于这些复杂情况，都调jQuery Sizzle中的find方法
					{   
						//如果上下文存在,并且是jQuery对象
						//如果上下文不存在，调document.find()方法
						return (context || rootjQuery).find( selector );
					}
				}

				//输入参数为DOM数组
				/*if(selector.length > 1 && selector[0].nodeType)
				{
					this.context = this[0] = selector[0];
					
					this.length = selector.length;
					
					for(var i = 0; i < selector.length; i++)
					{
						this[i] = selector[i];
					}
					return this;
				}*/

				//输入参数为函数，只有一种用法：$(function(){})相当于$.ready(function(){})
				if( typeof selector == 'function')
				{
					return this;
				}

				/*this.person = selector;
				this.name = context;*/
				return this;
			},
			sayHello : function(){
				console.log(this);
			}
		};
		jQuery.fn.init.prototype = jQuery.fn;

		


		window.$ = window.jQuery = jQuery;
	})();

	
})(window);