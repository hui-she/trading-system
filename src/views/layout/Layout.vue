<template>
  <div class="wrapper">
      <v-head></v-head>
      
      <div class="content">
          <router-view></router-view>
      </div>
  </div>
</template>

<script>
import vHead from './header.vue';
export default {
  components:{
    vHead
  }
}
</script>

<style lang='scss'>
.wrapper{
  min-height: 100%;
  min-width: 100%;
  .content{
    padding-top: 62px;
    min-height: 100%;
  }
}
</style>


