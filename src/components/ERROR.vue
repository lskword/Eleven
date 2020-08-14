<template>
    <van-empty :image="require('@/assets/img/node_sa1@2x.png')" description="数据丢失~" class='error_box1'>
        <span :style="{color:BASE_COLOR_PRIMARY}" @click="goBackIndex">重新载入</span>
    </van-empty>
</template>

<script>
import {iosOrAndFun} from '@/utils/filter'
    export default {
        created () {
        },
         methods: {
            goBackIndex() {
                try {
                   iosOrAndFun({ funName: "backHomeFnApi" }) 
                } catch (error) {
                    this.$router.go(-1) 
                }
            }
        }
    }
</script>

<style scoped>
.error_box1 {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background: #fff;
}
</style>
