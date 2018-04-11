<template>
  <el-col :span="24" class="header">
      <div class="logo">
        <span>{{$t('route.logo')}}</span>
      </div>
      <el-menu
        :default-active="$route.path"
        router
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="/tradingCenter">{{$t('route.tradingCenter')}}</el-menu-item>
        <el-submenu index="/fundsManagement">
            <template slot="title">{{$t('route.funds')}}</template>
            <el-menu-item index="2-1">{{$t('route.balances')}}</el-menu-item>
            <el-menu-item index="2-2">{{$t('route.deposits')}}</el-menu-item>
            <el-menu-item index="2-3">{{$t('route.withdrawals')}}</el-menu-item>
            <el-menu-item index="2-2">{{$t('route.transactionHistory')}}</el-menu-item>
        </el-submenu>
        <el-submenu index="/mandatory">
            <template slot="title">{{$t('route.orders')}}</template>
            <el-menu-item index="2-1">{{$t('route.openOrders')}}</el-menu-item>
            <el-menu-item index="2-2">{{$t('route.orderHistory')}}</el-menu-item>
            <el-menu-item index="2-3">{{$t('route.tradeHistory')}}</el-menu-item>
        </el-submenu>
        <el-menu-item index="">{{$t('route.join')}}</el-menu-item>
        <el-menu-item index="/helpCenter">{{$t('route.support')}}</el-menu-item>
        <el-menu-item index="">{{$t('route.news')}}</el-menu-item>
        <el-dropdown class="changeLang" @command="handleSetLanguage">
            <span class="el-dropdown-link">
                {{$t('route.lang')}}
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="zh" :disabled="language==='zh'">简体中文</el-dropdown-item>
                <el-dropdown-item command="en" :disabled="language==='en'">English</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        </el-menu>
      <div class="userinfo">
        <el-dropdown trigger="hover" placement="bottom-start">
          <div>
            <i class="iconfont orgName icon-duoren"></i>
            <span class="el-dropdown-link userinfo-inner">{{sysUserName}}</span>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="logout">{{$t('route.logout')}}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span class="fullScreen" @click="fullScreen">
          <i class="iconfont icon-icwindowzoom48px"></i>
          全屏
        </span>
      </div>
    </el-col>
</template>

<script>
import screenfull from "screenfull";
export default {
  data() {
    return {
      sysUserName: "aaa"
    };
  },
  methods: {
    open(index) {
      console.log(index);
    },
    handleSelect(key, keyPath) {
        console.log(key, keyPath);
    },
    fullScreen() {
      if (!screenfull.enabled) {
        this.$message({
          message: "you browser can not work",
          type: "warning"
        });
        return false;
      }
      screenfull.toggle();
    },
    //退出登录
    logout: function() {
      var _this = this;
      this.$confirm("确认退出吗?", "提示", {})
        .then(() => {
          sessionStorage.removeItem("user");
          _this.$router.replace("/login");
        })
        .catch(() => {});
    },
    handleSetLanguage(lang) {
      
      this.$i18n.locale = lang
      this.$store.dispatch('setLanguage', lang)
      //console.log(this.$i18n.locale)
    //   this.$message({
    //     message: 'switch language success',
    //     type: 'success'
    //   })
    }
  },
  computed: {
    language() {
      return this.$store.getters.language
    }
  },
};
</script>

<style scoped lang="scss">
@import "~scss_vars";
.changeLang{
    height: 60px;
    
    .el-dropdown-link{
        color: #ffffff;
        line-height: 60px;
    }
    
}
</style>
