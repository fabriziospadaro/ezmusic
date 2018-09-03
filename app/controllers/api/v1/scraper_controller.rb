module Api
  module V1
    class ScraperController < ApplicationController
      def get_video_urls
        render json: {status: 'success', infos: YoutubeScraper.scrape(params[:name])}
      end
      def get_songs_like
        render json: {status: 'success', infos: GoogleScraper.scrape(params[:name])}
      end
    end
  end
end
