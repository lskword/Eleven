<template>
  <div>
    <van-search @click="goSeach"  v-model="seach.searchName"  shape="round" background="#fff" placeholder="搜索" />

    <van-dropdown-menu :overlay="overlayLock" :active-color='BASE_COLOR_PRIMARY' > 

      <van-dropdown-item :title="quanguoText"  class="speails "  value='0' title-class="dropdown_color " ref="quanguoText"  @close='quanguoTextClose'  @opened='quanguoTextOpen' @open="quanguoTextOpen">
        <van-tree-select
          class="xialakuang"
          :items="areaCodeList"
          :active-id.sync="seach.unitId"
          :main-active-index.sync="activeIndex"
          @click-nav='clickNav'
          @click-item='clickItem'
        />

      </van-dropdown-item>
      <van-dropdown-item class="speails_zixun" title="咨询人数" title-class="dropdown_color " value='1' @open='overlayLock=false' @opened="zixunMenuOpen" @close='zixunMenuClose' >
        </van-dropdown-item>
      <van-dropdown-item  class="speails_jiage" title="价格" title-class="dropdown_color " value='2' @open='overlayLock=false' @opened="priceMenuOpen" @close='priceMenuClose' >
      </van-dropdown-item>
      <van-dropdown-item  @open="shaixuan" ref="three" title-class="hide_icon dropdown_color"  value='3' >
        <div slot="title" >
          <span style='vertical-align: middle; color: #999999' >筛选</span>
          <van-icon name="filter-o" size="13px"  style="vertical-align: middle;"/>
        </div>
      </van-dropdown-item>
    </van-dropdown-menu>

    <van-pull-refresh v-model="refreshing" @refresh="onRefresh" class="hei_list" >
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <div class="list" v-for="item in list" :key="item">
         
           <van-card class="van_card_background_white box_list" @click.prevent="goDetail(item)">
              <div slot="thumb" >
                <img v-if="item.headPath" :src="item.headPath" class="user_icon"/>
                <img v-else src="@/assets/img/doctor_defalut@2x.png" class="user_icon" alt="">
              </div>
              <div slot="title">
                <b class="title_name">{{item.userName + " " +(item.technicalPost ) }}</b>
              </div>
              <div slot="desc" class="title_yy_keshi">{{(item.unitName )+ " · " + item.departmentName}}</div>
              <div slot="price" class="price_box">
                <div class="price_left">
                  <span class="title_price" v-if="item.open">{{Number(item.price) ? "￥" + item.price : '免费'}}</span>
                  <span class="title_yuduliang" v-else>未开通 </span>
                  <span class="title_yuduliang">{{'图文'}} &nbsp;&nbsp;|&nbsp;&nbsp;</span>
                  <span class="title_price" v-if="item.chatOpen">{{Number(item.chatPrice) ? "￥" + item.chatPrice : '免费' }}</span>
                  <span class="title_yuduliang" v-else>未开通 </span>
                  <span class="title_yuduliang">{{'聊天'}}</span>
                </div>
                <div class="price_right">
                  <span class="title_yuduliang">&nbsp;&nbsp;&nbsp;&nbsp;{{(item.consultNumber || 0) + '人咨询'}}</span>
                </div>
                
              </div>
              <div slot="tags" class="title_shanchang">擅长：{{item.skilledIn}}</div>
            </van-card>
        </div>
      </van-list>
    </van-pull-refresh>

    <van-popup
        v-model="shaixuanLock"
        position="right"
        :style="{ width: '80vw' ,height: '100vh', padding: '.2rem'}"
    >
        <van-checkbox-group v-model="seach.sceen.lv" ref="checkboxGroup" :direction='"horizontal"'>
                <div style="overflow:hidden;">
                  <div class="duoxian_title">医生级别</div>
                  <van-checkbox :name="item" class="xuanzhong_yangshi_zidingyi" v-for="(item, index) of shanchangList[0]" :key="index">
                      <span slot="icon" slot-scope="props" :class="[props.checked ? 'active' : 'inactive', '']">{{item}}</span>
                  </van-checkbox>
                </div>
        </van-checkbox-group>

        <van-checkbox-group v-model="seach.sceen.addNum" ref="checkboxGroup" :direction='"horizontal"'>
          <div style="overflow:hidden;">
                <div class="duoxian_title">加号</div>
                <van-checkbox :name="1" class="xuanzhong_yangshi_zidingyi" >
                    <span slot="icon" slot-scope="props" :class="[props.checked ? 'active' : 'inactive', '']">加号</span>
                </van-checkbox>
          </div>
        </van-checkbox-group>

        <van-checkbox-group v-model="seach.sceen.skilledIn" ref="checkboxGroup" :direction='"horizontal"'>
              <div style="overflow:hidden;">

                    <div class="duoxian_title" @click="shanchangActive = !shanchangActive">
                      <span>擅长类目</span>
                      <van-icon name="arrow-down" v-if="shanchangActive" class="right_icon" />
                      <van-icon name="arrow-up" v-else class='right_icon'/>
                    </div>
                   
                    <van-checkbox :name="item" class="xuanzhong_yangshi_zidingyi" v-for="(item, index) of shanchangList[2]" :key="index">
                        <span slot="icon" slot-scope="props" :class="[props.checked ? 'active' : 'inactive', '']">{{item}}</span>
                    </van-checkbox>
                </div>
        </van-checkbox-group>
        <div class="queren_gong">
            <van-row>
                <van-col span="12">
                <div color="primary" class="lst" @click="shaixuanchongzhi">重置</div>
                </van-col>
                <van-col span="12"> <div color="primary" class="lst" style="background:rgba(253,119,146,1);color:white;border:none;" @click="shaixuanSeach">确定</div></van-col>
            </van-row>
        </div>
    </van-popup>
    <!-- 全国筛选数据 -->
    <div class="list_box" v-show="shaixuanListLock">
        
    </div>
  </div>
</template>

<script>
import {selectListPageApi, getProvinceHospitalApi} from '@/api/doctorHomePage'

export default {
  data() {
    return {
      quanguoText: '全国',
        result: [],
        shaixuanLock: false,
        overlayLock: true,
        // 筛选弹框
        shaixuanListLock: false,
        sss: '1',
        seach: {
          searchName: "",
          opType: {
              type: 0,
              desc: 0
          },
          province: '',
          sceen: {
            lv: [],
            skilledIn: [],
            addNum: []
          },
          unitId: 0,
          // 地区code
          areaCode: '',
          pageSize: 20,
          pageNum: 0,
          skilledInId: ''
        },
      activeIndex: 0,
      // 筛选假数据
      shanchangList: [
         ['主任医师', '副主任医师' ,'主治医师'],
         ['加号'],
         ['人工受精', '试管婴儿' ,'输卵管堵塞','卵巢早衰', '排卵障碍','多囊卵巢','促排卵治疗','子宫内膜异常', '习惯性流产'],
      ],
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
      // 地区列表筛选
      areaCodeList: [],
      shanchangActive: true,
      jiageLock: true,
      MenuOpenType: ''
    };
  },
  created() {
    this.seach.searchName = this.$route.query.searchName 
    var skilledInId = this.$route.query.skilledInId || ''
    sessionStorage.setItem('skilledInId', skilledInId)
    console.log("skilledInId", skilledInId)
    this.seach.skilledInId = sessionStorage.getItem("skilledInId")
    this.getProvinceHospital()
  },
  methods: {
    goSeach() {
      this.$router.push('/seachOld')
    },
    zixunMenuChange(val) {
      console.log('val1112changee', val)
    },
    selectTab(val) {
      console.log(val);
      
    },
    getProvinceHospital() {
      var _this = this;
      var lat = ''
      var lng = ''
        if (navigator.geolocation){ 
            // alert('开始定位')
            navigator.geolocation.getCurrentPosition(showPosition,showError); 
        }else{ 
            alert("浏览器不支持地理定位。");
        } 
        function showError(){ 
            console.log('定位失败')
            getProvinceHospitalApi({lat,lng}).then(({data})=>{
              console.log(data)
               // data = [
              //   { code: "0",
              //     children: [
              //       {text: '全部',id: 0}
              //     ],
              //     text: "全国",
              //     id: 1
              //   },
              //   { code: "27",
              //     children: [
              //       {text: '全部',id: 0},
              //       {text: '湖北省妇幼保健院',id: 29}
              //     ],
              //     text: "湖北",
              //     id: 7
              //   }
              // ]
              data.forEach(item=>{
                  var time =  Math.random()
                  // console.log(item)
                  if (item.text != '全国') {
                    item.children[0].id = 'all' + time +item.children[0].id
                  }
                  
              })
              // _this.seach.unitId = data[1].children[0].id
              console.log(data) 
              _this.areaCodeList = data
              _this.dataInit({})
            })
            return 
        }
        function showPosition(position){ 
            lat = position.coords.latitude
            lng = position.coords.longitude
            console.log('定位成功', lng, lat)
            getProvinceHospitalApi({lat,lng}).then(({data})=>{
              console.log(data)
              data.forEach(item=>{
                  var time =  Math.random()
                  // console.log(item)
                  if (item.text != '全国') {
                    item.children[0].id = 'all' + time +item.children[0].id
                  }
              })
              var text = ''
              var num = 0
              if (data[0].text == '全国') {
                num = 1
              }else {
                num = 0 
              }
              text = data[num].text
              _this.quanguoText = text
              _this.seach.province = text == '全国'? '': text
              _this.seach.unitId = data[num].children[0].id
              
              console.log(data)
              _this.areaCodeList = data
              _this.dataInit({})
            })
            return
        } 
      
    },

    shaixuanchongzhi() {
      this.seach.sceen = {
          lv: [],
          skilledIn: [],
          addNum: []
      }
    },
    shaixuanSeach() {
      this.shaixuanLock = false
      this.dataInit({})
    },
      goDetail({userId}){
          this.$router.push({
            path: "/doctorHome",
            query:{userId, csId: this.$route.query.csId || ""}
          })
      },
      dataInit({type = '', isLoadingLock = true}) {
        
          var data = JSON.parse(JSON.stringify(this.seach));  
          data.isLoadingLock = isLoadingLock;
          if (type == 'seach') {
              data.pageNum= 1
              data.pageSize = 20
          }
          console.log('unitId', data)
          if (data.unitId && data.unitId.toString().indexOf('all') != -1) {
            data.unitId = 0
          }
          selectListPageApi(data).then(({data})=>{
              // console.log('tag', data)
              if (type == 'push') {
                  this.list = this.list.concat(data.records)
              }else {
                  this.list = data.records
              }
              this.total = data.total
              this.seach.pageSize = data.size
              this.seach.pageNum = data.current
              this.loading = false;
              this.refreshing = false;
          }).catch(()=>{
            this.loading = false;
            this.refreshing = false;
            this.finished = true;
          })
      },
    onLoad() {
        console.log('tag', '11')
        console.log(this.list.length,  this.total)
        if (this.list.length >= this.total) {
          
          this.loading = false;
          this.finished = true;
          return false
        }else {
            this.seach.pageNum ++ 
            this.dataInit({type: 'push'})
        }

    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;
      this.seach.pageNum = 1
      this.seach.pageSize = 20
      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.dataInit({})
    },
    onConfirm() {
      this.$refs.item.toggle();
    },
    shaixuan() {
      this.shaixuanLock = true;
      console.log('tag', '1')
      this.overlayLock = false;
    },
    quanguoSel() {},
    menuIint() {
      this.overlayLock = false;
      this.seach.pageSize= 20
      this.seach.pageNum= 1
      
      $('.van-dropdown-item.van-dropdown-item--down').hide()
    },
    dropdownChange(value) {
      console.log('va11111l', value)
    },
    // 价格筛选
    priceMenuOpen() {
      this.menuIint()
      this.seach.opType.type = 2
      this.seach.opType.desc = 0
      this.MenuOpenType = 2
      console.log( '价格筛选', this.seach)
      this.dataInit({isLoadingLock: false})
    },
    priceMenuClose() {
      this.menuIint()
      this.MenuOpenType = ''
      this.seach.opType.type = 2
      this.seach.opType.desc = 1
      console.log( '价格筛选guan', this.seach)
      this.dataInit({isLoadingLock: false})
    },
    // 咨询人数
    zixunMenuOpen() {
      this.menuIint()
      this.MenuOpenType = 1
      
      this.seach.opType.type = 1
      this.seach.opType.desc = 0
      console.log( '咨询人数open', this.seach)
      this.dataInit({isLoadingLock: false})
    },
    zixunMenuClose() {
      this.menuIint()
      this.MenuOpenType = ''
      this.seach.opType.type = 1
      this.seach.opType.desc = 1
      console.log( '咨询人数guan', this.seach)
      this.dataInit({isLoadingLock: false})
    },

    clickNav(index) {
      var text =this.areaCodeList[index].text
      this.quanguoText = text
      
      this.seach.province = text == '全国'? '': text
    },
    quanguoTextOpen() {
      this.MenuOpenType = '3'
      this.overlayLock = true
      $('.speails .van-dropdown-item.van-dropdown-item--down').show()
    },
    clickItem(data) {
      console.log(data)
      this.$refs.quanguoText.toggle();
      this.seach.pageSize= 20
      // this.MenuOpenType = this.MenuOpenType == '' : '3'
      this.seach.pageNum= 1
      this.dataInit({isLoadingLock: false})
    },
    quanguoTextClose() {
      this.MenuOpenType = ''
    }
  }
};
</script>


<style lang="stylus" scoped>
.user_icon {
    height: 88px; 
    width 100%;
    display inline-block
}
.box_list {
  text-align: left;
}
.queren_gong {
    position absolute;
    bottom 0px;
    left 0;
    width 80vw;
    height: 1.2rem;
    border-top: 1px solid #f6f6f6;
}
.lst {
    background: #fff;
    color: #3d3744;
    border: 1px solid #ddd;
    width: 2.25rem;
    height: 36px;
    border-radius: 40px;
    line-height: 36px;
    margin: .2rem auto 0;
}
.list {
  background: #fff;
  margin-bottom:.1rem;
}
.active {
    color red;
}
.title_name {
  font-size: .3rem;
  font-family: PingFang SC;
  font-weight: 700;
  color: #333;
  /* line-height: .22rem; */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 88%;
  display: inline-block;
}

.title_yiyuan {
  font-size: 0.26rem;
  font-family: PingFang SC;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  line-height: 0.22rem;
}

.title_shanchang {
  font-size: 0.22rem;
  font-family: PingFang SC;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  line-height: 0.22rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width 90%;
}

.title_price {
  font-size: 0.26rem;
  font-family: PingFang SC;
  // font-weight: bold;
  color: rgba(253, 119, 146, 1);
  line-height: 0.22rem;
}

.title_yuduliang {
  font-size: 0.26rem;
  font-family: PingFang SC;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  line-height: 0.22rem;
}

b.title_price {
  font-size: 0.35rem;
}

.title_shanchang {
  font-size: 0.22rem;
  font-family: PingFang SC;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  line-height: 0.22rem;
}

.title_yy_keshi {
  font-size: 0.26rem;
  font-family: PingFang SC;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  line-height: 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width 90%;
}
.duoxian_title{
    font-size:.26rem;
    padding .4rem 0 .25rem;
    font-family:PingFang SC;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:.22rem;
    text-align left ;
}
.active {
    background:rgba(253,119,146,0.2);
    color #FD7792;
    border .01rem solid rgba(253,119,146,1);
    min-width:1.5rem
    height:.780rem;
    display inline-block
    line-height .780rem;
    font-size:.24rem;
    font-family:PingFang SC;
    border-radius: 5px;
    font-weight:bold;
}
.inactive {
    background:rgba(246,246,246,1);
    min-width:1.5rem
    height:.80rem;
    display inline-block
    line-height .8rem;
    font-size:.24rem;
    font-family:PingFang SC;
    font-weight:bold;
    border-radius: 5px;
}
.xuanzhong_yangshi_zidingyi.van-checkbox {
    display inline-block;
    min-width:1.5rem
    height:.80rem;
    line-height .8rem;
    font-size:.24rem;
    color #3D3744;
    font-family:PingFang SC;
    font-weight:bold;
    float: left;
    margin: 0 .3rem 0.3rem 0;
}
.list_box {
  position fixed;
  top: 104px;
  left: 0;
  width 100vw;
  height: calc(100vh - 104px);
  background: rgba(0,0,0,.1);
}
.xialakuang >>> .van-tree-select__content {
  flex: 4;
  text-align: left;
}
.xialakuang >>> .van-sidebar-item.van-tree-select__nav-item {
      display: block;
      color: #666;
}
.xialakuang >>> .van-sidebar-item--select.van-sidebar-item.van-tree-select__nav-item {
  background: #fff;
  color: rgb(253, 119, 146)
}
.hei_list {
  height: calc( 100vh - 104px - 50px);
  overflow:auto;
}
.price_box {
  display flex;

}

.price_left,
.price_right {
  flex: 1;
}
.price_left {
  flex: 2;
}
.price_right{
  text-align:right;
}

.van-card__price {
  width: 100%;
}


.price_box {
  display flex;
  padding-top: .4rem;
}
.price_left,
.price_right {
  flex: 1;
}
.price_left {
  flex: 2;
}
.price_right{
  text-align:right;
}

.van-card__price {
  width: 100%;
}
.box_list  >>> .van-card__thumb {
  width: 1.3rem;
  margin-right: .2rem;
}
.user_icon {
    height: 1.3rem;
    width: 1.3rem;
    display: block;
    border-radius: 100%;
    margin: 0 auto;
}
.right_icon {
  float right;
}

</style>
