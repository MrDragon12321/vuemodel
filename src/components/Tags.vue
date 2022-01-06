<template>
  <div style="height:3.2rem">
    <el-tag
      :key="tag.path"
      v-for="tag in Array.from(visitedViews)"
      closable
      :disable-transitions="true"
      @close="delSelectTag(tag)"
      :effect="$route.path==tag.path?'plain':'light'"
    
    >
      <router-link :to="tag.path">
        {{tag.name}}
      </router-link>
    </el-tag>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  }, 
  methods: {
    isActive(route) {
      return route.path == this.$route.path
    },
    delSelectTag(route) {//先提交删除数据的方法,数组删除出掉数据后，如果关闭的是当前打开的路由需要将路由改为数组最后一次push进去的路由
      this.$store.dispatch('delVisitedViews', route).then((views) => {
        if (this.isActive(route)) {//只有在关闭当前打开的标签页才会有影响
          let lastView = views.slice(-1)[0]//选取路由数组中的最后一位
          if (lastView) {
            this.$router.push(lastView);
          }
        }
      })
    }

  },
  computed: {
    visitedViews() {//store中取值
      return this.$store.state.visitedviews
    }
  },

}
</script>
<style lang="less">
.el-tag + .el-tag {
  margin-left: 1rem;
}
a {
  text-decoration: none;
}
</style>