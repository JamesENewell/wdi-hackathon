<template>
  <section class="section">
    <div class="container">
      <h1 class="title is-1">Newgle</h1>
      <form class="searchBar">
        <label for="search">What are you looking for?</label>
        <input class="input" type="text" v-model="search.textInput"></input>
        <select v-model="search.type">
          <option value="currency">Currency</option>
          <option value="lang">Languages</option>
          <option value="regionalbloc">Regional Bloc</option>
          <option value="name">Country</option>
        </select>
        <button class="button" type="button" name="button" v-on:click="handleSubmit">Submit</button>
      </form>
      <google-map v-bind:places="places" />

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
      places: {

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
          const places = res.data.filter(country =>{
            if (country.latlng[0] && country.latlng[1]) {
              return country;
            }
          }).map(country => {
            console.log(country);
              return {
                name: country.name,
                capital: country.capital,
                flag: country.flag,
                location: {
                lat: country.latlng[0],
                lng: country.latlng[1]
              }}
          })
          this._data.places = places;
          console.log(this._data.places);
        })
    },
  },
};
</script>

<style>
.map {
  height: calc(70vh);
}
form.searchBar {
  padding-bottom: 30px;
}
input.input:focus{
  background-color: rgba(255,182,193, 0.2);
}

button.button{
  float: right;
  background-color: rgba(255,182,193, 0.5);
  color: white;
}
</style>
