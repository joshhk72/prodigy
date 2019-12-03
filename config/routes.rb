Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only:[:create, :show, :update]
    resource :session, only:[:create, :destroy]
    resources :tracks, only:[:create, :show, :update, :index]
    resources :albums, only:[:create, :show, :update]
    resources :artists, only:[:create, :show, :index, :update]
    resources :track_forms, only:[:create, :update]
    resources :annotations
    resources :comments
    resources :questions, only:[:index, :create, :destroy]
    resources :answers, only:[:create, :destroy, :update, :show]
    resources :upvotes, only:[:index, :create, :update, :destroy]
    get :search, controller: :search
    get :suggest, controller: :search
  end
end
