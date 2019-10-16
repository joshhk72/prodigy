@upvotes.each do |upvote|
  json.set! upvote.id do
    json.partial! 'api/upvotes/upvote', upvote: upvote
  end
end