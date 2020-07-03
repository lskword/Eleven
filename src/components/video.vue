<template>
  <div class="docot_box">
    <div class="swiper-container3">
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for="(item, index) in 5" :key="index">
        <div class="img_text">
          <img src="//ileyun.ivfcn.com/tools/static/img/video1.png" class="icon_video">
          <div class="video_name">卵泡检测</div>
          <!-- <div class=""></div> -->
          <!-- <div :class='["box animated zoomInUp", ("hover_box" + index)]'>
            <p class="tx">HCG与黄体酮和流产的关系</p>
            <p >妊娠时，受精卵伸出小爪子（人绒毛）抓住子宫内膜，这时候尿液血液会检测出人绒毛膜促性腺激素HCG。妊娠时，受精卵伸出小爪子（人绒毛）抓住子宫内膜，这时候尿液血液会检测出人绒毛膜促性腺激素HCG。</p>
          </div> -->
        </div>
			</div>
		</div>
		<!-- <div class="swiper-pagination1"></div> -->
    
	</div>
  <div class="swiper-button-prev2 adx">
      <img src="@/assets/img/cursor-prev.png" class="left"/>
    </div>
    <div class="swiper-button-next2 adx_right">
      <img src="@/assets/img/cursor-next.png" class="right_icon"/>
    </div>
  </div>
</template>

<script>
  
  export default {
      mounted() {
        var swiper2 = new Swiper('.swiper-container3', {
          spaceBetween: 0,
          slidesPerView: '2',
          freeMode: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          prevButton: '.swiper-button-prev2',
          nextButton: '.swiper-button-next2',
        }); 
      }
  } 
</script>

<style lang="scss" scoped>
.docot_box {
  width: 100%;
  position:relative;
  .swiper-slide {
    border-radius: 10px;
  }
  .adx {
    position: absolute;
    left: 0%;
    margin-left: 2.5rem;;
    bottom: -.8rem;
    margin-top: -.29rem;
    z-index: 999;
    width:.58rem;
    height: .58rem;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 14px 1px rgba(245,245,245,1);;
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
    right: 0%;
    margin-right: 2.5rem;;
    bottom: -.8rem;
    margin-top: -.29rem;
    z-index: 999;
    width:.58rem;
    height: .58rem;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 14px 1px rgba(245,245,245,1);;
    border-radius:50%;
    display: block;

    img.right_icon {
      width:.16rem;
      height:.31rem;
      display: block;
      margin: .15rem auto 0;
    }
  }
.swiper-container3 {
  width: 1120px;
}

.img_text{ 
  width:5.33rem;
  height:3.7rem;
  background:rgba(255,255,255,1);

  transition: all .4s ease-in-out;
  transition-property: all;
  transition-duration: 0.4s;
  transition-timing-function: ease-in-out;
  transition-delay: 0s;

  font-size: .28rem;
  font-family:Microsoft YaHei;
  font-weight:400;
  color:rgba(0,0,0,1);
  line-height: .27rem;
  border-radius: 10px;
  .video_name {
    margin: .21rem .44rem;
    text-align:left;
  }
  .icon_video{
    height: 3rem;
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;;
    // filter: grayscale(50%);
  }
}

.img_text:hover {
    box-shadow:0px 10px 18px 0px rgba(235,235,235,1);
      transform: translateY(-20px);
    cursor: pointer;
    .icon_video {
      // filter: grayscale(0%);
    }
}
 }
</style>
