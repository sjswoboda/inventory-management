class CreateInvoices < ActiveRecord::Migration[5.1]
  def change
    create_table :invoices do |t|
      t.references :supplier, index: true, null: false, foreign_key: true
      t.string :order_number
      t.datetime :order_date, null: false
      t.datetime :order_shipped_date
      t.datetime :order_received_date
      t.decimal :discount_amount, default: 0.0
      t.decimal :shipping_amount, default: 0.0
      # Includes Shipping and Discount
      t.decimal :invoiced_amount, null: false

      t.timestamps
    end
  end
end
