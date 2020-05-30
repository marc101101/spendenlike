<template>
  <div>
    <div v-if="isMobile()">
      <div class="header">
        <h1>{{ msg }}</h1>
      </div>
      <div class="stacked-blocks-mobile red">
        <h1 class="small-text-padding">SpendenLike in Zahlen</h1>
        <br />
        <h1>> 4000€</h1>
        <p class="regular-font">für soziale Projekte gesammelt</p>
        <h1>> 30</h1>
        <p class="regular-font">Mitglieder im Verein</p>
        <h1>2017</h1>
        <p class="regular-font">gegründet</p>
      </div>
      <div class="stacked-blocks-mobile">
        <h1 class="small-text-padding">Creator</h1>
        <p class="regular-font">Unentgeldlich geben sie den Projekten Reichweite</p>
        <img class="influencer-img" src="../assets/julian.jpg" />
        <h1 class="small-text-padding" style="margin-top: 0.5rem">Julian Franklin</h1>

        <p class="regular-font">vlog / Fitness / Travel</p>
        <a href="https://www.youtube.com/channel/UCribK282VRISPzYnW1WIieA">
          <img style="width: 2rem;margin-bottom: 2rem;" src="../assets/youtube_red.png" />
        </a>
        <a href="https://www.instagram.com/the.franklin">
          <img
            style="width: 2rem;margin-bottom: 2rem;margin-left: 0.5rem"
            src="../assets/instagram_red.png"
          />
        </a>
        <a href="https://m.twitch.tv/thefranklinstream/profile">
          <img
            style="width: 2rem; margin-bottom: 2rem;margin-left: 0.5rem"
            src="../assets/twitch_red.png"
          />
        </a>
        <br />
        <p class="regular-font">
          139.000
          Abonenten /
          47.100
          Follower
          <br />/
          1.847
          Follower
        </p>
      </div>
      <div class="stacked-blocks-mobile red">
        <h1 class="small-text-padding">Unser Vorstand</h1>
        <br />
        <img style="width:65%" src="../assets/vorstand_1.png" />
        <h1 class="small-text-padding" style="margin-top: 0.5rem">Johannes Guder</h1>
        <p class="regular-font">Initiator, 1. Vorstand</p>
        <br />
        <img style="width:65%" src="../assets/vorstand_3.png" />
        <h1 class="small-text-padding" style="margin-top: 0.5rem">Johannes Tauer</h1>
        <p class="regular-font">2. Vorstand</p>
        <br />
        <img style="width:65%" src="../assets/vorstand_2.png" />
        <h1 class="small-text-padding" style="margin-top: 0.5rem">Philipp Flierl</h1>
        <p class="regular-font">Kassier</p>
      </div>
      <div class="stacked-blocks-mobile">
        <h1 class="small-text-padding">Unsere Spender</h1>
        <h2 class="small-text-padding" style="color: #c62828">Unsere Unterstützer</h2>
        <img class="support" src="../assets/ifix.png" />
        <img class="support" src="../assets/urbana.png" />
        <img class="support" src="../assets/etvalu.png" />
        <img class="support" src="../assets/insel.png" />
      </div>
      <div class="stacked-blocks-mobile red">
        <h1 class="small-text-padding">Mehr von uns:</h1>
        <br />
        <a href="https://www.instagram.com/spendenlike/">
          <img style="width: 2rem;margin-bottom: 2rem;" src="../assets/instagram.png" />
        </a>
        <a href="https://www.youtube.com/channel/UCz0S6k_Pcy5Wp_vlraC6C3w">
          <img
            style="width: 2rem;margin-bottom: 2rem; margin-left: 0.5rem"
            src="../assets/youtube.png"
          />
        </a>
        <a href="https://open.spotify.com/show/4V2sMOqfh0JdSYGBD8KeZ4?si=BeDVRxroQuiPHHPec4yKdg">
          <img
            style="width: 2rem; margin-bottom: 2rem; margin-left: 0.5rem"
            src="../assets/spotify.png"
          />
        </a>
      </div>
    </div>
    <div v-if="!isMobile()">
      <div class="header" style="padding: 5rem">
        <h1>
          Wir machen soziale Projekte groß.
          <br />Ehrenamtlich.
        </h1>
      </div>
      <div class="stacked-blocks-mobile red" style="height: 14rem">
        <h1 class="small-text-padding">SpendenLike in Zahlen</h1>
        <br />
        <div class="grid-element">
          <h1>> 4000€</h1>
          <p class="regular-font">für soziale Projekte gesammelt</p>
        </div>
        <div class="grid-element">
          <h1>> 30</h1>
          <p class="regular-font">Mitglieder im Verein</p>
        </div>
        <div class="grid-element">
          <h1>2017</h1>
          <p class="regular-font">gegründet</p>
        </div>
      </div>
      <div class="stacked-blocks-mobile" style="height:35rem">
        <h1 class="small-text-padding">Creator</h1>
        <p class="regular-font">Unentgeldlich geben sie den Projekten Reichweite</p>
        <div class="container">
          <div class="grid-element" style="float: left">
            <img class="influencer-img" style="width: 20rem; " src="../assets/julian.jpg" />
          </div>
          <div class="grid-element" style="float: left; text-align: left;  position: absolute; ">
            <h1 class="small-text-padding" style="margin-top: 0.5rem">Julian Franklin</h1>
            <p class="regular-font">vlog / Fitness / Travel</p>
            <a href="https://www.youtube.com/channel/UCribK282VRISPzYnW1WIieA">
              <img style="width: 2rem;margin-bottom: 2rem;" src="../assets/youtube_red.png" />
            </a>
            <a href="https://www.instagram.com/the.franklin">
              <img
                style="width: 2rem;margin-bottom: 2rem;margin-left: 0.5rem"
                src="../assets/instagram_red.png"
              />
            </a>
            <a href="https://m.twitch.tv/thefranklinstream/profile">
              <img
                style="width: 2rem; margin-bottom: 2rem;margin-left: 0.5rem"
                src="../assets/twitch_red.png"
              />
            </a>
            <br />
            <p class="regular-font" style="width: 26rem">
              139.000
              Abonenten /
              47.100
              Follower
              /
              1.847
              Follower
            </p>
          </div>
        </div>
      </div>
      <div>
        <br />
        <br />
      </div>
      <div class="stacked-blocks-mobile red" style="height: 30rem">
        <h1 class="small-text-padding">Unser Vorstand</h1>
        <br />
        <div class="grid-element">
          <img style="width:65%" src="../assets/vorstand_1.png" />
          <h1 class="small-text-padding" style="margin-top: 0.5rem">Johannes Guder</h1>
          <p class="regular-font">Initiator, 1. Vorstand</p>
        </div>
        <div class="grid-element">
          <img style="width:65%" src="../assets/vorstand_3.png" />
          <h1 class="small-text-padding" style="margin-top: 0.5rem">Johannes Tauer</h1>
          <p class="regular-font">2. Vorstand</p>
        </div>
        <div class="grid-element">
          <img style="width:65%" src="../assets/vorstand_2.png" />
          <h1 class="small-text-padding" style="margin-top: 0.5rem">Philipp Flierl</h1>
          <p class="regular-font">Kassier</p>
        </div>
      </div>
      <div class="stacked-blocks-mobile" style="width:100%">
        <h1 class="small-text-padding">Unsere Unterstützer</h1>
        <div class="grid-element" style="padding:2rem">
          <img class="support" src="../assets/ifix.png" />
        </div>
        <div class="grid-element" style="padding:2rem">
          <img class="support" src="../assets/urbana.png" />
        </div>
        <div class="grid-element" style="padding:2rem">
          <img class="support" src="../assets/etvalu.png" />
        </div>
        <div class="grid-element" style="padding:2rem">
          <img class="support" src="../assets/insel.png" />
        </div>
      </div>

      <div class="stacked-blocks-mobile red" style="width:100%">
        <h1 class="small-text-padding">Mehr von uns:</h1>
        <br />
        <div class="centerwrapper">
          <a href="https://www.instagram.com/spendenlike/">
            <img style="width: 2rem;margin-bottom: 2rem;" src="../assets/instagram.png" />
          </a>
          <a href="https://www.youtube.com/channel/UCz0S6k_Pcy5Wp_vlraC6C3w">
            <img
              style="width: 2rem;margin-bottom: 2rem; margin-left: 0.5rem"
              src="../assets/youtube.png"
            />
          </a>
          <a href="https://open.spotify.com/show/4V2sMOqfh0JdSYGBD8KeZ4?si=BeDVRxroQuiPHHPec4yKdg">
            <img
              style="width: 2rem; margin-bottom: 2rem; margin-left: 0.5rem"
              src="../assets/spotify.png"
            />
          </a>
        </div>
      </div>
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
  },
  methods: {
    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true;
      } else {
        return false;
      }
    }
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
