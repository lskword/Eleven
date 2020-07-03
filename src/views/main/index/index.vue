<style lang="less" scoped>
img.icon_bannaer {
    width: 100vw;
    height: 6.58rem;
    display: block;
}
.content_box {
  width: 14.4rem;
  margin: 0 auto;
  text-align: left;
}
.cot_box {
  display: flex;

  .son.son_q {
    flex: 2
  }
  .son {
    .yyicons {
      width: 2.90rem;
      height: 1.10rem;
      display: block;
      float: left;
      margin: 0 0.5rem 0.45rem 0.2rem;
      box-shadow: 0 10px 20px 0 rgba(0,0,0,.05);
      border-radius: 4px;
      -webkit-filter: grayscale(100%);
      -moz-filter: grayscale(100%);
      -ms-filter: grayscale(100%);
      -o-filter: grayscale(100%);
      filter: grayscale(100%);
      filter: gray;
      transition: all .2s ease-in-out;
      transition-property: all;
      transition-duration: 0.2s;
      transition-timing-function: ease-in-out;
      transition-delay: 0s;
      cursor:pointer;
    }
    .yyicons:hover {
      filter: grayscale(0%);
      box-shadow: 0 15px 20px rgba(255,231,231,0.58), 0 4px 10px rgba(255,231,231,0.58);
      transform: translateY(-6px);
    }
    .yyicons.one {
       filter: grayscale(0%);
    }
  }
  .son.hzyy {
    
    .title {
      font-size: .28rem;
      font-family:Microsoft YaHei;
      font-weight:400;
      color:rgba(51,51,51,1);
      line-height:.28rem;
      margin: .61rem 0 .27rem;
    }
    .title_detail {
      width:6.18rem;
      font-size: .18rem;
      font-family:Microsoft YaHei;
      font-weight:400;
      color:rgba(102,102,102,1);
      line-height: .32rem;
      margin-bottom: .5rem;
    }
    .sm_tx_details {
      display:flex;
      margin-bottom: .28rem;
      img {
        width: .15rem;
        height: .15rem;
        display: inline-block;
        margin-right:.14rem;
      }
      b {
        height:.19rem;
        font-size:.18rem;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(51,51,51,1);
        line-height:.19rem;
        display: inline-block;
      }
      span {
        height: .17rem;
        font-size: .16rem;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(102,102,102,1);
        line-height:.17rem;
        display: inline-block;
      }
    }
  }
  .son.gnts {
    margin-bottom: .86rem;
  }
  .son {
    flex: 1;
    text-align: left;
    .tintong {
      width:4.57rem;
      height:4.16rem;
      display: block;
    }
    .icon_my.two {
      background:rgba(255,255,255,1);
      box-shadow:0px 20px 35px 4px rgba(255,231,231,0.58);
      width: 3.07rem;
      height: 2.3rem;
      text-align: center;
      img.ic {
        margin: .36rem auto .3rem;
      }
    }
    .two_t {
      font-size: .27rem;
      font-family:Microsoft YaHei;
      font-weight:400;
      color:@primary-color;
      line-height:.27rem;
      margin-bottom: .21rem;
    }
    .icon_my {
      float: left;
      margin-right:1.44rem;
      .ic {
        width: .586rem;
        height: .55rem;
        display: block;
        margin: .77rem auto .12rem;
      }
      p.t {
        font-size: .23rem;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(51,51,51,1);
        line-height: .33rem;
      }
    }
    .card:hover {
      box-shadow: 0 15px 20px rgba(255,231,231,0.58), 0 4px 10px rgba(255,231,231,0.58);
      transform: translateY(-6px);
    }
    .card {
      transition: all .2s ease-in-out;
      transition-property: all;
      transition-duration: 0.2s;
      transition-timing-function: ease-in-out;
      transition-delay: 0s;
      width: 2.96rem;
      height: 1.42rem;
      border-radius: 8px;
      box-shadow:0px 20px 35px 6px rgba(245,245,245,1);
      float: left;
      margin-bottom: .3rem;
      margin-right: .3rem;
      cursor:pointer;
      
      img.icon {
        width: .488rem;
        height: .5rem;
        display: block;
        margin: .46rem .14rem .46rem .35rem;
        float: left;
      }
      div.txt_box {
        font-size: .16rem;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(153,153,153,1);
        line-height: .24rem;
        float: left;
        width: 1.87rem;
        p {
          width: 1.64rem;
        }
        p.one_t {
          font-size: .24rem;
          font-family:Microsoft YaHei;
          font-weight:400;
          color:rgba(51,51,51,1);
          line-height: .24rem;
          margin: .32rem 0 .13rem;
        }
      }
      
    }
    .img_box_d {
      width: 1.43rem;
      height: 1.43rem;
      box-shadow:0px 1px 5px 5px rgba(255, 231, 231, 0.58);;
      overflow: hidden;
      border-radius:100%;
      img.icon_d {
        width: .7rem;
        height: .77rem;
        display: block;
        margin: .33rem auto 0;
      }

    }
      p.title_d {
        font-size: .24rem;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(51,51,51,1);
        line-height: .24rem;
        margin: .2rem 0 .15rem;
        padding: .0 .2rem;
      }
      p.txt_box_d {
        font-size: .18rem;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(153,153,153,1);
        line-height: .27rem;
         padding: .0 .2rem;
         width: 5.93rem;
      }
    .card.yyys {
      box-shadow:0px 20px 35px 4px rgba(255,231,231,0.58);
      // -webkit-animation-name: pulse;
      // animation-name: pulse
    }
  }
  
    .title_detail {
      font-size: .18rem;
      font-family:Microsoft YaHei;
      font-weight:400;
      color:rgba(102,102,102,1);
      line-height:.32rem;
      transition: all .4s ease-in-out;
      transition-property: all;
      transition-duration: 0.4s;
      transition-timing-function: ease-in-out;
      transition-delay: 0s;
      transform: translateY(20px);
    }
  
}

</style>

<template>
  <div>
    <div>
      <img class="icon_bannaer" src="//ileyun.ivfcn.com/tools/static/img/banner1@2x.png" />
    </div>
    <div class="content_box">
      <div class="gnts_default">功能特色</div>
      <div class="cot_box">
        <div class="son gnts">
          <div :class="['card', active == index ? 'yyys': '']" @click='active = index' v-for="(item, index) in gntsList" :key="index">
            <img :src="item.icon" alt="" class="icon">
            <div class="txt_box">
              <p class="one_t">{{item.name}}</p>
              <p>{{item.content.substr(0, 20)}}</p>
            </div>
          </div>
        </div>
        <div class="son">
          <div class="img_box_d">
            <img :src="gntsList[active].icon" alt="" class="icon_d">
          </div>
          <p class="title_d">
            {{gntsList[active].name}}
          </p>
          <p class="txt_box_d">
            {{gntsList[active].content}}
          </p>
        </div>
      </div>
      </div> 
      <banner/>
      <div class="content_box ease-in-out">
      <div class="gnts_default ">名医问答</div>
        <div class="cot_box">
          <div class="son son_q">
            <div class="icon_my">
              <img src="@/assets/img/yxicon@2x.png" alt="" class="ic">
              <p class="t">全程主诊</p>
            </div>
            <div class="icon_my two">
              <img src="@/assets/img/sdicon@2x.png" alt="" class="ic">
              <p class="two_t">便捷通道</p>
              <p class="t">知名生殖专家快速预约</p>
            </div>
            <div class="icon_my">
              <img src="@/assets/img/babyicon@2x.png" alt="" class="ic">
              <p class="t">快乐好孕</p>
            </div>
          </div>
          <div class="son">
            <img src="@/assets/img/262950@2x.png" alt="" class="tintong">
          </div>
        </div>
      <div class="gnts_default">专家推荐</div>
      <doctor/>
      <div class="gnts_default">合作医院</div>
      <div class="cot_box">
        <div class="son hzyy">
          <p class='title'>河南省人民医院</p>
          <p class='title_detail'>
            河南省生殖医院前身为河南省人民医院生殖医学研究所（生殖中心），成立于2001年。2002年第一例试管婴儿、一对龙凤胎健康出生。河南省生殖医院是河南省内开展较早、规模较大、实力较强的生殖医学机构，是高起点、高标准打造，以不孕症诊疗与辅助生殖技术为核心的临床、教学和科研机构。</p>
          <p class='sm_tx_details'><img  src="@/assets/img/duihao@2x.png" alt=""/><b>业务技术领先：</b> <span>全国首家公立生殖专科医院。</span></p>
          <p class='sm_tx_details'><img src="@/assets/img/duihao@2x.png" alt=""/><b>人才梯队完整：</b> <span>目前团队成员148人，高级职称13名，博士15名，硕士35名。</span></p>
          <p class='sm_tx_details'><img src="@/assets/img/duihao@2x.png" alt=""/><b>科研平台一流：</b> <span>共有17个亚专业和10个亚专科</span></p>
        </div>
        <div class="son">
          <!-- @click="yyActive = index" -->
          <img :src="item" v-for="(item, index) in yylogo" :key="index" alt=""  :class="['yyicons', yyActive == index? 'one': '']">
        </div>
      </div>
      </div>
  </div>
</template>

<script>
import banner from './cmpl/banner.vue';
import doctor from './cmpl/doctor.vue'
  export default {
    components: {
      banner,
      doctor 
    },
    data() {
      return {
        active: 0,
        yyActive: 0,
        gntsList: [
          {icon: '//ileyun.ivfcn.com/tools/static/img/yygh.png', name: '预约挂号', content: '预约挂号是各地近年来开展的一项便民就医服务，旨在缩短看病流程，节约患者时间。预约挂号是各地近年来开展的一项便民就医服务，旨在缩短看病流程，节约患者时间。预约挂号是各地近年来开展的一项便民就医服务，旨在缩短看病流程.'},
          {icon: '//ileyun.ivfcn.com/tools/static/img/kstw.png', name: '快速提问', content: '次级问题通常被设置在一个初级提问或者次级提问之后，用来发现其他的隐含信息.'},
          {icon: '//ileyun.ivfcn.com/tools/static/img/zjwz.png', name: '专家问诊', content: '周末快捷的咨询到北大口腔医院的主任医师，而且医生的接单速度和专业水准.'},
          {icon: '//ileyun.ivfcn.com/tools/static/img/dzbl.png', name: '电子病历', content: '结构化电子病历的应用使得庞大的医疗信息得以保存下来，为医疗大数据的形成提供了重要的介质。'}
        ],
        yylogo: [
          '//ileyun.ivfcn.com/tools/static/img/_08.png',
          "//ileyun.ivfcn.com/tools/static/img/select_03.png",
          "//ileyun.ivfcn.com/tools/static/img/select_08.png",
          "//ileyun.ivfcn.com/tools/static/img/select_06.png",
          "//ileyun.ivfcn.com/tools/static/img/_108.png",
          "//ileyun.ivfcn.com/tools/static/img/_09.png",
        ],
        swiperOption:{
          slidesPerView: 'auto',
          centeredSlides:true,
          spaceBetween: 10,
          loop:true,
          speed:600, //config参数同swiper4,与官网一致
        }
      }
    },
  }
</script>

