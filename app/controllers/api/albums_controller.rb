class Api::AlbumsController < ApplicationController
  before_action :authenticate_user, only: [:create, :update]
  def show
    @album = Album.includes(:tracks, :artist).find(params[:id])
    render :show
  end

  def create
    @album = Album.new(album_params)

    if @album.save
      render :show
    else
      errors = @album.errors.full_messages
      render json: errors, status: 422
    end
  end

  def update
    @album = Album.find(params[:id])

    if @album.update(album_params)
      @album.create_activity key: 'album.update', owner: current_user
      render :show
    else
      errors = @album.errors.full_messages
      render json: errors, status: 422
    end
  end

  private

  def album_params
    params.require(:album).permit(:title, :artist_id, :date, :image_url, :banner_image_url, :description)
  end
end
