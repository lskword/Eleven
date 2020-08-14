<style lang="stylus" scoped>
.title_box-action 
    margin-right 16px
    .img_list   
        width: 1.8rem;
        height: 1.8rem;
        display: block;
        border-radius: 100%;

.menus_box 
    display flex
    background #fff
    text-align center
    .menu 
        flex 1
        padding-bottom: .1rem;
        position relative
.demo-text 
  background #fff
  .ripple 
    padding: 10px
    overflow hidden
    position relative
    .left 
      font-size 14px
      color rgba(0, 0, 0, 0.87)
      float left
    .right 
      font-size 13px
      color rgba(0, 0, 0, 0.54)
      float right
      height 21px
      line-height 21px
      text-align right
      border none
      text-decoration none
    .border_radius
        border-radius 10px
    img 
      height 12px
      margin: 4px 8px;
      float right
.tenx-as {
    text-align left
}
.txt-title {
    display flex;
    background #fff;
    align-content center;
    align-items center;
    .le {
        width:1.29rem;
        height:1.29rem;
        margin .32rem;
        border-radius: 100%;
        img {
            display block;
            width:1.29rem;
            height:1.29rem;
            border-radius: 100%;
        }
    }
    .ri {
        height:.43rem;
        font-size:.46rem;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(0,0,0,1);
        line-height:22px;
    }
}
.icon_sy {
    height: .44rem;
    display block;
    margin-right .25rem;
}
.loginout {
    font-size:.36rem;
    font-family:PingFang SC;
    font-weight:400;
    color:rgba(53,53,53,1);
}
</style>


<template>
    <div>
        <div class="txt-title">
            <div class="le">
                <img :src="userInfo.headPath" class="img_list" v-if="userInfo.headPath">
                <img src="@/assets/img/doctor_defalut@2x.png" class="img_list" v-else>
            </div>
            <div class="ri">
                <b class="">{{userInfo.realName || userInfo.name}}</b>
            </div>
        </div>
        <van-cell title="我的订单" class="tenx-as" size="large"  is-link to="/chatConsulRecord" icon="location-o" >
            <template #icon>
                <img class='icon_sy' src="@/assets/img/my_icon_order@3x.png" alt="">
            </template>
        </van-cell>
        <van-cell title="健康档案" class="tenx-as" size="large"  is-link to="/HealthRecords" icon="location-o" >
            <template #icon>
                <img class='icon_sy' src="@/assets/img/rmy_icon_ecord@3x.png" alt="">
            </template>
        </van-cell>
        <van-cell title="我的医生" class="tenx-as" size="large"  is-link to="/myDoctor" icon="location-o" >
            <template #icon>
                <img class='icon_sy' src="@/assets/img/my_icon_doctor@3x.png" alt="">
            </template>
        </van-cell>
        <van-cell title="我的关注" class="tenx-as" size="large"  is-link to="/myFocused" icon="location-o" >
            <template #icon>
                <img class='icon_sy' src="@/assets/img/my_icon_attention@3x.png" alt="">
            </template>
        </van-cell>
        <div class='demo-text' >
            <div class="ripple" @click.prevent='loginOut'>
                <div class="menu">
                    <span class='loginout'>退出登录</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { getUserInfo, removeToken, removeUserInfo, removeUnitId} from '@/utils/auth'

    export default {
        data() {
            return {
                userInfo: {}
            }
        },
        created() {
            this.userInfo = getUserInfo()
            // selectInfoApi().then(({data}) => {
            //     this.userInfo = data
            //     setUserInfo(data)
            // }).catch(() => {
            //     this.$router.push({
            //         path: '/login'
            //     }) 
            // })
        },
        methods: {
            loginOut() {
                removeToken()
                removeUserInfo()
                removeUnitId()
                this.$router.push({
                    path: '/login'
                })
            }
        },
    }
</script>
