class ReviewCommentSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :review_id, :comment, :rating
end
