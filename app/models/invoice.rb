class Invoice < ApplicationRecord
    belongs_to :supplier
    has_many :invoice_transactions
    has_many :line_items

    def self.default_scope
      select('invoices.*,
          suppliers.name as supplier_name')
      .left_joins(:supplier)
    end

    def self.invoice_summary
      select('invoices.*,
          suppliers.name as supplier_name,
          sum(invoice_transactions.amount) as billed_amount')
      .left_joins(:supplier, :invoice_transactions)
      .group(:id, 'suppliers.name')
      .order(order_date: :desc)
    end

    def add_line_item(line_item_params)
        line_item_params[:invoice] = self
        LineItem.new(line_item_params)
    end
end
