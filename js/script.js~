$(document).ready(function(){
	setNavbar();
	
	/*BackgroundCheck.init({
		targets: '.target'
	});*/
	
	$(window).resize(function(){
		setNavbar();
		//BackgroundCheck.refresh();
	});
	
	$(window).scroll(function(){
		setNavbar();
		//BackgroundCheck.refresh();
	});
	
	function setNavbar(){
	
		var distanceBar = $('#navbar').offset().top;
		var distanceQual = $('#qualifications').offset().top;
		var distanceSkills = $('#skills').offset().top;
		var distancePort = $('#portfolio').offset().top;
		var distanceContact = $('#contact').offset().top;
		var windowScroll = $(window).scrollTop();

		if(windowScroll+50 > distanceContact){
			$('.navbar-pos').css('position', 'fixed');
			$('.navbar-pos').css('top', '0');
			$('#contactlink').addClass('link-active');
			$('#homelink').removeClass('link-active');
			$('#aboutlink').removeClass('link-active');
			$('#quallink').removeClass('link-active');
			$('#skilllink').removeClass('link-active');
			$('#portlink').removeClass('link-active');
		} else if (windowScroll+50> distancePort){
			$('.navbar-pos').css('position', 'fixed');
			$('.navbar-pos').css('top', '0');
			$('#portlink').addClass('link-active');
			$('#homelink').removeClass('link-active');
			$('#aboutlink').removeClass('link-active');
			$('#quallink').removeClass('link-active');
			$('#skilllink').removeClass('link-active');
			$('#contactlink').removeClass('link-active');
		} else if (windowScroll+50 > distanceSkills){
			$('.navbar-pos').css('position', 'fixed');
			$('.navbar-pos').css('top', '0');
			$('#skilllink').addClass('link-active');
			$('#homelink').removeClass('link-active');
			$('#aboutlink').removeClass('link-active');
			$('#quallink').removeClass('link-active');
			$('#portlink').removeClass('link-active');
			$('#contactlink').removeClass('link-active');
			addCircles();		
		} else if (windowScroll+50 > distanceQual){
			$('.navbar-pos').css('position', 'fixed');
			$('.navbar-pos').css('top', '0');
			$('#quallink').addClass('link-active');
			$('#homelink').removeClass('link-active');
			$('#aboutlink').removeClass('link-active');
			$('#portlink').removeClass('link-active');
			$('#skilllink').removeClass('link-active');
			$('#contactlink').removeClass('link-active');
		} else if (windowScroll > distanceBar){
			$('.navbar-pos').css('position', 'fixed');
			$('.navbar-pos').css('top', '0');
			$('.navbar-pos').css('background-color', '#333');
			$('#aboutlink').addClass('link-active');
			$('#homelink').removeClass('link-active');
			$('#quallink').removeClass('link-active');
			$('#skilllink').removeClass('link-active');
			$('#portlink').removeClass('link-active');
			$('#contactlink').removeClass('link-active');
		} else {
			$('.navbar-pos').css('position', '');
			$('.navbar-pos').css('top', '');
			$('#homelink').addClass('link-active');
			$('#aboutlink').removeClass('link-active');
			$('#quallink').removeClass('link-active');
			$('#skilllink').removeClass('link-active');
			$('#portlink').removeClass('link-active');
			$('#contactlink').removeClass('link-active');
		}
	};

	function addCircles(){
		$('.20per .spinner').css('animation', 'rota20 2s linear forwards');
		$('.20per .filler').css('animation', 'fill20 2s steps(1, end) forwards');
		$('.20per .mask').css('animation', 'mask20 2s steps(1, end) forwards');
		$('.40per .spinner').css('animation', 'rota40 2s linear forwards');
		$('.40per .filler').css('animation', 'fill40 2s steps(1, end) forwards');
		$('.40per .mask').css('animation', 'mask40 2s steps(1, end) forwards');
		$('.60per .spinner').css('animation', 'rota60 2s linear forwards');
		$('.60per .filler').css('animation', 'fill60 2s steps(1, end) forwards');
		$('.60per .mask').css('animation', 'mask60 2s steps(1, end) forwards');
		$('.80per .spinner').css('animation', 'rota80 2s linear forwards');
		$('.80per .filler').css('animation', 'fill80 2s steps(1, end) forwards');
		$('.80per .mask').css('animation', 'mask80 2s steps(1, end) forwards');
		$('.100per .spinner').css('animation', 'rota100 2s linear forwards');
		$('.100per .filler').css('animation', 'fill100 2s steps(1, end) forwards');
		$('.100per .mask').css('animation', 'mask100 2s steps(1, end) forwards');
	};

	function removeCircles(){
		$('.20per .spinner').css('animation', '');
		$('.20per .filler').css('animation', '');
		$('.20per .mask').css('animation', '');
		$('.40per .spinner').css('animation', '');
		$('.40per .filler').css('animation', '');
		$('.40per .mask').css('animation', '');
		$('.60per .spinner').css('animation', '');
		$('.60per .filler').css('animation', '');
		$('.60per .mask').css('animation', '');
		$('.80per .spinner').css('animation', '');
		$('.80per .filler').css('animation', '');
		$('.80per .mask').css('animation', '');
		$('.100per .spinner').css('animation', '');
		$('.100per .filler').css('animation', '');
		$('.100per .mask').css('animation', '');
	}
});
