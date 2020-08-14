<template>
  <!-- <van-progress color="BASE_COLOR_PRIMARY" :show-pivot='false' :percentage="percentage" v-if="percentage != 100" /> -->
  <div class="box">
    <keep-alive>
      <router-view :class="['content', isFooterShow?'': 'notApp']" v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view :class="['content', isFooterShow?'': 'notApp']" v-if="!$route.meta.keepAlive"/>
    <Footer v-if="!isFooterShow"/>
  </div>
</template>

<script>
  // import Header from '@/components/Header'
  import Footer from '@/components/Footer'
  import { getAppType } from "@/utils/auth";
  export default {
    data() {
      return {}
    },
    components: {
      // Header,
      Footer
    },
    computed: {
       // 只有首页个人中心展示底部栏
      isFooterShow() {
        let whlieName = ['/index', '/userInfo'];
        let path = this.$route.path;
        return getAppType() || !whlieName.includes(path);
      }
    },
    methods: {
     

    }
  }
</script>

<style lang="less" scoped>
.content {
  min-height: 100vh;
}
.content.notApp {
  min-height: calc(100vh - 50px);
}

</style>
