class FixQuestionabletype < ActiveRecord::Migration[5.2]
  def change
    change_column :questions, :questionable_type, :string, null: false
  end
end
