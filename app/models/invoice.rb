class Invoice < ApplicationRecord
    belongs_to :supplier
    has_many :invoice_transactions
    has_many :line_items

    def self.default_scope
        select('invoices.*,
            suppliers.name as supplier_name,
            sum(invoice_transactions.amount) as billed_amount')
        .left_joins(:supplier, :invoice_transactions)
        .group(:id, 'suppliers.name')
        .order(order_date: :desc)
    end

    def add_line_item(description, quantity)
        LineItem.new(:invoice => self,
            :description => description,
            :quantity => quantity)
    end
end
