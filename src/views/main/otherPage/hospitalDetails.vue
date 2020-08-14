<template>
<div class="loading_list" v-if="loading">
    <van-skeleton title :row="6" class="loading_list_skeleton" v-for="(item, index) in 3" :key="index" />
  </div>
  <div class="see_details" v-else>
    <van-image
      class='img_box'
      lazy-load
      :src="dataJect.logoPath"
    />
    <div class="title_name">医院介绍</div>

    <div class="tipx">
      <span :class="[showOrHide ? '' : 'ellipsize4']">
        {{dataJect.brief}}
      </span>
      <template v-if="dataJect.brief.length >98">
        <span class="show_or_hide" @click="showOrHide = !showOrHide" v-if="!showOrHide">... 详情</span>
        <span class="show_shouqi" @click="showOrHide = !showOrHide" v-else> 收起</span>
      </template>
      
    </div>

    <div class="default_solid_color"></div>

    <div class="name_tel">
      <p class="name">{{dataJect.address}}</p>
      <div class="tel">
        <a :href="'tel:' + dataJect.telephone" >
          <div class="icon">
            <img src="@/assets/img/3117@2x.png" alt="">
            <p>电话</p>
          </div>
        </a>
        <div class="icon">
          <img src="@/assets/img/4169@2x.png" alt="">
          <p>导航</p>
        </div>
      </div>
    </div>

    <div class="title_name">专家介绍</div>


    <swiper :options="swiperOptions" class="swiper_box">
      <swiper-slide v-for="(item, index) in 14" class="swiper-slide_box" :key="index">
        <div>
          <img src="@/assets/img/doctor_defalut@2x.png" class='doctor_img' alt="">
          <b style="font-size:.32rem;">郭勇</b>
          <p class="txt">主任医师</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import {hospitalDetailApi} from '@/api/otherPage'
  export default {
    data() {
      return {
          showOrHide: false, 
          dataJect: {
            brief: ''
          },
          loading:true,
          swiperOptions: {
            slidesPerView: 'auto',
            spaceBetween: 25,
          },
      }
    },
    async created() {
      var userId =  this.$route.params.userId;
      let {data} = await hospitalDetailApi(userId);
      this.loading = false;
      // let {data} = {"code":200,"message":"操作成功！","data":{"id":168,"parentId":0,"path":null,"name":"福总生殖中心","aliasName":"福州总医院","code":"fzzy","address":"福州市西二环北路156号","telephone":"02342342214","email":"123@huchuang.com","hasChildren":null,"order":999,"website":null,"bak":null,"createDate":"2019-07-15 15:19:21","modifyDate":"2019-10-14 12:10:04","creates":null,"modifys":null,"longitude":"119.2801910000","latitude":"26.0907440000","brief":"联勤保障部队第九〇〇医院\r\n为您提供在线预约、自助排队、就诊指南、在线咨询服务","logoPath":"https://ileyun.ivfcn.com/file/20191008/31D822A10EF14E3DB6EC0A3FCFB8F4D8.jpg","serviceItem":"人工授精(丈夫供精),第一代试管婴儿IVF,第二代试管婴儿ICSI","spellCode":null,"spellBrevityCode":null,"wubiCode":null,"serviceItemIds":"42,44,45","hisNo":null,"relation":0,"areaCode":null,"del":null}}
      // console.log(data);
      this.dataJect = data;
    },
  }
</script>

<style lang="less" scoped>
.swiper-slide_box{
  width: 1rem;
  min-height: 1rem;
  font-size: .24rem;
  text-align: center;
  font-family:PingFang SC;
  font-weight:400;
  line-height: .43rem;
  color:rgba(110,110,110,1);
  letter-spacing: .01rem;
  opacity:1;
  .doctor_img {
    width:1.00rem;
    height:1rem;
    background:rgba(231,237,234,1);
    border-radius:50%;
    opacity:1;
  }
 }
.see_details {
  background: #fff;
  padding: .19rem .3rem;
  text-align: left;
  .name_tel {
    display: flex;
    justify-content: space-between;
    .name {
      width: 4.16rem;
    }
    .tel {
      font-size: .34rem;
      font-family:PingFang SC;
      font-weight:400;
      line-height: .34rem;
      color:rgba(153,153,153,1);
      opacity:1;
      display:flex;
      div.icon {
        img {
          width:.4rem;
          height: .4rem;
          margin-bottom: .08rem;
        }
        text-align: center;
        font-size: .2rem;
        font-family:PingFang SC;
        font-weight:400;
        line-height: .2rem;
        
        color:rgba(153,153,153,1);
        opacity:1;
        margin-left: .36rem;
      }
    }
  }
  .img_box {
    height:4.2rem;
    background:rgba(255,255,255,1);
    opacity:1;
  }
  .aderrs,
  .name_tel {
    font-size: .34rem;
    font-family:PingFang SC;
    font-weight:400;
    line-height: .34rem;
    color:rgba(51,51,51,1);
    opacity:1;
  }
  .title_name{
    font-size: .44rem;
    font-family:PingFang SC;
    font-weight:bold;
    line-height: .45rem;
    color:rgba(51,51,51,1);
    opacity:1;
    margin: .4rem 0 .3rem;
    text-align: left;
  }
  .tipx {
    // height:2.13rem;
    font-size: .28rem;
    font-family:PingFang SC;
    font-weight:400;
    line-height: .52rem;
    color:rgba(110,110,110,1);
    opacity:1;
    text-align: left;
    position: relative;
    .show_or_hide {
      position: absolute;
      right: 0;
      bottom: 0;
      z-index: 1;
      background: #fff;
      color: #999999;
    }
    .show_shouqi{
      color: #999999;
    }
  }
  .default_solid_color {
    height:1px;
    background:rgba(235,235,235,1);
    opacity:1;
    margin: .2rem 0 .3rem;
  }
}
</style>
