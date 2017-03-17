<style lang="css">
  .home h1{
    text-align: center;
  }
  .home nav{
    display: flex;
    justify-content: space-around;
  }
  .home .info{
    margin: 25px 10px;
  }
  .container{
    max-width: 600px;
    margin: 0 auto;
  }
</style>
<template lang="html">
  <div class="container home">
    <h1>Home</h1>
    <nav>
      <router-link to="/login">Login</router-link>
      <router-link to="/create">Create</router-link>
    </nav>
    <div class="non-protected info">
      {{regularData}}
    </div>
    <div class="protected info">
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
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    }

    axios.get('/protected', opts)
    .then(({data}) => this.secretData = data);

    axios.get('/non-protected')
    .then(({data}) => this.regularData = data)
    .catch(err => this.regularData = 'Unable to load regular data');
  },
  data(){
    return {
      regularData: null,
      secretData: null
    }
  }
}
</script>
