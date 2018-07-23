<template>
  <section class="section">
    <div class="container">
      <h1>Newgle</h1>
      <form>
        <label for="search">What are you looking for?</label>
        <input class="input" type="text" v-model="search.textInput"></input>
        <select v-model="search.type">
          <option value="currency">Currency</option>
          <option value="lang">Languages</option>
        </select>
        <p>Message goes here {{ search.textInput}}</p>
        <button type="button" name="button" v-on:click="handleSubmit">El Submit</button>
      </form>
      <GoogleMap v-bind:places="places" />

    </div>
  </section>
</template>

<script>
import axios from 'axios';
import GoogleMap from './GoogleMap';
import Vue from 'vue';
export default {
  name: 'Home',
  data() {
    return {
      search: {
        textInput: '',
        type: ''
      },
      results: {

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
    handleSubmit : function() {
      axios({
        method: 'GET',
        url:`https://restcountries.eu/rest/v2/${this._data.search.type}/${this._data.search.textInput}`
      })
        .then(res => {
          const places = res.data.map(country => {
              return {location: {
                lat: country.latlng[0],
                lng: country.latlng[1]
              }}
          })
          this._data.results = places;
          console.log(this._data.results); 
        })
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
