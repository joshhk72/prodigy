class AllowAlbumDateNull < ActiveRecord::Migration[5.2]
  def change
    change_column_null :albums, :date, true
  end
end
