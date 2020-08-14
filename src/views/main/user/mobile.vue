<template>
  <div class='one'>
      <!-- 密码输入框 -->
        <van-password-input
          :value="user.smsCode"
          :focused="showKeyboard"
          :length="4"
          :mask='false'
          @focus="showKeyboard = true"
        >
        </van-password-input>

        <span class="login_txt" v-if="smsText != 60" >{{ smsText + 'S后重新发送'}}</span>
        <span class="login_txt" v-else @click="sendCode">重新发送</span>

        <!-- 数字键盘 -->
        <van-number-keyboard
          :show="showKeyboard"
          @input="onInput"
          @delete="onDelete"
          @blur="showKeyboard = false"
        />
  </div>
</template>

<script>
import { loginApi, validateCodeApi } from '@/api/login'
import {setUserInfo, setToken, setUnitId} from '@/utils/auth'
  export default {
    data () {
      return {
          user: {
            "mobile": '',
            "smsCode": ''
          },
          smsText: 60,
          focusOrBlur: false,
          yanzhengmLock: false,
          showKeyboard: true,
      }
    },
    created() {
      this.user.mobile = sessionStorage.getItem('mobile')
      this.sendCode()
    },
    methods: {
      daojiTime() {
        var _this = this
        this.smsText = 60
        this.time = setInterval(()=> {
          if (_this.smsText <= 0) {
            _this.smsText = 60
            clearInterval(_this.time)
            return false
          }
          _this.smsText --
        }, 1000)
      },
      onInput(key) {
        this.user.smsCode = (this.user.smsCode + key).slice(0, 6);
        if (this.user.smsCode.length === 4) this.login()
      },
      onDelete() {
        this.user.smsCode = this.user.smsCode.slice(0, this.user.smsCode.length - 1); 
      },
      focusFn() {
        this.focusOrBlur = true;
      },
      blurFn() {
        this.focusOrBlur = false;
      },
      async login() {
          var { data } = await loginApi(this.user);
          setUserInfo(data)
          setToken(data.token)
          setUnitId(data.unitId)
          this.$router.go(-1)
      },
      sendCode() {
        sessionStorage.setItem('mobile', this.user.mobile)
        this.yanzhengmLock = false
        validateCodeApi({mobile: this.user.mobile})
        .then(()=> {
          this.$toast('发送成功')
          this.daojiTime()
        }).catch(()=>{
          // base64ToImgApi()
        })
      }
    }
  }
</script>

<style lang="less" scoped>
.one {
  width: 100vw;
  height: 100vh;
  padding: 8vh .3rem 0; 
  background: #fff;
  .wan_box {
    position:relative;
    
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
