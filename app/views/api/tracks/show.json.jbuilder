json.extract! @track, :id, :album_id, :name, :lyrics, :length

json.artist_ids do
  json.array! @track.artists.map(&:id)
end