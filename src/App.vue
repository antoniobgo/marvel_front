<template lang="pug">
v-app
  v-app-bar(app)
    v-spacer
    h3 Marvel Characteres
    v-spacer
  v-content.mt-10
    v-container
      router-view
</template>

<script>
import Home from '@/views/Home.vue'

export default {
  name: 'App',

  components: {
    Home
  },
  beforeMount () {
    this.$store.commit('initializeStore')
  }
}
</script>
