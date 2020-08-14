<template>
  <div class="time_box">
     <p class="title">选择通话时间</p>
     <p class="sel_time">选择日期</p>

      <swiper :options="swiperOptions" class="swiper_box">
        <swiper-slide v-for="(item, index) in 14" class="swiper-slide_box" :key="index">
          <div :class="['i_swipe_box', selTimeId == index? 'sel': '']" @click.prevent="selTimeId = index">
            <p>12-25</p>
            <p class="txt">今天</p>
          </div>
        </swiper-slide>
      </swiper>

    <p class="sel_time time_check">选择时间段</p>

    <van-cell class="time_txt_box" title="上午8:00-11:00" center size="large" @click.prevent='timeCheck=index' v-for="(item, index) in 4" :key="index">
      <template #right-icon>
        <van-icon size='19' :name="require('@/assets/img/2841@2x.png')" v-if="timeCheck==index" class="search=icon" />
        <div class="title_yuduliang" v-else></div>
      </template>

    </van-cell>


    <div class="save_time">
      确定
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        swiperOptions: {
          slidesPerView: 'auto',
          spaceBetween: 10,
        },
        selTimeId: 0,
        timeCheck: 1
      }
    },
  }
</script>

<style lang="less" scoped>
.time_box {
  .save_time {
    height:.98rem;
    line-height:.98rem;
    background:rgba(255,79,120,1);
    opacity:1;
    font-size: .32rem;
    font-family:PingFang SC;
    font-weight:bold;
    line-height: .45rem;
    color:rgba(255,255,255,1);
    display:flex;
    align-items: center;
    justify-content: center;
    opacity:1;
    
  }
  .title {
    text-align:center;
    padding: .3rem 0;
    font-size: .36rem;
    font-family:PingFang SC;
    font-weight:400;
    line-height: .43rem;
    color:rgba(51,51,51,1);
    opacity:1;
  }
  .sel_time {
    font-size: .28rem;
    padding:0 .3rem;
    font-family:PingFang SC;
    font-weight:400;
    line-height: .43rem;
    color:rgba(153,153,153,1);
    opacity:1;
    margin-bottom: .3rem;
  }
  .time_check {
    margin: .5rem 0 .4rem;
  }
  /deep/ .swiper-container {
    margin: 0 .3rem;
  }
  .swiper-slide_box{
    width: .8rem;
    .i_swipe_box {
      width: .8rem;
      height: .8rem;
      background:rgba(255,255,255,1);
      border: .5px solid rgba(178,178,178,1);
      border-radius:50%;
      opacity:1;
      font-size: .18rem;
      font-family:PingFang SC;
      font-weight:400;
      line-height: .43rem;
      text-align: center;
      color:rgba(86,91,110,1);
      opacity:1;
      p {
        line-height: .28rem;
        margin-top: .12rem;
        height: .28rem;
      }
      p.txt {
        line-height: .3rem;
        height:.3rem;
        margin: 0;
      }
    }
    .sel.i_swipe_box {
      color: #fff;
      background-color:@primary;
      border: .5px solid @primary;

    }
  }
  .title_yuduliang {
    width: 19px;
    height: 19px;
    border:1px solid rgba(217,217,217,1);
    border-radius:50%;
    opacity:1;
  }
  .time_txt_box {
    font-size: .32rem;
    font-family:PingFang SC;
    font-weight:400;
    line-height: .43rem;
    color:rgba(51,51,51,1);
    opacity:1;
  }
}
</style>
