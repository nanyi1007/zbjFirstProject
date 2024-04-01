<template>
  <div id="loyout">
    <el-container>
      <el-header>
        <layoutHeader />
      </el-header>
      <el-container class="in-el-container">
        <el-main>
          <transition name="main" mode="out-in">
            <SidebarMenu />
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

import layoutHeader from './components/header/header'
import SidebarMenu from './sidebarMenu'
export default {
  name: 'Layout',
  components: {
    layoutHeader,
    SidebarMenu
  },
  data() {
    return {
      isShowSidebar: true
    }
  },
  created() {
    this.isShowSidebar = this.$route.meta.isShowSidebar
  }
}
</script>

<style lang="scss">
$top: top;
$bottom: bottom;
$left: left;
$right: right;
$leftright: ($left, $right);
%w100 {
  width: 100%;
}

%h100 {
  height: 100%;
}

%cursor {
  cursor: pointer;
}

html, body, #loyout, .el-container, #asideNav, ul.el-menu {
  @extend %h100;
}
#loyout {
  width: 100%;
  height: 100%;
  background-image: url("~@/assets/images/bg1.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  .el-header {
    height: 115px !important;
    padding: 0 !important;
  }
  .el-container {
    overflow: auto;
  }
  .in-el-container {
    // padding: 0 1.5vh;
  }
  .el-main {
    // padding: 0 10px;
  }
  .main-container {
    padding: 20px 20px 20px 0px;
  }
  .show-sidebar {
    margin-left: 0;
  }
}

</style>
