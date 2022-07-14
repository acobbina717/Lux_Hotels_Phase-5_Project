class ReservationsController < ApplicationController
  def index 
    reservations = Reservation.all
    render json: reservations, status: 200
  end

  def show 
    reservation = find_reservation
    render json: reservation, status: 200
  end

  def user_reservation
    reservation = Reservation.where(user_id: params[:user_id])
    render json: reservation, status: 200
  end

  def create 
    reservation = Reservation.create!(reservation_params)
    render json: reservation, status: 201
  end

  def destroy
    reservation = find_reservation
    render json: reservation, status: 204
  end

  private

  def find_reservation
    Reservation.find(params[:id])
  end

  def reservation_params
    params.permit(:user_id, :hotel_id, :guest_name, :check_in_date, :check_out_date, :total_price)
  end
end
