class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(user_params[:username], user_params[:password])

    if @user
      login(@user)
      render "api/users/show"
    else
      render json: { errors: "Invalid username or password" }, status: 422
    end
  end

  def destroy
    @user = current_user
    if current_user
      logout
      render "api/users/show"
    else
      render json: { errors: "You are not logged in!"}, status: 404
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
