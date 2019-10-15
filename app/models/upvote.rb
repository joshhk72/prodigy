# == Schema Information
#
# Table name: upvotes
#
#  id             :integer          not null, primary key
#  value          :integer          not null
#  user_id        :integer          not null
#  upvotable_id   :integer          not null
#  upvotable_type :string           not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Upvote < ApplicationRecord
  validates :value, :user_id, :upvotable_id, :upvotable_type, presence: true
  validates :upvotable_type, inclusion: { in: [Comment, Annotation] }

  belongs_to :upvotable, polymorphic: true

  def reverse!
    self.value *= self.value
    self.save!
  end
end
