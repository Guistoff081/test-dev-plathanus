Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get 'welcome/index', as: 'app'

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resource :roman_numerals, only: [:index] do
        get 'roman_to_arabic'
      end
    end
  end
  root to: 'welcome#index'
end
