# == Schema Information
#
# Table name: track_features
#
#  id         :integer          not null, primary key
#  track_id   :integer          not null
#  artist_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class TrackFeature < ApplicationRecord
  validates :artist_id, uniqueness: { scope: :track_id,
    message: "cannot be featured in a track twice" }

  belongs_to :artist
  belongs_to :track
end
