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
