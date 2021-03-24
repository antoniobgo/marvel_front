<template lang="pug">
v-app
  v-app-bar(app)
    v-spacer
    h1 Marvel Database
    v-spacer
  v-main.mt-10
    v-container()
      router-view
</template>

<script>
import Home from '@/views/Home.vue'

export default {
  name: 'App',

  components: {
    Home
  }
}
</script>
