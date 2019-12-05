class Api::ArtistsController < ApplicationController
  before_action :authenticate_user, only: [:create, :update]

  def index
    if params[:track_id]
      @track = Track.find(params[:track_id])
      @artists = @track.artists.includes(:track_artists)
      render :track
    end
  end

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

  def update
    @artist = Artist.find(params[:id])

    if @artist.update(artist_params)
      render :show
    else
      errors = @artist.errors.full_messages
      render json: errors, status: 422
    end
  end

  private

  def artist_params
    params.require(:artist).permit(:name, :image_url, :banner_image_url, :description)
  end
end
