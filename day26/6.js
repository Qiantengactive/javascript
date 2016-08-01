//匹配手机号码的表达式
var cellphonePatt=/1[3578][0-9]{9}/;
var data='13012345678';
console.log(cellphonePatt.test(data));
//匹配一个北京的座机号码 010-12345678
var fixedphonePatt1=/(010-)?[568][0-9]{7}/;
var fixedphonePatt1=/(010-|8610-)?[568][0-9]{7}/;
var data='8610-5123223445644';
console.log(fixedphonePatt1.test(data));
//匹配一个html双标记标签
var htmlPatt=/<[a-z1-6]+><\/[]>/