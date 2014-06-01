var RideinprogressView = Ember.View.extend({

  interval: 1000,

  didInsertElement: function() {
    var __this = this;
    this._super();
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
    } );
  },

  stopTracking: function() {
    clearInterval( this.get('intervalID') );

    $('#status').text( 'Ending the ride.' );

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
