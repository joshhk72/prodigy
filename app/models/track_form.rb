class TrackForm
  include ActiveModel::Model
  
  attr_accessor :id, :image_url, :youtube_url, :artist, :name, :lyrics, :features, :producers, :writers, :date, :album, :track

  validates :artist, :name, :lyrics, presence: true

  def save
    return false if invalid? # in case I add custom errors for tracks/albums/artists

    ActiveRecord::Base.transaction do # save everything in the form, or nothing
      @track = new_track

      artist = find_or_create_artist(self.artist)

      if artist.tracks.to_a.any? { |track| track.name == self.name }
        errors.add(:track, "already exists")
      end

      @track.artist_id = artist.id

      # the album is an optional field, so it is either found or created if included in the form (albums can have same names, so artist_id is also given).
      if self.album
        album = find_or_create_album(artist)
        @track.album_id = album.id
      end

      @track.date = self.date if self.date
      @track.image_url = self.image_url if self.image_url
      @track.youtube_url = self.youtube_url if self.youtube_url
      @track.save!

      if self.features
        features = self.features.split(',').map { |name| find_or_create_artist(name) }
        @track.featured_artists = features
      end

      if self.producers
        producers = self.producers.split(',').map { |name| find_or_create_artist(name) }
        @track.producers = producers
      end

      if self.writers
        writers = self.writers.split(',').map { |name| find_or_create_artist(name) }
        @track.writers = writers
      end
      
      true # returning true for easier logic using TrackForm.save in the future

    rescue ActiveRecord::StatementInvalid => e
      errors.add(:base, e.message) # refer to https://revs.runtime-revolution.com/saving-multiple-models-with-form-objects-and-transactions-2c26f37f7b9a
      false # same reasoning with false
    end
  end

  def update(track)
    return false if invalid? # in case I add custom errors for tracks/albums/artists

    ActiveRecord::Base.transaction do # save everything in the form, or nothing
      @track = Track.find(self.id)

      artist = find_or_create_artist(self.artist)
      @track.artist_id = artist.id

      unless self.album == "" || self.album == nil
        album = find_or_create_album(artist)
        @track.album_id = album.id
      else
        @track.album_id = nil
      end

      @track.date = self.date != "" && self.date != nil || self.date ? self.date : nil
      @track.image_url = self.image_url != "" && self.image_url != nil ? self.image_url : nil
      @track.youtube_url = self.youtube_url != "" && self.youtube_url != nil ? self.youtube_url : nil
      @track.name = self.name

      @track.save!

      if self.features
        features = self.features.split(',').map { |name| find_or_create_artist(name) }
        @track.featured_artists = features
      end

      if self.producers
        producers = self.producers.split(',').map { |name| find_or_create_artist(name) }
        @track.producers = producers
      end

      if self.writers
        writers = self.writers.split(',').map { |name| find_or_create_artist(name) }
        @track.writers = writers
      end

      # have to erase & create some associations here!

      true
    rescue ActiveRecord::StatementInvalid => e
      errors.add(:base, e.message) # refer to https://revs.runtime-revolution.com/saving-multiple-models-with-form-objects-and-transactions-2c26f37f7b9a
      false # same reasoning with false
    end
  end

  private

  def new_track
    Track.new(name: self.name.strip, lyrics: self.lyrics, date: self.date)
  end

  def find_or_create_album(artist)
    Album.find_by(title: self.album.strip, artist_id: artist.id) || Album.create!(title: self.album.strip, artist_id: artist.id, date: self.date)
  end

  def find_or_create_artist(name)
    unless artist = Artist.find_by(name: name.strip)
      artist = Artist.create!(name: name.strip)
    end
    artist
  end
end