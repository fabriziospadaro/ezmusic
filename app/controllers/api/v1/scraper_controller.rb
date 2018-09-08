module Api
  module V1
    class ScraperController < ApplicationController
      def get_video_urls
        song_name = params[:name].gsub(/[^0-9A-Za-z]/, '')
        render json: {status: 'success', infos: YoutubeScraper.scrape(song_name)}
      end
      def get_songs_like
        render json: {status: 'success', infos: SimilarSong.get(params[:name],40)}
      end
    end
  end
end
