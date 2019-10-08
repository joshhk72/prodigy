# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

ActiveRecord::Base.connection.reset_pk_sequence!('users') # this resets the id

users = User.create([
  { username: "user1", password: 555555, email: "user1@user.com", image_url: "https://s3.amazonaws.com/37assets/svn/1065-IMG_2529.jpg" },
  { username: "user2", password: 666666, email: "user2@user.com", image_url: "https://s3.amazonaws.com/37assets/svn/1065-IMG_2529.jpg" },
  { username: "user3", password: 777777, email: "user3@user.com", image_url: "https://s3.amazonaws.com/37assets/svn/1065-IMG_2529.jpg" }
])