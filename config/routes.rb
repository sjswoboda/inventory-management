Rails.application.routes.draw do
  resources :item_variations
  resources :variation_attributes
  resources :attributes
  resources :invoice_transaction_types
  resources :invoice_transactions
  resources :brands
  resources :line_items
  resources :invoices do
    resources :line_items, shallow: true
  end
  resources :items
  resources :classifications
  resources :suppliers do
    resources :invoices, shallow: true
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
