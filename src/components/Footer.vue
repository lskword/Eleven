<style lang="less" scoped>
.footer_box {
  height: 4.14rem;
  position: relative;
  overflow: hidden;
  .bg,
  .content {
    height: 4.14rem;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    z-index:0;
    .cont_son {
      overflow: hidden;
    }
  }
  .content {
    z-index: 1;
    min-width: 9.40rem;
    height: 2.27rem;
    left: 50%;
    margin-left:-4.7rem;
    margin-top: .58rem;
    .three {
      float: left;
      // background:red;
      font-size: .16rem;
      font-family:Microsoft YaHei;
      font-weight:400;
      color:rgba(51,51,51,1);
      line-height: .25rem;
      text-align: left;
      .title {
        font-size: .23rem;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(51,51,51,1);
        line-height: .23rem;
        margin-bottom: .2rem;
        
      }
      .son_t {
        margin-bottom: .28rem;
        .youjian {
          width: .23rem;
          height: .19rem;
          display: inline-block;
          margin-right: .11rem;
          vertical-align: middle;
        }
      }
      .son_t_dow {
        .icon {
          width: .99rem;
          height: .99rem;
          display: inline-block;
          
        }
        .icon:nth-child(1) {
          margin-right: .34rem;
        }
      }
      .son_t_a {
        span {
          width: .99rem;
          display: inline-block;
          text-align:center;
        }
        span:nth-child(1) {
          margin-right: .34rem;
        }
      }
    }
    .three.center {
      margin-left: 2rem;
      margin-right: 1.9rem;
    }
  }
  .gon_tex {
    width:8rem;
    height:.16rem;
    font-size: .14rem;
    font-family:Microsoft YaHei;
    font-weight:300;
    color:rgba(153,153,153,1);
    line-height:.16rem;
    margin: 1.37rem auto .34rem;
  }
}
</style>


<template>
    <div class="footer_box">
      <img class="bg" src="//ileyun.ivfcn.com/tools/static/img/footer@2x.png" alt="">
      <div class="content">
        <div class="cont_son">
          <div class="three">
            <p class="title">关于我们</p>
            <p class="son_t">公司简介</p>
            <p class="son_t">发展历程</p>
            <p class="son_t">加入我们</p>
          </div>
          <div class="three center">
            <p class="title">爱乐孕客户端下载</p>
            <p class="son_t_dow">
              <img class="icon" src="//www.ivfcn.com/images/aileyun.png" alt="">
              <img class="icon" src="//ileyun.ivfcn.com/file/20200623/5A18A6551F224384933EC187E8F22D41.png" alt="">
            </p>
            <p class="son_t_a">
              <span>用户端</span><span>医生端</span>
            </p>
          </div>
          <div class="three">
            <p class="title">联系我们</p>
            <p class="son_t"><img class="youjian" src="@/assets/img/yxicon@2x(2).png" alt=""><span>app@huchuang.com</span></p>
          </div>
        </div>

        <p class="gon_tex">Copyright©2011-2017武汉互创科技有限责任公司AII Right Reserved</p>
      </div>
      
    </div>
</template>

<script>
  export default {
    
  }
</script>

