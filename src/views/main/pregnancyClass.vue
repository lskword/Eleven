
<style lang="less"  scoped>
.home {
  background:#fff;
  overflow:hidden;
  .bg_icon {
    height: 3.4rem;
    display: block;
    width: 19.2rem;
  }
  .content {
    margin: 0 auto;
    width: 14.4rem;
    .tabs_box {
      overflow:hidden;
    }
    .title_box {
      width:7rem;
      height:1.2rem;
      background:rgba(246,246,246,1);
      font-size: .34rem;
      font-family:Microsoft YaHei;
      font-weight:400;
      color:rgba(153,153,153,1);
      line-height: 1.2rem;
      text-align:center;
      float: left;
      cursor: pointer;
    }
    .title_box.active {
      background: #fff;
      color: #333333;
    }
    .video_ctx {
      padding-top: .9rem;
      height: 6rem;
      overflow: hidden;
      .tabs {
        box-shadow:0px 20px 34px 3px rgba(245,245,245,1);
        float: left;
        width: 1.61rem;
        .zbjs.active {
          background: @primary-color;
          color:#fff;
        }
        .zbjs {
          width:2.61rem;
          height:1.24rem;
          background: #fff;
          font-size: .26rem;
          font-family:Microsoft YaHei;
          font-weight:400;
          color:rgba(51,51,51,1);
          line-height:1.24rem;
          text-align:center;
        }
      }
      .ctx {
        margin-left: 3.1rem;
        padding-top: .3rem;
        margin-top: -.3rem;
        overflow: hidden;
        height: 100%;
      }
    }
  }
  .video-box {
    
  }
}
</style>


<template>
  <div class="home ">
    <img class="bg_icon" src="//ileyun.ivfcn.com/tools/static/img/2_05.png" alt="">
    <div class="content">
      <div class="tabs_box">
        <div @click='active=0' :class="['title_box', active == 0 ? 'active' :'']">好孕课堂</div>
        <div @click='active=1' :class="['title_box', active == 1 ? 'active' :'']">好孕直播</div>
      </div>
      <div class="video_ctx">
        <div class="tabs">
          <div @click='act=0' :class="['zbjs', act == 0 ? 'active' :'']">直播介绍</div>
          <div @click='act=1' :class="['zbjs', act == 1 ? 'active' :'']">专家讲解</div>
        </div>
        <div class="ctx">
            <video-box class="video-box"></video-box>
        </div>
      </div>
    </div>
    

  </div>
</template>

<script>
import videoBox from '@/components/video.vue'
export default {
  name: 'Home',
  data() {
    return {
      active:0,
      act: 0
    }
  },
  components: {
    videoBox
  },
  created() {
    console.log(12)
    console.error(1111);
    console.warn(12)
  },
  methods: {

  }
}
</script>

