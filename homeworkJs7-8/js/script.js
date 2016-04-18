$(function () {
  var tabsText = $('.tabtext div');
      var tabsMenu = $('ul li a');

  	tabsText.hide().filter(':first').show();

  	$('ul li a').on('click', function () {
          var i = findPosition(this);
          tabsText.hide().filter(tabsText[i]).show();
            defaultStyle ();
          $(this). css({
            backgroundColor: '#eee',
            borderBottom: '4px solid #eee'
          })

        });
function findPosition(curLi) {
        for (var i = 0; i < tabsMenu.length; i++) {
            if(tabsMenu[i] === curLi){
                return i;
            }
        }
    };
function defaultStyle() {
  for (var i = 0; i < tabsMenu.length; i++) {
          $(tabsMenu[i]).css({
                backgroundColor: '#fff',
                borderBottom: 'none'
			})
		}};
    var $formField = $('input:text');
	$formField.mouseover(function () {
		var name = $(this).attr('name');
		$('label.help[for="' + name + '"]').stop(true, true).fadeIn();
	});
	$formField.mouseout(function () {
		var name = $(this).attr('name');
		$('label.help[for="' + name + '"]').stop(true,true).fadeOut('fast');
	});
	var $buttonBtn = $('button:button');
	var $textHelp = $('label.help');
	$buttonBtn.click(function () {
		for (var i = 0; i < ($textHelp.length); i++){
			$textHelp.fadeIn();
		}
	});

})
