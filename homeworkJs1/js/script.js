function pow(a, b) {
	var result = a;
	if (b==0) { result = 1;

	}


	for (var i = 1; i < b; i++) {
		result *=a;
}

	return result;
}
var a = prompt("Введите число", '');
var b = prompt("Введите степень",'');


if (b-Math.floor(b)==0 && a-Math.floor(a)==0 ) {if (b<0) {console.log(1/pow(a, b));}
else {

console.log(pow(a, b));
}
}
else {
alert('Функция работает только с целыми числами, введите целое число');}


var arr = [];
for (var i = 0; i < 5; i++){
    arr.push(prompt('Enter Name'));
};

var flag;
var userName = prompt('Enter your User Name');
for (i = 0; i < arr.length; i++){
    if (arr[i] === userName){
        flag = true;
    }
};
if (flag == true) {
    alert('Welcome, '+ userName );
} else
    {
        alert('Sorry, but username' + userName + ' not found :(((')
    };
