class LineItem < ApplicationRecord
    belongs_to :invoice
    has_many :items
end
