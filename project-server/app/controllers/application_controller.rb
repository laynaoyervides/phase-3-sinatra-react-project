class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/learners" do
    learner = Learner.all
    learner.to_json
  end

  get "/courses" do
    course = Course.all
    course.to_json
  end

  get "instructors" do
    instructor = Instructor.all
    instructor.to_json
  end

  get "enrollments" do 
    enrollment = Enrollment.all
    enrollment.to_json
  end


end
