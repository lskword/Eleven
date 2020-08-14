<template>
  <div class='one'>
<!-- 密码输入框 -->
<van-password-input
  :value="value"
  info="密码为 4 位数字"
  :length="4"
  :focused="showKeyboard"
  @focus="showKeyboard = true"
/>
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
export default {
  data() {
    return {
      value: '',
      showKeyboard: true,
      to: {}
    };
  },
  beforeRouteEnter (to, from, next) {
    console.log(to, from);
    next((vm)=> {
      vm.to = to
    })
  },
  methods: {
    onInput(key) {
      this.value = (this.value + key).slice(0, 4);
      if (this.value == 9527) {
        let {path, query, params} = this.to;
        this.$router.push({path, query, params})
      }
    },
    onDelete() {
      this.value = this.value.slice(0, this.value.length - 1);
    },
  },
};
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
