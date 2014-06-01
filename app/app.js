import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'bikeapp', // TODO: loaded via config
  Resolver: Resolver
});

var prepareApp = function() {
  loadInitializers(App, 'bikeapp');
  alert( 'app is ready!' );
};

if ( "cordova" in window ) {
  document.addEventListener("deviceready", prepareApp, false);
} else {
  prepareApp();
}

export default App;
