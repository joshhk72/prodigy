# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  body       :text
#  author_id  :integer
#  track_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord

  validates :body, :author_id, :track_id, presence: true

  belongs_to :track
  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id

end
