class HotelSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :rate, :amenities, :rooms_available, :star_rating, :desktop_thumbnail, :neighbourhood
  has_many :reviews
end
