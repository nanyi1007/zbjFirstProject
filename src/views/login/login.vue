<template>
  <div id="login">
    <div class="login_box">
      <p class="title">河南展厅</p>
      <div class="login_user">
        <el-image
          style="width: 20px; height: 22px"
          :src="user_image"
          fit="fill"
        />
        <p class="user_title">用户名:</p>
      </div>
      <el-input v-model="user" />
      <div class="login_password">
        <el-image
          style="width: 20px; height: 22px"
          :src="password_image"
          fit="fill"
        />
        <p class="password_title">密码:</p>
      </div>
      <el-input v-model="password" show-password />
      <button class="login_btn" @click="login">登录</button>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      user_image: require('@/assets/login/login_user.png'),
      password_image: require('@/assets/login/login_password.png'),
      user: '',
      password: '',
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  mounted() {},
  methods: {
    login() {
      debugger
      const params = {
        account: this.user,
        password: this.password
      }
      this.$store.dispatch('user/login', params).then(() => {
        this.$router.push({ path: '/aggregated-resource-management/user-profile' });
        // this.$router.push({ path: this.redirect || '/' })
        this.loading = false
      }).catch(() => {
        this.loading = false
      })
    }
  }
}
</script>

<style scoped lang="scss">
#login{
  width: 100%;
  height: 100%;
  // min-width: 1900px;
  min-height: 900px;
  background-image: url('~@/assets/login/login_bg.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: relative;
  .login_box{
    width: 467px;
    height: 613px;
    background: rgba($color: #60738b, $alpha: 0.2);
    border-radius: 10px;
    border: solid 1px #354e6c;
    position: absolute;
    right: 40px;
    top: 16%;
    display: flex;
    justify-content: center;
    align-content: flex-start;
    flex-wrap: wrap;
    .title{
      width: 100%;
      height: 36px;
      font-size: 36px;
      line-height: 36px;
      color: #eeeeee;
      box-sizing: border-box;
      padding-left: 37px;
      margin-top: 87px;
    }
    .login_user{
      width: 100%;
      box-sizing: border-box;
      padding-left: 43px;
      margin-top: 69px;
      margin-bottom: 18px;
      line-height: 22px;
      position: relative;
      .user_title{
        position: absolute;
        top: 0;
        left: 75px;
        width: 50%;
        font-size: 24px;
        color: #ffffff;
      }
    }
    .el-input{
      margin: 0 45px 0 43px;
      box-sizing: border-box;
      width: 100%;
      background: rgba($color:#60738b,$alpha:0.3);
      border-radius: 8px;
      height: 53px;
      ::v-deep .el-input__inner{
        background-color: transparent !important;
        border-radius: 8px;
        height: 53px;
        border: none;
        color: #fff;
        text-indent: 24px;
        padding: 0;
        font-size: 16px;
      }
    }
    .login_password{
      width: 100%;
      box-sizing: border-box;
      padding-left: 43px;
      margin-top: 47px;
      margin-bottom: 18px;
      line-height: 22px;
      position: relative;
      .password_title{
        position: absolute;
        top: 0;
        left: 75px;
        width: 50%;
        font-size: 24px;
        color: #ffffff;
      }
    }
    .login_btn{
      width: 100%;
      height: 69px;
      box-sizing: border-box;
      margin: 83px 45px 0 43px;
      background: rgba($color:#00f4ff,$alpha:0.91);
      border: 8px;
      color: #fff;
      font-size: 24px;
      text-align: center;
      line-height: 69px;
      border-radius: 8px;
    }
  }

}
</style>
