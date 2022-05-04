class AddStudentIdToClasses < ActiveRecord::Migration[6.1]
  def change
    add_column :classes, :student_id, :integer
  end
end
