<template>
  <!-- <van-progress color="BASE_COLOR_PRIMARY" :show-pivot='false' :percentage="percentage" v-if="percentage != 100" /> -->
  <div class="box">
    <Header
      :class="['animated fadeIn', $route.path == '/index'? 'header': 'two ', scrollTop >= 100 ? 'olive fadeInDown' : '']" />
    <keep-alive>
      <router-view class="content" v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view class="content" />
    <Footer />
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import Footer from '@/components/Footer'
  export default {
    data() {
      return {
        percentage: 100,
        scrollTop: 0
      }
    },
    components: {
      Header,
      Footer
    },
    methods: {
      handleScroll() {
        this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        console.log(this.scrollTop);
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll)
    }
  }
</script>

<style lang="scss" scoped>
  .box {
    position: relative;

    .header {
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      padding: .32rem 0 .32rem;
      z-index: 9;
    }

    .two {
      background: #fff;
      width: 100vw;
      padding: .32rem 0 .32rem;
      z-index: 9;
    }

    .olive {
      background: #fff;
      padding: .32rem 0 .1rem;
      margin: 0;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      z-index: 99999;
    }

  }
</style>
