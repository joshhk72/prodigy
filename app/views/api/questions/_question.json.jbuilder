json.extract! question, :id, :questionable_id, :questionable_type, :title, :permanent
json.answer do
  if question.answer
    json.extract! question.answer, :id, :body, :question_id, :user_id
  end
end