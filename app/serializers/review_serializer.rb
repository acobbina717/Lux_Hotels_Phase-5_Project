class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :hotel_id, :rating, :review, :created_at, :username
  belongs_to :user
end
