<template>
  <div>
    <div class="header" style="padding:  2rem">
      <h1>
        Ebay-Spendenaktion für die Clowns-"Visiten" auf den Kinderstationen der Klinik St. Hedwig
        <br />
      </h1>Regensburg
    </div>
    <div class="stacked-blocks-mobile red" style="height: 100%">
      <h1 class="small-text-padding">Aktueller Stand der Spendensumme:</h1>
      <br />
      <h1>11.300 €</h1>
    </div>
    <div class="header" style="padding: 5rem; padding-top: 0rem;">
      <h1>
        Über das Projekt
        <br />
      </h1>
      <p
        class="regular-font"
        style="text-align: justify;"
      >Die Kinderstationen der Klinik St. Hedwig werden von den Clowns unseres Vereins schon seit 1999 besucht. "Dr. Blümli", "Dr. Augustine Zottl", "Mum" und "Prof. Fritz'l Fußtaps" bringen hier Kinder zum Lachen, die u.a. wg. Mukoviszidose, Diabetes oder Herz- und Nierenleiden behandelt werden. Die Kinder sind aufgrund ihrer Krankheiten häufig langfristige Patienten, die sich natürlich besonders über die schmerzfreie und lustige Abwechslung im Klinikalltag freuen. Obwohl wir schon so lange in dieser Klinik Clownsvisiten durchführen, ist die Finanzierung keineswegs gesichert. Wir finanzieren uns ausschließlich durch Spenden, Sponsoren- oder Mitgliedsbeiträgen und freuen uns daher über jede Spende, die dazu beiträgt, den Kindern in der St. Hedwig Klinik weiterhin ein Lachen zu schenken!</p>
    </div>
    <div class="stacked-blocks-mobile red" style="height: 100%">
      <h1 class="small-text-padding">Gespendete Versteigerungen</h1>
    </div>

    <div class="stacked-blocks-mobile" style="width:100%" v-if="cmsDataProp">
      <h1 class="small-text-padding">Gespendete Versteigerungen</h1>
      <div
        class="grid-element"
        style="padding:2rem; text-align:left"
        v-for="item in cmsDataProp.data.ebay"
      >
        <h3>{{item.title}}</h3>
        <p class="regular-font">Preis: {{item.price}}</p>
        <p class="regular-font">
          <b>{{item.status}}</b>
        </p>

        <a v-bind:href="item.url" class="regular-font">Zur Versteigerung</a>
        <br />
        <br />
        <img
          :src="item.img_url"
          style="border-radius: 1rem"
          width="200rem"
          height="150rem"
          v-bind:alt="pic"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Ebay",
  computed: {
    cmsDataProp() {
      const cmsData = this.$store.state.cmsData;
      return cmsData;
    }
  },
  data() {
    return {
      msg: "Ebay"
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
.regular-font {
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 0rem !important;
}
.grid-element {
  /*width: 23rem;
  float: left;*/
  margin: 1px;
  width: 20%;
  display: inline-block;
}
.centerwrapper {
  text-align: center;
  width: 100%;
  height: 80pt;
}
.social-media-influencer {
  width: 10%;
  float: left;
  margin-top: 4rem;
}
</style>
