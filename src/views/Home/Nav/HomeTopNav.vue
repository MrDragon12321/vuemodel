<template>
  <div class="home">
    <div class="top_nav">
      <TopNav />
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TopNav from '../../../components/TopNav.vue'
export default {
  components: { TopNav },
  data() {
    return {

    }
  },
}
</script>

<style lang="less">
.home {
  height: 100%;
  width: 100%;
  .top_nav {
    text-align: center;
    box-shadow: 0 0.2rem 1rem gray;
  }
  .main {
    padding-top: 1rem;
    width: 90%;
    height: calc(100% - 8.1rem);
    margin: auto;
  }
}
</style>