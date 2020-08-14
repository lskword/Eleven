<template>
  <div class="jslv">
    <van-tabs
      sticky
      swipeable
      animated
      v-model="activeTab"
      :title-active-color="BASE_COLOR_PRIMARY"
      :color="BASE_COLOR_PRIMARY"
      line-height="2px"
      line-width="25px"
      swipe-threshold="5"
      @change="tabChange"
      @click='tabChangeClick'
    >
      <van-tab  v-for="(item, index) in titleList" :key="index" :name='index+1'>
        <template #title >
          <span class="" style="font-size:.32rem;">{{item}}</span>
        </template>
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
          <van-list v-model="loading" :finished="finished" finished-text="-没有更多了-" @load="onLoad">
            <!-- <van-cell v-for="item in consultingData" :key="item" :title="item" /> -->

            <div v-show="activeTab == 1" class="wan_box" v-for="(item) in consultingData" :key="item" @click.prevent="goDetail(item)">
              <div class="userInfo_box">
                <div class="user_info">
                  <img :src="item.headPath" alt class="doct_img" />
                  <b>{{item.userName}}</b>
                  <span>{{item.technicalPost}}</span>
                </div>
                <div class="user_bl">
                  <span class="upload_txt" >{{item.status | orderType}}</span>
                </div>
              </div>

              <div class="content ellipsize2">{{item.content}}</div>
              <div class="hr"></div> 
              <div class="date_time">
                <span>{{item.createDate}} {{item.consultTypeName}}</span>
                <van-button plain type="primary" class="go_pay" v-if="item.status==0" size="small" @click.stop='goPay(item)'>去支付</van-button>
                <van-button  plain type="primary" class="go_pay"  v-else-if="item.status==10 || item.status== 9" @click.stop='goSeeDetails(item)'  size="small">进入咨询</van-button>
                <van-button  plain type="primary" class="go_pay"   v-else-if="item.status==8 || item.status== 7" @click.stop='goSeeDetailsAgeins(item)' size="small">再次咨询</van-button>
              </div>
            </div>
            <div v-show="activeTab == 2" class="wan_box" v-for="(item) in consultingData" :key="item" @click.prevent="goDetail(item)">
              <div class="userInfo_box">
                <div class="user_info">
                  <img :src="item.headPath" alt class="doct_img" />
                  <b>{{item.userName}}</b>
                  <span>{{item.technicalPost}}</span>
                </div>
                <div class="user_bl">
                  <span class="upload_txt">导入病情</span>
                </div>
              </div>

              <div class="content ship_zx ellipsize2">
                <span style="color: #999;margin-right:.5rem;">预约时间</span> {{item.appointTimeDesc}}
              </div>
              <div class="hr"></div> 
              <div class="date_time">
                <span class="date_time_son">{{item.createDate}} {{item.consultTypeName}}</span>
                <van-button plain type="primary" class="go_pay" v-if="item.status==0" size="small" @click.stop='goPay(item)'>去支付</van-button>
                <van-button  plain type="primary" class="go_pay"  v-else-if="item.status==10 || item.status== 9" @click.stop='goSeeDetails(item)'  size="small">进入咨询</van-button>
                <van-button  plain type="primary" class="go_pay"   v-else-if="item.status==8 || item.status== 7" @click.stop='goSeeDetailsAgeins(item)' size="small">再次咨询</van-button>
                <!-- <van-button plain type="primary" class="go_pay" v-if="item.status==0" size="small">去支付</van-button>
                <van-button  plain type="primary" class="go_pay" v-else-if="item.status==10 || item.status== 9" size="small">进入咨询</van-button>
                <van-button  plain type="primary" class="go_pay" v-else-if="item.status==8 || item.status== 7" size="small">再次咨询</van-button> -->
              </div>
            </div>
          </van-list>
        </van-pull-refresh>
      </van-tab>
      <!-- <van-tab title="视频问诊">内容 3</van-tab>
      <van-tab title="云门诊">内容 4</van-tab>-->
    </van-tabs>
  </div>
</template>

<script>
import { consultListApi } from "@/api/consultation";
export default {
  components: {},
  data() {
    return {
      activeTab: 0,
      consultingData: [],
      pageNum: 1,
      pageSize: 10,
      total: 0,
      refreshing: false,
      loading: false,
      type: 0,
      titleLock: false,
      list: [1, 2, 3, 4],
      titleList: ["图文问诊", "视频问诊"]
    };
  },
  created() {},
  methods: {
    // 再次咨询
    goSeeDetailsAgeins({userId}) { this.$router.push(`/doctorHome/${userId}`) },
    // 进入咨询
    goSeeDetails({consultId}) { this.$router.push(`/chatConsultation/${consultId}`) },
    // 去支付
    goPay({orderSn}) { this.$router.push(`/payOrder/${orderSn}`) },
    tabChangeClick(item) {
      console.log(item);
    },
    onLoad() {
      this.loading = true;
      // 异步更新数据
      this.csRecordGet();
    },
    onRefresh() {
      // 清空列表数据
      this.pageNum = 1;
      this.consultingData = [];
      this.finished = false;
      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
    /**
     * 获取咨询医生信息
     * @param {Number}
     */
    csRecordGet() {
      consultListApi({
        pageNum: this.pageNum,
        pageSize: this.pageSize,
        consultType: this.activeTab,
        loadingLock: true
      }).then(({ data }) => {
          this.total = data.total;
          this.refreshing = false;
          // 加载状态结束
          this.loading = false;
          if (this.pageNum == 1) {
            this.consultingData = [].concat(data.records);
            this.refreshing = false;
          } else {
            this.consultingData = this.consultingData.concat(data.records);
            this.loading = false;
          }
          // 数据全部加载完成
          if (this.consultingData.length >= this.total) {
            this.finished = true;
          } else {
            this.pageNum++;
          }
        })
        .catch(err => {
          console.log(err);
          this.refreshing = false;
        });
    },

    /**
     * 状态切换
     * @param {Number}
     */
    tabChange() {
      if (this.loading) {return false;}
      this.onRefresh();
    },
    /**
     * @description: 取消订单
     * @param {type}
     * @return:
     */
    cancleOrder() {
      this.$confirm(`确定取消订单吗？`, `提示`, {
        okLabel: "确定",
        cancelLabel: "取消"
      })
        .then(data => {
          if (data.result) {
            // cancelOrderApi({
            //   consultId: item.id
            // })
            //   .then(({ data }) => {
            //     if (this.activeTab == 0) {
            //       //全部
            //       item.paymentStatus = 4;
            //     } else {
            //       //待付款
            //       this.consultingData.splice(index, 1);
            //     }
            //   })
            //   .catch(err => {
            //     console.log(err);
            //     this.refreshing = false;
            //   });
          } else {
            // alert("不");
          }
        })
        .catch(() => {});
    },

    /**
     * @description: 去支付
     * @param {type}
     * @return:
     */
    pay(item) {
      this.$router.push({
        path: "/PayOrder",
        query: {
          orderCode: item.orderCode
        }
      });
    },

    /**
     * @description: 去评论
     * @param {type}
     * @return:
     */
    toComments(item) {
      this.$router.push({
        path: "/dcToBeComment",
        query: {
          param: JSON.stringify(item),
          consultId: item.id
        }
      });
    },
    /**
     * @description: 重新咨询
     * @param {type} type ；true 重新咨询    false 再次咨询
     * @return:
     */
    toConsultAgain(item, type) {
      if (type) {
        try {
          // iosOrAndFun_wy({
          //   funName: "openActivity",
          //   data: ["DoctorListActivity", item.id]
          // });
        } catch (error) {
          this.$router.push({
            path: "/doctorListNew",
            query: { csId: item.id }
          });
        }
      } else {
        //再次咨询
        this.$router.push({
          path: "/DoctorCs",
          query: {
            userId: item.userId,
            price: item.price,
            type: item.type
          }
        });
      }
    },

    /**
     * @description: 订单详情
     * @param {type}
     * @return:
     */
    goDetail({orderSn}) {
      this.$router.push(`/chatConsulOrderDetails/${orderSn}`);
    }
  }
};
</script>


<style lang="less" scoped>
.jslv {
  .wan_box {
    padding: 0 .3rem;
    text-align: left;
    background: #fff;
    margin-bottom: .2rem;
    .userInfo_box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #fff;
      font-size: 0.3rem;
      padding: 0.2rem 0;
      overflow: hidden;
      color: #333;
      .user_info {
        img {
          height: 0.6rem;
          width: 0.6rem;
          display: inline-block;
          vertical-align: middle;
          border-radius: 100%;
          margin-right: 0.2rem;
        }
        span,
        b {
          vertical-align: middle;
        }
      }
      
    }
    .content {
      font-size: 0.32rem;
      margin: 0 0 .3rem 0;
      color: #333;
      word-wrap: break-word;
    }
    .content.ship_zx {
      font-size: 0.28rem;
    }
    div.hr {
      height: 1px;
      background: @Underline-color
    }
    .date_time {
      display: flex;
      justify-content: space-between;
      align-items:center;
      color: #c9c9c9;
      font-size: .3rem;
      padding:.15rem 0;
      .date_time_son {
        color: #333;
      }
      .go_pay {
        min-width:1.36rem;
        padding: 0 4px;
        background: #fff;
      }
    }
  }
}
</style>
