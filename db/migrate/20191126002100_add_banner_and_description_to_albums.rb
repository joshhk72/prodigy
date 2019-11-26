class AddBannerAndDescriptionToAlbums < ActiveRecord::Migration[5.2]
  def change
    add_column :albums, :description, :text
    add_column :albums, :banner_image_url, :string
  end
end
