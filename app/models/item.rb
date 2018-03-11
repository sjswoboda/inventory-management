class Item < ApplicationRecord
    belongs_to :classification
    belongs_to :brand
end
