class ProductsController < ApplicationController

  def index
    @products = params[:keywords].blank? ? Product.all : Product.where('name like ?',"%#{params[:keywords]}%")

    render json: @products
  end

end