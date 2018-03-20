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

### Step 1 -  Communicating with Services? 

Before starting step 1 You should already have a component that is responsible for drawing the `itunes songList` to the page. From your itunes component you will need to add a button to each song as it is rendered to the page so you have the option of adding it to your tracks....

You will need to ensure that your component imports the `MyTunesService`. Focus on hooking up the add button to a function. Make sure you can get the button to pass you the information needed to `identify` the correct song.

Then make sure you take the `entire song object` and pass it to your `myTunes.addTrack` method

```javascript
   addTrack(track){
    //....
      myTunes.addTrack(track) // <--- Make sure you have imported the MyTunesService
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
      - Persist your data with mongoDB
      - Add / Remove Tracks from Playlist
      - Promote/Demote Tracks on Playlist


### BONUS IDEAS - Some enhancing features 
- User Auth
- Have your myTunes List slide in and out when wanting to access it
- Implement dragging to reorder your songs and drag to add to favorites

> Stretch Goal: Allow the user to create multiple playlists and manage the songs on each playlist 
> ***HINT:*** 

```javascript
let store = { 
  playlists: { 
    "90's Rock": [], 
    "Best of the 90's": [] 
  }
}

// You probably will need a few extra public methods
// CreatePlaylist()
// RemovePlaylist()

//And an extra Schema....
```
