<template>
    <div class="my-tunes">
        <h1>List of MyTunes</h1>
        <div class="container">
            <table class="table table-bordered">
                <thead class="thead-dark">
                    <tr>
                        <th>Cover Art</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>UserID</th>
                        <th>Likes</th>
                        <th>Preview</th>
                        <th>Recommend</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody v-for="myTune in myTunes">
                    <tr>
                        <th>
                            <img :src="myTune.artworkUrl100">
                        </th>
                        <th>{{myTune.artistName}}</th>
                        <th>{{myTune.trackName}}</th>
                        <th>{{myTune.userId}}</th>
                        <th>{{myTune.likes}}</th>
                        
                        <th>
                            <audio controls>
                                <source :src="myTune.previewUrl">
                            </audio>
                        </th>
                        <th><button class="btn btn-secondary" @click="promoteTrack(myTune)">+</button> <button class="btn btn-dark" @click="demoteTrack(myTune)">-</button></th>
                        <th><button type="button" class="btn btn-default" @click="removeTrack(myTune._id)">Remove</button></th>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'My-Tunes',
        data() {
            return {
                
            }
        },
        mounted() {
            this.$store.dispatch('getMyTunes')
        },
        methods: {
            removeTrack(trackId) { 
                this.$store.dispatch('removeTrack', trackId)
            },
            promoteTrack(myTune) {
                myTune.likes++
                this.$store.dispatch('promoteTrack', myTune)
            },
            demoteTrack() {
                myTune.likes--
                this.$store.dispatch('demoteTrack', myTune)
            }
        },
        computed: {
            myTunes() {
                return this.$store.state.myTunes
            }
        }
    }

</script>

<style>
</style>