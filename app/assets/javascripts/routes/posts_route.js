AFLT3.PostsRoute = Ember.Route.extend({
  model: function() {
    return AFLT3.Post.find();
  }
});
