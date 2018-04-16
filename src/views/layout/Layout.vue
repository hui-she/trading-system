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
  .content{
    padding-top: 62px;
  }

</style>


