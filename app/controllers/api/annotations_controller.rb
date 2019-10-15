class Api::AnnotationsController < ApplicationController
  def index
    @annotations = Annotation.all
    render :index
  end

  def show
    @annotation = Annotation.find(params[:id])
    render :show
  end

  def create
    track = Track.find(annotation_params[:track_id])
    @annotation = track.annotations.new(annotation_params)
    @annotation.id = nil

    if @annotation.save
      render :show
    else
      errors = @annotation.errors.full_messages
      render json: errors, status: 422
    end
  end

  def update
  end

  def destroy
    @annotation = Annotation.find(params[:id]) 
    if @annotation
      @annotation.destroy
      render :show
    else
      render json: ["Annotation does not exist"]
    end
  end

  private

  def annotation_params
    params.require(:annotation).permit(:id, :body, :end_idx, :start_idx, :track_id, :author_id)
  end

end
