class Supplier < ApplicationRecord
    has_many :invoices

    def add_invoice(order_date, order_number, invoiced, billed)
        Invoice.new(:supplier => self,
            :order_date => Time.parse(order_date),
            :order_number => order_number,
            :invoiced_amount => invoiced,
            :billed_amount => billed)
    end
end
