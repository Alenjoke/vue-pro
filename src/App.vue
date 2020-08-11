<template>
  <div>
    <mt-header title="美女管理系统"></mt-header>
    <router-view></router-view>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="Home">
        <img slot="icon"  src="../static/icons/v2.ico">
        首页
      </mt-tab-item>
      <mt-tab-item id="Member">
        <img slot="icon" src="../static/icons/v3.ico" >
        会员
      </mt-tab-item>
      <mt-tab-item id="Shop">
        <img slot="icon" src="../static/icons/v11.ico" >
        购物车
      </mt-tab-item>
      <mt-tab-item id="Mine">
        <img slot="icon"  src="../static/icons/v12.ico">
        查找
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      selected: '外卖'
    }
  },
  created() {
    
  },
  watch: {
    selected: function(newV, oldV) {
      
      this.$router.push({name: newV});
    }
  }
}
</script>

<style>

</style>
