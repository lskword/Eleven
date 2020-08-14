
<template>

<div class="bg">
    <div  v-if="loading">
      <van-skeleton title :row="6"  class="loading_list_skeleton" />
    </div>

  <div v-else class='pay_icon'>
    <template v-if="payStatusFiled">
      <img  src="@/assets/img/3010@2x.png" alt="" class="icon">

      <p class="price">订单支付失败</p>
      <p class="tips">很遗憾，您没有付款成功！</p>
      <van-button  :to="`/payOrder/${dataObj.orderSn}`" class="go_to_play " :color="BASE_COLOR_PRIMARY">重新支付</van-button>
    </template>

    <template v-else>
      <img  src="@/assets/img/zhifuchengg.png" alt="" class="icon">
      <p class="price">订单支付成功<b>&nbsp;&nbsp;¥{{dataObj.payAmount}}</b></p>
      <p class="tips">购买成功，有问题先去问问医生吧！</p>
      <van-button  @click="goSay" class="go_to_play " :color="BASE_COLOR_PRIMARY">进入咨询</van-button>
    </template>
  </div>
</div>
  

</template>

<script>


import { orderQueryOrderApi } from "@/api/payOrder";
  export default {
    data() {
      return {
        loading: true,
        timer: '',
        senNum: 0,
        payLoadingLock: false,
        senJect: {
          orderSn: this.$route.query.orderSn,
          loadingLock: true
        },
        // 支付失败
        payStatusFiled: false,
        dataObj: {}
      }
    },
    created() {
      this.payLoad = this.$toast.loading({
        message: "正在加载...",
        forbidClick: true,
        duration: 0
      });

      this.timer = setInterval(this.dataInit, 3000)
    },
    destroyed() {
      clearInterval(this.timer);
    },
    methods: {
      async dataInit() {
        if (this.payLoadingLock) {return false}
        this.payLoadingLock = true
        this.loading = true;
        this.senNum += 1;

        let {data, code} = await orderQueryOrderApi(this.senJect);
        this.dataObj = data;
        this.payLoadingLock = false;

        if (200 != code || data.paymentStatus != 0 ) {

          clearInterval(this.timer);
          this.payLoad.clear();
          this.loading = false;
          if (6 == data.paymentStatus) this.payStatusFiled = true; 

        } else if(this.senNum >= 3 && data.paymentStatus == 0) {

          clearInterval(this.timer);
          this.payStatusFiled = true;
          this.payLoad.clear();
          this.loading = false;

        }

        

      },
      goSay(){
        this.$router.push({path: `/chatConsultation/${this.dataObj.consultId}`})
      }
    },
  }
</script>

<style lang="less" scoped>
.bg {
  min-height: 100vh;
  background-color: #fff;
  
}
.go_to_play {
  width: 3rem;
  height:.78rem;
  opacity:1;
  border-radius:.1rem;
  margin-top: .8rem;
  line-height:.78rem;
}
.pay_icon {
  text-align: center;
  .tips {
    font-size: .24rem;
    font-family:PingFang SC;
    font-weight:400;
    line-height: .42rem;
    color:rgba(153,153,153,1);
    letter-spacing:.01rem;
    opacity:1;
  }
}
.icon {
  width: 3rem;
  height: 3rem;
  margin: .78rem auto .3rem;
  display: inline-block;
}
.price {
  font-size: .32rem;
  font-family:PingFang SC;
  font-weight:400;
  line-height: .5rem;
  color:rgba(51,51,51,1);
  letter-spacing: .01rem;
  opacity:1;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
