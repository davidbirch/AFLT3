AFLT3.PostController = Ember.ObjectController.extend({
  isEditing: false,
  actions: {
    edit: function() {
      return this.set("isEditing", true);
    },
    "delete": function() {
      if (window.confirm("Are you sure you want to delete this post?")) {
        this.get('content').deleteRecord();
        this.get('store').commit();
        return this.transitionToRoute('posts');
      }
    },
    doneEditing: function() {
      this.set("isEditing", false);
      return this.get('store').commit();
    }
  }
});