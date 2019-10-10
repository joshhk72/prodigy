# == Schema Information
#
# Table name: tracks
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  lyrics     :text             not null
#  length     :integer          not null
#  album_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  date       :date
#

class Track < ApplicationRecord
  validates :name, :lyrics, :length, presence: true

  before_validation :set_lyrics_length

  belongs_to :album, optional: true

  has_many :track_artists

  has_many :artists,
    through: :track_artists,
    source: :artist

  def primary_artists
    self.artists.where(ord: 1)
  end

  def featured_artists # may add other types later, but these two are it for now
    self.artists.where(ord: 2)
  end

  def set_lyrics_length
    self.length = self.lyrics.length
  end
end
