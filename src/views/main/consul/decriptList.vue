<template>
  <div class="box_list">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="- 没有更多了 -"
        @load="onLoad"
      >
        <div v-for="(item, index) in list" :key="index">
          <div class="list_box" >
            <div class="content">{{item.content}}</div>
            <div class="tips">
              <p>{{item.memberName}} {{item.sex ? '男' : '女'}} {{item.conusltTypeName}} {{item.age}}岁 {{item.createDate}}</p>
              <p class='daoru'>
                <van-icon  :name="require('@/assets/img/2889@2x.png')"/>
                <span class="upload_txt" @click="addBinLiDetails(item)"> 导入病情</span>
              </p>
            </div>
          </div>
          <van-divider :style="{padding: '.3rem 0 0',margin:'0 .3rem'}"/>
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import {historyIllApi} from '@/api/consul'
 export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
      sendJect:{
        pageNum: 0,
        pageSize: 10,
        loadingLock: true,
      }
    };
  },
  created() {
    
  },
  methods: {
    addBinLiDetails({ consultId}) {
      this.$router.push({
        path: '/descriptionDis',
        query: {
          userId: this.$route.query.userId,
          consultId,
          type: this.$route.query.type,
        }
      })
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
    dataInit() {
      historyIllApi(this.sendJect).then(({data})=> {

        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }

        this.list = this.list.concat(data.records);
        this.total = data.total;

        this.loading = false;

      });
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
.box_list {
  background: #fff;
  .list_box {
      padding: 0 .3rem;
      .tips {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: .24rem;
        font-family:PingFang SC;
        font-weight:400;
        line-height: .3rem;
        color:rgba(153,153,153,1);
        letter-spacing: .01rem;
        opacity:1;
        .daoru {
          color: @primary;
        }
      }
      .content {
        text-align: left;
        padding: .35rem 0 .4rem;
        font-size:.34rem;
        font-family:PingFang SC;
        font-weight:400;
        line-height: .6rem;
        color:rgba(51,51,51,1);
        opacity:1;
        word-wrap: break-word; 
      }
  }
}
</style>
