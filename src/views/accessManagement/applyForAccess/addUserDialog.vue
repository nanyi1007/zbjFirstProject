// 接入申请-（用户）新增
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
          <el-table :data="tableData" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="50" align="center"/>
            <el-table-column
              type="index"
              label="序号"
              align="center"
              width="55"
            />
            <el-table-column
              prop="orgName"
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
          <el-button type="primary" class="ensure" @click="addProxyResources">确认</el-button>
          <el-button class="cancel" @click="cancel">取消</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>


// import { addProxyResources } from '@/api/aggregationOptimization'
// import { queryConsPage } from '@/api/useProfile'

export default {
  name: 'Resource',
  data() {
    return {
      pageOption: {
        pageNum: 1,
        pageSize: 10,
        total: 10
      },
      queryParam: {},
      isVisible: false,
      title: '用户信息--新增',
      type: '',
      tableData: [],
      selectedResourceNos: [], // 多选时，这里是数组
      selectedResourceNames: [], // 用来存储多个资源名称
      programmeNo: ''
    }
  },
  mounted() {
    // this.queryConsPage()
  },
  methods: {
    open(type, programmeNo) {
      this.isVisible = true
      this.type = type
      this.programmeNo = programmeNo
      this.queryConsPage()
    },
    reset() {
      this.queryParam = {}
      this.queryConsPage()
    },
    handleSelectionChange(selection) {
      // 将所选项的资源编号映射到 selectedResourceNos 数组
      this.selectedResourceNos = selection.map(item => item.resourceNo)
    },
    // 获取弹窗资源数据表格
    queryConsPage() {
      const params = {
        pageNum: this.pageOption.pageNum,
        pageSize: this.pageOption.pageSize
      }
      queryConsPage(params).then(res => {
        if (res.code === 200) {
          this.tableData = res.data.list
          this.pageOption.total = res.data.total
        }
      })
    },
    // 添加资源
    addProxyResources() {
      if (this.selectedResourceNos.length > 0) {
        const queryResourceNos = this.selectedResourceNos.join(',')
        const params = {
          programmeNo: this.programmeNo,
          resourceNos: queryResourceNos
        }
        addProxyResources(params).then(res => {
          if (res.code === 200 && res.success) {
            this.cancel()
            this.$parent.getProxyResources()
            // this.$parent.getAggData()
            this.$message({
              type: 'success',
              message: res.data || '添加代理资源成功'
            })
          } else {
            this.$message({
              type: 'error',
              message: res.data || '添加代理资源失败'
            })
          }
        })
      } else {
        // 可以选择在这里处理没有选中资源编号的情况
        console.log('No resource numbers selected.')
      }
    },
    // handleResourceNoChange() {
    //   // 根据选中的资源编号数组，获取对应的资源名称数组
    //   this.selectedResourceNames = this.selectedResourceNos.map(no => {
    //     const resource = this.tableData.find(item => item.resourceNo === no)
    //     return resource ? resource.resourceName : ''
    //   })
    // },
    // handleResourceNoChange(value) {
    //   // 当资源编号发生变化时，更新资源名称数组
    //   if (this.tableData.length > 0) {
    //     this.selectedResourceNames = this.tableData
    //       .filter(item => this.selectedResourceNos.includes(item.resourceNo))
    //       .map(item => item.resourceName)
    //   }
    // },
    // handleResourceNameChange(value) {
    //   // 当资源名称发生变化时，更新资源编号数组
    //   if (this.tableData.length > 0) {
    //     this.selectedResourceNos = this.tableData
    //       .filter(item => this.selectedResourceNames.includes(item.resourceName))
    //       .map(item => item.resourceNo)
    //   }
    // },
    cancel() {
      this.queryParam = {}
      this.isVisible = false
    },
    // 分页
    handleSizeChange(val) {
      this.pageOption.pageSize = val
      this.pageOption.pageNum = 1
      this.queryConsPage()
    },
    handleCurrentChange(val) {
      this.pageOption.pageNum = val
      this.queryConsPage()
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
