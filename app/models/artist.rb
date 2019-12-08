# == Schema Information
#
# Table name: artists
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Artist < ApplicationRecord
  include PublicActivity::Common

  validates :name, presence: true

  has_many :activities, as: :trackable, class_name: 'PublicActivity::Activity', dependent: :destroy
  has_many :albums
  has_many :tracks
  has_many :track_features
  has_many :track_producers
  has_many :track_writers

  has_many :featured_tracks,
    through: :track_features,
    source: :track

  has_many :produced_tracks,
    through: :track_producers,
    source: :track

  has_many :written_tracks,
    through: :track_writers,
    source: :track
end
