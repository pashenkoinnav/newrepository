'use strict';
$(function () {
	var dataTest = [
		{
			title: 'Вопрос № 1',
			answers: ['Ответ № 1', 'Ответ № 2', 'Ответ № 3'],
			rightAns: [true, false, false]
		},
		{
			title: 'Вопрос № 2',
			answers: ['Ответ № 1', 'Ответ № 2', 'Ответ № 3'],
			rightAns: [false, true, false]
		},
		{
			title: 'Вопрос № 3',
			answers: ['Ответ № 1', 'Ответ № 2', 'Ответ № 3'],
			rightAns: [false, false, true]
		}
	];
	localStorage.setItem('testQuestions', JSON.stringify(dataTest));
	var test = localStorage.getItem('testQuestions');
	var testObj = JSON.parse(test);
	var page = $('#list-template').html();
	var testList = tmpl(page, {
		data: testObj
	});
	$('body').append(testList);
	var buttonCheck = $(":submit");
	buttonCheck.click(function () {
		var modal = $('.modal_window');
		event.preventDefault();
		$('.modal_result').text(checkAnswer());
		$('.overlay').fadeIn(400,
			function () {
				modal
					.css('display', 'block')
					.animate({
						opacity: 1,
						top: '50%'
					}, 200)
			});
		$('.modal_close, .overlay').click(function () {
			clearResult();
			modal.animate({
					opacity: 0,
					top: '45%'
				}, 200,
				function () {
					$(this).css('display', 'none');
					$('.overlay').fadeOut(400);
				}
			);
		});
	})
	function checkAnswer() {
		var mark = 0;
		for (var i = 0; i < testObj.length; i++) {
			var inputs = $("input[value='" + i + "']");
			var countUserRight = 0;
			for (var j = 0; j < inputs.length; j++) {
				var checked = inputs[j].checked;
				var right = testObj[i].rightAns[j] == true;
				if (checked == right) {
					countUserRight++
				}
			}
			if (countUserRight == (testObj[i].rightAns.length)) {
				mark++;
			}
		}
		var result = ((mark === testObj.length) ? 'Тест пройден!' : 'Тест не пройден!') + ' ' + 'Количество правильных ответов' + ' ' + mark;
		return result;
	}
	function clearResult() {
		$('input').removeAttr('checked');
	}
});
