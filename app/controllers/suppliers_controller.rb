class SuppliersController < ApplicationController
  before_action :set_supplier, only: [:show, :update]

  # GET /suppliers
  def index
    @suppliers = Supplier
      .all
      .left_joins(:invoices, :invoice_transactions)
      .group(:id)
      .order(created_at: :desc)
      .select(:id, :name, 'count(suppliers.id) AS orders_count, 
        sum(invoice_transactions.amount) AS amount,
        sum(CASE WHEN invoices.order_received_date IS NULL THEN invoice_transactions.amount ELSE 0 END) as pending_amount,
        sum(CASE WHEN invoices.order_received_date IS NOT NULL THEN invoice_transactions.amount ELSE 0 END) as received_amount')

    render json: @suppliers
  end

  # GET /suppliers/1
  def show
    render json: @supplier
  end

  # POST /suppliers
  def create
    @supplier = Supplier.new(supplier_params)

    if @supplier.save
      render json: @supplier, status: :created, location: @supplier
    else
      render json: @supplier.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /suppliers/1
  def update
    if @supplier.update(supplier_params)
      render json: @supplier
    else
      render json: @supplier.errors, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_supplier
      @supplier = Supplier.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def supplier_params
      params.require(:supplier).permit(:name)
    end
end
