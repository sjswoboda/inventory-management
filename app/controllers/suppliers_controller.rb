class SuppliersController < ApplicationController
  before_action :set_supplier, only: [:show, :update]

  # GET /suppliers
  def index
    @suppliers = Supplier.all.transaction_counts
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
