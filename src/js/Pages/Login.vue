<template lang="html">
  <div class="container login">
    <router-link to="/">Home</router-link>
    <router-link to="/create">Create</router-link>
    <h1>Login</h1>
    <label for="name">Username</label>
    <input type="text" id="name" v-model="user">
    <!---->
    <label for="name">Password</label>
    <input type="text" id="pass" v-model="pass">
    <!---->
    <p v-show="showErr">Incorrect username/password</p>
    <button @click="submit">Submit</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return {
      showErr: false,
      user: '',
      pass: ''
    }
  },
  methods: {
    async submit(){
      try{
        const {data} = await axios.post('/login', {
          user: this.user,
          pass: this.pass
        });
        localStorage.setItem('token', data);
        this.$router.push('/');
      }
      catch(err){
        this.showErr = true;
      }
    }
  }
}
</script>
<style lang="css">
</style>
