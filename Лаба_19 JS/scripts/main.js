let arr = ['Happy', 2, 'c', 'you'];

alert('первоначальный массив:');

alert(arr);

alert(arr[0]);

alert(arr[1]);

arr[2]='meet';

alert(arr[2]);

arr.unshift('So');

arr.push('here');

alert('изменённый массив:');

alert(arr);

alert(arr.length)

var str = 'Every man in the world! Every woman on earth!';

console.log(str);

var re = /man/gi;

var first = str.replace(re, 'person');

re = /woman/gi;

var second = first.replace(re, 'person');

console.log(second);

