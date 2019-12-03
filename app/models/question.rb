class Question < ApplicationRecord
  validates :title, :questionable_id, :questionable_type, presence: true
  validates :questionable_type, inclusion: { in: ["Track", "Album", "Artist"] }

  has_one :answer, dependent: :destroy
  belongs_to :questionable, polymorphic: true
end