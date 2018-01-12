$.fn.highlightTrack = function( track ) {
	$( '.multi-track' ).removeClass( 'js-track-grow' ).removeClass( 'js-track-default' ).addClass( 'js-track-shrink' );
	$( '.js-track-' + track ).addClass( 'js-track-grow' ).removeClass( 'js-track-shrink' );
};

var trackFilter = $( '.track-head' );

trackFilter.on( 'click', function( e ) {
	if ( $( this ).hasClass( 'js-btn-track--active' ) ) {
		$( '.track-head' ).removeClass( 'js-btn-track--active' );
		$( '.multi-track' ).removeClass( 'js-track-grow' ).removeClass( 'js-track-shrink' );
	} else {
		$( this ).highlightTrack( $( this ).data( 'track' ) );
		$( '.track-head' ).removeClass( 'js-btn-track--active' );
		$( this ).addClass( 'js-btn-track--active' );
	}
});
