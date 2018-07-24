<template>
  <section class="section">
    <div class="container">
      <div class="titleContainer showTitle">
        <h1 class="title is-1">{{this.country[0].name}}</h1>
      </div>
      <div class="columns">
        <div class="column flagColumn">
          <img class="showFlag" v-bind:src="this.country[0].flag" alt="">
        </div>
        <div class="column infoColumn">
          <!-- <h2 class="title is-2">Information</h2> -->
          <ul>
            <li><strong>Capital:</strong> {{this.country[0].capital}}</li>
            <li><strong>Region:</strong> {{this.country[0].region}}</li>
            <li><strong>Population:</strong> {{this.country[0].population}}</li>
            <li><strong>Native Name:</strong> {{this.country[0].nativeName}}</li>
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
  img.showFlag{
    border: 3px solid rgba(255,182,193, 0.2);
  }
  .titleContainer.showTitle{
    margin-bottom: 25px;
    animation: slideInTop 2s;
  }
  li{
    font-size: 1.5rem;
  }

  .column.flagColumn{
    animation: slideInLeft 2s;
  }

  .column.infoColumn{
    animation: slideInRight 2s;
  }
  @keyframes slideInTop {
    0% {transform: translate(0,-100px);}
    100% {transform: translate(0,0);}
  }
  @keyframes slideInLeft {
    0% {transform: translate(-500px,0);}
    100% {transform: translate(0,0);}
  }
  @keyframes slideInRight {
    0% {transform: translate(500px,0);}
    100% {transform: translate(0,0);}
  }
</style>
