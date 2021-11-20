(function ($) {
	jQuery(document).ready(function () {

		// Scroll to Top
		jQuery('.scrolltotop').click(function () {
			jQuery('html').animate({ 'scrollTop': '0px' }, 400);
			return false;
		});

		jQuery(window).scroll(function () {
			var upto = jQuery(window).scrollTop();
			if (upto > 500) {
				jQuery('.scrollto-top').fadeIn();
			} else {
				jQuery('.scrollto-top').fadeOut();
			}
		});

		//header-fixed
		jQuery(window).scroll(function () {
			var scroll = $(window).scrollTop();

			if (scroll >= 15) {
				$(".header-area").addClass("headerfixed");
			} else {
				$(".header-area").removeClass("headerfixed");
			}
		});

		//scroll-navigation
		jQuery('body').scrollspy({ target: '#main-nav' });

		jQuery('#main-nav a').on('click', function (e) {
			if (this.hash !== '') {
				e.preventDefault();
				const hash = this.hash;
				jQuery('html, body').animate({
					scrollTop: jQuery(hash).offset().top
				}, 500, function () {
					window.location.hash = hash;
				});
			}
		});


	});
})(jQuery);