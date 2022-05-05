class Student < ActiveRecord::Base
    has_many :classes
    has_many :teachers, through => :classes
end
