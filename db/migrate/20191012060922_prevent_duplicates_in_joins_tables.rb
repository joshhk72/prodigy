class PreventDuplicatesInJoinsTables < ActiveRecord::Migration[5.2]
  def change
    add_index :track_features, [:track_id, :artist_id], unique: true
    add_index :track_producers, [:track_id, :artist_id], unique: true
    add_index :track_writers, [:track_id, :artist_id], unique: true
  end
end
