import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
import router from "../router"

vue.use(vuex)

//The location of the authentication resources on our server
let auth = axios.create({
  baseURL: '//night-class-server.herokuapp.com/auth',
  // baseURL: '//localhost:3000/auth',
  timeout: 1000,
  withCredentials: true
})

//The location of the basic api resources on our server
let api = axios.create({
  baseURL: '//night-class-server.herokuapp.com/api',
  timeout: 1000,
  withCredentials: true
})

//goes to itunes api for itune tracks 
let itunes = axios.create({
  baseURL: 'https://itunes.apple.com',
  timeout: 5000
})

var store = new vuex.Store({
  state: {
    myTunes: [],
    itunes: [],
    user:{}
  },
  mutations: {
    setItunes(state, itunes) {
      state.itunes = itunes
    },
    setUser(state, user){
      state.user = user
    }
  },
  actions: {
    //this one is working for you, check out your state.itunes
    getMusicByArtist({ commit, dispatch }, artist) {
      itunes.get('search?term=' + artist).then(res => {
        console.log(res)
        commit('setItunes', res.data.results)
      })
        .catch(err => {
          console.error(err)
        })
    },
    getMyTunes({ commit, dispatch }) {
      //this should send a get request to your server to return the list of saved tunes
    },
    addToMyTunes({ commit, dispatch }, track) {
      //this will post to your server adding a new track to your tunes
    },
    removeTrack({ commit, dispatch }, track) {
      //Removes track from the database with delete
    },
    promoteTrack({ commit, dispatch }, track) {
      //this should increase the position / upvotes and downvotes on the track
    },
    demoteTrack({ commit, dispatch }, track) {
      //this should decrease the position / upvotes and downvotes on the track
    },

    //USER AUTHENTICATION AREA
    
    login({ commit, dispatch }, user) {
      //make a post request to the login location on the auth server with the user
      auth.post('login', user)
        .then(res => {
          console.log(res.data.message)
          commit('setUser', res.data.user)
          router.push('/home')
        })
        .catch(err => {
          console.error(err)
        })
    },
    register({ commit, dispatch }, user) {
      //make a post request to the register location on the auth server
      //with the user from the auth component
      auth.post('register', user)
        .then(res => {
          console.log(res.data.message)
          //add the user to our store
          commit('setUser', res.data.user)
          router.push('/home')
        })
        .catch(err => {
          console.error(err)
        })
    },
    authenticate({ dispatch, commit }) {
      auth.get('authenticate')
        .then(res => {
          console.log(res.data.message)
          commit('setUser', res.data)
          router.push('/home')
        })
        .catch(err => {
          console.error(err)
          router.push('/')
        })
    },
    logout({ dispatch, commit }) {
      auth.delete('logout')
        .then(res => {
          console.log(res.data.message)
          commit('setUser', {})
          router.push('/')
        })
        .catch(err => {
          console.error(err)
        })
    },
  }
})

export default store
