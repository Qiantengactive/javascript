var data="Microsoft is a big Company, microsoft’s color is red and has MICROSOFT logo like microsoft";
console.log(data.replace(data));
console.log( data.replace('microsoft', 'oracle') );
console.log( data.replace(/microsoft/, 'oracle') );
console.log( data.replace(/microsoft/i, 'oracle') );
console.log( data.replace(/microsoft/g, 'oracle') );
console.log( data.replace(/microsoft/ig, 'oracle') );
