<template>
  <div>
        <div class="nav_box">
          <div class="nav">
            <div class="left">
              <img src="@/assets/img/logo@2x.png" alt="" class="icon">
              <div class="p">
                <p class='name'>爱乐孕</p>
                <p class='name_icon'>爱乐孕  孕育未来</p>
              </div>

            </div>
            <div class="right">
              <router-link to='/index' tag="p" :class='["def", "/index" == $route.path ? "active" : ""]'>首页</router-link>
              <router-link to='/features' tag="p" :class='["def", "/features" == $route.path ? "active" : ""]'>特色功能</router-link>
              <router-link to='/pregnancyClass' tag="p" :class='["def", "/pregnancyClass" == $route.path ? "active" : ""]'>好孕课堂</router-link>
              <router-link to='/about' tag="p" :class='["def", "/about" == $route.path ? "active" : ""]'>关于我们</router-link>
            </div>
          </div>
        </div>
  </div>
</template>

<script>
  export default {
      data () {
        return {
          active: '/index'
        }
      },
      created() {
        
      }
  }
</script>

<style lang="less" scoped>
.nav_box{
  width: 100vw;
  height: .53rem;
  .nav {
    width: 14.40rem;
    margin: 0 auto;
    height: .53rem;
    .left {
      float: left;
      text-align:left;
    }
    .right {
      float: right;
      padding-right: 1.49rem;
      min-width: 7.50rem;
      .def {
        font-size:.18rem;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(51,51,51,1);
        float:left;
        text-align:center;
        margin-left: .85rem;
        cursor: pointer;
        line-height:.53rem;
        min-width: 1.1rem;
      }
      .def.active {
        font-size: .26rem;
        font-family:Microsoft YaHei;
        font-weight:bold;
        color:rgba(51,51,51,1);
        line-height:.53rem;
        position:relative;
      }
      .def.active:after {
        content: "";
        position:absolute;
        left: 50%;  
        bottom: 0px;
        width: .2rem;
        height: 3px;
        margin-left: -.1rem;
        background: @primary-color;
      }
    }
    .left {
      img.icon {
        width: .56rem;
        height: .56rem;
        float: left;
        vertical-align: middle;
      }
      div.p {
        font-size: .29rem;
        float: left;
        font-family:hzgb;
        color: @primary-color;
        vertical-align: middle;
        margin: 0;
        line-height: .29rem;
        margin-left: .17rem;
        .name {
          margin-bottom: 5px;
          font-weight: bold;
        }
        .name_icon {
          font-size: .16rem;
          font-family:Microsoft YaHei;
          font-weight:400;
          color:@primary-color-2;
          line-height: .16rem;
        }
      }
    }
  }
}
</style>
