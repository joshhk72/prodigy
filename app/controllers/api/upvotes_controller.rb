class Api::UpvotesController < ApplicationController
  def index
    if params[:comment_id]
      comment = Comment.find(params[:comment_id])
      @upvotes = comment.upvotes.includes(:user)
    elsif params[:annotation_id]
      annotation = Annotation.find(params[:annotation_id])
      @upvotes = annotation.upvotes.includes(:user)
    end
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
