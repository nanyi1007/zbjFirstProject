// 接入申请按钮
<template>
  <div>
    <el-dialog :title="title" :visible.sync="isVisible " width="60%" :modal="false" top="0.5vh">
      <div class="tableBox">
        <div class="header">
          <span class="title">运营商信息列表</span>
        </div>
        <div class="buttonBox">
          <el-button v-if="type === 'add'" type="primary" class="ensure" @click="addOperator">新增</el-button>
        </div>
        <div class="table-box">
          <el-table :data="tableData1">
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
              prop="code"
              label="统一社会信用代码"
              width="180px"
              align="center"
              show-overflow-tooltip
            />
            <el-table-column
              prop="people"
              label="法人"
              align="center"
              show-overflow-tooltip
            />
            <el-table-column prop="time1" label="操作" align="center" width="200px">
              <template slot-scope="scope">
                <span class="row">
                  <el-link type="primary" @click="lookOperator(scope.row)">详情</el-link>
                </span>
                <span class="row" style="margin: 0 10px">
                  <el-link v-if="type !== 'view'" type="primary" @click="editOperator(scope.row)">修改</el-link>
                </span>
                <span class="row">
                  <el-link v-if="type !== 'view'" type="danger" @click="deleteOperator(scope.row.consId)">删除</el-link>
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
      <div class="tableBox">
        <div class="header">
          <span class="title">用户信息列表</span>
        </div>
        <div class="buttonBox">
          <el-button v-if="type === 'add'" type="primary" class="ensure" @click="addUser">新增</el-button>
        </div>
        <div class="table-box">
          <el-table :data="tableData2">
            <el-table-column
              type="index"
              label="序号"
              align="center"
              width="55"
            />
            <el-table-column
              prop="orgNo"
              label="供电单位"
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
              prop="elecAddr"
              label="用户地址"
              align="center"
              show-overflow-tooltip
            />
            <el-table-column
              prop="contractCap"
              label="合同容量"
              align="center"
              show-overflow-tooltip
            />
            <el-table-column
              prop="rrioCode"
              label="用户分类"
              align="center"
              show-overflow-tooltip
            />
            <el-table-column
              prop="regulatoryMode"
              label="调控模式"
              align="center"
              show-overflow-tooltip
            />
            <el-table-column prop="time1" label="操作" align="center" width="200px">
              <template slot-scope="scope">
                <span class="row">
                  <el-link type="primary" @click="lookUser(scope.row)">详情</el-link>
                </span>
<!--                <span class="row" style="margin-right: 10px">-->
<!--                  <el-link type="primary" @click="editUser(scope.row)">修改</el-link>-->
<!--                </span>-->
                <span class="row" style="margin-left: 10px">
                  <el-link v-if="type !== 'view'" type="danger" @click="deleteUser(scope.row.consId)">删除</el-link>
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
    </el-dialog>
    <operatorDialog ref="operatorDialog" />
    <addUserDialog ref="addUserDialog" />
    <userDialog ref="userDialog" />
  </div>
</template>

<script>
import operatorDialog from '@/views/accessManagement/applyForAccess/operatorDialog'
import addUserDialog from '@/views/accessManagement/applyForAccess/addUserDialog'
import userDialog from '@/views/accessManagement/applyForAccess/userDialog'
export default {
  name: 'AddApply',
  components: { operatorDialog, addUserDialog, userDialog },
  data() {
    return {
      isVisible: false,
      title: '',
      validityEditData1: {},
      tableData1: [
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
          code: '913101175821220588'
        }
      ],
      tableData2: [
        {
          orgNo: '37405',
          consName: '济南汉峪6_4_人力资源产业园',
          consNo: '1683769326361',
          elecAddr: '济南汉峪6_4_人力资源产业园',
          rrioCode: '负荷类',
          contractCap: '520',
          regulatoryMode: '手动'
        }
      ],
      type: '',
      pageOption: {
        pageNum: 1,
        pageSize: 5,
        total: 1
      }

    }
  },
  mounted() {
  },
  methods: {
    open(type) {
      this.type = type
      this.isVisible = true
      if (this.type === 'view') {
        this.title = '详情'
      } else if (this.type === 'edit') {
        this.title = '变更'
      } else {
        this.title = '接入申请'
      }
    },
    // 运营商--新增
    addOperator() {
      this.$refs.operatorDialog.open('add')
    },
    // 运营商--查看
    lookOperator(row) {
      this.$refs.operatorDialog.open('view', row)
    },
    // 运营商--修改
    editOperator(row) {
      this.$refs.operatorDialog.open('edit', row)
    },
    // 运营商--删除
    deleteOperator() {
    },
    // 用户--新增
    addUser() {
      this.$refs.addUserDialog.open('add')
    },
    // 用户--查看
    lookUser(row) {
      this.$refs.userDialog.open('view', row)
    },
    // 用户--修改
    editUser(row) {
      this.$refs.userDialog.open('edit', row)
    },
    // 用户--删除
    deleteUser() {
    },
    ensure() {
      this.isVisible = false
    },
    cancel() {
      this.isVisible = false
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

<style lang="scss" scoped>
@import '../../../styles/tableStyle';

.dialog-footer {
  width: 100%;
  text-align: center;
  margin-top: 20px;
  height: 40px;
}

.header {
  width: 300px;
  height: 36px;
  line-height: 36px;
  background-image: url('~@/assets/polymerization/top1.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin-bottom: 15px;

  .title {
    font-size: 17px;
    font-weight: 600;
    color: #FFFFFF;
    //border-left: 3px solid #0396EA;
    padding-left: 15px;
  }
}

.table-box {
  //height: calc(100% - 250px);
  height: 285px;
  margin-top: 10px;
  margin-bottom: 10px;
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

.ensure {
  margin-right: 40px;
}

.el-select {
  display: inline-block;
  position: absolute;
  width: 100%;
}

.el-input {
  width: 100%;
}

.el-col-8 {
  height: 62px;
}

::v-deep .el-input--medium .el-input__inner {
  height: 35px;
  line-height: 36px;
  width: 220px;
}

::v-deep .el-upload-dragger {
  background-color: transparent;
  border: 1px solid #409EFF;
}

::v-deep .el-upload--picture-card {
  background-color: transparent;
  border: 1px solid #409EFF;
}

.el-upload__tip {
  color: #FFFFFF;
}

.el-upload-dragger .el-upload__text {
  color: #FFFFFF;
}

::v-deep .el-form-item__label {
  font-size: 16px;
  color: #FFFFFF;
  font-weight: 500;
  //line-height: 80px;
  width: 110px;
}
</style>
