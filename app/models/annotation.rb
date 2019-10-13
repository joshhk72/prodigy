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
end
