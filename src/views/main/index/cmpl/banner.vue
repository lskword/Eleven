<template>
  <div class='banner_box ease-in-out'>
    <div class="swiper_container_banner">
      <img src="//ileyun.ivfcn.com/tools/static/img/1_02.png" alt="" class="bg">
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for="(item, index) in 3" :key="index">
        <div class="img_text">
          <img src="//ileyun.ivfcn.com/tools/static/img/picture-1.9be09c12.jpg" class="icon_asdf">
          <div class="box">
            <p class="tx">HCG与黄体酮和流产的关系</p>
            <p >妊娠时，受精卵伸出小爪子（人绒毛）抓住子宫内膜，这时候尿液血液会检测出人绒毛膜促性腺激素HCG。妊娠时，受精卵伸出小爪子（人绒毛）抓住子宫内膜，这时候尿液血液会检测出人绒毛膜促性腺激素HCG。</p>
          </div>
        </div>
			</div>
		</div>
		<div class="swiper-pagination"></div>

	</div>
    <div class="swiper-button-prev1 adx">
      <img src="@/assets/img/cursor-prev.png" class="left"/>
    </div>
    <div class="swiper-button-next1 adx_right">
      <img src="@/assets/img/cursor-next.png" class="right_icon"/>
    </div>
  </div>
</template>

<script>
  
  export default {
      mounted() {
        
          new Swiper('.swiper_container_banner', {
              slidesPerView: 'auto',
              centeredSlides: true,
              spaceBetween: 100,
              delay: 3000,
              stopOnLastSlide: false,
              initialSlide :1,//从0开始
              disableOnInteraction: true,
              prevButton: '.swiper-button-prev1',
              nextButton: '.swiper-button-next1',
          });
          
      }
  } 
</script>

<style lang="scss" scoped>
.banner_box {
  position: relative;
  .adx {
    position: absolute;
    left:2.55rem;
    top: 50%;
    margin-top: -.31rem;
    z-index: 999;
    width:.62rem;
    height: .62rem;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px .14rem 2px rgba(50,50,50,0.48);
    border-radius:50%;
    display: block;
    img.left {
      width:.16rem;
      height:.31rem;
      display: block;
      margin: .15rem auto 0;
    }
  }
  .adx_right {
    position: absolute;
    right:2.55rem;
    top: 50%;
    margin-top: -.31rem;
    z-index: 999;
    width:.62rem;
    height: .62rem;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px .14rem 2px rgba(50,50,50,0.48);
    border-radius:50%;
    display: block;

    img.right_icon {
      width:.16rem;
      height:.31rem;
      display: block;
      margin: .15rem auto 0;
    }
  }
}
.swiper_container_banner {
    height: 6.89rem;
    position:relative;
    img.bg{
      position:absolute;
      left:0;
      top:0;
      height: 6.89rem;
      width: 100%;
      display: block;
      filter: brightness(20%);
    }
}
.swiper-slide{
  width: 11.24rem;
  background:#fff;
  height:3.86rem;
  margin: 1.515rem auto 0;
  .img_text {
    overflow: hidden;
    font-size: .18rem;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(153,153,153,1);
    line-height: .27rem;
    text-align: left;
    img.icon_asdf {
      height:3.86rem;
      border-radius:2px;
      float: left;
      transition: all .4s ease-in-out;
      transition-property: all;
      transition-duration: 0.4s;
      transition-timing-function: ease-in-out;
      transition-delay: 0s;
    }
    img.icon_asdf:hover {
      transform: scale(1.03);
    }
    div.box {
      padding: .67rem .46rem 0;
      overflow: hidden;
      p.tx {
        font-size: .25rem;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(51,51,51,1);
        line-height: .34rem;
        margin-bottom: .51rem;
      }
    }
  }
 }

</style>
