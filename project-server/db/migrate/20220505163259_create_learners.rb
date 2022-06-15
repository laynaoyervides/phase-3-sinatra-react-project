class CreateLearners < ActiveRecord::Migration[6.1]
  def change
    create_table :learners do |t|
      t.string :name
    end
  end
end
