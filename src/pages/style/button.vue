<template>
  <div class="page-button">
    <nav-bar></nav-bar>
    <section class="demo-item">
      <button class="button">Button</button>
      <span>Default</span>
    </section>
    <section class="demo-item">
      <button class="button primary">Button</button>
      <span>Primary</span>
    </section>
    <section class="demo-item">
      <button class="button success">Button</button>
      <span>Success</span>
    </section>
    <section class="demo-item">
      <button class="button warning">Button</button>
      <span>Warning</span>
    </section>
    <section class="demo-item">
      <button class="button info">Button</button>
      <span>Info</span>
    </section>
    <section class="demo-item">
      <button class="button danger">Button</button>
      <span>Danger</span>
    </section>

    <div style="padding: 10px;">
      <button class="button primary block">提交</button>
    </div>
    <div style="padding: 0px 10px;">
      <button class="button primary-o block">提交</button>
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
  .page-button {
    .demo-item {
      padding: .625rem 1rem;
    }
  }
</style>