class AddInstructorIdToCourses < ActiveRecord::Migration[6.1]
  def change
    add_column :courses, :instructor_id, :integer

  end
end
