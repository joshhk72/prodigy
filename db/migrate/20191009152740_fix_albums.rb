class FixAlbums < ActiveRecord::Migration[5.2]
  def change
    change_column_null :albums, :title, false
    change_column_null :albums, :artist_id, false
    change_column_null :albums, :date, false
  end
end
