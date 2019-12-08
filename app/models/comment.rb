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
  include PublicActivity::Model
  tracked owner: Proc.new{ |controller, model| controller ? controller.current_user : nil }

  validates :body, :author_id, :track_id, presence: true
  has_many :activities, as: :trackable, class_name: 'PublicActivity::Activity', dependent: :destroy

  has_many :upvotes, as: :upvotable, dependent: :destroy
  belongs_to :track
  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id

end
