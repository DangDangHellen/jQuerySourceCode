# jQuerySourceCode
Read and analyse the jQuery Source Code in order to consolidate JS knowledge and learn some fantastic technic.

2017.7.5

jQuery Source Code( One )

˳һ��jQueryԴ��Ĵ����߼���

һЩ�����ͺ���
jQuery�̳� ��extend����
jQuery.extend��������jQuery�ľ�̬������Ҳ����˵��һЩ���߷���
Sizzleѡ�������ǶԸ���ѡ�����Ĵ������Ե����ó�����
�ص�����$.Callbacks
�ӳٶ��������ڻص�����Ժ����Ĺ���
���ݻ��棺 data()�����ȵ�
���ܼ��
���й���queue()������dequeue()�����ȣ������õıȽ϶�
�¼�����$.on(); $.bind(), $.trigger()�ȷ���
DOMԪ�����Բ����� attr(); removeAttr();  addClass(); removerClass();�ȵ�
��ʽ������css(),�����˺ܶ࣬��������������Դ��� ��ʽ�ĵ�λpx,em,�ٷֱȵȵ�
DOMԪ�ص���ɾ���������޸ģ�ɸѡ�ȵȣ�
���������� show(), hide(), toggle(), fadeIn(), fadeOut()�ȵ�
ajax���ܣ� load(), ajax(), get(), post(), getScript(), getJson()�����������������
�ߴ硢λ�õȵĻ�ȡ������offset
jQuery��ģ�黯��֧�֣�jQuery1.7.2֧��AMD�� jQuery2.0֧��AMD��COMMONJS��

֮ǰ�Ķ�������ƪ����jQueryԴ�����ʱ����jQuery�ܹ����˳������˽⣻
����jQuery�ܹ���Ҫ��Ϊ����ģ�飺
���ģ�顢�ײ�֧��ģ��͹���ģ�顣
���ģ��ָ�ľ�������ִ�к����Լ�jQuery����Ĵ�����
����ģ��Ҳ��������⣬��������ƽʱ����ʱ�õ���jQuery���ܺ���������DOMԪ�صı�����DOM��ʽ�����ã��¼��Ĵ���ajax�������󣬶����Ĳ����ȵȡ�
��ô������Ӧ�þ����ǵײ�֧��ģ��������ˡ�
��Ҫ����ô���֣������ø������ᵽ�ķ�����Ӧ������
���߷�����Ӧ�þ��������ᵽ��jQuery.extend�������첽���С����С��ص������б����ݻ��桢��������ܼ�⡢ѡ����

�����ִ�����Ҫ��jQueryԴ�����ʵ��

��Ҫʵ����jQuery���ģ�飬jQuery����Ĵ���������ʵ�����������ͻʱ��$ʹ��Ȩ���ͷ����⣻
��Դ��noConflict���ֵĵȼ۴��룬��Ϊ��ʱ��û���漰��jQuery��extend��������չ��̬�������������Լ�д��һ��������ʵ�֡�


2017.7.8

����jQueryԴ���У���jQuery���󴴽�ʱ������Ҫ���õ�init����������������Ҫ�Ƕ�selector�Ĳ�ͬ������д�����ӵ���selectorΪ�ַ���������������˵���ǩ�����ӱ�ǩ����������ǩ�Լ�ID������
���ּ򵥸���ѡ������
��Щ���ڲ������з�����http://blog.csdn.net/u010046318/article/details/74729911

�� ������jQuery.fn���󣨼�jQueryԭ�ͣ��еļ����ص㷽������Ҫ������pushStack(),end(),  map(), each(),  eq(i), toArray(), slice()�ȵȣ� ������http://blog.csdn.net/u010046318/article/details/74852745����Դ�������
�ϴ��Ĵ�����Ҫ�Ƕ�pushStack()�Լ�end()�����ļ��顣