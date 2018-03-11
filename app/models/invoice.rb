class Invoice < ApplicationRecord
    belongs_to :supplier

    def add_line_item(description, quantity, invoiced)
        LineItem.new(:invoice => self,
            :description => description,
            :quantity => quantity,
            :invoiced_amount => invoiced)
    end
end
