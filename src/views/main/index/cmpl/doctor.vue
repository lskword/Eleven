<template>
  <div class="docot_box ease-in-out">
    <div class="swiper-container1">
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for="(item, index) in doctorList" :key="index">
        <div class="img_text">
          <img :src="item.path"	 class="icon_asdf sel_btn">
          <div :class='["box animated zoomInUp", ("hover_box" + index)]'>
            <p class="tx">{{item.name}}</p>
            <p v-html="item.txt"></p>
          </div>
          <div class="name">{{item.name}}</div>
        </div>

			</div>
		</div>
		<div class="swiper-pagination1"></div>
    
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
      data () {
        return {
          doctorList: [
            {name: '徐嘉宁', path: '//ileyun.ivfcn.com/tools/static/img/a.jpg', txt: '各种不孕症的诊治，试管婴儿及人工授精辅助生殖技 术的应用，生殖内分泌疾病的诊治，具有扎实的不孕 症理论基础及一定的诊疗经验。'},
            {name: '赵萌', path: '//ileyun.ivfcn.com/tools/static/img/b.jpg', txt: '擅长女性不孕症、多囊卵巢综合征、生殖内分泌等疾病诊治。'},
            {name: '靳镭', path: '//ileyun.ivfcn.com/tools/static/img/c.jpg', txt: '第五届中华医学会生殖医学分会委员。第一~三届中华医学会生殖医学分会实验室学组委员。第三届湖北省生殖医学会副主任委员，候任主任委员。国家卫计委人类辅助生殖技术及精子库评审专家库成员'},
            {name: '张翠莲', path: '//ileyun.ivfcn.com/tools/static/img/d.jpg', txt: '不孕症诊治、辅助生育技术（包括试管婴儿技术）、 子宫内膜异位症、生殖内分泌疾病。'},
            {name: '于文竹', path: '//ileyun.ivfcn.com/tools/static/img/e.jpg', txt: '生殖遗传门诊咨询、各种不孕症及生殖内分泌疾病的诊治、试管婴儿PGD技术的应用。'}

          ]  
        }
      },
      mounted() {
         new Swiper('.swiper-container1', {
          slidesPerView: '4',
          spaceBetween: 0,
          freeMode: true,
          pagination: {
            el: '.swiper-pagination1',
            clickable: true,
          },
          
          prevButton: '.swiper-button-prev2',
          nextButton: '.swiper-button-next2',
        }); 

        // $('.sel_btn').each((index, item)=> {
        //   $(item).on({
        //       mouseenter: function () {
        //           $('.hover_box' + index).show()
        //       },
        //       mouseleave: function () {
        //           $('.hover_box' + index).hide()
        //       }
        //   })
        // })
        
      }
  } 
</script>

<style lang="scss" scoped>
.docot_box {
  padding-left: .64rem;
  position:relative;
  .adx {
    position: absolute;
    left: 50%;
    margin-left: -1.28rem;;
    bottom: -1rem;
    margin-top: -.29rem;
    z-index: 999;
    width:.58rem;
    height: .58rem;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 14px 1px rgba(245,245,245,1);
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
    right: 50%;
    margin-right: -1.28rem;;
    bottom: -1rem;
    margin-top: -.29rem;
    z-index: 999;
    width:.58rem;
    height: .58rem;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 14px 1px rgba(245,245,245,1);
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
.swiper-container1 {
  width:14.4rem;
  margin:0 auto;
  overflow: hidden;
  
}
.swiper-container {
  margin: .58rem .31rem .15rem;
}
.swiper-slide{
  height:2.95rem;
  width: 2.88rem;
  border-radius:2px;
  .img_text {
    font-size: .18rem;
    font-family:Microsoft YaHei;
    font-weight:400;
    line-height: .27rem;
    position:relative;
    text-align: left;
    cursor: pointer;
    width: 2.88rem;
    height: 100%;
    img.icon_asdf {
      width: 2.88rem;
      height:2.95rem;
      border-radius:2px;
      float: left;
    }
    
    div.box {
      padding: .47rem .22rem;
      overflow: hidden;
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      width: 2.44rem;
      height: 2.05rem;
      background: rgba(0, 0, 0, 0.7);
      z-index: 999;
      text-align: center;
      p {
        font-size:.16rem;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:.27rem;
        text-align:left;
      }
      p.tx {
        font-size:.14rem;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:.33rem;
        text-align: center;
      }
    }
  }
  .img_text:hover div.box {
      display: block;
    }
  .img_text>.name {
    position:absolute;
    text-align: center;
    left:0;
    bottom:0;
    width: 1.9rem;            
    height: .48rem;
    line-height: .48rem;            
    color: #fff;            
    background:url("../../../../assets/img/111@2x.png") no-repeat center center;
    z-index: 9;
    background-size: 100%; 
  }

 }
</style>
