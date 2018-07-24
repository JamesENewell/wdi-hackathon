<template>
  <section class="section">
    <div class="container">
      <div class="titleContainer">
        <h1 class="title is-1">{{this.country[0].name}}</h1>
      </div>
      <div class="columns">
        <div class="column">
          <img v-bind:src="this.country[0].flag" alt="">
        </div>
        <div class="column">
          <h2 class="title is-2">Information</h2>
          <ul>
            <li>Capital: {{this.country[0].capital}}</li>
            <li>Region: {{this.country[0].region}} </li>
            <li>Population: {{this.country[0].population}}</li>
            <li>Native Name: {{this.country[0].nativeName}}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import axios from 'axios';
export default {
  name: 'Show',
  data(){
    return {
      country: []
    };
  },
  mounted(){
    axios({
      method: 'GET',
      url: `https://restcountries.eu/rest/v2/name/${this.$route.params.name}`
    }).then(res => {

      this.country = res.data
      console.log(this);
    })
  }
};
</script>


<style>

</style>
