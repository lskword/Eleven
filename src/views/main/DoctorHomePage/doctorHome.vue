<style lang="less" scoped>
.scfx.doctor_home {
  padding-top: .54rem;
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
.xiayi_btn {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  font-weight: bold;
  ._btn {
    border-radius: 0;
    letter-spacing: .01rem;
  }
}
</style>

<template>
  <div class="loading_list" v-if="loading">
    <van-skeleton title class="loading_list_skeleton" :row="6" v-for="(item, index) in 3" :key="index" />
  </div>
  
  <div class=" doctor_home_box" v-else>
    <!-- 医生头部信息 -->
    <doctor-header :doctor-info='doctorInfo'/>

    <van-divider :style="{padding: '.44rem 0 0',margin:0}"/>
    
    <van-tabs v-model="activeName" sticky  animated class='doctor_home fen_san_bu_ju margin-lr-3' :title-active-color='BASE_COLOR_PRIMARY' :color='BASE_COLOR_PRIMARY' :border='false' line-width='.5rem' line-height='4px'>
      <van-tab  name="a">
        <template #title><b>主页</b></template>

        <div class='grid_tabs'>
          <van-grid :border="false" :column-num="3" :icon-size='".8rem"'>
            <van-grid-item :to='`/reservationDoctor/${$route.params.userId}`' :icon="require('@/assets/img/2330@2x.png')"  >
            <!-- <van-grid-item  :icon="require('@/assets/img/2330@2x.png')"  > -->
              <template #text>
                <span class="text">预约挂号</span>
              </template>
            </van-grid-item>
            <van-grid-item  :to='`/consultationHome/${$route.params.userId}`' :icon="require('@/assets/img/2331@2x.png')">
              <template #text>
                <span class="text">在线问诊</span>
              </template>
            </van-grid-item>
            <van-grid-item  :icon="require('@/assets/img/2328@2x.png')">
             <template #text>
                <span class="text">精准预约</span>
              </template>
            </van-grid-item>
          </van-grid>
        </div>

        <!-- 擅长简介 -->
        <good-introduction 
          :consult-record='consultRecord'
          :userId='userId' 
          :consult-skilled-mark-list='consultSkilledMarkList'/>
        <!-- 患者评价 -->
        <merberSay :userId='userId' :review-mark-list='reviewMarkList'  :review-record-list='reviewRecordList' />

      </van-tab>
      
      <van-tab  name="b">
        <template #title><b>直播</b></template>
        <liveList ></liveList>
      </van-tab>
      <van-tab  name="c">
        <template #title><b>课程</b></template>
        <classList :course-list='courseList'></classList>
      </van-tab>
      <!-- <van-tab  name="d">
        <template #title><b>圈子</b></template>
        内容 3
      </van-tab> -->
    </van-tabs>

    <van-divider :style="{padding: '.3rem'}"/>
    <div class="xiayi_btn">
      <van-button type="primary" class="_btn" size="large" @click="goConsultHome">向医生咨询¥{{doctorInfo.minPrice}}元起</van-button>
    </div>
  </div>
</template>

<script>
import {doctorIndexApi, doctorDIfunctionModuleApi} from '@/api/doctorHomePage'
import goodIntroduction from './cmpl/goodIntroduction'
import merberSay from './cmpl/merberSay'
import liveList from './cmpl/liveList'
import classList from './cmpl/classList'

import doctorHeader from '@/components/cmpl/doctorHeader'
  export default {
    components: {
      doctorHeader,
      goodIntroduction,
      merberSay,
      liveList,
      classList
    },
    data() {
      return {
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
        reviewMarkList: [],
        consultRecord: {
          recordList: []
        },
        consultSkilledMarkList: {},
        loading: true,
        showOrHide: false,
        userId: this.$route.params.userId,

        courseList: [],
        live: [],
        circle: []
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
        this.doctorInfo = data.doctorInfo;
        this.reviewRecordList = data.reviewRecordList;
        this.reviewMarkList = data.reviewMarkList;
        this.consultRecord = data.consultRecord;
        this.consultSkilledMarkList = data.consultSkilledMarkList;

        // 直播课程列表
        // let doctorDIfunction  = await doctorDIfunctionModuleApi(this.userId);
        // var {courseList, live, circle} = doctorDIfunction.data;
        // this.courseList = courseList;
        // this.live = live;
        // this.circle = circle;
        // console.log(courseList);
      }
    }
  }
</script>

