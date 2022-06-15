class AddLearnerIdToEnrollments < ActiveRecord::Migration[6.1]
  def change
      add_column :enrollments, :learner_id, :integer
  end
end
