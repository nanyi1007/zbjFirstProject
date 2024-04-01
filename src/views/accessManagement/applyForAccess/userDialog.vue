// 接入申请-（用户）改查
<template>
  <div>
    <el-dialog :title="title" :visible.sync="isVisible " width="60%" :modal="false" top="20vh">
      <el-form
        ref="form"
        :model="queryParam"
        label-width="170px"
        label-position="right"
        :rules="rules"
      >
        <el-row>
          <el-col :span="8">
            <el-form-item label="供电单位：" prop="orgNo">
              <my-tree-select
                ref="selectTree"
                :props="props"
                :options="optionData"
                :value="valueId"
                :clearable="isClearable"
                :accordion="isAccordion"
                :tree-title="treeTitle"
                :disabled="type === 'view'"
                @getValue="getValue($event)"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="用户编号：" prop="consNo">
              <el-input
                v-model="queryParam.consNo"
                placeholder="请输入..."
                clearable
                :disabled="type === 'view'"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="用户名称：" prop="consName">
              <el-input
                v-model="queryParam.consName"
                placeholder="请输入..."
                clearable
                :disabled="type === 'view'"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="合同容量：" prop="contractCap">
              <el-input
                v-model="queryParam.contractCap"
                placeholder="请输入..."
                clearable
                :disabled="type === 'view'"
              ><span slot="suffix">kVA</span></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="用电地址：" prop="elecAddr">
              <el-input
                v-model="queryParam.elecAddr"
                placeholder="请输入..."
                clearable
                :disabled="type === 'view'"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="用户分类：" prop="rrioCode">
              <el-select
                v-model="queryParam.rrioCode"
                placeholder="请选择..."
                clearable
                :disabled="type === 'view'"
              >
                <el-option label="一般客户" value="一般客户" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="调控模式：" prop="regulatoryMode">
              <el-select
                v-model="queryParam.regulatoryMode"
                placeholder="请选择..."
                clearable
                :disabled="type === 'view'"
              >
                <el-option label="自动" value="自动" />
                <el-option label="手动" value="手动" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="代理协议：" prop="fileUrl">
              <el-upload
                v-if="type !== 'view'"
                ref="upload"
                class="upload-demo"
                :action="importFileUrl"
                :file-list="fileList1"
                :auto-upload="true"
                :on-success="handleSuccess1"
              >
                <el-button
                  slot="trigger"
                  type="primary"
                  class="up"
                  size="medium"
                >点击上传附件
                </el-button>
                <div slot="tip" class="el-upload__tip" />
              </el-upload>
              <el-button
                v-if="type === 'view'"
                size="medium"
                class="down"
                @click="downContract"
              >下载附件
              </el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div v-if="type !== 'view'" class="dialog-footer">
        <el-button type="primary" class="ensure" @click="ensure">确定</el-button>
        <el-button class="cancel" @click="cancel">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>

// import { getOrgTree } from '@/api/common'
import MyTreeSelect from '@/views/components/select-tree'

export default {
  name: 'AddApply',
  // components: {
  //   MyTreeSelect
  // },
  data() {
    return {
      isVisible: false,
      title: '',
      type: '',
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
      rules: {
        consNo: [
          { required: true, message: '请输入用户编号', trigger: 'blur' }
        ],
        consName: [
          { required: true, message: '请输入用户名称', trigger: 'blur' }
        ]
      },
      importFileUrl: '',
      fileList: [],
      fileList1: [],
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false

    }
  },
  mounted() {
    this.getOption()
  },
  methods: {
    // 取值
    // getValue(value) {
    //   this.valueId = value
    //   this.queryParam.orgNo = value
    // },
    // // 供电单位
    // getOption() {
    //   getOrgTree({}).then((res) => {
    //     if (res.code === 200) {
    //       this.optionData = res.data
    //       this.valueId = res.data[0]?.orgNo
    //       this.queryParam.orgNo = res.data[0]?.orgNo
    //       // this.queryPage()
    //     } else {
    //       this.optionData = []
    //     }
    //   })
    // },
    open(type, row) {
      this.type = type
      this.isVisible = true
      this.getOption()
      if (this.type === 'view') {
        this.title = '用户信息--详情'
        this.queryParam = row
      } else {
        this.title = '用户信息--修改'
        this.queryParam = row
      }
    },
    ensure() {
      this.isVisible = false
    },
    cancel() {
      this.getOption()
      this.isVisible = false
    },
    downContract() {
    },
    handleSuccess1(response, file, fileList) {
    }

  }
}
</script>

<style lang="scss" scoped>
.dialog-footer {
  width: 100%;
  text-align: center;
  margin-top: 20px;
  height: 40px;
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
