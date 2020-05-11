<template>
  <div>
    <div class="header">
      <h1>{{ msg }}</h1>
    </div>
    <div class="stacked-blocks-mobile red">
      <h1 class="small-text-padding">SpendenLike in Zahlen</h1>
      <br />
      <h1>3000€</h1>
      <p>für soziale Projekte gesammelt</p>
      <h1>> 30</h1>Mitglieder im Verein
      <h1>2017</h1>gegründet
    </div>
    <div class="stacked-blocks-mobile">
      <h1 class="small-text-padding">Creator</h1>
      <p>Unentgeldlich helfen diese den Projekten mit Reichweite</p>
      <img class="influencer-img" src="../assets/julian.jpg" />
      <h1 class="small-text-padding" style="margin-top: 0.5rem">Julian Franklin</h1>
      <p>vlog / Fitness / Travel</p>113.000
      Abonenten /
      44.000
      Follower /
      1.847
      Follower
    </div>
    <div class="stacked-blocks-mobile red">
      <h1 class="small-text-padding">Unser Vorstand</h1>
      <br />
      <img style="width:65%" src="../assets/vorstand_1.png" />
      <h1 class="small-text-padding" style="margin-top: 0.5rem">Johannes Guder</h1>
      <p>Initiator, 1. Vorstand</p>
      <br />
      <img style="width:65%" src="../assets/vorstand_3.png" />
      <h1 class="small-text-padding" style="margin-top: 0.5rem">Johannes Tauer</h1>
      <p>2. Vorstand</p>
      <br />
      <img style="width:65%" src="../assets/vorstand_2.png" />
      <h1 class="small-text-padding" style="margin-top: 0.5rem">Philipp Flierl</h1>
      <p>Kassier</p>
    </div>
    <div class="stacked-blocks-mobile">
      <h1 class="small-text-padding">Unsere Spender</h1>
      <h2 class="small-text-padding" style="color: #c62828">Erste Unterstützer</h2>
      <img class="support" src="../assets/ifix.png" />
      <img class="support" src="../assets/getec.png" />
      <img class="support" src="../assets/etvalu.png" />
    </div>
    <div class="stacked-blocks-mobile red">
      <h1 class="small-text-padding">Mehr von uns:</h1>
      <br />
    </div>
  </div>
</template>

<script>
export default {
  name: "Ueber",
  data() {
    return {
      msg: "Wir machen soziale Projekte groß. Ehrenamtlich."
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  margin-top: 2rem;
}
.red {
  background: #c62828;
  color: white;
}
.stacked-blocks-mobile {
  justify-content: center;
  align-items: center;
  padding: 1rem;
}
.influencer-img {
  width: calc(100% + 2rem);
  margin-left: -1em;
}
.support {
  width: 100%;
  padding: 2rem;
}
</style>
