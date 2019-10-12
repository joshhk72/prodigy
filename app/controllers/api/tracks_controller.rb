class Api::TracksController < ApplicationController
  def index
    @tracks = Track.all
    render :index
  end

  def show
    @track = Track.find(params[:id])
    render :show
  end

  def create
    @track = Track.new(track_params)

    if @track.save
      render :show
    else
      errors = @track.errors.full_messsages
      render json: errors, status: 422
    end
  end

  def update
    @track = Track.find(params[:id])

    if @track.update(track_params)
      render :show
    else
      errors = @track.errors.full_messages
      render json: errors, status: 422
    end
  end

  private

  def track_params
    params.require(:track).permit(:name, :lyrics, :album_id, :date, :image_url, :artist_id)
  end
end
