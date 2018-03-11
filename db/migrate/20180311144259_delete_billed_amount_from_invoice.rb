class DeleteBilledAmountFromInvoice < ActiveRecord::Migration[5.1]
  def change
    remove_column :invoices, :billed_amount
  end
end
