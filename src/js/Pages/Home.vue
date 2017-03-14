<style lang="css">
</style>
<template lang="html">
  <div class="container home">
    <h1>Home</h1>
    <router-link to="/login">Login</router-link>
    <router-link to="/create">Create</router-link>
    <div class="protected">
      {{secretData}}
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  async created(){
    const opts = {
      headers: {
        Authorization: 'Bearer ' + sessionStorage.getItem('token')
      }
    }
    try{
      const {data} = await axios.get('/protected', opts);
      this.secretData = data;
    }
    catch(err){}
  },
  data(){
    return {
      secretData: null
    }
  }
}
</script>
