Rails.application.routes.draw do
  root 'music#home'

  namespace 'api' do
    namespace 'v1' do
      get 'getvideourl/:name', to: "scraper#get_result"
    end
  end
end
