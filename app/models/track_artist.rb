# == Schema Information
#
# Table name: track_artists
#
#  id         :integer          not null, primary key
#  track_id   :integer          not null
#  artist_id  :integer          not null
#  ord        :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class TrackArtist < ApplicationRecord
  belongs_to :artist
  belongs_to :track
end
