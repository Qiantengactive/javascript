var data='do|donot|donoes';
var regexp=/do/g;
console.log(data.replace(regexp,'--'));
var regexp=/do(?=nt)/g;
var data9='do|dont|donoes';
console.log(data9.replace(regexp,'--'));