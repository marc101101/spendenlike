<template>
  <div>
    <a href="/spenden">
      <div class="stacked-blocks-mobile red">
        <h1 class="small-text-padding">Für den Verein</h1>
      </div>
    </a>
    <a href="/betterplace">
      <h1 class="font-current-project">Für unser aktuelles<br> Projekt</h1>
      <div class="stacked-blocks-mobile background-current-project"></div>
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
.stacked-blocks-mobile {
  height: calc((100vh - 66px) / 3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.small-text-padding {
  color: white;
}

.font-current-project {
  position: absolute;
  margin-top: 10vh;
  color: #2c3e50;
  width: 100%;
}

img {
  left: 0;
  top: 0;
  width: 100%;
  height: 30vh;
  margin-top: -33vh;
  opacity: 0.3;
}

.background-current-project {
  color: #212529;
  background-position: center;
  background-image: url("../assets/current-project.jpg");
  opacity: 0.3;
}

.red {
  background: #c62828;
}
</style>
