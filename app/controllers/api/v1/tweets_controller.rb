class Api::V1::TweetsController < ApplicationController
  respond_to :json # default to Active Model Serializers
  def index
    respond_with Tweet.all
  end

  def show
    respond_with Tweet.find(params[:id])
  end

end
