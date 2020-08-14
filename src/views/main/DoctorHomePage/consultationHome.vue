<style lang="less" scoped>

.box {
  text-align: left;
  background: #fff;
}
.tw_zx {
  display: flex;
  background: #fff;
  margin: 0.2rem 0 0;
  padding: 0 .3rem;
  
  .tw_zx_son {
    text-align: center;
    width: 2.16rem;
    min-height: 2.8rem;
    background: #fff;
    border-radius: 0.1rem;
    margin: 0.2rem 0 0 ;
    position: relative;
    background:rgba(255,255,255,1);
    border: 1px solid #fff;
    box-shadow:0px 0.05px .2rem rgba(0,0,0,0.08);
    opacity:1;
    border-radius:3px;
    .img_box {
      width: 1.2rem;
      height: 1.2rem;
      margin: .4rem .48rem .1rem;
    }
    .img_tip {
      // margin-bottom: .17rem;
      .title, .price {
        font-size: 0.32rem;
        font-family: PingFang SC;
        font-weight:bold;
        color: #333333;
      }
      .title.no_disabled {
        color: #353535;
      }
      .disabled_name.title {
        color: @gray-9;
      }
      .price {
        font-size: .28rem;
        color: @primary;
      }
      .price.disabled_parice {
        color: @gray-9;
      }
    }
  }
  .dsa {
    margin: 0.2rem .2rem 0;
  }
  .tw_zx_son.sel{
    background:rgba(255,251,252,1);
    border:1px solid @primary;
    opacity:1;
    border-radius:3px;
  }
}
.xiayi_btn {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  font-weight: bold;
  
  /deep/ ._btn {
    border-radius: 0;
    letter-spacing: .01rem;
  }
}
.biank_box {
  width: 6.9rem;
  min-height: 2.52rem;
  margin: 0.3rem auto 0rem;
  position: relative;

  .biank_sel_img {
    position: absolute;
    top: -4px;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .bian_txt {
    font-size: 0.26rem;
    font-family: PingFang SC;
    font-weight: 400;
    color: rgba(53, 53, 53, 1);
    line-height: 22px;
    position: relative;
    padding: 0 0.3rem;
    overflow: hidden;

    p {
      margin-top: 0.15rem;
    }
  }
}

.doctor_home /deep/ .van-tabs__nav .van-tab  {
  flex: inherit;
  padding: 0;
  margin: 0 .5rem 0 .3rem;
  letter-spacing: .1rem;
}

.doctor_home /deep/ .van-tabs__nav  .van-tab.van-tab--disabled {
  margin-right: 0.3rem;
  flex: 1;
  justify-content: flex-end;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  
  .block {
    width:6.18rem;
    height:6.91rem;
    background-color: #fff;
    opacity:1;
    border-radius:.2rem;
    position:relative;
    .img_close {
      position:absolute;
      right: .24rem;
      top: .24rem;
      width: .45rem;
      height: .45rem;
      
    }
    .img_titl {
      width: 1.5rem;
      height: 1.5rem;
      position:absolute;
      top: -.75rem;
      left: 50%;
      margin-left: -.75rem;
    }
    .zxxz_titles {
      text-align:center;
      font-size:.32rem;
      font-family:PingFang SC;
      font-weight:bold;
      line-height: .4rem;
      color:rgba(0,0,0,1);
      opacity:1;
      margin: .97rem auto 0.22rem;
    }
    .zxxz_contet {
      font-size: .26rem;
      font-family:PingFang SC;
      font-weight:400;
      line-height: .4rem;
      color:rgba(0,0,0,1);
      opacity:1;
      padding: 0 .4rem 0;
    }
  }
}
.tips_detail_shiping {
  transition: all 0.3s, -webkit-transform 0.3s;
  transition-property: transform, -webkit-transform;
  transition-duration: 0.3s, 0.3s;
  transition-timing-function: ease, ease;
  transition-delay: 0s, 0s;
  background: #FFFBFC;
  border:1px solid #FEB8C8;
  color: #000;
  border-radius: 6px;
  // margin: .3rem .3rem;
  padding: .45rem;
  text-align:left;
  position:relative;
  font-size: .3rem;
  &::before{
    content: '';
    width: 0;
    height: 0;
    border-left: .2rem solid transparent;
    border-right: .2rem solid transparent;
    border-top: .2rem solid transparent;
    border-bottom: .2rem solid #FEB8C8;
    left: 50%;
    top: -0.4rem;
    position: absolute;
    margin-left: -.1rem;
  }
  &::after {
    content: '';
    width: 0;
    height: 0;
    border-left: .2rem solid transparent;
    border-right: .2rem solid transparent;
    border-top: .2rem solid transparent;
    border-bottom: .2rem solid #FFFBFC;
    left: 50%;
    top: -0.362rem;
    position: absolute;
    margin-left: -.1rem;
  }
}
.sss_cdde_adsf {
    transition: all 0.3s, -webkit-transform 0.3s;
    transition-property: transform, -webkit-transform;
    transition-duration: 0.3s, 0.3s;
    transition-timing-function: ease, ease;
    transition-delay: 0s, 0s;
    background: #FFFBFC;
    border:1px solid #FEB8C8;
    color: #000;
    border-radius: 6px;
    // margin: .3rem .3rem;
    padding: .45rem;
    text-align:left;
}
.tips_detail {

    position:relative;
    font-size: .3rem;
    &::before{
      content: '';
      width: 0;
      height: 0;
      border-left: .2rem solid transparent;
      border-right: .2rem solid transparent;
      border-top: .2rem solid transparent;
      border-bottom: .2rem solid #FEB8C8;
      left: 1rem;
      top: -.4rem;
      position:absolute;
    }
    &::after {
      content: '';
      width: 0;
      height: 0;
      border-left: .2rem solid transparent;
      border-right: .2rem solid transparent;
      border-top: .2rem solid transparent;
      border-bottom: .2rem solid #FFFBFC;
      left: 1rem;
      top: -.362rem;
      position:absolute;
    }
  }
.old_list {
  padding: .2rem .2rem 0;
  .i_swipe_box {
    margin: 0.12rem 0.1rem ;
    display: flex;
    justify-content:center;
    align-items:center;
    background:rgba(255,255,255,1);
    box-shadow:0px .05px .2rem rgba(0,0,0,0.08);
    opacity:1;
    border-radius:3px;
    height: 2.35rem;
    .neirong {
      text-align:center;
      img { 
        width: .85rem;
        height: .85rem;
      }
      p {
        background:rgba(255,255,255,1);
        margin-top: .3rem;
        font-size: .24rem;
        font-family:PingFang SC;
        font-weight:bold;
        line-height:.4rem;
        color:rgba(153,153,153,1);
        letter-spacing: .01rem;
        opacity:1;
      }
    }
    
  }
}
.jianjie_box {
  .cont_cont {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: .28rem;
    font-family:PingFang SC;
    font-weight:400;
    line-height: .43rem;
    color:rgba(51,51,51,1);
    letter-spacing: .01rem;
    opacity:1;
    .xiantiao {
      width:2.56rem;
      height:0px;
      border: .05px dashed  #b2b2b2;
      opacity:1;
      flex: 1;
      margin: 0 .3rem;
    }
    p.xi_ti {
      width: 1rem;
      text-align: center;
    }
  }
  
}
.doctor_home /deep/ .xuzhi {
    vertical-align: middle;
    font-size: .28rem;
    font-family: PingFang SC;
    font-weight: 400;
    letter-spacing: 0;
    color: rgba(153,153,153,1);
}

.not_data {
  text-align:center;
  color: rgba(153,153,153,1);
  padding: 1rem 0 .4rem;
}
</style>

<template>
  <div class="loading_list" v-if="loading">
    <van-skeleton title :row="6" class="loading_list_skeleton" v-for="(item, index) in 3" :key="index" />
  </div>
  <div class="box" v-else>
    <doctor-header :homeLock='true' :doctor-info="doctorInfo" />

    <van-divider :style="{padding: '.44rem 0 0',margin:'0 .3rem'}"/>
    <van-tabs v-model="activeName" sticky  animated class='doctor_home ' :title-active-color='BASE_COLOR_PRIMARY' :color='BASE_COLOR_PRIMARY' :border='false' line-width='.5rem' line-height='4px'>

      <van-tab  name="a">
        <template #title><b>服务内容</b></template>
            <div class="tw_zx" v-if="activeType>0">
              <div class="tw_zx_son" @click="activeCheck(item)" :class="[activeType === item.type ? 'sel': '', !item.open? 'add_filter': '', index == 1? 'dsa': '']" v-for="(item, index) in serverContent" :key="index">
                  <img class="img_box" v-if="item.type == 1" src="@/assets/img/dc_tw_sel@2x.png" alt />
                  <img class="img_box" v-else-if="item.type == 2" src="@/assets/img/3123@2x.png" alt />
                  <img class="img_box" v-else src="@/assets/img/2227@2x.png" alt />
                  <div class="img_tip">
                    <p :class="['title', item.open == 1 ? '': 'disabled_name']" >{{item.name}}</p>
                    <p class="price" v-if="item.open == 1">￥{{item.price}}/次</p>
                    <p class="price disabled_parice" v-else>未开通</p>
                  </div>

              </div>
            </div>
            <!-- 图文资讯简介 -->
            <div class="biank_box">
              <div class="jianjie_box sss_cdde_adsf" :class="[activeType == 1? 'tips_detail': '']" v-if="activeType == 1">
                <div class="cont_cont">
                  <p>· 医生接诊时长</p><p class="xiantiao"></p><p class="xi_ti">24小时</p>
                </div>
                <div class="cont_cont" style='margin: 0.24rem 0;'>
                  <p>· 咨询回合次数</p><p class="xiantiao"></p><p class="xi_ti">{{serverContent[activeType - 1].unit}}次</p>
                </div>
                <div class="cont_cont">
                  <p>· 图片发送次数</p><p class="xiantiao"></p><p class="xi_ti">不限</p>
                </div>

              </div>
              <!-- 视频咨询简介 -->
              <div class="sss_cdde_adsf" :class="[activeType == 2? 'tips_detail_shiping': '']" v-if="activeType == 2">

                <div class="cont_cont">
                  <p style="font-size:.28rem;">· 到达预约时间，医生根据情况与您视频交流</p>
                </div>
                <div class="cont_cont" style='margin: 0.3rem 0;'>
                  <p style="font-size:.28rem;">· 视频未接通可申请退款</p>
                </div>
                <div class="cont_cont">
                  <p style="font-size:.28rem;">· 视频时长最长20分钟</p>
                </div>
                
              
              </div>
              <div class="sss_cdde_adsf" v-if="activeType == 3">

              </div> 
            </div>
              <!-- 擅长简介 -->
            <good-introduction
              :userId='userId' 
              :consult-record="consultRecord"
              :consult-skilled-mark-list="consultSkilledMarkList"
            />
            
       </van-tab>
        <van-tab  name="c">
          <template #title><b>历史咨询</b></template>
          <div class="old_list" v-if="historyConsult.length>0">
            <swiper :options="swiperOptions">
              <swiper-slide v-for="(item, index) in historyConsult" :key="index">
                <div class="i_swipe_box" @click='goOldList(item)'>
                  <div class='neirong'>
                    <img  src="@/assets/img/wenjian@2x.png" /> 
                    <p>{{item.createDate}}</p>
                  </div>
                </div>
              </swiper-slide>
            </swiper>

          </div>
          <div class="not_data" v-else>暂无数据</div>
        </van-tab>
        <van-tab  name="d" disabled class="p_gu_hou_mian">
          <template #title>
            <span  class='xuzhi'>须知 </span>
            <van-icon @click="zixunTips=true" style='vertical-align: middle' name="warning-o" />
          </template>

        </van-tab>
    </van-tabs>
    <!-- 患者评价 -->
    <merberSay :userId='userId'  :review-record-list="reviewRecordList" />
    <!-- 咨询须知 -->
    <van-overlay :show="zixunTips" :z-index="999">
      <div class="wrapper" @click.stop>
        <div class="block" >
          <img src="@/assets/img/zxxz@2x.png" class="img_titl" alt="">
          <img src="@/assets/img/chacha@2x.png" class="img_close" @click="zixunTips = false" alt="">

          <p class="zxxz_titles">咨询须知</p>

          <p class="zxxz_contet" v-for="(item, index) in zxxzList" :key="index">{{item}}</p>
        </div>
      </div>
    </van-overlay>


    <van-divider :style="{padding: '.3rem'}"/>
    <div class="xiayi_btn">
      <van-button type="primary" class="_btn" size="large" v-if="activeType>0" @click="goDescription">{{serverContent[activeType - 1].name}}¥{{serverContent[activeType - 1].price}}元/次</van-button>
    </div>
  </div>
</template>

<script>
import { doctorIndexApi , cIfunctionModuleApi } from "@/api/doctorHomePage";
import goodIntroduction from "./cmpl/goodIntroduction";
import merberSay from "./cmpl/merberSay";
import doctorHeader from "@/components/cmpl/doctorHeader";

// import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'

export default {
  components: {
    doctorHeader,
    goodIntroduction,
    merberSay,
    // Swiper,
    // SwiperSlide
  },
  // directives: {
    // swiper: directive
  // },
  data() {
    return {
      // 选中菜单类型
      activeType: 0,
      // 咨询须知
      zxxzList: [
        "1、平台在线服务为医生本人回复建议，非医疗诊断行为",
        "2、若是复诊患者需要提供姓名、病历号、描述问题并告知末次月经、最新化验结果、诊疗阶段及用药情况",
        "3、因未面诊、医生的建议需谨慎参考，对于咨询过程中的后果，平台不承担法律责任。",
        "4、工作时段医生可能未及时回复您的提问，请您理解，工作结束后会尽快回复，请您耐心等待。",
        "5、咨询问题，医生超过48小时未回复，自动退回。"
      ],
      userId: this.$route.params.userId,
      // 医生信息
      doctorInfo: {
        brief: "",
        skilledIn: "",
        consultNum: 0,
        prasiRat: "100%",
        respRate: ""
      },
      reviewRecordList: {
        count: 0,
        recordList: []
      },
      reviewMarkList: {},
      consultRecord: {
        recordList: []
      },
      consultSkilledMarkList: {},
      docInfo: {
        technicalPost: "",
        departmentName: ""
      },
      type: "0",
      loading: true,
      // 咨询须知
      zixunTips: false,
      swiperOptions: {
        slidesPerView: 3
      },
      // 功能区
      cIfunctionModule: [],

      serverContent: [
        {}
      ],
      historyConsult: []
    };
  },
  created() {
    this.dataInit();
  },
  mounted() {
  
  },
  methods: {
    goOldList({consultId}) {
      this.$router.push(`/openChatConsul/${consultId}`)
    },
    activeCheck(item) {
      item.open == 1 && (this.activeType = item.type)
    },
    // 咨询跳转
    goDescription() {
      if (this.activeType == 1) {
        this.$router.push({
          path: '/descriptionDis',
          query: {
            userId: this.userId,
            type: this.activeType
          }
        })
      }else if (this.activeType == 2) {
        this.$toast('功能暂未开放')  
      }else {
        this.$toast('暂不支持该功能')  
      }
      
    },
    async dataInit() {
      let { data } = await doctorIndexApi(this.userId);
      this.loading = false;
      this.doctorInfo = data.doctorInfo;
      this.reviewRecordList = data.reviewRecordList;
      this.reviewMarkList = data.reviewMarkList;
      this.consultRecord = data.consultRecord;
      this.consultSkilledMarkList = data.consultSkilledMarkList;

      let cIfunctionModule = await cIfunctionModuleApi(this.userId)
      this.serverContent = cIfunctionModule.data.serverContent
      this.activeType = 1
      this.historyConsult = cIfunctionModule.data.historyConsult
    },
  }
};
</script>
