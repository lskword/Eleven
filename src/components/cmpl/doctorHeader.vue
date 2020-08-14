<template>
  <div class="doct_b_her">
    <div class="header_box">
      <div class="left">
        <p class="icon">
          <span class="name ellipsize">{{doctorInfo.name}}</span>
          <!-- <img src="@/assets/img/2860@2x.png" alt="">
          <img src="@/assets/img/2861@2x.png" alt="">
          <img src="@/assets/img/2862@2x.png" alt=""> -->
        </p>
      </div>
      <div class="right">
        <img :src="doctorInfo.headPath" v-if="doctorInfo.headPath" alt="" class="user_icon">
        <img src="@/assets/img/doctor_defalut@2x.png" v-else alt="" class="user_icon">
      </div>
    </div>

    <div class="tips_doct">
      <p class="tip_btn"><span>{{doctorInfo.technicalPost}}</span> <span>{{doctorInfo.departmentName}}</span></p>
      <p class="tip_btn lst_f" v-if="homeLock" @click="goDoctorHome">主页</p>
    </div>
    <p class="tips_doct">{{doctorInfo.unitName}}</p>
    <p class="tips_doct jj " :class="[showOrHide ? '' : 'ellipsize2']">
      <span>{{doctorInfo.brief}}</span>
      <template v-if="doctorInfo.brief.length >50">
        <span class="show_or_hide" @click="showOrHide = !showOrHide" v-if="!showOrHide">... 详情></span>
        <span class="show_shouqi" @click="showOrHide = !showOrHide" v-else> 收起</span>
      </template>
    </p>

    <div class="tags_box" v-if="tipLock">
      <van-tag type="primary" class="tag_son" v-for="(item, index) in doctorInfo.skilledIn.split(',')" :key="index">{{item}}</van-tag>
    </div>

    <div class="list_num">
      <p><span class="num">{{doctorInfo.consultNum}}</span><span class="val"> 咨询数</span></p>
      <p><span class="num">{{doctorInfo.respRate || '良好'}}</span><span class="val"> 回复率</span></p>
      <p><span class="num">{{doctorInfo.prasiRat | toPercent}}</span><span class="val"> 好评率</span></p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      doctorInfo: {
        type: Object,
        default: () => {
          return {
            // 医生信息
            brief: '',
            skilledIn: '',
            consultNum: 0,
            prasiRat: "100%",
            respRate: ''
          }
        }
      },
      homeLock: {
        type: Boolean,
        default: ()=> {
          return false
        }
      },
      // 是否显示tips标签(默认显示)
      tipLock: {
        type: Boolean,
        default: ()=> {
          return true
        }
      }
    },
    methods: {
      goDoctorHome() {
        this.$router.replace({
          path: '/doctorHome/' + this.doctorInfo.id
        })
      }
    }
  }
</script>

<style lang="less" scoped>
.doct_b_her {
  padding: 0 .3rem;
  background: #fff;
}
.header_box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .58rem 0 .19rem;
  text-align: left;
  .left {
    p.icon {
      display: flex;
      justify-content:space-around;
      align-items:center;
      img {
        height:.42rem;
        width:.3rem;
        display: block;
        margin-right: .15rem;
      }
      span.name {
        max-width: 3.5rem;
        height: .84rem;
        font-size: .6rem;
        font-family:PingFang SC;
        font-weight:bold;
        line-height: .84rem;
        color:rgba(51,51,51,1);
        opacity:1;
        margin-right: .25rem;
      }
    }
  }
  .right {
    .user_icon {
      width:1.20rem;
      height:1.20rem;
      background:rgba(231,237,234,1);
      border-radius:50%;
      opacity:1;
    }
  }
}
.tips_doct {
    height: .40rem;
    font-size: .28rem;
    font-family:PingFang SC;
    font-weight:400;
    line-height: .43rem;
    color:rgba(51,51,51,1);
    opacity:1;
    text-align: left;
    margin-bottom: 0.07rem;
    display: flex;
    justify-content: space-between;
    .lst_f {
      margin-right:.1rem;
      margin-top: -.15rem;
      width:1rem;
      height: .5rem;
      background:rgba(243,243,243,1);
      opacity:1;
      border-radius: .06rem;
      font-size: .24rem;
      font-family:PingFang SC;
      font-weight:400;
      line-height: .43rem;
      color:@primary;
      letter-spacing:.01rem;
      opacity:1;
      text-align: center;
      line-height: .5rem;
    }
  }
  .tips_doct.jj {
    margin-top: .29rem;
    margin-bottom: 0;
    font-size: .26rem;
    position: relative;
    .show_or_hide {
      position: absolute;
      right: 0;
      bottom: 0;
      z-index: 1;
      background: #fff;
      color: #999999;
    }
    .show_shouqi{
      color: #999999;
    }
  }
  .tags_box {
    margin-top: .5rem;
    margin-bottom: .12rem;
    text-align: left;
    .tag_son {
      margin-right: .22rem;
      margin-bottom: .2rem;
      font-size: .24rem;
    }
  }
  .list_num {
    display: flex;
    p {
      margin-right: .7rem;
    }
    p > span.num {
      height:.53rem;
      font-size:.38rem;
      font-family:PingFang SC;
      font-weight:600;
      line-height:.53rem;
      color:rgba(51,51,51,1);
      letter-spacing:.01rem;
      opacity:1;
    }
    p > span.val {
      height: .28rem;
      font-size: .2rem;
      font-family:PingFang SC;
      font-weight:400;
      line-height: .43rem;
      color:rgba(51,51,51,1);
      opacity:1;
    }
  }
</style>
