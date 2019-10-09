class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
      t.string :title
      t.integer :artist_id
      t.date :date

      t.timestamps
      t.index :artist_id
    end
  end
end
