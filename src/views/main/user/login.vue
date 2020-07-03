<template>
  <div class='one'>
    <h3 class="login_txt">登录</h3>
    <div class="login_box">
      <van-field
        v-model="user.mobile"
        required
        label="手机号"
        placeholder="请输入手机号"
      />

      <van-field
        v-model="user.smsCode"
        center
        required  
        clearable
        label="短信验证码"
        placeholder="请输入短信验证码"
      >
        <template #button>
          <van-button size="small" type="primary" v-if="smsText>=60" @click="sendCode">发送验证码</van-button>
          <van-button size="small" type="primary" v-else disabled >{{smsText }}S后重试</van-button>
        </template>
      </van-field>
    </div>
    <div class="btn_save">
       <van-button type="primary" @click="login" block>登录</van-button>
    </div>
  </div>
</template>

<script>
import {loginApi, validateCodeApi} from '@/api/login'
import {setUserInfo, setToken, setUnitId} from '@/utils/auth'
  export default {
    data () {
      return {
          user: {
            "mobile": '',
            "smsCode": ''
          },
          smsText: 60
      }
    },
    methods: {
      async login() {
          var { data } = await loginApi(this.user);
          setUserInfo(data)
          setToken(data.token)
          setUnitId(data.unitId)
      },
      sendCode() {
        var time = ''
        validateCodeApi({mobile: this.user.mobile})
        .then(()=> {
          this.smsText = 60
          time = setInterval(()=> {
            if (this.smsText <= 0) {
              this.smsText = 60
              clearInterval(time)
              return false
            }
            this.smsText --
            
          }, 1000)
          console.log(this)
          this.$toast('发送成功')
        }).catch(()=>{
          console.log('我是错误执行！')
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
.one {
  max-width: 400px;
  margin: 0 auto;
}
.btn_save,.login_box {
  width: 89vw;
  margin: 1rem auto 0;
  max-width: 400px;
}
.login_box {
  margin: 0 auto;
  border: 1px solid #f7f7f7;
  border-radius: 5px;
}
.btn_save {
  width: 88vw;
}
.login_txt { margin-top: 8vh; }
@media screen and (min-width: 480px) {
  .login_txt {
    margin-top: 15vh;
    font-size: 48px;
  }
}
</style>
