<template>
  <div>
    <div id="background"></div>
    <div id="wrapper">
      <h1><a href="/über">{{ about }}</a></h1>
      <div id="donate">
       <h1><a href="/spenden" style="color:red">{{ donate }}</a></h1>
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
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: white;
}

h1{
  font-family: 'Bebas Neue';
}
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
  background: red;
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
  color:red;
  margin-top: 10rem;
}

</style>
