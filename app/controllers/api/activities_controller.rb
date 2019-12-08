class Api::ActivitiesController < ApplicationController

  def index
    if params[:user_id]
      @activities = User
        .includes(activities: :trackable)
        .find(params[:user_id])
        .activities
      @activities.each do |activity|
        if activity.trackable_type == "Upvote"
          activity.trackable.track = activity.trackable.upvotable.track
        elsif activity.trackable_type == "Answer"
          activity.trackable.track = activity.trackable.question.questionable
        end
      end
      render :index
    end
  end
end