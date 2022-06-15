class AddCourseIdToEnrollments < ActiveRecord::Migration[6.1]
  def change
    add_column :enrollments, :course_id, :integer
  end
end
