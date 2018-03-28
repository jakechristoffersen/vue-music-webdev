<template>
    <div class="auth">
        <div class="login" v-if="showLogin">
            <h1>Login</h1>
            <label for="email">Email</label>
            <input type="text" name="email" id="email" v-model="user.email">
            <label for="password">Password</label>
            <input type="password" name="password" id="password" v-model="user.password">
            <p>Not a user?
                <em @click="toggle">Register</em>
            </p>
        </div>
        <div class="register" v-if="!showLogin">
            <h1>Register</h1>
            <label for="name">Name</label>
            <input type="text" name="name" id="name" v-model="user.name">
            <label for="email">Email</label>
            <input type="text" name="email" id="email" v-model="user.email">
            <label for="password">Password</label>
            <input type="password" name="password" id="password" v-model="user.password">
            <button @click="register">Register</button>            
            <p>Already a user?
                <em @click="toggle">Login</em>
            </p>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'auth',
        data() {
            return {
                user: {},
                showLogin: true
            }
        },
        computed: {},
        methods: {
            //need some more methods here to login or register
            toggle() {
                this.showLogin = !this.showLogin
            },
            register(){
                this.$store.dispatch('register', this.user)
            }
        },
        components: {}
    }
</script>


<style scoped>
</style>