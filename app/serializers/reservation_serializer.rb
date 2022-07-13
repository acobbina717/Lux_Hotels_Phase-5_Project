class ReservationSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :hotel_id, :check_in_date, :check_out_date, :total_price
  belongs_to :user
  belongs_to :hotel
end
