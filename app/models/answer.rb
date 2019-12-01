class Answer < ApplicationRecord
  validates :body, :user_id, :question_id
  
  belongs_to :question
end