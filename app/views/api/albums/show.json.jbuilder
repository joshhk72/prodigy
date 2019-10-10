json.extract! @album, :id, :title, :artist_id, :date

json.track_ids do
  json.array! @album.tracks.map(&:id)
end