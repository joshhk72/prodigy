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

require 'test_helper'

class AnnotationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
