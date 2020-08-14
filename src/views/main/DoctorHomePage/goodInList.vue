<template>
  <div>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="- 没有更多了 -"
        @load="onLoad"
      >
      
      <div class="zdy_shanchang_box doctor_home">
        <van-button
          type="info"
          :class="['zdy_shanchang', activeTags == index ? 'sel': '']"
          v-for="(item, index) in consultSkilledMarkList"
          :key="index"
          @click="selTags(item, index)"
        >{{item.name + "(" + item.count + ")"}}</van-button>
      </div>

      <div class="tipx_sat">
        精选以下公开问题可查看
      </div>

      <!-- 用户问题 -->
      <div class="yhzx_wt" v-for="(item, index) in list" :key="index" @click='goDetails(item)'>
        <!-- <p class="title">匿名用户 6889/女 31岁</p> -->
        <p class="title">{{item.name + ' / ' + (item.sex ? '男 ' : '女 ') + item.age + '岁'}}</p>
        <p class="content ellipsize3">{{item.content}}</p>
        <p class="t">
          <span>{{(item.createDate) | formatDate('MM月dd日 hh:mm')}} {{item.readNum ? item.readNum : 0}}人看过</span>
        </p>
        <van-divider :style="{padding: '0'}" />
      </div>

    </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import {consultSkilledMarkApi, CMConsultListApi} from '@/api/doctorHomePage'
export default {
  data() {
    return {
      activeTags: 0,
      consultSkilledMarkList: [],
      list: [],
      sendJect: {
        userId: this.$route.query.userId,
        markId: 0,
        pageSize: 10,
        pageNum: 0
      },
      loading: false,
      finished: false,
      refreshing: false,
    }
  },
  async created() {
    let {data} = await consultSkilledMarkApi(this.sendJect.userId)
    this.consultSkilledMarkList = data;
    this.dataInit()
  },
  methods: {
    selTags({id}, index) {
      if (this.activeTags == index) return false;
      this.activeTags = index;
      this.sendJect.markId = id;
      this.list = [];
      this.sendJect.pageNum = 1
      // this.finished = false;
      this.dataInit()
    },
    goDetails({consultId}) {
      this.$router.push(`/openChatConsul/${consultId}`)
    },
    async dataInit() {
    
      let {data} = await CMConsultListApi(this.sendJect);
      if (this.refreshing) {
        this.list = [];
        this.refreshing = false;
      }

      this.list = this.list.concat(data.records);
      this.total = data.total;

      this.loading = false;
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;
      this.sendJect.pageNum = 1
      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      
      this.dataInit();
    },

    onLoad() {
      //  console.log(this.list.length, this.total);
       if (this.list.length >= this.total) {
          this.loading = false;
          this.finished = true;
          return false
        }else {
            this.sendJect.pageNum ++ 
            this.dataInit()
        }
    },
  },
};
</script>

<style lang="less" scoped>
.scfx.doctor_home {
  padding-top: 0.54rem;
}
.doctor_home {
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  background: #fff;
}
.zdy_shanchang_box {
  padding-top: .3rem;
  text-align: left;
  .zdy_shanchang {
    margin-right: 0.24rem;
    height: 0.68rem;
    margin-bottom: 0.2rem;
    font-size: 0.28rem;
    padding: 0 0.2rem;
  }
  .sel.zdy_shanchang {
    background:rgba(255,237,241,1);
    color: @primary;
  }
}
.yhzx_wt {
  padding: 0rem 0.3rem 0;
  overflow: hidden;
  text-align: left;
  background: #fff;
  .title {
    height: 0.48rem;
    font-size: 0.34rem;
    font-family: PingFang SC;
    font-weight: bold;
    line-height: 0.48rem;
    color: rgba(51, 51, 51, 1);
    opacity: 1;
  }
  .content {
    font-size: 0.32rem;
    font-family: PingFang SC;
    font-weight: 400;
    line-height: 0.4rem;
    color: rgba(102, 102, 102, 1);
    opacity: 1;
    padding: 0.15rem 0 0;
  }
  .t {
    font-size: 0.24rem;
    font-family: PingFang SC;
    font-weight: 400;
    line-height: 0.43rem;
    color: rgba(153, 153, 153, 1);
    opacity: 1;
  }
}
.see_more {
  text-align: center;
}
.tipx_sat {
  font-size: .34rem;
  font-family:PingFang SC;
  font-weight:bold;
  line-height: .43rem;
  color:rgba(51,51,51,1);
  opacity:1;
  padding: .7rem .3rem .7rem;
  text-align: left;
  background: #fff;
}
</style>
