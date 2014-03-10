class Api::V1::TwitterUsersController < ApplicationController
  respond_to :json # default to Active Model Serializers
  def index
    respond_with TwitterUser.all
  end

  def show
    respond_with TwitterUser.find(params[:id])
  end
end
