class Api::CommentsController < ApplicationController
  def index
    if params[:track_id]
      track = Track.find(params[:track_id])
      @comments = track.comments.includes(:author, :track)
      render :index
    elsif params[:author_id]
      author = User.find(params[:user_id])
      @comments = user.comments.includes(:author, :track)
      render :index
    end
  end

  def show
    @comment = Comment.find(params[:id])
    render :show
  end

  def create
    track = Track.find(comment_params[:track_id])
    @comment = track.comments.new(comment_params)

    if @comment.save
      render :show
    else
      errors = @comment.errors.full_messages
      render json: errors, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id]) 
    if @comment
      @comment.destroy
      render :show
    else
      render json: { success: false }
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :track_id, :author_id)
  end

end
