class Api::AnswersController < ApplicationController
  before_action :authenticate_user, only: [:update, :destroy]

  def show
    @answer = Answer.find(params[:id])
    render :show
  end

  def create
    @answer = Answer.new(answer_params)
    @answer.user_id = current_user.id if current_user

    if @answer.save
      render :show
    else
      errors = @answer.errors.full_messsages
      render json: errors, status: 422
    end
  end

  def update
    @answer = Answer.find(params[:id])

    if @answer.update(answer_params)
      render :show
    else
      errors = @answer.errors.full_messages
      render json: errors, status: 422
    end
  end

  def destroy
    @answer = Answer.find(params[:id]) 
    if @answer
      @answer.destroy
      render :show
    else
      render json: { success: false }
    end
  end

  private

  def answer_params
    params.require(:answer).permit(:body, :question_id, :question)
  end
end
