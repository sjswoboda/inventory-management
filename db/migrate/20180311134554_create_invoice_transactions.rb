class CreateInvoiceTransactions < ActiveRecord::Migration[5.1]
  def change
    create_table :invoice_transactions do |t|
      t.references :invoice, index: true, null: false, foreign_key: true
      t.references :invoice_transaction_type, index: true, null: false, foreign_key: true
      t.decimal :amount, null: false
      t.date :posted_date, null: false, default: Time.now

      t.timestamps
    end
  end
end
