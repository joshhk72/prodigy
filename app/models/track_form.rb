class TrackForm
  include ActiveModel::Model
  
  attr_accessor :primary_artist, :name, :lyrics, :featured_artists, :producers, :writers, :date, :album, :track

  validates :primary_artist, :name, :lyrics, presence: true

  def save
    return false if invalid? # in case I add custom errors for tracks/albums/artists

    ActiveRecord::Base.transaction do # save everything in the form, or nothing
      @track = new_track
      primary_artist = find_or_create_artist
      # the album is an optional field, so it is either found or created if included in the form (albums can have same names, so artist_id is also given).
      if self.album
        album = find_or_create_album(primary_artist)
        @track.album_id = album.id
      end

      @track.date = self.date if self.date
      @track.save!

      # now to connect the primary artist and track
      TrackArtist.create!(track_id: @track.id, artist_id: primary_artist.id, ord: 1)
      true # returning true for easier logic using TrackForm.save in the future

    rescue ActiveRecord::StatementInvalid => e
      errors.add(:base, e.message) # refer to https://revs.runtime-revolution.com/saving-multiple-models-with-form-objects-and-transactions-2c26f37f7b9a
      false # same reasoning with false
    end
  end

  private

  def new_track
    Track.new(name: self.name, lyrics: self.lyrics, date: self.date)
  end

  def find_or_create_album(artist)
    Album.find_by(title: self.album, artist_id: artist.id) || Album.create!(title: self.album, artist_id: artist.id, date: self.date)
  end

  def find_or_create_artist
    unless artist = Artist.find_by(name: self.primary_artist)
      artist = Artist.create!(name: self.primary_artist)
    end
    artist
  end
end