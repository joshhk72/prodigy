class Answer < ApplicationRecord
  include PublicActivity::Model
  tracked owner: Proc.new{ |controller, model| controller ? controller.current_user : nil }
  attr_accessor :track

  validates :body, :user_id, :question_id, presence: true
  
  belongs_to :question
  has_many :activities, as: :trackable, class_name: 'PublicActivity::Activity', dependent: :destroy
  has_many :upvotes, as: :upvotable, dependent: :destroy
end