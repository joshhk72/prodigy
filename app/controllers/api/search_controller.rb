class Api::SearchController < ApplicationController

  def index; end

  def search
    @tracks = Track.ransack(name_cont: params[:q]).result
    artists = Artist.ransack(name_cont: params[:q]).result

    artists.each do |artist|
      @tracks = @tracks.or(artist.tracks)
    end
    render :search
  end

  def suggest
    if params[:artist]
      @artists = Artist.ransack(name_cont: params[:artist]).result.limit(5)
      render :artists
    elsif params[:album]
      @albums = Album.ransack(title_cont: params[:album]).result.limit(5)
      render :albums
    end
  end
end

# reference from https://medium.com/@jalenjackson/build-your-own-real-time-search-with-react-ruby-on-rails-760f141a2d1d
