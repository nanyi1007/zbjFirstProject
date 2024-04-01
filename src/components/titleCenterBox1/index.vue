<template>
  <div class="titleCenterBox">
    <div class="title">
      <span class="title-span">{{ title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  props: ['title']
}
</script>

<style scoped lang="scss">
  .titleCenterBox {
    display: flex;
    justify-content: center;
    .title {
      width: 324px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      background-image: url('~@/assets/images/title3_img.png');
      background-repeat: no-repeat;
      background-size: 100% 100%;
      .title-span {
        font-size: 20px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        font-style: italic;
        color: #FFFFFF;
        background: linear-gradient(0deg, #7ED7FB 0%, #FFFFFF 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
</style>
