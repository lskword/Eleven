<style lang="less" scoped>
.consultation_wrap{
  -webkit-overflow-scrolling:touch;    /* 用于 ios5+ */  
}
  .title_box_show_status {
    display: flex;
    justify-content:space-between;
    align-items:center;
    height: .9rem;
    background:rgba(231,243,254,1);
    opacity:1;
    font-size: .32rem;
    font-family:PingFang SC;
    font-weight:400;
    color:rgba(91,113,145,1);
    opacity:1;
    padding: 0 .3rem;
    .tips {
      span {
        color: #FFC334;
      }
    }
  }
  .content_box {
    height: calc(100vh - 1.8rem);
    overflow-y: auto;
    overflow-x: hidden;
    .doctor_box,
    .user_box {
      display: flex;
      justify-content: flex-start;
      padding: 0 .3rem;
      margin-bottom: .4rem;
      img.doctor_icon {
        width: .8rem;
        height: .8rem;
        margin-right: .1rem;
        border-radius: 100%;
      }
      p.content,
      div.content {
        max-width:4.99rem;
        background:rgba(255,255,255,1);
        border:1px solid rgba(236,237,238,1);
        opacity:1;
        border-radius:.1rem .29rem .29rem .29rem;
        font-size: .32rem;
        font-family:PingFang SC;
        font-weight:500;
        line-height: .42rem;
        color:rgba(51,51,51,1);
        letter-spacing:.01rem;
        padding: .2rem .4rem;
        opacity:1;
        word-wrap: break-word;
        word-break: normal;
        white-space: pre-wrap;
        text-align: left;
        /deep/ .custom-button {
          width: .08rem;
          height: .08rem;
          border-radius: 100%;
          background: #2B2B2B;
        }
      }
      .content.yuyin {
        display: flex;
        align-items: center;
        /deep/ .van-slider {
          width: 3rem;
          margin: 0 .12rem  0 .15rem;
        }
        /deep/ .van-count-down {
          font-size: .32rem;
        }
        .open_video {
          width: .12rem;
          height: .14rem;
        }
      }
    }
    .user_box {
      justify-content: flex-end;
      img.doctor_icon {
        margin-right: 0;
      }
      p.content {
        background:rgba(231,243,254,1);
        border:1px solid rgba(236,237,238,1);
        opacity:0.8;
        border-radius:.29rem .1rem .29rem .29rem;
        margin-right: .1rem;
        
      }
    }
    .date_time {
      min-height: .4rem;
      max-width: 5.2rem;
      margin: 0 auto;
      text-align: center;
      font-size: .28rem;
      font-family:PingFang SC;
      font-weight:400;
      color:rgba(120,127,133,1);
      opacity:1;
      line-height: .4rem;
      padding: .2rem 0;
    }
    .first_content {
      min-height:4.73rem;
      background:rgba(255,255,255,1);
      opacity:1;
      border-radius: .06rem;
      margin: 0 .3rem;
      font-size: .28rem;
      /deep/ .van-field__label {
         margin-right: 0;
      }
      /deep/ .van-field--disabled {
        padding: 14px 12px;
      }
      /deep/ .label_txt {
        font-size: .28rem;
        font-family:PingFang SC;
        font-weight:400;
        line-height: .43rem;
        color:rgba(153,153,153,1);
        letter-spacing: .01rem;
        opacity:1;
      }
      /deep/ .van-field__control:disabled {
        font-size: .28rem;
        font-family:PingFang SC;
        font-weight:400;
        color:rgba(51,51,51,1);
        opacity:1;

      }
      .zdiy_box {
        display: flex;
        padding: 0 12px 14px;
        color: #323233;
        font-size: 0.28rem;
        line-height: 24px;
        background-color: #fff;
        text-align: left;
        .label_box {
          // margin-right: 12px;
          width: 1.6rem;
          font-size: 0.28rem;
          font-family: PingFang SC;
          font-weight: 400;
          line-height: 0.43rem;
          color: #999999;
          letter-spacing: 0.01rem;
          opacity: 1;
          
        }
        .dingdan {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex: 1;
        }
        .content {
          font-size: .28rem;
        
          img.img_details {
            width:1.10rem;
            height:1.1rem;
            background:rgba(255,255,255,1);
            opacity:1;
            border-radius: .06rem;
            margin-right: .12rem;
          }
          .see_details {
            color: @primary;
          }
        }
      }
      
    }
    
    .pinglun_box {
        width: 100vw;
        min-height: 4.66rem;
        background:rgba(255,255,255,1);
        opacity:1;
        border-radius:.3rem .3rem 0 0;
        padding-bottom: .3rem;
        .p_title {
          min-height: .9rem;
          text-align: left;
          font-size: .36rem;
          font-family:PingFang SC;
          font-weight:bold;
          line-height: .9rem;
          color:rgba(51,51,51,1);
          opacity:1;
          margin:0 .35rem;
          border-bottom:1px solid rgba(243,243,243,1);
        }
        .mnu_box {
          display: flex;
          justify-content: space-between;
          text-align: center;
          font-size: .32rem;
          font-family:PingFang SC;
          font-weight:500;
          line-height: .42rem;
          color:rgba(51,51,51,1);
          letter-spacing: .01rem;
          opacity:1;
          margin:.6rem .69rem .11rem;
          img.mnu_icon {
            width: 1.33rem;
            height: 1.17rem;
            
          }
          p.active {
            color:rgba(205,205,205,1);
            letter-spacing:.1rem;
          }
        }
        .btn_box {
          display: flex;
          margin: .27rem .6rem 0;
          justify-content: space-between;
          .btn {
            width: 3rem;
            height: .78rem;
          }
        }
      }
  }
.pingjia_container {
      // min-height:7.55rem;
      background:rgba(255,255,255,1);
      opacity:1;
      margin:  0.3rem;
      overflow: auto;
      border-radius: 4px;
      .title_box_abc{
        font-size: .36rem;
        font-family:PingFang SC;
        font-weight:bold;
        line-height: .36rem;
        color:rgba(51,51,51,1);
        opacity:1;
        text-align: left;
        margin: .3rem 0 0 .35rem;
      }
      .xingx {
        margin-top:.44rem;
      }
      .bbang_txt {
        margin-top:.2rem;
        font-size: .32rem;
        font-family:PingFang SC;
        font-weight:400;
        line-height: .38rem;
        color:rgba(255,198,0,1);
        opacity:1;
      }
      .pn_cne {
        /deep/ .van-field__control {
          background:rgba(247,247,247,1);
          opacity:1;
          border-radius: .08rem;
          font-size: .24rem;
          font-family:PingFang SC;
          font-weight:400;
          line-height: .3rem;
          color:rgba(153,153,153,1);
          opacity:1;
          padding: .15rem .2rem;
        }
        .tips {
          font-size: .24rem;
          font-family:PingFang SC;
          font-weight:400;
          line-height: .29rem;
          color:rgba(178,178,178,1);
          opacity:1;
        }
        .con_qq {
          font-size: .24rem;
          font-family:PingFang SC;
          font-weight:400;
          line-height: .29rem;
          color:rgba(51,51,51,1);
          opacity:1;
          text-align:left;
          padding: 0.2rem 0.6rem 0.6rem;
          // padding: 0.6rem 0.6rem 0.2rem;
        }
      }
      .save_pingji {
        padding-bottom:14px;

      }
      .biaoqian {
        padding: .6rem .6rem .2rem;
        text-align: left;
        .bian_son {
          margin-right: .26rem;
          margin-bottom: .2rem;
          min-height: .48rem;
          border-radius: 4px;
        }
        .bian_son.check_box {
          background:rgba(44,134,240,1);
          opacity:1;
          border-radius: 4px;
          font-family:PingFang SC;
          font-weight:400;
          line-height: .3rem;
          color:rgba(255,255,255,1);
          opacity:1;
        }
      }
    }
  .content_box_8.content_box {
    height: calc(100vh - .9rem) !important;
  }
.pinglun_box_see {
  .close_btn {
    min-height:1rem;
    background:rgba(247,247,247,1);
    opacity:1;
    font-size: .32rem;
    font-family:PingFang SC;
    font-weight:400;
    line-height: 1rem;
    color:rgba(86,91,110,1);
    opacity:1;
    border-top: 1px solid #999999;
  }
  .see_mnu_box {
    display: flex;
    justify-content: space-between;
    text-align: center;
    font-size: .24rem;
    font-family:PingFang SC;
    font-weight:400;
    line-height: .42rem;
    color:rgba(120,127,133,1);
    opacity:1;
    letter-spacing: .01rem;
    opacity:1;
    padding:.5rem .3rem .3rem;
    background: #F7F7F7;
    
    p.mnu_icon {
      width: 1.2rem;
      height: 1.2rem;
      display: flex;
      justify-content:center;
      background:rgba(255,255,255,1);
      opacity:1;
      border-radius: .2rem;
      align-items:center;
      margin-bottom: .17rem;
      .icon {
        width: .6rem;
        height: .5rem;
      }
    }
  }
}
.huifu_box {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  min-height: .98rem;
  background:rgba(246,246,246,1);
  padding: 0 .1rem;
  display: flex;
  
  align-items: center;
  .text {
    flex: 8;
    // min-height: .76rem;
  }
  .wen_txt {
    padding: .15rem .1rem  .15rem  .16rem;
    border-radius: .040rem;
    font-size: .28rem;
  }
  .wen_txt /deep/ .van-field__body > .van-field__control{
    max-height: 1.6rem;
  }
  .send_box {
    flex: 2;
    justify-content: center;
    align-items: center;
    display: flex;
    margin: 0 .1rem;
    .go_more_details {
      width: .5rem;
      height: .5rem;
      font-size: .5rem;
      text-align:center;
      line-height: .5rem;
      background:#fff;
      color: #444444;
      border: 1px solid #444444;
      border-radius: 100%;
    }
  }
  .send_box.see_lock {
    flex: 1;
  }
}
.footer_pay {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  border-top: 1px solid #f9f9f9;
  background: #fff;
  .price {
    font-style: normal;
    font-size: 16px;
    text-align: left;
    text-align: center;
    span {
      color: @primary;
    }
  }
  .go_to_play {
    border-radius: 0;
  }
}
.pinglunt_txt {
  width:3rem;
  height: .78rem;
  border:1px solid rgba(181,181,181,1);
  opacity:1;
  border-radius: .1rem;
  text-align:center;
  font-size: .28rem;
  font-family:PingFang SC;
  font-weight:400;
  line-height: .78rem;
  color:rgba(181,181,181,1);
  letter-spacing: .01rem;
  margin: 0 auto;
  opacity:1;
}

</style>

<template>
  <div class="loading_list" v-if="skeletonLoading">
    <van-skeleton title class="loading_list_skeleton" :row="6" v-for="(item, index) in 3" :key="index" />
  </div>
  <div v-else>
      <div class="consultation_wrap">
        <div class="title_box_show_status animated fadeInDown">
          <div class="status">{{mainInfo.status | orderTypes}}</div>
          <div class="tips" v-if="mainInfo.status==10">医生工作忙碌，请耐心等待</div>
          <div class="tips" v-if="mainInfo.status==9">将在 <span>{{mainInfo.unit}}回合/24小时</span>后结束</div>
        </div>
        <!-- 内容区 -->
        <div :class="['content_box', mainInfo.status == 8 ? 'content_box_8': '']" :style='{height: "calc(100vh - " + contentBoxStyle + "rem)"}' id="chat_consultation_content" >
          <div class="date_time">{{mainInfo.createDate}}</div>
          <div class="first_content animated fadeIn">

            <van-field 
              label="病情描述:" 
              :border='false' 
              type="textarea" 
              rows="1"  
              autosize  
              disabled 
              label-width='1.6rem' 
              label-class="label_txt"	 
              :value='mainInfo.content' />

           <div class='zdiy_box'>
              <div class="label_box">病情照片:</div>
              <div class="content">
                  <img @click='seeMore(mainInfo.fileList, index)' v-for="(item, index) in mainInfo.fileList" :key="index" class="img_details" :src="item" alt="">
              </div>
            </div>

            <div class='zdiy_box' >
              <div class="label_box " >健康档案:</div>
              <div class="content">
                  <span class="see_details" @click="goHealthRecords(item)" >点击查看</span>
              </div>
            </div>
          </div>

          <div class="date_time" v-if="mainInfo.status != 8">医生临床工作繁忙，回复简洁，请您理解</div>
          <!-- 已完成的时候显示开始时间 -->
          <div class="date_time" v-if="mainInfo.status == 8">{{mainInfo.startDate}}</div>

          <!-- 回复内容区 -->
          <template v-for="(item, index) in list" >
            <!-- 医生 -->
            <div class="doctor_box animated fadeInLeft" :key="index" v-if="item.userType == 'user'">
              <img v-if="!item.headPath" src="@/assets/img/doctor_defalut@2x.png" alt="" class="doctor_icon">
              <img v-else :src='item.headPath' alt="" class="doctor_icon">
              <!-- <van-image
                v-else
                class="doctor_icon"
                round
                width="10rem"
                height="10rem"
                :src="item.headPath"
              /> -->
              <p class="content" v-if="item.contentType==1">{{item.content}}</p>
              <p class="content" v-else-if="item.contentType == 2"><img @click='seeMore([item.content])' :src="item.content" alt=""></p>
              <div class="content yuyin" @click="audioPay(item.content, item.timeLen, index)" v-else-if="item.contentType == 3" >
                <!-- <span>{{(item.bak * 1000) | formatDate('mm:hh:ss')}}</span> -->
                <van-count-down :auto-start="false" :time="(item.timeLen*1000)" format="mm:ss"/>
                <van-slider   bar-height="2px" :max='item.timeLen' disabled  active-color="#ABABAB" v-model="item.slider" @change="onChange" >
                  <template #button>
                    <div class="custom-button"></div>
                  </template>
                </van-slider>
                <img src="@/assets/img/open_video1@2x.png" alt="" class="open_video">
              </div>
            </div>
            <!-- 患者 -->
            <div class="user_box animated fadeInRight" :key="index" v-if="item.userType == 'member'">
              <p class="content" v-if="item.contentType==1">{{item.content}}</p>
              <p class="content" v-else-if="item.contentType == 2"><img @click='seeMore([item.content])' :src="item.content" alt=""></p>
              <img src="@/assets/img/merber@2x.png" alt="" class="doctor_icon">
            </div>
          </template>
          <!-- 已完成状态 -->
          <template v-if="mainInfo.status == 8">
            <div class="date_time" >{{mainInfo.endDate}}</div>
            <div class="date_time" >医生的回复仅为建议，具体诊疗需前往医院出现</div>
            <!-- 咨询结束 -->
            <van-divider>问诊结束</van-divider>
          </template>
          <!-- 已取消状态 -->
          <div class="date_time" v-if="mainInfo.status == 7">医生忙碌，暂时无法回复，已为您退诊，咨询费用已全部退还</div>

          <!-- 评价 只有在完成咨询状态下才能评价 -->
          <div class="pingjia_container" v-if="mainInfo.review">
             <div class="xingx">
               <van-rate ref="rateList" :icon='require("@/assets/img/2458@2x.png")' disabled :void-icon="require('@/assets/img/4092.png')" @change="rateOnChange" v-model="mainInfo.reviewNum"  :allow-half='allowHalf' size='.55rem'  />
             </div>
             <div class="bbang_txt" >{{mainInfo.reviewNum | startTxt}}</div>
             <div class="biaoqian">
               <van-tag plain type="info" disabled  class='check_box bian_son' v-for="(item) of mainInfo.reviewMarkList" :key='item'>{{item}}</van-tag>
             </div>
            <div class="pn_cne">
              <van-field
                  v-model="mainInfo.reviewContent"
                  type="textarea"
                  rows="5"
                  autosize
                  placeholder="这里可以输入您的意见"
                  v-if="!mainInfo.review"
                />
              <div class="con_qq" v-else>{{mainInfo.reviewContent || '患者对本次服务感觉非常满意'}}</div>
              <div class="tips">感谢您的评价！</div>
            </div>

            <div class="save_pingji">
              
              <van-button
                class="btn"
                type="primary"
                style="width:3rem;"
                @click='consultReview'
                v-if="!mainInfo.review"
              >提交评价</van-button>
            </div>
          </div>


          <div class="pinglun_box" v-if="mainInfo.status == 8">
            <p class="p_title">本次咨询已结束</p>
            <div class="mnu_box">
              <div class="mun">
                <img v-if="!mainInfo.collection" @click="collectionFn" src="@/assets/img/2414@2x.png" alt="" class="mnu_icon">
                <img v-else src="@/assets/img/2413@2x.png" alt="" class="mnu_icon">
                <p v-if="!mainInfo.collection" @click="collectionFn" class="mnu_name">收藏医生</p>
                <p v-else class="mnu_name active">已收藏</p>
              </div>
              <div class="mun">
                <img v-if="!mainInfo.review" src="@/assets/img/2419@2x.png"  @click="reviewContentLock=true" alt="" class="mnu_icon">
                <img v-else src="@/assets/img/3041.png" alt="" class="mnu_icon">
                <p v-if="!mainInfo.review" class="mnu_name" @click="reviewContentLock=true">立即评价</p>
                <p  v-else class="mnu_name active">已评价</p>
              </div>
              <div class="mun" @click="shenSuLockFn(mainInfo.appeal)">
                <img src="@/assets/img/2423@2x.png"  alt="" class="mnu_icon">
                <p class="mnu_name" v-if="!mainInfo.appeal" >申诉助手</p>
                <p class="mnu_name active" v-else>已申诉</p>
              </div>
            </div>

            <div class="btn_box">
              <van-button
                full-width
                size="large"
                class="btn"
                type="primary"
                :to='`/doctorHome/${mainInfo.userId}`'
              >继续咨询</van-button>

              <van-button
                full-width
                size="large"
                class="btn"
                type="info"
              >返回首页</van-button>
            </div>
          </div>
        </div>

      </div>
      <!-- 已取消的情况下 -->
      <div class="footer_pay animated fadeInUp" v-if="mainInfo.status == 7">
        <van-row type="flex" justify="center" align="center">

          <van-col span="12">
            
            <div class="price"  @click="goSeeOtherDoctor">
              咨询其他医生
            </div>
          </van-col>

          <van-col span="12">
            <van-button
              full-width
              :to='`/doctorHome/${mainInfo.userId}`'
              size="large"
              class="go_to_play"
              :color="BASE_COLOR_PRIMARY"
            >再次咨询</van-button>
          </van-col>

        </van-row>
      </div>

      <!-- 回复框   待接诊  接诊中才有 -->
      <div class="huifu_box animated fadeInUp" v-if="mainInfo.status == 9 || mainInfo.status == 10">
        <div class="text">
        <van-field
            v-model="sendText.content"
            rows="1"
            rows-max="3"
            autosize
            type="textarea"
            placeholder="请仔细描述您的问题"
            class="wen_txt"
            @focus='keyDownFocus'
            @input='valueCheck'
            ref="contHufu"
          />
        </div>
        <div class="send_box see_lock" v-if="!sendText.content" >
          <p class="go_more_details" @click='moreMenuLock=!moreMenuLock'> + </p>
        </div>
        <div class="send_box " v-else>
          <van-button  type="primary" @click="sendTextFn">发送</van-button>
        </div>
      </div>

      <!-- 评价框model -->
      <van-popup position="bottom" :style="{ minHeight: '30%' }" v-model="reviewContentLock" class='pinglun_box_see'>
            <!-- 评价 只有在完成咨询状态下才能评价 -->
            <div class="pingjia_container" >
              <div class="xingx">
                <van-rate ref="rateList" :icon='require("@/assets/img/2458@2x.png")' :void-icon="require('@/assets/img/4092.png')" @change="rateOnChange" v-model="evaluate.reviewNum"  :allow-half='allowHalf' size='.55rem'  />
              </div>
              <div class="bbang_txt" >{{evaluate.reviewNum | startTxt}}</div>
              <div class="biaoqian">
                  <van-tag plain type="info"  @click="evaluateTag(key)" :class="[evaluate.reviewMarkIds.indexOf(key) != -1 ? 'check_box': '']" class="bian_son" v-for="( item, key) of reviewMarkList" :key='item'>{{item}}</van-tag>
              </div>
              <div class="pn_cne">
                <van-field
                    v-model="evaluate.reviewContent"
                    type="textarea"
                    rows="5"
                    autosize
                    placeholder="患者对本次服务感觉非常满意"
                  />
              </div>
              <div class="save_pingji">
                <van-button
                  class="btn"
                  type="primary"
                  style="width:3rem;"
                  @click='consultReview'
                >提交评价</van-button>
              </div>
            </div>
      </van-popup>

      <!-- 申诉model -->
      <van-popup position="bottom" round  :style="{ minHeight: '30%' }" v-model="shenSuLock" class='pinglun_box_see'>
            <!-- 评价 只有在完成咨询状态下才能评价 -->
            <div class="pingjia_container" style='margin: 0' >
              <div class="title_box_abc">申诉原因:</div>
              <div class="pn_cne">
                <van-field
                    v-model="evaluate.reviewContent"
                    type="textarea"
                    rows="5"
                    autosize
                    placeholder="患者对本次服务感觉非常满意"
                  />
              </div>
              <van-row type="flex" justify="center" align="center" style='padding: 0 .26rem;'>
                <van-col span="12">
                  <div class="price pinglunt_txt" @click="shenSuLock=false">
                    取消
                  </div>
                </van-col>

                <van-col span="12">
                  <van-button
                    full-width
                    size="large"
                    class="go_to_play pinglunt_txt"
                    :color="BASE_COLOR_PRIMARY"
                  >提交</van-button>
                </van-col>

              </van-row>
            </div>
      </van-popup>


      <!-- 选择上传图片 -->
      <van-action-sheet :round='false' v-model="moreMenuLock" class='pinglun_box_see' >
        <div class="see_mnu_box">
          <div class="mun" @click="openVideo">
            <p class="mnu_icon"><img src="@/assets/img/4161@2x.png" alt=""  class="icon" ></p>
            <!-- <img src="@/assets/img/2516@2x.png" alt="" class="mnu_icon"> -->
            <p class="mnu_name">视频</p>
          </div>

          <div class="mun">
            <p class="mnu_icon">
              <van-uploader :after-read="afterRead" :capture='"camera"'>
                <img src="@/assets/img/2513@2x.png" alt="" class="icon" >
              </van-uploader>
            </p>
            <p class="mnu_name">相册</p>
          </div>

          <div class="mun">
            <p class="mnu_icon"><img src="@/assets/img/2516@2x.png" alt=""  class="icon" ></p>
            <!-- <img src="@/assets/img/2516@2x.png" alt="" class="mnu_icon"> -->
            <p class="mnu_name">拍摄</p>
          </div>

          <div class="mun">
            <p class="mnu_icon"><img src="@/assets/img/2517@2x.png" alt="" class="icon" ></p>
            <!-- <img src="@/assets/img/2517@2x.png" alt="" class="mnu_icon"> -->
            <p class="mnu_name">问诊历史</p>
          </div>

        </div>
        <div class="close_btn">
          取消
        </div>
      </van-action-sheet>
  </div>
</template>

<script>
import { consultChatDetailApi, newAddConsultApi, consultReviewApi, consultReviewMarkApi ,doctorAttentionDoctorApi} from "@/api/consultation";
import { baseToImgApi } from "@/api/upload";
import { iosOrAndFun } from "@/utils/filter";
export default {
  components: {},
  data() {
    return {
      // 选中的标签
      selCheck: [],
      refreshing: false,
      loading: false,
      mp3Box: '',
      // 播放索引
      audioIndex: '',
      // 定时任务
      timeInterl: '',
      sendText: {
        content: '',
        filePath: '',
        consultId: this.$route.params.consultId
      },
      picOrText: true,
      queryLock: false,
      // 更多菜单功能
      moreMenuLock: false,
      // 评价发送的东西
      evaluate: {
        reviewNum: 5,
        reviewMarkIds: [],
        reviewContent: '',
        startTxt: '',
        consultId: this.$route.params.consultId
      },
      consultId: this.$route.params.consultId,
      // 头部信息
      mainInfo: {},
      // 聊天回复内容
      list: [],
      // 脚手架
      skeletonLoading: true,
      contentBoxStyle: '1.88',
      // 评论标签
      reviewMarkList: [],
      // 评价弹框
      reviewContentLock: false,
      // 是否收藏、
      attention: false,
      // 申诉锁
      shenSuLock: false,
      // 是否开启半星
      allowHalf: false,
    };
  },
  // watch:{
  //   'sendText.content'(val) {
  //       if (!val) {
  //         this.picOrText = true
  //       }else {
  //         this.picOrText = false
  //       }
  //   }
  // },
  created() {
    this.dataListGet();
    this.consultReviewMark();
    this.timer = setInterval(()=> {
      this.dataListGet(true)
    }, 3000);
    
  },
  destroyed() {
    clearInterval(this.timeInterl);
    clearInterval(this.timer);
    // try {this.mp3Box.pause();} catch (error) {console.log('没有需要暂停的语音');}
  },
  methods: {
    // 打开视频
    openVideo() {
      try {
        iosOrAndFun({ funName: "openVideo" });
      } catch (error) {
        alert("暂不支持")
      }
    },
    goSeeOtherDoctor() {
      try {
        iosOrAndFun({ funName: "DoctorListApi" });
      } catch (error) {
        alert("暂不支持")
      }
    },
    shenSuLockFn(item) {
      if (item) {return false}
      this.shenSuLock=true
    },
    collectionFn() {
      doctorAttentionDoctorApi({
        userId: this.mainInfo.userId,
        attention: !this.attention
      }).then(({data})=> {
        console.log(data)
        this.mainInfo.collection = 1;
      }).catch((err)=> {
        console.log(err)
      
      })
    },
    // 获取评论标签
    async consultReviewMark() {
      let {data} = await consultReviewMarkApi({loadingLock: true});
      this.reviewMarkList = data;
    },
    consultReview() {
      if (!this.evaluate.reviewContent && this.evaluate.reviewMarkIds.length == 0 ) {
        this.$toast('请填写评价')
        return false
      } else if (this.evaluate.review <= 3) {
        this.$toast('请填写评价')
        return false
      }
      consultReviewApi(this.evaluate).then(() =>{
        this.reviewContentLock = false;
        this.dataListGet()
      })
    },
    valueCheck() {
      var valueOffsetTop = this.$refs.contHufu.$el.offsetHeight;
      var height = ((((valueOffsetTop + 7) * 2) + 90 ) / 100); 
      if (this.mainInfo.status == 8) { height = 0.9 }
      console.log(height);
      if (height != this.contentBoxStyle) { 
        this.contentBoxStyle = height;
      }
    },
    // 评价选中按钮
    evaluateTag(item) {
      if (this.evaluate.reviewMarkIds.includes(item)) {
        this.evaluate.reviewMarkIds.splice(this.evaluate.reviewMarkIds.indexOf(item), 1)
      } else {
        this.evaluate.reviewMarkIds.push(item);
      }
      
    },
   
    // 评价星星
    rateOnChange(value) {
      
      const banStart = require('@/assets/img/banxing2@2x.png');

      this.$nextTick(()=> {
        $('.van-rate__icon--half').each((index, item)=> {
          $(item).hide()
          if (Number($(item).attr('data-score')) <= value) {
            $(item).show();
            $(item).find('img.van-icon__image').attr('src', banStart);
          }
        })
      })

    },
    goHealthRecords() {
      this.$router.push('/HealthRecords');
    },
    seeMore(images, startPosition = 0) {
      this.$ImagePreview({images, startPosition});
    },
    goAgin() {
      this.$router.push({
        path:'/DoctorCs',
        query: {
          consultId: this.$route.query.consultId,
          userId : this.$route.query.userId,
          type: this.$route.query.type
        }
      })
    },
    sendTextFn() {
      newAddConsultApi(this.sendText).then(()=>{

          this.sendText.filePath = ''
          this.sendText.content = ''
          this.dataListGet(true)
          // this.$toast('发送成功')
      })
    },
    keyDownFocus() {

    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
        this.moreMenuLock = false;
       baseToImgApi({
          "base64Str": file.content.substr(file.content.indexOf(",") + 1)
        }).then(({ data }) => {
          // console.log(data.filePath);
          this.sendText.filePath = data.filePath
          this.sendText.content = ''
          // alert(data.filePath)
          this.$nextTick(()=>{
            this.sendTextFn()
          })
        })
    },
    audioPay(src,  time , index) {

      var _this = this;
      try {_this.mp3Box.pause();} catch (error) {console.log('没有需要暂停的语音');}
      
      this.list[index].slider = 0;
      clearInterval(this.timeInterl)

      this.mp3Box = new Audio(src);

      // this.mp3Box.currentTime  = 3
      _this.mp3Box.play();

      this.mp3Box.oncanplay = ()=> {
        // console.log(s);
        // alert('加载完成');
        _this.timeInterl = setInterval(() => {
          _this.list[index].slider += .1;
          // console.log(this.list[index].slider);
          if (_this.list[index].slider >= time) {
            clearInterval(_this.timeInterl);
          }
        }, 100);
      };
      
    },
    // 判断是否为图片
    check_is_img(url = '') {
      return (url.match(/\.(jpeg|jpg|gif|png)$/) != null)
    },
    /**
     * 获取咨询医生信息
     * consultId 查某一条咨询内容详情
     * userId 有值 ：查与某医生咨询的历史内容
     *        无值 ：查快速提问的历史
     * @param {Number}
     */
    dataListGet(loadingLock = false) {
      consultChatDetailApi({
        consultId: this.sendText.consultId,
        loadingLock
      }).then(({ data }) => {

          // var {data} = {"code":200,"message":"操作成功！","data":{"mainInfo":{"consultId":56,"userId":702,"userName":"爱乐孕工作人员","status":9,"content":"考虑兔兔图兔兔图图天退不了你就\n\n医院检查：不要客气的说我\n\n医院检查：是你自己的事就是说你不\n\n医院检查：知道你的老婆我怎么\n\n医院检查：知道我怎么了","createDate":"2020-07-31 15:10","fileList":["https://ileyun.ivfcn.com/file/20200516/49D09E295FA44B51AC6F18799CE85C01.png","https://ileyun.ivfcn.com/file/20200516/49D09E295FA44B51AC6F18799CE85C01.png"],"unit":10,"startDate":null,"endDate":null,"review":0,"collection":null,"reviewNum":5,"reviewContent":"如同热太热retreat让突然图","reviewMarkIds":[451]},"chatList":[{"replyId":null,"userType":"user","headPath":"https://ileyun.ivfcn.com/file/20200516/49D09E295FA44B51AC6F18799CE85C01.png","contentType":1,"content":"您好，感谢您的信任和咨询！为更好的分析病情，请您详细描述您的症状及持续时间、治疗情况、用药情况等，如有相关检查报告请将照片发送给我。如正逢我正在坐诊或手术，可能会稍迟一些回复，有时间后我将第一时间根据情况给出相应就诊建议、用药建议及注意事项等，如病情特别紧急或严重，请及时前往就医。","createDate":null,"timeLen":null},{"replyId":1,"userType":"user","headPath":"https://ileyun.ivfcn.com/file/20200516/49D09E295FA44B51AC6F18799CE85C01.png","contentType":1,"content":"您好，您这个病， 要去医院治一治，一两句话说不清楚","createDate":"2020-08-04 14:31:51","timeLen":null},{"replyId":2,"userType":"member","headPath":"https://ileyun.ivfcn.com/file/20200411/DAA3C71ED7964F5BA5DBF67EAFEF8DE1.jpg","contentType":1,"content":"好的，谢谢，马上去医院","createDate":"2020-08-04 14:32:58","timeLen":null},{"replyId":3,"userType":"member","headPath":"https://ileyun.ivfcn.com/file/20200411/DAA3C71ED7964F5BA5DBF67EAFEF8DE1.jpg","contentType":2,"content":"https://ileyun.ivfcn.com/file/20200516/49D09E295FA44B51AC6F18799CE85C01.png","createDate":"2020-08-04 14:36:49","timeLen":0},{"replyId":4,"userType":"user","headPath":"https://ileyun.ivfcn.com/file/20200516/49D09E295FA44B51AC6F18799CE85C01.png","contentType":3,"content":"https://ileyun.ivfcn.com/file/20200803/54AA93824A4E44139D84E5CEF63CB46C.mp3","createDate":"2020-08-04 14:37:41","timeLen":24},{"replyId":5,"userType":"member","headPath":"https://ileyun.ivfcn.com/file/20200411/DAA3C71ED7964F5BA5DBF67EAFEF8DE1.jpg","contentType":1,"content":"6767666","createDate":"2020-08-05 14:48:14","timeLen":null},{"replyId":6,"userType":"member","headPath":"https://ileyun.ivfcn.com/file/20200411/DAA3C71ED7964F5BA5DBF67EAFEF8DE1.jpg","contentType":1,"content":"6776766767676767","createDate":"2020-08-05 14:48:58","timeLen":null},{"replyId":7,"userType":"member","headPath":"https://ileyun.ivfcn.com/file/20200411/DAA3C71ED7964F5BA5DBF67EAFEF8DE1.jpg","contentType":1,"content":"阿斯顿萨达","createDate":"2020-08-05 14:49:23","timeLen":null},{"replyId":8,"userType":"member","headPath":"https://ileyun.ivfcn.com/file/20200411/DAA3C71ED7964F5BA5DBF67EAFEF8DE1.jpg","contentType":1,"content":"sad","createDate":"2020-08-05 14:50:28","timeLen":null},{"replyId":9,"userType":"member","headPath":"https://ileyun.ivfcn.com/file/20200411/DAA3C71ED7964F5BA5DBF67EAFEF8DE1.jpg","contentType":1,"content":"提供给","createDate":"2020-08-05 14:50:35","timeLen":null},{"replyId":10,"userType":"member","headPath":"https://ileyun.ivfcn.com/file/20200411/DAA3C71ED7964F5BA5DBF67EAFEF8DE1.jpg","contentType":2,"content":"https://ileyun.ivfcn.com/file/20200805/58E815B1DB4D41A49C44DD3BB89433FB.jpg","createDate":"2020-08-05 14:50:46","timeLen":0},{"replyId":11,"userType":"member","headPath":"https://ileyun.ivfcn.com/file/20200411/DAA3C71ED7964F5BA5DBF67EAFEF8DE1.jpg","contentType":1,"content":"水岸东方水岸东方","createDate":"2020-08-05 15:03:00","timeLen":null},{"replyId":12,"userType":"member","headPath":"https://ileyun.ivfcn.com/file/20200411/DAA3C71ED7964F5BA5DBF67EAFEF8DE1.jpg","contentType":1,"content":"少的发","createDate":"2020-08-05 15:03:09","timeLen":null},{"replyId":13,"userType":"user","headPath":"https://ileyun.ivfcn.com/file/20200516/49D09E295FA44B51AC6F18799CE85C01.png","contentType":1,"content":"xxxxx","createDate":"2020-08-05 15:16:34","timeLen":null},{"replyId":14,"userType":"user","headPath":"https://ileyun.ivfcn.com/file/20200516/49D09E295FA44B51AC6F18799CE85C01.png","contentType":1,"content":"xxxxxxxxxxxxxxx","createDate":"2020-08-05 15:17:59","timeLen":null},{"replyId":15,"userType":"user","headPath":"https://ileyun.ivfcn.com/file/20200516/49D09E295FA44B51AC6F18799CE85C01.png","contentType":1,"content":"aaaaa","createDate":"2020-08-05 15:22:55","timeLen":null},{"replyId":16,"userType":"user","headPath":"https://ileyun.ivfcn.com/file/20200516/49D09E295FA44B51AC6F18799CE85C01.png","contentType":1,"content":"爸爸是爷爷","createDate":"2020-08-05 15:30:24","timeLen":null},{"replyId":17,"userType":"member","headPath":"https://ileyun.ivfcn.com/file/20200411/DAA3C71ED7964F5BA5DBF67EAFEF8DE1.jpg","contentType":1,"content":"地方稍等","createDate":"2020-08-05 15:29:35","timeLen":null},{"replyId":18,"userType":"member","headPath":"https://ileyun.ivfcn.com/file/20200411/DAA3C71ED7964F5BA5DBF67EAFEF8DE1.jpg","contentType":1,"content":"sad撒f","createDate":"2020-08-05 15:32:52","timeLen":null},{"replyId":19,"userType":"member","headPath":"https://ileyun.ivfcn.com/file/20200411/DAA3C71ED7964F5BA5DBF67EAFEF8DE1.jpg","contentType":1,"content":"343班435345 ","createDate":"2020-08-05 15:33:18","timeLen":null},{"replyId":20,"userType":"member","headPath":"https://ileyun.ivfcn.com/file/20200411/DAA3C71ED7964F5BA5DBF67EAFEF8DE1.jpg","contentType":1,"content":"请问","createDate":"2020-08-05 15:33:50","timeLen":null},{"replyId":21,"userType":"member","headPath":"https://ileyun.ivfcn.com/file/20200411/DAA3C71ED7964F5BA5DBF67EAFEF8DE1.jpg","contentType":1,"content":"水岸东方撒f","createDate":"2020-08-05 15:33:59","timeLen":null},{"replyId":22,"userType":"member","headPath":"https://ileyun.ivfcn.com/file/20200411/DAA3C71ED7964F5BA5DBF67EAFEF8DE1.jpg","contentType":1,"content":"少的发稍等f","createDate":"2020-08-05 15:34:03","timeLen":null},{"replyId":23,"userType":"member","headPath":"https://ileyun.ivfcn.com/file/20200411/DAA3C71ED7964F5BA5DBF67EAFEF8DE1.jpg","contentType":1,"content":"dfd ","createDate":"2020-08-05 15:37:05","timeLen":null},{"replyId":24,"userType":"member","headPath":"https://ileyun.ivfcn.com/file/20200411/DAA3C71ED7964F5BA5DBF67EAFEF8DE1.jpg","contentType":1,"content":"法师答复士大夫士大夫","createDate":"2020-08-05 16:23:19","timeLen":null}]}}
          // var isScroll = false;
          console.log(data);
          this.skeletonLoading = false;
          let {mainInfo, chatList} = data;
          // console.log(this.evaluate.reviewMarkIds);
          // 坑爹的定时，没做WebSocket,
          // 当长度小于返回数据或者锁定加载滚动
          if (this.list.length < chatList.length || !loadingLock) {
            setTimeout(()=>{$('#chat_consultation_content').animate({scrollTop: '99999px'}, 1500)},100);
          } else if (mainInfo.status != 9 && mainInfo.status != 10) {
            // 当订单不处于 待接诊， 接诊中的时候则不再启动定时任务
            clearInterval(this.timeInterl);
            clearInterval(this.timer);
            // 当返回数据一样时，则不需要赋值渲染
          } else {return false}

          chatList.forEach(item => {item.slider = 0});
          this.mainInfo = mainInfo;
          this.list = chatList;

          // document.title = mainInfo.userName || '咨询详情';
      }).catch(()=> {
        this.skeletonLoading = false;
      })
    },
  },
  filters: {
    // 私有类型
    orderTypes(value) {
      switch (value) {
        case 0:
          return '待支付';
        case 7:
          return '已取消';
        case 8:
          return '咨询已完成';
        case 9:
          return '接诊中';
        case 10:
          return '待接诊';
        default:
          return '';
      }
    }, 
    // 0-1星：体验很糟糕
    // 1.5-2星：体验一般
    // 2.5-3星：比较热情
    // 3.5-4星：比较专业负责
    // 4.5-5星：非常棒！医生专业负责
    startTxt(value) {
      if (value <= 1) {
        return '体验很糟糕'
      } else if (value <= 2) {
        return '体验一般'
      } else if (value <= 3) {
        return '比较热情'
      } else if (value <= 4) {
        return '比较专业负责'
      } else if (value <= 5) {
        return '非常棒！医生专业负责'
      }
    }
  }
};
</script>
