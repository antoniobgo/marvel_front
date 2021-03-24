<template lang="pug">
div
  div
    v-row(justify="center").mb-5
      div.central-block
          v-row(justify="center")
            template(v-for="character in getPageCharacters")
              character-card(:character="character").ma-3
    v-divider
    v-row(justify="center").pa-10
        pagination-items(
          :totalPages="getTotalPagesArray"
          :currentPage="currentPage"
          @changePage="changeCurrentPage"
        )
  div
    v-progress-circular(
      :size="100"
      color="blue"
      indeterminate
    )
</template>

<script>
import CharacterCard from '@/components/CharacterCard.vue'
import PaginationItems from '@/components/PaginationItems'
import axios from 'axios'
import { mapState } from 'vuex'
// import _ from 'lodash'

export default {
  name: 'Home',
  components: {
    CharacterCard,
    PaginationItems
  },
  data () {
    return {
      itemsPerPage: 30,
      currentPage: 1
    }
  },
  beforeMount () {
    if (!this.isStoreInitialized) {
      axios.get('http://localhost:3000/api/v1/characters/')
        .then((response) => {
          if (response.status === 200) {
            this.populateCharacters(response.data)
          } else {
            // TODO
            console.log(response.status)
          }
        })
    }
  },
  computed: {
    ...mapState(['characters', 'isStoreInitialized']),
    getTotalPagesArray () {
      const totalPages = this.getTotalPagesAndResetCurrentPage()
      return Array.from({ length: totalPages }, (_, index) => index + 1)
    },
    getPageCharacters () {
      const pageCharacters = []
      for (
        let i = this.itemsPerPage * (this.currentPage - 1);
        i < this.itemsPerPage * this.currentPage;
        i++
      ) {
        if (this.characters[i]) pageCharacters.push(this.characters[i])
      }
      return pageCharacters
    }
  },
  methods: {
    changeCurrentPage (newCurrentPage) {
      this.currentPage = newCurrentPage
      window.scrollTo(0, 0)
    },
    populateCharacters (charactersArray) {
      this.$store.commit('setCharacters', charactersArray)
    },
    getTotalPagesAndResetCurrentPage () {
      this.currentPage = 1
      const lengthPerItems = parseInt(this.characters.length / this.itemsPerPage)
      if (this.characters.length % this.itemsPerPage === 0) return lengthPerItems
      return lengthPerItems + 1
    }
  }
}
</script>
