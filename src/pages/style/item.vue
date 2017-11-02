<template>
  <div class="page-item">
    <!-- <nav-bar></nav-bar> -->
    <div v-for="(item, index) of list" 
        :key="index"
        class="item">
      <div class="icon">
        <img :src="item.img" width="40" height="40" class="circle">
      </div>
      <div class="content">
        {{item.title}}
        <p>view: 423&#12288;&#12288;update: 2017-11-01 12:04</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        list: [
          {img: './imgs/avatar/avatar1.jpg', title: 'If you can do what you do best and be happy, you are further along in life than most people. '},
          {img: './imgs/avatar/avatar2.jpg', title: 'Never put off what you can do today until tomorrow.'},
          {img: './imgs/avatar/avatar3.jpg', title: 'The best preparation for tomorrow is doing your best today. '},
          {img: './imgs/avatar/avatar4.jpg', title: 'Failure is the mother of success. - Thomas Paine'},
          {img: './imgs/avatar/avatar5.jpg', title: 'The reason why a great man is great is that he resolves to be a great man. '},
          {img: './imgs/avatar/avatar6.jpg', title: 'If you can do what you do best and be happy, you are further along in life than most people. '},
          {img: './imgs/avatar/avatar4.jpg', title: 'Failure is the mother of success. - Thomas Paine'},
          {img: './imgs/avatar/avatar2.jpg', title: 'Never put off what you can do today until tomorrow.'},
          {img: './imgs/avatar/avatar6.jpg', title: 'If you can do what you do best and be happy, you are further along in life than most people. '},
          {img: './imgs/avatar/avatar3.jpg', title: 'The best preparation for tomorrow is doing your best today. '},
          {img: './imgs/avatar/avatar1.jpg', title: 'If you can do what you do best and be happy, you are further along in life than most people. '},
          {img: './imgs/avatar/avatar4.jpg', title: 'Failure is the mother of success. - Thomas Paine'},
          {img: './imgs/avatar/avatar5.jpg', title: 'The reason why a great man is great is that he resolves to be a great man. '},
          {img: './imgs/avatar/avatar6.jpg', title: 'If you can do what you do best and be happy, you are further along in life than most people. '},
          {img: './imgs/avatar/avatar2.jpg', title: 'Never put off what you can do today until tomorrow.'},
          {img: './imgs/avatar/avatar4.jpg', title: 'Failure is the mother of success. - Thomas Paine'},
          {img: './imgs/avatar/avatar5.jpg', title: 'The reason why a great man is great is that he resolves to be a great man. '},
          {img: './imgs/avatar/avatar1.jpg', title: 'If you can do what you do best and be happy, you are further along in life than most people. '},
          {img: './imgs/avatar/avatar2.jpg', title: 'Never put off what you can do today until tomorrow.'},
          {img: './imgs/avatar/avatar4.jpg', title: 'Failure is the mother of success. - Thomas Paine'},
        
        ]
      }
    }
  }
</script>
<style lang="scss" scoped>
  .page-item {
    .circle {
      border-radius: 100%;
    }
    .content {
      p {
        margin: 3px 0;
        font-size: 12px;
        color: #999;
      }
    }
  }
</style>