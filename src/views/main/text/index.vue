<template>
  <div class='s'>
    
        <van-button type="primary"  to="/doctorHome/682" >测试医生-贺</van-button>
        <van-button type="primary"  to="/doctorHome/702">测试医生-李</van-button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        a: ``
      }
    }
  }
</script>

<style lang="scss" scoped>
.s {
  width: 100%;
  height: 150px;
  background:pink;
  transition: 300ms;
  transform: scale(.8)
}
</style>
