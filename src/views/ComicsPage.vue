<template lang="pug">
div
  div
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
    //- div(v-else)
    //-   v-progress-circular(
    //-     :size="100"
    //-     color="blue"
    //-     indeterminate
    //-   )
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
      itemsPerPage: 20
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
    }
  },
  methods: {
    requestCharacters (pageNumber) {
      axios.get('http://localhost:3000/api/v1/comics/' + this.character.id, { params: { pageNumber: pageNumber } })
        .then((response) => {
          this.populateComics(response.data.comics)
          this.totalComics = response.data.total
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
    }
  }
}
</script>
