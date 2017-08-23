<template>
  <div class="title">
    <tabs>
      <ul slot="list">
        <li @click="active='ITEM1'" :class="{active: active=='ITEM1'}">项目一</li>
        <li @click="active='ITEM2'" :class="{active: active=='ITEM2'}">项目二</li>
      </ul>
    </tabs>

    <tab-bar></tab-bar>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        active: 'ITEM1'
      }
    }
  }
</script>
<style lang="less">
  html, body {
    margin: 0;
    padding: 0;
    clear: both;
  }
  ul {
    margin: 0;
    padding-left: 0;
  }
</style>