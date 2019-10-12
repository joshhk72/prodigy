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

require 'test_helper'

class TrackTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
