<template>
  <div class="container" >
    <h1>{{ msg }}</h1>
    <hr>
    <div class="row" style="padding: 1rem">
    <p>SpendenLike e.V.<br>Wacholderstraße 22<br>92421 Schwandorf<br>Email: info@spendenlike.de</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Impressum",
  data() {
    return {
      msg: "Impressum"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
hr{
  width: 2rem;
  float: left;
}

.container{
  text-align: left;
}
</style>
