<template>
  <div class="navbar shadow">
    <div onclick="history.back()">
      <i class="iconfont icon-back"></i>
    </div>
    <span>{{title}}</span>
  </div>
</template>
<script>
  export default {
    props: {
      title: {
        type: 'String'
      }
    },
    data() {
      return {}
    }
  }
</script>
<style lang="scss" scoped>
.navbar {
  padding: 0.75rem 1rem;
  background: #0288d1;
  color: #fff;
}
</style>