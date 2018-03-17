class Invoice < ApplicationRecord
    belongs_to :supplier
    has_many :invoice_transactions
    has_many :line_items

    def add_line_item(description, quantity)
        LineItem.new(:invoice => self,
            :description => description,
            :quantity => quantity)
    end
end
