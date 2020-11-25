alert("Дмитрий ВИтальевич, а здесь пошли скучные задания");

document.write( "<strong >Вы используете браузер: </strong>  " + navigator.userAgent);

function startTime()
{
var tm=new Date();

var h=tm.getHours();
var m=tm.getMinutes();
var s=tm.getSeconds();

document.getElementById('txt').innerHTML=h+":"+m+":"+s;

t=setTimeout('startTime()',500);
}

let timerID = setInterval(() => alert("Let's say that Nastya is beautiful"), 5000);

var a = new Array();

var count = 10;

for (var i=0; i<count; i++)
    a[i]=parseInt(prompt("Введите целое число:", "")); /* parseInt - строку приводит к числу,*/ 
alert("Массив: "+ a);                                  /* prompt - возвращает значение полученное от юзера из поля для ввода*/      


