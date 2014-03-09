// for more details see: http://emberjs.com/guides/models/defining-models/

AFLT3.Tweet = DS.Model.extend({
  tweetText: DS.attr('string'),
  tweetCreatedAt: DS.attr('date'),
  tweetGuid: DS.attr('number'),
  tweetSource: DS.attr('string'),
  userId: DS.attr('number')
});