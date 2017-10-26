# Overview
We are building an application for the senior review! This application theme will be to design a website for the aircraft fanatics. We will go over back end libraries including express, multiple types of middleware, sequelize, and more. 

# Models
We will have two models to focus on in this application. "Country" and "Aircraft". Although countries may have many aircraft, aircraft can only be a part of one country. An aircraft should also keep track of an aircraft that it succeeds via a reference called 'succeeded'.

## Country Model
* Country instances will be composed of the following attributes:
    1. name (string) - name of country. 
        * Cannot be empty or null
    2. GFI (float) - global firepower index
        * Between 0 and 10 (the closer the number is to 0 the stronger, by the way).
    3. flagUrl (string) - represents a url to find the flag of a particular country. 
        * Should have a default value of a generic flag. 
* Country instances will also be able to getAircraft (hint: you shouldn't have to explicitly right this method)
* The Country model should have a method called 'getTopFive' which will return a promise for the top 5 strongest nations sorted by GFI.


## Aircraft Model
* Aircraft instances will be composed of th following attributes:
    1. make (string) - Represents the make of the aircraft ex. Lockeed Martin
        * Cannot be empty or null
    2. model (string) - Represents the model of the aircraft
        * Cannot be empty or null
    3. year (integer) - Represents the release year of the aircraft. 
        * Must be above 1903 ;)
    4. unitCost (integer) - stored in millions.
        * Must have a getter to convert from the stored value to millions.
        * When creating/updating an instance any value over 1 million should be assumed to be in millions and modulated before storage. (hint: think hook) 
    5. imageUrl (string) - represents the url to find an aircraft image. 
        * should have a default value aircraft image. 
    6. type (See Docs!) - represents the type of aircraft. Attack, Bomber, Versatile, Transport, Reconoissance, Rescue
    7. description (See Docs!) - description of the aircraft. 
        * must be able to accept absurdly large descriptions (hint: string won't be large enough).
    8. countryId - represents the id of the country the airplane is associated with.
        * you shouldn't have to write this yourself!
* The aircraft model should have a method called getAircraftByType which takes in a string and returns a promise for an array of all the aircraft of a particular type.

# Routes
We should establish CRUD routes for both Country and Aircraft and are all relative to /api. 

## Country Routes
* GET /countries - should respond with all of the countries with the make, model, year, and image of all of their aircraft.
* POST /countries - allows the creation of a country.
* GET /countries/top5 - should respond with the top 5 countries by GFI with the make, model, and year of all of their aircraft.
* GET /countries/:id - should respond with the full details of a particular country with all of the information regarding their aircraft, except the description of an aircraft.
* PUT /countries/:id - should allow the updating of a particular country. 
* DELETE /countries/:id - should allow the deletion of a country with a particular id. Keep in mind this should also delete all aircraft associated with this country.

## Aircraft Routes
* GET /aircraft - should respond with all of the information regarding all aircraft except the description of an aircraft along with the NAME of the country the aircraft can be found in.
* POST /aircraft - allows the creation of an aircraft. An aircraft should also be assigned a country.
* GET /aircraft/:id - should respond with the full details of a particular country with all of the information regarding their aircraft.
* PUT /aircraft/:id - should allow the updating of a particular aircraft. 
* DELETE /countries/:id - should allow the deletion of an aircraft with a particular id.

# Views
* All views should have a navbar and some sort of content.
* Home - Should have a scoreboard (table) of the top 5 countries measured by GFI. This scoreboard should show a picture of the countries flag, name, and GFI.
    * Clicking any nation in the scoreboard should bring you to the single country view. 
* Countries - Should show a table of all of the countries. This table should show a picture of the countries flag, name, and GFI. 
    * Clicking any nation in the scoreboard should bring you to the single country view. 
    * Additionally, next to each country should be an edit and delete button to allow editing and deletion of a particular country (you can choose how this will work).
* Single Country - Should show a larger picture of the flag of a country along with the GFI and name of the country. Underneath should be a table representing all of the airplanes that can be found in this country. 
    * Clicking any airplane should in this table should take you to the single airplane view.
* Aircraft - Should show a table of all of the aircraft. Each row in the table should have a picture of the aircraft, make, model, year, unit cost, type, and country name.
    * Clicking the name of the country should bring you to the Single Country page. 
    * Clicking the picture of the aircraft should bring you to the Single Aircraft page. 
    * Additionally, next to each aircraft should be an edit and delete button to allow editing and deletion of a particular aircraft (you can choose how this will work).
* Single Aircraft - Should show you a larger picture of an airplane along with the all of the information regarding that aircraft including it's description. This view should also tell you the country of make along with the flag of that country. 
    * Clicking this flag will take you to the Single Country view. 
* Manager - This view should allow you to create new aircraft / create new countries. You can expand this to allow you to edit and delete existing ones a well. 


# General Notes
## How to test functionality without a frontend
- GET: use your browser
- POST / PUT / DELETE :
 - CLI (command line interface) with `curl`
   - e.g. `curl -H "Content-Type: application/json" -X POST -d '{"name":"USA","GFI":".23","flagUrl:"http://wikiclipart.com/wp-content/uploads/2017/01/Images-for-usa-flag-clip-art-clipart-free-to-use.png"}' http://localhost:3000/api/countries`
   - `-H`: headers. `-X`: verb. `-d`: data (must be of the type specified in headers). http://[address]:[port]/[route_path]
 - [Postman](https://www.getpostman.com/)
   ![](https://www.dropbox.com/s/4fk3b90cd0i1a5y/postman_post.png?raw=true)
- Databases: use Sequelize in your routes and see if you are receiving what you expect

## Video Walkthrough
Please submit a 3-minute screencast of a walk-through of the functionality *and code* for each user story in your app. The user stories and complete functionality of the app are described by view above. Also please go through the actual code that is involved in doing that (from the front-end components to the backend routes and models). We recommend using Quicktime to record the screencast (instructions on how to do that [here](https://support.apple.com/kb/PH5882?locale=en_US&viewlocale=en_US)).

Once you've recorded your screencast, please *upload it to YouTube as an unlisted video*, and send us the link. This will aid us in evaluating your submission.

# Evaluation
- Code modularity/readability (25%)
- Models (25%)
- Routes (25%)
- Frontend logic and functionality (25%)
- Design + Bonus features (up to 10 Extra Credit points)