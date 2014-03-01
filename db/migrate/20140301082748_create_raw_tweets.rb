class CreateRawTweets < ActiveRecord::Migration
  def change
    create_table :raw_tweets do |t|
      t.text :raw
      t.integer :tweet_guid

      t.timestamps
    end
  end
end
