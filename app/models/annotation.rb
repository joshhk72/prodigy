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
#  author_id  :integer          not null
#

class Annotation < ApplicationRecord
  include PublicActivity::Model
  tracked owner: Proc.new{ |controller, model| controller.current_user }
  
  validates :track_id, :start_idx, :end_idx, :body, presence: true
  before_validation :check_for_spaces

  has_many :activities, as: :trackable, class_name: 'PublicActivity::Activity', dependent: :destroy
  has_many :upvotes, as: :upvotable, dependent: :destroy
  belongs_to :track
  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id

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
