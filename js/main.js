$(document).ready(function() {
	//打字效果
		$(".banner-text").typetype('我叫李晨，是一名拥有成为大牛梦想的前端工程师。')
			.delay(500)
			.typetype('\n\n以下是一个简单的自我介绍')
			.backspace(39).typetype('我叫李晨，是一名拥有成为大牛梦想的前端工程师。')
			.delay(500)
			.typetype('\n\n以下是一个简单的自我介绍')


	//隐藏导航
			$(".nav-toggle").click(function(){
				$(".toggle-ul").toggle();
			})

	$(".nav-toggle").on("click", function(e){
		$(document).one("click", function(){
			$(".toggle-ul").hide();
		});
		e.stopPropagation();
	});


	// Header Scroll
	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 50) {
			$('#header').addClass('fixed');
		} else {
			$('#header').removeClass('fixed');
		}
	});

	// Page Scroll
	var sections = $('section')
		nav = $('nav[role="navigation"]');

	$(window).on('scroll', function () {
	  	var cur_pos = $(this).scrollTop();
	  	sections.each(function() {
	    	var top = $(this).offset().top - 76
	        	bottom = top + $(this).outerHeight();
	    	if (cur_pos >= top && cur_pos <= bottom) {
	      		nav.find('a').removeClass('active');
	      		nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
	    	}
	  	});
	});
	nav.find('a').on('click', function () {
	  	var $el = $(this)
	    	id = $el.attr('href');
		$('html, body').animate({
			scrollTop: $(id).offset().top - 75
		}, 500);
	  return false;
	});

	// Mobile Navigation
	$('.nav-toggle').on('click', function() {
		$(this).toggleClass('close-nav');
		nav.toggleClass('open');
		return false;
	});	
	nav.find('a').on('click', function() {
		$('.nav-toggle').toggleClass('close-nav');
		nav.toggleClass('open');
	});
});
