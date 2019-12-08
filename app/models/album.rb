# == Schema Information
#
# Table name: albums
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  artist_id  :integer          not null
#  date       :date
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Album < ApplicationRecord
  include PublicActivity::Common

  validates :title, :artist_id, presence: true

  belongs_to :artist
  has_many :activities, as: :trackable, class_name: 'PublicActivity::Activity', dependent: :destroy
  has_many :tracks
end
