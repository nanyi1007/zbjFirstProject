<template>
  <div class="resourceCheck">
    <el-dialog
      :title="title"
      :visible.sync="isVisible"
      top="7vh"
      width="65%"
    >
      <div class="labelDown">
        <div class="tableBox">
          <div class="header">
            <span class="title">基本信息</span>
          </div>
          <div class="box">
            <el-form
              ref="form"
              :model="queryParam"
              label-width="200"
              label-position="right"
              disabled
            >
              <el-row :gutter="10">
                <el-col :span="16">
                  <el-form-item label="资源名称：" prop="resourceName">
                    <div class="item-search-box">
                      <!--                    <span class="name name1">资源名称</span>：-->
                      <el-input
                        v-model="queryParam.resourceName"
                        class="longInput"
                        placeholder="请输入..."
                      />
                    </div>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="资源编号：" prop="resourceNo">
                    <div class="item-search-box">
                      <el-input
                        v-model="queryParam.resourceNo"
                        placeholder="请输入..."
                      />
                    </div>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="规格型号：" prop="resourceModel">
                    <div class="item-search-box">
                      <el-input
                        v-model="queryParam.resourceModel"
                        placeholder="请输入..."
                      />
                    </div>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="资源分类：" prop="resourceType">
                    <div class="item-search-box">
                      <el-select
                        v-model="queryParam.resourceType"
                        placeholder="请选择..."
                      >
                        <el-option label="电源类" value="01" />
                        <el-option label="负荷类" value="02" />
                        <el-option label="储能类" value="03" />
                      </el-select>
                    </div>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="响应级别：" prop="resourceLevel">
                    <div class="item-search-box">
                      <el-select
                        v-model="queryParam.resourceLevel"
                        placeholder="请选择..."
                      >
                        <el-option label="一级" value="01" />
                        <el-option label="二级" value="02" />
                        <el-option label="三级" value="03" />
                      </el-select>
                    </div>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="经度：" prop="latitude">
                    <div class="item-search-box">
                      <el-input
                        v-model="queryParam.latitude"
                        placeholder="请输入..."
                      />
                    </div>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="纬度：" prop="longitude">
                    <div class="item-search-box">
                      <el-input
                        v-model="queryParam.longitude"
                        placeholder="请输入..."
                      />
                    </div>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="资源状态：" prop="resourceStatus">
                    <div class="item-search-box">
                      <el-select
                        v-model="queryParam.resourceStatus"
                        placeholder="请选择..."
                      >
                        <el-option label="投运" value="01" />
                        <el-option label="建成未投运" value="02" />
                      </el-select>
                    </div>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="并网日期：" prop="gridDate">
                    <div class="item-search-box">
                      <el-date-picker
                        v-model="queryParam.gridDate"
                        type="date"
                        value-format="yyyy-MM-dd"
                        placeholder="选择日期时间"
                      />
                    </div>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="并网电压：" prop="gridVoltage">
                    <div class="item-search-box">
                      <el-input
                        v-model="queryParam.gridVoltage"
                        placeholder="请输入..."
                      >
                        <span slot="suffix">V</span>
                      </el-input>
                    </div>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="资源类型：" prop="resourceMold">
                    <div class="item-search-box">
                      <el-select
                        v-model="queryParam.resourceMold"
                        placeholder="请选择..."
                      >
                        <el-option label="发电" value="01" />
                        <el-option label="配电" value="02" />
                      </el-select>
                    </div>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="响应方式：" prop="adjustMode">
                    <div class="item-search-box">
                      <el-select
                        v-model="queryParam.adjustMode"
                        placeholder="请选择..."
                      >
                        <el-option label="手动" value="01" />
                        <el-option label="自动" value="02" />
                      </el-select>
                    </div>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="最大调节功率：" prop="dayAdjustPower">
                    <div class="item-search-box">
                      <el-input
                        v-model="queryParam.dayAdjustPower"
                        placeholder="请输入..."
                      > <span slot="suffix">kW</span></el-input>
                    </div>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="日可调里程：" prop="dayAdjustMileage">
                    <div class="item-search-box">
                      <el-input
                        v-model="queryParam.dayAdjustMileage"
                        placeholder="请输入..."
                      > <span slot="suffix">kWh</span></el-input>
                    </div>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </div>
        </div>
        <div class="tableBox">
          <div class="header">
            <span class="title">供电路径校核</span>
          </div>
          <div style="display: flex; margin-top: 20px">
            <div class="elCheck1">
              <span class="title1" style="margin-left: 20px">配网路径</span>
              <div class="box">
                <el-row>
                  <el-col :span="24">
                    <div class="item-search-box">
                      <span class="name name1">所属厂站</span>：
                      <el-input
                        v-model="queryParam.secondaryStation"
                        class="checkInput"
                        placeholder="请输入..."
                        disabled
                      />
                    </div>
                  </el-col>
                  <el-col :span="24">
                    <div class="item-search-box">
                      <span class="name name1">所属主变</span>：
                      <el-input
                        v-model="queryParam.secondaryTransformer"
                        class="checkInput"
                        placeholder="请输入..."
                        disabled
                      />
                    </div>
                  </el-col>
                  <el-col :span="24">
                    <div class="item-search-box">
                      <span class="name name1">所属馈线</span>：
                      <el-input
                        v-model="queryParam.secondaryFeeder"
                        class="checkInput"
                        placeholder="请输入..."
                        disabled
                      />
                    </div>
                  </el-col>
                  <el-col :span="24">
                    <div class="item-search-box">
                      <span class="name name1">配变铭牌号</span>：
                      <el-input
                        v-model="queryParam.secondaryRegistration"
                        class="checkInput"
                        placeholder="请输入..."
                        disabled
                      />
                    </div>
                  </el-col>
                </el-row>
              </div>
            </div>
            <div class="elCheck2">
              <span class="title1">主网路径</span>
              <div class="box">
                <el-row>
                  <el-col :span="24">
                    <div class="item-search-box">
                      <span class="name name1">所属厂站</span>：
                      <el-input
                        v-model="queryParam.personStation"
                        class="checkInput"
                        placeholder="请输入..."
                        disabled
                      />
                    </div>
                  </el-col>
                  <el-col :span="24">
                    <div class="item-search-box">
                      <span class="name name1">所属主变</span>：
                      <el-input
                        v-model="queryParam.personTransformer"
                        class="checkInput"
                        placeholder="请输入..."
                        disabled
                      />
                    </div>
                  </el-col>
                  <el-col :span="24">
                    <div class="item-search-box">
                      <span class="name name1">所属馈线</span>：
                      <el-input
                        v-model="queryParam.personFeeder"
                        class="checkInput"
                        placeholder="请输入..."
                        disabled
                      />
                    </div>
                  </el-col>
                </el-row>
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>

export default {
  name: 'resourceCheck',
  data() {
    return {
      isVisible: false,
      title: '资源核查--查看',
      queryParam: {}
    }
  },
  mounted() {
  },
  methods: {
    open(row) {
      this.isVisible = true
      this.queryParam = row
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../../styles/tableStyle';
.resourceCheck {
  .el-col-8 {
    height: 60px;
  }

  .el-col-16 {
    height: 60px;
  }

  .el-col-24 {
    height: 60px;
  }

  .buttonBox {
    margin-bottom: 20px;

    .el-button {
      font-size: 16px;
    }
  }

  .tableBox {
    width: 100%;
    margin-bottom: 20px;
  }

  .item-search-box {
    display: flex;
    justify-content: left;
    align-items: center;
    margin: 20px 0;

    .el-input {
      width: 100%;
    }

    .longInput {
      width: 100%;
    }

    .el-select {
      width: 100%;
    }

    .name {
      display: inline-block;
      width: 100px;
      text-align: right;
      font-size: 16px;
      color: #FFFFFF;
    }

    .name1 {
      width: 85px;
    }

  }

  ::v-deep .labelDown .el-form-item__label {
    line-height: 80px;
  }
  ::v-deep .el-form-item__label {
    font-size: 16px;
    color: #FFFFFF;
    font-weight: 500;
    width: 140px;
  }

  ::v-deep .labelDown .el-form-item__error {
    top: 75%;
    left: 104px;
  }
  .boxLength {
    .el-select {
      display: inline-block;
      position: absolute;
      width: 100%;
    }
    .el-input {
      width: 100%;
    }
    .el-range-editor.el-input__inner {
      width: 100%;
    }
  }

  ::v-deep .el-button.is-disabled, .el-button.is-disabled:focus, .el-button.is-disabled:hover {
    background-color: transparent;
    border: 1px solid #0396EA;
  }
  .page-footer {
    margin: 20px;
    text-align: center;
  }
  .header {
    width: 300px;
    height: 36px;
    line-height: 36px;
    background-image: url('~@/assets/polymerization/top1.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;

    .title {
      font-size: 17px;
      font-weight: 600;
      color: #FFFFFF;
      //border-left: 3px solid #0396EA;
      padding-left: 15px;
    }
  }

  .elCheck1 {
    width: 70%;

    .checkInput {
      width: 84%;
    }

    .bg-image-button {
      background-image: url("~@/assets/aggregated-resource-management/jt.png");
      background-size: cover;
      background-repeat: no-repeat;
      border: none;
      width: 60px;
      height: 40px;
      margin-left: 20px;
    }
  }

  .elCheck2 {
    width: 30%;
  }

  .title1 {
    //font-size: 18px;
    //font-weight: 600;
    display: inline-block;
    height: 15px;
    color: #FFFFFF;
    border-left: 3px solid #0396EA;
    padding-left: 15px;
  }

  .dialog-footer {
    display: flex;
    justify-content: center;
    align-items: center;

    .el-button {
      font-size: 16px;
      width: 100px;
    }

    .ensure {
      background-color: #0396EA;
      margin-right: 40px;
    }
  }
}

::v-deep .el-dialog__body {
  color: #FFFFFF !important;
}

::v-deep .el-button {
  background-color: transparent;
  border: 1px solid #0396EA;
  color: #FFFFFF !important;
}

::v-deep .el-button.active {
  background-color: #0396EA;
  border: 1px solid #0396EA;
  color: #FFFFFF !important;
}
</style>
