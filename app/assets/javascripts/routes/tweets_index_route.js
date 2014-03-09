AFLT3.TweetsIndexRoute = Ember.Route.extend({
  model: function() {
    return AFLT3.Tweet.find();
  },
  
});
