class ReviewsController < ApplicationController
  def index
    reviews = Review.all
    render json: reviews, status: 200
  end

  def show
    review = find_review
    render json: review, serializer: ReviewWithCommentsSerializer,  status: 200
  end

  def create
    review = Review.create!(review_params)
    render json: review, status: 201
  end

  def update
    review = find_review
    review.update!(review_params)
    render json: review, status: 200
  end

  def destroy
    review = find_review
    review.destroy
    render json: review, status: 204
  end

  private

  def find_review
    Review.find(params[:id])
  end

  def review_params
    params.permit(:user_id, :hotel_id, :rating, :review, :username)
  end
end
