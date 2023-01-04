$(function () {
	$('.image__slider').slick({
    dots: false,
    arrows: true,
    autoplay: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    autoplaySpeed: 6000,
    });

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


    var $radios = $('input[data-sync]');
    $radios.change(function() {
        $radios.filter('[data-sync="' + $(this).attr('data-sync') + '"]').prop('checked', true);
    });

	$('.menu-burger__header').click(function(){
    $('.menu-burger__header').toggleClass('open-menu');
    $('.header__nav').toggleClass('open-menu');
    $('body').toggleClass('fixed-page');
    });

	$('.menu-burger__header2').click(function(){
    $('.menu-burger__header2').toggleClass('open-menu2');
    $('.header__nav2').toggleClass('open-menu2');
    $('body').toggleClass('fixed-page');
    });

	$('.top__menu-btn').click(function(){
    $('.top__menu-btn').toggleClass('open-menu3');
    $('.top__menu').toggleClass('open-menu3');
    $('body').toggleClass('fixed-page');
    });

	$('.top__menu-btn2').click(function(){
    $('.top__menu-btn2').toggleClass('open-menu4');
    $('.top__menu2').toggleClass('open-menu4');
    $('body').toggleClass('fixed-page');
    });







	$(".polzunok-5").slider({
    min: 0,
    max: 5000,
    values: [0, 3000],
    range: true,
    animate: "fast",
    slide : function(event, ui) {    
        $(".polzunok-input-5-left").val(ui.values[ 0 ]);   
        $(".polzunok-input-5-right").val(ui.values[ 1 ]);  
    }    
	});
	$(".polzunok-input-5-left").val($(".polzunok-5").slider("values", 0));
	$(".polzunok-input-5-right").val($(".polzunok-5").slider("values", 1));
	$(".polzunok-container-5 input").change(function() {
    var input_left = $(".polzunok-input-5-left").val().replace(/[^0-9]/g, ''),    
    opt_left = $(".polzunok-5").slider("option", "min"),
    where_right = $(".polzunok-5").slider("values", 1),
    input_right = $(".polzunok-input-5-right").val().replace(/[^0-9]/g, ''),    
    opt_right = $(".polzunok-5").slider("option", "max"),
    where_left = $(".polzunok-5").slider("values", 0); 
    if (input_left > where_right) { 
        input_left = where_right; 
    }
    if (input_left < opt_left) {
        input_left = opt_left; 
    }
    if (input_left == "") {
    input_left = 0;    
    }        
    if (input_right < where_left) { 
        input_right = where_left; 
    }
    if (input_right > opt_right) {
        input_right = opt_right; 
    }
    if (input_right == "") {
    input_right = 0;    
    }    
    $(".polzunok-input-5-left").val(input_left); 
    $(".polzunok-input-5-right").val(input_right); 
    if (input_left != where_left) {
        $(".polzunok-5").slider("values", 0, input_left);
    }
    if (input_right != where_right) {
        $(".polzunok-5").slider("values", 1, input_right);
    }
	});

    $("#phone").mask("+7 (999) 999-99-99");
    $("#phone2").mask("+7 (999) 999-99-99");
})

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
    }
    }
}
}


