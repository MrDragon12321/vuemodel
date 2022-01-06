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
      :collapse="isCollapse"
    >
      <fragment
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
            <span slot="title">{{item.name}}</span>
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

        <el-menu-item
          :index="item.path"
          v-else
        >
          <i :class="item.iconCls"></i>
          <span slot="title">{{item.name}}</span>
          <el-badge
            v-if="item.value"
            class="item"
            :max='99'
            :is-dot="isCollapse"
            :value="item.value"
          />
        </el-menu-item>

        <!-- <subMenu v-else :data="item" :key="key"></subMenu> -->
      </fragment>
    </el-menu>

    <div
      style="color:#fff;text-align:center; cursor: pointer;"
      @click="showNav"
    >{{isCollapse?"》》":"《《"}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      homeRouters: [],
      isCollapse: false
    }
  },
  methods: {
    navSelect() {

      const route = this.$route
      this.$store.dispatch('addVisitedViews', route);
    },
    showNav() {
      this.isCollapse = !this.isCollapse
      this.$emit('navWidth', this.isCollapse)
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
.el-submenu{

}
.el-submenu,.el-menu-item{
  min-width:8rem ;
}
.item {
  margin-left: 1rem;
  margin-top: -0.5rem;
}
</style>