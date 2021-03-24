<template lang="pug">
v-card.d-flex.flex-column.scroll(
    max-width="250"
    max-height="400"
    :elevation="10"
)
    v-img(
        max-height="250"
        :src="character.thumbnail"
    )
    v-card-title
        |   {{ character.name }}
    v-card-text
      h3.mb-2.text-decoration-underline Description
      div(v-if="character.description && character.description.length > 0")
        .subtitle-1 {{ character.description | truncate(200, '...') }}
      div(v-else)
        .subtitle-1 There is no description available
    v-spacer
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

<style scoped>
.scroll {
  overflow-y: scroll
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #555;
}

::-webkit-scrollbar-thumb:hover {
  background: black;
}
</style>
