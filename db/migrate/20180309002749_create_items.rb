class CreateItems < ActiveRecord::Migration[5.1]
  def change
    create_table :items do |t|
      t.references :classification, index: true, foreign_key: true
      t.references :brands, foreign_key: true
      t.string :name, null: false
      t.string :description

      t.timestamps
    end
  end
end
