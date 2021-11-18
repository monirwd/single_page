(function ($) {
	$(document).ready(function () {

		// Scroll to Top
		jQuery('.scrolltotop').click(function () {
			jQuery('html').animate({ 'scrollTop': '0px' }, 400);
			return false;
		});

		jQuery(window).scroll(function () {
			var upto = jQuery(window).scrollTop();
			if (upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});

		//header-fixed
		$(window).scroll(function () {
			var scroll = $(window).scrollTop();

			if (scroll >= 15) {
				$(".header-area").addClass("headerfixed");
			} else {
				$(".header-area").removeClass("headerfixed");
			}
		});

		//scroll-down
		$(".hero-left a").click(function () {
			$('html, body').animate({
				scrollTop: $(".course-area").offset().top
			}, 500);
		});

		//scroll-navigation
		$('body').scrollspy({ target: '#main-nav' });

		$('#main-nav a').on('click', function (e) {
			if (this.hash !== '') {
				e.preventDefault();
				const hash = this.hash;
				$('html, body').animate({
					scrollTop: $(hash).offset().top
				}, 500, function () {
					window.location.hash = hash;
				});
			}
		});












	});
})(jQuery);