class Hotel < ApplicationRecord
  has_many :reservations
  has_many :users, through: :reservations
  has_many :reviews
end
