<template>
  <div class="identity_box">
    <tips value="*国家卫健委要求，就医行为必须实名登记"></tips>
    <van-cell-group>
      <van-field class="lab_color" v-model="identity.realName" label="姓名" input-align="right" placeholder="请输入" />
      <van-cell >
        <template solt='title'>
          <div class="sex_box">
            <span>性别</span>
            <p class="sex">
              <van-button @click="identity.sex = 1" :type="identity.sex === 1? 'primary': 'info'"  class="sex_btn">男</van-button>
              <van-button @click="identity.sex = 0" :type="identity.sex === 0? 'primary': 'info'" class="sex_btn">女</van-button>
            </p>
          </div>
        </template>
      </van-cell>
      <van-cell title="出生日期" is-link :value="identity.birthDay || '请选择'" @click='dateShow=true'/>
      <van-cell title="证件类型"  :value="identity.certificateType" />
      <van-field v-model="identity.certificateNo" type="number" label="证件号" input-align="right" placeholder="请输入" />
    </van-cell-group>

    <van-button type="primary" class="v_fixed v_bottom no-border-radius" size="large" block @click="saveIdentity">保存</van-button>
    <van-popup v-model="dateShow" position="bottom" :style="{ minHeight: '40%' }" >
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        title="选择年月日"
        :min-date="minDate"
        :max-date="maxDate"
        @confirm="dateConfirm"
        @cancel="dateShow = false"
      />
    </van-popup>
    
  </div>
</template>

<script>
import {realNameAuthApi} from '@/api/identityAuth'
  export default {
    data () {
      return {
        identity: {
          realName: '',
          certificateNo: '',
          sex: 0,
          birthDay: '',
          certificateType: '身份证'
        },
        dateShow:false,
        minDate: new Date(1980, 0, 1),
        maxDate: new Date(),
        currentDate: new Date(),
      }
    },
    created () {

     },
    methods: {
      dateConfirm(value) {
        this.identity.birthDay = this.formatDate(value,'yyyy-MM-dd');
        this.dateShow = false;
      },
      saveIdentity() {
        realNameAuthApi(this.identity).then(()=> {
          this.$toast.success('认证成功')
          this.$router.go(-1)
        })

      }
    }
  }
</script>

<style lang="less" scoped>
.identity_box {
  text-align: left;
  .sex_box {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    white-space: pre-wrap;
    text-align: center;
    word-wrap: break-word;
    .sex {
      display: inline-block;
      .sex_btn {
        height: 33px;
        width: 1.4rem;
        margin-left: .2rem;
      }
    }
  }
}
</style>
