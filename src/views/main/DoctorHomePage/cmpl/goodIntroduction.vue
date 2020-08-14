<template>
  <div v-if="consultRecord.count>0">
    <div class="default_title doctor_home scfx">擅长方向</div>
    <div class="zdy_shanchang_box doctor_home">
      <van-button
        type="info"
        class="zdy_shanchang"
        v-for="(item, index) in consultSkilledMarkList"
        :key="index"
      >{{item.name + "(" + item.count + ")"}}</van-button>
      <div class="not_data" v-if="consultRecord.count == 0">暂无</div>
    </div>
    
    <!-- 用户问题 -->
    <div class="yhzx_wt" v-for="(item, index) in consultRecord.recordList" :key="index" @click='goDetails(item)'>
      <!-- <p class="title">匿名用户 6889/女 31岁</p> -->
      <p class="title">{{item.name + ' / ' + (item.sex ? '男 ' : '女 ') + item.age + '岁'}}</p>
      <p class="content ellipsize3">{{item.content}}</p>
      <p class="t">
        <span>{{(item.createDate) | formatDate('MM月dd日 hh:mm')}} {{item.readNum ? item.readNum : 0}}人看过</span>
      </p>
      <van-divider :style="{padding: '0'}" />
    </div>

    <div class="see_more" v-if="consultRecord.count>=3">
      <van-button
        type="info"
        :style="{color: BASE_COLOR_PRIMARY, fontSize:'.27rem'}"
        class="zdy_shanchang"
        @click="seeMore"
      >更多{{consultRecord.count}}个问题</van-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    consultSkilledMarkList: {
      type: Array,
      default: ()=> {
        return []
      }
    },
    userId: {
      type: String,
      default: ()=>{
        return ''
      }
    },
    consultRecord: {
      type: Object,
      default: ()=> {
        return {
          count: 0,
          recordList: []
        }
      }
    },
  },
  methods: {
    seeMore() {
      this.$router.push({
        path: '/goodInList',
        query: {
          userId: this.userId
        }
      })
    },
    goDetails({consultId}) {
      this.$router.push(`/openChatConsul/${consultId}`)
    }
  }
};
</script>

<style lang="scss" scoped>
.scfx.doctor_home {
  padding-top: 0.54rem;
}
.doctor_home {
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  background: #fff;
}
.zdy_shanchang_box {
  text-align: left;
  .zdy_shanchang {
    margin-right: 0.24rem;
    height: 0.68rem;
    margin-bottom: 0.2rem;
    font-size: 0.28rem;
    padding: 0 0.2rem;
  }
}
.yhzx_wt {
  padding: 0rem 0.3rem 0;
  overflow: hidden;
  text-align: left;
  .title {
    height: 0.48rem;
    font-size: 0.34rem;
    font-family: PingFang SC;
    font-weight: bold;
    line-height: 0.48rem;
    color: rgba(51, 51, 51, 1);
    opacity: 1;
  }
  .content {
    font-size: 0.32rem;
    font-family: PingFang SC;
    font-weight: 400;
    line-height: 0.4rem;
    color: rgba(102, 102, 102, 1);
    opacity: 1;
    margin: 0.15rem 0;
  }
  .t {
    font-size: 0.24rem;
    font-family: PingFang SC;
    font-weight: 400;
    line-height: 0.43rem;
    color: rgba(153, 153, 153, 1);
    opacity: 1;
  }
}
.see_more {
  text-align: center;
}
.not_data {
  padding: .4rem;
  text-align: center;
  color: #b2b2b2;
}
</style>
