class Question < ApplicationRecord
  validates :title, :user_id, :questionable_id, :questionable_type
  validates :upvotable_type, inclusion: { in: ["Track", "Album", "Artist"] }
  has_one :answer, dependent: :destroy
  belongs_to :questionable, polymorphic: true
end