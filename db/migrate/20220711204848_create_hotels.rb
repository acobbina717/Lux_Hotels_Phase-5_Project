class CreateHotels < ActiveRecord::Migration[7.0]
  def change
    create_table :hotels do |t|
      t.string :name
      t.string :location
      t.string :description
      t.string :amenities
      t.integer :rooms_available
      t.float :star_rating
      t.string :desktop_thumbnail
      t.integer :rate
      t.string :neighbourhood
      t.string :images, array: true, default: []

      t.timestamps
    end
  end
end
