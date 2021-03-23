<template lang="pug">
v-card(
    max-width="250"
)
    v-img(
        height="150"
        :src="comic.thumbnail"
    )
    v-card-title
        |   {{ comic.title }}
    v-card-text(v-if="comic.description && comic.description.length > 0") {{ comic.description }}
    v-card-text(v-else) There is no description avaiable
    //- v-card-actions
    //-   v-btn check comics
</template>

<script>
export default {
  props: {
    comic: {
      type: Object,
      required: true
    }
  }
}
</script>
