<template>
  <div class="home">
    <p class="caption-title">样式列表</p>
    <router-link :to="{path: '/button'}" class="list-item" tag="section">按钮</router-link>
    <router-link :to="{path: '/item'}" class="list-item" tag="section">列表</router-link>
    <router-link :to="{path: '/input'}" class="list-item" tag="section">表单</router-link>
    <router-link :to="{path: '/list'}" class="list-item" tag="section">列表</router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
.home {
  .list-item {
    padding: 0.75rem 0 0.75rem 1rem;
    border-bottom: 1px solid rgb(224, 228, 235);
  }
}
</style>