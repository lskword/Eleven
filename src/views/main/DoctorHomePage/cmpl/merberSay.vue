<template>
  <div v-if="reviewRecordList.count>0">
    <div class="default_title doctor_home hzpj">
      患者评价
      <span class="ren_num">({{reviewRecordList.count}})</span>
    </div>

    <div class="zdy_shanchang_box doctor_home">
      <van-button
        type="info"
        class="zdy_shanchang"
        v-for="(item, index) in reviewMarkList"
        :key="index"
      >{{item.name + "(" +item.count + ")" }}</van-button>
      <div class="not_data" v-if="reviewRecordList.count == 0">暂无</div>
    </div>

    <div class="pingjiang" v-for="(item, index) in reviewRecordList.recordList" :key="index">
      <!-- 患者评价列表 -->
      <div class="merber_box">
        <div class="merber">
          <img :src="item.headPath" alt class="user_icon" />
          <div class="n_date">
            <p class="name">{{item.name}}</p>
            <p class="date">{{item.reviewDate}}</p>
          </div>
        </div>
        <van-rate
          v-model="item.reviewNum"
          readonly
          :size="15"
          color="#ffd21e"
          class="start_rate"
          void-icon="star"
          void-color="#eee"
        />
      </div>
      <div class="merber_conta">{{item.reviewContent}}</div>
    </div>

    <div class="merber_conta mer-pl_num" v-if="reviewRecordList.count>0">共{{reviewRecordList.count}}条评论 ></div>
  </div>
</template>

<script>
export default {
  props: {
      reviewRecordList: {
        type: Object,
        default: () => {
          return {
            count: 0,
            recordList: []
          }
        }
      }
    },
    reviewMarkList: []
    
};
</script>

<style lang="less" scoped>
.scfx.doctor_home {
  padding-top: 0.54rem;
}
.doctor_home {
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  background: #fff;
}
.hzpj {
  .ren_num {
    font-size: 0.32rem;
    font-family: PingFang SC;
    font-weight: 400;
    line-height: 0.62rem;
    color: rgba(178, 178, 178, 1);
    opacity: 1;
  }
}
.merber_box {
  display: flex;
  justify-content: space-between;
  text-align: left;
  padding: 0 0.3rem;
  img.user_icon {
    width: 0.8rem;
    height: 0.8rem;
    background: rgba(231, 237, 234, 1);
    border-radius: 50%;
    opacity: 1;
    margin-right: 0.3rem;
  }
  div.n_date {
    vertical-align: super;
    display: inline-block;
    .name {
      height: 0.45rem;
      font-size: 0.32rem;
      font-family: PingFang SC;
      font-weight: bold;
      line-height: 0.45rem;
      color: rgba(51, 51, 51, 1);
      letter-spacing: 0.01rem;
      opacity: 1;
    }
    .date {
      font-size: 0.24rem;
      font-family: PingFang SC;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
      letter-spacing: 0.01rem;
      opacity: 1;
    }
  }
}
.merber_conta {
  text-align: left;
  padding: 0.07rem 0.3rem 0.4rem 1.4rem;

  font-size: 0.28rem;
  font-family: PingFang SC;
  font-weight: 400;
  line-height: 0.43rem;
  color: rgba(102, 102, 102, 1);
  opacity: 1;
}
.merber_conta.mer-pl_num {
  padding: 0;
  margin: 0.07rem 0.3rem 0.4rem 1.4rem;
  min-height: 0.56rem;
  font-size: 0.28rem;
  font-family: PingFang SC;
  font-weight: 400;
  line-height: 0.56rem;
  color: rgba(153, 153, 153, 1);
  background: #f3f3f3;
  opacity: 1;
  text-indent: 0.3rem;
}
.not_data {
  padding: .4rem;
  text-align: center;
  color: #b2b2b2;
}
</style>
