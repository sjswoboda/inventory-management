class CreateVariationsAndAttributes < ActiveRecord::Migration[5.1]
  def change
    # Attributes are things like color, shape, etc.
    create_table :attributes do |t|
      t.string :name, null: false, index: true
    end

    # Variations are made up of a set of attributes
    create_table :variation_attributes, id: false do |t|
      t.integer :variation_set_id, index: true, null: false
      t.references :attribute, null: false, foreign_key: true
      t.string :value, null: false
    end

    # An item variation associates an item with a variation set
    create_table :item_variations do |t|
      t.references :item, index: true, null: false, foreign_key: true
      t.integer :variation_set_id, null: false
      t.string :name
      t.boolean :is_default, null: false, default: false

      t.timestamps
    end
    add_foreign_key :item_variations, :variation_attributes, column: :variation_set_id, primary_key: :variation_set_id
  end
end
