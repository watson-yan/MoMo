<template>
  <div class="tabbar" :style="{background: bg, color: color}">
    <ul>
      <li v-for="(item, index) of menus"
          @click="callback(item, index)"
          :class="{active: activeIndex === index}"
          :key="index">
        <p>
          <i :class="item.icon"></i> {{item.title}}
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    menus: {
      type: Array,
      required: true
    },
    active: {
      type: Number
    },
    bg: {
      type: String,
      default: '#f1f1f1'
    },
    color: {
      type: String,
      default: '#fff'
    }
  },
  data() {
    return {
      activeIndex: 0
    }
  },
  mounted() {
    if (this.active && this.menus.length >= this.active) {
      this.activeIndex = this.active
    }
  },
  methods: {
    callback(item, index) {
      this.activeIndex = index
      if (item.cb && typeof item.cb === 'function') {
        item.cb()
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.tabbar {
  ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
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
        background: #23ade5;
      }
    }
  }
}
</style>