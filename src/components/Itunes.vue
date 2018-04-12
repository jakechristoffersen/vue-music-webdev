<template>
    <div class="itunes">
        <h1>iTunes Search</h1>
        <form class="input-group" @submit.prevent="search">
            <div class="input-group-prepend">
                <span class="input-group-text">Search Artist</span>
            </div>
            <input class="form-control" type="text" name="artist" id="artist" v-model="artist">
            <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="submit">Search</button>
            </div>
        </form>

        <div class="container">
            <table class="table table-bordered">
                <thead class="thead-dark">
                    <tr>
                        <th>Cover Art</th>
                        <th>Track</th>
                        <th>Album</th>
                        <th>Track Price</th>
                        <th>Price</th>
                        <th>Preview</th>
                        <th>Add Tunes</th>
                    </tr>
                </thead>
                <tbody v-for="itune in itunes">
                    <tr>
                        <th>
                            <img :src="itune.artworkUrl60">
                        </th>
                        <th>{{itune.trackName}}</th>
                        <th>{{itune.collectionName}}</th>
                        <th>{{itune.trackPrice}}</th>
                        <th>{{itune.collectionPrice}}</th>
                        <th>
                            <audio controls>
                                <source :src="itune.previewUrl">
                            </audio>
                        </th>
                        <th><button type="button" :data-target="'#'+ itune._id" class="btn btn-default" @click="addSong(itune)">Add</button></th>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'itunes',
        data() {
            return {
                artist: "",
            }
        },
        mounted() {

        },
        methods: {
            search(artist) {
                this.$store.dispatch('getMusicByArtist', this.artist)
                this.artist = ""
            },
            addSong(track) {
                
                this.$store.dispatch('addToMyTunes', track)
            }
        },
        computed: {
            itunes() {
                return this.$store.state.itunes
            }
        }
    }

</script>

<style>
    .container {
        padding: 15px;
    }
</style>