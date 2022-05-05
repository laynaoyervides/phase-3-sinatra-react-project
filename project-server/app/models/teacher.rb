class Teacher < ActiveRecord::Base
    has_many :classes
    has_many :students, through => :classes
end
