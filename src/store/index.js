import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'

vue.use(vuex)

let auth = axios.create({
  baseURL: '//vue-music-server.herokuapp.com/auth',
  timeout: 1000,
  withCredentials: true
})

let api = axios.create({
  baseURL: '//vue-music-server.herokuapp.com/api',
  timeout: 1000,
  withCredentials: true
})

var store = new vuex.Store({
  state: {
    myTunes: [],
    results: []
  },
  mutations: {
    setResults(state, results){
      state.results = results
    }
  },
  actions: {
    getMusicByArtist({commit, dispatch}, artist) {
      var apiurl = 'https://itunes.apple.com/search?term=' + artist;
      api.get(apiUrl).then(data=>{
        debugger
        commit('setResults', data)
      })
    },
    getMyTunes({commit, dispatch}){
      //this should send a get request to your server to return the list of saved tunes
    },
    addToMyTunes({commit, dispatch}, track){
      //this will post to your server adding a new track to your tunes
    },
    removeTrack({commit, dispatch}, track){
      //Removes track from the database with delete
    },
    promoteTrack({commit, dispatch}, track){
      //this should increase the position / upvotes and downvotes on the track
    },
    demoteTrack({commit, dispatch}, track){
      //this should decrease the position / upvotes and downvotes on the track
    }

  }
})

export default store
