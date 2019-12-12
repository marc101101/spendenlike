<template>
  <div>
    <a href="/spenden">
      <div class="stacked-blocks-mobile red">
        <h1 class="small-text-padding">Für den Verein</h1>
      </div>
    </a>
    <a href="/betterplace">
    <div class="stacked-blocks-mobile background-current-project">
      <h1>Für unser aktuelles Projekt</h1>
       <img src="../assets/current-project.jpg">
    </div>
    </a>
    <a href="/patreon">
    <div class="stacked-blocks-mobile red">
      <h1 class="small-text-padding">Patreon</h1>
    </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "Spenden",
  data() {
    return {
      msg: "Spenden"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.stacked-blocks-mobile{
  height: calc((100vh - 66px) / 3);
}

h1{
  padding: 3rem;
}

.small-text-padding{
  padding: 5rem;
  color: white;
}

img {
    left: 0;
    top: 0;
    width: 100%;
    height: 30vh;
    margin-top: -33vh;
    opacity: 0.3;
}

.background-current-project{
  color: #212529;
  background-position: center;
}

.red{
  background: red;
}

</style>
