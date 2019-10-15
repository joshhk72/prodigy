class AddUserIdToAnnotations < ActiveRecord::Migration[5.2]
  def change
    add_column :annotations, :author_id, :integer, null: false
    add_index :annotations, :author_id
  end
end
