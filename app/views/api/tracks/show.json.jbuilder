json.extract! @track, :id, :name, :lyrics, :length, :image_url, :date, :youtube_url

json.artist @track.artist.name

json.album @track.album.title if @track.album

json.features @track.featured_artists.map(&:name)

json.producers @track.producers.map(&:name)

json.writers @track.writers.map(&:name)