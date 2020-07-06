<template>
  <div class="container">
    <HeaderAll></HeaderAll>
    <router-view/>
    <FooterAll></FooterAll>
  </div>
</template>
<style></style>
<script>
import HeaderAll from '../components/HeaderAll'
import FooterAll from '../components/FooterAll'
export default {
  data () {
    return {
      //
    }
  },
  components: {
    HeaderAll,
    FooterAll
  }

}
</script>
