$(document).ready(function(){
	$('.triple-slider').slick({
		lazyLoad: 'ondemand',
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slick-prev triple-slider-buttons" id="triple-slider-button-left"></button>',
		nextArrow: '<button type="button" class="slick-next triple-slider-buttons" id="triple-slider-button-right"></button>',
		responsive: [
			{
				breakpoint: 980,
				settings: {
				slidesToShow: 2,
				}
			},
			{
				breakpoint: 650,
				settings: {
				slidesToShow: 1,
				arrows: false,
				}
			}
		]
	});

	$(function() {
		$(window).resize(function() {
			var mq1020 = window.matchMedia( "(min-width: 1020px)" ).matches;
			var mq980 = window.matchMedia( "(min-width: 980px)" ).matches;
			if (mq1020) {
				$('.triple-slider').css({'width': '960px', 'margin-left': '-10px'});				
			} else if (mq980) {
				$('.triple-slider').css({'width': '95%', 'margin-left': '2.5%'});
			} else {
				$('.triple-slider').css({'width': 'calc(100% + 20px)', 'margin-left': '-10px'});
			}

			});
	});
});

