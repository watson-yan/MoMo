<template>
  <div class="tabbar" :style="{background: bg, color: color}">
    <ul>
      <li>
        <p>
          <i class="iconfont icon-listview"></i>
        </p>
      </li>
      <li>
        <p>
          <i class="iconfont icon-star-o"></i>
        </p>
      </li>
      <li>
        <p>
          <i class="iconfont icon-personal"></i>
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
      default: '#e6e6e6'
    },
    color: {
      type: String,
      default: '#888'
    }
  },
  data() {
    return {}
  }
}
</script>
<style lang="less" scoped>
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
        }
      }
    }
  }
</style>