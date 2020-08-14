<style lang="less" scoped>
.consultation_wrap
  .content_box {
    height: calc(100vh - 1rem);
    overflow: auto;
    .merber_header {
      min-height: 2.56rem;
      background:rgba(255,255,255,1);
      opacity:1;
      text-align: left;
      margin-bottom: .2rem;
      .pija_her {
        display: flex;
        font-size: .32rem;
        font-family:PingFang SC;
        justify-content: space-between;
        align-items: center;
        font-weight:bold;
        line-height: .43rem;
        color:rgba(51,51,51,1);
        letter-spacing: .01rem;
        opacity:1;
        padding: 0.5rem 0.54rem 0.4rem;
        .name {
          font-size: .32rem;
          font-family:PingFang SC;
          font-weight:bold;
          line-height: .43rem;
          color:rgba(51,51,51,1);
          letter-spacing: .01rem;
          opacity:1;
        }
      }
    }
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
      }
      p.content,
      div.content {
        max-width:4.99rem;
        background:rgba(255,255,255,1);
        border:1px solid rgba(236,237,238,1);
        opacity:1;
        border-radius:.01rem .29rem .29rem .29rem;
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
        border-radius:.29rem .01rem .29rem .29rem;
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
      // max-height:4.73rem;
      background:rgba(255,255,255,1);
      opacity:1;
      border-radius: .06rem;
      margin: 0 .3rem;
      font-size: .28rem;
      .label_txt_size {
        font-size: .24rem;
        padding: 0.1rem .24rem .2rem;
        font-family:PingFang SC;
        font-weight:400;
        line-height: .43rem;
        color:rgba(153,153,153,1);
        letter-spacing: .01rem;
        opacity:1;
        text-align: left;
      }
      /deep/ .van-field__label {
         margin-right: 0;
      }
      /deep/ .van-field--disabled {
        padding: 0 .24rem 0;
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
      
    }
  }

.footer_pay {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  border-top: 1px solid #f9f9f9;
  background: #fff;
  max-height: 1rem;
  .price {
    font-style: normal;
    font-size: 16px;
    text-align: left;
    text-align: center;
    line-height: 1rem;
    height: 1rem;
    span {
      color: @primary;
    }
  }
  .go_to_play {
    border-radius: 0;
    height: 1rem;
  }
}

</style>

<template>

  <div class="loading_list" v-if="skeletonLoading">
    <van-skeleton title class="loading_list_skeleton" :row="6" v-for="(item, index) in 3" :key="index" />
  </div>
  <div v-else>
    
      <div class="consultation_wrap">

        <!-- 内容区 -->
        <div class="content_box" id="chat_consultation_content" >
           <div class="merber_header animated fadeInDown">
             <div class="pija_her">
               <p class="name">患者评价</p>
               <van-rate :value="mainInfo.reviewNum" allow-half size='.4rem'  void-color="#eee"  void-icon="star"  color="#F4EA2A"/>
             </div>

             <div class="first_content">

                <van-field 
                  label="满意度:" 
                  :border='false' 
                  type="textarea" 
                  rows="1"  
                  autosize  
                  disabled 
                  label-width='1.6rem' 
                  label-class="label_txt"	 
                  :value='mainInfo.reviewNum |startTxt' />

                <van-field 
                  label="评价内容：" 
                  :border='false' 
                  type="textarea" 
                  rows="1"  
                  autosize  
                  disabled 
                  label-width='1.6rem' 
                  label-class="label_txt"	 
                  :value='mainInfo.reviewContent' />

              </div>
             </div>           

          <div class="first_content animated fadeIn" style="padding-top: .3rem;">

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

            <div class="label_txt_size">为了保护用户隐私不显示图片</div>
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
              <!-- <p class="content" v-else-if="item.contentType == 2"><img @click='seeMore([item.content])' :src="item.content" alt=""></p> -->
              <!-- <img src="@/assets/img/merber@2x.png" alt="" class="doctor_icon"> -->
            </div>
          </template>
          <!-- 已完成状态 -->
          <template v-if="mainInfo.status == 8">
            <div class="date_time" >{{mainInfo.endDate}}</div>
            <div class="date_time" >医生的回复仅为建议，具体诊疗需前往医院出现</div>
            <!-- 咨询结束 -->
            <!-- <van-divider>问诊结束</van-divider> -->
          </template>

          
        </div>

      </div>

          <div class="footer_pay animated fadeInUp" >
            <van-row type="flex" justify="center" align="center">

              <van-col span="12">
                <div class="price">
                  {{mainInfo.consultTypeName || '图文咨询'}}：
                  <span>￥{{mainInfo.price || 0}}/次</span>
                </div>
              </van-col>

              <van-col span="12">
                <van-button
                  full-width
                  :to='`/consultationHome/${mainInfo.userId}`'
                  size="large"
                  class="go_to_play"
                  :color="BASE_COLOR_PRIMARY"
                >向TA问诊</van-button>
              </van-col>

            </van-row>
          </div>
  </div>
</template>

<script>
import { consultChatDetailApi} from "@/api/consultation";
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

  created() {
    this.dataListGet();
  },
  destroyed() {
    clearInterval(this.timeInterl);
  },
  methods: {
    seeMore(images, startPosition = 0) {
      this.$ImagePreview({images, startPosition});
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
      }).then(({ data }) => {

          // var {data} = {"code":200,"message":"操作成功！","data":{"mainInfo":{"consultId":56,"userId":702,"userName":"爱乐孕工作人员","status":8,"content":"考虑兔兔图兔兔图图天退不了你就\n\n医院检查：不要客气的说我\n\n医院检查：是你自己的事就是说你不\n\n医院检查：知道你的老婆我怎么\n\n医院检查：知道我怎么了","createDate":"2020-07-31 15:10","fileList":["https://ileyun.ivfcn.com/file/20200516/49D09E295FA44B51AC6F18799CE85C01.png","https://ileyun.ivfcn.com/file/20200516/49D09E295FA44B51AC6F18799CE85C01.png"],"unit":10,"startDate":null,"endDate":null,"review":0,"collection":null,"reviewNum":5,"reviewContent":"如同热太热retreat让突然图","reviewMarkIds":[451]},"chatList":[{"replyId":null,"userType":"user","headPath":"https://ileyun.ivfcn.com/file/20200516/49D09E295FA44B51AC6F18799CE85C01.png","contentType":1,"content":"您好，感谢您的信任和咨询！为更好的分析病情，请您详细描述您的症状及持续时间、治疗情况、用药情况等，如有相关检查报告请将照片发送给我。如正逢我正在坐诊或手术，可能会稍迟一些回复，有时间后我将第一时间根据情况给出相应就诊建议、用药建议及注意事项等，如病情特别紧急或严重，请及时前往就医。","createDate":null,"timeLen":null},{"replyId":1,"userType":"user","headPath":"https://ileyun.ivfcn.com/file/20200516/49D09E295FA44B51AC6F18799CE85C01.png","contentType":1,"content":"您好，您这个病， 要去医院治一治，一两句话说不清楚","createDate":"2020-08-04 14:31:51","timeLen":null},{"replyId":2,"userType":"member","headPath":"https://ileyun.ivfcn.com/file/20200411/DAA3C71ED7964F5BA5DBF67EAFEF8DE1.jpg","contentType":1,"content":"好的，谢谢，马上去医院","createDate":"2020-08-04 14:32:58","timeLen":null},{"replyId":3,"userType":"member","headPath":"https://ileyun.ivfcn.com/file/20200411/DAA3C71ED7964F5BA5DBF67EAFEF8DE1.jpg","contentType":2,"content":"https://ileyun.ivfcn.com/file/20200516/49D09E295FA44B51AC6F18799CE85C01.png","createDate":"2020-08-04 14:36:49","timeLen":0},{"replyId":4,"userType":"user","headPath":"https://ileyun.ivfcn.com/file/20200516/49D09E295FA44B51AC6F18799CE85C01.png","contentType":3,"content":"https://ileyun.ivfcn.com/file/20200803/54AA93824A4E44139D84E5CEF63CB46C.mp3","createDate":"2020-08-04 14:37:41","timeLen":24},{"replyId":5,"userType":"member","headPath":"https://ileyun.ivfcn.com/file/20200411/DAA3C71ED7964F5BA5DBF67EAFEF8DE1.jpg","contentType":1,"content":"6767666","createDate":"2020-08-05 14:48:14","timeLen":null},{"replyId":6,"userType":"member","headPath":"https://ileyun.ivfcn.com/file/20200411/DAA3C71ED7964F5BA5DBF67EAFEF8DE1.jpg","contentType":1,"content":"6776766767676767","createDate":"2020-08-05 14:48:58","timeLen":null},{"replyId":7,"userType":"member","headPath":"https://ileyun.ivfcn.com/file/20200411/DAA3C71ED7964F5BA5DBF67EAFEF8DE1.jpg","contentType":1,"content":"阿斯顿萨达","createDate":"2020-08-05 14:49:23","timeLen":null},{"replyId":8,"userType":"member","headPath":"https://ileyun.ivfcn.com/file/20200411/DAA3C71ED7964F5BA5DBF67EAFEF8DE1.jpg","contentType":1,"content":"sad","createDate":"2020-08-05 14:50:28","timeLen":null},{"replyId":9,"userType":"member","headPath":"https://ileyun.ivfcn.com/file/20200411/DAA3C71ED7964F5BA5DBF67EAFEF8DE1.jpg","contentType":1,"content":"提供给","createDate":"2020-08-05 14:50:35","timeLen":null},{"replyId":10,"userType":"member","headPath":"https://ileyun.ivfcn.com/file/20200411/DAA3C71ED7964F5BA5DBF67EAFEF8DE1.jpg","contentType":2,"content":"https://ileyun.ivfcn.com/file/20200805/58E815B1DB4D41A49C44DD3BB89433FB.jpg","createDate":"2020-08-05 14:50:46","timeLen":0},{"replyId":11,"userType":"member","headPath":"https://ileyun.ivfcn.com/file/20200411/DAA3C71ED7964F5BA5DBF67EAFEF8DE1.jpg","contentType":1,"content":"水岸东方水岸东方","createDate":"2020-08-05 15:03:00","timeLen":null},{"replyId":12,"userType":"member","headPath":"https://ileyun.ivfcn.com/file/20200411/DAA3C71ED7964F5BA5DBF67EAFEF8DE1.jpg","contentType":1,"content":"少的发","createDate":"2020-08-05 15:03:09","timeLen":null},{"replyId":13,"userType":"user","headPath":"https://ileyun.ivfcn.com/file/20200516/49D09E295FA44B51AC6F18799CE85C01.png","contentType":1,"content":"xxxxx","createDate":"2020-08-05 15:16:34","timeLen":null},{"replyId":14,"userType":"user","headPath":"https://ileyun.ivfcn.com/file/20200516/49D09E295FA44B51AC6F18799CE85C01.png","contentType":1,"content":"xxxxxxxxxxxxxxx","createDate":"2020-08-05 15:17:59","timeLen":null},{"replyId":15,"userType":"user","headPath":"https://ileyun.ivfcn.com/file/20200516/49D09E295FA44B51AC6F18799CE85C01.png","contentType":1,"content":"aaaaa","createDate":"2020-08-05 15:22:55","timeLen":null},{"replyId":16,"userType":"user","headPath":"https://ileyun.ivfcn.com/file/20200516/49D09E295FA44B51AC6F18799CE85C01.png","contentType":1,"content":"爸爸是爷爷","createDate":"2020-08-05 15:30:24","timeLen":null},{"replyId":17,"userType":"member","headPath":"https://ileyun.ivfcn.com/file/20200411/DAA3C71ED7964F5BA5DBF67EAFEF8DE1.jpg","contentType":1,"content":"地方稍等","createDate":"2020-08-05 15:29:35","timeLen":null},{"replyId":18,"userType":"member","headPath":"https://ileyun.ivfcn.com/file/20200411/DAA3C71ED7964F5BA5DBF67EAFEF8DE1.jpg","contentType":1,"content":"sad撒f","createDate":"2020-08-05 15:32:52","timeLen":null},{"replyId":19,"userType":"member","headPath":"https://ileyun.ivfcn.com/file/20200411/DAA3C71ED7964F5BA5DBF67EAFEF8DE1.jpg","contentType":1,"content":"343班435345 ","createDate":"2020-08-05 15:33:18","timeLen":null},{"replyId":20,"userType":"member","headPath":"https://ileyun.ivfcn.com/file/20200411/DAA3C71ED7964F5BA5DBF67EAFEF8DE1.jpg","contentType":1,"content":"请问","createDate":"2020-08-05 15:33:50","timeLen":null},{"replyId":21,"userType":"member","headPath":"https://ileyun.ivfcn.com/file/20200411/DAA3C71ED7964F5BA5DBF67EAFEF8DE1.jpg","contentType":1,"content":"水岸东方撒f","createDate":"2020-08-05 15:33:59","timeLen":null},{"replyId":22,"userType":"member","headPath":"https://ileyun.ivfcn.com/file/20200411/DAA3C71ED7964F5BA5DBF67EAFEF8DE1.jpg","contentType":1,"content":"少的发稍等f","createDate":"2020-08-05 15:34:03","timeLen":null},{"replyId":23,"userType":"member","headPath":"https://ileyun.ivfcn.com/file/20200411/DAA3C71ED7964F5BA5DBF67EAFEF8DE1.jpg","contentType":1,"content":"dfd ","createDate":"2020-08-05 15:37:05","timeLen":null},{"replyId":24,"userType":"member","headPath":"https://ileyun.ivfcn.com/file/20200411/DAA3C71ED7964F5BA5DBF67EAFEF8DE1.jpg","contentType":1,"content":"法师答复士大夫士大夫","createDate":"2020-08-05 16:23:19","timeLen":null}]}}
          // var isScroll = false;
          console.log(data);
          this.skeletonLoading = false;
          let {mainInfo, chatList} = data;
          // console.log(this.evaluate.reviewMarkIds);
          // 坑爹的定时，没做WebSocket,
          // 当长度小于返回数据或者锁定加载滚动

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
