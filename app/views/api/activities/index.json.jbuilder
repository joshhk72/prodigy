json.activities do
  json.array! @activities do |activity|
    json.extract! activity, :created_at, :id, :key, :owner_id, :trackable_type, :updated_at
    json.trackable do
      if activity.trackable_type == "Track"
        json.extract! activity.trackable, :id, :name, :image_url
      elsif activity.trackable_type == "Artist"
        json.extract! activity.trackable, :id, :name, :image_url
      elsif activity.trackable_type == "Album"
        json.extract! activity.trackable, :id, :title, :image_url
      elsif activity.trackable_type == "Question"
        json.extract! activity, :trackable
        json.track do
          json.extract! activity.trackable.questionable, :id, :name, :image_url
        end
      else ["Comment", "Upvote", "Annotation", "Answer"].include?(activity.trackable_type)
        json.track do
          json.extract! activity.trackable.track, :id, :name, :image_url
        end
        if activity.trackable_type == "Comment"
          json.extract! activity.trackable, :id, :body
        elsif activity.trackable_type == "Upvote"
          json.extract! activity.trackable, :id, :value, :upvotable_type
        elsif activity.trackable_type == "Annotation"
          json.extract! activity.trackable, :id, :body
        elsif activity.trackable_type == "Answer"
          json.extract! activity.trackable, :id, :body
          json.question do
            json.extract! activity.trackable.question, :id, :title
          end
        end
      end
    end
  end
end