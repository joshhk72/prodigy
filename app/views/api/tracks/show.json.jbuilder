json.extract! @track, :album_id, :id, :name, :lyrics, :length, :image_url, :date, :youtube_url

json.artist @track.artist

json.album @track.album.title if @track.album

json.features @track.featured_artists

json.producers @track.producers

json.writers @track.writers

json.annotations do
  @track.annotations.each do |annotation|
    json.set! annotation.id do 
      json.extract! annotation, :id, :track_id, :start_idx, :end_idx, :body, :author_id
    end
  end
end