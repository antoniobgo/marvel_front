<template lang="pug">
  v-row(justify="center")
    div.central-block
        v-row(justify="center")
          character-card
          character-card
          character-card
          character-card
          character-card
          character-card
          character-card
          character-card
          character-card
</template>

<script>
// @ is an alias to /src
import CharacterCard from '@/components/CharacterCard.vue'

export default {
  name: 'Home',
  components: {
    CharacterCard
  }
}
</script>

<style scoped>
.central-block {
  width: 65vw;
}
</style>
