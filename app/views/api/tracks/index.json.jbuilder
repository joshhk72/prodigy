@tracks.each do |track|
  json.set! track.id do
    json.extract! track, :id, :name, :image_url
    json.artist track.artist.name
    if track.album
      json.album_title track.album.title
    end
  end
end