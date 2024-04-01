// 接入申请-（运营商）增改查
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
            <el-form-item label="运营商名称：" prop="name">
              <el-input
                v-model="queryParam.name"
                placeholder="请输入..."
                clearable
                :disabled="type === 'view'"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="运营商编号：" prop="consNo">
              <el-input
                v-model="queryParam.consNo"
                placeholder="请输入..."
                clearable
                :disabled="type === 'view'"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="市场类型：" prop="marketType">
              <el-select
                v-model="queryParam.marketType"
                placeholder="请选择..."
                clearable
                :disabled="type === 'view'"
              >
                <el-option label="需求响应" value="需求响应"/>
                <el-option label="电力辅助服务" value="电力辅助服务"/>
                <el-option label="现货市场" value="现货市场"/>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="联系人：" prop="person">
              <el-input
                v-model="queryParam.person"
                placeholder="请输入..."
                clearable
                :disabled="type === 'view'"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="联系方式：" prop="linkType">
              <el-input
                v-model="queryParam.linkType"
                placeholder="请输入..."
                clearable
                :disabled="type === 'view'"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="统一社会信用代码：" prop="code">
              <el-input
                v-model="queryParam.code"
                placeholder="请输入..."
                clearable
                :disabled="type === 'view'"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="法人：" prop="people">
              <el-input
                v-model="queryParam.people"
                placeholder="请输入..."
                clearable
                :disabled="type === 'view'"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="市场入市证明：" prop="fileUrl">
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
                <div slot="tip" class="el-upload__tip"/>
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
          <el-col :span="24">
            <el-form-item label="虚拟电厂营业执照：" prop="fileUrl">
              <el-upload
                ref="upload"
                action="#"
                list-type="picture-card"
                :auto-upload="false"
                :file-list="fileList"
                :on-remove="handleRemove"
                :on-preview="handlePictureCardPreview"
                :on-success="handleSuccess"
              >
                <el-button
                  slot="trigger"
                  class="upLoadBtn"
                  style="border: 0; background-color:transparent"
                  :disabled="type === 'view'"
                >
                  <i class="el-icon-plus"></i>
                </el-button>
                <div slot="file" slot-scope="{ file }">
                  <img
                    class="el-upload-list__item-thumbnail"
                    :src="file.url"
                    alt=""
                  >
                  <span class="el-upload-list__item-actions">
                    <span
                      class="el-upload-list__item-preview"
                      @click="handlePictureCardPreview(file)"
                    >
                      <i class="el-icon-zoom-in"/>
                    </span>
                    <span
                      v-if="!disabled"
                      class="el-upload-list__item-delete"
                      @click="handleDownload(file)"
                    >
                      <i class="el-icon-download"/>
                    </span>
                    <span
                      v-if="!disabled && type !== 'view'"
                      class="el-upload-list__item-delete"
                      @click="handleRemove(file)"
                    >
                      <i class="el-icon-delete"/>
                    </span>
                  </span>
                </div>
              </el-upload>
              <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="">
              </el-dialog>
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

export default {
  name: 'AddApply',
  data() {
    return {
      isVisible: false,
      title: '',
      type: '',
      queryParam: {},
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
  },
  methods: {
    open(type, row) {
      this.type = type
      this.isVisible = true
      if (this.type === 'view') {
        this.title = '运营商信息--详情'
        this.queryParam = row
      } else if (this.type === 'edit') {
        this.title = '运营商信息--修改'
        this.queryParam = row
      } else {
        this.title = '运营商信息--新增'
      }
    },
    ensure() {
      this.isVisible = false
    },
    cancel() {
      this.isVisible = false
    },
    downContract() {
    },
    handleSuccess1(response, file, fileList) {
    },
    handleSuccess(response, file, fileList) {
    },
    handleRemove(file) {
      const arr = this.$refs.upload.uploadFiles
      const index = arr.indexOf(file)
      arr.splice(index, 1)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    handleDownload(file) {
      const a = document.createElement('a')
      a.href = file.url
      a.download = file.name || file.url.substring(file.url.lastIndexOf('/') + 1)
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
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
