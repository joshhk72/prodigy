class Api::SearchController < ApplicationController

  def index; end

  def search
    @tracks = Track.ransack(name_cont: params[:q]).result(distinct: true).limit(5)
    render :search
  end
end

# reference from https://medium.com/@jalenjackson/build-your-own-real-time-search-with-react-ruby-on-rails-760f141a2d1d
