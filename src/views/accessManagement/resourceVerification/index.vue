<template>
  <div class="applyForAccess">
    <div class="right-box-content">
      <div class="top">
        <div class="content-box-check">
          <div class="ifBox">
            <span class="input" style="margin-left: 20px">资源名称：</span>
            <el-input v-model="checkData.resourceName" class="inputBox" placeholder="请输入内容" clearable />
          </div>
          <div class="ifBox ifBox1">
            <span class="input">资源编号：</span>
            <el-input v-model="checkData.resourceNo" class="inputBox" placeholder="请输入内容" clearable />
          </div>
          <div class="ifBox ifBox2">
            <span class="input">资源分类：</span>
            <el-select
              v-model="checkData.resourceType"
              placeholder="请选择..."
              clearable
              class="resourceTypeBox"
            >
              <el-option label="电源类" value="01" />
              <el-option label="负荷类" value="02" />
              <el-option label="储能类" value="03" />
            </el-select>
          </div>
        </div>
        <div class="content-box-check content-box-check1">
          <div class="ifBox ifBox1">
            <span class="input" style="margin-left: 55px">状态：</span>
            <el-select v-model="checkData.status" placeholder="请选择..." clearable>
              <el-option label="未核查" value="01" />
              <el-option label="核查通过" value="02" />
              <el-option label="核查不通过" value="03" />
            </el-select>
          </div>
          <div class="ifBox ifBox2">
            <div class="btn-box">
              <el-button type="primary" size="medium" @click="query">查询</el-button>
              <el-button size="medium" @click="reset">重置</el-button>
            </div>
          </div>
        </div>
        <!--        <div class="button">-->
        <!--          <el-button type="primary" size="medium" @click="apply">接入申请</el-button>-->
        <!--        </div>-->
        <div class="table-box">
          <el-table :data="tableData">
            <el-table-column
              type="index"
              label="序号"
              align="center"
              width="55"
            />
            <el-table-column
              prop="resourceName"
              label="资源名称"
              align="center"
              show-overflow-tooltip
            />
            <el-table-column
              prop="resourceNo"
              label="资源编号"
              align="center"
              show-overflow-tooltip
            />
            <el-table-column
              prop="resourceType"
              label="资源分类"
              align="center"
              show-overflow-tooltip
            />
            <el-table-column
              prop="resourceLevel"
              label="响应级别"
              align="center"
              show-overflow-tooltip
            />
            <el-table-column
              prop="resourceStatus"
              label="资源状态"
              align="center"
              show-overflow-tooltip
            />
            <el-table-column
              prop="adjustMode"
              label="响应方式"
              align="center"
              show-overflow-tooltip
            />
            <el-table-column
              prop="dayAdjustPower"
              label="最大调节功率(kW)"
              align="center"
              show-overflow-tooltip
            />
            <el-table-column
              prop="status"
              label="状态"
              align="center"
            >
              <template slot-scope="scope">
                <span
                  :style="{ color:
                    scope.row.status === '02' ? '#02D992' :
                    scope.row.status === '03' ? '#D9AC0C' :
                    '' }"
                >
                  {{
                    scope.row.status === '01' ? '未核查' :
                    scope.row.status === '02' ? '核查通过' :
                    scope.row.status === '03' ? '核查不通过' :
                    ''
                  }}
                </span>
              </template>
            </el-table-column>
            <el-table-column prop="time1" label="操作" align="center" width="250px">
              <template slot-scope="scope">
                <span class="row" style="margin-right: 10px">
                  <el-link type="primary" @click="check(scope.row)">查看</el-link>
                </span>
                <span class="row" style="margin-right: 10px">
                  <el-link type="primary" @click="pass(scope.row)">核查通过</el-link>
                </span>
                <span class="row">
                  <el-link type="primary" @click="deleteM(scope.row.consId)">核查不通过</el-link>
                </span>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="page-footer">
          <el-pagination
            background
            :current-page="pageOption.pageNum"
            :page-sizes="[5, 10, 15, 20, 30]"
            :page-size="pageOption.pageSize"
            layout="total, sizes, prev, pager, next"
            :total="pageOption.total"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </div>
      </div>
    </div>
    <resourceCheck ref="resourceCheck" />
  </div>
</template>

<script>
import resourceCheck from '@/views/accessManagement/resourceVerification/resourceCheck'
export default {
  name: 'ApplyForAccess',
  components: { resourceCheck },
  data() {
    return {
      isVisible: false, // 审批驳回
      checkData: {},
      queryParam: {},
      props: {
        // 配置项（必选）
        value: 'orgNo',
        label: 'orgName',
        children: 'oorgVoList'
      },
      isClearable: true, // 可清空（可选）
      isAccordion: true, // 可收起（可选）
      valueId: '', // 初始ID（可选）
      treeTitle: '',
      optionData: [
        {
          id: 1,
          label: '湖北省',
          children: []
        }
      ],
      tableData: [
        {
          name: '东营供电公司',
          resourceName: '济南齐鲁文化创意基地充电站',
          resourceNo: '1201',
          consAdr: '济南汉峪6_4_人力资源产业园',
          resourceType: '负荷类',
          maxCap: '520',
          person: '李李',
          linkType: '18937452689',
          people: '李李',
          reason: '',
          status: '01',
          baselineStartTime: '2024-03-27 10:07:22',
          resourceLevel: '一级',
          adjustMode: '手动',
          resourceStatus: '投运',
          dayAdjustPower: '18.00'
        },
        {
          name: '济南供电公司',
          resourceName: '青岛市胶州市特锐德工业园',
          resourceNo: '1104',
          consAdr: '山东济南全运村中央广场',
          resourceType: '储能类',
          maxCap: '1000',
          person: '五四',
          linkType: '1546859623142',
          people: '五四',
          reason: '',
          status: '02',
          baselineStartTime: '2024-03-27 10:07:22',
          resourceLevel: '一级',
          adjustMode: '手动',
          resourceStatus: '投运',
          dayAdjustPower: '26.00'
        },
        {
          name: '济南供电公司',
          resourceName: '济南三明光伏',
          resourceNo: '178569878',
          consAdr: '汉峪金谷7_1济南广播电视台',
          resourceType: '电源类',
          maxCap: '321',
          person: '萧秋',
          linkType: '15689330971',
          people: '萧秋',
          reason: '设备故障',
          status: '03',
          baselineStartTime: '2024-03-27 10:07:22',
          resourceLevel: '一级',
          adjustMode: '手动',
          resourceStatus: '投运',
          dayAdjustPower: '23.00'
        }
      ],
      tableData2: [],
      pageOption: {
        pageNum: 1,
        pageSize: 10,
        total: 3
      },
      names: ''
    }
  },
  mounted() {
  },
  methods: {
    query() {
    },
    // 查看
    check(row) {
      this.$refs.resourceCheck.open(row)
    },
    // 核查通过
    pass() {
    },
    // 核查不通过
    deleteM() {
    },
    reset() {
    },
    // 分页
    handleSizeChange(val) {
      this.pageOption.pageSize = val
      this.pageOption.pageNum = 1
    },
    handleCurrentChange(val) {
      this.pageOption.pageNum = val
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../../styles/tableStyle';

.applyForAccess {
  width: 100%;
  height: 100%;
  color: #ffffff;
  display: flex;
  //overflow-y: auto;

  .right-box-content {
    width: 100%;
    height: 100%;
    //margin-left: 15px;
    background: rgba(0, 150, 234, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .top {
      height: 100%;
      padding: 20px 20px;
      background-image: url('~@/assets/polymerization/kuang2.png');
      background-repeat: no-repeat;
      background-size: 100% 100%;

      .content-box-title {
        height: 42px;
        line-height: 42px;
        padding-left: 50px;
        color: #ffffff;
        font-size: 20px;
        font-weight: 400;

        //background-size: 100% 100%;
        background-repeat: no-repeat;
      }

      .content-box-check {
        display: flex;
        //flex-wrap: wrap;
        align-items: center;
        justify-content: space-between; /* 这会在子元素之间提供空间，推动.btn-box到右侧 */
        width: 100%;
        margin: 5px 0 20px 0;

        .ifBox {
          width: 33%;
          display: flex;
          align-items: center;
        }

        .ifBox1 {
          justify-content: center;
        }

        .ifBox2 {
          justify-content: flex-end;
          margin-right: 20px;
        }

        .input {
          font-size: 17px;
        }

        .inputBox {
          //margin-right: 40px;
        }

        .btn-box {
          display: flex;
          justify-content: flex-end;
        }

        ::v-deep.el-input {
          width: 70%;
          height: 36px;
          color: #fff;
          line-height: 36px;
        }
        ::v-deep .resourceTypeBox .el-input {
          width: 100%;
          height: 36px;
          color: #fff;
          line-height: 36px;
        }

        ::v-deep.el-select {
          width: 76%;
        }

        ::v-deep.el-button {
          margin-left: 15px;
        }

        ::v-deep.el-button--small {
          padding: 9px 20px;
        }

        ::v-deep.el-button--primary {
          background: #0396EA;
          border: 1px solid #0396EA;
          border-radius: 5px;
        }
      }

      .content-box-check1 {
        display: flex;
        //flex-wrap: wrap;
        align-items: center;
        justify-content: space-between; /* 这会在子元素之间提供空间，推动.btn-box到右侧 */
        width: 100%;
        margin: 5px 0 20px 0;

        .ifBox {
          width: 33%;
          display: flex;
          align-items: center;
        }

        .ifBox1 {
          justify-content: flex-start;
        }

        .ifBox2 {
          justify-content: flex-end;
          margin-right: 20px;
        }

        .input {
          font-size: 17px;
        }

        .inputBox {
          //margin-right: 40px;
        }

        .btn-box {
          display: flex;
          justify-content: flex-end;
        }

        ::v-deep.el-input {
          width: 100%;
          height: 36px;
          color: #fff;
          line-height: 36px;
        }

        ::v-deep.el-select {
          width: 70%;
        }

        ::v-deep.el-button {
          margin-left: 15px;
        }

        ::v-deep.el-button--small {
          padding: 9px 20px;
        }

        ::v-deep.el-button--primary {
          background: #0396EA;
          border: 1px solid #0396EA;
          border-radius: 5px;
        }
      }

      .button {
        margin-left: 15px;
      }

      .table-box {
        height: calc(100% - 160px);
        margin-top: 10px;
        padding: 0 15px;
        overflow-y: auto;

        .disabled-link {
          color: #ccc;
          cursor: not-allowed;
        }
      }

      .page-footer {
        width: 100%;
        height: 32px;
        margin-top: 10px;
        text-align: center;
      }

      ::v-deep.el-table tbody tr:hover > td {
        background: rgba(0, 161, 255, 0.2);
      }

      ::v-deep.el-table .el-table__cell {
        padding: 5px 0;
      }
    }
  }

  ::v-deep.el-input__inner {
    background-color: transparent;
    color: #ffffff;
  }

  .refuseReason {
    .dialog-footer {
      width: 100%;
      text-align: center;
      height: 40px;
    }

    .ensure {
      margin-right: 40px;
    }

    ::v-deep .el-form-item__label {
      font-size: 16px;
      color: #FFFFFF;
      font-weight: 500;
      //line-height: 80px;
      width: 110px;
    }

    ::v-deep .el-input__inner {
      height: 40px;
      line-height: 40px;
      width: 80%;
    }
  }
}
</style>
