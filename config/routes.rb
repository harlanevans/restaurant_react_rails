Rails.application.routes.draw do
  namespace :api do
    resources :menus
  end

  namespace :api do
    resources :menu_items
  end 
  
end
