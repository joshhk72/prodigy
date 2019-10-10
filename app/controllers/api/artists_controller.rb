class Api::ArtistsController < ApplicationController
  def show
    @artist = Artist.includes(:tracks, :albums).find(params[:id])
    render :show
  end

  def create
    @artist = Artist.new(artist_params)

    if @artist.save
      render :show
    else
      errors = @artist.errors.full_messages
      render json: errors, status: 422
    end
  end

  private

  def artist_params
    params.require(:artist).permit(:name)
  end
end
