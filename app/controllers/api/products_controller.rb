class Api::ProductsController < ApplicationController
  respond_to :json

  def index
    @products = params[:keywords].blank? ? Product.all : Product.where('name like ?',"%#{params[:keywords]}%")

    respond_with @products
  end

  def show
    @product = Product.find(params[:id])
    
    respond_with @product
  end

end