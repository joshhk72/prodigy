class Answer < ApplicationRecord
  include PublicActivity::Model
  tracked owner: Proc.new{ |controller, model| controller.current_user }
  attr_accessor :track

  validates :body, :user_id, :question_id, presence: true
  
  belongs_to :question
  has_many :upvotes, as: :upvotable, dependent: :destroy
end