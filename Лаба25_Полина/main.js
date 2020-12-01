alert("Добрый день!");
var answer = prompt('Дмитрий Витальевич, вы уверены, что хотите проверять эти задания?', 'нет');
alert("Вы используете:"+ navigator.userAgent);

function startTime()
{
    var tm=new Date();
    
    var h=tm.getHours();
    var m=tm.getMinutes();
    var s=tm.getSeconds();
    
    document.getElementById('txt').innerHTML=h+":"+m+":"+s;
    
    t=setTimeout('startTime()',500);
}
