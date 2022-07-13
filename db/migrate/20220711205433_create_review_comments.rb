class CreateReviewComments < ActiveRecord::Migration[7.0]
  def change
    create_table :review_comments do |t|
      t.integer :user_id
      t.integer :review_id
      t.string :comment
      t.float :rating

      t.timestamps
    end
  end
end
