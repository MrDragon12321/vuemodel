<template>
  <div class="page1">
    {{d}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      d: {},
      timer: null
    }
  },
  methods: {
    getData() {
      this.$axios.get('/bs/busSituation.html').then((res) => {
        this.d = res
      })
    },
  },
  mounted() {

    this.getData()
    this.timer = setInterval(() => {
      setTimeout(this.getData(), 0)
    }, 60 * 1000)

  },
  beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
  }
}
</script>

<style lang="less">
.page1 {
  width: 100%;
  height: 100%;
}
</style>

