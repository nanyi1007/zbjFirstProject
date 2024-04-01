// 变更记录--记录
<template>
  <div class="Resource">
    <el-dialog
      :title="title"
      :visible.sync="isVisible"
      top="10vh"
      width="50%"
    >
      <div class="checkIf">
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
              prop="changeTime"
              label="变更时间"
              align="center"
              show-overflow-tooltip
            />
            <el-table-column prop="time1" label="操作" align="center">
              <template slot-scope="scope">
                <span class="row">
                  <el-link type="primary" @click="check(scope.row)">详情</el-link>
                </span>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="page-footer">
          <el-pagination
            background
            :current-page="pageOption.pageNum"
            :page-sizes="[5, 10, 20, 30]"
            :page-size="pageOption.pageSize"
            layout="total, sizes, prev, pager, next"
            :total="pageOption.total"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </div>
        <div class="dialog-footer">
          <el-button type="primary" class="ensure" @click="ensure">确认</el-button>
          <el-button class="cancel" @click="cancel">取消</el-button>
        </div>
      </div>
    </el-dialog>
    <addApply ref="addApply" />
  </div>
</template>

<script>

import addApply from '@/views/accessManagement/applyForAccess/addApply'

export default {
  name: 'Resource',
  components: { addApply },
  data() {
    return {
      pageOption: {
        pageNum: 1,
        pageSize: 10,
        total: 1
      },
      isVisible: false,
      title: '变更记录',
      tableData: [
        {
          name: '东营供电公司',
          consNo: '1683769326361',
          marketType: '负荷类',
          changeTime: '2024-03-28 09:10:00'
        }
      ]
    }
  },
  mounted() {
  },
  methods: {
    open() {
      this.isVisible = true
    },
    ensure() {
      this.isVisible = false
    },
    cancel() {
      this.isVisible = false
    },
    check() {
      this.$refs.addApply.open('view')
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
@import '@/styles/tableStyle.scss';

.Resource {
  .checkIf {
    display: flex;
    flex-direction: column;

    .dateInputBox {
      display: flex;
      align-items: center;
      margin-bottom: 30px;
      margin-top: 10px;
    }

    .btn-box {
      display: flex;
      justify-content: flex-end;
      margin-right: 15px;
      width: 35%;
    }

    .el-input {
      width: 30%;
    }

    .el-select {
      width: 88%;
    }

    //.el-select-dropdown.is-multiple .el-select-dropdown__item.selected.hover, .el-select-dropdown__item.selected {
    //  background-color: transparent;
    //}
    .table-box {
      padding: 0 20px;
      height: 520px;
      overflow: auto;
      //::v-deep .el-table__body {
      //  border-spacing: 0 0 !important;
      //}
      //::v-deep .el-table__empty-block {
      //  border-right: 1px solid #FFFFFF;
      //}
    }

    .page-footer {
      margin-top: 10px;
      text-align: center;
    }

    .dialog-footer {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 40px;

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
}
</style>
