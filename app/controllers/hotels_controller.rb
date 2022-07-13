class HotelsController < ApplicationController
  def index 
    hotel = Hotel.all
    render json: hotel, status: 200
  end

  def show
    hotel = Hotel.find(params[:id])
    render json: hotel, status: 200
  end

end
