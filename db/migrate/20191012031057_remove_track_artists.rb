class RemoveTrackArtists < ActiveRecord::Migration[5.2]
  def change
    drop_table :track_artists
  end
end
