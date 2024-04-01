<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
    }
  },
  mounted() {

  }
}
</script>
<style lang="scss">
body {
  margin: 0;
  padding: 0;
  font-family: Microsoft YaHei, Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,  SimSun, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: #FFFFFF;

}
* {
  // font-size: 22px;
}
#app {
  //background: #2d3a4b;
}
.fade-enter-active,
.fade-leave-active {
  transition: all .2s ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
