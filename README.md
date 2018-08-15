# leads
stay connected with your community -- find leads to just about anything: jobs, community events, alerts, etc.

## The project
* The website -- while still very much in development (I'm adding stuff most days) -- is live on [Heroku](https://leadsnz.herokuapp.com)
* there is a custom-built api in this repo, which serves to both the **[ios-app](https://github.com/talor-hammond/leads-mobile)**, and the web-frontend
* **the technology / concepts involved:**
  * Authorisation with jwt
    * *Note:* had to re-design the 'setting' of tokens with **[Async Storage](https://facebook.github.io/react-native/docs/asyncstorage.html)** in the mobile-app
  * Structuring the database (SQL); built with Knex
  * Building a custom-api with SQL, Knex, & Express
  * **Geolocation**
    * Browser geolocation to build a map view
    * Geocoding & reverse-geocoding with google maps api to parse and determine addresses / lats & longs for both the database and the community map
  * **React** front-end; componentisation of views -- connected to Redux state...
  * **Redux**, **redux-thunk**
    * Used Redux to manage the application's state
    * Redux-thunk to make asynchronous api calls from the server to feed back to the client's redux state
    
## db; migrations (server-side) --
Decided to build a separate table for each category of post, as attributes are specific to each category. Additionally, will make altering the required data for different types of post easier in the long run.
* What does this mean for the routes?
  * Routes for each table as per; potentially a route encompassing all the posts? .concat the arrays returned into one return value
* What does this mean for redux-state?
  * Planning to have separate pieces of state for each table

### general
  | Column Name | Data-type | Purpose | Other notes: |
  | --- | --- | --- | --- |
  | id | increments | Unique identifier for each item | *Look at use of .uuid* |
  | category | string | Defaults to 'alerts' | *Use this string to .filter on the concatenated results* |
  | title | string | A title of the alert |  |
  | description | string | A description of the alert |  |
  | published | timestamp | Timestamp at .insert | *Use 'moment' to parse the timestamp* |
  | user_id | integer | The id of the user that made the post | *FK, used for .join('users')* |
  
### events
  | Column Name | Data-type | Purpose |
  | --- | --- | --- |
  | id | increments | Unique identifier for each item |
  | category | string | defaults to 'events' |
  | title | string | A title of the alert |  |
  | description | string | A description of the alert |  |
  | address | string | The event address | |
  | lat | text | Latitude | Reverse-geocoded w google api, parsed into a float server-side |
  | lng | text | Longitude | Reverse-geocoded w google api, parsed into a float server-side |
  
### jobs
  | Column Name | Data-type | Purpose |
  | --- | --- | --- |
  | id | increments | Unique identifier for each item |
  | category | string | defaults to 'jobs' |
  
### services
  | Column Name | Data-type | Purpose |
  | --- | --- | --- |
  | id | increments | Unique identifier for each item |
  | category | string | defaults to 'services' |
  
### favourites
  | Column Name | Data-type | Purpose | Notes |
  | --- | --- | --- | --- |

* *nb:*
  * Looking into the use of .uuid instead of .increments as the unique identifier for each post
  *
  
### Notes:
* [google-maps-react module](https://github.com/fullstackreact/google-maps-react)
* [font used for logo](https://fonts.google.com/specimen/Pacifico)
* [font for body](https://fonts.google.com/specimen/Lato)
* [moment](https://momentjs.com/) - a simple library for formatting dates and timestamps and such
