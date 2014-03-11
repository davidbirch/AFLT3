// for more details see: http://emberjs.com/guides/models/defining-models/

AFLT3.Tweet = DS.Model.extend({
  tweetText: DS.attr('string'),
  tweetCreatedAt: DS.attr('string'),
  tweetGuid: DS.attr('number'),
  tweetSource: DS.attr('string'),
  twitterUserID: DS.attr('number'),
  
  twitterUser: DS.belongsTo('AFLT3.TwitterUser')
});