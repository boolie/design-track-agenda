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
			$( '.js-head-' + activeDay ).addClass( 'fix-header' );
		} else {
			$( '.js-head-' + activeDay ).removeClass( 'fix-header' );
		}
	});
});

/* Day Selector */
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

/* session filter */
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
		$( '.agenda' ).removeClass( 'js-session-' + $( this ).data( 'session' ) );

		if ( $( '.agenda' ).attr( 'class' ).indexOf( 'js-session-' ) === -1 ) {
			$( '.agenda' ).removeClass( 'js-filter-session-active' );
		}
	} else {
		$( this ).sessionFilter( $( this ).data( 'session' ) );
		$( this ).addClass( 'js-btn-filter--active' );
	}
});

/* multi track */
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
