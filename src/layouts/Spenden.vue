<template>
  <div>
    <div class="stacked-blocks-mobile red" v-on:click="visible_1 = !visible_1">
      <h1 class="small-text-padding">Für den Verein</h1>
    </div>
    <transition name="fade">
      <div class="stacked-blocks-mobile big" v-if="visible_1">
        <p class="regular-font">
          Lieber Spender,
          <br />SpendenLike e.V. ist ein gemeinnütziger Verein. Wir wollen
          unsere Mitmenschen durch das Internet mehr auf soziale Projekte und
          Probleme aufmerksamen machen.
          <br />
          <br />Alle Spendeneinnahmen fließen zu 100% in gemeinnützige Projekte.
        </p>
      </div>
    </transition>
    <transition name="fade">
      <div
        class="stacked-blocks-mobile button red"
        v-if="visible_1"
        v-on:click="visible_2 = !visible_2"
      >
        <h1 class="small-text-padding">SEPA</h1>
      </div>
    </transition>
    <transition name="fade">
      <div
        class="stacked-blocks-mobile button"
        style="height: 84px"
        v-if="visible_2"
      >
        <h2 class="small-text-padding" style="color: #2c3e50">
          IBAN: DE49 7505 1040 0031 5008 04 <br />
          Sparkasse Schwandorf
        </h2>
      </div>
    </transition>

    <transition name="fade">
      <a href="https://paypal.me/spendenlike">
        <div class="stacked-blocks-mobile button blue" v-if="visible_1">
          <img alt="paypal" src="../assets/paypal.png" class="paypal" />
          <h1 class="small-text-padding">Paypal</h1>
        </div>
      </a>
    </transition>
    <a
      href="https://www.betterplace.org/en/projects/89654-120-fahrraeder-fuer-schulkinder-inkl-mechanikerausbildung-ersatzteile-usw"
      target="_blank"
    >
      <h1 class="font-current-project">
        Für unser aktuelles
        <br />Projekt
      </h1>
      <div class="stacked-blocks-mobile background-current-project"></div>
    </a>
    <!--a href="https://www.patreon.com/">
      <div class="stacked-blocks-mobile red">
        <h1 class="small-text-padding">Patreon</h1>
      </div>
    </a-->
  </div>
</template>

<script>
export default {
  name: "Spenden",
  data() {
    return {
      msg: "Spenden",
      visible_1: false,
      visible_2: false
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.stacked-blocks-mobile {
  height: calc((100vh - 66px) / 2);
  display: flex;
  justify-content: center;
  align-items: center;
}

.small-text-padding {
  color: white;
}

.big {
  height: 100%;
  text-align: left;
  padding: 1rem;
  font-size: 1.4rem;
}

.regular-font {
  font-family: Arial, Helvetica, sans-serif;
}

.paypal {
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

.button {
  height: 54px;
  padding-top: 0.6rem;
}

.font-current-project {
  position: absolute;
  margin-top: 20vh;
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
  background: #0070ba;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
