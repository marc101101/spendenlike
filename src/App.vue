<template>

  <div id="app">
    <ul id="example-1">
      <li v-for="item in items">
        <a v-bind:href="item.path">{{ item.name }}</a>
      </li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
import router from './router'

export default {
  name: 'Dev',
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
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
