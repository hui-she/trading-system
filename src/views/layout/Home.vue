<template>
<div class="home">

  <el-row class="banner">
    <el-col :span="24">
      
    </el-col>
  </el-row>

  <el-row class="message">
    <el-col :span="24">
      <ul class="messageList">
        <li><a href="">芯链正式开放交易</a></li>
        <li><a href="">关于本体（ONT）上线交易的风险通知</a></li>
        <li><a href="">第二期第二轮投票上币结果公布及第三轮投票开启通知</a></li>
        <li><a href="">全球首家数字货币开采与交易一体化的矿池平台上线</a></li>
      </ul>
    </el-col>
  </el-row>

  <el-row class="tabMain">
    <el-col :span="24">
      <el-tabs class="" :class="{'tabClass':hasBorder}" v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="自选" name="myself">自选</el-tab-pane>
        <el-tab-pane label="BTC市场" name="BTC">BTC市场</el-tab-pane>
        <el-tab-pane label="ETH市场" name="ETH">ETH市场</el-tab-pane>
      </el-tabs>
    </el-col>
  </el-row>

  <el-row class="footer">
    <el-col :span="24">
      <div class="fTop">
        <ul class="linkList">
          <li>关于我们</li>
          <li>服务协议</li>
          <li>隐私声明</li>
          <li>费率标准</li>
          <li>API文档</li>
          <li>上币申请</li>
          <li>上币申请</li>
        </ul>
        <ul class="iconList">
          <li>上</li>
          <li>上</li>
          <li>上</li>
          <li>上</li>
        </ul>
      </div>
      <div class="fLine"></div>
      <div class="fDown">
        <div class="reserved">
          @  2017-2018   coin plus.com  All  Rights  Reserved
        </div>
        <ul class="priceList">
          <li>费率标准</li>
          <li>API文档</li>
          <li>上币申请</li>
          <li>上币申请</li>
        </ul>
      </div>
    </el-col>
  </el-row>
</div>
</template>

<script>
export default {
  data() {
      return {
        activeName: 'BTC',
        hasBorder:true,
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}
</script>

<style lang="scss">
.home{
  .banner{
    height: 400px;
    background: #000;
  }
  .message{
    height: 80px;
    background: #333333;
    .messageList{
      height: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #EEEEEE;
      li{
        font-size: 14px;
        padding: 0 60px;
        line-height: 20px;
        border-right: 1px solid #cccccc;
        &:nth-last-child(1){
          border: 0;
        }
        a{
          color: #EEEEEE;
        }
      }
    }
  }

  .footer{
    height: 200px;
    background: #333333;
    padding: 0 60px;
    font-size: 14px;
    color: #999999;
    line-height: 98px;
    .fLine{
      border: 1px solid #979797;
    }
    ul,.fTop,.fDown{
      display: flex;
    }
    .fTop,.fDown{
      justify-content: space-between;
    }
  }

  .el-tabs__active-bar{
    background-color: #fff;
  }
  .el-tabs__nav-wrap::after{
    background-color: #fff;
  }
}

.tabClass{

}
</style>

<style scoped lang="scss">
.el-tabs__active-bar{
  background-color: #fff;
}
</style>

