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
  validates :upvotable_type, inclusion: { in: ["Comment", "Annotation"] }
  validates :user_id, uniqueness: { scope: [:upvotable_id, :upvotable_type] }

  belongs_to :upvotable, polymorphic: true
  belongs_to :user

  def reverse!
    self.value *= -1
    self.save!
  end
end
