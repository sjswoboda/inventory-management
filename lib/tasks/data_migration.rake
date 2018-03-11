namespace :data_migration do
  desc "Move the invoice amount from invoices to invoice transactions"
  task move_invoice_transactions: :environment do
    if InvoiceTransactionType.count == 0
      default_transaction_type = InvoiceTransactionType.create({name: 'Invoice Billed'})
    else
      default_transaction_type = InvoiceTransactionType.find(1)
    end

    Invoice.find_each do |invoice|
      InvoiceTransaction.create({:invoice => invoice,
        :amount => invoice.billed_amount,
        :invoice_transaction_type => default_transaction_type})
    end
  end

  desc ""
  task update_invoice_transaction_dates_from_invoice: :environment do
    InvoiceTransaction.where(:invoice_transaction_type => 1).find_each do |transaction|
      transaction.posted_date = transaction.invoice.order_date
      transaction.save
    end
  end

end
