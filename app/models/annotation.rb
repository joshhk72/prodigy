# == Schema Information
#
# Table name: annotations
#
#  id         :integer          not null, primary key
#  track_id   :integer          not null
#  start_idx  :integer          not null
#  end_idx    :integer          not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Annotation < ApplicationRecord
  validates :track_id, :start_idx, :end_idx, :body, presence: true
  before_validation :check_for_spaces

  belongs_to :track

  def check_for_spaces
    track = Track.find(self.track_id)
    lyrics = track.lyrics

    while lyrics[self.start_idx].match(/\s/)
      self.start_idx += 1
    end

    while lyrics[self.end_idx - 1].match(/\s/)
      self.end_idx -= 1;
    end
  end

end
