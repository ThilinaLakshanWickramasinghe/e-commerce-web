<template>
  <app-header/>
  <router-view/>
  <app-footer/>
</template>



<script>

import Header from './components/header-com.vue'
import Footer from './components/footer-com.vue'

export default{
  components:{
    'app-header': Header,
    'app-footer': Footer
  }
}







</script>



<style>

</style>