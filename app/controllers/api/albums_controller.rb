class Api::AlbumsController < ApplicationController
  def show
    @album = Album.includes(:tracks).find(params[:id])
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

  private

  def album_params
    params.require(:album).permit(:title, :artist_id, :date)
  end
end
