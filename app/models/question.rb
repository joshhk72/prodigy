class Question < ApplicationRecord
  include PublicActivity::Model
  tracked owner: Proc.new{ |controller, model| controller ? controller.current_user : nil }

  validates :title, :questionable_id, :questionable_type, presence: true
  validates :questionable_type, inclusion: { in: ["Track", "Album", "Artist"] }

  has_one :answer, dependent: :destroy
  has_many :activities, as: :trackable, class_name: 'PublicActivity::Activity', dependent: :destroy
  belongs_to :questionable, polymorphic: true

  def track_id=(id)
    self.questionable_id = id
    self.questionable_type = "Track"
  end

  def artist_id=(id)
    self.questionable_id = id
    self.questionable_type = "Artist"
  end

    def album_id=(id)
    self.questionable_id = id
    self.questionable_type = "Album"
  end
end