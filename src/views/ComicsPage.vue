<template lang="pug">
div
  div(v-if="!loading")
    v-row.mb-3(justify="start")
      v-btn(
        @click="goToHome"
        outlined
      ) Back to characters page
    v-row(justify="center")
      h1.mb-10.pa-5.bordered {{ getMainMessage }}
    v-row(justify="center")
      div.central-block
          v-row(justify="center")
            template(v-for="comic in comics")
              comic-card(:comic="comic").ma-3
    //- v-divider
    v-row(justify="center").pa-10
          pagination-items(
            :totalPages="getTotalPagesArray"
            :currentPage="currentPage"
            @changePage="changeCurrentPage"
          )
  div(v-else)
    v-row(justify="center")
      v-progress-circular(
        :size="300"
        color="blue"
        indeterminate
      )
</template>

<script>
import ComicCard from '@/components/ComicCard.vue'
import PaginationItems from '@/components/PaginationItems.vue'
import { mapState } from 'vuex'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    ComicCard,
    PaginationItems
  },
  data () {
    return {
      comics: [],
      pageNumber: 1,
      currentPage: 1,
      totalComics: undefined,
      itemsPerPage: 20,
      loading: true
    }
  },
  beforeMount () {
    this.requestCharacters(1)
  },
  computed: {
    ...mapState(['character']),
    getTotalPagesArray () {
      const totalPages = this.getTotalPagesAndResetCurrentPage()
      return Array.from({ length: totalPages }, (_, index) => index + 1)
    },
    getMainMessage () {
      return this.totalComics > 0 ? 'Check all ' + this.character.name + ' comics!' : 'There is no comics available for ' + this.character.name + ' :('
    }
  },
  methods: {
    requestCharacters (pageNumber) {
      this.loading = true
      axios.get('http://localhost:3000/api/v1/comics/', { params: { character_id: this.character.id, pageNumber: pageNumber } })
        .then((response) => {
          this.populateComics(response.data.comics)
          this.totalComics = response.data.total
          this.loading = false
        })
    },
    changeCurrentPage (newCurrentPage) {
      this.requestCharacters(newCurrentPage)
      this.currentPage = newCurrentPage
      window.scrollTo(0, 0)
    },
    getTotalPagesAndResetCurrentPage () {
      this.currentPage = 1
      const lengthPerItems = parseInt(this.totalComics / this.itemsPerPage)
      if (this.totalComics % this.itemsPerPage === 0) return lengthPerItems
      return lengthPerItems + 1
    },
    populateComics (comicsArray) {
      this.comics = []
      comicsArray.forEach(comics => {
        this.addCharacter(comics)
      })
    },
    addCharacter (comicToAdd) {
      const comic = {
        title: comicToAdd.title,
        description: comicToAdd.description,
        thumbnail: comicToAdd.cover,
        pageCount: comicToAdd.pageCount,
        variantDescription: comicToAdd.variantDescription
      }
      this.comics.push(comic)
    },
    goToHome () {
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>

<style scoped>
.bordered {
  border: solid white 1px;
  border-radius: 13px;
}
</style>
