# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Classification.create(name: 'Pen')
Classification.create(name: 'Sticky Pad')
Classification.create(name: 'Memo Pad')
Classification.create(name: 'Bookmark')
Classification.create(name: 'Notebook')

InvoiceTransactionType.create(name: 'Invoice Billed')
InvoiceTransactionType.create(name: 'Duties')