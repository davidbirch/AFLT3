// for more details see: http://emberjs.com/guides/models/defining-models/

AFLT3.Post = DS.Model.extend({
  title: DS.attr('string'),
  author: DS.attr('string'),
  publishedAt: DS.attr('date'),
  intro: DS.attr('string'),
  extended: DS.attr('string')
});
