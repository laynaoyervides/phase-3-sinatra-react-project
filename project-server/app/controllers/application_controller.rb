class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/" do
    { message: "You've come to the right place if you're looking for courses, instructors, and learners in your courses" }.to_json
  end
  get "/learners" do
    learner = Learner.all
    learner.to_json
  end

  get "/courses" do
    course = Course.all
    course.to_json
  end

  get "/instructors" do
    instructor = Instructor.all
    instructor.to_json
  end

  delete '/instructors/:id' do
    instructor = Instructor.find(params[:id])
    instructor.destroy
    instructor.to_json
  end

  patch '/instructors/:id' do
    instructor = Instructor.find(params[:id])
    instructor.update(
      name: params[:name],
    )
    instructor.to_json
  end
  
  post '/instructors' do
    # create a new inst. in the database
    # params is a hash of key-value pairs coming from the body of the request
  instructor = Instructor.create(
      name: params[:name]
      )
      review.to_json
  end
  get "/enrollments" do 
    enrollment = Enrollment.all
    enrollment.to_json
  end


end
