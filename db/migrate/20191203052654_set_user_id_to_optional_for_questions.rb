class SetUserIdToOptionalForQuestions < ActiveRecord::Migration[5.2]
  def change
    change_column :questions, :user_id, :string, null: true
  end
end
