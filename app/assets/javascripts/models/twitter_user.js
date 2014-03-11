// for more details see: http://emberjs.com/guides/models/defining-models/

AFLT3.TwitterUser = DS.Model.extend({
  name: DS.attr('string'),
  screenName: DS.attr('string'),
  userGuid: DS.attr('number'),
  profileBackgroundColour: DS.attr('string'),
  profileBackgroundImageUrl: DS.attr('string'),
  
  tweets: DS.hasMany('AFLT3.Tweet')
});
