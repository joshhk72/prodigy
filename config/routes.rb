Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only:[:create, :show, :update]
    resource :session, only:[:create, :destroy]
    resources :tracks, only:[:create, :show, :update, :index]
    resources :albums, only:[:create, :show]
    resources :artists, only:[:create, :show, :index]
    resources :track_forms, only:[:create, :update]
    resources :annotations
    resources :comments
    resources :upvotes, only:[:create, :update, :destroy]
  end
end
