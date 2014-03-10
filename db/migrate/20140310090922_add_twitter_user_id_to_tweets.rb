class AddTwitterUserIdToTweets < ActiveRecord::Migration
  def change
    remove_column :tweets, :user_id, :integer
    add_column :tweets, :twitter_user_id, :integer
  end
end
