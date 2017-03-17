<style lang="css">
  .login h1{
    text-align: center;
  }
  .login nav{
    display: flex;
    justify-content: space-around;
  }
  .login .form{
    margin: 25px auto;
    width: 66%;
  }
  .login input{
    margin: 5px;
  }
  .login input,
  .login label{
    display: block;
  }
  .login button{
    display: block;
    margin: 10px auto;
  }
</style>
<template lang="html">
  <div class="container login">
    <h1>Login</h1>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/create">Create</router-link>
    </nav>
    <div class="form">
      <label for="name">Username</label>
      <input type="text" id="name" v-model="user">
      <!---->
      <label for="name">Password</label>
      <input type="text" id="pass" v-model="pass">
      <!---->
      <p v-show="errText">{{errText}}</p>
      <button @click="submit">Login</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return {
      errText: false,
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
        this.errText = err.response.data;
      }
    }
  }
}
</script>
