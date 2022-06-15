class CreateCourses < ActiveRecord::Migration[6.1]
  def change
    create_table :courses do |t|
    t.string :course_name
    t.integer :class_period
    end
  end
end
