<template lang="html">
  <div class="container login">
    <router-link to="/">Home</router-link>
    <router-link to="/login">Login</router-link>
    <h1>Create User</h1>
    <label for="name">Username</label>
    <input type="text" id="name" v-model="user">
    <!---->
    <label for="name">Password</label>
    <input type="text" id="pass" v-model="pass">
    <!---->
    <button @click="submit">Submit</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return {
      user: '',
      pass: ''
    }
  },
  methods: {
    async submit(){
      const res = await axios.post('/create', {
        user: this.user,
        pass: this.pass
      });
      console.log(res);
    }
  }
}
</script>
<style lang="css">
</style>
