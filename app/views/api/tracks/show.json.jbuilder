json.extract! @track, :id, :album_id, :name, :lyrics, :length, :image_url, :date

json.artist @track.artist.name