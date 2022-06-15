class Learner < ActiveRecord::Base
    has_many :enrollments
    has_many :courses, through: :enrollments
end
