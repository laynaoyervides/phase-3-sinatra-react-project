class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
# ROUTES FOR LEARNERS, COURSES, INSTRUCTORS, ENROLLMENTS(JOIN)
  get "/" do
    { message: "You've come to the right place if you're looking for courses, instructors, and learners in your courses" }.to_json
  end
  
#learner ROUTES
  get "/learners" do
    learner = Learner.all
    learner.to_json
  end
#course ROUTES
  get "/courses" do
    course = Course.all
    course.to_json
  end

  delete '/courses/:id' do
    course = Course.find(params[:id])
    course.destroy
    course.to_json
  end

  patch '/courses/:id' do
    course = Course.find(params[:id])
    course.update(
      course_name: params[:course_name],
      class_period: params[:class_period],
      instructor_id: params[:instructor_id]
    )
    course.to_json
  end

  post '/courses' do
    # create a new inst. in the database
    # params is a hash of key-value pairs coming from the body of the request
  course = Course.create(
      course_name: params[:course_name],
      class_period: params[:class_period],
      instructor_id: params[:instructor_id]
      )
  course.to_json
  end



#instructor ROUTES

  get "/instructors" do
  instructors = Instructor.all
    instructors.to_json
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
  instructor.to_json
  end

  get '/instructors/:id' do
    instructor = Instructor.all
    instructor.to_json
  end 

  #enrollments ROUTES
  get "/enrollments" do 
    enrollment = Enrollment.all
    enrollment.to_json
  end


end
