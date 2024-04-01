<template>
  <div class="sidebar-menu">
    <div class="left-box">
      <el-menu
        :default-active="defaultActive"
        class="el-menu-vertical-demo"
        text-color="#fff"
        :unique-opened="true"
        router
      >
        <!-- router -->
        <el-menu-item index="/firstPage" class="el-menu-item-alone">
          <template slot="title">
            <img src="@/assets/sidebar/index.png" alt="">
            <span class="title-tip">首页</span>
          </template>
        </el-menu-item>
        <!--        <el-menu-item index="/home" class="el-menu-item-alone">-->
        <!--          <template slot="title">-->
        <!--            <img src="@/assets/sidebar/index.png" alt="">-->
        <!--            <span class="title-tip">首页</span>-->
        <!--          </template>-->
        <!--        </el-menu-item>-->
        <el-submenu index="2">
          <template slot="title">
            <img src="@/assets/sidebar/cl.png" alt="">
            <span class="title-tip">可调资源管理</span>
          </template>
          <el-menu-item index="/aggregated-resource-management/user-profile">资源用户档案</el-menu-item>
          <el-menu-item index="/aggregated-resource-management/polymerization">物联档案管理</el-menu-item>
          <el-menu-item index="/aggregated-resource-management/powerPlantFile">虚拟电厂档案</el-menu-item>
          <el-menu-item index="/aggregated-resource-management/dataMonitoring">量测数据监视</el-menu-item>
          <el-menu-item index="/visualResource">可视化资源监视</el-menu-item>
          <el-menu-item index="/aggregated-resource-management/photovoltaic">光伏资源监视</el-menu-item>
          <el-menu-item index="/storedEnergy/home">储能资源监视</el-menu-item>
          <el-menu-item index="/aggregated-resource-management/charging-pile">充电桩资源监视</el-menu-item>
          <el-menu-item index="/aggregated-resource-management/airResourceMonitoring">空调资源调控</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <img src="@/assets/sidebar/cl.png" alt="">
            <span class="title-tip">电厂接入申请</span>
          </template>
          <el-menu-item index="/accessManagement/applyForAccess">电厂接入申请</el-menu-item>
          <el-menu-item index="/accessManagement/ExitApplication">电厂退出申请</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <img src="@/assets/sidebar/cl.png" alt="">
            <span class="title-tip">电厂接入管理</span>
          </template>
          <el-menu-item index="/accessManagement/applyForAuditing">电厂接入审核</el-menu-item>
          <el-menu-item index="/accessManagement/resourceVerification">电厂资源核查</el-menu-item>
          <el-menu-item index="/accessManagement/ExitManagement">电厂退出管理</el-menu-item>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">
            <img src="@/assets/sidebar/cl.png" alt="">
            <span class="title-tip">资源聚合管理</span>
          </template>
          <el-menu-item index="/aggregationOptimization/userBaseline">用户基线管理</el-menu-item>
          <el-menu-item index="/aggregationOptimization/optimize">资源评估</el-menu-item>
          <el-menu-item index="/aggregationOptimization/scheme">协同方案</el-menu-item>
          <el-menu-item index="/aggregationOptimization/aggregation">聚合优化</el-menu-item>
        </el-submenu>
        <el-submenu index="6">
          <template slot="title">
            <img src="@/assets/sidebar/proxy1.png" alt="">
            <span class="title-tip">代理合约管理</span>
          </template>
          <el-menu-item index="/proxyContract/proxy">代理合约管理</el-menu-item>
          <el-menu-item index="/proxyContract/template">标准合同模板</el-menu-item>
        </el-submenu>
        <el-submenu index="7">
          <template slot="title">
            <img src="@/assets/sidebar/jysbgl.png" alt="">
            <span class="title-tip">交易申报管理</span>
          </template>
          <el-menu-item index="/declaration/marketplace">市场信息管理</el-menu-item>
          <el-menu-item index="/declaration/synergy">协同计划管理</el-menu-item>
          <el-menu-item index="/declaration/transaction">日前交易申报</el-menu-item>
          <!--          <el-menu-item index="/declaration/userBaseline">用户基线管理</el-menu-item>-->
        </el-submenu>
        <el-submenu index="8">
          <template slot="title">
            <img src="@/assets/sidebar/xthdxy.png" alt="">
            <span class="title-tip">协同互动响应</span>
          </template>
          <el-menu-item index="/coordinationInteraction/schedulingPlan">日前调度计划</el-menu-item>
          <el-menu-item index="/coordinationInteraction/realTimeControl">实时协同调控</el-menu-item>
          <el-menu-item index="/coordinationInteraction/powerMonitoring">聚合功率监视</el-menu-item>
        </el-submenu>
        <el-submenu index="9">
          <template slot="title">
            <img src="@/assets/sidebar/rqyjgl.png" alt="">
            <span class="title-tip">结算管理</span>
          </template>
          <el-menu-item index="/dailyAndMonthlyManagement/dailyClearance">用户日清管理</el-menu-item>
          <el-menu-item index="/dailyAndMonthlyManagement/settleAccount">零售分摊结算</el-menu-item>
          <el-menu-item index="/dailyAndMonthlyManagement/billManagement">月结账单管理</el-menu-item>
        </el-submenu>
        <el-submenu index="10">
          <template slot="title">
            <img src="@/assets/sidebar/rqyjgl.png" alt="">
            <span class="title-tip">系统管理</span>
          </template>
          <el-menu-item index="/systemManagement/userRegulation">用户调节管理</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <div class="right-box">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SidebarMenu',
  data() {
    return {
      defaultActive: ''
    }
  },
  created() {
    this.defaultActive = this.$route.path
  },
  mounted() {
  },
  methods: {}
}
</script>

<style scoped lang="scss">

.sidebar-menu {
  width: 100%;
  height: calc(100vh - 130px);

  .left-box {
    width: 220px;
    height: 100%;
    float: left;
    overflow-y: auto;

    background: rgba(3, 150, 234, 0.15);
    font-size: 18px;

    .title-tip {
      margin-left: 10px;
    }

    .el-menu-vertical-demo {
      background: transparent;
      border: none;
    }

    .el-menu-item-alone,
    .el-submenu__title {
      width: 100%;
      height: 50px !important;
      color: white;
      font-size: 16px !important;
      font-weight: normal !important;
      line-height: 50px !important;
      text-align: left;
      box-sizing: border-box;
      cursor: pointer;
      margin-bottom: 10px;
      margin-top: 0 !important;
    }

    .el-menu-item {
      height: 50px !important;
      color: white;
      font-size: 16px !important;
      font-weight: normal !important;
      line-height: 50px !important;
      min-width: 0 !important;
      margin-bottom: 10px;
    }

    ::v-deep .el-menu {
      background: transparent !important;
    }

    .el-menu-item.is-active {
      color: #fff;
      background: #0396EA;
    }

    .el-menu-item:focus {
      background: #0396EA;
    }

    ::v-deep .el-menu-item-group__title {
      padding: 0 !important;
    }

    ::v-deep .el-submenu__title {
      padding-left: 29px;
      height: 50px !important;
      font-size: 16px !important;
      font-weight: normal !important;
      line-height: 50px !important;
      cursor: pointer;
      margin-bottom: 10px;
      margin-top: 0 !important;
    }

    ::v-deep .el-submenu__title:hover {
      background: #0396EA !important;
      color: #fff !important;
    }

    ::v-deep .el-menu-item:hover {
      background: #0396EA !important;
      color: #fff !important;
    }
  }

  .right-box {
    width: calc(100% - 220px);
    height: 100%;
    float: left;
    padding: 0 20px;
    overflow: auto;
  }
}
</style>
