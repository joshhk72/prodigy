json.extract! @album, :id, :title, :date

json.tracks do
  json.array! @album.tracks do |track|
    json.extract! track, :id, :name
  end
end

json.artist do
  json.extract! @album.artist, :id, :name
end