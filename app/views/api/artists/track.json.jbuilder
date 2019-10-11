json.array! @artists do |artist|
  json.partial! 'api/artists/artist', artist: artist
  json.ords do
    json.array! artist.track_artists.where(track_id: @track.id).map(&:ord)
  end
end