var LoginView = Ember.View.extend({
  didInsertElement: function() {
    var __this = this;
    this._super();

    __this.set('newUserElementsHidden', false);

    __this.updateFormAction('immediate');

    this.$("#new-user-toggle").click(function(event) {
      event.preventDefault();

      __this.toggleProperty('newUserElementsHidden');

      console.log("toggle", __this.get("newUserElementsHidden"));

      __this.updateFormAction();

    });
  },

  updateFormAction: function(immediate) {
    var __this = this, action;

    action = ( __this.get("newUserElementsHidden") ? 'login' : 'signup' );

    $('input[name="action"]').val( action );

    $(".new-user-only").each(function() {
      if ( $(this).is('.form-group') && !immediate ) {
        $(this).slideToggle( __this.get("newUserElementsHidden") );
      } else {
        $(this).toggle( __this.get("newUserElementsHidden") );
      }
    });

    $(".existing-user-only").each(function() {
      if ( $(this).is('.form-group') && !immediate ) {
        $(this).slideToggle( ! __this.get("newUserElementsHidden") );
      } else {
        $(this).toggle( ! __this.get("newUserElementsHidden") );
      }
    });

  }
});

export default LoginView;
