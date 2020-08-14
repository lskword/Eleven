<template>
    <div :class="['tips', 'van-notify--' + type ]" :style="style">
      <slot name='content'>
        <van-icon :name="name" :color='color' v-if="iconLock" style="margin-right: 4px;" />
        <span :style="{color}">{{value}}</span>
      </slot>
    </div>
</template>

<script>
  export default {
    props: {
      style: {},
      iconLock: {
        type: Boolean,
        default: false
      },
      type: {
        type: String,
        default: ()=> 'warning'
      },
      value: {
        type: String,
        default: ()=> '正在等着赋值...'
      },
      name: {
        type: String,
        default:()=>'bell'
      },
      color: {
        type: String,
        default:()=> '#5B7191'
      }
    }
  }
</script>

<style lang="less" scoped>
.tips {
  transition-duration: 0.2s;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  // -webkit-box-pack: center;
  box-sizing: border-box;
  padding: 8px 16px;
  color: #fff;
  font-size: 0.22rem;
  line-height: 20px;
  white-space: pre-wrap;
  text-align: center;
  word-wrap: break-word;
}

</style>
