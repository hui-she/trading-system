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
    <el-col class="tabBox" :span="24">
      <el-tabs class="" type="card" :class="{'tabClass':hasBorder}" v-model="activeName" @tab-click="handleClick">
        <el-tab-pane>
          <span slot="label"><i class="el-icon-star-on"></i> 自选</span>
          <el-row class="tabTitle">
            <el-col :span="4"><div class="title">市场</div></el-col>
            <el-col :span="4"><div class="title">最新价</div></el-col>
            <el-col :span="4"><div class="title">24h涨跌幅</div></el-col>
            <el-col :span="4"><div class="title">24h最高价</div></el-col>
            <el-col :span="4"><div class="title">24h最低价</div></el-col>
            <el-col :span="4"><div class="title">24h成交量</div></el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="BTC市场" name="BTC">
          <el-row class="tabTitle">
            <el-col :span="4"><div class="title">市场</div></el-col>
            <el-col :span="4"><div class="title">最新价</div></el-col>
            <el-col :span="4"><div class="title">24h涨跌幅</div></el-col>
            <el-col :span="4"><div class="title">24h最高价</div></el-col>
            <el-col :span="4"><div class="title">24h最低价</div></el-col>
            <el-col :span="4"><div class="title">24h成交量</div></el-col>
          </el-row>
          <ul class="tabContent">
            <li v-for="(item,idx) in BTCList" :key="idx">
              <router-link :to="'/tradingCenter/'+item.id">
                <el-row class="goodsItem">
                  <el-col :span="4"><div class="good"><i :class="item.star=='off'?'el-icon-star-off':'el-icon-star-on'"></i>{{item.name}}</div></el-col>
                  <el-col :span="4"><div class="goods">{{item.newPrice1}}</div></el-col>
                  <el-col :span="4"><div class="goods">{{item.scope}}</div></el-col>
                  <el-col :span="4"><div class="goods">{{item.high}}</div></el-col>
                  <el-col :span="4"><div class="goods">{{item.down}}</div></el-col>
                  <el-col :span="4"><div class="goods">{{item.all}}</div></el-col>
                </el-row>
              </router-link>
            </li>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="ETH市场" name="ETH">
          <el-row class="tabTitle">
            <el-col :span="4"><div class="title">市场</div></el-col>
            <el-col :span="4"><div class="title">最新价</div></el-col>
            <el-col :span="4"><div class="title">24h涨跌幅</div></el-col>
            <el-col :span="4"><div class="title">24h最高价</div></el-col>
            <el-col :span="4"><div class="title">24h最低价</div></el-col>
            <el-col :span="4"><div class="title">24h成交量</div></el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
      <el-input
        class="search"
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
        >
      </el-input>
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
        BTCList: [
          {id:"1",name:"XVG/BTC",newPrice1:"0.00001257",newPrice2:"0.67",scope:"17.48%",high:"0.00001310",down:"0.00000975",all:"17,245.43037969",star:"off"},
          {id:"2",name:"ADA/BTC",newPrice1:"0.00001257",newPrice2:"1.67",scope:"-17.48%",high:"0.00001310",down:"0.00000975",all:"17,245.43037969",star:"on"}
        ],

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
  height: 100%;
  min-width: 1200px;
  color: #333333;
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
  .tabMain{
    padding: 60px;
    padding-bottom: 120px;
    .tabBox{
      position: relative;
      .search{
        height: 34px;
        width: 200px;
        position: absolute;
        top: 2px;
        left: 300px;
        input{
          border-radius: 0;
          height: 34px;
        }
        span{
          height: 34px;
          i{
            line-height: 34px;
          }
        }
      }
      .f-left{
        text-align: left;
      }
      .f-right{
        text-align: right;
      }
      .tabTitle{
        font-size: 12px;
        color: #666666;
        text-align: center;
        line-height: 30px;
        .title{
          cursor:pointer;
        }
      }
      .tabContent{
        
      }

      .el-tabs__nav{
        border-radius: 0;
      }
      .el-tabs--card > .el-tabs__header{
        border: 0;
      }
      .el-tabs__header{
        margin: 0;
      }
      .el-tabs__content{
        border: 1px solid #CCCCCC;
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

