<template>
  <div style="overflow:auto">
    <div class="qr_box">
      <div class="hengtiao"></div>
      <div class="conten_box">
        <div class="header_text"></div>
        <vue-qrcode  text="0482 5545 14570482 5545 14570482 5545 1457" ></vue-qrcode>
        <div class="xuxian"></div>
        <div class="juanmart">卷码</div>
        <div class="juan_t">0482 5545 1457</div>

        <div class="tips">面诊时，请出示您的二维码</div>
      </div>
      
    </div>
    
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="less" scoped>
.qr_box {
  height: 2.9rem;
  background: @primary;
  position:relative;

  .conten_box {
    position:absolute;
    left: 50%;
    top: .28rem;
    margin: .23rem .19rem 0 -3.35rem;
    width: 6.7rem;
    background:#fff;
    border-radius: .15rem;
    box-shadow: 0 0.08rem 0.3rem #f5d9d9;
    .juanmart,
    .juan_t {
      font-size:.42rem;
      font-family:PingFang SC;
      font-weight:600;
      line-height: .72rem;
      color:#292621;
      letter-spacing: .025rem;
      opacity:1;
    }
    .tips {
      font-size: .28rem;
      font-family:PingFang SC;
      font-weight:400;
      line-height: .7rem;
      color:rgba(153,153,153,1);
      letter-spacing: .025rem;
      opacity:1;
      margin-bottom: .2rem;
    }
    .juan_t {
      font-size: .36rem;
      font-weight:400;
      color:rgba(153,153,153,1);
    }
    .xuxian {
      width: 5rem;
      height:0px;
      border:1px dashed rgba(153,153,153,1);
      opacity:1;
      margin: .4rem auto .26rem;
    }
    .header_text {
      background:#fff;
      border-radius: .15rem;
      height: .7rem;
      position:relative;
      &::after {
        position: absolute;
        left: -.1rem;
        top: .1rem;
        content: "";
        width: 0.2rem;
        height: 0.1rem;
        border-radius: 100%;
        background: @primary;
      }
      &::before {
        position: absolute;
        right: -.1rem;
        top: .1rem;
        content: "";
        width: 0.2rem;
        height: 0.1rem;
        border-radius: 100%;
        background: @primary;
      }
    }
    
  }
  .hengtiao {
    display: block;
    padding: 0.05rem;
    border: 0.1rem solid #d6254e;
    background: #fff;
    border-radius: 0.2rem;
    position: absolute;
    left: 50%;
    top: 0;
    width: 7rem;
    margin-top: .33rem;
    margin-left: -3.5rem;
  }
}
</style>
