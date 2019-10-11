json.extract! artist, :id, :name

json.album_ids do
  json.array! artist.albums.map(&:id)
end

json.track_ids do
  json.array! artist.tracks.map(&:id)  
end