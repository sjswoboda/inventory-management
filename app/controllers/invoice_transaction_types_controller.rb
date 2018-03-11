class InvoiceTransactionTypesController < ApplicationController
  before_action :set_invoice_transaction_type, only: [:show, :update, :destroy]

  # GET /invoice_transaction_types
  def index
    @invoice_transaction_types = InvoiceTransactionType.all

    render json: @invoice_transaction_types
  end

  # GET /invoice_transaction_types/1
  def show
    render json: @invoice_transaction_type
  end

  # POST /invoice_transaction_types
  def create
    @invoice_transaction_type = InvoiceTransactionType.new(invoice_transaction_type_params)

    if @invoice_transaction_type.save
      render json: @invoice_transaction_type, status: :created, location: @invoice_transaction_type
    else
      render json: @invoice_transaction_type.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /invoice_transaction_types/1
  def update
    if @invoice_transaction_type.update(invoice_transaction_type_params)
      render json: @invoice_transaction_type
    else
      render json: @invoice_transaction_type.errors, status: :unprocessable_entity
    end
  end

  # DELETE /invoice_transaction_types/1
  def destroy
    @invoice_transaction_type.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_invoice_transaction_type
      @invoice_transaction_type = InvoiceTransactionType.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def invoice_transaction_type_params
      params.fetch(:invoice_transaction_type, {})
    end
end
