# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180311120605) do

  create_table "brands", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "classifications", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "invoices", force: :cascade do |t|
    t.integer "supplier_id", null: false
    t.string "order_number"
    t.datetime "order_date", null: false
    t.datetime "order_shipped_date"
    t.datetime "order_received_date"
    t.decimal "discount_amount", default: "0.0"
    t.decimal "shipping_amount", default: "0.0"
    t.decimal "invoiced_amount", null: false
    t.decimal "billed_amount", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["supplier_id"], name: "index_invoices_on_supplier_id"
  end

  create_table "items", force: :cascade do |t|
    t.integer "classification_id"
    t.string "name", null: false
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "brand_id"
    t.string "style"
    t.index ["brand_id"], name: "index_items_on_brand_id"
    t.index ["classification_id"], name: "index_items_on_classification_id"
  end

  create_table "line_items", force: :cascade do |t|
    t.integer "invoice_id", null: false
    t.string "description"
    t.integer "quantity", null: false
    t.integer "lot_size", default: 1
    t.decimal "discount_amount", default: "0.0"
    t.decimal "shipping_amount", default: "0.0"
    t.decimal "invoiced_amount", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["invoice_id"], name: "index_line_items_on_invoice_id"
  end

  create_table "suppliers", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
