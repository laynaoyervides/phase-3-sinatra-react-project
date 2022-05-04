class AddTeacherIdToClasses < ActiveRecord::Migration[6.1]
  def change
    add_column :classes, :teacher_id, :integer
  end
end
