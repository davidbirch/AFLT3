// For more information see: http://emberjs.com/guides/routing/

AFLT3.Router.map(function() {
  this.resource("about");
  return this.resource("posts", function() {
    this.resource("post", {
      path: ":post_id"
    });
    return this.route("new");
  });
});
