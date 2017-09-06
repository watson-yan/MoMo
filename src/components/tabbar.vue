<template>
  <div class="tabbar" :style="{background: bg, color: color}">
    <ul>
      <li class="active">
        <p>
          <i class="iconfont icon-listview"></i> 样式
        </p>
      </li>
      <li>
        <p>
          <i class="iconfont icon-star-o"></i> 组件
        </p>
      </li>
      <li>
        <p>
          <i class="iconfont icon-personal"></i> 关于
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    bg: {
      type: String,
      default: '#f1f1f1'
    },
    color: {
      type: String,
      default: '#666'
    }
  },
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
  ul {
    display: flex;
    padding: 0 10px;
    justify-content: space-around;
    list-style: none;
    border-top: 1px solid #dedede;
    li {
      padding: 10px 0;
      flex-grow: 1;
      flex-shrink: 0;
      text-align: center;
      p {
        margin: 0;
        i {
          font-size: 24px;
          vertical-align: sub;
        }
      }
      &.active {
        color: #38adff;
      }
    }
  }
</style>