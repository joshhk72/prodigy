class Api::ActivitiesController < ApplicationController

  def index
    @activities = User
      .includes(activities: :trackable)
      .find(params[:user_id])
      .activities
      .order(created_at: :desc)
      .page(params[:page]).per(8)
    
    @last = @activities.last_page?
    
    @activities.each do |activity|
      if activity.trackable_type == "Upvote"
        if activity.trackable.upvotable_type == "Answer"
          activity.trackable.track = activity.trackable.upvotable.question.questionable
        else
          activity.trackable.track = activity.trackable.upvotable.track
        end
      elsif activity.trackable_type == "Answer"
        activity.trackable.track = activity.trackable.question.questionable
      end
    end
    render :index
  end
end