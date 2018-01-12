$.fn.sessionFilter = function( sessionType ) {
	if ( sessionType === 'all' ) {
		$( '.agenda' ).removeClass( 'js-filter-session-active' );
	} else {
		$( '.agenda' ).addClass( 'js-filter-session-active' ).addClass( 'js-session-' + sessionType );
	}
};

var sessionFilterBtn = $( '.js-session-filter' );

sessionFilterBtn.on( 'click', function( e ) {
	if ( $( this ).hasClass( 'js-btn-filter--active' ) ) {
		$( this ).removeClass( 'js-btn-filter--active' );
		$( this ).attr( 'aria-pressed', 'false' );
		$( '.agenda' ).removeClass( 'js-session-' + $( this ).data( 'session' ) );

		if ( $( '.agenda' ).attr( 'class' ).indexOf( 'js-session-' ) === -1 ) {
			$( '.agenda' ).removeClass( 'js-filter-session-active' );
		}
	} else {
		$( this ).sessionFilter( $( this ).data( 'session' ) );
		$( this ).addClass( 'js-btn-filter--active' );
		$( this ).attr( 'aria-pressed', 'true' );
	}
});
