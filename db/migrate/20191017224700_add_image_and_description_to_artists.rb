class AddImageAndDescriptionToArtists < ActiveRecord::Migration[5.2]
  def change
    add_column :artists, :image_url, :string
    add_column :artists, :description, :text
    add_column :artists, :banner_image_url, :string
  end
end
