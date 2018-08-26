# [leads](https://leadsnz.herokuapp.com)
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
    ```javascript
      componentDidMount() {
        if (navigator.geolocation) { /* if the browser has geolocation available, request the user's position... */
            navigator.geolocation.getCurrentPosition(pos => {
                console.log(pos)

                const coords = pos.coords

                const browserLocation = {
                    lat: coords.latitude,
                    lng: coords.longitude
                }

                /* reverse-geocoding (through google maps api) with browser's lat & long */
                request
                    .get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${browserLocation.lat},${browserLocation.lng}&key=${apiKey}`)
                    .then(res => {
                        console.log(res.body)

                        const suburb = res.body.results[2].formatted_address.split(',')[0] /* grabbing just the first word out of the suburb result */

                        return suburb
                    }).then(suburb => { /* wait for that return value before setting state... */
                        this.setState({
                            browserLocation,
                            suburb,
                            isGettingRegion: false /* stops map from rendering w out necessary information */
                        })
                    }).then(() => {
                        document.title = `${this.state.suburb} Community Map - leads`
                    })
            })
        }
    }
    ```
  * **React** front-end; componentisation of views + **Bulma.css**, custom stylesheet + react-scroll-to-component
  * **Redux**, **redux-thunk**
    * Used Redux to manage the application's state
    * Redux-thunk to make asynchronous api calls from the server to feed back to the client's state
    
## db; migrations (server-side) --
Decided to build a separate table for each category of post, as attributes are specific to each category. Additionally, will make altering the required data for different types of post easier in the long run.
* **What does this mean for the routes?**
  * Routes for each table as per; potentially a route encompassing all the posts? .concat the arrays returned into one return value
* **What does this mean for redux-state?**
  * Planning to have separate pieces of state for each category of posts

### users
  | Column Name | Data-type | Purpose | Other notes: |
  | --- | --- | --- | --- |
  | **id** | increments | Unique identifier for each user | ~*Look at use of .uuid*~ |
  | **email** | string | The email used for registration | |
  | **user_name** | string | The chosen username of the user | ~*Display this in navigation bar?*~ done |
  | **hash** | string | A 'hash' of the user's password | *Gets hashed server-side* |

### general_posts (mvp)
  | Column Name | Data-type | Purpose | Other notes: |
  | --- | --- | --- | --- |
  | **id** | increments | Unique identifier for each item | ~*Look at use of .uuid*~ |
  | **category** | string | Defaults to 'alerts' | *Use this string to .filter on the concatenated results* |
  | **title** | string | A title of the alert |  |
  | **description** | string | A description of the alert |  |
  | **address** | string | The event address | |
  | **lat** | text | Latitude | *Reverse-geocoded w google api, parsed into a float server-side* |
  | **lng** | text | Longitude | *Reverse-geocoded w google api, parsed into a float server-side* |
  | **published** | timestamp | Timestamp at .insert | *Use 'moment' to format the timestamp* |
  | **user_id** | integer | The id of the user that made the post | *FK, used for .join('users')* |
**Notes:**
  * Put a `region` attribute in later! 
      * Need to sift through google's geocoding api to grab region data per a post's address
      * ...that way will be able to `.filter()' by region client-side

### comments
  | Column Name | Data-type | Purpose | Notes |
  | --- | --- | --- | --- |
  | **id** | increments | id of the posted comment |  |
  | **user_id** | integer | FK, id of the user who posted the comment |  |
  | **post_id** | integer | FK, id of the post the comment is attached to |  |
  | **content** | string | content of the comment |  |
  | **published** | timestamp | Timestamp at .insert |  |

**Notes about structure of 'comments':**
  * ~likely to have a comments table for each type of post~ 
  * **decided to use string-interpolation and a three-way join** to feed a table_name into the getComments method dynamically - will save me re-writing similar methods for x-comments tables in the future:
      ```javascript
      function getComments(table, postId, testDb) {
       const db = testDb || conn

       return db('comments')
           .join('users', 'users.id', 'comments.user_id')
           .join(table, `${table}.id`, 'comments.post_id') // in future, will let me feed other categories of posts into the query.
           .select('comments.id as comment_id', 'comments.user_id as user_id', 'user_name', 'post_id', 'content', 'comments.published as published')
           .where('comments.post_id', postId)
      }
      ``` 

### favourites
  | Column Name | Data-type | Purpose | Notes |
  | --- | --- | --- | --- |
  | **post_id** | integer | the id of the favourited post | foreign key |
  | **user_id** | integer | the id of the user that saved it | foreign key |
  | **category** | string | the category of the post saved | used to differentiate api calls / inserts (i'm thinking) |

**Note to myself about `.timestamp()` in general**:
  * might be easier to use the 'moment' library to pre-format *published* date for posts & comments client-side / in the browser; 1-step instead of 2 (with the current .timestamp + format idea)
      * would mean changing the .timestamp() attributes to .string; decide down the line
  
### Other references and stuff:
* [google-maps-react module](https://github.com/fullstackreact/google-maps-react)
* [font used for logo](https://fonts.google.com/specimen/Pacifico)
* [font for body](https://fonts.google.com/specimen/Lato)
* [moment](https://momentjs.com/) - a simple library for formatting dates and timestamps and such
* [Google's geocoding-API](https://developers.google.com/maps/documentation/geocoding/intro)

## stretch-stuff -- i.e. stuff for later:

### jobs  -- *stretch (left to be added to)*
  | Column Name | Data-type | Purpose | Notes |
  | --- | --- | --- | --- |
  | **id** | increments | Unique identifier for each item | |
  | **category** | string | defaults to 'jobs' | |
  | **TBD** | tbd | tbd | tbd |

### services -- *stretch  (left to be added to)*
  | Column Name | Data-type | Purpose | Notes |
  | --- | --- | --- | --- |
  | **id** | increments | Unique identifier for each item | |
  | **category** | string | defaults to 'services' | |
  | **TBD** | tbd | tbd | tbd |

### ratings -- *stretch*
  | Column Name | Data-type | Purpose | Notes |
  | --- | --- | --- | --- |
  | **sender_id** | integer | ID of the user that gave the rating |  |
  | **profile_id** | integer | ID of the user that received the rating |  |
  | **value** | integer | Number between 1-5 |  |
  | **TBD** | tbd | tbd | tbd |

**Notes on 'ratings'**:
* Eventually add a 'contents' table for feedback? or maybe have preset responses
* To find a user's rating
    * .where profile_id is the id of the profile
    * average the array of values with .reduce or similar
