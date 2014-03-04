class RawTweet < ActiveRecord::Base
  
  after_save do |raw_tweet|
    convert_to_tweet(raw_tweet)
  end
  
  private

  def convert_to_tweet(raw_tweet)
    
    # decompose the raw_tweet
    tweet_hash = JSON.parse(raw_tweet.raw) # note +was+ getting an error on one record that is not valid JSON ...
    #logger.debug("Hash = #{tweet_hash}")
    
    tweet_guid = tweet_hash["id"]
    tweet_text = tweet_hash["text"]
    tweet_original_created_at = Time.parse(tweet_hash["created_at"])
    tweet_source = tweet_hash["source"]
    user_guid = tweet_hash["user"]["id"]
    
    # create the Tweet
    tweet = Tweet.create(:tweet_text=>tweet_text, :tweet_created_at=>tweet_original_created_at, :tweet_guid=>tweet_guid, :tweet_source=>tweet_source)
    tweet.save
    
    #destroy the raw_tweet
    #raw_tweet.destroy
  end
  
end
