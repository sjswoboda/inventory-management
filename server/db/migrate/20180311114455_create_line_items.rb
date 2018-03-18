class CreateLineItems < ActiveRecord::Migration[5.1]
  def change
    create_table :line_items do |t|
      t.references :invoice, index: true, null: false, foreign_key: true
      t.string :description
      t.integer :quantity, null: false
      t.integer :lot_size, default: 1
      t.decimal :discount_amount, default: 0.0
      t.decimal :shipping_amount, default: 0.0
      t.decimal :invoiced_amount, null: false

      t.timestamps
    end
  end
end
