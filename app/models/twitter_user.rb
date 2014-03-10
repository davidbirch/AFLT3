class TwitterUser < ActiveRecord::Base
  has_many :Tweets
end
