<template>
  <div class="page-input">
    <p class="caption-title">Radio</p>
    <div style="padding: 10px;">
      <p style="margin: 5px 0;">Choose one: </p>
      <label class="radiobox">
        <input name="radio1" type="radio">
        <div class="check">
          <span></span>
        </div>
        <span class="caption">Apple</span>
      </label>
      &nbsp;&nbsp;
      <label class="radiobox">
        <input name="radio1" type="radio">
        <div class="check">
          <span></span>
        </div>
        <span class="caption">Orange</span>
      </label>
    </div>
    <p class="caption-title">Checkbox</p>
    <div style="padding: 10px;">
      <p style="margin: 5px 0;">Choose sports you like</p>
      <label class="checkbox">
        <input name="checkbox1" type="checkbox">
        <div class="check">
          <span></span>
        </div>
        <span class="caption">Basketball</span>
      </label>
      &nbsp;&nbsp;
      <label class="checkbox">
        <input name="checkbox1" type="checkbox">
        <div class="check">
          <span></span>
        </div>
        <span class="caption">Football</span>
      </label>
      &nbsp;&nbsp;
      <label class="checkbox">
        <input name="checkbox1" type="checkbox">
        <div class="check">
          <span></span>
        </div>
        <span class="caption">Tennis</span>
      </label>
    </div>
    <p class="caption-title">Switch</p>
    <div style="padding: 10px;">
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
</style>
