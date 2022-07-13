class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :created_at
  has_many :reviews
  has_many :reservations
end
