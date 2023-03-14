<template>
<div id="header">
  <img alt="Vue logo" src="../assets/logo.png">
  <nav>
    <span @click="goHome">首页</span>
    <span @click="goMarket">市场</span>
    <img @click="connect" src="../assets/metamask.webp" alt="">
    <span v-if="addr">{{ `${addr.substring(0,3)}...${addr.substring(addr.length-3,addr.length)}` }}</span>
  </nav>
  <vue-metamask ref="metamask" :initConnect="false" @onComplete="onComplete"></vue-metamask>
</div>
</template>

<script>
import VueMetamask from 'vue-metamask';
import { mapGetters,mapMutations } from 'vuex'
export default {
  name: "FHeader",
  components: {
    VueMetamask,
  },
  computed:{
    ...mapGetters({
      addr: 'user/addr'
    })
  },
  methods:{
    ...mapMutations({
      setAddr:'user/setAddr'
    }),
    goHome() {
      location.href = 'https://minefi.io'
    },
    goMarket() {
      location.href = location.origin
    },
    connect() {
      this.$refs.metamask.init();
    },
    onComplete(data) {
      this.setAddr(data.metaMaskAddress)
    }
  }
}
</script>

<style scoped lang="scss">
#header {
  height: 80px;
  padding: 0 25px;
  display: flex;
  align-items: center;
  background-color: white;
  box-shadow: 0 2px 3px rgba(0,0,0,.1);
  > nav {
    flex: 1;
    display: flex;
    align-items: center;
    > span {
      padding: 0 20px;
      cursor: pointer;
      &:hover {
        color: #e84e4e;
      }
    }
    > img {
      width: 32px;
      margin-left: auto;
      cursor: pointer;
    }
  }
}
</style>