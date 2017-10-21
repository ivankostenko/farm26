
jQuery(document).ready(function(){
//	$('html, body').animate({
//			scrollTop: $('div#bg-3-4').offset().top+700
//		}, 15000);

	$(document).click(function(){
		$('html, body').stop(true);
	});

	$(window).scroll(function(e){
		parallaxScroll();
	});

	function parallaxScroll(){
		var scrolled = $(window).scrollTop();
		$('#parallax-bg-1').css('top',(0-(scrolled*.25))+'px');
		$('#parallax-bg-2').css('top',(0-(scrolled*.4))+'px');
		$('#parallax-bg-3').css('top',(0-(scrolled*.75))+'px');
	}

 });