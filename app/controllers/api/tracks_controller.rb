class Api::TracksController < ApplicationController
  before_action :authenticate_user, only: [:create, :update]
  def index
    if params[:page]
      @tracks = Track.all.order(created_at: :desc).page(params[:page]).per(5);
      @max_page = Track.page(params[:page]).per(5).last_page?
    else
      @tracks = Track.all
      @max_page = true
    end
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
