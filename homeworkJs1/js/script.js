function pow(a, b) {
	var result = a;
	if (b==0) { result = 1;	}

if (b<0)
	{
	for (var i = -1; i > b; i--)	{result *=a;}
}
else {
	for (var i = 1; i < b; i++) {	result *=a;}
}
	return result;
}
var a = prompt("Введите число", '');
var b = prompt("Введите степень",'');


if (b-Math.floor(b)==0 && a-Math.floor(a)==0 ) {if (b<0) {console.log(1/(pow(a, b)));}
else {

console.log(pow(a, b));
}
}
else {
alert('Функция работает только с целыми числами, введите целое число');}


