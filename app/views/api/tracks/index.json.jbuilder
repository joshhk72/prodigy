json.tracks do
  @tracks.each do |track|
    json.set! track.id do
      json.extract! track, :id, :name, :image_url, :created_at
      json.artist track.artist
      if track.album
        json.album_title track.album.title
      end
    end
  end
end

json.set! :maxPage, @max_page