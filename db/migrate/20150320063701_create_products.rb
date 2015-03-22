class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :name
      t.string :url, limit: 512
      t.string :affiliate_url, limit: 512
      t.decimal :price, precision: 8, scale: 2
      t.text :description
      t.references :category

      t.timestamps
    end
  end
end
