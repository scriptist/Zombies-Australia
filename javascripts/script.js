var checkSize = function() {
	var sectionHeight = $(window).height() / 2;
	$('.section').each(function() {
		var $this = $(this),
			h = $this.height(),
			newHeight = sectionHeight;

		if ($this.is('#contact'))
			newHeight *= 1.9
		if ($(window).width() <= 800)
			newHeight = h;

		var padding = Math.max((newHeight - h) / 2 - 3, 0);

		$this.css({
			paddingTop: padding,
			paddingBottom: padding
		});
	});
}


checkSize();
$(window).resize(checkSize);

var isSupported = false,
	isMobile = !!navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);

if (!isMobile && ($.browser.webkit || $.browser.chrome || $.browser.opera || $.browser.mozilla))
	isSupported = true;
if ($.browser.msie && $.browser.version >= 10)
	isSupported = true;

if (isSupported) {

	$('body').addClass('stellar-on');

	$.stellar({
		positionProperty: 'transform',
		horizontalScrolling: false,
		responsive: true
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

}