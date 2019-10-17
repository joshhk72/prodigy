json.tracks do
  json.array!(@tracks) do |track|
    json.name track.name
    json.image_url track.image_url
    json.artist track.artist.name
    json.id track.id
  end
end