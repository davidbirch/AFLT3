// for more details see: http://emberjs.com/guides/models/defining-models/

AFLT3.RawTweet = DS.Model.extend({
  raw: DS.attr('string'),
  tweetGuid: DS.attr('number')
});
