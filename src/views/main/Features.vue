<template>
  <div class="home">
    <img class="bg_icon" src="//ileyun.ivfcn.com/tools/static/img/05.png" alt="">
    <div class="about_conten">
      <van-sidebar v-model="activeKey" class="tabs">
        <van-sidebar-item title="预约挂号" />
        <van-sidebar-item title="快速问诊" />
         <van-sidebar-item title="专家问诊" />
         <van-sidebar-item title="电子病例" />
      </van-sidebar>
      <div class="content">
        <p class="titl">
         <span class="name">{{list[activeKey].title}}</span>
         <span class="el">{{list[activeKey].el}}</span>
        </p>
        <p class="cont_box" v-for="(item, index) in list[activeKey].son" :key="index">
          {{item}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      activeKey:0,
      list: [
        {title: '预约挂号', el: 'APPOINTMENT REGISTER', son: [
          '武汉市卫生计生委主导，武汉市卫生计生信息中心和湖北省楚天云有限公司承建的武汉市卫生健康信息便民惠民服务平台——“武汉健康云”正式投入使用。',
          '打通40家市属公立医院、200余家社区医院诊疗平台的“武汉健康云”上线了！',
          '市民使用“武汉健康云”后，足不出户就能感受多项医疗健康的便民省心，在医院内就诊流程也将更加通畅省时。',
          '武汉健康云”是 “健康武汉”客户端的2.0版本，在此前提供的电子健康卡、智能导诊、预约挂号、在线支付、健康档案、健康画像、电子服务券、家医签约、健康评估等34项功能基础上做了优化升级，旨在进一步提升居民看病就医的便利性和高效性，提升医疗卫生机构服务能力。',
          '武汉市卫生计生委主导，武汉市卫生计生信息中心和湖北省楚天云有限公司承建的武汉市卫生健康信息便民惠民服务平台——“武汉健康云”正式投入使用。',
        ]},
        {title: '快速问诊', el: 'APPOINTMENT REGISTER', son: [
          '武汉市卫生计生委主导，武汉市卫生计生信息中心和湖北省楚天云有限公司承建的武汉市卫生健康信息便民惠民服务平台——“武汉健康云”正式投入使用。',
          '打通40家市属公立医院、200余家社区医院诊疗平台的“武汉健康云”上线了！',
          '市民使用“武汉健康云”后，足不出户就能感受多项医疗健康的便民省心，在医院内就诊流程也将更加通畅省时。',
          '武汉健康云”是 “健康武汉”客户端的2.0版本，在此前提供的电子健康卡、智能导诊、预约挂号、在线支付、健康档案、健康画像、电子服务券、家医签约、健康评估等34项功能基础上做了优化升级，旨在进一步提升居民看病就医的便利性和高效性，提升医疗卫生机构服务能力。',
          '武汉市卫生计生委主导，武汉市卫生计生信息中心和湖北省楚天云有限公司承建的武汉市卫生健康信息便民惠民服务平台——“武汉健康云”正式投入使用。',
        ]},
        {title: '专家问诊', el: 'APPOINTMENT REGISTER', son: [
          '武汉市卫生计生委主导，武汉市卫生计生信息中心和湖北省楚天云有限公司承建的武汉市卫生健康信息便民惠民服务平台——“武汉健康云”正式投入使用。',
          '打通40家市属公立医院、200余家社区医院诊疗平台的“武汉健康云”上线了！',
          '市民使用“武汉健康云”后，足不出户就能感受多项医疗健康的便民省心，在医院内就诊流程也将更加通畅省时。',
          '武汉健康云”是 “健康武汉”客户端的2.0版本，在此前提供的电子健康卡、智能导诊、预约挂号、在线支付、健康档案、健康画像、电子服务券、家医签约、健康评估等34项功能基础上做了优化升级，旨在进一步提升居民看病就医的便利性和高效性，提升医疗卫生机构服务能力。',
          '武汉市卫生计生委主导，武汉市卫生计生信息中心和湖北省楚天云有限公司承建的武汉市卫生健康信息便民惠民服务平台——“武汉健康云”正式投入使用。',
        ]},
        {title: '电子病例', el: 'APPOINTMENT REGISTER', son: [
          '武汉市卫生计生委主导，武汉市卫生计生信息中心和湖北省楚天云有限公司承建的武汉市卫生健康信息便民惠民服务平台——“武汉健康云”正式投入使用。',
          '打通40家市属公立医院、200余家社区医院诊疗平台的“武汉健康云”上线了！',
          '市民使用“武汉健康云”后，足不出户就能感受多项医疗健康的便民省心，在医院内就诊流程也将更加通畅省时。',
          '武汉健康云”是 “健康武汉”客户端的2.0版本，在此前提供的电子健康卡、智能导诊、预约挂号、在线支付、健康档案、健康画像、电子服务券、家医签约、健康评估等34项功能基础上做了优化升级，旨在进一步提升居民看病就医的便利性和高效性，提升医疗卫生机构服务能力。',
          '武汉市卫生计生委主导，武汉市卫生计生信息中心和湖北省楚天云有限公司承建的武汉市卫生健康信息便民惠民服务平台——“武汉健康云”正式投入使用。',
        ]},
      ]
    }
  },
  components: {
  },
  created() {

  },
  methods: {

  }
}
</script>


<style lang="less"  scoped>
.home {
  
}
.bg_icon {
  height: 3.4rem;
  display: block;
  width: 19.2rem;
}
.about_conten {
  width:14rem;
  height:7.45rem;
  background:rgba(255,255,255,1);
  margin: .3rem auto;
  .content {
    margin-left:1.76rem;
    padding: .69rem .27rem 0 .35rem;
    font-size:.18rem;
    font-family:Microsoft YaHei;
    font-weight:400;
    text-align: left;
    color:rgba(51,51,51,1);
    // line-height: .18rem;
    .cont_box {
      margin-bottom: .4rem;
    }
    .titl {
      font-size: .32rem;
      font-family:Microsoft YaHei;
      font-weight:400;
      color:rgba(51,51,51,1);
      line-height:.42rem;
      margin-bottom: .48rem;
      display:flex;
      .el {
        margin-left: .18rem;
        font-size: .20rem;
        font-family:PingFang SC;
        font-weight:400;
        color:rgba(203,203,203,1);
        line-height: .42rem;
      }
    }
  }
}
.tabs {
  width: 1.76rem;
  padding: .63rem 0 0 .2rem;
  height: 100%;
  float: left;
  border-right: 1px solid rgba(227,227,227,1);
  .van-sidebar-item {
    background: #fff;
  }
  .van-sidebar-item--select::before{
    width: .04rem;
    height: .5rem;
    background: @primary-color;
    font-size:.2rem;
    font-family:Microsoft YaHei;
    font-weight:400;
    line-height:.3rem;
  }
  /deep/ .van-sidebar-item--select {
    color:@primary-color;
  }
  /deep/ .van-sidebar-item__text {
    font-size:.2rem;
    font-family:Microsoft YaHei;
    font-weight:400;
    line-height:.3rem;
  }
  /deep/ .van-sidebar-item {
    padding: .2rem 0 .2rem .36rem;
    text-align: left;
  }

}


</style>
