class AddVariousArtistJoinTables < ActiveRecord::Migration[5.2]
  def change
    create_table :track_features do |t|
      t.integer :track_id, null: false
      t.integer :artist_id, null: false
      t.index :track_id
      t.index :artist_id
    
      t.timestamps
    end
    create_table :track_producers do |t|
      t.integer :track_id, null: false
      t.integer :artist_id, null: false
      t.index :track_id
      t.index :artist_id
    
      t.timestamps
    end
    create_table :track_writers do |t|
      t.integer :track_id, null: false
      t.integer :artist_id, null: false
      t.index :track_id
      t.index :artist_id
    
      t.timestamps
    end
  end
end
