class Api::TrackFormsController < ApplicationController
  def create
    track_form = TrackForm.new(track_params)

    if track_form.save
      @track = track_form.track
      render "api/tracks/show"
    else
      render json: track_form.errors.full_messages, status: 422
    end
  end

  def update
    @track = Track.find(params[:id])
    track_form = TrackForm.new(track_params)

    if track_form.update(track)
      render "api/tracks/show"
    else
      render json: track_form.errors.full_messages, status: 422
    end
  end

  private

  def track_params
    params.require(:track_form).permit(:image_url, :youtube_url, :artist, :name, :lyrics, :date, :album, featured: [], producers: [], writers: [])
  end
end