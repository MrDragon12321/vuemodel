<template>
  <div>
    <el-menu
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :unique-opened="true"
      router
      :default-active="$route.path"
      @select="navSelect"
    >
      <div
        v-for="(item, index) in homeRouters"
        :key="index"
      >
        <!--二级菜单-->

        <el-submenu
          :index="index+''"
          v-if='!item.leaf'
        >
          <template slot="title">
            <i :class="item.iconCls"></i>
            <span>{{item.name}}</span>
          </template>
          <el-menu-item
            :index="child.path"
            :key="indexs"
            v-for="(child, indexs) in item.children"
          >
            {{child.name}}
            <el-badge
              v-if="child.value"
              class="item"
              :max='99'
              :value="child.value"
            />
          </el-menu-item>

        </el-submenu>

        <!--一级菜单-->
        <template v-else>
          <el-menu-item :index="item.path">
            <template slot="title">
              <span>{{item.name}}</span>
              <el-badge
                v-if="item.value"
                class="item"
                :max='99'
                :value="item.value"
              />
            </template>
          </el-menu-item>
        </template>
        <!-- <subMenu v-else :data="item" :key="key"></subMenu> -->
      </div>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      homeRouters: [],
    }
  },
  methods: {
    navSelect() {
      if (this.$route.name) {
        const route = this.$route
        this.$store.dispatch('addVisitedViews', route);
      }
    },

  },
  // created() {

  //   const route = this.$route
  //   this.$store.dispatch('addVisitedViews', route);
  // },

  /*  computed: {
      activeIndex() {
        const { name } = this.$route;
       console.log(name);
       return null
      },
    }, */
  mounted() {

    this.homeRouters = this.$router.options.routes[3].children
  },
  // watch: {
  //   $route: {
  //     handler(val, oldval) {
       
  //         const route = this.$route
  //         this.$store.dispatch('addVisitedViews', route);
        
  //     },
  //     // 深度观察监听
  //     deep: true
  //   }
  // }
}
</script>

<style lang="less">
.el-menu {
  .el-submenu {
    width: 20rem;
  }
  .el-menu-item {
    width: 20rem !important;
  }
}
.item {
  margin-left: 1rem;
  margin-top: -0.5rem;
}
</style>