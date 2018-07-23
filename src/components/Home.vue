<template>
  <section class="section">
    <div class="container">
      <h1>Newgle</h1>
      <form v-on:submit.prevent="handleSubmit()">
        <label for="search">What are you looking for?</label>
        <input class="input" type="text" v-model="search.textInput"></input>
        <p>Message goes here {{ search.textInput}}</p>
        <select v-model="search.type">
          <option value="bar">Bar</option>
          <option value="gym">Gym</option>
        </select>
        <button type="button" name="button">El Submit</button>
      </form>
      <GoogleMap v-bind:places="places" />

    </div>
  </section>
</template>

<script>
import axios from 'axios';
import GoogleMap from './GoogleMap';
import Vue from 'vue';



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
  data() {
    return {
      search: {
      }
    }
  },
  components: {
      GoogleMap
  },
  watch:{
    search(){
    }
  },
  methods: {
    handleSubmit() {
      console.log(data);
    },
    handlePlaceChange({ formatted_address: address, geometry: { location } }) {
      this.venue.address = address;
      this.venue.location = location.toJSON();
    }
  },
};
</script>

<style>
.map {
  height: calc(100vh - 52px);
}
</style>
