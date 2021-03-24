<template lang="pug">
v-card(
    max-width="250"
)
    v-img(
        height="150"
        :src="character.thumbnail"
    )
    v-card-title
        |   {{ character.name }}
    v-card-text {{ character.description }}
    v-card-actions
      v-row(justify="center").ma-0
        v-btn(@click="goToCharacterComicPage") check comics
</template>

<script>
export default {
  props: {
    character: {
      type: Object,
      required: true
    }
  },
  methods: {
    goToCharacterComicPage () {
      this.$store.commit('setCurrentCharacter', this.character)
      this.$router.push('Comics')
    }
  }
}
</script>
