class Item < ApplicationRecord
    belongs_to :classification
    belongs_to :brand
    has_many :item_variations
end
