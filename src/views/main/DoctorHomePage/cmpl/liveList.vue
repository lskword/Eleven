<template>
  <div>
    <template v-if="liveList.length >0">
      <div class="list_box" v-for="(item, index) in liveList" :key="index">
        <img src="@/assets/img/sdf3@2x.png" alt="" class="icon">
        <div class="content">
          <p class='ellipsize'>这一次就让你搞懂HCG</p>
          <p class="two ellipsize">陈锋：青岛大学附属医院崂山分院</p>
          <p class="three ellipsize">免费回看</p>
        </div>
      </div>
    </template>
    <div class="no_data_error" v-else>
      <van-empty  description="暂无直播" class='error_box'>
          <template #image>
              <img style='width:3.2rem; height:2rem' src="@/assets/img/not_data@2x.png" alt="">
          </template>
      </van-empty>
    </div>
  </div>
    
</template>

<script>
  export default {
    props: {
      liveList: {
        type: Array,
        default: ()=>{
          return []
        }
      }
    }
  }
</script>

<style lang="less" scoped>

.list_box {
  display: flex;
  justify-content: start;
  padding: .15rem .3rem;
  img.icon {
    width:2.10rem;
    height:1.48rem;
    background:rgba(255,255,255,1);
    border:1px solid rgba(112,112,112,1);
    opacity:1;
    border-radius: 0.06rem;
  }
  div.content {
    text-align: left;
    min-width:3.27rem;
    height:.45rem;
    font-size: .32rem;
    font-family:PingFang SC;
    font-weight:bold;
    line-height: .45rem;
    color:rgba(51,51,51,1);
    margin-left: .3rem;
    opacity:1;
    flex: 1;
    p.two {
      height: .33rem;
      font-size: .24rem;
      font-family:PingFang SC;
      font-weight: 400;
      line-height: .33rem;
      color:rgba(51,51,51,1);
      opacity:1;
      margin-top: .29rem;
    }
    p.three {
      margin-top: .07rem;
      font-size: .24rem;
      font-family:PingFang SC;
      font-weight:400;
      color:rgba(153,153,153,1);
      opacity:1;
    }
  }


}
</style>
