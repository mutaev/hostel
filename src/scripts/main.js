$(function () {

  $('.popup-open').click(function() {
		$('.popup-fade').fadeIn();
		return false;
	});
	
	$('.popup-close').click(function() {
		$(this).parents('.popup-fade').fadeOut();
		return false;
	});
  
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade').fadeOut();
		}
	});
	
	$('.popup-fade').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();
		}
	});

	$('.menu-burger__header').click(function(){
    $('.menu-burger__header').toggleClass('open-menu');
    $('.header__nav').toggleClass('open-menu');
    $('body').toggleClass('fixed-page');
  });

  $("#phone").mask("+7 (999) 999-99-99");
  // $("#phone2").mask("+7 (999) 999-99-99");
  // $("#phone3").mask("+7 (999) 999-99-99");
})

