<template>
  <div class="header-box">
    <div class="system-name">虚拟电厂</div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      title: ''
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
  methods: {
    updateDateTime() {
      // 获取当前时间和日期
      const dateObj = new Date()
      this.date = dateObj.toLocaleDateString()
      this.time = dateObj.toLocaleTimeString()
    }
  }
}
</script>

<style scoped lang="scss">
.header-box {
  width: 100%;
  height: 90px;
  background-image: url("../../../assets/images/header.png");
  background-size: 100% 100%;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  position: relative;
  // background-image: url("~@/assets/images/system_header_bg.png");
  // background-size: 100% 100%;
  background-repeat: no-repeat;
  .system-name {
    // font-size: 37px;
    // line-height: 1.5;
    // background: linear-gradient(to bottom, #fff, #7ed7fb);
    // background-clip: text;
    // color: transparent;
    // text-align: center;

    position: absolute;
    top: 59%;
    left: 49.7%;
    transform: translate(-50%,-50%);
    font-size: 39px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #DBE5FA;
    //text-shadow: 0 2px 2px rgba(10,68,134,0.67);
    background: linear-gradient(0deg, #7ED7FB 0%, #FFFFFF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  img {
    width: 100%;
    height: 10vh;
  }
  .btnOrDate {
    color: #fff;
    height: 100%;
    position: absolute;
    top: 1.5vh;
    right: 20px;
    display: flex;
    align-items: center;
    .exit-box {
      display: flex;
      margin-right: 30px;
      cursor: pointer;
      img {
        width: 3vh;
        height: 3vh;
      }
      &:hover div{
        color: #409EFF;
      }
    }
    .date-info-box {
      .time{
        font-size: 2.2vh;
        margin: 5px 0;
      }
      .date {
        font-size: 2.2vh;
        margin: 5px 0;
      }
    }
  }
}
</style>
