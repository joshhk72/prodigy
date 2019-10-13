class CreateAnnotations < ActiveRecord::Migration[5.2]
  def change
    create_table :annotations do |t|
      t.integer :track_id, null: false
      t.integer :start_idx, null: false
      t.integer :end_idx, null: false
      t.text :body, null: false
      t.timestamps

      t.index :track_id
    end
  end
end
