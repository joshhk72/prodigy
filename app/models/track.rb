# == Schema Information
#
# Table name: tracks
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  lyrics      :text             not null
#  length      :integer          not null
#  album_id    :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  date        :date
#  image_url   :string
#  youtube_url :string
#  artist_id   :integer
#

class Track < ApplicationRecord
  include PublicActivity::Model
  tracked owner: Proc.new{ |controller, model| controller ? controller.current_user : nil }

  validates :name, :lyrics, :length, :artist_id, presence: true

  before_validation :set_lyrics_length
  after_create :create_default_questions
  after_update :set_lyrics_length, :check_annotations

  belongs_to :album, optional: true
  belongs_to :artist
  has_many :activities, as: :trackable, class_name: 'PublicActivity::Activity', dependent: :destroy
  has_many :track_features
  has_many :track_producers
  has_many :track_writers
  has_many :annotations
  has_many :comments
  has_many :questions, as: :questionable

  has_many :featured_artists,
    through: :track_features,
    source: :artist

  has_many :producers,
    through: :track_producers,
    source: :artist

  has_many :writers,
    through: :track_writers,
    source: :artist

  def set_lyrics_length
    self.length = self.lyrics.length
  end

  def check_annotations
    self.annotations.each do |annotation|
      if annotation.end_idx > self.length - 1
        annotation.destroy
      end
    end
  end

  def create_default_questions
    PublicActivity.enabled = false
    q1 = self.questions.create({ permanent: true, questionable_type: "Track", title: "About \"#{self.name}\"" })
    q2 = self.questions.create({ permanent: true, questionable_type: "Track", title: "What have the artists said about the song?" })
    PublicActivity.enabled = true
  end
end
