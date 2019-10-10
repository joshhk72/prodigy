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

  private

  def track_params
    params.require(:track_form).permit(:name)
  end
end
