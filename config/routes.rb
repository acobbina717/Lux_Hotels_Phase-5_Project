Rails.application.routes.draw do
  resources :review_comments
  resources :reservations, only: [:index, :show, :create, :destroy]
  resources :hotels
  resources :users, only: [:index, :destroy]
  resources :reviews, only: [:index, :create, :destroy]
  get '/current_user', to: 'users#show'
  delete '/logout', to: 'sessions#destroy'
  post '/login', to: 'sessions#create'
  post '/signup', to: 'users#create'
  get '/user_reservations', to: 'reservations#user_reservation'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  # get '/hello', to: 'application#hello_world'
  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
