class CreateQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :questions do |t|
      t.string :title, null: false
      t.string :user_id, null: false
      t.integer :questionable_id, null: false
      t.integer :questionable_type, null: false
      t.index :user_id
      t.index [:questionable_type, :questionable_id]
      t.timestamps
    end
    create_table :answers do |t|
      t.text :body, null: false
      t.string :user_id, null: false
      t.integer :question_id
      t.index :user_id
      t.index :question_id
      t.timestamps
    end
  end
end
