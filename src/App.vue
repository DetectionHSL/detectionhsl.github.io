<template>
<navbar/>
</template>

<script>
import navbar from "./components/Navbar"
export default {
  name: 'App',
  components: {
    navbar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
* {
  font-family: 'Roboto', sans-serif;
}
div, body, html{
  padding: 0;
  display: block;
  margin-top: 0px;
  overflow: hidden;
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>
