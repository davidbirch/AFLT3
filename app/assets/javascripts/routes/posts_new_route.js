AFLT3.PostsNewRoute = Ember.Route.extend({
  model: function() {
    return AFLT3.Post.createRecord({
      publishedAt: new Date(),
      author: "current user"
    });
  }
});
