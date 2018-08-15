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

### users
  | Column Name | Data-type | Purpose | Other notes: |
  | --- | --- | --- | --- |
  | id | increments | Unique identifier for each user | *Look at use of .uuid* |
  | email | string | The email used for registration | |
  | user_name | string | The chosen username of the user | *Display this in navigation bar?* |
  | hash | string | A 'hash' of the user's password | *Gets hashed server-side* |

### general_posts (mvp)
  | Column Name | Data-type | Purpose | Other notes: |
  | --- | --- | --- | --- |
  | id | increments | Unique identifier for each item | *Look at use of .uuid* |
  | category | string | Defaults to 'alerts' | *Use this string to .filter on the concatenated results* |
  | title | string | A title of the alert |  |
  | description | string | A description of the alert |  |
  | published | timestamp | Timestamp at .insert | *Use 'moment' to parse the timestamp* |
  | user_id | integer | The id of the user that made the post | *FK, used for .join('users')* |

### services (mvp?)
  | Column Name | Data-type | Purpose |
  | --- | --- | --- |
  | id | increments | Unique identifier for each item |
  | category | string | defaults to 'services' |
  
### events
  | Column Name | Data-type | Purpose | Other notes: |
  | --- | --- | --- | --- |
  | id | increments | Unique identifier for each item | |
  | category | string | defaults to 'events' | |
  | title | string | A title of the alert | |
  | description | string | A description of the alert | |
  | address | string | The event address | |
  | lat | text | Latitude | *Reverse-geocoded w google api, parsed into a float server-side* |
  | lng | text | Longitude | *Reverse-geocoded w google api, parsed into a float server-side* |
  | duration | string | the duration of the event | *maybe have a event_start and event_end?* |
  | user_id | integer | The id of the user that made the post | *FK, used for .join('users')* |
  
### jobs
  | Column Name | Data-type | Purpose |
  | --- | --- | --- |
  | id | increments | Unique identifier for each item |
  | category | string | defaults to 'jobs' |
  
### favourites
  | Column Name | Data-type | Purpose | Notes |
  | --- | --- | --- | --- |
  | post_id | integer | the id of the favourited post | foreign key |
  | user_id | integer | the id of the user that saved it | foreign key |
  | category | string | the category of the post saved | used to differentiate api calls / inserts (i'm thinking) |

### ratings
  | Column Name | Data-type | Purpose | Notes |
  | --- | --- | --- | --- |
  | sender_id | integer | ID of the user that gave the rating |  |
  | profile_id | integer | ID of the user that received the rating |  |
  | value | integer | Number between 1-5 |  |

Notes:
* Eventually add a 'contents' table for feedback? or maybe have preset responses
* To find a user's rating
    * .where profile_id is the id of the profile
    * average the array of values with .reduce or similar

### comments
*notes about comments:* likely to have a comments table for each type of post:
  * e.g. events_comments
      * comment.id, .increments or .uuid 
      * comment.user_id, .integer
      * comment.post_id, .integer
      * comment.content, .string
      * comment.published, .timestamp
  
### Notes:
* [google-maps-react module](https://github.com/fullstackreact/google-maps-react)
* [font used for logo](https://fonts.google.com/specimen/Pacifico)
* [font for body](https://fonts.google.com/specimen/Lato)
* [moment](https://momentjs.com/) - a simple library for formatting dates and timestamps and such
