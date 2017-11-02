<template>
  <div class="page-input">
    <p class="caption-title">Radio</p>
    <label class="radiobox">
      <input name="radio1" type="radio">
      <div class="check">
        <span></span>
      </div>
      <span class="caption">Apple</span>
    </label>

    <label class="radiobox">
      <input name="radio1" type="radio">
      <div class="check">
        <span></span>
      </div>
      <span class="caption">Orange</span>
    </label>
    <p class="caption-title">Checkbox</p>
    <div style="padding: 10px 0;">
      <label class="checkbox">
        <input name="checkbox1" type="checkbox">
        <div class="check">
          <span></span>
        </div>
        <span class="caption">Apple</span>
      </label>

      <label class="checkbox">
        <input name="checkbox1" type="checkbox">
        <div class="check">
          <span></span>
        </div>
        <span class="caption">Orange</span>
      </label>
    </div>
    <div>
      <label class="switch">
        <input type="checkbox" checked="checked">
        <span class="check"></span>
      </label>
    </div>
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
<style lang="scss" scoped>
  .page-input {
    padding: 10px;
  }
</style>
