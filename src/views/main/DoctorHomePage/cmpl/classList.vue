<template>
  <div>
    <template v-if="courseList.length > 0">
      <div class="list_box" v-for="(item, index) in courseList" :key="index">
        <van-image v-if="!item.coverPic" src="@/assets/img/sdf3@2x.png" alt="" class="icon"/>
        <van-image v-else lazy-load :src="item.coverPic" alt="" class="icon"/>

        <div class="content">
          <p class='ellipsize'>{{item.title}}</p>
          <p class="two ellipsize"> </p>
          <p class="three ellipsize">
            <img src="@/assets/img/3734@2x.png" alt=""> 
            <span style='margin-right:.49rem;'> {{item.readNum}} </span>
            <img src="@/assets/img/2570@2x.png" alt=""> 
            <span> {{item.storeNum}}</span>
          </p>
        </div>
      </div>
    </template>

    <div class="no_data_error" v-else>
      <van-empty  description="暂无课程" class='error_box'>
          <template #image>
              <img style='width:3.2rem; height:2rem' src="@/assets/img/not_data@2x.png" alt="">
          </template>
      </van-empty>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      courseList: {
        type: Array,
        default: ()=> {
          return []
        }
      }
    }
  }
</script>

<style lang="less" scoped>
.list_box {
  display: flex;
  justify-content: start;
  padding: .15rem .3rem;
  .icon {
    width:2.10rem;
    height:1.48rem;
    background:rgba(255,255,255,1);
    border:1px solid rgba(112,112,112,1);
    opacity:1;
    border-radius: 0.06rem;
    display: block;
    /deep/ img.van-image__img {
      display: block;
    }
  }
  div.content {
    text-align: left;
    min-width:3.27rem;
    height:.45rem;
    font-size: .32rem;
    font-family:PingFang SC;
    font-weight:bold;
    line-height: .45rem;
    color:rgba(51,51,51,1);
    margin-left: .3rem;
    opacity:1;
    flex: 1;
    p.two {
      height: .33rem;
      font-size: .24rem;
      font-family:PingFang SC;
      font-weight: 400;
      line-height: .33rem;
      color:rgba(51,51,51,1);
      opacity:1;
      margin-top: .29rem;
    }
    p.three {
      margin-top: .07rem;
      font-size: .24rem;
      font-family:PingFang SC;
      font-weight:400;
      color:rgba(153,153,153,1);
      opacity:1;
      img {
        width: .21rem;
        height: .19rem;
      }
    }
  }
}
</style>
