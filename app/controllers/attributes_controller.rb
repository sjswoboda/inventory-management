class AttributesController < ApplicationController
  before_action :set_attribute, only: [:show, :update, :destroy]

  # GET /attributes
  def index
    @attributes = Attribute.all

    render json: @attributes
  end

  # GET /attributes/1
  def show
    render json: @attribute
  end

  # POST /attributes
  def create
    @attribute = Attribute.new(attribute_params)

    if @attribute.save
      render json: @attribute, status: :created, location: @attribute
    else
      render json: @attribute.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /attributes/1
  def update
    if @attribute.update(attribute_params)
      render json: @attribute
    else
      render json: @attribute.errors, status: :unprocessable_entity
    end
  end

  # DELETE /attributes/1
  def destroy
    @attribute.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_attribute
      @attribute = Attribute.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def attribute_params
      params.fetch(:attribute, {})
    end
end
