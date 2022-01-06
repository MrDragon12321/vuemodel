<template>
  <div class="welcome_title">
    <span>
      欢迎使用元通救援管理平台
    </span>

  </div>
</template>
<script>
export default {
  methods: {
    test() {
      this.$axios.post('/login').then(v=>{
        console.log(v);
      })
    }
  },
  mounted() {
  
  }

}
</script>
<style lang="less">
.welcome_title {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 5rem;
    font-weight: bold;
    font-family: "思源黑体CN";
    background-image: linear-gradient(45deg, blue, green 23%, red);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>