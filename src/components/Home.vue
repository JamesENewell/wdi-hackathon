<template>
  <section class="section">
    <div class="container">
      <div class="titleContainer">
        <h1 class="title is-1">Newgle</h1>
      </div>
      <form class="searchBar">
        <label for="search">What are you looking for?</label>
        <input class="input" type="text" v-model="search.textInput"></input>
        <select v-model="search.type">
          <option disabled value="">Please select a search type</option>
          <option value="currency">Currency</option>
          <option value="lang">Languages</option>
          <option value="regionalbloc">Regional Bloc</option>
          <option value="name">Country</option>
        </select>
        <button class="button" type="button" name="button" v-on:click="handleSubmit">Search</button>
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
              return {
                name: country.name,
                capital: country.capital,
                flag: country.flag,
                population: country.population,
                location: {
                lat: country.latlng[0],
                lng: country.latlng[1]
              }}
          })
          this._data.places = places;
        })
    },
  },
};
</script>

<style>
.map {
  height: calc(70vh);
  animation: fadeIn 2s forwards;
}
form.searchBar {
  padding-bottom: 30px;
}
input.input:focus{
  background-color: rgba(255,182,193, 0.2);
}
input.input{
    margin-bottom: 10px;
}

button.button{
  float: right;
  background-color: rgba(255,182,193, 0.5);
  color: black;
}

button.button:hover{
  border: 1px inset pink;
}

@keyframes fadeIn {
  0%{opacity: 0;}
  100%{opacity: 1;}
}

select{
  font-family: 'Mate SC', serif;
}
</style>
