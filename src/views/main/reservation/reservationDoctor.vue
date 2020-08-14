<style lang="less" scoped>
.scfx.doctor_home {
  padding-top: .4rem;
}
.doctor_home_box {
  background-color: #fff;
}
.doctor_home {
  padding-left: .3rem ;
  padding-right: .3rem ;
  background: #fff;
  
  .grid_tabs {
    margin: 0 -.3rem;
    margin-top: .34rem;
    /deep/ .text {
      font-size: .28rem;
      font-family:PingFang SC;
      font-weight:600;
      line-height:.4rem;
      margin-top: .2rem;
      color:rgba(67,67,67,1);
      -webkit-text-stroke:0.5 rgba(67,67,67,1);
      text-stroke:0.5 rgba(67,67,67,1);
      opacity:1;
    }
  }
}
.check_box_sel {
  // padding: 0 .3rem;
  // display: flex;
  font-size: .24rem;
  font-family:PingFang SC;
  font-weight:400;
  line-height: .43rem;
  color:rgba(153,153,153,1);
  letter-spacing: .01rem;
  opacity:1;
  .left_box {
    padding-top: .77rem;
    float: left;
    width: .36rem;
    height: .78rem;
    margin-left: .3rem;
    // margin-right: 0.28rem;
    p.top {
      margin: .12rem 0 .2rem
    }
  }
  .right_box {
    margin-left: .9rem;

  }
}
.swiper-container_b {
  padding-left: .9rem; 
}
.swiper_slide {
  width: .84rem;
  .dates_box {
    font-size: .24rem;
    font-family:PingFang SC;
    font-weight:400;
    line-height: .43rem;
    color:rgba(86,91,110,1);
    letter-spacing: .01rem;
    opacity:1;
  }
  .neirong {
      p {
        border-radius:50%;
        opacity:1;
        font-size: .28rem;
        font-family:PingFang SC;
        font-weight:400;
        width: .8rem;
        height: .8rem;
        line-height:.8rem;
        border:1px solid rgba(178,178,178,1);
      }
      p.not_sel {
        background:rgba(255,255,255,1);
        border:1px solid rgba(178,178,178,1);
        color:rgba(86,91,110,1);
        letter-spacing:.01rem;
        opacity:1;
      }
      p.sel{
        color: #fff;
        background-color:@primary;
        border:1px solid @primary;
      }
      p.top {
        margin: .12rem 0 .2rem
      }
      p.not_data {
        background:rgba(243,243,243,1);
        border-radius:50%;
        opacity:1;
        border:1px solid #f3f3f3;
      }
    
  }
}
.xiayi_btn {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  ._btn {
    border-radius: 0;
    letter-spacing: .01rem;
  }
}
.zdy_shanchang_box {
  text-align: left;
  /deep/ .tag_son {
    height: .5rem;
    line-height: .5rem;
  }
}
.jieshao_title {
  font-size:.26rem;
  font-family:PingFang SC;
  font-weight:400;
  line-height: .38rem;
  color:rgba(111,115,128,1);
  letter-spacing: .01rem;
  opacity:1;
  padding: 0 .3rem;
  text-align:left;
}
</style>

<template>
  <div class="loading_list" v-if="loading">
    <van-skeleton title class='loading_list_skeleton' :row="6" v-for="(item, index) in 3" :key="index" />
  </div>
  
  <div class=" doctor_home_box" v-else>
    <!-- 医生头部信息 -->
    <doctor-header :tip-lock='false' :homeLock='true' :doctor-info='doctorInfo'/>

    <van-divider :style="{padding: '.44rem .3rem 0',margin:0}"/>

    <!-- 精准预约 -->
    <good-introduction 
      :consult-record='consultRecord'
      :userId='userId' 
      :consult-skilled-mark-list='consultSkilledMarkList'/>

      <div class="check_box_sel">
        <div class="left_box">
          <p class='top'>上午</p>
          <p>下午</p>
        </div>
        <div class="right_box">
          <swiper  :options="swiperOptions">
            <swiper-slide v-for="(item, index) in 10" class="swiper_slide" :key="index">
                <div class="dates_box">
                  <p>{{'07-'+ (8 + index)}}</p>
                  <p>周三</p>
                </div>

                <div class='neirong'>
                  <p :class="['top', sel_active == index? 'sel': '']" @click='sel_active = index'>5</p>
                  <p class='not_data'>无</p>
                </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>

    <div class="default_title doctor_home scfx">适用疾病范围</div>
    <div class="zdy_shanchang_box doctor_home">
      
      <van-tag 
        type="primary" 
        class="tag_son"
        v-for="(item, index) in consultSkilledMarkList"
        :key="index"
      >{{item.name + "(" + item.count + ")"}}</van-tag>
    </div>
      
    <van-divider :style="{padding: '.3rem .3rem 0', margin: 0}"/>

    <div class="default_title doctor_home scfx">服务介绍</div>

    <div class="jieshao_title">
      精准预约为医生利用工作之外的时间为患者提供线下的疾病诊疗服务，爱乐孕工作人员指导患者现在就医。
    </div>
    <div :style="{padding: '.3rem', margin: '.3rem 0'}"/>
    <div class="xiayi_btn">
      <van-button type="primary" class="_btn" size="large" @click="goConsultHome">向医生咨询¥30元起</van-button>
    </div>
  </div>
</template>

<script>
import {doctorIndexApi} from '@/api/doctorHomePage'
import goodIntroduction from './cmpl/goodIntroduction'
import doctorHeader from '@/components/cmpl/doctorHeader'
  export default {
    components: {
      doctorHeader,
      goodIntroduction,
    },
    data() {
      return {
        // 选中的号源
        sel_active: '',
        // 医生信息
        doctorInfo: {
          brief: '',
          skilledIn: '',
          consultNum: 0,
          prasiRat: "100%",
          respRate: ''
        },
        reviewRecordList: {
          count: 0,
          recordList: []
        },
        swiperOptions: {
          slidesPerView: 'auto',
          spaceBetween: 10,
        },
        reviewMarkList: {},
        consultRecord: {
          recordList: []
        },
        consultSkilledMarkList: {},
        loading: true,
        showOrHide: false,
        userId: this.$route.params.userId,
      }
    },
    created() {
      this.dataInit()
    },
    methods: {
      goConsultHome() {
        this.$router.push({
          path: '/consultationHome/'+ this.userId,
        })
      },
      async dataInit() {

        let {data} = await doctorIndexApi(this.userId);
        this.loading = false;
        this.doctorInfo = data.doctorInfo
        this.reviewRecordList = data.reviewRecordList
        this.reviewMarkList = data.reviewMarkList
        this.consultRecord = data.consultRecord
        this.consultSkilledMarkList = data.consultSkilledMarkList
      }
    }
  }
</script>

