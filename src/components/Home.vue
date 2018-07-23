<template>
  <section class="section">
    <div class="container">
      <h1>Newgle</h1>
      <form>
        <label for="search">What are you looking for?</label>
        <input class="input" type="text" v-model="textInput"></input>
        <select v-model="type">
          <option value="bar">Bar</option>
          <option value="gym">Gym</option>
        </select>
      </form>
      <google-map v-bind:places="places" />

    </div>
  </section>
</template>

<script>

import axios from 'axios';
import GoogleMap from './GoogleMap';

function findGooglePlaces(req, res){
  console.log('req', req)
  // axios({
  //   method: 'GET',
  //   url:`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${req.query.textInput}&location=51.509865,-0.118092&radius=15000&type=${req.query.type}&region=uk&key=AIzaSyANSuKsvWBT4KRvq4qXHUrE-LsPzFRQ_aE`,
  //   json: true
  // })
  //   .then(res => {
  //     console.log('res',res);
  //     const places = res.data
  //   });
}



export default {
  name: 'Home',
  components: 'GoogleMap'

};
</script>

<style>
</style>
