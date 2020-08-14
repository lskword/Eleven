<template>
  <div>
    <div class="default_title doctor_home scfx">精准预约</div>

    <div class="adderss ellipsize">
      <img class='img_icon' src="@/assets/img/2842@2x.png" alt="">
      <span >妇产科-华中科技大学同济医学院附属协和医院</span>
    </div>

    

  </div>
</template>

<script>
export default {
  props: {
    consultSkilledMarkList: {
      type: Array,
      default: ()=> {
        return []
      }
    },
    userId: {
      type: String,
      default: ()=>{
        return ''
      }
    },
    consultRecord: {
      type: Object,
      default: ()=> {
        return {
          count: 0,
          recordList: []
        }
      }
    },
  },

  methods: {
    seeMore() {
      this.$router.push({
        path: '/goodInList',
        query: {
          userId: this.userId
        }
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.scfx.doctor_home {
  padding-top: 0.54rem;
}
.doctor_home {
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  background: #fff;
  
}
.check_box_sel {
  margin: 0 .3rem;
  display: flex;
  font-size: .24rem;
  font-family:PingFang SC;
  font-weight:400;
  line-height: .43rem;
  color:rgba(153,153,153,1);
  letter-spacing: .01rem;
  opacity:1;
  .left_box {
    padding-top: .77rem;
    width: .36rem;
    height: .78rem;
  }
  .right_box {

  }
}
.adderss {
  display: flex;
  padding: 0 .3rem .2rem;
  justify-content: flex-start;
  align-items: center;
  font-size: .28rem;
  font-family:PingFang SC;
  font-weight:bold;
  line-height: .43rem;
  color:rgba(51,51,51,1);
  letter-spacing:0.01rem;
  opacity:1;
  .img_icon {
    width: .25rem;
    height: .3rem;
    margin-right: .11rem;
    display: block;
  }
}
.zdy_shanchang_box {
  text-align: left;
  .zdy_shanchang {
    margin-right: 0.24rem;
    height: 0.68rem;
    margin-bottom: 0.2rem;
    font-size: 0.28rem;
    padding: 0 0.2rem;
  }
}

.see_more {
  text-align: center;
}
</style>
