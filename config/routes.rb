Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only:[:create, :show, :update]
    resource :session, only:[:create, :destroy]
    resources :tracks, only:[:create, :show, :update]
    resources :albums, only:[:create, :show]
    resources :artists, only:[:create, :show]
    resource :track_form, only:[:create]
  end
end
