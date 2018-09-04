module Api
  module V1
    class ScraperController < ApplicationController
      def get_video_urls
        render json: {status: 'success', infos: YoutubeScraper.scrape(params[:name])}
      end
      def get_songs_like
        render json: {status: 'success', infos: SimilarSong.get(params[:name])}
      end
    end
  end
end
