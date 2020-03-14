<template>
  <div class="stacked-blocks-mobile button red">
    <h1 class="small-text-padding">SEPA</h1>
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
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.red {
  background: #c62828;
}

.small-text-padding {
  color: white;
}
</style>
