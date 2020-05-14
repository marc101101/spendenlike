<template>
  <div>
    <div v-if="isMobile()">
      <div id="background"></div>
      <div id="wrapper">
        <h1>
          <a href="/über">{{ about }}</a>
        </h1>
        <div id="donate">
          <h1>
            <a href="/spenden" style="color:#c62828">{{ donate }}</a>
          </h1>
        </div>
      </div>
    </div>
    <div v-else id="desktopBackground">
      <div class="background-desktop"></div>
      <div class="header-img-people">
        <img height="100%" width="100%" src="../assets/home-desktop.png" />
      </div>
      <div
        class="col-lg-6"
        style="float:left; background:#c62828; padding: 5rem; padding-top: 9rem"
      >
        <h1 class="desktop-font">
          WIR GEBEN
          <br />SOZIALEN PROJEKTEN
          <br />EINE BÜHNE.
        </h1>
        <p
          class="desktop-text"
        >SpendenLike e.V. ist ein gemeinnütziger Verein. Wir wollen unsere Mitmenschen durch das Internet mehr auf soziale Projekte und Probleme aufmerksamen machen. Dass Ziel dabei ist es, über die Dinge nachdenken und sich möglicherweise selbst zu engagieren.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      about: "Wer sind wir",
      donate: "Spenden"
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
a {
  color: white;
}

h1 {
  font-family: "Bebas Neue";
}

.desktop-font {
  color: white;
  text-align: left;
  font-size: 3.5rem;
}

.desktop-text {
  color: white;
  text-align: left;
  font-family: "Helvetica";
  font-size: 1.3rem;
}

.header-img-people {
  float: right;
  margin-top: -4.8rem;
  position: relative;
  width: 90vh;
  height: 100vh;
}

.background-desktop {
  width: 200vh;
  height: 100vh;
  background: #c62828;
  overflow: hidden;
  position: fixed;
}

/*
####### MOBILE VIEW
*/

#background {
  width: 100vw;
  height: 90vh;
  background: white;
  overflow: hidden;
  position: fixed;
}

#background::before {
  content: "";
  display: block;
  width: 200vw;
  height: 200vw;
  border-radius: 50%;
  background: #c62828;
  position: absolute;
  bottom: 50vh;
  left: 50%;
  transform: translateX(-50%);
}

#wrapper {
  position: relative;
  color: #fff;
  text-align: center;
  padding-top: 6rem;
}

#donate {
  color: #c62828;
  margin-top: 40vh;
}

/*
####### DESKTOP VIEW
*/

#desktopBackground {
  background: #c62828;
}

.row {
  display: flex;
  flex-wrap: wrap;
}

/* Create four equal columns that sits next to each other */
.column {
  flex: 25%;
  max-width: 25%;
}

.column img {
  vertical-align: middle;
  width: 100%;
}

/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 800px) {
  .column {
    flex: 50%;
    max-width: 50%;
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column {
    flex: 100%;
    max-width: 100%;
  }
}
</style>
