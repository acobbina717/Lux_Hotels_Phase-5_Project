class Review < ApplicationRecord
  belongs_to :user
  belongs_to :hotel
  has_many :review_comments
end
