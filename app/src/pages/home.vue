<template>
  <div id="home">
    <ul>
      <li>
        <img src="https://www.apple.com/v/macbook-pro/ah/images/overview/hero_13__d1tfa5zby7e6_large.jpg" alt="">
        <h2>MacBook Pro 13”</h2>
        <h4>售价 ¥1299</h4>
        <router-link to="/">查看详情</router-link>
      </li>
      <li>
        <img src="https://www.apple.com/v/macbook-pro/ah/images/overview/hero_13__d1tfa5zby7e6_large.jpg" alt="">
        <h2>MacBook Pro 13”</h2>
        <h4>售价 ¥1299</h4>
        <router-link to="/">查看详情</router-link>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'FHome',
  components: {
  },
}
</script>

<style lang="scss" scoped>
#home {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  ul {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-gap: 30px;
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>
