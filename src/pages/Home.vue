<template>
  <div class="home">
    <router-link :to="{path: '/button'}" class="list-item" tag="section">按钮</router-link>
    <router-link :to="{path: '/item'}" class="list-item" tag="section">列表</router-link>   
  </div>
</template>
<script>
export default {
  data() {
    return {}
  }
}
</script>
<style lang="less" scoped>
.home {
  .list-item {
    padding: 0.75rem 0 0.75rem 1rem;
    border-bottom: 1px solid #ccc;
  }
}
</style>