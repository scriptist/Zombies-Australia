var checkSize = function() {
	var sectionHeight = $(window).height() / 2;
	$('.section').each(function() {
		var $this = $(this),
			h = $this.height(),
			newHeight = $(window).width() > 800 ? sectionHeight : h,
			padding = Math.max((newHeight - h) / 2 - 3, 0);

		$this.css({
			paddingTop: padding,
			paddingBottom: padding
		});
	});
}


checkSize();
$(window).resize(checkSize);


$.stellar({
	positionProperty: 'transform',
	horizontalScrolling: false,
	responsive: false
});

$(document).on('click', 'a', function(e) {
	var $this = $(this),
		href = $this.attr('href');
	if (href && href.charAt(0) == '#') {
		e.preventDefault();
		var top = $(href).offset().top;
		$('html, body').animate({scrollTop: top});
	}
});