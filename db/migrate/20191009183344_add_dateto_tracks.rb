class AddDatetoTracks < ActiveRecord::Migration[5.2]
  def change
    add_column :tracks, :date, :date
  end
end
