<template lang="pug">
v-card.scroll(
    max-width="250"
    max-height="500"
)
    v-img(
        height="150"
        :src="comic.thumbnail"
    )
    v-card-title
      |   {{ comic.title }}
    v-card-text
      v-row.ma-0.pa-0
        h3.mb-2.mr-2.text-decoration-underline Páginas:
        div(v-if="comic.pageCount")
          .subtitle-1 {{ comic.pageCount }}
      h3.mb-2.text-decoration-underline Description
      div(v-if="comic.description && comic.description.length > 0")
        .subtitle-1 {{ comic.description | truncate(200, '...') }}
      div(v-else) There is no description available
      h3.mb-2.text-decoration-underline.mt-2 Variant Description
      div(v-if="comic.variantDescription && comic.variantDescription.length > 0")
        .subtitle-1 {{ comic.variantDescription | truncate(200, '...') }}
      div(v-else) There is no variant description available
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
