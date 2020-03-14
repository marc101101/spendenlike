<template>
  <div>
    <div class="header-container">
      <img src="../assets/info.png" height="100%" width="100%" />
    </div>
    <div class="bottom-container">
      <a href="/über">
        <div class="stacked-blocks-mobile button red">
          <h1 class="small-text-white">Über uns</h1>
        </div>
      </a>
      <a href="/betterplace">
        <div class="stacked-blocks-mobile button white">
          <h1 class="small-text-red">Aktuelles Projekt</h1>
        </div>
      </a>
      <a href="/geschichte">
        <div class="stacked-blocks-mobile button red">
          <h1 class="small-text-white">Geschichte</h1>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Info",
  data() {
    return {
      msg: "Info"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.stacked-blocks-mobile {
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.red {
  background: #c62828;
}

.small-text-white {
  color: white;
}

.white {
  background: white;
}

.small-text-red {
  color: #c62828;
}

h1 {
  margin-bottom: 0;
}

.bottom-container {
  bottom: 0rem;
}

.header-container {
  height: 60vh;
}
</style>
