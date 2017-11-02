<template>
  <div class="app">
    <article>
      <transition name="component-fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </article>
    <footer>
      <tab-bar 
        :bg="'#939dae'"
        :menus="menus">
      </tab-bar>
    </footer>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        active: 'ITEM1',
        menus: [
          {
            title: '样式',
            icon: 'iconfont icon-listview',
            cb: () => { this.$router.push({path: '/'})}
          },
          {
            title: '组件', 
            icon: 'iconfont icon-star-o',
            cb: () => {this.$router.push({path: '/components'})}
          },
          {
            title: '关于', 
            icon: 'iconfont icon-personal',
            cb: () => {this.$router.push({path: '/about'})}
          },
        ]
      }
    }
  }
</script>
<style lang="scss" scoped>
.app {
  display: flex;
  height: 100%;
  flex-direction: column;
  &>header, &>footer {
    flex-grow: 0;
    flex-shrink: 1;
  }
  &>article {
    flex-grow: 1;
    flex-shrink: 1;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
}

.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
/* .component-fade-leave-active for below version 2.1.8 */ 
.component-fade-enter, .component-fade-leave-to {
  opacity: 0;
}
</style>