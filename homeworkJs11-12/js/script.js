$(function (){
var task = $('#task').html();

var data = [
	{
		title: 'Пащенко Инна Викторовна',
		content: ['https://github.com/pashenkoinnav/pashenkoinnav.github.io/blob/master/homwork/img/foto1.jpg?raw=true']
	},
	{
		title: 'Сейчас "отчаянная домохозяйка" в прошлом бухгалтер',
		content: []
	},
	{
		title: 'Хочу учить фронденд потому что:',
		content: ['Хочу реализовать себя','Мне нравится этим заниматься','Хочу работать в IT']
	},
	{
		title: 'Мои контакты:',
		content: ['тел.:0502884293', '<p> Мой профиль в facebook:<a href="https://www.facebook.com/pashenkoinnav" target="_blank"> FACEBOOK </a>']
	},
];

var doc = tmpl(task, {data: data});
$('body').append(doc);

})
