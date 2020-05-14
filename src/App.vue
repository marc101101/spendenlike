<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-prime-theme">
      <a class="navbar-brand bg-prime-theme" href="/">
        <img alt="logo" src="./assets/logo-white.png" width="50px" height="50px" />
        SPENDENLIKE
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon text-white"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li v-for="item in items" class="nav-item active">
            <a class="nav-link bg-prime-theme" v-bind:href="item.path">{{ item.name }}</a>
          </li>
        </ul>
      </div>
    </nav>

    <router-view />
  </div>
</template>

<script>
import router from "./router";

export default {
  name: "Dev",
  data() {
    return {
      items: router.options.routes.filter(e => {
        return e.name != "Home";
      })
    };
  }
};
</script>

<style>
/* latin-ext */
@font-face {
  font-family: "Bebas Neue";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local("Bebas Neue Regular"), local("BebasNeue-Regular"),
    url(../static/fonts/JTUSjIg69CK48gW7PXoo9WdhyyTh89ZNpQ.woff2)
      format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: "Bebas Neue";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local("Bebas Neue Regular"), local("BebasNeue-Regular"),
    url(../static/fonts/JTUSjIg69CK48gW7PXoo9WlhyyTh89Y.woff2) format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}

#app {
  font-family: "Bebas Neue";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbar-dark .navbar-toggler {
  border-color: rgba(0, 0, 0, 0);
}

.navbar-dark .navbar-brand {
  font-size: 1.8rem;
}

.nav-link {
  font-size: 1.4rem;
}

.bg-prime-theme {
  background-color: #c62828 !important;
  color: white !important;
}
</style>
