class CreateVariationsAndAttributes < ActiveRecord::Migration[5.1]
  def change
    # Attributes are things like color, shape, etc.
    create_table :attributes do |t|
      t.string :name, null: false, index: true
    end

    # An item variation associates an item with a variation set
    create_table :item_variations do |t|
      t.references :item, index: true, null: false, foreign_key: true
      t.string :name
      t.boolean :is_default, null: false, default: false

      t.timestamps
    end

    # Variations are made up of a set of attributes
    create_table :item_variation_attributes, id: false do |t|
      t.references :item_variations, null: false, foreign_key: true
      t.references :attribute, null: false, foreign_key: true
      t.string :value, null: false
    end
  end
end
