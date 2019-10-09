class Api::UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
    render :profile
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render :show
    else
      errors = @user.errors.full_messages
      render json: errors, status: 422
    end
  end

  def update
    @user = User.find(params[:id])

    if @user.update(user_params)
      login(@user)
      render :show
    else
      errors = @user.errors.full_messages
      render json: errors, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :description)
  end
end
