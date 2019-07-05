// Smooth Scroll
var scroll = new SmoothScroll('.navbar a[href*="#"]', {
	speed: 800
});








// active menu scroll
$(document).ready(function() {
		$('a[href*=#]').bind('click', function(e) {
				e.preventDefault(); // prevent hard jump, the default behavior

				var target = $(this).attr("href"); // Set the target as variable

				// perform animated scrolling by getting top-position of target-element and set it as scroll target
				$('html, body').stop().animate({
						scrollTop: $(target).offset().top
				}, 600, function() {
						location.hash = target; //attach the hash (#jumptarget) to the pageurl
				});

				return false;
		});
});







$(window).scroll(function() {
		var scrollDistance = $(window).scrollTop();

		// Show/hide menu on scroll
		//if (scrollDistance >= 850) {
		//		$('nav').fadeIn("fast");
		//} else {
		//		$('nav').fadeOut("fast");
		//}
	
		// Assign active class to nav links while scolling
		$('section').each(function(i) {
				if ($(this).position().top <= scrollDistance) {
						$('.navbar a.active').removeClass('active');
						$('.navbar a').eq(i).addClass('active');
				}
		});
}).scroll();







//hamburger menu interaction
var hamburger = document.getElementById('burger_menu')
var navbar = document.getElementById('navbar')

hamburger.addEventListener('click', () => {
	navbar.classList.toggle('open')
	hamburger.classList.toggle('open')
});

















