<template>
  <div class="header-box">
    <div class="system-name">虚拟电厂运营管理系统</div>
    <div class="user-info">
      <span class="user-name"><i class="el-icon-user" />{{ userName }}</span>
      <span class="exit-system" @click="exitSystem">退出</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      title: '',
      userName: ''
    }
  },
  watch: {
    $route: {
      handler(to, from) {
        this.title = to.meta.title
      },
      immediate: true
    }
  },
  created() {
    this.userName = JSON.parse(sessionStorage.getItem('userInfo'))?.staffNo
  },
  methods: {
    exitSystem() {
      this.$store.dispatch('user/logout', {}).then(() => {
        this.$router.push({ path: '/login' })
      }).catch(() => {

      })
    }
  }
}
</script>

<style scoped lang="scss">
.header-box {
  width: 100%;
  height: 118px;
  line-height: 100px;
  background-image: url("../../../assets/images/home.png");
  background-size: 100% 100%;
  position: relative;
  background-repeat: no-repeat;
  text-align: center;
  .system-name {
    font-size: 36px;
    font-family: SourceHanSansSC;
    font-weight: 500;
    color: #DBE5FA;
    text-shadow: 0 5px 10px rgba(6,69,77,0.61);
    letter-spacing: 0.1em;
  }
  .user-info {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-50%,-50%);
    .user-name {
      margin-right: 20px;
      .el-icon-user {
        margin-right: 5px;
      }
    }
    .exit-system:hover {
      color: #00D7FE;
      cursor: pointer;
    }
  }
}
</style>
