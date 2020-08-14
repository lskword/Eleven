<style lang="less" scoped>
.box_list {
  .list_box {
    background: rgba(255, 255, 255, 1);
    opacity: 1;
    border-radius: 0.1rem;
    padding: 0.26rem;
    margin: 0.2rem .3rem 0;
    .footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left {
        font-size: 0.24rem;
        font-family: PingFang SC;
        font-weight: 400;
        color: rgba(170, 171, 178, 1);
        opacity: 1;
      }
      .right {
        font-size: 0.24rem;
        font-family: PingFang SC;
        font-weight: 400;
        color: @primary;
        opacity: 1;
      }
    }
    .content_box {
      display: flex;
      .left {
        flex: 1;
        font-size: 0.44rem;
        color: @primary;
        .dk_q {
          width: 1.5rem;
          height: 0.52rem;
          font-size: 0.28rem;
        }
        p {
          height: 0.66rem;
          margin-top: 0.1rem;
          line-height: 0.66rem;
          b {
            font-size: 0.66rem;
          }
        }
      }
      .right {
        width: 3.7rem;
        text-align: left;
        p.name {
          font-size: 0.34rem;
          font-family: PingFang SC;
          font-weight: bold;
          line-height: 0.4rem;
          color: rgba(51, 51, 51, 1);
          opacity: 1;
          margin-bottom: 0.15rem;
        }
        p.cs {
          font-size: 0.24rem;
          font-family: PingFang SC;
          font-weight: 400;
          line-height: 0.42rem;
          color: rgba(94, 97, 106, 1);
          opacity: 1;
        }
      }
    }
  }
}
</style>


<template>
  <div class="box_list">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
    >
    <div v-for="(item, index) in list" :key="index">
      <div :class="['list_box', item.status==0? '': 'add_filter']" @click="goShops(item)">
        <div class="content_box">
          <div class="left">
            <van-button type="primary" size="small" class="dk_q">{{item.scenarioName}}</van-button>
            <p v-if="item.discountType == 1">￥<b>{{item.lines}}</b></p>
            <p v-else-if="item.discountType == 2"><b>{{item.lines}}</b>折</p>
          </div>
          <div class="right">
            <p class="name">{{item.name}}</p>
            <p class="cs">还剩{{item.remainDays}}天到期</p>
            <p class="cs">满{{item.consume}}元使用</p>
          </div>
        </div>
        <van-divider :style="{padding: '.4rem 0 0.2rem', margin: 0}" />
        <div class="footer">
          <div class="left">{{item.bak}}</div>
          <div class="right">立即使用 ></div>
        </div>
      </div>
    </div>
    </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { myCouponApi } from "@/api/user";
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
      sendJect: {
        pageNum: 0,
        pageSize: 5,
        loadingLock: true,
        orderSn: this.$route.query.orderSn
      },
      type: 0,
      orderSn: this.$route.query.orderSn
    };
  },
  created() {

  },
  methods: {
    // 前往使用优惠券
    goShops({sn, status}) {
      if (status != 0) return false;
      if (this.orderSn) {
        this.$router.replace({
          path: `/payOrder/${this.orderSn}`,
          query: {sn}
        })
      }else  {
        this.$toast('暂未接入App')
      }
    },
    addBinLiDetails({ consultId }) {
      this.$router.push({
        path: "/descriptionDis",
        query: {
          userId: this.$route.query.userId,
          consultId,
          type: this.$route.query.type
        }
      });
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;
      this.sendJect.pageNum = 1;
      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.dataInit();
    },
    dataInit() {
      myCouponApi(this.sendJect).then(({ data }) => {
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }

        this.list = this.list.concat(data.records);
        this.total = data.total;
        
        this.loading = false;

        if (this.list.length == 0) {
          this.$router.replace('/NOTDATA')
        }
      });
    },
    onLoad() {
      //  console.log(this.list.length, this.total);
      if (this.list.length >= this.total) {
        this.loading = false;
        this.finished = true;
        return false;
      } else {
        this.sendJect.pageNum++;
        this.dataInit()
      }
    }
  }
};
</script>

