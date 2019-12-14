<template>
  <div>
    <div class="stacked-blocks-mobile red" v-on:click="visible_1 = !visible_1">
      <h1 class="small-text-padding">Für den Verein</h1>
    </div>
    <transition name="fade">
      <div class="stacked-blocks-mobile big" v-if="visible_1">
        <p>Lieber Spender,<br>
        SpendenLike e.V. ist ein gemeinnütziger Verein. Wir wollen unsere Mitmenschen durch das Internet mehr auf soziale Projekte und Probleme aufmerksamen machen. <br><br>
        Alle Spendeneinnahmen fließen zu 100% in gemeinnützige Projekte.</p>
      </div>
    </transition>
     <transition name="fade">
     <div class="stacked-blocks-mobile button red" v-if="visible_1">
       <h1 class="small-text-padding">SEPA</h1>
    </div>
    </transition>
    <transition name="fade">
     <div class="stacked-blocks-mobile button blue" v-if="visible_1">
       <img alt="paypal" src="../assets/paypal.png" class="paypal">
       <h1 class="small-text-padding">Paypal</h1>
    </div>
    </transition>
    <a href="/betterplace">
      <h1 class="font-current-project">
        Für unser aktuelles
        <br />Projekt
      </h1>
      <div class="stacked-blocks-mobile background-current-project"></div>
    </a>
    <a href="https://www.patreon.com/">
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
      msg: "Spenden",
      visible_1: false
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

.big{
  height: 100%;
  text-align: left;
  padding: 1rem;
  font-size: 1.4rem;
}

.paypal{
  width: 2rem;
  height: 2rem;
  margin-top: -0.8rem;
  filter: invert(100%);
    -webkit-filter: invert(100%);
    opacity: 1;
        opacity: 1;
    margin-left: -1rem;
    margin-right: 1rem;
}

.button{
  height: 54px;
  padding-top: 0.6rem;
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

.blue {
  background: #009cde;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
