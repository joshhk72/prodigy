json.extract! artist, :id, :name, :image_url, :banner_image_url, :description

json.albums do
  json.array! artist.albums
end

json.tracks do
  json.array! artist.tracks 
end