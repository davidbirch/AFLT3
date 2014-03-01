AFLT3.PostsController = Ember.ArrayController.extend({
  sortProperties: ["id"],
  sortAscending: false,
  filteredContent: (function() {
    var content;
    content = this.get("arrangedContent");
    return content.filter(function(item, index) {
      return !(item.get("isNew"));
    });
  }).property("arrangedContent.@each")
});