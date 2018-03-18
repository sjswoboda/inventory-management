class InvoiceTransactionsController < ApplicationController
  before_action :set_invoice_transaction, only: [:show, :update, :destroy]

  # GET /invoice_transactions
  def index
    @invoice_transactions = InvoiceTransaction.all

    render json: @invoice_transactions
  end

  # GET /invoice_transactions/1
  def show
    render json: @invoice_transaction
  end

  # POST /invoice_transactions
  def create
    @invoice_transaction = InvoiceTransaction.new(invoice_transaction_params)

    if @invoice_transaction.save
      render json: @invoice_transaction, status: :created, location: @invoice_transaction
    else
      render json: @invoice_transaction.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /invoice_transactions/1
  def update
    if @invoice_transaction.update(invoice_transaction_params)
      render json: @invoice_transaction
    else
      render json: @invoice_transaction.errors, status: :unprocessable_entity
    end
  end

  # DELETE /invoice_transactions/1
  def destroy
    @invoice_transaction.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_invoice_transaction
      @invoice_transaction = InvoiceTransaction.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def invoice_transaction_params
      params.fetch(:invoice_transaction, {})
    end
end
