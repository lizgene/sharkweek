require 'rails_helper'
require 'pry'

describe ProductsController do
  render_views
  let(:default_params) { {format: :json} }

  before do 
    FactoryGirl.create(:product, name: "baked potato") 
    FactoryGirl.create(:product, name: "potato salad") 
    FactoryGirl.create(:product, name: "ketchup") 
  end

  describe "index" do

    context "returns results" do
      it "should 200" do
        get :index
        expect(response.status).to eq(200)
      end

      it "should return three results" do
        get :index
        result = JSON.parse(response.body)
        expect(result.size).to eq(3)
      end

      it "should return two results" do
        get :index, keywords: "potato"
        result = JSON.parse(response.body)
        expect(result.size).to eq(2)
      end

      it "should return correct results" do 
        get :index, keywords: "baked potato"
        result = JSON.parse(response.body)

        expect(result.size).to eq(1)
        expect(result[0]["name"]).to include("baked potato")
      end
    end
  end
end