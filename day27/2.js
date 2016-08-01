var data='我的电话13012345678他的电话15099999999';
var regexp=/1[35789]\d{9}/g
console.log(data.match('电话'));
console.log(data.match(regexp));
console.log();
console.log(data.search('电话'));