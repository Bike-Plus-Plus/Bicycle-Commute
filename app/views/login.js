var LoginView = Ember.View.extend({
  didInsertElement: function() {
    var __this = this;
    this._super();
    this.$("#new-user-toggle").click(function(event) {
      event.preventDefault();

      __this.toggleProperty('newUserElementsHidden');

      console.log("toggle", __this.get("newUserElementsHidden"));

      $(".new-user-only").each(function() {
        if ( $(this).is('.form-group') ) {
          $(this).slideToggle( __this.get("newUserElementsHidden") );
        } else {
          $(this).toggle( __this.get("newUserElementsHidden") );
        }
      });

      $(".existing-user-only").each(function() {
        if ( $(this).is('.form-group') ) {
          $(this).slideToggle( ! __this.get("newUserElementsHidden") );
        } else {
          $(this).toggle( ! __this.get("newUserElementsHidden") );
        }
      });

    });
  }
});

export default LoginView;
