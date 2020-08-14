<template>
  <div class="box_list">

    <template v-if="loading"  ><van-skeleton :key="index" v-for="(item, index) in 3" title  class="loading_list_skeleton"  :row="6"/></template>
    <van-pull-refresh v-else v-model="refreshing" @refresh="refresh">
    <van-cell center >
      <template #title>{{dataObj.status | orderType}}</template>

      <template #label>
        <span class="label" v-show="dataObj.status != 0">{{dataObj.status | orderTxt(dataObj)}}</span>
        <div class="label" v-show='dataObj.status == 0'>
          请在<van-count-down @finish='countDownFn' :time="time" format="mm:ss" />分内完成支付
        </div>
      </template>
      <!-- 使用 right-icon 插槽来自定义右侧图标 -->
      <template #right-icon>
        <van-button size="small" type="primary" :to="'/chatConsultation/702'" v-if="dataObj.status == 10" class="bnt_an">进入咨询</van-button>
        <van-button size="small" type="primary" :to="'/chatConsultation/702'" v-if="dataObj.status == 9" class="bnt_an">进入咨询</van-button>
        <van-button size="small" type="primary" :to="'/doctorHome/702'" v-if="dataObj.status == 8 || dataObj.status == 7" class="bnt_an">再次咨询</van-button>
        <van-button size="small" type="primary" :to="`/payOrder/${dataObj.orderSn}`" v-if="dataObj.status == 0" class="bnt_an">立即支付</van-button>
      </template>
    </van-cell>

    <div :style="{padding: '.1rem 0'}" />

      <!-- <van-cell title="订单类型" :value='dataObj.orderTypeName' size="large" /> -->
      <van-field label="订单类型"  autosize  disabled label-width='2.08rem' label-class="label_txt"	type="text" :value='dataObj.orderTypeName' />
      <van-field label="咨询医生" :border='false'  autosize  disabled label-width='2.08rem' label-class="label_txt"/>

      <div class="bg" style='background: #ffff;overflow: hidden;'>
        <div class="doctor_tips">

          <div class="img_d">
            <img v-if="!dataObj.headPath" src="@/assets/img/doctor_defalut@2x.png" alt="">
            <img v-else :src="dataObj.headPath" alt="">
          </div>

          <div class="name">
            <p><span class="n"> {{dataObj.userName}} </span><span class="zw"> {{dataObj.technicalPost}}</span></p>
            <p><span class="dz">{{dataObj.unitName }} {{dataObj.departmentName}}</span></p>
          </div>

        </div>
      </div>

      <van-cell  center v-if="dataObj.status == 8">
        <template #title>
          <b class="label">非常满意</b>
        </template>
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
          <van-rate :value="Number(dataObj.reviewNum)" allow-half readonly void-color="#eee"  void-icon="star"  color="#F4EA2A"/>
        </template>
      </van-cell>

     <div :style="{padding: '.1rem 0'}" v-if="dataObj.status == 8" />
     <van-field label="咨询内容"  autosize  disabled label-width='2.08rem' label-class="label_txt" :value='zixunTxt()'>
     </van-field>

     <van-field label="病情描述" type="textarea" rows="1"  autosize  disabled label-width='2.08rem' label-class="label_txt"	 :value='dataObj.content' />
     
     <div class='zdiy_box'>
       <div class="label_box">病情照片</div>
       <div class="content">
          <template v-if="dataObj.fileList.length>0">
            <span class="num_txt" > {{dataObj.fileList.length}}张 | </span> <span class="see_details" @click="seeMore">点击查看</span>
          </template>
          <span class="num_txt" v-else> 0张 </span>
       </div>
     </div>

     <div :style="{padding: '.1rem 0'}" />

     <div class='zdiy_box'>
       <div class="label_box">订单编号</div>
       <div class="content dingdan">
          <span class="num_txt"> {{dataObj.orderSn}} </span>  <span class="see_details" id="copy_btn" @click="copy({text: dataObj.orderSn})">复制</span>
       </div>
     </div>

     <van-field label="下单时间" :border='false' autosize  disabled label-width='2.08rem' label-class="label_txt"	 :value='dataObj.createDate' />
     <van-field label="应付金额" :border='false' autosize  disabled label-width='2.08rem' label-class="label_txt"	 :value='dataObj.dueAmount' />
     
     <template v-if="dataObj.status != 0 && dataObj.status != 7">
       <van-field label="实际支付金额" :border='false' autosize  disabled label-width='2.08rem' label-class="label_txt"	 :value='dataObj.acPayPrice' />
      <van-field label="支付时间" :border='false' autosize  disabled label-width='2.08rem' label-class="label_txt"	 :value='dataObj.paymentDate' />
      <van-field label="支付方式" :border='false' autosize  disabled label-width='2.08rem' label-class="label_txt"	 :value='dataObj.payMethod' />
     </template>

     <div :style="{padding: '.56rem 0', background: '#fff', borderBottom: '1px solid #ebedf0'}" />

     <van-cell title=""  center v-if="dataObj.status == 0 || dataObj.status == 10">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
            <van-button size="small" type="info" class="bnt_an_agin" @click="closeOrder">取消订单</van-button>
        </template>
      </van-cell>

    </van-pull-refresh>


  </div>
</template>

<script>
import { orderRdetailApi, orderCancelApi } from '@/api/payOrder'

  export default {
    data() {
      return {
        status: 1,
        refreshing:false,
        orderSn: this.$route.params.orderSn,
        dataObj: {
          memberName: '',
          age: '',
          sex: 0,
          fileList: [],
          status: 0
        },
        loading: true,
        time: 0
      }
    },
    created() {
      this.dataInit()
    },
    methods: {
        countDownFn() {
          this.dataObj.status = 7;
          this.dataObj.bak = '超时未支付'
        },
        async dataInit() {
          let {data} = await orderRdetailApi(this.orderSn);
          this.loading = false;
          this.refreshing = false;
          this.dataObj = data;
          var start = (new Date(this.dataObj.createDate.replace('-', '/')).getTime()) +  (15 * 60 * 1000);
          this.time = start - new Date().getTime()
          console.log(this.time);
        },
          /**
         * @description: 复制
         * @param {type}
         * @return:
         */
        copy({text}) {
          this.copyText({ ele: "#copy_btn", text}).then(() => {
              this.$toast.success("复制成功");
            }).catch(() => {
              this.$toast.error("复制失败");
            });
        },
        seeMore() {
          this.$ImagePreview(this.dataObj.fileList);
        },
        closeOrder() {
          this.$dialog.confirm({
            title: '标题',
            message: '确定要取消订单吗？',
            confirmButtonColor: this.BASE_COLOR_PRIMARY
          }).then(() => {
            // on confirm
             orderCancelApi(this.dataObj.orderSn).then(()=> {
              this.$toast.success('取消成功')
             })
          })
          
        },
        refresh() {
          this.refreshing = true;
          this.dataInit()
        },
        zixunTxt() {
          var sex = this.dataObj.sex ? '男' : '女'
          return  `${this.dataObj.memberName}  ${sex}  ${this.dataObj.age} 岁`
        }

    },
    filters: {
      orderTxt(value, item) {
        switch (value) {
          case 0:
            return '';
          case 7:
            return item.bak
          case 8:
            return '病情如有变化，可申请在线复诊';
          case 9:
            return '医生工作忙碌，请耐心等待';
          case 10:
            return '医生工作忙碌，请耐心等待';
          default:
            return '医生工作忙碌，请耐心等待';
        }
      }
    }
  }
</script>

<style lang="less" scoped>
.box_list {
  text-align: left;

  .doctor_tips {
    margin: 0 .3rem .2rem;
    min-height:1.6rem;
    background:rgba(255,255,255,1);
    box-shadow:0px .1rem .15rem rgba(0,0,0,0.06);
    display:flex;
    justify-content: flex-start;
    align-items:center;
    padding: 0 0 0 .3rem;
    .img_d {
      width:1rem;
      height:1rem;
      background:rgba(231,237,234,1);
      border-radius:50%;
      opacity:1;
      margin-right: .22rem;
      img {
        border-radius: 100%;
      }
    }
    .name {
      font-size: .28rem;
      font-family:PingFang SC;
      font-weight:400;
      line-height: .43rem;
      color:rgba(153,153,153,1);
      letter-spacing: 0.01rem;
      opacity:1;
      .n {
        font-size:.36rem;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(51,51,51,1)
      }
      .zw {
        font-size: .32rem;
        font-weight:400;
        color:rgba(51,51,51,1);
      }
      .dz {

      }
    }
  }
  /deep/ .van-cell__label {
      color: #999;
      font-size: .28rem;
      .label {
        display: flex;
        .van-count-down {
          color: @primary;
          font-size: .28rem;
        }
      }
  }
  .bnt_an {
    font-size: .28rem;
  }
  /deep/ .label_txt {
    font-size: .32rem;
    font-family:PingFang SC;
    font-weight:400;
    line-height: .43rem;
    color:rgba(153,153,153,1);
    letter-spacing: .01rem;
    opacity:1;
  }
  /deep/ .van-field__control:disabled {
    font-size: .32rem;
    font-family:PingFang SC;
    font-weight:400;
    color:rgba(51,51,51,1);
    opacity:1;
  }
  .zdiy_box {
    display: flex;
    padding: 14px 16px;
    color: #323233;
    font-size: 0.36rem;
    line-height: 24px;
    background-color: #fff;
    .label_box {
      margin-right: 12px;
      width: 2.08rem;
      font-size: 0.32rem;
      font-family: PingFang SC;
      font-weight: 400;
      line-height: 0.43rem;
      color: #999999;
      letter-spacing: 0.01rem;
      opacity: 1;
      
    }
    .dingdan {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex: 1;
    }
    .content {
      font-size: .28rem;
      .see_details {
        color: @primary;
      }
    }
  }
  
    .bnt_an_agin {
      min-width:1.50rem;
      height: .6rem;
      border: 1px solid rgba(153,153,153,1);
      opacity:1;
      border-radius: .06rem;
      background:#fff;
      font-size: .28rem;
      font-family:PingFang SC;
      font-weight:400;
      line-height: .43rem;
      color:rgba(153,153,153,1);
      letter-spacing: .01rem;
      opacity:1;
    }
  
}
</style>
