AFLT3::Application.routes.draw do
  resources :raw_tweets

  namespace :api do
    namespace :v1 do
      resources :posts
    end
  end
  root "pages#home"
end
