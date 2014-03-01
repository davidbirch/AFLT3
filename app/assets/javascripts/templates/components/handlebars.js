Ember.Handlebars.registerBoundHelper("date", function(date) {
  return moment(date).fromNow();
});

window.showdown = new Showdown.converter();

Ember.Handlebars.registerBoundHelper("markdown", function(input) {
  if (input) {
    return new Ember.Handlebars.SafeString(window.showdown.makeHtml(input));
  }
});