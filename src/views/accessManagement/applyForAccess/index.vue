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
            <span class="input">用户编号：</span>
            <el-input v-model="checkData.consNo" class="inputBox" placeholder="请输入内容" clearable/>
          </div>
          <div class="ifBox ifBox2">
            <span class="input">用户名称：</span>
            <el-input v-model="checkData.consNo" class="inputBox" placeholder="请输入内容" clearable/>
          </div>
        </div>
        <div class="content-box-check content-box-check1">
          <div class="ifBox">
            <span class="input" style="margin-left: 35px">市场类型：</span>
            <el-select v-model="checkData.type" placeholder="请选择..." clearable>
              <el-option label="调峰" value="调峰" />
              <el-option label="调频" value="调频" />
              <el-option label="填谷" value="填谷" />
            </el-select>
          </div>
          <div class="ifBox ifBox1">
            <span class="input" style="margin-left: 35px">状态：</span>
            <el-select v-model="checkData.status" placeholder="请选择..." clearable>
              <el-option label="审批中" value="01" />
              <el-option label="审批完成" value="02" />
              <el-option label="审批驳回" value="03" />
              <el-option label="撤销申请" value="04" />
            </el-select>
          </div>
          <div class="ifBox ifBox2">
            <div class="btn-box">
              <el-button type="primary" size="medium" @click="query">查询</el-button>
              <el-button size="medium" @click="reset">重置</el-button>
            </div>
          </div>
        </div>
        <div class="button">
          <el-button type="primary" size="medium" @click="apply">接入申请</el-button>
        </div>
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
              prop="consName"
              label="用户名称"
              align="center"
              show-overflow-tooltip
            />
            <el-table-column
              prop="consNo"
              label="用户编号"
              align="center"
              show-overflow-tooltip
            />
            <el-table-column
              prop="consAdr"
              label="用户地址"
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
              prop="maxCap"
              label="最大可调容量(kW)"
              align="center"
              width="160px"
              show-overflow-tooltip
            />
            <el-table-column
              prop="person"
              label="联系人"
              align="center"
              show-overflow-tooltip
            />
            <el-table-column
              prop="linkType"
              label="联系方式"
              align="center"
              show-overflow-tooltip
            />
            <el-table-column
              prop="people"
              label="法人"
              align="center"
              show-overflow-tooltip
            />
            <el-table-column
              prop="reason"
              label="原因"
              align="center"
              show-overflow-tooltip
            >
              <template slot-scope="scope">
                {{ scope.row.reason ? scope.row.reason : '-' }}
              </template>
            </el-table-column>
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
                      scope.row.status === '02' ? '审批完成' :
                        scope.row.status === '03' ? '审批驳回' :
                        scope.row.status === '04' ? '撤销申请' :
                          ''
                  }}
                </span>
              </template>
            </el-table-column>
            <el-table-column prop="change" label="变更记录" align="center">
              <template slot-scope="scope">
                <span class="row">
                  <el-link type="primary" @click="remember(scope.row)">记录</el-link>
                </span>
              </template>
            </el-table-column>
            <el-table-column prop="time1" label="操作" align="center" width="200px">
              <template slot-scope="scope">
                <span class="row" style="margin-right: 10px">
                  <el-link type="primary" @click="check(scope.row)">详情</el-link>
                </span>
                <span class="row" style="margin-right: 10px">
                  <el-link type="primary" @click="edit(scope.row)">变更</el-link>
                </span>
                <span class="row">
                  <el-link type="danger" @click="deleteM(scope.row.consId)">撤回</el-link>
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
    <changeRecord ref="changeRecord" />
  </div>
</template>

<script>
import addApply from '@/views/accessManagement/applyForAccess/addApply'
import changeRecord from '@/views/accessManagement/applyForAccess/changeRecord'
export default {
  name: 'ApplyForAccess',
  components: { addApply, changeRecord },
  data() {
    return {
      checkData: {},
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
          status: '01'
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
          status: '02'
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
          status: '03'
        },
        {
          name: '青岛供电公司',
          consName: '青岛市黄岛区供电公司城区供电中心',
          consNo: '1687664573407',
          consAdr: '青岛市黄岛区供电公司城区供电中心',
          marketType: '调峰',
          maxCap: '1256',
          person: '张迪',
          linkType: '19049859234',
          people: '张迪',
          reason: '',
          status: '04'
        }
      ],
      tableData2: [],
      pageOption: {
        pageNum: 1,
        pageSize: 10,
        total: 4
      },
      names: ''
    }
  },
  mounted() {
  },
  methods: {
    query() {},
    // 接入申请--新增
    apply() {
      this.$refs.addApply.open('add')
    },
    // 操作--变更
    edit() {
      this.$refs.addApply.open('edit')
    },
    // 操作--详情
    check() {
      this.$refs.addApply.open('view')
    },
    deleteM() {},
    // 变更记录--记录
    remember() {
      this.$refs.changeRecord.open()
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
        height: calc(100% - 210px);
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
}
</style>
