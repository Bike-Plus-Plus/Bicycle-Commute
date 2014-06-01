var RideinprogressView = Ember.View.extend({

  interval: 1000,

  didInsertElement: function() {
    var __this = this, confirm;
    this._super();

    if ( window.plugin && window.plugin.backgroundMode ) {
      confirm = true;
      this.set('backgroundModeAvailable', true);
      $('#feedback').addClass('alert-success').text( "The app will track your location in the background." );
    } else {
      $('#feedback').addClass('alert-warning').text( "The app cannot run in the background on this device." );
      this.set('backgroundModeAvailable', false);
    }

    this.startTracking();

    $('#end').click( function( event ) {

      event.preventDefault();
      __this.stopTracking();

    } );
  },

  startTracking: function() {
    var __this = this;

    this.requestLocation( function() {
      var id;

      id = setInterval( function() {
        __this.reportLocation.apply( __this, arguments );
      }, __this.interval );
      __this.set( 'intervalID', id );


    if ( this.get('backgroundModeAvailable') ) {
      window.plugin.backgroundMode.enable();
    }

    } );
  },

  stopTracking: function() {
    clearInterval( this.get('intervalID') );

    if ( this.get('backgroundModeAvailable') ) {
      window.plugin.backgroundMode.disable();
    }

    $('#status'.text( 'Ending the ride.' ) );

    window.location = '/endride';
  },

  requestLocation: function(callback) {
    navigator.geolocation.getCurrentPosition( callback );
  },

  reportLocation: function() {
    this.requestLocation( function(location) {
      var messageLines, message, key, value;

      messageLines = [];
      for ( key in location.coords ) {
        messageLines.push( key + ': ' + location.coords[key] );
      }

      message = messageLines.join( '<br>' );
      $('#status').html( message );

    } );
  }

});

export default RideinprogressView;
