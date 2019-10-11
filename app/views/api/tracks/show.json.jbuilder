json.extract! @track, :id, :album_id, :name, :lyrics, :length, :image_url

json.artist_ids do
  json.array! @track.artists.map(&:id)
end