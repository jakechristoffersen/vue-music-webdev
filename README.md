# vue-music

## Even more fun with Music!

Alright so it's checkpoint time again so `please dont stop the music...`

### The Setup

You should have from the previous checkpoint a fully functional app that searches the Itunes API for all of your favorite music. However the current state of that application is lacking a certian flare.

It's time to level this app up with Vuejs. Your end goal should be an app which allows you to create a list of your favorite songs that you can easily change the order of and play at your discretion, without having to requery the itunesService.

This project already has the itunes service pulled over but you will be responsible for building out the components necessary to use it. Make sure that you resolve the itunes request.

Once you get the Itunes service drawing to your itunes component it will be time to focus on adding a way for you to keep track of your favorite songs. You will be doing this in the `mytunes-service.js`

> The mytunes-service needs to be completed 

```javascript
export default {
  getTracks() { },
  addTrack() { }, //This guy is already done
  removeTrack() { },
  promoteTrack() { },
  demoteTrack() { }
}
```
Managing your list of songs will likely be the trickest part of the assignment. 

### Step 1 -  Communicating with the Store? 

Before starting step 1 You should already have a component that is responsible for drawing the `itunes songList` to the page. From your itunes component you will need to add a button to each song as it is rendered to the page so you have the option of adding it to your tracks....

You will need to ensure that your Home component imports the `MyTunes` component. Focus on hooking up the add button to a function. Make sure you can get the button to pass you the information needed to `identify` the correct song.

Then make sure you take the `entire song object` and pass it to your `myTunes.addTrack` method

```javascript
   addTrack(track){
    //....
      this.store.dispatch('addTrack', track) // <--- Calling the action in our store
    //....
  }
```


### Step 2 - The MyTunes Component 

The Mytunes Component is the wow factor for your application. It is here where you can be creative in the way you want to manage your list. You will need to add a few more functions to your controller that will be tied to buttons for each of the songs in your list. 

Key features here will include:
- `removeTrack`
- `promoteTrack`
- `demoteTrack`

<div>
  <img src="https://bcw.blob.core.windows.net/public/img/mytunes2.jpg" />
</div>

Also don't forget it would be useless to keep around a list if you couldn't still play the songs.

### Requirements:
  - Visualization
      - Users have a Search component and a myTunes component seperate from each other on the page
      - Playlist retains order set by user
  - Functionality
      - Retains functionality of first playlist
      - Persist your data to the database
      - Add / Remove Tracks from Playlist
      - Promote/Demote Tracks on Playlist


### BONUS IDEAS - Some enhancing features 
- Have your myTunes List slide in and out when wanting to access it
- Display different icons for song actions(promote, demote, etc)


## The API

### Track model
{
    artistName: { type: String, required: true},      //has to be a string
    trackName: { type: String, required: true},       //has to be a string
    previewUrl: {type: String, required: true},       //has to be a string
    artworkUrl100: {type: String, required: true},    //has to be a string
    userId: {type: ObjectId, ref: 'User'},            //has to be a users id
    likes: {type: Number, required: true, default: 0} //will be set to 0 by default
}

### Post Request Method

#### Create Track
https://night-class-server.herokuapp.com/api/tracks/:trackId - new track object as data for request


### Get Request Method

#### Get One Track
https://night-class-server.herokuapp.com/api/tracks/:trackId - no data passed for request

#### Get Entire Playlist 
https://night-class-server.herokuapp.com/api/tracks - no data passed for request


### Put Request Method

#### Edit Track
https://night-class-server.herokuapp.com/api/tracks/:trackId - edited track object as data for request


### Delete Request Method

#### Delete Track
https://night-class-server.herokuapp.com/api/tracks/:trackId - no data passed for request


## The Auth

### User Model
{
    name: { type: String, required: true },             //has to be a string
    password: { type: String, required: true },         //has to be a string
    email: {type: String, required: true, unique: true} //has to be a string and cant match another in the Database
}

### Register User
creating a new user
https://night-class-server.herokuapp.com/api/auth/register - new user object as data for request it will log you in and return a user


### Login User
getting an existing user from the database
https://night-class-server.herokuapp.com/api/auth/register - user email and password as data for request it will return a user


### Authenticate User
automatically getting a user based on stored sessions or cookies in the browser
https://night-class-server.herokuapp.com/api/auth/register - stored session in browser as data it will log you in and return user


### Logout User
delete the current users session(logout)
https://night-class-server.herokuapp.com/api/auth/register - destroy stored session
