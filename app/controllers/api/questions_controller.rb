class Api::QuestionsController < ApplicationController
  def index
    if params[:track_id]
      @questions = Track.find(params[:track_id]).questions
    elsif params[:artist_id]
      @questions = Artist.find(params[:artist_id]).questions
    elsif params[:album]
      @questions = Album.find(params[:album_id]).questions
    end
    render :index
  end

  def create
    @question = Question.new(question_params)

    if @question.save
      render :show
    else
      errors = @question.errors.full_messsages
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
    params.require(:question).permit(:title, :user_id, :questionable_id, :questionable_type)
  end
end