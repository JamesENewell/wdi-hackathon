<template>
  <section class="section">
    <div class="container">
      <div class="titleContainer">
        <h1 class="title is-1">THE THREE VUE-SKETEERS</h1>
      </div>
      <img src="../assets/images/ThreeMusketeers.jpg"/>
    </div>

  </section>
</template>


<script>
export default {
  name: 'About'
};
</script>


<style>
  h1{
    text-align: center;
  }
  *{
    font-family: 'Mate SC', serif;
  }
  .titleContainer{
    display: flex;
    align-self: center; 
    width: max-content;
    /* animation: show 3s forwards; */
    border-bottom: 2px solid  rgba(255,182,193, 0.2);
    margin-bottom: 10px;
  }

  @keyframes show {
    0% {width: 0px; },
    100% {width: max-content }
  }
</style>
