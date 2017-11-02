<template>
  <div class="tabs">
    <tabs>
      <ul slot="list">
        <li @click="active='ITEM1'" :class="{active: active=='ITEM1'}">项目一</li>
        <li @click="active='ITEM2'" :class="{active: active=='ITEM2'}">项目二</li>
      </ul>
    </tabs>
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
<style>
</style>