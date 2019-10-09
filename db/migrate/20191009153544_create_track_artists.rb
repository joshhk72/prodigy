class CreateTrackArtists < ActiveRecord::Migration[5.2]
  def change
    create_table :track_artists do |t|
      t.integer :track_id, null: false
      t.integer :artist_id, null: false
      t.integer :ord, null: false

      t.timestamps
    end
  end
end
