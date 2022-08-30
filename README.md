# Bathroom Use Tracker Sinatra App

## About

-This app is built with Sinatra and uses Rake tasks to work with an SQL database using Active Record ORM. 

The application provides a database and web interface for admin to :
  -View Instructors, Courses, and Learners as well as their enrollments
  -Add instructors, courses, and learners 
  -Monitor student time spent out of the classroom based on instructor tracking

## Usage

After checking out the repo, run bundle install to install Ruby gem dependencies.

## Requirements

For this project, I 

- Used Active Record to interact with a database.
- Have an Instructor model with a one-to-many relationship, a Course model with a has-many and has-many-through relationship, an Enrollment join table that belongs to the Course and Learner models, and a Learner model with a has-many and has-many-through relationship. 

- API routes in Sinatra are set up such that:
  - create and read actions for Courses
  - full CRUD capability for the Instructor model
- A separate React frontend application that interacts with the API to
  perform CRUD actions.
  
## Contributing
Bug reports and pull requests are welcome on GitHub at https://github.com/laynaoyervides/phase-3-sinatra-react-project.

This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant code of conduct.

## Copyright
Copyright 2022 by Layna Oyervides, SiteZinger
## Resources

- [create-react-app][]
- [dbdiagram.io][]
- [Postman][postman download]

[create-react-app]: https://create-react-app.dev/docs/getting-started
[create repo]: https://docs.github.com/en/get-started/quickstart/create-a-repo
[dbdiagram.io]: https://dbdiagram.io/
[postman download]: https://www.postman.com/downloads/
[network tab]: https://developer.chrome.com/docs/devtools/network/
