var s1=['a','b','c'];   //Array
var s2='abc';           //string abc是字符串的value 所有字符串的《可写》为false 
//可写为假不能修改特性 字符串有几个特性 是否可写 可配置 可枚举
//在严格的浏览器下1修改语句应该为错误
//这次不算语法错误 ，但没效果

 
s1[0]='A';    //可以修改
s2[0]='A';   //1修改 不能修改  不算语法错误，但是没效果
console.log(s1);
console.log(s2); 