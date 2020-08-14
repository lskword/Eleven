<style lang="less" scoped>
.pay_box {
  text-align: left;
  .custom_down_box {
    text-align: center;
    height: .9rem;
    background:rgba(231,243,254,1);
    opacity:1;
    line-height: .9rem;
    color: #5B7191;
    display: flex;
    font-size: 0.28rem;
    justify-content: center;
    align-items: center;
    /deep/ .van-count-down {
      color: #5B7191;
      font-size: 0.28rem;
    }
  }
  .s /deep/ .van-cell__value {
    font-size: 0.32rem;
    color: #333;
  }
  .juse_t /deep/ .van-cell__title {
    flex: initial;
  }
  /deep/ .price,
  /deep/ .price-zhen {
    .van-cell__value {
      color: @primary;
    }
    font-size: 0.32rem;
    font-family: PingFang SC;
    font-weight: 400;
    opacity: 1;
  }
  /deep/ .price.huise {
    .van-cell__value {
      color: #333;
    }
  }
  /deep/ .price-zhen {
    color: #ff0404;
  }
}
.pay_src_type_box {
  display: flex;
  align-items: center;
  .src_pay {
    height:.5rem;
  }
  .src_pay_type {
    flex :1;
    text-align: left;
    line-height:.5rem;
    margin-left: .21rem;
    font-size:.28rem;
    font-family:PingFang SC;
    font-weight:400;
    color:rgba(51,51,51,1);
    opacity:1;
    .pay_icon {
      font-size: .22rem;
      font-family:PingFang SC;
      font-weight: 400;
      line-height: .22rem;
      color:rgba(136,136,136,1);
      opacity:1;
    }
  } 
}
.padding_box {
  margin: 0.3rem 0 0;
  background: rgba(255, 255, 255, 1);
  opacity: 1;
  border-radius: 6px;
  overflow: hidden;
  /deep/ .van-cell {
    color: #333;
  }
  /deep/ .van-cell__value {
    color: #888;
  }
  /deep/ .van-cell__title.van-field__label {
    font-size: 0.38rem;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    letter-spacing: 0.01rem;
    opacity: 1;
  }
  .pay_txt {
    font-size: 16px;
    font-family: PingFang SC;
    font-weight: 500;
    line-height: 0.45rem;
    color: rgba(51, 51, 51, 1);
    letter-spacing: 0.01rem;
    opacity: 1;
    padding: 0.12rem 16px 0;
  }
}

.footer_pay {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  border-top: 1px solid #f9f9f9;
  background: #fff;
  .price {
    font-weight: 700;
    font-style: normal;
    font-size: 16px;
    text-align: left;
    text-align: center;
    span {
      color: @primary;
    }
  }
  .go_to_play {
    border-radius: 0;
  }
}

.fu_wu_bao {
  background: rgba(253, 243, 247, 1);
  border: 1px solid @primary;
  opacity: 1;
  border-radius: 0.1rem;
  margin: 0.3rem;
  position: relative;
  .after_top_left {
    width: 1.73rem;
    height: 0.48rem;
    text-align: center;
    color: #fff;
    line-height: 0.48rem;
    border-radius: 0.1rem 0 0.3rem 0;
    background: linear-gradient(to right, #e70a0a, #d9115a);
  }
}
.icon_check {
  width: 0.4rem;
  height: 0.4rem;
  display: block;
}
.bg {
  background: #fff;
  overflow: hidden;
}
.wenzhenbao_box {
  background: #fdf3f7;
  padding: 0.14rem 0.19rem 0.58rem 0.3rem;
  border-radius: 0.1rem;
  /deep/ .van-cell__title {
    font-size: 0.32rem;
    font-family: PingFang SC;
    font-weight: 600;
    color: rgba(51, 51, 51, 1);
    opacity: 1;
  }
  .wenzhenbao_pirce {
    margin-right: 0.1rem;
  }
}
</style>


<template>
  <div class="pay_box" v-if="loading">
    <div class="custom_down_box" >
       <van-count-down  v-if="daoJiTime<=0" format="超时订单已自动取消"/>
      <van-count-down  v-else @finish='daoJiTime=0' class='animated fadeInDown' :time="daoJiTime"  format="请mm分ss秒内完成支付，超时订单自动取消"/>
    </div>
   
    <van-cell title="应付金额" class="s" :value="'¥' + sendJect.amount" size="large" />
    <van-cell title="项目" class="s juse_t" :value="sendJect.proName" size="large" />
    <van-cell title="备注" class="s juse_t" value="医生24小时内未回复将自动退款" size="large" />

    <div :style="{padding: '.2rem 0 0'}"></div>

    <van-cell title="公开问题" center size="large">
      <template #label>
        <span class="blue" style="color: #1473E6;font-size:.24rem;">{{sendJect.publicQueNum}}人</span>
        <span style="color: #666666;font-size:.24rem;" class="t">公开了问题，帮助更多人</span>
      </template>
      <template #right-icon>
        <van-switch active-color="#32D74B" v-model="openChecked" size="24" />
      </template>
    </van-cell>

    <template  v-if="lines">
      <van-cell title="优惠券"  :border="false" :to="'/myCoupons?orderSn='+ orderSn" class="price" :value="`-￥${lines}`" size="large" is-link />
    </template>

    <template  v-else>
      <van-cell title="优惠券" v-if="!sendJect.haveVouchers" :to="'/myCoupons?orderSn='+ orderSn" :border="false" class="price huise" value="暂无优惠券" size="large" is-link />
      <van-cell title="优惠券" v-else :border="false" class="price huise" :to="'/myCoupons?orderSn='+ orderSn" :value="`最高可优惠${sendJect.vouchersMaxPrice}元`" size="large" is-link />
    </template>

    <!-- <van-cell title="优惠券" class="price" value="暂无优惠券" size="large" is-link />
    <van-cell title="优惠券" class="price" value="暂无优惠券" size="large" is-link />-->

    <div class="bg" v-if="sendJect.extendVouchersStatus">
      <div class="fu_wu_bao" @click="wenzhenbaoCheck(extendVouchers)">
        <p class="after_top_left">问诊包</p>
        <van-cell class="wenzhenbao_box" clickable :title="extendVouchers.name" center>
          <template #right-icon>
            <div class="wenzhenbao_pirce">￥{{extendVouchers.payPrice }}</div>
            <img class="icon_check" v-if="wenzhenbao" src="@/assets/img/2841@2x.png" alt />
            <img class="icon_check" v-else src="@/assets/img/2842@2x.png" alt />
          </template>
        </van-cell>
      </div>
    </div>

    <div class="padding_box">
      <div class="pay_txt">请选择支付方式</div>
      <van-radio-group v-model="payChannelId" :border='false'>
        <van-cell-group :border='false'>
            <van-cell
              class="pay_line_box animated fadeIn"
              clickable
              @click="payChannelFnApi(item)"
              v-for="(item,index) in payChannelList"
              :key="index"
              :border='false'
            >
            <div slot="title">
              <div class="pay_src_type_box">
                <img :src="item.icon" alt class="src_pay" />
                <div class="src_pay_type">
                  <p>{{item.name}}</p>
                  <p class="pay_icon">推荐微信用户使用</p>
                </div>
              </div>
            </div>
            <van-radio :checked-color="BASE_COLOR_PRIMARY" slot="right-icon" :name="item.id" />
          </van-cell>
        </van-cell-group>
      </van-radio-group>
    </div>
    <div :style='{height: "1.3rem"}'></div>
    <div class="footer_pay animated fadeInUp" v-if="daoJiTime>0">
      <van-row type="flex" justify="center" align="center">
        <van-col span="12">
          <div class="price">
            合计:
            <span>￥{{acPayPrice}}</span>
          </div>
        </van-col>
        <van-col span="12">
          <van-button
            full-width
            @click="pay"
            size="large"
            class="go_to_play"
            :color="BASE_COLOR_PRIMARY"
          >去支付</van-button>
        </van-col>
      </van-row>
    </div>
  </div>
   <div class="loading_list" v-else>
    <van-skeleton class="loading_list_skeleton" v-for="(item, index) in 2" :key="index" title :row="6"  />
  </div>

</template>

<script>
import { getPayChannelApi, orderDetailApi ,calutationPiceApi ,payApi} from "@/api/payOrder";
import { iosOrAndFun } from "@/utils/filter";

export default {
  data() {
    return {
      loading: false,
      daoJiTime: '',
      openChecked: true,
      // 问诊包
      wenzhenbao: false,
      // 支付类型
      type: "h5",
      payChannelList: [],
      payChannelCode: "",
      payChannelId: '',
      // 合计价格
      acPayPrice: 0,
      sendJect: {
        amount: 0
      },
      orderSn: this.$route.params.orderSn,
      sn: this.$route.query.sn,
      // 服务包名称
      code: '',
      // 显示的优惠价格
      lines: '',
    };
  },
  created() {
    this.dataInit();
  },
  methods: {
    payChannelFnApi({code, id}) {
      this.payChannelCode = code;
      this.payChannelId = id;
    },
    priceNumeric() {
      // 调用计算价格接口
      calutationPiceApi({
        orderSn:this.orderSn,
        code: this.code,
        sn: this.sn,
      }).then(({data})=> {
        console.log(data)

        this.acPayPrice = data.acPayPrice
        this.lines = data.lines

      }).catch((err)=> {
        console.log(err)
        this.wenzhenbao = false;
      })
    },
    wenzhenbaoCheck({code = ''}) {
      this.wenzhenbao= !this.wenzhenbao
      
      if (!this.wenzhenbao) {  this.code = ''} else {
        this.code = code
      }
      this.priceNumeric()
    },
    async dataInit() {
      // 微信环境
      if (this.isWeixin()) {this.type = "JSAPI";}
      // 获取支付方式
      getPayChannelApi({ type: this.type, paymentChannel: 'common' }).then(({data}) => {
        this.payChannelList = data;
        this.payChannelCode = data[0].code;
        this.payChannelId = data[0].id;
      })

      // 数据初始化
      let { data } = await orderDetailApi(this.orderSn);

      this.acPayPrice  = data.acPayPrice;
      this.sendJect = data;
      this.extendVouchers = data.extendVouchers;
      this.loading = true;
      this.daoJiTime = ((data.createDate + 900000) - new Date().getTime());
      console.log(this.daoJiTime <= 0);
      if (this.sn) {this.priceNumeric()}

    },
    /**
     * 创建订单
     * @param {Number}
     */
    pay() {
      
      let icon = this.payChannelCode == "weChatPay" ? "wechat" : "alipay";
      const payReturnUrl = window.location.href.replace(this.$route.path,"/payOrderDetails");

      var payLoadingLock = this.$toast.loading({
        message: "前往支付...",
        forbidClick: true,
        icon,
        duration: 0
      });

      let appInfo = {};

      try {
        appInfo = JSON.parse(iosOrAndFun({ funName: "appInfo" }));
      } catch (err) {
        console.info("当前为wap环境!");
      }

      let params = {
        payChannelType: this.type,
        payChannelCode: this.payChannelCode,
        payChannelId: this.payChannelId,
        orderSn: this.orderSn,
        payReturnUrl: payReturnUrl, // 支付完成页面地址
        LoadingLock: true,
        sn: this.sn,
        code: this.code,
        openChecked: this.openChecked  
      };

      if (appInfo.app_type == "ios" || appInfo.app_type == "android") {
        params.appType = appInfo.app_type;
        params.appName = appInfo.app_name;
        params.appPackageName = appInfo.app_packge;
      } else {
        params.appType = "web";
      }
      
      payApi(params).then(({data}) => {
        payLoadingLock.clear();
        if (this.type == 'JSAPI') {
          var return_url = payReturnUrl +'?orderSn='+ this.orderSn;
          data.return_url = return_url
          this.WeChatPublicPay(data)

        }else if (this.type == 'h5') {
          if (this.payChannelCode == "weChatPay") {
              window.location.href = data.mwebUrl;
          } else {
            const div = document.createElement('div');
            div.innerHTML = data.mwebUrl;
            document.body.appendChild(div);
            document.forms[0].submit();
          }
        }
      }).catch((res)=> {
        
        console.log(res);
      })
    }
  }
};
</script>

