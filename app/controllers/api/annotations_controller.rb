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
  end

  def update
  end

  def destroy
  end

end
