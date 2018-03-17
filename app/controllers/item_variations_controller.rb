class ItemVariationsController < ApplicationController
  before_action :set_item_variation, only: [:show, :update, :destroy]

  # GET /item_variations
  def index
    @item_variations = ItemVariation.all

    render json: @item_variations
  end

  # GET /item_variations/1
  def show
    render json: @item_variation
  end

  # POST /item_variations
  def create
    @item_variation = ItemVariation.new(item_variation_params)

    if @item_variation.save
      render json: @item_variation, status: :created, location: @item_variation
    else
      render json: @item_variation.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /item_variations/1
  def update
    if @item_variation.update(item_variation_params)
      render json: @item_variation
    else
      render json: @item_variation.errors, status: :unprocessable_entity
    end
  end

  # DELETE /item_variations/1
  def destroy
    @item_variation.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_item_variation
      @item_variation = ItemVariation.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def item_variation_params
      params.fetch(:item_variation, {})
    end
end
