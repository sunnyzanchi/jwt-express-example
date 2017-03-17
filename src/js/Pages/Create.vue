<style lang="css">
  .create h1{
    text-align: center;
  }
  .create nav{
    display: flex;
    justify-content: space-around;
  }
  .create .form{
    margin: 25px auto;
    width: 66%;
  }
  .create input{
    margin: 5px;
  }
  .create input,
  .create label{
    display: block;
  }
  .create button{
    display: block;
    margin: 10px auto;
  }
</style>
<template lang="html">
  <div class="container create">
    <h1>Create User</h1>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/login">Login</router-link>
    </nav>
    <div class="form">
      <label for="name">Username</label>
      <input type="text" id="name" v-model="user">
      <!---->
      <label for="name">Password</label>
      <input type="text" id="pass" v-model="pass">
      <!---->
      <p v-show="errText">{{errText}}</p>
      <button @click="submit">Create</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return {
      errText: null,
      user: '',
      pass: ''
    }
  },
  methods: {
    async submit(){
      try{
        const res = await axios.post('/create', {
          user: this.user,
          pass: this.pass
        });

        this.$router.push('/login');
      }
      catch(err){
        this.errText = err.response.data;
      }
    }
  }
}
</script>
