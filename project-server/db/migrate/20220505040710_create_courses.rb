class CreateCourses < ActiveRecord::Migration[6.1]
  def change
    create_table :courses do |t|
      t.string :class_period
      t.string :course_name
    end
  end
end
