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
    v-card-title.pb-0
        |   {{ character.name }}
    v-card-text
      v-tooltip(right)
        template(v-slot:activator="{on, attrs}")
          v-btn.mb-1(
            @click="goToCharacterComicPage"
            v-on="on"
            v-bind="attrs"
            depressed
            icon
            large
            )
              v-icon mdi-book-open-blank-variant
        span Check all character's comics!
      h3.mb-2.text-decoration-underline Description
      div(v-if="character.description && character.description.length > 0")
        .subtitle-1 {{ character.description | truncate(200, '...') }}b
      div(v-else)
        .subtitle-1 There is no description available
    v-spacer
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
