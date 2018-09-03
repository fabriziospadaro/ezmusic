Rails.application.routes.draw do
  root 'music#home'

  namespace 'api' do
    namespace 'v1' do
      get 'getvideourl/:name', to: "scraper#get_video_urls"
      get 'getsongslike/:name', to: "scraper#get_songs_like"
    end
  end
end
