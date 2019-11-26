json.extract! @album, :id, :title, :date, :image_url, :description, :banner_image_url

json.tracks do
  json.array! @album.tracks do |track|
    json.extract! track, :id, :name
  end
end

json.artist do
  json.extract! @album.artist, :id, :name
end