class AddTransactionDateToInvoiceTransactions < ActiveRecord::Migration[5.1]
  def change
    add_column :invoice_transactions, :posted_date, :date, null: false, default: Time.now
  end
end
