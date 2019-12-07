json.partial! '/api/users/user', user: @user

json.activities do
  json.array! @user.activities
end