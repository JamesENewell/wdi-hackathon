<template>
  <section class="section">
    <div class="container">
      <div class="titleContainer">
        <h1 class="title is-1">THE THREE VUE-SKETEERS</h1>
      </div>
      <p class="aboutParagraph">Now, this is a story all about how, My life got flipped-turned upside down, And I'd like to take a minute, Just sit right there, I'll tell you how I became one of the three Vue-sketeers</p>
      <img src="../assets/images/ThreeMusketeers.jpg"/>
    </div>

  </section>
</template>


<script>
export default {
  name: 'About'
};
</script>


<style >
  h1{
    text-align: center;
  }
  *{
    font-family: 'Mate SC', serif;
  }
  .titleContainer{
    margin: 0 auto;
    width: max-content;
    border-bottom: 2px solid  rgba(255,182,193, 0.2);
    margin-bottom: 10px;
  }
  img:hover{
    animation: wiggle 2s infinite;
}
  @keyframes wiggle {
    0% {transform: rotate(5deg); }
    10% {transform: rotate(0deg); }
    20% {transform: rotate(-5deg); }
    30% {transform: rotate(0deg); }
    40% {transform: rotate(5deg); }
    50% {transform: rotate(0deg); }
    60% {transform: rotate(-5deg); }
    70% {transform: rotate(0deg); }
    80% {transform: rotate(5deg); }
    90% {transform: rotate(0deg); }
    95% {transform: rotate(-5deg); }
    100% {transform: rotate(0deg); }
  }

  p.aboutParagraph {
    padding: 20px 0 20px 0;
  }
</style>
