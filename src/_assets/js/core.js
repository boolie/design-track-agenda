$.fn.isInViewport = function() {
	var elementTop = $( this ).offset().top;
	var elementBottom = elementTop + $( this ).outerHeight();

	var viewportTop = $( window ).scrollTop();
	var viewportBottom = viewportTop + $( window ).height();

	return elementTop < viewportTop && elementTop < viewportBottom;
};

var wrap = $( '#wrap' );

wrap.on( 'scroll', function( e ) {

	$( '.day' ).each( function() {
		var activeDay = $( this ).attr( 'id' );
		if ( $( this ).isInViewport() ) {
			$( '.js-head-' + activeDay ).addClass( '-u-fixed' );
		} else {
			$( '.js-head-' + activeDay ).removeClass( '-u-fixed' );
		}
	});
});
