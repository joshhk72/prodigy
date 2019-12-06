class MakeSomeQuestionsUneraseable < ActiveRecord::Migration[5.2]
  def change
    add_column :questions, :permanent, :boolean, default: false
  end
end
