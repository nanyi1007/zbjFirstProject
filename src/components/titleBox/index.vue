<template>
  <div class="title-box">
    <div class="content" />
    <span class="title">{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: 'TitleBox',
  props: ['title']
}
</script>

<style scoped lang="scss">
  .title-box {
    width: 100%;
    height: 41px;
    line-height: 41px;
    margin-bottom: 15px;
    position: relative;
    .content {
      width: 185px;
      height: 41px;
      background-image: url("~@/assets/images/title_img.png");
      position: absolute;
      top: 0;
    }
    .title {
      font-size: 20px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      font-style: italic;
      margin-left: 45px;
    }
  }
</style>
