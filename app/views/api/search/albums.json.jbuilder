json.albums do
  json.array!(@albums) do |album|
    json.title album.title
    json.id album.id
  end
end