class CreateClasses < ActiveRecord::Migration[6.1]
   def change
     create_table :classes do |t|
       t.string :course_name
        t.integer :class_period
   end
  end
end
