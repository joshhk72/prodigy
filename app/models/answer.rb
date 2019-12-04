class Answer < ApplicationRecord
  validates :body, :user_id, :question_id, presence: true
  
  belongs_to :question
  has_many :upvotes, as: :upvotable
end