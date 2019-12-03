json.extract! question, :id, :questionable_id, :questionable_type, :title
json.answer do
  json.extract! question.answer, :id, :body, :question_id, :user_id if question.answer
end