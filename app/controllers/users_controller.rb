class UsersController < ApplicationController

  def index 
    user = User.all
    render json: user, status: 200
  end

  def show
    user = User.find_by!(id: session[:user_id])
    if user
      render json: user, status: 200
    else
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: 201
  end

  def destroy
    user = User.find(params[:id])
    user.destroy
    session.delete :user_id
    head 204
  end


  private
  def user_params
    params.permit(:username, :email, :password)
  end
end
