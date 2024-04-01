<!--
    @author: chenhui
    @date: 2023/8/29
    @Desc: echarts中的统计栏
-->
<template>
  <div class="index">
    <div class="total-name">
      <slot name="name" />
    </div>
    <div class="total-value">
      <span class="value"><slot name="value" /></span>
      <span class="unit"><slot name="unit" /></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {}
  },
  created() {

  },
  methods: {}
}
</script>

<style scoped lang="scss">
.index {
  width: 352px;
  height: 75px;
  display: flex;
  align-items: center;
  background-image: url("~@/assets/opticalStorageChargingProject/total_chart_bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .total-name {
    font-size: 20px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #FFFFFF;
    padding-left: 27px;
    margin-right: 10px;
  }
  .total-value {
    margin-left: 15px;
    .value {
      font-size: 34px;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: #50DBFF;
    }
    .unit {
      margin-left: 5px;
      color: #50DBFF;
      font-size: 20px;
    }
  }
}
</style>
