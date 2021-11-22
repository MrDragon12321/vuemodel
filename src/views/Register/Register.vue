<template>
  <div class="register">
    <div class="register_card">
     <i
      class="el-icon-back"
      @click="goBack"
    ></i>
    
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less">
.register {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .register_card {
    width: 90rem;
    height: 55rem;
    box-shadow: 0 0 2rem gray;
    i{
        font-size: 3rem;
        color: green;
    }
  }
}
</style>