<script>
export default {
  name: 'MenuItem',
  functional: true,
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  render(h, context) {
    const { icon, title } = context.props
    const vnodes = []

    if (icon.includes('el-icon')) {
      vnodes.push(h('i', { class: [icon, 'sub-el-icon'] }))
    } else if (/\.(svg)$/.test(icon)) {
      vnodes.push(h('svg-icon', { attrs: { 'icon-class': icon }}))
      // 更新正则表达式以匹配 base64 编码图像或图像文件扩展名
    } else if (/\.(png|jpg|jpeg|gif)$/.test(icon) || /^data:image\/(png|jpg|jpeg|gif);base64,/.test(icon)) {
      vnodes.push(h('img', { attrs: { src: icon, alt: title }, class: 'sidebar-image-icon' }))
    }

    if (title) {
      vnodes.push(h('span', { attrs: { slot: 'title' }}, title))
    }

    return vnodes
  }
}
</script>

<style scoped>
.sub-el-icon {
  color: currentColor;
  width: 1em;
  height: 1em;
}
.sidebar-image-icon {
  width: 1.2em;
  height: 1.2em;
  margin-right: 15px;
}
</style>
