AFLT3.PostsNewController = Ember.ObjectController.extend({
  save: function() {
    return this.get('store').commit();
  },
  cancel: function() {
    this.get('content').deleteRecord();
    this.get('store').transaction().rollback();
    return this.transitionToRoute('posts');
  },
  transitionAfterSave: (function() {
    if (this.get('content.id')) {
      return this.transitionToRoute('post', this.get('content'));
    }
  }).observes('content.id')
});