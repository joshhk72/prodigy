class AddArtistIdToTracks < ActiveRecord::Migration[5.2]
  def change
    add_column :tracks, :artist_id, :integer
    add_index :tracks, :artist_id
  end
end
