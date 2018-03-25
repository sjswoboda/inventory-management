class InvoicesController < ApplicationController
  before_action :set_supplier, only: [:index, :create]
  before_action :set_invoice, only: [:show, :update, :destroy]

  # GET /suppliers/1/invoices
  def index
    @invoices = Invoice.all.where('supplier_id = ?', @supplier)

    render json: @invoices
  end

  # GET /invoices/1
  def show
    render json: @invoice
  end

  # POST /suppliers/1/invoices
  def create
    @invoice = Invoice.new(invoice_params)

    if @invoice.save
      render json: @invoice, status: :created, location: @invoice
    else
      render json: @invoice.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /invoices/1
  def update
    if @invoice.update(invoice_params)
      render json: @invoice
    else
      render json: @invoice.errors, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_supplier
      @supplier = Supplier.find(params[:supplier_id])
    end

    def set_invoice
      @invoice = Invoice.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def invoice_params
      params.require(:invoice).permit(:supplier, :order_date, :order_shipped_date, :order_received_date, :supplier_total, :billed_total, :discount, :shipping)
    end
end
