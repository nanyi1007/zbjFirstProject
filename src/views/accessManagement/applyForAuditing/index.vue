<template>
  <div class="applyForAccess">
    <div class="right-box-content">
      <div class="top">
        <div class="content-box-check">
          <div class="ifBox">
            <span class="input" style="margin-left: 20px">运营商名称：</span>
            <el-input v-model="checkData.consNo" class="inputBox" placeholder="请输入内容" clearable/>
          </div>
          <div class="ifBox ifBox1">
            <span class="input">运营商编号：</span>
            <el-input v-model="checkData.consNo" class="inputBox" placeholder="请输入内容" clearable/>
          </div>
          <div class="ifBox ifBox2">
            <span class="input">申请日期：</span>
            <el-date-picker
              v-model="checkData.baselineStartTime"
              class="form-item-inner"
              clearable
              placeholder="请选择申请日期"
              type="date"
              value-format="yyyy-MM-dd"
            />
          </div>
        </div>
        <div class="content-box-check content-box-check1">
          <div class="ifBox ifBox1">
            <span class="input" style="margin-left: 70px">状态：</span>
            <el-select v-model="checkData.status" placeholder="请选择..." clearable>
              <el-option label="审批中" value="01" />
              <el-option label="审批通过" value="02" />
              <el-option label="审批驳回" value="03" />
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
              prop="name"
              label="运营商名称"
              align="center"
              show-overflow-tooltip
            />
            <el-table-column
              prop="consNo"
              label="运营商编号"
              align="center"
              show-overflow-tooltip
            />
            <el-table-column
              prop="marketType"
              label="市场类型"
              align="center"
              show-overflow-tooltip
            />
            <el-table-column
              prop="baselineStartTime"
              label="申请日期"
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
                  :style="{ color: scope.row.status === '01' ? '#3D95E8' :
                    scope.row.status === '02' ? '#02D992' :
                    scope.row.status === '03' ? '#D9AC0C' :
                    scope.row.status === '04' ? '' :
                    '' }"
                >
                  {{
                    scope.row.status === '01' ? '审批中' :
                      scope.row.status === '02' ? '审批通过' :
                        scope.row.status === '03' ? '审批驳回' :
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
                  <el-link type="primary" @click="pass(scope.row)">审批通过</el-link>
                </span>
                <span class="row">
                  <el-link type="primary" @click="deleteM(scope.row.consId)">审批驳回</el-link>
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
    <addApply ref="addApply" />
    <el-dialog class="refuseReason" title="审批驳回原因" :visible.sync="isVisible " width="25%" :modal="false" top="25vh">
      <el-form
        ref="form"
        :model="queryParam"
        label-width="100px"
        label-position="right"
      >
        <el-row>
          <el-col :span="24">
            <el-form-item label="原因：" prop="reason">
              <el-input
                v-model="queryParam.reason"
                placeholder="输入驳回的理由"
                clearable
              />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div class="dialog-footer">
        <el-button type="primary" class="ensure" @click="refuseReasonEnsure">确定</el-button>
        <el-button class="cancel" @click="refuseReasonCancel">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import addApply from '@/views/accessManagement/applyForAuditing/addApply'
export default {
  name: 'ApplyForAccess',
  components: { addApply },
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
          consName: '济南汉峪6_4_人力资源产业园',
          consNo: '1683769326361',
          consAdr: '济南汉峪6_4_人力资源产业园',
          marketType: '调峰',
          maxCap: '520',
          person: '李李',
          linkType: '18937452689',
          people: '李李',
          reason: '',
          status: '01',
          baselineStartTime: '2024-03-27 10:07:22'
        },
        {
          name: '济南供电公司',
          consName: '山东济南全运村中央广场',
          consNo: '1681268118350',
          consAdr: '山东济南全运村中央广场',
          marketType: '调频',
          maxCap: '1000',
          person: '五四',
          linkType: '1546859623142',
          people: '五四',
          reason: '',
          status: '02',
          baselineStartTime: '2024-03-27 10:07:22'
        },
        {
          name: '济南供电公司',
          consName: '汉峪金谷7_1济南广播电视台',
          consNo: '1692606778751',
          consAdr: '汉峪金谷7_1济南广播电视台',
          marketType: '填谷',
          maxCap: '321',
          person: '萧秋',
          linkType: '15689330971',
          people: '萧秋',
          reason: '设备故障',
          status: '03',
          baselineStartTime: '2024-03-27 10:07:22'
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
    query() {},
    // 查看
    check() {
      this.$refs.addApply.open('view')
    },
    // 审批通过
    pass() {},
    // 审批驳回
    deleteM() {
      this.isVisible = true
    },
    refuseReasonEnsure() {
      this.isVisible = false
    },
    refuseReasonCancel() {
      this.isVisible = false
    },
    reset() {},
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
          justify-content: flex-end;
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
