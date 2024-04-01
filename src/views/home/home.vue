<!--
    @author: chenhui
    @date: 2023/8/29
    @Desc:
-->
<template>
  <div class="big">
    <div class="contents">
      <div class="left">
        <div class="uls">
          <!-- <el-menu
            :default-active="activeindex"
            class="el-menu-vertical-demo"
            background-color="#002351"
            text-color="#fff"
            active-text-color="#ffffff"
            :unique-opened="true"
            @open="handleOpen"
            router
          >
            <el-submenu index="1" >
                <i class="el-icon-menu"></i>
                <span>首页</span>
            </el-submenu>
            <el-submenu index="2" >
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>聚合资源管理</span>
              </template>
              <el-menu-item index=""
                >区域碳排放量</el-menu-item
              >


            </el-submenu>

          </el-menu> -->
<!--          <el-menu-->
<!--            default-active="2"-->
<!--            class="el-menu-vertical-demo"-->
<!--            background-color="#002351"-->
<!--            text-color="#fff"-->
<!--            active-text-color="#ffd04b"-->
<!--            @open="handleOpen"-->
<!--            @close="handleClose"-->
<!--          >-->
<!--            <el-menu-item index="1">-->
<!--              &lt;!&ndash; <i class="el-icon-menu"></i> &ndash;&gt;-->
<!--              <span slot="title">首页</span>-->
<!--            </el-menu-item>-->
<!--            <el-submenu index="2">-->
<!--              <template slot="title">-->
<!--                &lt;!&ndash; <i class="el-icon-menu"></i> &ndash;&gt;-->
<!--                <span>聚合资源管理</span>-->
<!--              </template>-->
<!--              <el-menu-item-group>-->
<!--                <el-menu-item index="1-1">选项1</el-menu-item>-->
<!--                <el-menu-item index="1-2">选项2</el-menu-item>-->
<!--              </el-menu-item-group>-->
<!--            </el-submenu>-->
<!--          </el-menu>-->
        </div>
      </div>
      <div class="rightboxs">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { getLinYingData } from '../../api/home.js'
import { getTotal } from '../../api/jiyuan.js'
import { queryScreenData } from '@/api/LanKao.js'
import { getDataChart2 } from '@/api/opticalStorageChargingProject'
import { queryPvMonitoringData } from '@/api/PowerSupplyStation'
import { getTLData, getTLData1 } from '@/api/tengLong'
export default {
  name: 'Home',
  data() {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
.big {
  width: 100%;
  height: calc(100vh - 130px);
  margin-left: -20px;
  .contents {
    width: 100%;
    height: 100%;


    .left {
      width: 254px;
      height: 100%;
      float: left;
      overflow-y: auto;
      background: #002351;
      font-size: 18px;
      .el-menu{
        border: none;
      }

      .el-menu-item:hover{
        background: #0096e8 !important;
      }
      .el-submenu:hover{
        background: #0096e8 !important;

      }
      .is-active{
        background: #0096e8 !important;
        color: #fff !important;
      }
    }
    .rightboxs {
      // flex: 1;
      width: calc(100% - 254px);
      height: 100%;
      float: left;
    }
  }
}
</style>
