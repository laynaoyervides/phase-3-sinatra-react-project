require_relative "./config/environment"

Bundler.require
ActiveRecord::Base.establish_connection (
  :adapter => 'sqlite3',
  :database => 'db/development.sqlite'
)
require_all 'app'

# Allow CORS (Cross-Origin Resource Sharing) requests
use Rack::Cors do
  allow do
    origins '*'
    resource '*', headers: :any, methods: [:get, :post, :delete, :put, :patch, :options, :head]
  end
end

# Parse JSON from the request body into the params hash
use Rack::JSONBodyParser

# Our application
run ApplicationController
