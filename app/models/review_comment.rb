class ReviewComment < ApplicationRecord
  belongs_to :user , dependent: :destroy
  belongs_to :review , dependent: :destroy
end
