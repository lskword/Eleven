<template>
  <div class='one'>
    <div class="login_txt">登录获得更多精彩</div>
    <div class="tip">在这里寻找</div>
    <div class="userLock" >
      <div class="wan_box">
        <div class="flex_box" >
          <div class="left">
            +86
          </div>
          <div class="right">
            <van-field v-model="user.mobile" type="tel" @focus='focusFn' @blur='blurFn' placeholder="请输入手机号" />
          </div>
        </div>
        <div :class="['xiahuaxian', focusOrBlur? 'focus': '' ]"></div>
      </div>

      <div class="btn_save">
        <van-button type="primary" v-if="user.mobile" @click="sendCode" block>获取验证码</van-button>
        <van-button color='#cccccc' v-else block>获取验证码</van-button>
      </div> 
      <div class='tip'>未注册手机验证后自动注册</div>
    </div>
    
  </div>
</template>

<script>
  import {iosOrAndFun} from '@/utils/filter'
  export default {
    data () {
      return {
          user: {
            "mobile": '',
            "smsCode": ''
          },
          smsText: 60,
          focusOrBlur: false,
      }
    },
    mounted() {
      iosOrAndFun({ funName: "userInvalid" })
    },
    methods: {
     
      focusFn() {
        this.focusOrBlur = true;
      },
      blurFn() {
        this.focusOrBlur = false;
      },
      sendCode() {
        if (this.user.mobile.trim().length !== 11) {
          this.$toast('请检查手机号是否正常!')
          return false
        }
        sessionStorage.setItem('mobile', this.user.mobile || '')
        this.yanzhengmLock = false
        this.$toast('发送成功')
        this.$router.replace({name: 'mobile'})
      }
    }
  }
</script>

<style lang="less" scoped>
.one {
  width: 100vw;
  // height: 100vh;
  padding: 8vh 1rem 0; 
  background: #fff;
  .wan_box {
    position:relative;
    .flex_box {
      display: flex;
      align-items: center;
      border-bottom: 1px solid #f9f9f9;
      line-height: 24px;
      .left {
        min-width: .5rem;
        font-size: .3rem;
        font-weight: bold;
      }
      .right /deep/ .van-field__control {
        color: #333;
      }
    }
    .xiahuaxian {
      box-sizing: border-box;
      margin: 0;
      height: 2px;
      border: none;
      position: absolute;
      left: 0;
      right: 0;
      bottom: -1px;
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      -webkit-transition: -webkit-transform .45s cubic-bezier(.23,1,.32,1);
      transition: -webkit-transform .45s cubic-bezier(.23,1,.32,1);
      transition: transform .45s cubic-bezier(.23,1,.32,1);
      background: @primary;
      transition: transform .45s cubic-bezier(.23,1,.32,1),-webkit-transform .45s cubic-bezier(.23,1,.32,1);
    }
    .xiahuaxian.focus {
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }
  }
  .login_txt { 
    text-align: left;
    font-size: .4rem;
  }
  .tip {
    font-size: .2rem;
    text-align: left;
  }
}
.btn_save {
  margin: 1rem auto .3rem;
}
</style>
