module Api
  module V1
    class ScraperController < ApplicationController
      def get_result
        render json: {status: 'SUCESS', infos: YoutubeScraper.scrape(params[:name])}
      end
    end
  end
end
