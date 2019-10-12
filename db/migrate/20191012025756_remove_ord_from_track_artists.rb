class RemoveOrdFromTrackArtists < ActiveRecord::Migration[5.2]
  def change
    remove_column :track_artists, :ord, :integer
  end
end
