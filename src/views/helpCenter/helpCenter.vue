<template>
  <div>{{$t('route.logout')}}
    
  </div>
</template>

<script>
export default {
  data() {
      return {
        
      };
    },
    beforeUpdate() {
      console.log("触发渲染");
    }
}
</script>

<style>

</style>


