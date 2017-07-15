JavaScript
JavaScript一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言，内置支持类型。
它由3部分组成
*ECMAScript描述了该语言的语法和基本对象。
*javascript组成文档对象模型（DOM），描述处理网页内容的方法和接口。
*javascript组成浏览器对象模型（BOM），描述与浏览器进行交互的方法和接口
js是一种解释性脚本语言（代码不进行预编译）。主要用来向HTML（标准通用标记语言下的一个应用）页面添加交互行为。
js特性
1.脚本语言
2.基于对象
3.简单
4.动态性
5.优秀的跨平台特性。

兼容性问题
	1.css
	2.js

跨域问题
	1.JSONP
	2.代理
	3.PHP端修改header

数据类型
1.基本类型
	1)string
	2)number
	3)boolean
	4)undefined
	5)null
2.混合类型
	object
	Array
判断数据类型
	1.typeof方法
	2.Object.prototype.toString.call()
	3.instanceOf
	4.isArray	

字符串方法
1.charCodeAt方法返回一个整数，代表指定位置字符的Unicode编码。
2.fromCharCode方法从一些Unicode字符串中返回一个字符串。
3.charAt方法返回指定索引位置处的字符。如果超出有效范围的索引值返回空字符串。 
4.slice方法返回字符串的片段。
5.substring方法返回位于String对象中指定位置的子字符串。 
6.substr方法返回一个从指定位置开始的指定长度的子字符串。
7.indexOf方法放回String对象内第一次出现子字符串位置。如果没有找到子字符串，则返回-1。
8.lastIndexOf方法返回String对象中字符串最后出现的位置。如果没有匹配到子字符串，则返回-1。 
9.search方法返回与正则表达式查找内容匹配的第一个字符串的位置。 
10.concat方法返回字符串值，该值包含了两个或多个提供的字符串的连接。 
11.split将一个字符串分割为子字符串，然后将结果作为字符串数组返回。
12.toLowerCase方法返回一个字符串，该字符串中的字母被转换成小写。
13.toUpperCase方法返回一个字符串，该字符串中的所有字母都被转换为大写字母。  

数组方法
1.push向数组的末尾增加一项 返回值是数组的新长度
2.unshift向数组开头增加一项 返回值是数组的新长度
3.pop删除数组的末尾项 返回值是删除的数组项
4.shift删除数组开头项 返回被删除的开头项目
5.splice删除数组中的任意项 返回值是被删除的数组项
6.slice复制数组 返回值是复制到的新数组 写上数值之后 不包含被复制的最后一项
7.concat把一个数组和另一个数组拼接在一起 返回拼接好的数组 
8.join把数组中的每一项 按照指定的分隔符拼接成字符串
9.reverse倒序数组 返回值倒序数组 原有数组改变
10.sort根据匿名函数进行冒泡排序 b-a倒序 a-b升序
11.indexOf返回获取项在数组中的索引
12.lastIndexOf返回获取项在数组中出现的最后一次索引
13.forEach循环遍历数组 参数是一个匿名函数 默认返回为undefined
14.map循环遍历数组 参数是一个匿名函数
15.fill使用一个固定值来填充数组。
16.reduce()	将数组元素计算为一个值（从左到右）。
17.reduceRight()将数组元素计算为一个值（从右到左）。
js顶层函数
	1.escape() 将非字母、数字字符进行编码
　　2.unescape() 对编码的字符串进行解码
　　3.Number() 转换成数值类型
　　4.String() 转换成字符串类型
　　5.Boolean() 转换成布尔类型
　　6.parseInt() 将字符串转换为整型
　　7.parseFloat() 转换为小数
　　8.isNaN() 判断一个数能否转换为数值类型。
　　9.eval() 用javascript语法来解析字符串内容
js本地对象
	Object、Function、Array、String、Boolean、Number、Date、RegExp、Error、EvalError、RangeError、ReferenceError、SyntaxError、TypeError、URIError
  内置对象
	Math Global
  宿主对象		

BOM浏览器对象模型
	Location
		属性
		location.hostname 返回 web 主机的域名
		location.pathname 返回当前页面的路径和文件名
		location.port 返回 web 主机的端口 （80 或 443）
		location.protocol 返回所使用的 web 协议
		location.href 属性返回当前页面的 URL
		location.hash 设置或返回从井号 (#) 开始的 URL（锚）。
		location.search	设置或返回从问号 (?) 开始的 URL（查询部分）
		方法
		
		location.assign() 方法加载新的文档
		location.reload() 重新加载当前文档。
		location.replace() 用新的文档替换当前文档。
	History
		属性
		length	返回浏览器历史列表中的 URL 数量。
		方法
		back()	加载 history 列表中的前一个 URL。
		forward()	加载 history 列表中的下一个 URL。
		go()	加载 history 列表中的某个具体页面。

RegExp
	修饰符
	i	执行对大小写不敏感的匹配。
	g	执行全局匹配（查找所有匹配而非在找到第一个匹配后停止）。
	m	执行多行匹配。
	元字符  拥有特殊含义的字符
	.	查找单个字符，除了换行和行结束符。
	\w	查找单词字符。
	\W	查找非单词字符。
	\d	查找数字。
	\D	查找非数字字符。
	\s	查找空白字符。
	\S	查找非空白字符。
	\b	匹配单词边界。
	\B	匹配非单词边界。
	\0	查找 NUL 字符。
	\n	查找换行符。
	\f	查找换页符。
	\r	查找回车符。
	\t	查找制表符。
	\v	查找垂直制表符。
	\xxx	查找以八进制数 xxx 规定的字符。
	\xdd	查找以十六进制数 dd 规定的字符。
	\uxxxx	查找以十六进制数 xxxx 规定的 Unicode 字符。
	量词
	n+	匹配任何包含至少一个 n 的字符串。
	n*	匹配任何包含零个或多个 n 的字符串。
	n?	匹配任何包含零个或一个 n 的字符串。
	n{X}	匹配包含 X 个 n 的序列的字符串。
	n{X,Y}	匹配包含 X 至 Y 个 n 的序列的字符串。
	n{X,}	匹配包含至少 X 个 n 的序列的字符串。
	n$	匹配任何结尾为 n 的字符串。
	^n	匹配任何开头为 n 的字符串。
	?=n	匹配任何其后紧接指定字符串 n 的字符串。
	?!n	匹配任何其后没有紧接指定字符串 n 的字符串。
	属性
	global	RegExp 对象是否具有标志 g。
	ignoreCase	RegExp 对象是否具有标志 i。	
	lastIndex	一个整数，标示开始下一次匹配的字符位置。	
	multiline	RegExp 对象是否具有标志 m。	
	source	正则表达式的源文本。
	方法
	compile	编译正则表达式。	
	exec	检索字符串中指定的值。返回找到的值，并确定其位置。	
	test	检索字符串中指定的值。返回 true 或 false。	
	支持正则表达式的 String 对象的方法
	search	检索与正则表达式相匹配的值。	
	match	找到一个或多个正则表达式的匹配。	
	replace	替换与正则表达式匹配的子串。	
	split	把字符串分割为字符串数组。
Date
	getDate()	从 Date 对象返回一个月中的某一天 (1 ~ 31)。
	getDay()	从 Date 对象返回一周中的某一天 (0 ~ 6)。
	getFullYear()	从 Date 对象以四位数字返回年份。
	getHours()	返回 Date 对象的小时 (0 ~ 23)。
	getMilliseconds()	返回 Date 对象的毫秒(0 ~ 999)。
	getMinutes()	返回 Date 对象的分钟 (0 ~ 59)。
	getMonth()	从 Date 对象返回月份 (0 ~ 11)。
	getSeconds()	返回 Date 对象的秒数 (0 ~ 59)。
	getTime()	返回 1970 年 1 月 1 日至今的毫秒数 (时间戳)。
	getUTCDate()	根据世界时从 Date 对象返回月中的一天 (1 ~ 31)。
	getUTCDay()	根据世界时从 Date 对象返回周中的一天 (0 ~ 6)。
	getUTCFullYear()	根据世界时从 Date 对象返回四位数的年份。
	getUTCHours()	根据世界时返回 Date 对象的小时 (0 ~ 23)。
	getUTCMilliseconds()	根据世界时返回 Date 对象的毫秒(0 ~ 999)。
	getUTCMinutes()	根据世界时返回 Date 对象的分钟 (0 ~ 59)。
	getUTCMonth()	根据世界时从 Date 对象返回月份 (0 ~ 11)。
	getUTCSeconds()	根据世界时返回 Date 对象的秒钟 (0 ~ 59)。
	parse()	返回1970年1月1日午夜到指定日期（字符串）的毫秒数（"March 21, 2012"）。
	setDate()	设置 Date 对象中月的某一天 (1 ~ 31)。
	setFullYear()	设置 Date 对象中的年份（四位数字）。
	setHours()	设置 Date 对象中的小时 (0 ~ 23)。
	setMilliseconds()	设置 Date 对象中的毫秒 (0 ~ 999)。
	setMinutes()	设置 Date 对象中的分钟 (0 ~ 59)。
	setMonth()	设置 Date 对象中月份 (0 ~ 11)。
	setSeconds()	设置 Date 对象中的秒钟 (0 ~ 59)。
	setTime()	setTime() 方法以毫秒设置 Date 对象。
	toDateString()	把 Date 对象的日期部分转换为字符串。
	toGMTString()	已废弃。请使用 toUTCString() 方法代替。
	toISOString()	使用 ISO 标准返回字符串的日期格式。
	toJSON()	以 JSON 数据格式返回日期字符串。
	toLocaleDateString()	根据本地时间格式，把 Date 对象的日期部分转换为字符串。
	toLocaleTimeString()	根据本地时间格式，把 Date 对象的时间部分转换为字符串。
	toLocaleString()	据本地时间格式，把 Date 对象转换为字符串。
	toString()	把 Date 对象转换为字符串。
	toTimeString()	把 Date 对象的时间部分转换为字符串。
	toUTCString()	根据世界时，把 Date 对象转换为字符串。
	UTC()	根据世界时返回 1970 年 1 月 1 日 到指定日期的毫秒数。
	valueOf()	返回 Date 对象的原始值
