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
      v-btn check comics
</template>

<script>
export default {
  props: {
    character: {
      type: Object,
      required: true
    }
  }
}
</script>
