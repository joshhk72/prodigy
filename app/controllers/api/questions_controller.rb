class Api::QuestionsController < ApplicationController
  def index
    if params[:track_id]
      @questions = Track.find(params[:track_id]).questions.includes(:answer)
    elsif params[:artist_id]
      @questions = Artist.find(params[:artist_id]).questions.includes(:answer)
    elsif params[:album]
      @questions = Album.find(params[:album_id]).questions.includes(:answer)
    end
    render :index
  end

  def create
    @question = Question.new(question_params)
    @question.user_id = current_user.id

    if @question.save
      render :show
    else
      errors = @question.errors.full_messages
      render json: errors, status: 422
    end
  end

  def destroy
    @question = Question.find(params[:id]) 
    if @question
      @question.destroy
      render :show
    else
      render json: { success: false }
    end
  end

  private

  def question_params
    params.require(:question).permit(:title, :track_id, :artist_id, :album_id)
  end
end