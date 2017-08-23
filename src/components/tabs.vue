<template>
  <div class="mm-tabs">
    <slot name="list"></slot>
  </div>
</template>
<script>
  export default {
    data() {
      return {
      }
    }
  }
</script>
<style lang="less" scoped>
  .mm-tabs {
    ul {
      display: flex;
      justify-content: space-around;
      padding-left: 0;
      list-style: none;
      border-bottom: 1px solid #dedede;
      li {
        flex-grow: 1;
        flex-shrink: 0;
        text-align: center;
        height: 2.625rem;
        line-height: 2.5rem;

        &.active {
          color: #38adff;
          border-bottom: 2px solid #38adff;
        }
      }
    }
  }
</style>