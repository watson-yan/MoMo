<template>
  <div class="page-list">
    <div class="list">
      <div class="list-header">DEFAULT</div>
      <div class="list-item">
        <div class="demo border-bottom">
          Item A
        </div>
      </div>
      <div class="list-item">
        <div class="demo border-bottom">
          Item B
          <label class="radiobox" style="float: right;">
            <input name="radio1" type="radio">
            <div class="check">
              <span></span>
            </div>
          </label>
        </div>
      </div>
      <div class="list-item">
        <div class="demo">
          Item C
          <label class="switch" style="float: right;">
            <input type="checkbox" checked="checked">
            <span class="check"></span>
          </label>
        </div>
      </div>
      <div class="list-header">SETTING</div>
      <div class="list-item">
        <div class="demo border-bottom">
          Item A
        </div>
      </div>
      <div class="list-item">
        <div class="demo border-bottom">
          Item B
        </div>
      </div>
      <div class="list-item">
        <div class="demo border-bottom">
          Item C
        </div>
      </div>
    </div>
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
  .list-item {
    .demo {
      padding: 1rem;
      flex-grow: 1;
    }
  }
</style>
