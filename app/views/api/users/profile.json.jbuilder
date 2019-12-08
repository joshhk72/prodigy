json.partial! '/api/users/user', user: @user

json.activities do
  json.array! @user.activities do |activity|
    json.extract! activity, :created_at, :id, :key, :owner_id, :trackable_type, :updated_at
    json.trackable do
      if activity.trackable_type == "Track"
        json.extract! activity.trackable, :id, :name, :image_url
      elsif activity.trackable_type == "Artist"
        json.extract! activity.trackable, :id, :name, :image_url
      elsif activity.trackable_type == "Album"
        json.extract! activity.trackable, :id, :title, :image_url  
      else ["Comment", "Upvote", "Annotation"].include?(activity.trackable_type)
        json.extract! activity, :trackable
        json.track do
          json.extract! activity.trackable.track, :id, :name, :image_url
        end
      end
    end
  end
end