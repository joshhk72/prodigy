class CreateUpvotes < ActiveRecord::Migration[5.2]
  def change
    create_table :upvotes do |t|
      t.integer :value, null: false
      t.integer :user_id, null: false
      t.integer :upvotable_id, null: false
      t.string :upvotable_type, null: false

      t.timestamps
    end
    add_index :upvotes, [:upvotable_type, :upvotable_id]
    add_index :upvotes, :user_id
  end
end
