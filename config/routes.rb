Rails.application.routes.draw do
  resources :invoice_transaction_types
  resources :invoice_transactions
  resources :brands
  resources :line_items
  resources :invoices
  resources :items
  resources :classifications
  resources :suppliers
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
