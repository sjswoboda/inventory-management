class CreateInvoiceTransactions < ActiveRecord::Migration[5.1]
  def change
    create_table :invoice_transaction_types do |t|
      t.string :name, null: false, index: { unique: true }

      t.timestamps
    end

    create_table :invoice_transactions do |t|
      t.references :invoice, index: true, null: false
      t.references :invoice_transaction_type, index: true, null: false
      t.decimal :amount, null: false
      
      t.timestamps
    end
    add_foreign_key :invoice_transactions, :invoices
    add_foreign_key :invoice_transactions, :invoice_transaction_types
  end
end
