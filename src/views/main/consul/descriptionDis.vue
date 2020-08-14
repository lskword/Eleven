<style lang="less" scoped>
.bqms {
  text-align: left;
  background: #fff;
  overflow:auto;
  .text_box {
    /deep/ textarea {
       color: #333;
    }
   
  }
  .title_text {
    font-size: 0.33rem;
    font-family: PingFang SC;
    font-weight: bold;
    color: #333333;
    line-height: 0.45rem;
    padding: 0 0.3rem 0;
    text-align: left;
    background: #fff;
    span, i {
      vertical-align: middle;
    }
  }
  .upload_b {
    display: block;
    padding: 0px 0 0 .3rem;
    background: #fff;
    /deep/ .van-uploader__preview-image {
      width:1.6rem;
      height:1.6rem;
    }
    .txt {
      width: 100%;
      height: 100%;
    }
    span, i {
      vertical-align: super;
    }
    .upload_txt {
      font-size: 16px;
    }
  }
  .user_bl {
    span, i {
      vertical-align: middle;
      font-size: .24rem;
      font-family:PingFang SC;
      font-weight:400;
      line-height: .4rem;
      color:rgba(75,75,75,1);
      letter-spacing:.01rem;
      opacity:1;
    }
  }
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
        min-width: 1.4rem;
        margin-left: 0.2rem;
        font-size: .3rem;
      }
    }
  }
  .yszd_jb {
    .van-cell__title {
      flex: auto;
    }
  }
  .tips{
    text-align: center;
    // margin: 0 .3rem;
    // padding: .1rem 0;
    background: #f3f3f3;
    color: #A6A5A6;
    font-size: .24rem;
    border-radius: 3px;
    color: #999999;
    background:rgba(250,250,250,1);
  }
  .tips_detail.show {
    transition-duration: .2s;
  }
  .tips_detail {
    transition: all 0.3s, -webkit-transform 0.3s;
    transition-property: transform, -webkit-transform;
    transition-duration: 0.3s, 0.3s;
    transition-timing-function: ease, ease;
    transition-delay: 0s, 0s;
    background: #FFFBFC;
    border:1px solid #FFE9ED;
    color: #000;
    border-radius: 6px;
    margin: .3rem .3rem 0;
    padding: 0.2rem .3rem .2rem;
    text-align: left;
    position: relative;
    font-size: 0.26rem;
    line-height: .4rem;
    &::before{
      content: '';
      width: 0;
      height: 0;
      border-left: .2rem solid transparent;
      border-right: .2rem solid transparent;
      border-top: .2rem solid transparent;
      border-bottom: .2rem solid #FFE9ED;
      left: 1.3599rem;
      top: -.4rem;
      position:absolute;
    }
    &::after {
      content: '';
      width: 0;
      height: 0;
      border-left: .2rem solid transparent;
      border-right: .2rem solid transparent;
      border-top: .2rem solid transparent;
      border-bottom: .2rem solid #FFFBFC;
      left: 1.3599rem;
      top: -.362rem;
      position:absolute;
    }
  }
  .userInfo_box {
    display:flex;
    justify-content:space-between;
    align-items:center;
    background: #fff;
    font-size: .3rem;
    padding: .3rem;
    overflow: hidden;
    .user_info {
      display:flex;
      justify-content: space-between;
      align-items: center;
      b {
        font-size: .32rem;
        font-family:PingFang SC;
        font-weight:bold;
        line-height: .4rem;
        color:rgba(51,51,51,1);
        letter-spacing: .01rem;
        opacity:1;
      }
      img {
        height: 1rem;
        width: 1rem;
        display:inline-block;
        vertical-align: middle;
        border-radius:100%;
        margin-right: .2rem;
      }
    }
  }
  .zdy_shanchang {
    padding: .1rem .3rem .4rem;
    display: flex;
    justify-content: space-between;
  }
}
.upload_b /deep/ .van-uploader__input-wrapper  {
  width: 1.6rem;
  height: 1.6rem;
}
.upload_b /deep/ .uploader_box {
  text-align:center;
  font-size: .2rem;
  width: 1.6rem;
  height: 1.6rem;
  background:rgba(250,250,250,1);
  opacity:1;
  border-radius:6px;
  color:rgba(153,153,153,1);
  font-family:PingFang SC;
  font-weight:400;
  line-height:.3rem;
  .uploader_icon {
    margin-top: .36rem;
    width: .63rem;
    height: .53rem;
    display: inline-block;
    margin-bottom: .1rem;
  }
}
</style>


<template>
  <div class='bqms'>
    <div class="userInfo_box">
        <div class="user_info">
          <img v-if="doctorInfo.headPath" v-lazy="doctorInfo.headPath" alt="" class="doct_img">
          <img v-else src="@/assets/img/doctor_defalut@2x.png" alt="" class="doct_img">
          <div class="">
            <p style="margin-bottom: .15rem;">
              <b>{{doctorInfo.name}} </b>
              <span> {{doctorInfo.departmentName}}</span>
            </p>
            <div class="tips">请详细描述您的情况，需要我提供什么帮助？</div>
          </div>
        </div>
    </div>
    <!-- <van-cell title="通话时间" size="large" value="请选择" @click.prevent='dataTimeLock=true' is-link/> -->
    <div class="userInfo_box">
      <div class="user_info">
        <b> 健康档案</b>
      </div>
      <div class="user_bl">
        <span>不想重复填写? </span> 
        <van-icon :name="require('@/assets/img/2301@2x.png')"/>
        <span class="upload_txt" @click="goDecriptList"> 导入病情</span>
      </div>
    </div>
    
    <van-button to="/HealthRecords" style='min-width: 1.88rem;margin:0 .3rem 0;' plain  type="primary">
      <img style="width:.26rem;height: .26rem" src="@/assets/img/2796@2x.png" alt="">
      <span style='font-size:.3rem;'> {{healthArchives.memberName || '健康档案'}}</span>
    </van-button>

    <van-divider :style="{padding: '.3rem 0 ',margin:'0 .3rem'}"/>

    <p class='title_text'>
      <span>病情描述 </span> <van-icon @click="tipsDetailsShow=!tipsDetailsShow" name="info-o" size="0.34rem"/>
    </p>

    <div class="tips_detail " v-show="tipsDetailsShow">
      请详细描述您的疾病发生部位，主要症状、持续时间、已就诊的信息和主治医生的建议，您也可以上传症状部位的照片或者检验单，完整的病历资料，方便医生更详细的指导病情！
    </div>

    <van-field  
      rows="6" 
      ref='content_one'  
      autosize 
      clearable 
      :border='false' 
      show-word-limit 
      v-model="sendJect.content" 
      type="textarea"
      class='text_box'
      @focus='focusLock=true'
      @blur='focusLock=false' 
      placeholder="请详细描述你的疾病发生的部位" />

    <div class="zdy_shanchang">
      <van-button
        type="info"
        size='small'
        v-for="(item, index) in quickList"
        :key="index"
        @click="addContent(item)">
        + {{item}}
      </van-button>
    </div>

    <van-uploader class="upload_b" 
      v-model="fileList" 
      max-count='9'
      :multiple='false' 
      :after-read="uploadImg">
      
      <div class="uploader_box">
        <img class="uploader_icon" src="@/assets/img/2792@2x.png" alt="">
        <p>拍照 / 传图</p>
      </div>

    </van-uploader>

    <van-popup
      v-model="dataTimeLock"
      position="bottom"
      :style="{ minHeight: '30%' }">
      <dateTime />
    </van-popup>

    <div class="btn_bottom_box"></div>
    <van-button type="primary" style='font-weight: 600;' :class="[focusLock && !isWeixin? '': 'v_fixed','v_bottom no-border-radius']" size="large" block @click="createOrder">下一步</van-button>

  </div>
</template>

<script>
import {illDescribeApi, consultAddApi} from '@/api/consul'
import {baseToImgApi} from '@/api/upload'
import dateTime from './cmpl/dateTime';
  export default {
    data () {
      return {
        // 悬浮按钮锁
        focusLock: false,
        quickList: [
          '症状描述',
          '患病时长',
          '医院检查',
          '用药情况'
        ],
        tipsDetailsShow:false,
        fileList: [],
        sendJect: {
          ...this.$route.query,
          ...this.preConusltDetail
        },
        // 咨询医生信息
        doctorInfo: {},
        // 回显数据
        preConusltDetail: {
          content: '',
          filePath: '',
        },
        // 健康档案
        healthArchives: {},
        dataTimeLock:false
      }
    },
    components:{
      dateTime
    },
    created(){
      this.dataInit();
    },
    methods:{
      async createOrder() {
        if (this.sendJect.content.length < 20) {
          this.$toast('病情描述不可少于20字')
          return false
        }

        this.sendJect.filePath = this.imgCheckStr(this.fileList)
        consultAddApi(this.sendJect).then(({data})=> {
          // 如果免费的话，会被拦截
          this.$router.push(`/payOrder/${data.orderSn}`)
        })

      },

      uploadImg(file){

        file.status = "uploading";
        file.message = "上传中..."
        baseToImgApi({
          loadingLock: true,
          "base64Str": file.content.substr(file.content.indexOf(",") + 1)
        }).then(({data})=> {
          file.status = 'done';
          file.message = "上传成功"
          file.url = data.filePath
          file.file = ''
        }).catch(()=> {
          file.status = 'failed';
          file.message = "上传失败"
        })

      },
      // 快捷标签添加
      addContent(item) {
        this.sendJect.content += ('\n\r' + item+ '：');
        this.$refs['content_one'].focus();
      },
      goDecriptList() {
        this.$router.push({
          path: '/decriptList',
          query: {
            userId: this.sendJect.userId,
            type: this.$route.query.type
          }
        });
      },
      async dataInit() {

        let {data} = await illDescribeApi(this.sendJect);

        this.doctorInfo = data.doctorInfo;
        this.healthArchives = data.healthArchives;
        // 如果conusltId为空，则不是回显
        this.sendJect = {...data.preConusltDetail, ...this.sendJect};
        this.fileList = this.imgCheckArr(data.preConusltDetail.fileList)

      },
      // 图片拆解
      imgCheckArr(list) {
        var arr = [];
        list && list.forEach(item => arr.push({url: item,status: 'success'}))
        return arr; 
      },
      // 图片合并
      imgCheckStr(list) {
        var str  = ''
        list.forEach((item)=> {
          str += (item.url + ',')
        })
        return str;
      }
    },
    
  }
</script>


