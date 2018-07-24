<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a role="button" class="navbar-burger" v-bind:class="{ 'is-active': navIsOpen }" v-on:click="toggleNav()">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu" v-bind:class="{ 'is-active': navIsOpen }">
        <div class="navbar-start">
          <div class="globeContainer">
          <img class="globe" src="http://www.pngall.com/wp-content/uploads/2016/06/Globe.png"/>
        </div>
        </div>
        <div class="navbar-end">
          <router-link to="/" class="navbar-item">Home</router-link>
          <router-link to="/about" class="navbar-item">About</router-link>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return { navIsOpen: false };
  },
  methods: {
    toggleNav() {
      this.navIsOpen = !this.navIsOpen;
    }
  },
  watch: {
    '$route'() {
      this.navIsOpen = false;
    }
  }
};

</script>

<style>

html{
  background-color: aliceBlue;
}
nav.navbar{
  border-bottom: 2px solid rgba(255,182,193, 0.2);
}

a.navbar-item:hover{
  background-color:  rgba(255,182,193, 0.2) !important;
  color: black !important;
}

img.globe{
  height: 50px;
  width: auto;
}

.globeContainer{
  animation: spin 2000ms linear infinite, moveLeftToRight 5s linear 1;
  position: absolute;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}


@keyframes moveLeftToRight {
  0%   { left: -100px; }
  100% { left: 100%; }
}



</style>
