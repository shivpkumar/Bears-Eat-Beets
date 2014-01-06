ActiveAdmin.register User do
  permit_params :email, :password, :password_confirmation, :name, :team_name

  index do
    column :email
    column :name
    column :team_name
    column :points
    default_actions
  end

  filter :email

  form do |f|
    f.inputs "Admin Details" do
      f.input :email
      f.input :password
      f.input :password_confirmation
      f.input :name
      f.input :team_name
    end
    f.actions
  end

end
