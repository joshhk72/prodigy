# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string
#  email           :string
#  password_digest :string
#  session_token   :string
#  description     :text
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  image_url       :string
#

require 'bcrypt'

class User < ApplicationRecord

  validates :username, :password_digest, :email, presence: true
  validates :username, :email, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP } 
  
  after_initialize :ensure_session_token

  has_many :annotations,
    class_name: :Annotation,
    foreign_key: :author_id
  
  attr_reader :password

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil if user.nil?
    if user.is_password?(password)
      return user
    else
      return nil
    end
  end

  def self.generate_session_token
    SecureRandom.base64(16)
  end

  def password=(password) 
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

end
