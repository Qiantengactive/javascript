//var regexp=/is/ig;
var data='His name is is\nhistory isnot is';
var regexp=/\bis\b/g;
console.log(data.replace(regexp,'--'));
var regexp=/\Bis\b/g;
console.log(data.replace(regexp,'--'));