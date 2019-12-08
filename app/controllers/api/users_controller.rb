class Api::UsersController < ApplicationController

  def show
    @user = User
      .includes(activities: :trackable).find(params[:id])
    @user.activities.each do |activity|
      if activity.trackable_type == "Upvote"
        activity.trackable.track = activity.trackable.upvotable.track
      end
    end

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
      render :show
    else
      errors = @user.errors.full_messages
      render json: errors, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :description, :image_url)
  end
end
