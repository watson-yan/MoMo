<template>
  <div class="page-list">
    <div class="list">
      <div class="list-header">DEFAULT (List header)</div>
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
          Subscribed
          <label class="switch" style="float: right;">
            <input type="checkbox" checked="checked">
            <span class="check"></span>
          </label>
        </div>
      </div>
      <div class="list-header">SETTING</div>
      <div class="list-item">
        <div class="demo border-bottom" style="padding: .5rem;">
          <img src="/imgs/avatar/avatar1.jpg" width="40" height="40">
          <div style="display: inline-block;">
            <p style="margin: 3px 0;">Amy</p>
            <p style="margin: 3px 0; font-size: 12px; color: #999;">On the internet</p>
          </div>
        </div>
      </div>
      <div class="list-item">
        <div class="demo border-bottom">
          Item B
          <label class="checkbox" style="float: right;">
            <input name="check1" type="checkbox">
            <div class="check">
              <span></span>
            </div>
          </label>
        </div>
      </div>
      <div class="list-item">
        <div class="demo border-bottom">
          Item C
          <label class="checkbox" style="float: right;">
            <input name="check1" type="checkbox">
            <div class="check">
              <span></span>
            </div>
          </label>
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
