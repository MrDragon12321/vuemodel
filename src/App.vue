<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  mounted() {

  },
  beforeDestroy() {
    console.log(123123);
    debugger
  }
}
</script>

<style>
body,
html {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font: normal 100% Helvetica, Arial, sans-serif;
  font-size:10px;
}

#app {
  height: 100%;
}
.cursorPoint {
  cursor: pointer;
}
</style>
