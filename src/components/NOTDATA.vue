<template>
    <van-empty  description="暂无数据" class='error_box'>
        <template #image>
            <img style='width:3.2rem; height:2rem' src="@/assets/img/not_data@2x.png" alt="">
        </template>
    </van-empty>
</template>

<script>
    export default {

    }
</script>

<style lang="less" scoped>
.error_box {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background: #fff;
    /deep/ .van-empty__image {
        height: 2.4rem;
    }
}
.bottom-button {
  width: 2rem;
}
</style>
