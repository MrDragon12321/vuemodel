<template>
  <div class="home">
    <el-container>
      <el-header>
        <TopHeader />
      </el-header>
      <el-container>
        <el-aside width="15rem">
          <!-- <el-menu :default-openeds="['1', '3']"> -->
          <LeftNav />
        </el-aside>
        <el-main>
          <div class="main_card">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import LeftNav from '@/components/LeftNav.vue'
import TopHeader from '@/components/TopHeader.vue'
export default {
  components: { LeftNav, TopHeader },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="less">
.home {
  height: 100%;
  .el-container {
    height: 100%;
    .el-header {
      height: 7rem !important;
      line-height: 7rem;
      box-shadow: 0 0.2rem 1rem gray;
      background-color: #545c64;
    }
    .el-container {
      .el-aside {
        background-color: #545c64;
        border-top: 0.1rem #fff solid;
      }
      .el-main {
        padding: 0;
        overflow: hidden;
        .main_card {
          padding: 1rem;
          width: 100%;
          height: 100%;
          box-shadow: 0 0 0.5rem gray;
          box-sizing: border-box;
        }
      }
    }
  }
}
</style>