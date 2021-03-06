# == Schema Information
#
# Table name: track_writers
#
#  id         :integer          not null, primary key
#  track_id   :integer          not null
#  artist_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class TrackWriter < ApplicationRecord
  validates :artist_id, uniqueness: { scope: :track_id,
    message: "cannot be credited as the writer for a track twice" }

  belongs_to :artist
  belongs_to :track
end
