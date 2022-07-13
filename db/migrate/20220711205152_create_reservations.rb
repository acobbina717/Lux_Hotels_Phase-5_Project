class CreateReservations < ActiveRecord::Migration[7.0]
  def change
    create_table :reservations do |t|
      t.integer :user_id
      t.integer :hotel_id
      t.string :guest_name
      t.string :hotel_name
      t.string :check_in_date
      t.string :check_out_date
      t.integer :total_price

      t.timestamps
    end
  end
end
