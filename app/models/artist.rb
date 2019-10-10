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
  validates :name, presence: true

  has_many :albums
  has_many :track_artists

  has_many :tracks,
    through: :track_artists,
    source: :track
end
