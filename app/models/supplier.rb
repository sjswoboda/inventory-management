class Supplier < ApplicationRecord
    has_many :invoices

    def add_invoice(order_date, discount, shipping, invoiced, billed)
        Invoice.new(:supplier => self,
            :order_date => order_date,
            :discount_amount => discount,
            :shipping_amount => shipping,
            :invoiced_amount => invoiced,
            :billed_amount => billed)
    end
end
