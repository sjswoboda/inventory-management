class VariationAttributesController < ApplicationController
  before_action :set_variation_attribute, only: [:show, :update, :destroy]

  # GET /variation_attributes
  def index
    @variation_attributes = VariationAttribute.all

    render json: @variation_attributes
  end

  # GET /variation_attributes/1
  def show
    render json: @variation_attribute
  end

  # POST /variation_attributes
  def create
    @variation_attribute = VariationAttribute.new(variation_attribute_params)

    if @variation_attribute.save
      render json: @variation_attribute, status: :created, location: @variation_attribute
    else
      render json: @variation_attribute.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /variation_attributes/1
  def update
    if @variation_attribute.update(variation_attribute_params)
      render json: @variation_attribute
    else
      render json: @variation_attribute.errors, status: :unprocessable_entity
    end
  end

  # DELETE /variation_attributes/1
  def destroy
    @variation_attribute.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_variation_attribute
      @variation_attribute = VariationAttribute.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def variation_attribute_params
      params.fetch(:variation_attribute, {})
    end
end
