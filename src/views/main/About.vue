<template>
  <div class="home ">
    <img class="bg_icon" src="//ileyun.ivfcn.com/tools/static/img/03.png" alt="">
    <div class="about_conten">
      <p class="title">
        互创联合
      </p>
      <p class="content">
        互创联合定位于辅助生殖智能化整体解决方案供应商，以智能化信息化管理系统为切入点，产品上同时提供别Ｂ端与Ｃ端产品，在辅助生殖细分市场集中资源进行深度挖掘，是国内一家辅助生殖领域智能软硬件设备行业领先企业。
        </p>
        <p class="content">互创联合不断拓展产品线，充分利用前期积累的市场、数据、资源优势，由每个产品点拓展形成了产品线，长期坚持持续创新、提升技术与研发水平，做好关键技术，空白产品的研发，立志产品做好做精，往高精尖方向发展，提升公司核心竞争力，形成同行业中完整的产品线，提供安全、高效、易用的一站式整体解决方案满足辅助生殖中心需求。
        公司产品遍布全国１９０家生殖中心，并以其技术先进性、实用性、稳定性及优质的售后服务获得广大用户的一致好评。</p>
        <p class="content">
    　　互创联合公司全体员工以“互创辉煌，铸造永恒”为宗旨，秉承“精心设计，奉献精品”的精神，不断开发新产品，引进新技术，把用户良好的用户体验作为互创的最高目标。帮助用户循序渐进地应用现代化技术与管理手段，实现管理规范化、科学化，提高用户工作效率与管理水平。
      </p>
      <img src="//ileyun.ivfcn.com/tools/static/img/08.png" class="icon_bg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
    }
  },
  components: {
  },
  created() {
  },
  methods: {

  }
}
</script>


<style lang="less"  scoped>
.home {
  background:#fff;
  overflow:hidden;
}
.bg_icon {
  height: 3.4rem;
  display: block;
  width: 19.2rem;
}
.about_conten {
  width:9.57rem;
  height:5.74rem;
  background:rgba(247,247,247,1);
  padding: .6rem 1.52rem .6rem .5rem;
  text-align: left;
  margin: .95rem 0 1.38rem 2.6rem;
  position:relative;
  .icon_bg {
    position:absolute;
    right: -4rem;
    top: -1.5rem;;
    width: 5.19rem;
    height: 5.19rem;
    display: block;
    box-shadow:0px 20px 34px 4px rgba(231,231,231,1);
  }
  .title {
    font-size: .42rem;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:.42rem;
    margin-bottom: .43rem;
    position:relative;
  }
  .title::after{
    content: " ";
    position:absolute;
    top:.2rem;
    right:-.1rem;
    width:5.86rem;
    height:1px;
    background:rgba(204,153,153,1);
    border:1px solid rgba(210,210,210,1);
  }
  .content { 
    font-size:.18rem;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:.3rem;
    text-indent: 40px;
  }
}
</style>
