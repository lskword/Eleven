<template>
  <div class="box_list">
    <div class="tip_title">您填写的档案仅您和医生可见，为了给您更准确的医疗服务，请您务必填写真实资料。</div>
    <div class="title_box_abc">
      <div class="left">女方健康信息</div>
      <div class="right"><img src="@/assets/img/record_icon_woman@3x.png" alt=""></div>
    </div>
    <van-collapse v-model="activeNames" class="sadf">
      <van-collapse-item  name="1" :border='false'>
        <div slot="title" class="list_son_title">基本信息</div>
        <div v-for="(item, index) in WenList" :key="index">
            <van-cell-group v-if="item.type=='date'">
              <van-cell
                @click="dateCheckList(item , 'memberInfo')"
                is-link
                title-class="title_label"
                class="list_box_p_"
                :value="SendObj.memberInfo[item.key] || item.placeholder"
              >
                <div slot="title" size="small" type="primary">
                  <span>{{item.name}}</span>
                  <span class="red_text" v-if="item.isrequired">*</span>
                </div>
              </van-cell>
            </van-cell-group>
            <van-cell-group v-else-if="item.type=='select'">
              <van-cell
                @click="dateCheckList(item , 'memberInfo')"
                is-link
                title-class="title_label"
                class="list_box_p_"
                :value="SendObj.memberInfo[item.key] | listFilesValue(item.selectList)"
              >
                <div slot="title" size="small" type="primary">
                  <span>{{item.name}}</span>
                  <span class="red_text" v-if="item.isrequired">*</span>
                </div>
              </van-cell>
            </van-cell-group>
            <van-cell-group v-else>
              <van-field
                title-class="title_label"
                v-model="SendObj.memberInfo[item.key] "
                label-align="left"
                input-align="right"
                class="list_box_p_"
                :disabled="item.disabled"
                autosize
                rows="1"
                :type="item.type"
                :placeholder="item.placeholder"
              >
                <div slot="label" size="small" type="primary">
                  <span>{{item.name }}</span>
                  <span class="red_text" v-if="item.isrequired">*</span>
                </div>
              </van-field>
            </van-cell-group>
            
          </div>
      </van-collapse-item>
      <van-collapse-item  name="2" :border='false'>
          <div slot="title" class="list_son_title">月经史</div>
          <div v-for="(item, index) in menstruationHistoryList" :key="index">
            <van-cell-group v-if="item.type=='date'">
              <van-cell
                title-class="title_label"
                @click="dateCheckList(item , 'menstruationHistory')"
                is-link
                class="list_box_p_"
                :value="SendObj.menstruationHistory[item.key] || item.placeholder"
              >
                <div slot="title" size="small" type="primary">
                  <span>{{item.name}}</span>
                  <span class="red_text" v-if="item.isrequired">*</span>
                </div>
              </van-cell>
            </van-cell-group>
            <van-cell-group v-else-if="item.type=='select'">
              <van-cell
                @click="dateCheckList(item , 'menstruationHistory')"
                is-link
                title-class="title_label"
                class="list_box_p_"
                :value="SendObj.menstruationHistory[item.key] | listFilesValue(item.selectList)"
              >
                <div slot="title" size="small" type="primary">
                  <span>{{item.name}}</span>
                  <span class="red_text" v-if="item.isrequired">*</span>
                </div>
              </van-cell>
            </van-cell-group>
            <van-cell-group v-else>
              <van-field
                title-class="title_label"
                v-model="SendObj.menstruationHistory[item.key]"
                label-align="left"
                input-align="right"
                class="list_box_p_"
                :disabled="item.disabled"
                :type="item.type"
                :placeholder="item.placeholder"
              >
                <div slot="label" size="small" type="primary">
                  <span>{{item.name}}</span>
                  <span class="red_text" v-if="item.isrequired">*</span>
                </div>
              </van-field>
            </van-cell-group>
            
          </div>
      </van-collapse-item>
      <van-collapse-item  name="3" :border='false'>
        <div slot="title" class="list_son_title">婚育史</div>
        <div v-for="(item, index) in maritalHistoryList" :key="index">
            <van-cell-group v-if="item.type=='date'">
              <van-cell
                title-class="title_label"
                class="list_box_p_"
                @click="dateCheckList(item, 'maritalHistory')"
                is-link
                :value="SendObj.maritalHistory[item.key] || item.placeholder"
              >
                <div slot="title" size="small" type="primary">
                  <span>{{item.name}}</span>
                  <span class="red_text" v-if="item.isrequired">*</span>
                </div>
              </van-cell>
            </van-cell-group>
            <van-cell-group v-else-if="item.type=='select'">
              <van-cell
                @click="dateCheckList(item, 'maritalHistory')"
                is-link
                class="list_box_p_"
                title-class="title_label"
                :value="SendObj.maritalHistory[item.key] | listFilesValue(item.selectList)"
              >
                <div slot="title" size="small" type="primary">
                  <span>{{item.name}}</span>
                  <span class="red_text" v-if="item.isrequired">*</span>
                </div>
              </van-cell>
            </van-cell-group>
            <van-cell-group v-else>
              <van-field
                v-model="SendObj.maritalHistory[item.key]"
                label-align="left"
                input-align="right"
                :disabled="item.disabled"
                class="list_box_p_"
                :type="item.type"
                :placeholder="item.placeholder"
              >
                <div slot="label" size="small" type="primary" class="title_label">
                  <span>{{item.name}}</span>
                  <span class="red_text" v-if="item.isrequired">*</span>
                </div>
              </van-field>
            </van-cell-group>
            
          </div>
      </van-collapse-item>
    </van-collapse>

    <div class="title_box_abc">
      <div class="left">男方健康信息</div>
      <div class="right"><img src="@/assets/img/record_icon_man@3x.png" alt=""></div>
    </div>
      <van-collapse v-model="activeNamesMan" class="sadf">
        <van-collapse-item  name="1" :border='false' >
          <div slot="title" class="list_son_title">基本信息</div>
          
          <div v-for="(item, index) in ManList" :key="index" >
            <van-cell-group v-if="item.type=='date'">
              <van-cell
                @click="dateCheckList(item , 'memberInfo')"
                is-link
                title-class="title_label"
                class="list_box_p_"
                :value="SendObj.memberInfo[item.key] || item.placeholder"
              >
                <div slot="title" size="small" type="primary">
                  <span>{{item.name}}</span>
                  <span class="red_text" v-if="item.isrequired">*</span>
                </div>
              </van-cell>
            </van-cell-group>
            <van-cell-group v-else-if="item.type=='select'">
              <van-cell
                @click="dateCheckList(item, 'memberInfo')"
                is-link
                title-class="title_label"
                class="list_box_p_"
                :value="SendObj.memberInfo[item.key] | listFilesValue(item.selectList)"
              >
                <div slot="title" size="small" type="primary">
                  <span>{{item.name}}</span>
                  <span class="red_text" v-if="item.isrequired">*</span>
                </div>
              </van-cell>
            </van-cell-group>
            <van-cell-group v-else>
              <van-field
                title-class="title_label"
                v-model="SendObj.memberInfo[item.key]"
                label-align="left"
                input-align="right"
                class="list_box_p_"
                :disabled="item.disabled"
                :type="item.type"
                :placeholder="item.placeholder"
                autosize
                rows="1"
              >
              
                <div slot="label" size="small" type="primary">
                  <span>{{item.name}}</span>
                  <span class="red_text" v-if="item.isrequired">*</span>
                </div>
              </van-field>
             
            </van-cell-group>
            
          </div>

        </van-collapse-item>
      </van-collapse>

<div style="height: 60px;"></div>
    <van-popup v-model="dateShowLock" position="bottom">
      <van-datetime-picker
        v-model="currentDate.value"
        type="date"
        title="选择年月日"
        :min-date="minDate"
        :max-date="maxDate"
        :color="BASE_COLOR_PRIMARY"
        @change="dateChange"
      />
      <!-- <mu-date-picker
        :color="BASE_COLOR_PRIMARY"
        @change="dateChange"
        :date.sync="currentDate.value"
        style="width:100vw;"
      ></mu-date-picker> -->
    </van-popup>
    <div class="footer_box">
      <van-button :color="BASE_COLOR_PRIMARY" size="large" @click="saveUserInfo">保存</van-button>
    </div>
    <van-popup v-model="selectShowLock" position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        class="picker_box"
        @cancel="selectShowLock = false"
        @confirm="onConfirm"
        @change="selectChange"
        :defaultIndex='defaultIndex'
        :title="pickerTitle"
        value-key="name"
      />
    </van-popup>


    <van-popup
      v-model="ctiyLock"
      closeable
      close-icon="close"
      position="bottom"
      :style="{ height: '100%' ,backgroundColor: '#f9f9f9'}"
    >
      <van-index-bar>
        <div class v-for="(item, index) in ctiyList" :key="index">
          <van-index-anchor :index="item.key" />
          <van-cell
            :title="it.name"
            @click.native="ctiyListItem(it)"
            v-for="(it, idx) in item.list"
            :key="idx"
          />
        </div>
      </van-index-bar>
    </van-popup>
  </div>
</template>

<script>
import {iosOrAndFun} from '@/utils/filter'

import {
  getHealthArchivesApi,
  megerHealthArchivesApi,
  // allCityApi
} from "@/api/consul";

var shenfgao = [{ name: "请选择", id: null }]
for (let index = 100; index < 250; index++) {
  shenfgao.push({ name: index+'cm' , id: index.toString() })
}


var tizhong = [{ name: "请选择", id: null }]

for (let index = 1; index < 100; index++) {
  tizhong.push({ name: index + 'kg' , id: index.toString() })
}

const WenList = [
  {
    name: "姓名",
    key: "nameW",
    isrequired: false,
    placeholder: "请输入真实姓名",
    company: '',
    type: "text"
  },
  {
    name: "身高",
    key: "heightW",
    isrequired: false,
    placeholder: '请选择',
    company: '',
    type: "select",
    selectList: shenfgao
  },
  {
    name: "体重",
    key: "weightW",
    isrequired: false,
    placeholder: '请选择',
    company: '',
    type: "select",
    selectList: tizhong
  },
  {
    name: "过敏史",
    key: "guomingshiW",
    isrequired: false,
    placeholder: "请填写过敏药物（非常重要）",
    company: '',
    type: "textarea"
  },
  {
    name: "过往病史",
    key: "guowangshiW",
    isrequired: false,
    placeholder: "请填写过往病史",
    company: '',
    type: "textarea"
  },
  {
    name: "肝功能",
    key: "gangongnengW",
    isrequired: false,
    placeholder: '请选择',
    company: '',
    type: "select",
    selectList: [
      { name: "请选择", id: null },
      { name: "正常", id: "正常" },
      { name: "异常", id: "异常" }
    ]
  },
  {
    name: "肾功能",
    key: "shengongnengW",
    isrequired: false,
    placeholder: '请选择',
    company: '',
    type: "select",
    selectList: [
      { name: "请选择", id: null },
      { name: "正常", id: "正常" },
      { name: "异常", id: "异常" }
    ]
  },
]

// 男性list
const ManList = [
  {
    name: "姓名",
    key: "nameM",
    isrequired: false,
    placeholder: "请输入真实姓名",
    company: '',
    type: "text"
  },
  {
    name: "身高",
    key: "heightM",
    isrequired: false,
    placeholder: '请选择',
    company: '',
    type: "select",
    selectList: shenfgao
    // placeholder: "请选择",
    // type: "select",
    // selectList: [
    //   { name: "请选择", id: null },
    //   { name: "少", id: "少" },
    //   { name: "多", id: "多" },
    //   { name: "很多", id: "很多" }
    // ]
  },
  {
    name: "体重",
    key: "weightM",
    isrequired: false,
    placeholder: '请选择',
    company: '',
    type: "select",
    selectList: tizhong
  },
    {
    name: "过敏史",
    key: "guomingshiM",
    isrequired: false,
    placeholder: "请填写过敏药物（非常重要）",
    company: '',
    type: "textarea"
  },
  {
    name: "过往病史",
    key: "guowangshiM",
    isrequired: false,
    placeholder: "请填写过往病史",
    company: '',
    type: "textarea"
  },
  {
    name: "肝功能",
    key: "gangongnengM",
    isrequired: false,
    placeholder: '请选择',
    company: '',
    type: "select",
    selectList: [
      { name: "请选择", id: null },
      { name: "正常", id: "正常" },
      { name: "异常", id: "异常" }
    ]
  },
  {
    name: "肾功能",
    key: "shengongnengM",
    isrequired: false,
    placeholder: '请选择',
    company: '',
    type: "select",
    selectList: [
      { name: "请选择", id: null },
      { name: "正常", id: "正常" },
      { name: "异常", id: "异常" }
    ]
  },
  // {
  //   name: "性别",
  //   key: "sex",
  //   isrequired: false,
  //   placeholder: "请选择性别",
  //   type: "select",
  //   selectList: [{ name: "男", id: 1 }, { name: "女", id: 0 }]
  // },
  // {
  //   name: "出生日期",
  //   key: "birthday",
  //   isrequired: false,
  //   placeholder: "请选择",
  //   type: "date"
  // },
  // {
  //   name: "手机号",
  //   key: "account",
  //   isrequired: false,
  //   placeholder: "请输入手机号",
  //   type: "tel"
  // }
  //{name: '所在城市', key: 'areaCode', isrequired: false, placeholder: '请选择', type: 'ctiy', selectList: [{name: '请选择', id: ''},{name: '无', id: '无'},{name: '武汉', id: 1}, {name: '武汉1', id: 2},{name: '武汉2', id: 3}] },
];


var jingqi = [{ name: "请选择", id: null }]
for (let index = 1; index < 30; index++) {
  jingqi.push({ name: index+'天' , id: index.toString() })
}

var jingqizhouqi = [{ name: "请选择", id: null }]
for (let index = 1; index < 30; index++) {
  jingqizhouqi.push({ name: index+'天' , id: index.toString() })
}
// 月经史
const menstruationHistoryList = [
  // {
  //   name: "初潮(岁)",
  //   key: "catMenarche",
  //   isrequired: false,
  //   placeholder: "请输入第一次来月经(岁)",
  //   company: '',
  //   type: "text"
  // },
  // {
  //   name: "最近一次月经来潮时间",
  //   key: "catLastCatamenia",
  //   isrequired: false,
  //   placeholder: "请选择",
  //   company: '',
  //   type: "date"
  // },
  {
    name: "月经量",
    key: "catCatameniaAmount",
    isrequired: false,
    company: '',
    placeholder: "请选择",
    type: "select",
    selectList: [
      { name: "请选择", id: null },
      { name: "少", id: "少" },
      { name: "多", id: "多" },
      { name: "很多", id: "很多" }
    ]
  },
  {
    name: "是否痛经",
    company: '',
    key: "catDysmenorrhea",
    isrequired: false,
    placeholder: "请选择",
    type: "select",
    selectList: [
      { name: "请选择", id: null },
      { name: "否", id: "否" },
      { name: "是", id: "是" }
    ]
  },
  {
    name: "经期天数",
    company: '',
    key: "catMensescycleDay",
    isrequired: false,
    placeholder: "请选择",
    type: "select",
    selectList: jingqi
  },
  {
    name: "月经周期",
    company: '',
    key: "catMensescycle",
    isrequired: false,
    placeholder: "请选择",
    type: "select",
    selectList: jingqizhouqi

    
  }
];

var chuhunList = [{ name: "请选择", id: null }]
for (let index = 1; index < 30; index++) {
  chuhunList.push({ name: index+'年' , id: index.toString() })
}

var weiyun = [{ name: "请选择", id: null }]
for (let index = 1; index < 30; index++) {
  weiyun.push({ name: index+'年' , id: index.toString() })
}

// 婚姻史
const maritalHistoryList = [
  {
    name: "婚姻情况",
    company: '',
    key: "marReMarriage",
    isrequired: false,
    placeholder: "请选择",
    type: "select",
    selectList: [
      { name: "请选择", id: null },
      { name: "初婚", id: "初婚" },
      { name: "复婚", id: "复婚" }
    ]
  },
  {
    name: "初 / 再婚几年",
    company: '',
    key: "marReMarriageAge",
    isrequired: false,
    placeholder: "请选择",
    type: "select",
    selectList: chuhunList
    // placeholder: "请输入",
    // type: "tel"
  },
  {
    name: "未避孕未孕(年)",
    company: '',
    key: "contraceptionNoPregnancyNo",
    isrequired: false,
     placeholder: "请选择",
    type: "select",
    selectList: chuhunList
  },
  {
    name: "是否有过怀孕",
    company: '',
    key: "isPregnancy",
    isrequired: false,
    placeholder: "请选择",
    type: "select",
    selectList: [
      { name: "请选择", id: null },
      { name: "否", id: "否" },
      { name: "是", id: "是" }
    ]
  },
  {
    name: "人工流产",
    company: '',
    key: "marDrugAbortion",
    isrequired: false,
    placeholder: "请选择",
    type: "select",
    selectList: [
      { name: "请选择", id: null },
      { name: "无", id: "无" },
      { name: "有", id: "有" }
    ]
  },
  {
    name: "宫外孕",
    company: '',
    key: "ectopicPregnancy",
    isrequired: false,
    placeholder: "请选择",
    type: "select",
    selectList: [
      { name: "请选择", id: null },
      { name: "无", id: "无" },
      { name: "有", id: "有" }
    ]
  }
];

export default {
  data() {
    return {
      pickerTitle: '',
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      // currentDate: new Date(),
      // 城市列表
      ctiyList: [],
      // lst: [],
      ctiyShow: {},
      ctiyLock: false,
      // 类型数据
      typeList: [
        "memberInfo",
        "menstruationHistory",
        "maritalHistory",
        "fileRecord"
      ],
      activeNames: ["1", "2", "3"],
      activeNamesMan: ['1'],
      activeNamesOld: ['1'],
      // 显示展示用户list
      // showList: [],
      // 发送给后端的list
      SendObj: {
        memberInfo: {},
        menstruationHistory: {},
        maritalHistory: {}
      },
      step: 1,
      // 显示步骤
      status: "memberInfo",
      // 日期选择框
      dateShowLock: false,
      // 日期存储器
      currentDate: {
        key: "",
        value: new Date()
      },
      selectShowLock: false,
      // 需要显示下拉选中list
      columns: [],
      // 选择框存储器
      columnsObj: {
        key: "",
        value: null
      },
      menstruationHistoryList,
      maritalHistoryList,
      ManList,
      WenList,
      previewShow: false,
      images: [],
      startPosition: 0
    };
  },
  created() {
    this.dataInit();
    // allCityApi()
    //   .then(({ data }) => {
    //     console.log(data);
    //     this.ctiyList = data;
    //     var lst = [];
    //     data.forEach(item => {
    //       lst = lst.concat(item.list);
    //     });
    //     this.lst = lst;
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  },
  computed: {},
  filters: {
    listFilesValue(val, list) {
      // if (!val) {
      //   return list[0].name;
      // }
      // console.log(list)
      // debugger;
      var filtersList = list.filter(item => item.id === val);
      if (filtersList.length > 0) {
        return filtersList[0].name;
      }
    },
    ctiyListShow(val, list) {
      try {
        // var lst = [];
        for (let index = 0; index < list.length; index++) {
          const element = list[index];
          if (val == element.id) {
            return element.name;
          }
        }
      } catch (e) {
        console.log(list, e);
      }
    }
  },
  methods: {
    imgClick(item, index) {
      var _this = this;
      this.startPosition = index;
      this.previewShow = true;
      _this.images = [];
      item.fileRecordList.forEach(item => {
        _this.images.push(item.filePath);
      });
    },
    dataInit() {
      getHealthArchivesApi().then(({ data }) => {
          this.SendObj = data;
          this.fileRecord = data.fileRecord;
          // this.$previewRefresh() 
        })
        .catch(err => {
          console.log(err);
        });
    },
    tabsChange() {
      // this.$previewRefresh() 
    },
    isrequiredFn() {
      var _this = this;
      var isrequiredList = ManList.filter(
        item => _this.SendObj.memberInfo[item.key] === ""
      );
      if (isrequiredList.length > 0) {
        this.$toast("【" + isrequiredList[0].name + "】为必填项");
        return false;
      }
      var b = maritalHistoryList.filter(
        item => _this.SendObj.maritalHistory[item.key] == ''
      );
      var a = menstruationHistoryList.filter(
        item => _this.SendObj.menstruationHistory[item.key] == ''
      );
      var list = a.concat(b);
      if (list.length > 0) {
        this.$toast("【" + list[0].name + "】为必填项");
        return false;
      }
      console.log(list, isrequiredList);
      
      return true;
    },
     saveUserInfo() {
      // if (await !this.isrequiredFn()) return false;
      megerHealthArchivesApi(this.SendObj)
        .then(({ data }) => {
          console.log(data);
          this.$toast("保存成功");
          this.isJmpPage()
        })
        .catch(err => {
          console.log(err);
        });
    },
    isJmpPage() {
      if (this.$route.query.isUserInfoBack) {
        try {
            iosOrAndFun({ funName: "backFnApi" });
        } catch (error) {
            console.log(error);
        }
      }else {
        this.$router.go(-1)
      }
      
      
      // if (!this.$route.query.userId) {
      //   return false
      // }
      // this.$router.push({
      //     path :'/DoctorCs',
      //     query :{
      //       userId: this.$route.query.userId
      //     }
      //   })
    },
    ctiyListItem(item) {
      console.log(item);
      this.ctiyShow = item;
      this.SendObj.memberInfo.areaCode = item.id;
      this.ctiyLock = false;
    },

    dateCheckList(item, status) {
      // debugger;
      var { type, selectList = [], key, name } = item
      this.pickerTitle  = name
      this.status = status
      console.log(status);
      if (type == "date") {
        this.dateShowLock = true;
        this.currentDate.key = key;
      } else if (type == "ctiy") {
        this.ctiyLock = true;
      } else {
        this.selectShowLock = true;
        this.columns = selectList;
        this.columnsObj.key = key;
        this.columnsObj.value = null;
        // if (key == 'heightM' || key == 'heightW') {
        //   this.defaultIndex = 100
        // }else if (key == 'weightW' || key == 'weightM') {
        //   this.defaultIndex = 50
        // } else {
          this.defaultIndex = 0
        // }
      }
    },
    selectChange({ children }) {
      const { currentIndex } = children[0];
      console.log(currentIndex);
      this.columnsObj.value = this.columns[currentIndex].id;
    },
    onConfirm() {
      this.selectShowLock = false;
      var value = this.columnsObj.value;
      var key = this.columnsObj.key;
      console.log(this.SendObj, [this.status]);
      
      this.SendObj[this.status][key] = value;
      // this.columnsObj= {
      //     key: "",
      //     value: null
      //   }
    },
    dateChange(val) {
      var formatVal = this.formatDate(val, "yyyy-MM-dd");
      var key = this.currentDate.key;
      this.dateShowLock = false;
      this.SendObj[this.status][key] = formatVal;
      this.currentDate = {
        key: "",
        value: ""
      };
    }
  }
};
</script>

<style lang="less" scoped>
.box_list {
  text-align: left;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
  background: #fff;

  .img_box {
    padding: 0.3rem 0 ;

    .title {
      height: 0.2rem;
      font-size: 0.26rem;
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba(102, 102, 102, 1);
      line-height: 0.2rem;
    }

    div.img {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      // align-content: space-between;
      img {
        width: 2.2rem;
        height: 2.2rem;
        display: block;
        border-radius: 0.1rem;
        margin-top: 0.15rem;
        .img_son {
          border: 0;
        }
      }
    }
  }

  .title_top {
    margin-top: 0.4rem;
  }

  .title_box {
    margin: 0.4rem auto 1rem;
  }

  .red_text {
    color: @primary;
  }

  .tab_check_list {
    margin: 0.41rem auto;
    border: 1px solid @primary;
    border-radius: 0.3rem;
    height: 0.64rem;
    width: 6.94rem;
    box-sizing: border-box;

    .two {
      width: 3.45rem;
      height: 0.6rem;
      background: rgba(255, 255, 255, 1);
      line-height: 0.6rem;
      text-align: center;
      float: left;
      box-sizing: border-box;
    }

    .two_left {
      border-radius: 0.3rem 0px 0px 0.3rem;
    }

    .two_right {
      border-radius: 0px 0.3rem 0.3rem 0px;
    }

    .bg_color {
      background: @primary;
      color: #fff;
    }
  }

  .tip_title {
    width: 100vw;
    min-height: 0.63rem;
    font-size: 0.26rem;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(204, 204, 204, 1);
    line-height: 0.36rem;
    padding: 0.37rem 0.47rem 0.37rem 0.3rem;
    background: rgba(249,249,249,1);

  }

  .scend_tep {
    // height:100vh;
    // overflow:hidden;
    .two_show {
      // height: calc(100vh - .73rem);
      background-color: #fff;
      // overflow: auto;
    }
  }

  .title_label {
    width: 2.6rem;
  }

  .list_box_p_ {
    padding: 0.28rem 0;

    /deep/ .van-icon, .van-icon::before {
      font-size: 16px;
      line-height: 24px;
    }
  }

  .footer_box {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;

    button {
      border-radius: 0;
    }
  }
}
.lishichuang {
    font-size:.34rem;
    font-family:PingFang SC;
    font-weight:bold;
    color:@primary;
    line-height:.4rem;
    
}
.title_box_abc {
  display: flex;
  margin: .0rem .3rem 0;
  padding: .4rem 0 0;
  border-bottom: 1px solid #f6f6f6;
  // border-top: 1px solid #f6f6f6;
  .left, right {
    flex: 1;
    text-align:left;
    font-size:.34rem;
    font-family:PingFang SC;
    font-weight:bold;
    color:@primary;
    line-height:.4rem;
  }
  .right{
    flex: 1;
    text-align:right;
    img {
      height: .65rem;
    }
  }
}
.list_son_title {
  font-size:.36rem;
  font-family:PingFang SC;
  font-weight:400;
  color:rgba(84,197,141,1);
  border-bottom:rgba(246,246,246,1);
}

.sadf /deep/ .van-collapse-item__content {
  padding: 0 16px !important;
}
.xiantiao {
  width: 92vw;
  height:1px;
  background:rgba(246,246,246,1);
}
.picker_box /deep/ .van-picker__title {
  color: #333;
}
</style>
