<template>
  <div id="app">
    <header>
      <f-header/>
    </header>
    <main>
      <router-view />
    </main>
    <footer></footer>
  </div>
</template>

<script>
import FHeader from "@/components/FHeader";

export default {
  name: 'App',
  components: {
    FHeader,
  },
}
</script>

<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
}
ul,li {
  list-style: none;
}
a {
  text-decoration-color: transparent;
  color: #06c;
  &:hover {
    text-decoration-color: #0066cc;
  }
}
main {
  width: 1024px;
  margin: 0 auto;
}
</style>
