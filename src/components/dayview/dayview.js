$.fn.changeDay = function( dayVal ) {
	$( '.agenda' ).removeClass( 'js-sunday' ).removeClass( 'js-monday' ).removeClass( 'js-tuesday' ).removeClass( 'js-wednesday' ).removeClass( 'js-thursday' );
	if ( dayVal === 'all' ) {
		$( '.agenda' ).removeClass( 'js-dayview' );
	} else {
		$( '.agenda' ).addClass( 'js-dayview' ).addClass( 'js-' + dayVal );
		$( '#wrap' ).animate({ scrollTop: 0 }, 'slow' );
	}
};

var daySelector = $( '.js-day-selector' );

daySelector.on( 'change', function( e ) {
	$( this ).changeDay( this.value );
});

var daySelectorLink = $( '.day-filter' );

daySelectorLink.on( 'click', function( e ) {
	$( this ).changeDay( $( this ).data( 'day' ) );
	daySelector.val( $( this ).data( 'day' ) );
});

var iconClose = $( '.icon--close' );

iconClose.on( 'click', function( e ) {
	$( this ).changeDay( 'all' );
	daySelector.val( 'all' );
});
