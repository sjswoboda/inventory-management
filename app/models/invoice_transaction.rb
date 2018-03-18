class InvoiceTransaction < ApplicationRecord
    belongs_to :invoice
    belongs_to :invoice_transaction_type
end
