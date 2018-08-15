# leads
stay connected with your community -- find leads to just about anything: jobs, community events, alerts, etc.

## The project(s)
* The website -- while still very much in development (I'm adding stuff most days) -- is live on [heroku](https://leadsnz.herokuapp.com)
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
  
### Notes:
* [google-maps-react module](https://github.com/fullstackreact/google-maps-react)
* [font used for logo](https://fonts.google.com/specimen/Pacifico)
* [font for body](https://fonts.google.com/specimen/Lato)
