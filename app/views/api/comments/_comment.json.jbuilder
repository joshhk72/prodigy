json.extract! comment, :id, :track_id, :author_id, :body
json.username comment.author.username
json.profile_img comment.author.image_url
json.date comment.created_at.to_date