# == Schema Information
#
# Table name: tracks
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  lyrics      :text             not null
#  length      :integer          not null
#  album_id    :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  date        :date
#  image_url   :string
#  youtube_url :string
#  artist_id   :integer
#

class Track < ApplicationRecord
  validates :name, :lyrics, :length, :artist_id, presence: true

  before_validation :set_lyrics_length

  belongs_to :album, optional: true
  belongs_to :artist
  has_many :track_features
  has_many :track_producers
  has_many :track_writers

  has_many :featured_artists,
    through: :track_features,
    source: :artist

  has_many :producers,
    through: :track_producers,
    source: :artist

  has_many :writers,
    through: :track_writers,
    source: :artist

  def set_lyrics_length
    self.length = self.lyrics.length
  end
end
