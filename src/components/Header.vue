<template>
    <div>
        <mu-appbar color="primary" id="header_" :z-depth="0">
            <mu-button icon slot="left" @click="goBack">
                <mu-icon value="arrow_back" ></mu-icon>
            </mu-button>
            {{$route.meta.title}}
            <mu-menu slot="right">
                <div style="width:56px;"> </div>
            </mu-menu>
        </mu-appbar>

    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import {iosOrAndFun} from '@/utils/filter'
    export default {
       name: 'headerTitle',
       computed: {
           ...mapGetters([
            'BackToPath'
           ])
       },
       methods: {
           goBack(){
               var _this = this;
                   try {
                      iosOrAndFun({ funName: this.BackToPath.funName }) 
                      this.BackPath('')
                   } catch (error) {
                       if (this.BackToPath.path) {
                            this.$router.push({ path: _this.BackToPath.path })
                            //    还原返回按钮功能
                            this.BackPath('')
                        } else  {
                            this.$router.go(-1)
                        }
                   }
                 
           }
       },
    }
</script>

<style scoped>
#header_ {
    height: 9vh;

}
</style>