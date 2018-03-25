class Supplier < ApplicationRecord
    has_many :invoices
    has_many :invoice_transactions, through: :invoices

    def self.transaction_counts
        left_joins(:invoices, :invoice_transactions)
        .group(:id)
        .order(created_at: :desc)
        .select(:id, :name, 'count(suppliers.id) AS orders_count,
            sum(invoice_transactions.amount) AS amount,
            sum(CASE WHEN invoices.order_received_date IS NULL THEN invoice_transactions.amount ELSE 0 END) as pending_amount,
            sum(CASE WHEN invoices.order_received_date IS NOT NULL THEN invoice_transactions.amount ELSE 0 END) as received_amount')

    end

    def add_invoice(order_date, order_number, invoiced, billed)
        Invoice.new(:supplier => self,
            :order_date => Time.parse(order_date),
            :order_number => order_number,
            :invoiced_amount => invoiced,
            :billed_amount => billed)
    end
end
