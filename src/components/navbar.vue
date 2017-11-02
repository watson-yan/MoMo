<template>
  <div class="navbar">
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
  background: rgb(147, 157, 174);
  color: #fff;
}
</style>