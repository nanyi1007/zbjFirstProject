<template>
  <el-select ref="select" :value="valueTitle" :disabled="disabled" filterable @clear="clearHandle">
    <el-option :value="valueTitle" :label="valueTitle">
      <el-tree
        id="tree-option"
        ref="selectTree"
        :accordion="accordion"
        :data="options"
        :props="props"
        :node-key="props.value"
        :default-expanded-keys="defaultExpandedKey"
        :expand-on-click-node="false"
        @node-click="handleNodeClick"
      />
    </el-option>
  </el-select>
</template>

<script>
export default {
  name: 'ElTreeSelect',
  props: {
    /* 配置项 */
    props: {
      type: Object,
      default: () => {
        return {
          value: 'id', // ID字段名
          label: 'title', // 显示名称
          children: 'children' // 子级字段名
        }
      }
    },
    /* 选项列表数据(树形结构的对象数组) */
    options: {
      type: Array,
      default: () => { return [] }
    },
    /* 初始值 */
    value: {
      type: String,
      default: () => { return '' }
    },
    /* 可清空选项 */
    clearable: {
      type: Boolean,
      default: () => { return true }
    },
    /* 自动收起 */
    accordion: {
      type: Boolean,
      default: () => { return false }
    },
    /* 是否禁选 */
    disabled: {
      type: Boolean,
      default: () => { return false }
    },
    treeTitle: {
      type: String,
      default: () => { return '' }
    }
  },
  data() {
    return {
      valueId: this.value, // 初始值
      valueTitle: this.treeTitle,
      defaultExpandedKey: []
    }
  },
  watch: {
    value() {
      this.valueId = this.value
      this.initHandle()
    }
  },
  mounted() {
    this.initHandle()
  },
  methods: {
    // 初始化值
    initHandle() {
      this.$nextTick(() => {
        if (this.valueId) {
          this.valueTitle = this.$refs.selectTree.getNode(this.valueId)?.data[this.props.label] // 初始化显示
          this.$refs.selectTree.setCurrentKey(this.valueId) // 设置默认选中
          this.defaultExpandedKey = [this.valueId] // 设置默认展开
        }
        const scrollWrap = document.querySelectorAll('.el-scrollbar .el-select-dropdown__wrap')[0]
        const scrollBar = document.querySelectorAll('.el-scrollbar .el-scrollbar__bar')
        scrollWrap.style.cssText = 'margin: 0px; max-height: none; overflow: hidden;'
        scrollBar.forEach(ele => ele.style.width = 0)
      })
    },
    // 切换选项
    handleNodeClick(node) {
      this.valueTitle = node[this.props.label]
      this.valueId = node[this.props.value]
      this.$emit('getValue', this.valueId, this.valueTitle)
      this.defaultExpandedKey = []
      // this.hiddenPopper();
    },
    // 清除选中
    clearHandle() {
      this.valueTitle = ''
      this.valueId = null
      this.defaultExpandedKey = []
      this.clearSelected()
      this.$emit('getValue', null)
    },
    /* 清空选中样式 */
    clearSelected() {
      const allNode = document.querySelectorAll('#tree-option .el-tree-node')
      allNode.forEach((element) => element.classList.remove('is-current'))
    },
    hiddenPopper() {
      this.$refs.select.blur()
    }
  }
}
</script>

<style scoped lang="scss">
.el-scrollbar .el-scrollbar__view .el-select-dropdown__item{
  height: auto;
  max-height: 274px;
  padding: 0;
  overflow: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background-color: #99a9bf;
  }
  &::-webkit-scrollbar-track-piece {
    background: #d3dce6;
  }
}
::v-deep .el-scrollbar__wrap {
  margin-bottom: -8px;
  margin-right: -8px;
}
.el-select-dropdown__item.selected{
  font-weight: normal;
}
ul li >>>.el-tree .el-tree-node__content{
  height:auto;
  padding: 0 20px;
}
.el-tree-node__label{
  color: #FFFFFF;
  font-weight: normal;
}

.el-tree {
  color: #FFFFFF;
  background: #1B2553;
  ::v-deep .el-tree-node__label {
    font-size: 14px;
  }
  ::v-deep.el-tree-node__content {
    height: 36px;
  }
  ::v-deep.el-tree-node:focus > .el-tree-node__content {
    background: transparent; // 解决打开子节点时会出现白色背景的问题
  }
  ::v-deep.el-tree-node__content:hover,
  ::v-deep.el-tree-node.is-current > .el-tree-node__content {
    background: transparent;
    color: #0396EA!important;
  }
}
</style>
