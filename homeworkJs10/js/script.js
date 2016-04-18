$(function () {
	$('.menu-item').hover(
		function () {
			$(this).children('.submenu-list').slideDown(800, stop());
		},
		function () {
			$(this).children('.submenu-list').slideUp(800, stop());
		}
	);

	function stop() {
		$('.submenu-list').stop(true, true);
	};


	$('.submenu-list').hover(
		function () {
			$('.submenu-list').animate({
				backgroundColor: '#BE81F7'
			}, 2000);
		},
		function () {
			$('.submenu-list').animate({
				backgroundColor: '#F781D8'
			}, 2000);
		});

});
