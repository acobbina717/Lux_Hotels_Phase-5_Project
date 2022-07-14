class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

  def render_unprocessable_entity(exception)
    render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
  end

   def render_not_found(exception)
    render json: { error: "#{exception.model} not found" }, status: 404
  end

  def hello_world
    session[:count] = (session[:count] || 0) + 1
    render json: {count: session[:count]}
  end
end
