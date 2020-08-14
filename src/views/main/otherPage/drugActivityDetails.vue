<template>
<div class="loading_list" v-if="loading">
    <van-skeleton title :row="6" class="loading_list_skeleton" v-for="(item, index) in 3" :key="index" />
  </div>
  <div class="drugA" v-else>
    <swiper :options="swiperOptions">
      <swiper-slide class="swiper-slide" v-for="(item, index) in dataJect.bannerList" :key="index">
        <img  :src="item" /> 
      </swiper-slide>
    </swiper>

    <div class="title">{{dataJect.medicineName}}</div>

    <div class="names">
      成分：{{dataJect.medicineComponent}}
    </div>

    <div class="line"></div>

    <div class="tips" v-html='dataJect.content'></div>
  </div>
</template>

<script>
import {cmsMedicineDetailApi} from '@/api/otherPage'
  export default {
    data() {
      return {
        swiperOptions: {},
        dataJect: {},
        loading: true,
      }
    },
    async created() {
      var id =  this.$route.params.id;
      let {data} = await cmsMedicineDetailApi(id);
      this.loading = false;
      this.dataJect = data;
    },
  }
</script>

<style lang="less" scoped>
.swiper-slide {
  height: 4.2rem;
  width: 100vw;
  img {
    width: 100%;
    height: 100%;
  }
}
.drugA {
  text-align: left;
  background: #fff;
  .title {
    padding: 0 .3rem;
    font-size: .40rem;
    font-family:PingFang SC;
    font-weight:bold;
    line-height: .48rem;
    color:rgba(11,11,11,1);
    opacity:1;
    margin: .4rem 0 .15rem;
    
  }
  .names {
    font-size: .32rem;
    font-family:PingFang SC;
    font-weight:400;
    line-height: .48rem;
    color:rgba(11,11,11,1);
    opacity:1;
    padding: 0 .3rem;
    margin-bottom: .4rem;
  }
  .line {
    height: .20rem;
    background:rgba(245,245,245,1);
    opacity:1;
  }
  .tips {
    padding: .3rem;
    font-size: .32rem;
    font-family:PingFang SC;
    font-weight:400;
    line-height: .52rem;
    color:rgba(51,51,51,1);
    opacity:1;
  }
}
</style>
