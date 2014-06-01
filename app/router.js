var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
    this.route("rideinprogress", { path: "/" });
    this.route("login", { path: "/login" });
    this.route("whereto", { path: "/whereto" });
    this.route("similarriders", { path: "/similarriders" });
    this.route("messagerider", { path: "/messagerider/:rider_id" });
    this.route("rideinprogress", { path: "/rideinprogress" });
    this.route("endride", { path: "/endride" });
});

export default Router;
