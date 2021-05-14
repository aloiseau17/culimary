<template>
  <main>
    <RecipeList />
  </main>
</template>

<script>
import RecipeList from '@/components/RecipeList'

export default {
  name: 'App',
  components: {
    RecipeList,
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
