json.extract! artist, :id, :name

json.albums do
  json.array! artist.albums
end

json.tracks do
  json.array! artist.tracks 
end