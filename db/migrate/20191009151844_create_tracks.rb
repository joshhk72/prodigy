class CreateTracks < ActiveRecord::Migration[5.2]
  def change
    create_table :tracks do |t|
      t.string :name, null: false
      t.text :lyrics, null: false
      t.integer :length, null: false
      t.integer :album_id, null: false

      t.timestamps
      t.index :album_id
    end
  end
end
