class CreateItems < ActiveRecord::Migration[5.1]
  def change
    create_table :items do |t|
      t.references :classification, index: true
      t.string :name, null: false
      t.string :description

      t.timestamps
    end
    add_foreign_key :items, :classifications
  end
end
