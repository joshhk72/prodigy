class Api::UpvotesController < ApplicationController
  before_action :authenticate_user, only: [:create, :update, :destroy]

  def index
    if params[:comment_id]
      model = Comment.find(params[:comment_id])
    elsif params[:annotation_id]
      model = Annotation.find(params[:annotation_id])
    elsif params[:answer_id]
      model = Answer.find(params[:answer_id])
    end
    @upvotes = model.upvotes.includes(:user)
    render :index
  end
  
  def create
    @upvote = Upvote.new(upvote_params)

    if @upvote.save
      render :show
    else
      errors = @upvote.errors.full_messages
      render json: errors, status: 422
    end
  end

  def update
    @upvote = Upvote.find(params[:id])
    
    if @upvote
      @upvote.reverse!
      render :show
    else
      render json: ["Upvote/Downvote does not exist"]
    end
  end

  def destroy
    @upvote = Upvote.find(params[:id])
    if @upvote
      @upvote.destroy
      render :show
    else
      render json: ["Upvote/Downvote does not exist"]
    end
  end

  private

  def upvote_params
    params.require(:upvote).permit(:value, :user_id, :upvotable_id, :upvotable_type)
  end
end
