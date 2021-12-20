<template>
  <div class="topheader">
    <div>元通救援</div>
    <div class="info_group">
      <div class="user_info_username">{{$store.state.user_info.userName}}</div>
      <div
        class="exit_btn"
        @click="exit"
      >退出登录</div>
    </div>

  </div>
</template>

<script>
export default {
  methods: {
    exit() {
      this.$router.push('/signin')
      this.$store.dispatch('clearViews')
    }
  }
}
</script>

<style lang="less">
.topheader {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  color: #fff;
  font-size: 1.6rem;
  .info_group {
    display: flex;
    .user_info_username {
      color: red;
    }
    .exit_btn {
      margin-left: 1rem;
      cursor: pointer;
    }
  }
}
</style>