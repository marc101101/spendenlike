<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-prime-theme">
       <a class="navbar-brand bg-prime-theme" href="/">
      <img src="./assets/logo-white.png" width="50px" height="50px">
     SPENDENLIKE</a>
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
            <a class="nav-link bg-prime-theme" v-bind:href="item.path">
              {{ item.name }}
            </a>
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
      items: router.options.routes
    };
  },
  methods: {
    generateSitemap: function() {
      return Router.options.routes;
    }
  }
};
</script>

<style>
#app {
  font-family: "Bebas Neue";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbar-dark .navbar-toggler {
    border-color: rgba(0,0,0,0);
}

.navbar-dark .navbar-brand {
    font-size: 1.8rem;
}

.nav-link{
  font-size: 1.4rem;
}

.bg-prime-theme{
  background-color: #c62828 !important;
  color: white !important;
}
</style>
