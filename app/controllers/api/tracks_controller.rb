class Api::TracksController < ApplicationController
  def show
    @track = Track.includes(:artists).find(params[:id])
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

  private

  def track_params
    params.require(:track).permit(:name, :lyrics, :album_id, :date, artists: {})
  end
end
