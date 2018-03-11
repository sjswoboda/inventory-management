class AddItemProperties < ActiveRecord::Migration[5.1]
  def change
    add_reference :items, :brand, index: true
    add_column :items, :style, :string
  end
end
